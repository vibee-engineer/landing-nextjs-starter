import { site } from '@/content/site';

export function Footer() {
  // Defensive destructure — see other components for rationale.
  const { copyright = '', links = [] } = site.footer ?? {};

  if (!copyright && !links.length) return null;

  return (
    <footer className="border-t border-foreground/10">
      <div className="mx-auto max-w-5xl px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        {copyright && <p className="text-xs text-foreground/60">{copyright}</p>}
        {links.length > 0 && (
          <ul className="flex items-center gap-5 text-xs text-foreground/70">
            {links.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="hover:text-foreground transition-colors">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </footer>
  );
}
