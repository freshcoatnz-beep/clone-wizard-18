#!/usr/bin/env node
/**
 * Postbuild prerender for the SPA.
 *
 * For every route below, writes dist/<route>/index.html using the built
 * dist/index.html as the template but with:
 *   - <title>, meta description, canonical, og:url, og:title, og:description
 *     overridden for that route
 *   - an <h1> + intro paragraph injected inside #root so non-JS crawlers
 *     (LinkedIn, Slack, Facebook, SEO scanners) see the page heading and
 *     content. React's createRoot().render() wipes #root on hydration,
 *     so there's no flash for real users.
 *
 * Static hosts (Lovable / Vercel / Netlify / Cloudflare) serve
 * /interior/index.html for /interior before falling back to the SPA
 * shell, so client-side routing keeps working unchanged.
 */
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const distDir = join(__dirname, '..', 'dist');
const templatePath = join(distDir, 'index.html');

if (!existsSync(templatePath)) {
  console.error('[prerender] dist/index.html not found — run vite build first');
  process.exit(1);
}

const BASE = 'https://www.freshcoat.co.nz';
const template = readFileSync(templatePath, 'utf8');

const esc = (s) =>
  String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
const escAttr = (s) => esc(s).replace(/"/g, '&quot;');

/**
 * Per-route SEO + H1 manifest. Keep curated and concise — these are the
 * exact strings crawlers will index, so quality matters more than volume.
 */
const routes = [
  {
    path: '/',
    title: 'Painters Christchurch | House Painters | Freshcoat',
    description:
      "Painters Christchurch — house painting company. Interior, exterior & roof painting across Christchurch & Canterbury. 30+ years, 5-year warranty. Free quote!",
    h1: 'Painters Christchurch — House Painting Company',
    intro:
      "Leading painters in Christchurch — interior, exterior and roof painting for homes and businesses across Canterbury. Google rated, 30+ years' experience and a 5-year guarantee. Serving Fendalton, Merivale, Riccarton, Ilam, Papanui, Cashmere and all Christchurch suburbs.",
  },
  {
    path: '/interior',
    title: 'Interior Painters Christchurch | Free Quote in 24 Hours',
    description:
      'Interior painters in Christchurch — walls, ceilings, doors and trim. Tidy crews, low-odour paints, 5-year guarantee. Free quote in 24 hours.',
    h1: 'Interior House Painting Christchurch',
    intro:
      'Full interior repaints, single rooms, ceilings, trim and doors. Low-VOC paints, meticulous prep and a 5-year workmanship guarantee on every job.',
  },
  {
    path: '/exterior',
    title: 'Exterior House Painters Christchurch | Weatherboard & Plaster',
    description:
      'Exterior house painting in Christchurch — weatherboard, plaster, brick and cladding. Premium Resene & Dulux systems with a 5-year workmanship warranty.',
    h1: 'Exterior House Painting Christchurch',
    intro:
      'Weatherboard, plaster and exterior cladding repaints with thorough surface preparation and long-lasting protective coatings built for Canterbury weather.',
  },
  {
    path: '/roof-painting',
    title: 'Roof Painters Christchurch | Free Quote in 24 Hours',
    description:
      "Christchurch roof painters — tile, metal and Colorsteel roof painting and restoration. 30+ years' experience, 5-year guarantee, free quote in 24 hours.",
    h1: 'Roof Painters Christchurch — Professional Roof Painting & Repainting',
    intro:
      'Professional roof painters in Christchurch specialising in roof painting, roof repainting and full roof restoration for concrete tile, metal and Colorsteel roofs across Canterbury.',
  },
  {
    path: '/commercial',
    title: 'Commercial Painters Christchurch | Free Quote in 24 Hrs',
    description:
      'Commercial and industrial painters in Christchurch — offices, retail, warehouses and factories. Fully insured, after-hours work, free quote in 24 hours.',
    h1: 'Commercial & Industrial Painters Christchurch',
    intro:
      'Commercial and industrial painting in Christchurch — offices, retail, warehouses, factories and body-corporate buildings. After-hours scheduling, Site Safe compliant crews and a 5-year workmanship warranty.',
  },
  {
    path: '/house-preparation',
    title: 'House Preparation for Painting | Freshcoat Christchurch',
    description:
      'Thorough house preparation before painting — surface cleaning, sanding, crack repair, priming and full prep. The foundation of every quality repaint.',
    h1: 'House Preparation for Painting',
    intro:
      'Surface cleaning, sanding, crack repair, caulking, spot-priming and full preparation — the foundation of every long-lasting repaint.',
  },
  {
    path: '/about',
    title: 'About Freshcoat Painting | Christchurch Painter & Decorator',
    description:
      'Meet Michael, a fully qualified painter and decorator in Christchurch with 30 years experience. Specialising in spray finishing, wall coverings, and specialist coatings.',
    h1: 'About Freshcoat Painting and Decorating',
    intro:
      "Hi, I'm Michael — a fully qualified painter and decorator with 30 years' experience. I cover all aspects of the trade, including spray finishing, wall coverings, and specialist coatings, and I pride myself on delivering a professional, timely service across Christchurch.",
  },
  {
    path: '/painting-cost-guide',
    title: 'House Painting Cost Christchurch 2026 | Price Guide',
    description:
      'Transparent 2026 pricing for house painting in Christchurch. Interior, exterior and roof painting costs explained with real project examples.',
    h1: 'House Painting Cost Guide Christchurch (2026)',
    intro:
      'Transparent 2026 pricing for interior, exterior and roof painting in Christchurch — with real project examples and no hidden fees.',
  },
  {
    path: '/house-painters-christchurch',
    title: 'House Painters Christchurch | Residential Painting Services',
    description:
      'House painters Christchurch — interior, exterior and roof painting across every Christchurch suburb. 30+ years experience, 5-year warranty, free quotes.',
    h1: 'House Painters Christchurch',
    intro:
      'Residential painting services across every Christchurch suburb — interior, exterior and roof painting backed by a 5-year workmanship warranty.',
  },
  {
    path: '/painter-and-decorator-christchurch',
    title: 'Painter & Decorator Christchurch | Freshcoat Painting',
    description:
      'Painter and decorator in Christchurch — meticulous prep, premium products and a flawless finish on interior and exterior work. 5-year guarantee.',
    h1: 'Painter and Decorator Christchurch',
    intro:
      'Painter and decorator services across Christchurch — meticulous prep, premium products and a flawless finish on every interior and exterior project.',
  },
  {
    path: '/winter-interior-painting-christchurch',
    title: 'Winter Interior Painting Christchurch | Freshcoat Painting',
    description:
      'Winter is the best time to repaint your Christchurch home interior. Low-VOC paints, fast drying times and a 5-year guarantee. Book your free quote today.',
    h1: 'Winter Interior Painting Christchurch',
    intro:
      'Winter is the ideal season for interior repaints in Christchurch. Low-VOC paints, fast drying times and a 5-year workmanship guarantee.',
  },
  {
    path: '/projects',
    title: 'Painting Projects Christchurch | Freshcoat Case Studies',
    description:
      'Real Christchurch painting projects from Freshcoat — interior, exterior, roof and commercial case studies with before/after photos and project details.',
    h1: 'Our Painting Projects',
    intro:
      'Real Christchurch painting case studies — interior, exterior, roof and commercial projects with photos, materials and timeframes.',
  },
  {
    path: '/google-business-profile-checklist',
    title: 'Google Business Profile Checklist for Tradies | Freshcoat',
    description:
      'A practical Google Business Profile checklist for Christchurch tradies and small businesses — the exact steps to rank in the local 3-pack.',
    h1: 'Google Business Profile Checklist',
    intro:
      'A practical Google Business Profile checklist — the exact steps Christchurch tradies need to rank in the local 3-pack.',
  },
  {
    path: '/review-us',
    title: 'Leave a Google Review | Freshcoat Painting and Decorating',
    description:
      'Happy with our painting? Leave Freshcoat Painting and Decorating a quick Google review. It takes 30 seconds and helps other Christchurch homeowners find us.',
    h1: 'Leave a Google Review for Freshcoat',
    intro:
      'Leave Freshcoat Painting and Decorating a quick Google review. It takes 30 seconds and helps other Christchurch homeowners and businesses find a painter they can trust.',
  },
];

// Suburb routes — assembled from src/data/suburbs.ts
const suburbs = [
  ['riccarton', 'Riccarton'],
  ['merivale', 'Merivale'],
  ['papanui', 'Papanui'],
  ['fendalton', 'Fendalton'],
  ['ilam', 'Ilam'],
  ['cashmere', 'Cashmere'],
  ['sumner', 'Sumner'],
  ['rolleston', 'Rolleston'],
  ['bryndwr', 'Bryndwr'],
  ['halswell', 'Halswell'],
  ['st-albans', 'St Albans'],
  ['spreydon', 'Spreydon'],
  ['beckenham', 'Beckenham'],
  ['sydenham', 'Sydenham'],
  ['burnside', 'Burnside'],
  ['avonhead', 'Avonhead'],
  ['hornby', 'Hornby'],
  ['lincoln', 'Lincoln'],
];
for (const [slug, name] of suburbs) {
  routes.push({
    path: `/painters/${slug}`,
    title: `${name} House Painter | Free Quote in 24 Hours`,
    description: `${name} house painter — interior, exterior and roof painting in Christchurch. 30+ years' experience, 5-year guarantee, free quote in 24 hours.`,
    h1: `${name} Painters — Freshcoat Painting`,
    intro: `Trusted painters serving ${name} and surrounding Christchurch suburbs. Interior, exterior and roof painting with a 5-year workmanship guarantee.`,
  });
}

// Project case studies — assembled from src/data/projects.ts
const projects = [
  {
    slug: 'exterior-repaint-fendalton-weatherboard',
    h1: 'Exterior Weatherboard Repaint — Fendalton Character Home',
    title: 'Exterior Weatherboard Painting Fendalton | Before & After',
    description:
      'See how Freshcoat transformed a weathered Fendalton character home with a full exterior repaint. Premium Resene coatings, thorough prep, and a 5-year guarantee.',
    intro:
      'A full exterior weatherboard repaint on a 1960s Fendalton character home — from tired, peeling paint to a fresh, durable finish backed by our 5-year guarantee.',
  },
  {
    slug: 'interior-painting-three-bedroom-christchurch',
    h1: 'Full Interior Repaint — 3-Bedroom Christchurch Home',
    title: 'Interior House Painting Cost Christchurch | 3 Bedroom Guide',
    description:
      'How long does interior painting take for a 3-bedroom home in Christchurch? See our real project timeline, costs and process — with a 5-year guarantee.',
    intro:
      'A complete interior repaint of a 3-bedroom Christchurch family home — ceilings, walls, trim and doors — finished in 5 days with zero disruption to the household.',
  },
  {
    slug: 'roof-restoration-merivale-tile-roof',
    h1: 'Roof Restoration — Merivale Concrete Tile Roof',
    title: 'Roof Painting Merivale Christchurch | Tile Roof Restoration',
    description:
      'See how Freshcoat restored a faded concrete tile roof in Merivale using specialised roof coatings. 10+ year coating life, moss treatment and full guarantee.',
    intro:
      'A complete roof restoration on a 25-year-old concrete tile roof in Merivale — moss treatment, pressure wash, repairs and a premium coating system.',
  },
  {
    slug: 'new-build-painting-rolleston',
    h1: 'New-Build Painting — Rolleston Family Home',
    title: 'New Build Painters Rolleston Christchurch | Freshcoat',
    description:
      'Premium new-build painting for a Rolleston family home. We work with builders and homeowners to deliver flawless finishes from pre-paint inspection to handover.',
    intro:
      'Working alongside a local builder, we delivered the interior and exterior painting for a new 4-bedroom home in Rolleston — from gib stopping to the final coat.',
  },
  {
    slug: 'commercial-office-repaint-riccarton',
    h1: 'Commercial Office Repaint — Riccarton Business Park',
    title: 'Commercial Painters Riccarton Christchurch | Office Painting',
    description:
      'Minimal-disruption commercial painting for a Riccarton office suite. Evening and weekend work, fast turnaround, and a professional finish.',
    intro:
      'A 300m² office suite repaint in Riccarton completed over two weekends with zero disruption to the Monday–Friday business operations.',
  },
  {
    slug: 'painting-cost-guide-2026-christchurch',
    h1: 'How Much Does House Painting Cost in Christchurch? (2026 Guide)',
    title: 'House Painting Cost Christchurch 2026 | Price Guide',
    description:
      'Transparent 2026 pricing for house painting in Christchurch. Interior, exterior and roof painting costs explained — with real project examples and no hidden fees.',
    intro:
      'A transparent breakdown of what house painting costs in Christchurch in 2026 — from interior rooms to full exteriors and roof restorations.',
  },
];
for (const p of projects) {
  routes.push({
    path: `/projects/${p.slug}`,
    title: p.title,
    description: p.description,
    h1: p.h1,
    intro: p.intro,
  });
}

function buildHtml(route) {
  const url = `${BASE}${route.path === '/' ? '/' : route.path}`;
  let html = template;

  // <title>
  html = html.replace(
    /<title>[\s\S]*?<\/title>/,
    `<title>${esc(route.title)}</title>`
  );

  // meta description (replace first match)
  html = html.replace(
    /<meta\s+name="description"[^>]*>/i,
    `<meta name="description" content="${escAttr(route.description)}" />`
  );

  // canonical
  if (/<link\s+rel="canonical"[^>]*>/i.test(html)) {
    html = html.replace(
      /<link\s+rel="canonical"[^>]*>/i,
      `<link rel="canonical" href="${escAttr(url)}" />`
    );
  } else {
    html = html.replace(
      /<\/head>/i,
      `    <link rel="canonical" href="${escAttr(url)}" />\n  </head>`
    );
  }

  // og:url
  if (/<meta\s+property="og:url"[^>]*>/i.test(html)) {
    html = html.replace(
      /<meta\s+property="og:url"[^>]*>/i,
      `<meta property="og:url" content="${escAttr(url)}" />`
    );
  } else {
    html = html.replace(
      /<\/head>/i,
      `    <meta property="og:url" content="${escAttr(url)}" />\n  </head>`
    );
  }

  // og:title / og:description (override sitewide defaults)
  html = html.replace(
    /<meta\s+property="og:title"[^>]*>/i,
    `<meta property="og:title" content="${escAttr(route.title)}" />`
  );
  html = html.replace(
    /<meta\s+property="og:description"[^>]*>/i,
    `<meta property="og:description" content="${escAttr(route.description)}" />`
  );

  // Inject H1 + intro inside #root. React's createRoot().render() will
  // replace these children on hydration — they exist purely for crawlers.
  const seoBlock = `<div id="root"><h1>${esc(route.h1)}</h1><p>${esc(route.intro)}</p></div>`;
  html = html.replace(/<div id="root"><\/div>/, seoBlock);

  return html;
}

let written = 0;
for (const route of routes) {
  const html = buildHtml(route);
  const outPath =
    route.path === '/'
      ? join(distDir, 'index.html')
      : join(distDir, route.path.replace(/^\//, ''), 'index.html');
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, html);
  written++;
}

console.log(`[prerender] wrote ${written} static HTML files`);