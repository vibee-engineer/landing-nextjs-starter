import { site } from '@/content/site';

export function CTA() {
  const { title, subtitle, button } = site.cta;

  return (
    <section id="cta" className="border-t border-foreground/10 bg-foreground/[0.02]">
      <div className="mx-auto max-w-3xl px-6 py-20 sm:py-24 text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-balance">
          {title}
        </h2>
        <p className="mt-3 text-foreground/70">{subtitle}</p>
        <a
          href={button.href}
          className="mt-8 inline-flex items-center justify-center rounded-md bg-foreground px-6 py-3 text-sm font-medium text-background hover:bg-foreground/90 transition-colors"
        >
          {button.label}
        </a>
      </div>
    </section>
  );
}
