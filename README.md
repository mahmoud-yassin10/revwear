# RevWear E-commerce

Performance-driven storefront for RevWear, an automotive lifestyle and streetwear brand. Built with Next.js 14 (App Router), TypeScript, Tailwind CSS, and shadcn/ui. Cart state is client-side with localStorage persistence; products are stored locally in `src/data/products.ts`.

## Tech stack
- Next.js 14 (App Router) + TypeScript
- Tailwind CSS + tailwindcss-animate
- shadcn/ui components + Radix primitives
- Icons: lucide-react

## Getting started
1) Install dependencies: `npm install`
2) Run the dev server: `npm run dev`
3) Open: `http://localhost:3000`

## Project structure
- `src/app` — App Router pages (`/`, `/shop`, `/product/[slug]`, `/cart`, `/checkout`, `/about`, `/size-guide`, `/contact`, `/shipping`, `/returns`, `/privacy`, `/terms`).
- `src/components` — Layout (header/footer), cart provider, UI components (shadcn/ui), product cards, filters, and forms.
- `src/data/products.ts` — Local product catalog (slug, title, price, images, categories, sizes, description, featured flag, release date).
- `public/brand/revwear-logo-square.png` — Provided logo used for header, footer, favicon references, and OpenGraph. Keep this file as-is (no edits).

## Design & UX
- Brand system: black background, white typography, accent red `#F14734` used for CTAs and highlights. Minimal, high-contrast, no heavy shadows or gradients.
- Sticky header with nav + cart badge, responsive mobile drawer.
- Product grid with filters (category, size, price range) and sorting (newest, price low/high).
- Product detail page with gallery, size/quantity selector, add-to-cart, and related products.
- Cart and checkout flows: editable quantities, subtotal, shipping placeholder, Stripe-ready payment placeholder copy.
- Global footer with newsletter placeholder, policy links, and social placeholders.
- Basic loading skeletons for shop, product, and cart routes.

## Notes
- No external CMS or payments are wired; Stripe integration is intentionally a placeholder.
- Remote product imagery uses Unsplash; image domains are allowed in `next.config.ts`.
- Ensure the real logo is placed at `public/brand/revwear-logo-square.png` before deployment.
