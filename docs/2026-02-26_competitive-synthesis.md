# Competitive Synthesis: Shiori.sh, Minimal.so, and Epic Itineraries

**Date:** 26 February 2026
**Source:** Team analysis (Researcher, Architect, Strategist, Designer, Writer, PM)

---

## Core Insight

EI is not a bookmark manager. Shiori and Minimal are general-purpose tools in a crowded horizontal market. EI occupies a unique quadrant: **travel-specific AND intelligent**. The real competitor is **Mindtrip.ai** (VC-backed, iOS app, AI itineraries from content) — but they go itinerary-first while EI goes research-first.

The value of studying Shiori and Minimal is in their **craft**, not their category.

---

## Now / Next / Later

### NOW (highest leverage, protect the economics)

1. **Rate limit AI itinerary generation + Jina API** — Non-negotiable before any viral moment. EI already has Upstash Redis rate limiting on extension/metadata endpoints. Extend to AI generation. Suggested limits:
   - Saves per day: 50 (free), 200 (pro)
   - AI itinerary generations per day: 3 (free), 5 (pro)

2. **Privacy & Terms** — DONE. Rewritten: ~280 and ~350 words, concise, human, EI-specific. Committed `32d917c`.

3. **Update extension page copy** — Brave, Arc, Vivaldi, Edge already work with the Chrome extension. Say so. Zero effort, instant reach expansion.

4. **Freemium pricing model** — Implement gates in the app:
   - **Free:** 1 collection, unlimited saves within it, 3 AI generations/month
   - **Pro ($4.99/mo or $39.99/yr):** Unlimited collections, unlimited saves, 20 AI generations/month, collaborative collections, export (PDF, Google Maps)

### NEXT (validated direction, needs scoping)

5. **`/get` page** — Consolidate extension + PWA install into one page. Two-card layout ("On your computer" / "On your phone"), PWA install guide, roadmap section. Design brief documented below.

6. **Firefox extension** — WXT supports it natively (`wxt build --browser firefox`). Main risk: auth flow uses `chrome.runtime.onMessageExternal` which Firefox doesn't support. ~1.5 days.

7. **Edge Add-ons submission** — Same Chrome build, free, ~0.5 day.

8. **Public API + MCP** — EI already has 14 API route files (extension, ChatGPT MCP, public read). Strategic play: enable AI agents (Claude, ChatGPT, etc.) to interact with collections, saved items, and itineraries. Users should be able to save, organise, and plan from within their AI tools.

### LATER (interesting but premature)

9. **Changelog** — Blog-first approach, not Minimal-style developer changelog. EI's audience is travellers. In-app "What's New" when user base justifies it.

10. **Safari extension** — Apple simplifying submissions but still $99/yr. Revisit in 6 months.

11. **Desktop app** — PWA covers this. Don't build.

12. **YouTube transcript extraction** — High value for AI itineraries but not urgent.

13. **X/Twitter bookmark sync** — Travel inspiration starts on X. Medium priority.

---

## Pricing Model

| Feature | Free | Pro ($4.99/mo) |
|---------|------|----------------|
| Save links | Unlimited | Unlimited |
| Collections | 1 | Unlimited |
| AI itineraries | 3/month | 20/month |
| Collaborative collections | View only | Full collaboration |
| Export | — | PDF, Google Maps |
| Extension | Yes | Yes |
| Support | Community | Email |

**Why 1 free collection:** Clean, simple gate. One trip's research is genuinely useful. The upgrade trigger is natural — when someone plans their second trip.

**Why $4.99:** Less than a coffee. Travel tools compete with free alternatives (Google Docs, bookmarks). Needs to feel like a no-brainer when planning a trip you'll spend thousands on.

---

## Browser Extension Strategy

| Browser | Effort | Priority |
|---------|--------|----------|
| Brave/Arc/Vivaldi | Zero — already works via Chrome Web Store | Immediate (just update copy) |
| Edge | 0.5 day — same build, free store submission | Next sprint |
| Firefox | 1.5 days — WXT supports it, auth flow risk | Next sprint |
| Opera | 0.5 day — easy via Opera Addons | Low priority |
| Safari | 3-5 days, $99/yr — wait for Apple improvements | 6 months |

**Key risk:** Firefox auth flow. `chrome.runtime.onMessageExternal` doesn't work in Firefox. Content script fallback should work but needs testing.

---

## `/get` Page Design Brief

**URL:** `/get` (rename nav from "Extension" to "Get")

**Structure:**
1. **Hero** — "Take it everywhere." No hero image, solid background.
2. **Two platform cards** — "On your computer" (extension) / "On your phone" (PWA share sheet). Decisive, not overwhelming.
3. **PWA install guide** — "Add it to your home screen." iPhone + Android steps. Never say "PWA".
4. **What's coming** — Status pills: Chrome (available), Edge/Brave/Arc (compatible), Firefox (coming soon), Safari (coming soon), Desktop (exploring).
5. **FAQ** — Is it free? Which browsers? What data does the extension collect?
6. **Bottom CTA** — Reuse existing component.

---

## API + MCP Strategy

EI already has substantial API infrastructure:
- Extension API (`/api/extension/links`, `/api/extension/collections`)
- ChatGPT MCP server (`/api/chatgpt/mcp/`)
- Public read API (`/api/public/collections`, `/api/public/destinations`)
- Rate limiting via Upstash Redis (60 req/min per user)

**Recommendation:** Don't build a separate API. The MCP integration is the strategic play — AI agents accessing collections is a better differentiator than a REST API.

**Future direction:** Enable users to interact with EI from within AI tools (Claude, ChatGPT, etc.) — save links, manage collections, generate itineraries. This aligns with the trend of AI agents as primary interfaces.

---

## Competitive Threats

- **Low threat:** Shiori and Minimal directly (general-purpose, won't add travel features)
- **Medium threat:** "Good enough" general bookmark tools reducing perceived need for specialisation
- **High threat:** Mindtrip.ai (travel-specific, AI itineraries, VC-backed, iOS app)

**EI's defensible advantages:**
- Travel-specific content detection
- Research-first (not itinerary-first) user journey
- Content creator attribution (unique — no competitor does this)
- PWA with Web Share Target

---

## What Was Delivered This Session

| Deliverable | Location | Status |
|-------------|----------|--------|
| Hero image optimisation | `public/images/hero-mountain-landscape.webp` | Committed, pushed |
| Marketing copy reframe | 6 component files | Committed, pushed |
| Privacy policy | `src/pages/privacy.astro` | Committed, pushed |
| Terms of service | `src/pages/terms.astro` | Committed, pushed |
| Competitive analysis | `research/2026-02-26_competitive-analysis-shiori-minimal.md` | Committed, pushed |
| This synthesis | `docs/2026-02-26_competitive-synthesis.md` | This file |

---

*PM's parting challenge: "The biggest risk is building features instead of finding users. All of these recommendations are about the product. None are about distribution."*
