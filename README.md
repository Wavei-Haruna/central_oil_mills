# SEO pack: Kakum Fresh / Central Oil Mills

## Drop-in files
- app/layout.tsx, app/robots.ts, app/sitemap.ts, app/manifest.ts
- lib/site.ts, components/json-ld.tsx

## 1. Update globals.css (fonts were renamed)
Old v0 variables (--font-alumni, --font-accent, --font-mono) are gone.
Use --font-heading (Fredoka) and --font-body (Nunito Sans). In Tailwind v4:

@theme inline {
  --font-heading: var(--font-heading);
  --font-body: var(--font-body);
}
Then use `font-heading` on headings and `font-body` on body.

## 2. Add these files to /public
- og-image.jpg (1200x630, Kakum Fresh banner + product shot)
- logo.png, favicon.ico, icon-192.png, icon-512.png, apple-touch-icon.png

## 3. Environment variables (Vercel)
- NEXT_PUBLIC_SITE_URL=https://<real domain>   (confirm domain access first)
- NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=<token from Search Console>

## 4. Remove v0 leftovers
- [ ] Delete any `generator: "v0.app"` field in metadata
- [ ] package.json: rename "my-v0-project" to "kakum-fresh"
- [ ] Remove every central-oil-mills-website.v0.build URL from code and nav
- [ ] Delete public/placeholder*.svg / placeholder*.png and unused v0 images
- [ ] next.config: remove images.unoptimized and typescript.ignoreBuildErrors if present
- [ ] Rewrite README.md (it still describes the v0 project)
- [ ] globals.css: remove unused v0 theme tokens and old font variables
- [ ] Search the repo for "v0", "alumni", "B&B", "Harmonics" and clean up hits

## 5. Page-level rules
- One H1 per page, matching the page's main keyword.
- Per-page `export const metadata` with a unique title (max 60 chars) and description (max 155).
- Product pages: add productJsonLd() ONLY with real prices.
- FAQ: add faqJsonLd() only if the Q&As are visible on the page.
- Image alt text: "Kakum Fresh [product] [size], palm oil made in Jukwa, Ghana".
- Use next/image with width/height and `priority` on the hero image.
- Single-page anchors (#shop, #story) cannot rank separately. Split into /shop, /about, /bulk, /delivery, /contact.

## 6. After launch
- Verify in Google Search Console and Bing Webmaster Tools, submit /sitemap.xml
- Create a Google Business Profile for the Jukwa location (once address is confirmed)
- Test with Rich Results Test and PageSpeed Insights
