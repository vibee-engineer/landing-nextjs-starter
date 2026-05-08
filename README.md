# landing-nextjs-starter

The default starting point for landing-tier projects on founding.dev.

Next.js 16 (app router) + Tailwind v4 + TypeScript. Single landing page,
deliberately small. Content is hoisted to one file so editing copy is
one-jump and the page composition is obvious.

## Where to edit what

| Want to change…           | File                          |
| ------------------------- | ----------------------------- |
| Hero headline / CTA copy  | `src/content/site.ts`         |
| Feature card copy         | `src/content/site.ts`         |
| Brand name + page title   | `src/content/site.ts`         |
| Layout / spacing / colors | `src/components/{Hero,Features,CTA,Footer}.tsx` |
| Page composition          | `src/app/page.tsx`            |
| Global styles             | `src/app/globals.css`         |

If you are an AI agent reading this: 90 % of edits will be to
`src/content/site.ts`. Component layout only changes when the user asks for
a new section or a structural rearrangement.

## Running locally

```bash
npm install
npm run dev
```

Opens on `http://localhost:3000`. Set `PORT` to override; the dev script
already binds to `0.0.0.0` so it works inside containers / Fly machines
without extra flags.

## Building for production

```bash
npm run build
npm start
```

## Why this template

It is the minimum shape that converts (hero / features / proof / CTA /
footer) with no extra dependencies. Add a real SaaS feature → graduate to
a fullstack template. Stay marketing-only → stay here.
