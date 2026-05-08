import { site } from '@/content/site';

export function Footer() {
  const { copyright, links } = site.footer;

  return (
    <footer className="border-t border-foreground/10">
      <div className="mx-auto max-w-5xl px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-foreground/60">{copyright}</p>
        <ul className="flex items-center gap-5 text-xs text-foreground/70">
          {links.map((link) => (
            <li key={link.label}>
              <a href={link.href} className="hover:text-foreground transition-colors">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
