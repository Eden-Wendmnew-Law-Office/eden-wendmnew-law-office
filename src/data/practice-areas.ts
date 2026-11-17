/**
 * Practice Areas (client custom work, Eden Wendmnew)
 * Shown on the homepage (#practice-areas) and /practice-areas.
 * Each area links to the service that covers it (serviceSlug).
 */

import type { PracticeArea, PracticeAreasPage } from '@/types/content';

export const PRACTICE_AREAS_PAGE: PracticeAreasPage = {
  meta: {
    title: 'Practice Areas',
    description:
      'Corporate and commercial law, foreign investment, intellectual property, contracts, labour, tax and regulation, and civil and criminal litigation in Addis Ababa.',
  },
  eyebrow: 'Practice areas',
  title: 'The law Eden practises',
  description:
    'Eight areas of Ethiopian law, for foreign investors, business owners and individuals.',
  sectionTitle: 'Practice areas',
  sectionSubtitle: 'Each area links to the service that covers it.',
};

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    title: 'Corporate and Commercial Law',
    slug: 'corporate-and-commercial-law',
    summary:
      'Forming a company and keeping it in order, from the founding documents to later changes.',
    matters: [
      'Choosing the business form: PLC, share company or sole proprietor',
      'Memorandum and articles of association',
      'Commercial registration and trade licence',
      'Changes to capital, shareholders or address',
    ],
    serviceSlug: 'company-formation',
  },
  {
    title: 'Foreign Investment',
    slug: 'foreign-investment',
    summary: 'Entering Ethiopia as a foreign investor: open sectors, the permit and capital rules.',
    matters: [
      'Which sectors are open to foreign investment',
      'Investment permit with the Ethiopian Investment Commission',
      'Minimum capital rules',
      'Choosing the company structure',
    ],
    serviceSlug: 'investment-consulting',
  },
  {
    title: 'Intellectual Property',
    slug: 'intellectual-property',
    summary: 'Protecting a business name and logo through trademark registration.',
    matters: [
      'Search for existing marks',
      'Filing with the Ethiopian Intellectual Property Authority',
      'Responding to objections',
      'Renewal',
    ],
    serviceSlug: 'trademark-registration',
  },
  {
    title: 'Contract Law',
    slug: 'contract-law',
    summary: 'Writing, reviewing and negotiating contracts before they are signed.',
    matters: [
      'Sale, lease, service and supply contracts',
      'Reviewing a contract you were given',
      'Negotiating terms',
    ],
    serviceSlug: 'contract-drafting',
  },
  {
    title: 'Labour and Employment',
    slug: 'labour-and-employment',
    summary: 'Employment contracts and workplace practice under the Labour Proclamation.',
    matters: [
      'Employment contracts',
      'Employment law under the Labour Proclamation',
      'Reviewing company policies',
    ],
    serviceSlug: 'regulatory-compliance',
  },
  {
    title: 'Tax and Regulatory',
    slug: 'tax-and-regulatory',
    summary: 'Registration, licences and reporting duties for businesses operating in Ethiopia.',
    matters: ['Tax registration (TIN)', 'Licence renewals', 'Tax and reporting duties'],
    serviceSlug: 'regulatory-compliance',
  },
  {
    title: 'Civil Litigation',
    slug: 'civil-litigation',
    summary: 'Civil cases at the Federal First Instance, High and Supreme Courts.',
    matters: [
      'Advice on your case',
      'Preparing pleadings and documents',
      'Representation at all levels of Federal Courts',
      'Settlement talks',
    ],
    serviceSlug: 'court-representation',
  },
  {
    title: 'Criminal Litigation',
    slug: 'criminal-litigation',
    summary: 'Criminal cases at all levels of Federal Courts.',
    matters: [
      'Advice on your case',
      'Preparing documents for court',
      'Representation at the Federal First Instance, High and Supreme Courts',
    ],
    serviceSlug: 'court-representation',
  },
];
