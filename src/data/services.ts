/**
 * Services
 * Shown on the homepage, /services and /services/[slug].
 * `icon` and `tagStyle` choose from the sets in src/lib/icons.ts.
 */

import type { Service, ServicesPage } from '@/types/content';

const HOW_TO_START =
  'Book a consultation through the form with the details of your matter. Eden replies and arranges the next step.';
const HOW_TO_START_TAGLINE = 'Start with a consultation.';
const CTA_TEXT = 'Book a consultation';

/** The /services page. `meta.title` is also its breadcrumb label. */
export const SERVICES_PAGE: ServicesPage = {
  meta: {
    title: 'Services',
    description:
      'Company formation, investment consulting, trademark registration, contract drafting, regulatory compliance and court representation in Addis Ababa.',
  },
  eyebrow: 'Services',
  title: 'Legal services in Addis Ababa',
  description:
    'Six areas of work for foreign investors, business owners and individuals, all handled by Eden Wendmnew.',
  sectionTitle: 'Services',
  sectionSubtitle: 'Six areas of work for foreign investors, business owners and individuals.',
};

export const SERVICES: Service[] = [
  {
    title: 'Company Formation',
    slug: 'company-formation',
    tag: 'Business',
    tagStyle: 'accent',
    icon: 'briefcase',
    forWho: 'Local business owners and foreign investors starting a company in Ethiopia.',
    description: 'Setting up your company in Ethiopia, from documents to registration.',
    heroText: 'Setting up your company in Ethiopia, from documents to registration.',
    fullDescription:
      'Eden helps you choose the business form, prepares the founding documents and takes the company through commercial registration, trade licence and tax registration. She also handles later changes to capital, shareholders or address.',
    includes: [
      'Choosing the business form (PLC, share company, sole proprietor)',
      'Memorandum and articles of association',
      'Commercial registration and trade licence',
      'Tax registration (TIN)',
      'Later changes to capital, shareholders or address',
    ],
    howToStart: HOW_TO_START,
    howToStartTagline: HOW_TO_START_TAGLINE,
    ctaText: CTA_TEXT,
  },
  {
    title: 'Investment Consulting',
    slug: 'investment-consulting',
    tag: 'Investors',
    tagStyle: 'accent',
    icon: 'globe',
    forWho: 'Foreign investors entering Ethiopia.',
    description: 'Legal guidance for foreign investors entering Ethiopia.',
    heroText: 'Legal guidance for foreign investors entering Ethiopia.',
    fullDescription:
      'Eden tells you which sectors are open to foreign investment and what capital the rules require. She handles the investment permit with the Ethiopian Investment Commission and helps you choose the company structure.',
    includes: [
      'Which sectors are open to foreign investment',
      'Investment permit with the Ethiopian Investment Commission',
      'Minimum capital rules',
      'Choosing the company structure',
    ],
    howToStart: HOW_TO_START,
    howToStartTagline: HOW_TO_START_TAGLINE,
    ctaText: CTA_TEXT,
  },
  {
    title: 'Trademark Registration',
    slug: 'trademark-registration',
    tag: 'Brand',
    tagStyle: 'accent',
    icon: 'shield',
    forWho: 'Businesses with a brand name or logo.',
    description: 'Registering your brand name and logo so they are yours by law.',
    heroText: 'Registering your brand name and logo so they are yours by law.',
    fullDescription:
      'Eden searches for existing marks, files your application with the Ethiopian Intellectual Property Authority and follows it to registration. She responds to objections and handles renewal.',
    includes: [
      'Search for existing marks',
      'Filing with the Ethiopian Intellectual Property Authority',
      'Following the application to registration',
      'Responding to objections',
      'Renewal',
    ],
    howToStart: HOW_TO_START,
    howToStartTagline: HOW_TO_START_TAGLINE,
    ctaText: CTA_TEXT,
  },
  {
    title: 'Contract Drafting',
    slug: 'contract-drafting',
    tag: 'Contracts',
    tagStyle: 'accent',
    icon: 'layers',
    forWho: 'Businesses and individuals before they sign.',
    description: 'Contracts written in clear terms before you sign.',
    heroText: 'Contracts written in clear terms before you sign.',
    fullDescription:
      'Eden drafts sale, lease, service, supply and employment contracts. She reviews a contract you were given and negotiates its terms with the other side.',
    includes: [
      'Drafting sale, lease, service, supply and employment contracts',
      'Reviewing a contract you were given',
      'Negotiating terms',
    ],
    howToStart: HOW_TO_START,
    howToStartTagline: HOW_TO_START_TAGLINE,
    ctaText: CTA_TEXT,
  },
  {
    title: 'Regulatory Compliance',
    slug: 'regulatory-compliance',
    tag: 'Compliance',
    tagStyle: 'accent',
    icon: 'compass',
    forWho: 'Businesses operating in Ethiopia.',
    description: 'Keeping your business within Ethiopian law as the rules change.',
    heroText: 'Keeping your business within Ethiopian law as the rules change.',
    fullDescription:
      'Eden keeps your licences renewed, your employment practice in line with the Labour Proclamation and your tax and reporting duties met. She also reviews company policies.',
    includes: [
      'Licence renewals',
      'Employment law under the Labour Proclamation',
      'Tax and reporting duties',
      'Reviewing company policies',
    ],
    howToStart: HOW_TO_START,
    howToStartTagline: HOW_TO_START_TAGLINE,
    ctaText: CTA_TEXT,
  },
  {
    title: 'Court Representation',
    slug: 'court-representation',
    tag: 'Litigation',
    tagStyle: 'accent',
    icon: 'legal',
    forWho: 'Individuals and businesses in civil or criminal cases.',
    description: 'Civil and criminal cases at all levels of Federal Courts.',
    heroText: 'Civil and criminal cases at all levels of Federal Courts.',
    fullDescription:
      'Eden advises you on your case, prepares the pleadings and documents, and represents you at the Federal First Instance, High and Supreme Courts. Where it serves you, she also leads settlement talks.',
    includes: [
      'Advice on your case',
      'Preparing pleadings and documents',
      'Representation at the Federal First Instance, High and Supreme Courts',
      'Settlement talks',
    ],
    howToStart: HOW_TO_START,
    howToStartTagline: HOW_TO_START_TAGLINE,
    ctaText: CTA_TEXT,
  },
];
