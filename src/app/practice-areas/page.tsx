import { Metadata } from 'next';
import { PageHeader } from '@/components/page-header';
import { CTASection } from '@/components/cta-section';
import { PracticeAreasSection } from '@/components/practice-areas-section';
import { PRACTICE_AREAS, PRACTICE_AREAS_PAGE } from '@/data/practice-areas';
import { HOME_PAGE } from '@/data/home';
import { withCanonical } from '@/lib/seo';

export const metadata: Metadata = withCanonical(PRACTICE_AREAS_PAGE.meta, '/practice-areas');

export default function PracticeAreasPage() {
  return (
    <main className="bg-surface-page min-h-screen">
      <PageHeader
        breadcrumbs={[{ label: PRACTICE_AREAS_PAGE.meta.title }]}
        eyebrow={PRACTICE_AREAS_PAGE.eyebrow}
        title={PRACTICE_AREAS_PAGE.title}
        description={PRACTICE_AREAS_PAGE.description}
      />

      {/* ── Practice areas, with typical matters ──────────────── */}
      <PracticeAreasSection
        title={PRACTICE_AREAS_PAGE.sectionTitle}
        subtitle={PRACTICE_AREAS_PAGE.sectionSubtitle}
        areas={PRACTICE_AREAS}
        detailed
      />

      {/* ── CTA ───────────────────────────────────────────────── */}
      <CTASection homePage={HOME_PAGE} />
    </main>
  );
}
