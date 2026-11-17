# Eden Wendmnew Law Office: brand decisions

Decided with Biniam on 2026-11-17. This file is the source for the website build
until a Brand Guideline exists. No Brand Guideline document is being made now.
Research and history: `docs/research.md` and `docs/progress.md` in this repo.
Client files (logo, Word, PDF) live in `Biniam Works\DIGITAL AKSUMITE\5 Clients\Eden Wendmnew Law Office`.

## Who she is (facts for the site)

All from her LinkedIn and Google Business Profile. Nothing here is invented.

- Name on the site: **Eden Wendmnew** (LinkedIn says "Wendmnewu"; settle with her later)
- Business name: **Eden Wendmnew Law Office**
- Title: Attorney and Consultant at Law, all levels of Federal Courts
- Corporate Lawyer at **TECNO** (TECNO Mobile), Jan 2020 to Apr 2026. Name TECNO directly.
- LLB, University of Gondar (2019). Master's in Business Law, Addis Ababa University (in progress)
- Own office since 2026
- Services in her words: investment consulting, company formation, trademark
  registration, contract drafting, regulatory compliance, civil and criminal litigation
- Clients in her words: foreign investors, local business owners, individuals
- Phone 094 151 5310 (+251 94 151 5310), email edenwendmnew2@gmail.com
- Address: near First Instance Court, Addis Ababa (exact building to confirm)
- Hours: Mon to Fri 8 AM to 5 PM, Sat and Sun closed (Google Friday entry is a mistake)
- No testimonials or reviews yet. Version 1 (private preview) shows the testimonials section with clearly labelled sample quotes so Eden sees it; replace with her real quotes before launch.

## How she should come across

A serious, composed lawyer for business and investment work, who is also
approachable because you deal with her directly. Six years at TECNO is the
main proof. Navy says serious at first glance; brass and the warm light page
keep it personal.

## Colors

One light mode (the template's separator lines divide sections, no alternating
backgrounds) and one dark mode. Passes `check-colors.mjs`.

| Use                | Light mode | Dark mode |
| ------------------ | ---------- | --------- |
| Primary (navy)     | #1B2A44    | same      |
| Accent (brass)     | #C9A25E    | same      |
| Page background    | #F8F6F1    | #0E1626   |
| Card               | #FFFFFF    | #1A263C   |
| Border / separator | #DCD6CA    | #2A3852   |
| Heading            | #152036    | #F3F1EC   |
| Body text          | #2F3542    | #D6D9E0   |
| Muted text         | #5F6573    | #A3AAB8   |
| Primary dark       | #121D31    | same      |
| Primary light      | #33456A    | same      |
| Accent dark        | #9C7B3A    | same      |
| Text on primary    | #FFFFFF    | same      |
| Text on accent     | #152036    | same      |

(The template's color check also asks for a section background: use #EEEAE1 light, #131D30 dark.)

### Rules

- Brass only on buttons, thin lines, the photo frame and small labels. Never as
  a section background or body text.
- Hero, call to action and footer all use the navy. No other color for them.
- Hero: subtle gradient from #1B2A44 to #121D31. Call to action and footer: flat #1B2A44,
  with the template's separator line between them.
- Main button: brass #C9A25E with navy text #152036. Second button: outline.

## Homepage order

1. Hero (navy)
2. About Eden (light)
3. Services (light)
4. Further content sections (light)
5. Call to action (navy)
6. Footer (navy)

## Hero

- Navy gradient, text on the left, her photo on the right.
- Photo in true black and white, inside an arched frame with a thin brass line
  (approved from the mock `docs/brand-previews/hero-options.html`).
- Eyebrow: "Attorney and Consultant at Law". Headline and text are placeholders until written.
- Buttons: "Book a consultation" (brass) and "Our services" (outline).

## Logo

- Logo 2, Lady Justice (`5 Clients\Eden Wendmnew Law Office\Assets\logo 2.jpg`), one color, recolored: white on navy,
  navy #1B2A44 on light.
- Current file is a JPG on white with smudges. A clean SVG or transparent PNG is
  needed before launch. Biniam handles the logo.
- At icon size (favicon) the figure will not read; use a simpler mark there.

## Photo

- `public/eden pic.jpg`, 472 x 697 px. Fine on phones, soft on large screens.
- Ask for the original file from her photo shoot.

## Fonts

- Headings, her name and service titles: **Lora** SemiBold (600)
- Body text, buttons, labels, navigation: **DM Sans** Regular (400), Medium (500), SemiBold (600)
- Small uppercase labels (eyebrows): DM Sans Medium, letter-spacing 0.1em
- Fallbacks: Georgia for Lora, Arial for DM Sans
- Reason: calm and very readable for long text about contracts and court work; serif headings say "lawyer" at once without looking trendy - Biniam chose (2026-11-17)
- Preview: docs/brand-previews/font-compare.html

## Language

English only for now - Biniam (2026-11-17)

## Service names (approved)

Approved by Biniam 2026-11-17. Use these exact names everywhere (site, menus, documents). From her own words on LinkedIn; the one-line descriptions are drafts to check with Eden.

1. Company Formation: setting up your company in Ethiopia, from documents to registration.
2. Investment Consulting: legal guidance for foreign investors entering Ethiopia.
3. Trademark Registration: registering your brand name and logo so they are yours by law.
4. Contract Drafting: contracts written in clear terms before you sign.
5. Regulatory Compliance: keeping your business within Ethiopian law as the rules change.
6. Court Representation: civil and criminal cases at all levels of Federal Courts.

Preview: docs/brand-previews/font-options.html

## Not decided yet

- Hero layout: text and headings left, her photo right (decided). Template split (C) or the custom arched frame: decide after seeing both built
- Domain: after the build (edenwendmnew.com is free)
