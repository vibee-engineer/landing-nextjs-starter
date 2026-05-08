/**
 * site.ts — single source of truth for all visible copy.
 *
 * AI agents editing this template should change strings HERE rather than
 * reaching into individual components. Layout/structure lives in components/;
 * content lives here. Same split that real teams use, kept tiny.
 */

export const site = {
  brand: {
    name: 'Acme',
    tagline: 'Ship landing pages in minutes, not weeks.',
  },

  hero: {
    eyebrow: 'New — beta is open',
    title: 'The landing page that closes itself.',
    subtitle:
      'Tell us about your product. We will write the copy, design the page, and ship it under your domain. Editable in your browser, forever.',
    primaryCta: { label: 'Start free', href: '#cta' },
    secondaryCta: { label: 'See a live sample', href: '#features' },
  },

  features: {
    title: 'Everything a landing page needs. Nothing it does not.',
    items: [
      {
        title: 'Built for conversion',
        body: 'Hero, features, social proof, CTA. The exact shape that converts traffic into sign-ups. No empty sections.',
      },
      {
        title: 'Editable in plain English',
        body: 'Say "make the headline punchier" or "swap the hero photo." Changes ship to a preview URL in seconds.',
      },
      {
        title: 'SEO by default',
        body: 'Static export, fast metadata, semantic HTML, good Lighthouse scores out of the box. No SEO consultant required.',
      },
    ],
  },

  cta: {
    title: 'Ready to ship?',
    subtitle: 'Free to try. No credit card.',
    button: { label: 'Get started', href: '#' },
  },

  footer: {
    copyright: `© ${new Date().getFullYear()} Acme. All rights reserved.`,
    links: [
      { label: 'Privacy', href: '#' },
      { label: 'Terms', href: '#' },
      { label: 'Contact', href: 'mailto:hello@example.com' },
    ],
  },
} as const;
