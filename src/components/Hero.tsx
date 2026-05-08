import { site } from '@/content/site';

export function Hero() {
  const { eyebrow, title, subtitle, primaryCta, secondaryCta } = site.hero;

  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-5xl px-6 pt-20 pb-24 sm:pt-28 sm:pb-32 text-center">
        {eyebrow && (
          <span className="inline-block rounded-full border border-foreground/10 px-3 py-1 text-xs font-medium tracking-wide uppercase text-foreground/70">
            {eyebrow}
          </span>
        )}
        <h1 className="mt-6 text-4xl sm:text-6xl font-semibold tracking-tight text-balance">
          {title}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg sm:text-xl text-foreground/70 text-balance">
          {subtitle}
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={primaryCta.href}
            className="inline-flex items-center justify-center rounded-md bg-foreground px-6 py-3 text-sm font-medium text-background hover:bg-foreground/90 transition-colors"
          >
            {primaryCta.label}
          </a>
          <a
            href={secondaryCta.href}
            className="inline-flex items-center justify-center rounded-md border border-foreground/15 px-6 py-3 text-sm font-medium hover:bg-foreground/5 transition-colors"
          >
            {secondaryCta.label}
          </a>
        </div>
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-24 -z-10 h-96 bg-gradient-to-b from-foreground/5 to-transparent blur-3xl"
      />
    </section>
  );
}
