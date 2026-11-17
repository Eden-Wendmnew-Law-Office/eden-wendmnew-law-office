/**
 * About Section
 * Philosophy/About with scroll reveal, refined typography, and system visualization
 * Architectural, calm presentation
 */

import { Container } from '@/components/container';
import { ScrollReveal } from '@/components/scroll-reveal';
import { PremiumButton } from '@/components/premium-button';
import { SectionHeading } from '@/components/section-heading';
import type { AboutSummary } from '@/types/content';
import { UI_TEXT } from '@/data/ui';

interface AboutSectionProps {
  about: AboutSummary;
}

export function AboutSection({ about }: AboutSectionProps) {
  const { title, summary: shortText, buttonText, illustration } = about;

  return (
    <section id="about" className="section-y bg-surface-page relative overflow-hidden">
      {/* Background glow effect matching hero visualization style */}
      <div
        className="pointer-events-none absolute top-1/2 right-0 h-full w-1/2 -translate-y-1/2"
        style={{
          background:
            'radial-gradient(circle at 70% 50%, color-mix(in srgb, var(--brand-accent) 5%, transparent), transparent 60%)',
        }}
      />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: Text Content */}
          <div>
            <SectionHeading
              reveal
              align="left"
              eyebrow={UI_TEXT.eyebrows.about}
              title={title}
              text={shortText}
            />

            {/* CTA Button */}
            <ScrollReveal delay={0.3}>
              <div className="mt-8 md:mt-12">
                <PremiumButton href="/about" variant="primary">
                  {buttonText}
                </PremiumButton>
              </div>
            </ScrollReveal>
          </div>

          {/* Right: the drawing in the accent color, inside an arch with a thin
              accent line (the hero's frame) */}
          {illustration && (
            <ScrollReveal delay={0.2}>
              <div className="mx-auto w-full max-w-[15rem] sm:max-w-[17rem] lg:max-w-[20rem]">
                <div className="border-brand-accent/60 rounded-t-full border p-2 sm:p-2.5">
                  <div className="bg-surface-card relative flex aspect-[4/5] items-end justify-center overflow-hidden rounded-t-full">
                    <div
                      role="img"
                      aria-label="Lady Justice holding the scales"
                      className="bg-brand-accent-text h-[82%] w-[82%]"
                      style={{
                        maskImage: `url(${illustration})`,
                        WebkitMaskImage: `url(${illustration})`,
                        maskSize: 'contain',
                        WebkitMaskSize: 'contain',
                        maskRepeat: 'no-repeat',
                        WebkitMaskRepeat: 'no-repeat',
                        maskPosition: 'center bottom',
                        WebkitMaskPosition: 'center bottom',
                      }}
                    />
                  </div>
                </div>
              </div>
            </ScrollReveal>
          )}
        </div>
      </Container>
    </section>
  );
}
