/**
 * Testimonials
 * Shown on the homepage. Use real client quotes only.
 * Version 1 preview: labelled samples so Eden sees the section (Biniam,
 * 2026-11-17). Replace every one with a real quote before launch;
 * `check:placeholders` lists them until then.
 */

import type { Testimonial } from '@/types/content';

export const TESTIMONIALS: Testimonial[] = [
  {
    clientName: 'Sample: foreign investor',
    company: 'Replace with a real client quote',
    quote:
      'Sample quote. A foreign investor describes how Eden handled the investment permit and the company registration.',
  },
  {
    clientName: 'Sample: business owner',
    company: 'Replace with a real client quote',
    quote:
      'Sample quote. A local business owner describes a contract or trademark Eden prepared for them.',
  },
  {
    clientName: 'Sample: individual client',
    company: 'Replace with a real client quote',
    quote:
      'Sample quote. A client describes how Eden represented them in a civil or criminal case.',
  },
];
