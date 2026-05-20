// Nightly SEO scan for freshcoat.co.nz
// Crawls the sitemap, runs basic SEO checks against each page,
// diffs findings vs the previous run, stores results, and emails a report.

import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const SITE = "https://www.freshcoat.co.nz";
const SITEMAP = `${SITE}/sitemap.xml`;
const REPORT_TO = "michael@freshcoat.co.nz";
const REPORT_FROM = "Freshcoat SEO Bot <onboarding@resend.dev>";

type Finding = { url: string; check_type: string; severity: "error" | "warning"; message: string };

async function fetchText(url: string): Promise<string | null> {
  try {
    const r = await fetch(url, { headers: { "user-agent": "FreshcoatSEOBot/1.0" } });
    if (!r.ok) return null;
    return await r.text();
  } catch {
    return null;
  }
}

function extractUrls(sitemap: string): string[] {
  return [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim());
}

function pick(html: string, re: RegExp): string | null {
  const m = html.match(re);
  return m ? m[1].trim() : null;
}

function checkPage(url: string, html: string): Finding[] {
  const out: Finding[] = [];
  const title = pick(html, /<title[^>]*>([^<]*)<\/title>/i);
  if (!title) out.push({ url, check_type: "missing_title", severity: "error", message: "Missing <title> tag" });
  else if (title.length < 10) out.push({ url, check_type: "short_title", severity: "warning", message: `Title too short (${title.length} chars): "${title}"` });
  else if (title.length > 65) out.push({ url, check_type: "long_title", severity: "warning", message: `Title too long (${title.length} chars)` });

  const desc = pick(html, /<meta[^>]+name=["']description["'][^>]+content=["']([^"']*)["']/i);
  if (!desc) out.push({ url, check_type: "missing_description", severity: "error", message: "Missing meta description" });
  else if (desc.length < 50) out.push({ url, check_type: "short_description", severity: "warning", message: `Meta description too short (${desc.length} chars)` });
  else if (desc.length > 165) out.push({ url, check_type: "long_description", severity: "warning", message: `Meta description too long (${desc.length} chars)` });

  const canonical = pick(html, /<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']*)["']/i);
  if (!canonical) out.push({ url, check_type: "missing_canonical", severity: "error", message: "Missing canonical link" });
  else if (!canonical.startsWith("https://www.freshcoat.co.nz")) out.push({ url, check_type: "wrong_canonical_host", severity: "error", message: `Canonical not on www.freshcoat.co.nz: ${canonical}` });

  const ogUrl = pick(html, /<meta[^>]+property=["']og:url["'][^>]+content=["']([^"']*)["']/i);
  if (!ogUrl) out.push({ url, check_type: "missing_og_url", severity: "warning", message: "Missing og:url" });
  else if (!ogUrl.startsWith("https://www.freshcoat.co.nz")) out.push({ url, check_type: "wrong_og_url_host", severity: "error", message: `og:url not on www.freshcoat.co.nz: ${ogUrl}` });

  if (!/<meta[^>]+property=["']og:title["']/i.test(html)) out.push({ url, check_type: "missing_og_title", severity: "warning", message: "Missing og:title" });
  if (!/<meta[^>]+property=["']og:image["']/i.test(html)) out.push({ url, check_type: "missing_og_image", severity: "warning", message: "Missing og:image" });

  const h1Count = (html.match(/<h1\b/gi) || []).length;
  if (h1Count === 0) out.push({ url, check_type: "missing_h1", severity: "error", message: "No H1 on page" });
  else if (h1Count > 1) out.push({ url, check_type: "multiple_h1", severity: "warning", message: `${h1Count} H1 tags on page (should be 1)` });

  return out;
}

async function sendReport(subject: string, html: string) {
  const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
  const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
  if (!LOVABLE_API_KEY || !RESEND_API_KEY) {
    console.error("Missing email keys; skipping send");
    return false;
  }
  const r = await fetch("https://connector-gateway.lovable.dev/resend/emails", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${LOVABLE_API_KEY}`,
      "x-connection-api-key": RESEND_API_KEY,
    },
    body: JSON.stringify({ from: REPORT_FROM, to: [REPORT_TO], subject, html }),
  });
  if (!r.ok) {
    console.error("Resend failed", r.status, await r.text());
    return false;
  }
  return true;
}

function renderReport(opts: {
  scannedAt: Date;
  pages: number;
  findings: Finding[];
  newFindings: Finding[];
  resolvedFindings: Finding[];
}) {
  const { scannedAt, pages, findings, newFindings, resolvedFindings } = opts;
  const fmt = (list: Finding[]) =>
    list.length === 0
      ? "<p style='color:#666'>None</p>"
      : `<ul>${list
          .map(
            (f) =>
              `<li><strong>${f.severity.toUpperCase()}</strong> — <code>${f.check_type}</code><br><a href="${f.url}">${f.url}</a><br>${f.message}</li>`
          )
          .join("")}</ul>`;

  return `
    <div style="font-family:Arial,sans-serif;max-width:680px;color:#1a1a1a">
      <h2>Freshcoat nightly SEO scan</h2>
      <p>${scannedAt.toISOString()}</p>
      <table cellpadding="6" style="border-collapse:collapse;border:1px solid #ddd">
        <tr><td>Pages scanned</td><td><strong>${pages}</strong></td></tr>
        <tr><td>Total open issues</td><td><strong>${findings.length}</strong></td></tr>
        <tr><td>New since last scan</td><td><strong style="color:#c00">${newFindings.length}</strong></td></tr>
        <tr><td>Resolved since last scan</td><td><strong style="color:#0a7">${resolvedFindings.length}</strong></td></tr>
      </table>
      <h3>🆕 New issues</h3>${fmt(newFindings)}
      <h3>✅ Resolved issues</h3>${fmt(resolvedFindings)}
      <h3>All open issues</h3>${fmt(findings)}
      <hr>
      <p style="font-size:12px;color:#888">Automated by Freshcoat SEO Bot · ${SITE}</p>
    </div>`;
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });

  const supabase = createClient(
    Deno.env.get("SUPABASE_URL")!,
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
  );

  const sitemap = await fetchText(SITEMAP);
  if (!sitemap) {
    return new Response(JSON.stringify({ error: "sitemap fetch failed" }), {
      status: 500,
      headers: { ...corsHeaders, "content-type": "application/json" },
    });
  }
  const urls = extractUrls(sitemap);

  const findings: Finding[] = [];
  for (const url of urls) {
    const html = await fetchText(url);
    if (!html) {
      findings.push({ url, check_type: "fetch_failed", severity: "error", message: "Page did not return 200" });
      continue;
    }
    findings.push(...checkPage(url, html));
  }

  // Get previous scan's findings for diff
  const { data: prevScan } = await supabase
    .from("seo_scans")
    .select("id")
    .order("scanned_at", { ascending: false })
    .limit(1)
    .maybeSingle();

  let prevFindings: Finding[] = [];
  if (prevScan?.id) {
    const { data } = await supabase
      .from("seo_scan_findings")
      .select("url,check_type,severity,message")
      .eq("scan_id", prevScan.id);
    prevFindings = (data as Finding[]) ?? [];
  }

  const key = (f: Finding) => `${f.url}|${f.check_type}|${f.message}`;
  const prevKeys = new Set(prevFindings.map(key));
  const currKeys = new Set(findings.map(key));
  const newFindings = findings.filter((f) => !prevKeys.has(key(f)));
  const resolvedFindings = prevFindings.filter((f) => !currKeys.has(key(f)));

  // Persist scan
  const scannedAt = new Date();
  const { data: scan, error: scanErr } = await supabase
    .from("seo_scans")
    .insert({
      scanned_at: scannedAt.toISOString(),
      total_pages: urls.length,
      total_issues: findings.length,
      new_issues: newFindings.length,
      resolved_issues: resolvedFindings.length,
    })
    .select("id")
    .single();
  if (scanErr || !scan) {
    console.error("scan insert failed", scanErr);
    return new Response(JSON.stringify({ error: scanErr?.message }), { status: 500, headers: corsHeaders });
  }

  if (findings.length) {
    await supabase
      .from("seo_scan_findings")
      .insert(findings.map((f) => ({ ...f, scan_id: scan.id })));
  }

  // Send report (every night, as requested)
  const subject = `[SEO] ${newFindings.length} new · ${findings.length} open · ${urls.length} pages`;
  const html = renderReport({ scannedAt, pages: urls.length, findings, newFindings, resolvedFindings });
  const emailSent = await sendReport(subject, html);
  if (emailSent) {
    await supabase.from("seo_scans").update({ email_sent: true }).eq("id", scan.id);
  }

  return new Response(
    JSON.stringify({
      scan_id: scan.id,
      pages: urls.length,
      total_issues: findings.length,
      new_issues: newFindings.length,
      resolved_issues: resolvedFindings.length,
      email_sent: emailSent,
    }),
    { headers: { ...corsHeaders, "content-type": "application/json" } }
  );
});