

# Creative Agency Website — Implementation Plan

## Design System Updates
- Update color scheme to black/white premium aesthetic in `src/index.css`
- Add scroll-reveal animation keyframes to `tailwind.config.ts`

## New Components
- **Navbar** — Fixed top nav with logo, section links, mobile hamburger menu
- **HeroSection** — Bold headline, subtitle, two CTAs, muted autoplay video with dark overlay
- **PortfolioSection** — Horizontal row of 4 video thumbnails with modal player on click
- **CaseStudySection** — Problem → Solution → Result cards with metrics
- **ProcessSection** — 3-step horizontal layout with icons (Strategy, Creative Production, Performance Testing)
- **PricingCTA** — Bold headline + button linking to /pricing
- **Footer** — Minimal links + social icons
- **CalendlyModal** — Embed modal triggered by "Book a Call" buttons
- **VideoModal** — Full-screen modal video player for portfolio items

## Pages
1. **Home (`/`)** — Compose all sections: Hero → Portfolio → Case Study → Process → Pricing CTA → Footer
2. **Pricing (`/pricing`)** — Three pricing cards (£100+, £500+, £1,000+) with feature lists and CTAs to contact
3. **Contact (`/contact`)** — Form with name, email, company, message, budget dropdown; client-side validation with zod; success toast on submit

## Routing
- Add `/pricing` and `/contact` routes in `App.tsx`

## Calendly Integration
- Embed Calendly inline widget in a dialog modal using their JS embed script
- Placeholder URL until user provides their own

## Mobile Optimization
- Responsive layouts throughout using Tailwind breakpoints
- Hamburger menu for mobile nav

