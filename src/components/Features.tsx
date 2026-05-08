import { site } from '@/content/site';

export function Features() {
  // Defensive destructure with safe defaults so an agent edit that
  // renames or removes site.features doesn't crash the entire page.
  // The page can render with an empty Features section and HMR will
  // pick up the next edit cleanly.
  const { title = '', items = [] } = site.features ?? {};

  if (!items.length) return null;

  return (
    <section id="features" className="border-t border-foreground/10">
      <div className="mx-auto max-w-5xl px-6 py-20 sm:py-28">
        {title && (
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-center text-balance">
            {title}
          </h2>
        )}
        <div className="mt-14 grid gap-8 sm:grid-cols-3">
          {items.map((item) => (
            <article
              key={item.title}
              className="rounded-xl border border-foreground/10 p-6 hover:border-foreground/20 transition-colors"
            >
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-foreground/70">
                {item.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
