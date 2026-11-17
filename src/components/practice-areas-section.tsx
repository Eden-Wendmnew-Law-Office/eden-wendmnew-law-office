/**
 * Practice Areas Section (client custom work, Eden Wendmnew)
 * Homepage: the featured (main) areas, each with its summary, and a button to
 * the full page. /practice-areas (`detailed`): each card also lists typical matters.
 * Each card links to the related service. Built from the shared Container,
 * SectionHeading, Card and stagger blocks, so colors, fonts and dark mode
 * follow site.ts.
 */

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/container';
import { Card } from '@/components/card';
import { PremiumButton } from '@/components/premium-button';
import { SectionHeading } from '@/components/section-heading';
import { StaggerContainer, StaggerItem } from '@/components/scroll-reveal';
import { SERVICES } from '@/data/services';
import { UI_TEXT } from '@/data/ui';
import type { PracticeArea } from '@/types/content';

interface PracticeAreasSectionProps {
  title: string;
  subtitle: string;
  areas: PracticeArea[];
  /** Show each area's typical matters (the /practice-areas page) */
  detailed?: boolean;
}

export function PracticeAreasSection({
  title,
  subtitle,
  areas,
  detailed = false,
}: PracticeAreasSectionProps) {
  if (areas.length === 0) {
    // eslint-disable-next-line unicorn/no-null -- React components should return null for no-render
    return null;
  }

  return (
    <section id="practice-areas" className="section-y bg-surface-page">
      <Container>
        <SectionHeading
          reveal
          eyebrow={UI_TEXT.eyebrows.practiceAreas}
          title={title}
          text={subtitle}
          className="mb-12 md:mb-16"
        />

        <StaggerContainer
          className={
            detailed
              ? 'grid grid-cols-1 gap-6 md:grid-cols-2'
              : 'grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4'
          }
          staggerDelay={0.08}
        >
          {areas.map((area, index) => (
            <StaggerItem key={area.slug}>
              <PracticeAreaCard area={area} number={index + 1} detailed={detailed} />
            </StaggerItem>
          ))}
        </StaggerContainer>

        {!detailed && (
          <div className="mt-12 flex justify-center">
            <PremiumButton href="/practice-areas" variant="primary">
              {UI_TEXT.practiceAreas.viewAll}
            </PremiumButton>
          </div>
        )}
      </Container>
    </section>
  );
}

function PracticeAreaCard({
  area,
  number,
  detailed,
}: {
  area: PracticeArea;
  number: number;
  detailed: boolean;
}) {
  const service = SERVICES.find((item) => item.slug === area.serviceSlug);

  return (
    <Card id={detailed ? area.slug : undefined} className="flex h-full min-w-0 flex-col p-7">
      {/* Number and a thin accent line, as on the hero's arch */}
      <div className="mb-5 flex items-center gap-3">
        <span className="text-brand-accent-text text-sm font-semibold tracking-widest">
          {String(number).padStart(2, '0')}
        </span>
        <span aria-hidden="true" className="bg-brand-accent/50 h-px flex-1" />
      </div>

      <h3 className="text-text-heading mb-2 text-xl font-semibold text-balance">{area.title}</h3>
      <p className="text-text-body flex-1 text-[15px] leading-relaxed break-words">
        {area.summary}
      </p>

      {detailed && area.matters.length > 0 && (
        <div className="mt-5">
          <p className="text-text-muted mb-2 text-xs font-semibold tracking-widest uppercase">
            {UI_TEXT.practiceAreas.mattersLabel}
          </p>
          <ul className="text-text-body space-y-1.5 text-[15px] leading-relaxed">
            {area.matters.map((matter) => (
              <li key={matter} className="flex gap-2.5">
                <span
                  aria-hidden="true"
                  className="bg-brand-accent mt-2.5 h-1 w-1 shrink-0 rounded-full"
                />
                <span className="min-w-0">{matter}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {detailed && service && (
        <Link
          href={`/services/${service.slug}`}
          className="text-brand-accent-text group mt-6 inline-flex items-center gap-1.5 text-sm font-medium"
        >
          <span>
            {UI_TEXT.practiceAreas.relatedService} {service.title}
          </span>
          <ArrowRight className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      )}
    </Card>
  );
}
