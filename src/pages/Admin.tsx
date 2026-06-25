import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from "@/components/ui/table";
import { Helmet } from "@/lib/head";

const AdminHead = () => (
  <Helmet>
    <title>Admin Dashboard | Freshcoat</title>
    <meta name="description" content="Internal Freshcoat Painting admin dashboard for reviewing quote submissions and nightly SEO scan history." />
    <meta name="robots" content="noindex,nofollow" />
    <link rel="canonical" href="https://www.freshcoat.co.nz/admin" />
    <meta property="og:title" content="Admin Dashboard | Freshcoat" />
    <meta property="og:description" content="Internal Freshcoat Painting admin dashboard for quote submissions and SEO scan history." />
    <meta property="og:url" content="https://www.freshcoat.co.nz/admin" />
    <meta property="og:type" content="website" />
  </Helmet>
);

interface Scan {
  id: string;
  scanned_at: string;
  total_pages: number;
  total_issues: number;
  new_issues: number;
  resolved_issues: number;
  email_sent: boolean;
}

interface Finding {
  id: string;
  scan_id: string;
  url: string;
  check_type: string;
  severity: string;
  message: string;
}

interface QuoteSubmission {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string | null;
  service_type: string | null;
  message: string | null;
  source: string;
  status: string;
  created_at: string;
}


export default function Admin() {
  const { user, isAdmin, loading } = useAuth();
  const [scans, setScans] = useState<Scan[]>([]);
  const [selected, setSelected] = useState<Scan | null>(null);
  const [findings, setFindings] = useState<Finding[]>([]);
  const [prevFindings, setPrevFindings] = useState<Finding[]>([]);
  const [busy, setBusy] = useState(false);
  const [quotes, setQuotes] = useState<QuoteSubmission[]>([]);
  const [quotesLoading, setQuotesLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("quotes");

  useEffect(() => {
    if (!isAdmin) return;
    supabase
      .from("seo_scans")
      .select("*")
      .order("scanned_at", { ascending: false })
      .limit(60)
      .then(({ data }) => {
        const list = (data ?? []) as Scan[];
        setScans(list);
        if (list[0]) setSelected(list[0]);
      });
  }, [isAdmin]);

  useEffect(() => {
    if (!selected) return;
    (async () => {
      const { data: f } = await supabase
        .from("seo_scan_findings")
        .select("*")
        .eq("scan_id", selected.id);
      setFindings((f ?? []) as Finding[]);

      // Previous scan for diff
      const idx = scans.findIndex((s) => s.id === selected.id);
      const prev = scans[idx + 1];
      if (prev) {
        const { data: pf } = await supabase
          .from("seo_scan_findings")
          .select("*")
          .eq("scan_id", prev.id);
        setPrevFindings((pf ?? []) as Finding[]);
      } else {
        setPrevFindings([]);
      }
    })();
  }, [selected, scans]);

  const loadQuotes = async () => {
    if (!isAdmin) return;
    setQuotesLoading(true);
    const { data } = await supabase
      .from("quote_submissions")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(200);
    setQuotes((data ?? []) as QuoteSubmission[]);
    setQuotesLoading(false);
  };

  useEffect(() => {
    if (activeTab === "quotes") {
      loadQuotes();
    }
  }, [activeTab, isAdmin]);

  const { newKeys, resolvedKeys, urlGroups } = useMemo(() => {
    const key = (f: Pick<Finding, "url" | "check_type" | "message">) =>
      `${f.url}|${f.check_type}|${f.message}`;
    const cur = new Set(findings.map(key));
    const prev = new Set(prevFindings.map(key));
    const newKeys = new Set([...cur].filter((k) => !prev.has(k)));
    const resolvedKeys = new Set([...prev].filter((k) => !cur.has(k)));
    const resolvedList = prevFindings.filter((f) => resolvedKeys.has(key(f)));

    // Group by URL — include current findings + resolved ones (marked separately)
    const map = new Map<string, { current: Finding[]; resolved: Finding[] }>();
    for (const f of findings) {
      if (!map.has(f.url)) map.set(f.url, { current: [], resolved: [] });
      map.get(f.url)!.current.push(f);
    }
    for (const f of resolvedList) {
      if (!map.has(f.url)) map.set(f.url, { current: [], resolved: [] });
      map.get(f.url)!.resolved.push(f);
    }
    const urlGroups = [...map.entries()].sort(
      (a, b) => b[1].current.length - a[1].current.length
    );
    return { newKeys, resolvedKeys, urlGroups };
  }, [findings, prevFindings]);

  const runNow = async () => {
    setBusy(true);
    try {
      await supabase.functions.invoke("nightly-seo-scan", { body: {} });
      const { data } = await supabase
        .from("seo_scans")
        .select("*")
        .order("scanned_at", { ascending: false })
        .limit(60);
      const list = (data ?? []) as Scan[];
      setScans(list);
      if (list[0]) setSelected(list[0]);
    } finally {
      setBusy(false);
    }
  };

  if (loading) return <div className="min-h-screen bg-background" />;
  if (!user)
    return (
      <main className="min-h-screen flex items-center justify-center">
        <AdminHead />
        <Card className="p-6 space-y-3">
          <p>You need to sign in.</p>
          <Button asChild><Link to="/auth">Go to sign in</Link></Button>
        </Card>
      </main>
    );
  if (!isAdmin)
    return (
      <main className="min-h-screen flex items-center justify-center">
        <AdminHead />
        <Card className="p-6 space-y-3 max-w-md">
          <h2 className="font-semibold">Admin access required</h2>
          <p className="text-sm text-muted-foreground">
            Your account ({user.email}) is signed in but is not an admin. Ask an existing admin to grant the role, or
            add the role directly in the backend for user id:
          </p>
          <code className="text-xs block bg-muted p-2 rounded break-all">{user.id}</code>
          <Button variant="outline" onClick={() => supabase.auth.signOut()}>Sign out</Button>
        </Card>
      </main>
    );


  return (
    <main className="min-h-screen bg-background p-6">
      <AdminHead />
      <div className="max-w-7xl mx-auto space-y-6">
        <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold">Admin dashboard</h1>
            <p className="text-sm text-muted-foreground">Quote submissions and nightly SEO scan history for freshcoat.co.nz</p>
          </div>
          <div className="flex gap-2">
            <Button onClick={runNow} disabled={busy}>{busy ? "Running…" : "Run scan now"}</Button>
            <Button variant="outline" onClick={() => supabase.auth.signOut()}>Sign out</Button>
          </div>
        </header>

        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList>
            <TabsTrigger value="quotes">Quote submissions {quotes.length > 0 && `(${quotes.length})`}</TabsTrigger>
            <TabsTrigger value="seo">SEO scans</TabsTrigger>
          </TabsList>

          <TabsContent value="quotes" className="mt-6">
            <Card className="p-4">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-semibold">Recent quote requests</h2>
                <Button variant="outline" size="sm" onClick={loadQuotes} disabled={quotesLoading}>
                  {quotesLoading ? "Refreshing…" : "Refresh"}
                </Button>
              </div>
              {quotes.length === 0 ? (
                <p className="text-muted-foreground py-8 text-center">
                  {quotesLoading ? "Loading submissions…" : "No quote submissions yet."}
                </p>
              ) : (
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Date</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Contact</TableHead>
                        <TableHead>Service</TableHead>
                        <TableHead>Address</TableHead>
                        <TableHead>Message</TableHead>
                        <TableHead>Status</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {quotes.map((q) => (
                        <TableRow key={q.id}>
                          <TableCell className="whitespace-nowrap text-sm">
                            {new Date(q.created_at).toLocaleString()}
                          </TableCell>
                          <TableCell className="font-medium">{q.name}</TableCell>
                          <TableCell className="text-sm">
                            <div>{q.email}</div>
                            <div className="text-muted-foreground">{q.phone}</div>
                          </TableCell>
                          <TableCell>{q.service_type || "—"}</TableCell>
                          <TableCell className="max-w-[200px] truncate">{q.address || "—"}</TableCell>
                          <TableCell className="max-w-[250px] truncate">{q.message || "—"}</TableCell>
                          <TableCell>
                            <Badge variant={q.status === "new" ? "destructive" : "secondary"}>{q.status}</Badge>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              )}
            </Card>
          </TabsContent>

          <TabsContent value="seo" className="mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="p-4 lg:col-span-1">
                <h2 className="font-semibold mb-3">Scan history</h2>
                <div className="space-y-1 max-h-[70vh] overflow-y-auto">
                  {scans.map((s) => (
                    <button
                      key={s.id}
                      onClick={() => setSelected(s)}
                      className={`w-full text-left p-3 rounded-md border transition-colors ${
                        selected?.id === s.id ? "bg-accent border-primary" : "hover:bg-muted border-transparent"
                      }`}
                    >
                      <div className="text-sm font-medium">
                        {new Date(s.scanned_at).toLocaleString()}
                      </div>
                      <div className="text-xs text-muted-foreground flex gap-2 mt-1 flex-wrap">
                        <span>{s.total_issues} open</span>
                        {s.new_issues > 0 && <Badge variant="destructive">{s.new_issues} new</Badge>}
                        {s.resolved_issues > 0 && <Badge className="bg-emerald-600">{s.resolved_issues} fixed</Badge>}
                      </div>
                    </button>
                  ))}
                  {scans.length === 0 && (
                    <p className="text-sm text-muted-foreground">No scans yet.</p>
                  )}
                </div>
              </Card>

              <Card className="p-4 lg:col-span-2">
                {selected ? (
                  <>
                    <div className="flex flex-wrap items-baseline justify-between gap-2 mb-4">
                      <h2 className="font-semibold">
                        Scan · {new Date(selected.scanned_at).toLocaleString()}
                      </h2>
                      <div className="text-sm text-muted-foreground flex gap-3">
                        <span>{selected.total_pages} pages</span>
                        <span>{selected.total_issues} open</span>
                        <span className="text-destructive">{selected.new_issues} new</span>
                        <span className="text-emerald-600">{selected.resolved_issues} resolved</span>
                      </div>
                    </div>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>URL</TableHead>
                          <TableHead>Issues</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {urlGroups.map(([url, { current, resolved }]) => (
                          <TableRow key={url} className="align-top">
                            <TableCell className="font-mono text-xs max-w-[280px] break-words">
                              <a href={url} target="_blank" rel="noreferrer" className="hover:underline">
                                {url.replace("https://www.freshcoat.co.nz", "") || "/"}
                              </a>
                            </TableCell>
                            <TableCell>
                              <ul className="space-y-1 text-sm">
                                {current.map((f) => {
                                  const k = `${f.url}|${f.check_type}|${f.message}`;
                                  const isNew = newKeys.has(k);
                                  return (
                                    <li key={f.id} className="flex gap-2 items-start">
                                      {isNew && <Badge variant="destructive" className="text-[10px]">NEW</Badge>}
                                      <Badge variant={f.severity === "error" ? "destructive" : "secondary"} className="text-[10px]">
                                        {f.severity}
                                      </Badge>
                                      <span><strong className="font-mono text-xs">{f.check_type}</strong> — {f.message}</span>
                                    </li>
                                  );
                                })}
                                {resolved.map((f) => (
                                  <li key={f.id} className="flex gap-2 items-start opacity-70 line-through">
                                    <Badge className="bg-emerald-600 text-[10px]">RESOLVED</Badge>
                                    <span><strong className="font-mono text-xs">{f.check_type}</strong> — {f.message}</span>
                                  </li>
                                ))}
                              </ul>
                            </TableCell>
                          </TableRow>
                        ))}
                        {urlGroups.length === 0 && (
                          <TableRow>
                            <TableCell colSpan={2} className="text-center text-muted-foreground py-8">
                              No issues — clean scan ✨
                            </TableCell>
                          </TableRow>
                        )}
                      </TableBody>
                    </Table>
                  </>
                ) : (
                  <p className="text-muted-foreground">Select a scan to see details.</p>
                )}
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
}