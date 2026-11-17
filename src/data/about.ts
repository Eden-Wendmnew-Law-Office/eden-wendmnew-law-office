/**
 * About Content
 * ABOUT_SUMMARY  → the short About section on the homepage
 * ABOUT_PAGE_SECTIONS → the full /about page
 */

import type { AboutSummary, PageMeta } from '@/types/content';

export const ABOUT_SUMMARY: AboutSummary = {
  title: 'About Eden Wendmnew',
  summary:
    'Eden Wendmnew is an Attorney and Consultant at Law at all levels of Federal Courts. From January 2020 to April 2026 she was Corporate Lawyer at TECNO. In 2026 she opened her own office in Addis Ababa. She works alone, so every client deals with her directly.',
  buttonText: 'More about Eden',
  illustration: '/about/lady-justice.png',
};

export const ABOUT_PAGE_META: PageMeta = {
  title: 'About',
  description:
    'Eden Wendmnew, Attorney and Consultant at Law in Addis Ababa. Six years as Corporate Lawyer at TECNO; LLB, University of Gondar.',
};

export const ABOUT_PAGE_SECTIONS = {
  whoWeAre: {
    sectionLabel: 'Who she is',
    headline: 'Eden Wendmnew, Attorney and Consultant at Law',
    body: 'Eden Wendmnew practises at all levels of Federal Courts. She sets up companies, advises foreign investors, registers trademarks, drafts contracts, keeps businesses compliant and represents clients in civil and criminal cases.',
    origin:
      'She opened Eden Wendmnew Law Office in Addis Ababa in 2026, after six years and four months as Corporate Lawyer at TECNO.',
  },

  whatWeBuild: {
    sectionLabel: 'What she does',
    headline: 'Three kinds of work',
    intro: 'Most matters fall into one of three groups.',
    dimensions: [
      {
        roman: 'I',
        title: 'Starting a business',
        body: 'Company Formation for local owners, and Investment Consulting for foreign investors entering Ethiopia.',
      },
      {
        roman: 'II',
        title: 'Protecting it',
        body: 'Trademark Registration for your business name and logo, and Contract Drafting before you sign.',
      },
      {
        roman: 'III',
        title: 'Keeping it within the law',
        body: 'Regulatory Compliance as the rules change, and Court Representation in civil and criminal cases.',
      },
    ],
  },

  theRealPurpose: {
    sectionLabel: 'Background',
    headline: 'Six years as a corporate lawyer',
    body: 'From January 2020 to April 2026, Eden was Corporate Lawyer at TECNO.',
    pullQuote: 'Clients deal with Eden herself.',
    bodyAfterQuote:
      "She holds an LLB from the University of Gondar (2019) and is studying for a Master's in Business Law at Addis Ababa University.",
  },

  whatWeBelieve: {
    sectionLabel: 'How she works',
    headline: 'One lawyer, from first call to last',
    intro: 'Eden runs the office alone.',
    beliefs: [
      {
        lead: 'You deal with Eden.',
        body: 'The lawyer you speak to is the lawyer who does the work.',
      },
      {
        lead: 'Your matter in writing.',
        body: 'The contact form lets you describe the matter first, which suits foreign investors in other time zones.',
      },
      {
        lead: 'Office hours.',
        body: 'Monday to Friday, 8:00 AM to 5:00 PM, near the First Instance Court in Kolfe Keranio.',
      },
    ],
  },

  whoBuildFor: {
    sectionLabel: 'Who she serves',
    headline: 'Foreign investors, business owners and individuals',
    body: 'Foreign investors come for the investment permit, the company structure and the capital rules. Local business owners come for registration, trademarks, contracts and compliance. Individuals come for civil and criminal cases.',
    closing: 'Book a consultation and tell Eden about your matter.',
  },
} as const;
