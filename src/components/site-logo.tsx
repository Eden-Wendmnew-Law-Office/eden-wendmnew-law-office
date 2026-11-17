/**
 * Site Logo
 * The logo in the navbar and footer links, which both sit on the primary
 * color. site.ts → logoShape: 'icon' = a square mark in a small box with the
 * name beside it; 'wide' = a wordmark alone (the name is in its alt text).
 * site.ts → logoOnPrimary, when set, replaces the logo here. No logo yet: the
 * name alone, as text.
 */

import Image from 'next/image';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';

const src = siteConfig.logoOnPrimary || siteConfig.logo;

/** shortBelowXl: below the xl breakpoint show site.navShortName, if set
 * (navbar only; the footer always shows the full name). */
function Name({ className, shortBelowXl }: { className?: string; shortBelowXl?: boolean }) {
  const short = siteConfig.navShortName;
  if (!shortBelowXl || !short) return <span className={className}>{siteConfig.name}</span>;
  return (
    <>
      <span className={cn(className, 'xl:hidden')}>{short}</span>
      <span className={cn(className, 'hidden xl:inline')}>{siteConfig.name}</span>
    </>
  );
}

export function SiteLogo({
  nameClassName,
  shortBelowXl,
}: {
  nameClassName?: string;
  shortBelowXl?: boolean;
}) {
  if (!src) return <Name className={nameClassName} shortBelowXl={shortBelowXl} />;

  if (siteConfig.logoShape === 'wide') {
    return (
      <Image
        src={src}
        alt={siteConfig.logoAlt}
        width={192}
        height={32}
        className="h-8 w-auto max-w-40 object-contain object-left sm:max-w-48"
      />
    );
  }

  return (
    <>
      <div className="border-brand-accent/60 bg-on-primary/10 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border">
        <Image
          src={src}
          alt={siteConfig.logoAlt}
          width={24}
          height={24}
          className="h-6 w-auto object-contain"
        />
      </div>
      <Name className={nameClassName} shortBelowXl={shortBelowXl} />
    </>
  );
}
