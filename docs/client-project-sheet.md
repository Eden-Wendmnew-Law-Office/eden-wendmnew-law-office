# Client Project Sheet — Eden Wendmnew Law Office

The client's task list and state, kept at `docs/client-project-sheet.md` in the
client repository (filled by `npm run client:init`, SOP step 4). Site content
comes from the documents in `client/`; this sheet holds the agreement, tasks,
decisions and approvals.

Every session starts at **Current state** and, before ending, ticks the tasks it
finished (`- [x] … — YYYY-MM-DD`) and rewrites Current state.

## Current state

- **Stage:** 2. Build and review — surprise test site, no agreement yet (tasks 0–2 wait for Eden's yes)
- **Last done:** click-through on dev server, desktop 1366 and phone 390 — 2026-11-17. All pages 200, 404 works, every navbar/footer/section link resolves, no sideways scroll on phone, phone menu opens, images load with alt text, favicon and share image set, no console errors. Skipped as expected for the preview: form sending (placeholder key), map (hidden), `reviewed: true`. Dark mode checked by computed colors and `check:contrast`, not by screenshot. Found: navbar name truncates to "Eden Wendmnew La…" on phone and tablet (template behaviour, fix needs a component change); phone shows as +251941515310 without spaces
- **Next task:** 4. decide the navbar name, then Vercel preview, then the surprise message (Version 1)
- **Waiting on:** Biniam: navbar name decision, Vercel preview
- **Blockers:** none

## Project

| Field                      | Value                                                                |
| -------------------------- | -------------------------------------------------------------------- |
| Client                     | Eden Wendmnew Law Office                                             |
| Client slug                | eden-wendmnew-law-office                                             |
| Package                    | Digital Presence                                                     |
| Template version (tag)     | v1.6.0                                                               |
| Deposit paid (date)        |                                                                      |
| Group (Telegram/WhatsApp)  |                                                                      |
| Decision maker             |                                                                      |
| GitHub repository          | https://github.com/Eden-Wendmnew-Law-Office/eden-wendmnew-law-office |
| Logins stored at           |                                                                      |
| PageSpeed (mobile/desktop) |                                                                      |
| Host (Vercel / cPanel)     | Vercel                                                               |
| Preview URL                |                                                                      |
| Live URL                   |                                                                      |
| Final payment (date)       |                                                                      |

## Tasks

One per [`sop.md`](sop.md) step; the step has the details. The stage is the
first group with an unticked task.

**Stage 1 — Prepare**

- [ ] 0. Proposal confirmed in writing or agreement signed; deposit paid; group
     created — after Eden's yes (surprise site)
- [ ] 1. Kickoff call done, summary sent; logo and photos received or requested
     — after Eden's yes
- [ ] 2. Brand Guideline done (or `skipped`, which counts as done) — not made
     yet; research and decisions ready in `client/brand.md`; to do if she continues
- [x] 3. Blueprint done — 2026-11-17

**Stage 2 — Build and review**

- [ ] 4. Version 1 built (`/aksumite-template`), click-through done, preview sent
- [x] Custom work below built and ticked (skip if none) — 2026-11-17
- [ ] 5. Review call held, Website Review sent
- [ ] 6. Revisions applied (logged below); client wrote **Approved**; legal
     `reviewed: true`

**Stage 3 — Launch**

- [ ] 7. Final payment, form key, launch checklist (PageSpeed, Search Console),
     live; client confirmed
- [ ] 8. Handoff Guide (and Brand Guideline, if made) sent, accounts recorded,
     `delivered-*` tag; testimonial asked

## Build progress

Version 1, saved as it is built. It is finished only when every line is ticked.
A ticked line is never generated again, so the client's corrections are safe.

- [x] Images placed and optimized — 2026-11-17
- [x] `src/config/site.ts` filled — 2026-11-17
- [x] `src/data/` filled — 2026-11-17
- [x] `.env.local` set — 2026-11-17 (localhost until the domain is decided)
- [x] Fonts pinned and files formatted — 2026-11-17
- [x] Checks pass — 2026-11-17
- [x] `docs/ask-client.md` saved — 2026-11-17
- [x] Pushed and reported — 2026-11-17

## Messages

Each is offered once, when its moment arrives, and ticked when it has been sent.

- [ ] Version 1 — the surprise message: preview link, samples and Facebook
      placeholder explained
- [ ] Website Review
- [ ] Revisions applied, round 1
- [ ] Revisions applied, round 2
- [ ] Site live
- [ ] Handoff
- [ ] Testimonial request
- Last check-in: —

## Custom work

Agreed extra work beyond the package ([`packages.md`](packages.md) → Extra
work): one line each, with the quote reference, e.g.
`- [ ] Equipment page + homepage section — quote Q-012`.

- [x] Arched-frame hero: homepage hero, replacing the template layouts (navy gradient, portrait in a brass arch, per docs/brand-previews/hero-options.html) — quote: none, Digital Aksumite's own build — built 2026-11-17 (`hero.layout: 'arched'`)
- [x] Practice Areas: /practice-areas page + homepage section after About, links in navbar and footer; Services stay as they are — quote: none, Digital Aksumite's own build — built 2026-11-17
- [x] Logo fix: cropped to the figure; navy `logo.png` and white `logo-on-primary.png`, same drawing — 2026-11-17
- [x] Practice Areas, round 2: homepage shows the 4 featured areas (`featured: true`) + button to the page; navbar and footer link to `/#practice-areas` — 2026-11-17
- [x] About illustration: Lady Justice from the logo, in the accent color, in the hero's arch (`ABOUT_SUMMARY.illustration`) — 2026-11-17
- [x] Favicon: white logo on navy with a thin accent frame — 2026-11-17
- [x] Social icons: LinkedIn, Facebook (link to come), email in footer and contact section; navbar solid navy when scrolled — 2026-11-17
- [x] Share image: branded 1200x630 `public/og-image.jpg` (navy, Lora name, portrait in the brass arch) for Telegram and WhatsApp previews — 2026-11-17
- [x] Phones and tablets: hero text fills the first screen (larger title, full-width buttons), portrait after scrolling; About and Contact keep the desktop left-then-right order (text first, form first) — 2026-11-17
- [x] Hero sizing, round 2: phone title scales to the screen (46 px at 375), phone buttons equal at 17rem, desktop buttons back on one line — 2026-11-17

## Approvals and revisions

| Date | What                   | By  | Note |
| ---- | ---------------------- | --- | ---- |
|      | Revision round 1       |     |      |
|      | Revision round 2       |     |      |
|      | Approved (incl. legal) |     |      |
|      | Live site confirmed    |     |      |

## Decisions

Anything agreed that the Blueprint or package does not show (extra work quoted,
a declined request, a value outside an allowed list).

| Date       | Decision                                                                                                                                     | Reason                                                                                                                              |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| 2026-11-17 | Dark mode uses the template's black surfaces, not brand.md's navy                                                                            | Biniam                                                                                                                              |
| 2026-11-17 | Version 1 shows 3 clearly labelled sample testimonials; real quotes replace them before launch                                               | Biniam: Eden sees the section in the preview                                                                                        |
| 2026-11-17 | Practice Areas gets its own page and homepage section; Services stays                                                                        | Biniam: a fuller homepage                                                                                                           |
| 2026-11-17 | Logo cropped to the figure from Logo 2; navy on light, white on navy; same drawing, not redrawn                                              | Biniam                                                                                                                              |
| 2026-11-17 | Light mode stays warm cream; every section uses the page color (no second section shade)                                                     | Biniam: consistency                                                                                                                 |
| 2026-11-17 | Contact form shown in the preview with the placeholder key; sending works once Eden's Web3Forms key is set                                   | Biniam                                                                                                                              |
| 2026-11-17 | Homepage practice areas: Corporate and Commercial Law, Foreign Investment, Contract Law, Civil Litigation                                    | Biniam asked for the main ones only; Claude picked by the Blueprint's goal (business owners, investors; individuals via court work) |
| 2026-11-17 | Facebook icon shown with a placeholder link until Eden's page is known; check:placeholders lists it                                          | Biniam                                                                                                                              |
| 2026-11-17 | Scrolled navbar is solid navy, not 95%                                                                                                       | Biniam: page text showed through                                                                                                    |
| 2026-11-17 | Closing call-to-action title: "Book a consultation with Eden"                                                                                | Biniam                                                                                                                              |
| 2026-11-17 | Custom share image replaces the generated one; on Vercel, NEXT_PUBLIC_SITE_URL must be the vercel.app address or link previews show no image | Biniam asked for a branded preview                                                                                                  |
| 2026-11-17 | All colors, fonts and card styles come from site.ts and the shared components, never set per page                                            | Biniam: consistency                                                                                                                 |
| 2026-11-17 | Surprise website as a test: no proposal, kickoff, deposit or Brand Guideline until Eden likes it and wants to continue                       | Biniam: test with 2 businesses                                                                                                      |
| 2026-11-17 | Facebook and other icons stay in the preview, Facebook with its placeholder link; Biniam tells Eden                                          | Biniam                                                                                                                              |
| 2026-11-17 | Sample testimonials stay in the preview; Biniam tells Eden they are samples                                                                  | Biniam                                                                                                                              |
| 2026-11-17 | Light and dark mode stay as built; colors (and keeping one or both modes) asked after her yes                                                | Biniam                                                                                                                              |
| 2026-11-17 | Preview on Vercel (vercel.app address), no domain yet                                                                                        | Biniam                                                                                                                              |

## Handoff record

| Item                     | Managed by / account | Renews | Done (date) |
| ------------------------ | -------------------- | ------ | ----------- |
| Domain                   |                      |        |             |
| Hosting                  |                      |        |             |
| Source code              |                      | —      |             |
| Contact form (Web3Forms) |                      | —      |             |
| Analytics                |                      | —      |             |
| Search Console           |                      | —      |             |

## Change log after handoff

| Date | Request | Included / quoted | Deployed |
| ---- | ------- | ----------------- | -------- |
|      |         |                   |          |
