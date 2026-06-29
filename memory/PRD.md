# MacBook Luxury Landing — PRD

## Original problem
Build an ultra-premium, luxury-inspired landing page for the MacBook (Apple.com-grade) with cinematic dark theme, glassmorphism, premium typography, Framer Motion animations, and responsive layout.

## Tech stack
- React 19 (CRA + craco), Tailwind, Framer Motion, shadcn/sonner toasts, lucide-react icons
- FastAPI + MongoDB (single newsletter endpoint)

## User choices captured
- React + Tailwind + Framer Motion (no Next.js)
- Unsplash MacBook imagery
- Dark luxury theme (black/space gray dominant)
- Realistic pricing $1299 / $1999 / $2499

## What's been implemented (2026-12)
- **Hero**: floating MacBook image, parallax scroll, ambient blue glow, gradient headline "Power. Elegance. / Beyond Limits.", primary + secondary CTAs, magnetic buttons, spec strip, scroll cue
- **Navbar**: fixed glass nav with mobile menu, scroll-aware background, anchor smooth-scroll
- **Features**: 4 frosted glass cards (M-Series, Liquid Retina XDR, All-Day Battery, Ultra-Light Aluminum) with hover lift + colored radial glow
- **Performance**: split-screen image + 4 animated progress bars + count-up stats + Geekbench floating badge
- **Gallery**: 5-image carousel with prev/next, thumbnails, active highlight, glow border
- **Specifications**: luxury 7-row comparison table with Pro column highlighted
- **Testimonials**: glass cards, 3 entries, 5-star ratings, auto-rotate every 6.5s + dots
- **Pricing**: 3 tiers, Pro highlighted with blue glow + Recommended badge + scale, magnetic buy buttons trigger sonner toast
- **Footer**: newsletter form (live POST /api/newsletter), 3 link groups, social icons, copyright
- **Loader**: Apple-style fade-in overlay (~1.8s) with shimmer text + progress line
- **Backend**: POST/GET /api/newsletter (idempotent), GET /api/newsletter/count
- **Removed**: emergent-badge from index.html (user request)

## Test status (iteration_1)
- Backend: 100% (7/7 pytest cases)
- Frontend: 100% of flows verified (hero, nav desktop+mobile, features, performance, gallery, specs, testimonials, pricing, newsletter)
- No critical or minor issues

## Files
- `/app/backend/server.py`
- `/app/frontend/src/pages/LandingPage.jsx`
- `/app/frontend/src/components/landing/{Loader,Navbar,Hero,MagneticButton,Features,Performance,Gallery,Specifications,Testimonials,Pricing,Footer}.jsx`
- `/app/frontend/src/index.css`, `/app/frontend/src/App.js`

## Backlog (P1/P2 — next iterations)
- P1: Connect Stripe checkout for "Buy" buttons (currently shows confirmation toast)
- P1: Add a configurator (color + storage + RAM) above pricing
- P2: Add product video hero loop (mute autoplay) behind glass
- P2: AB-test silver vs space-black hero render
- P2: Add admin dashboard to view newsletter subscribers
