# Rymal Gage Dental — Pitch Website

High-conversion dental practice website built for **Rymal Gage Dental Office** (Hamilton, ON). Designed to outperform the current MINA Medical site with modern motion, trust signals, and frictionless booking.

## 🎯 Pitch Angle

> "Your current site was built by a medical marketing agency using templates. We build custom, conversion-optimized dental sites that actually bring in patients."

## ✨ Features

- **GSAP ScrollTrigger animations** — Parallax, stagger reveals, scroll-linked line drawing
- **Mint/Coral design system** — Trust-building medical aesthetic, not generic blue
- **60-second booking form** — Multi-step with service selection, preferred time, notes
- **527+ reviews carousel** — Auto-rotate + touch swipe + keyboard navigation
- **Process timeline** — Animated connecting line, step counters
- **Mobile-first responsive** — Hamburger menu, touch gestures, click-to-call
- **SEO + Schema.org** — Dentist structured data, local business markup
- **Accessibility** — Semantic HTML, ARIA labels, focus management, reduced motion

## 🛠️ Stack

| Layer | Tech |
|-------|------|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Animation | GSAP 3.12 + ScrollTrigger |
| Fonts | Playfair Display (display) + DM Sans (body) + JetBrains Mono |

## 🚀 Quick Start

```bash
cd rymalgage-dental-pitch
npm install
npm run dev
```

Open http://localhost:3000

## 📁 Structure

```
src/
├── app/
│   ├── globals.css          # Tailwind v4 + design tokens + animations
│   ├── layout.tsx           # Root layout + fonts + JSON-LD schema
│   └── page.tsx             # Home page composition
├── components/
│   ├── Navbar.tsx           # Fixed header, scroll state, mobile menu
│   ├── Hero.tsx             # Parallax bg, stats counter, scroll indicator
│   ├── Services.tsx         # 6-service grid, hover reveals, icon animation
│   ├── Process.tsx          # 4-step timeline, SVG line animation
│   ├── Testimonials.tsx     # Carousel, auto-rotate, touch swipe
│   ├── Contact.tsx          # Booking form, info/hours, success state
│   └── Footer.tsx           # Links, social, branding
```

## 🎨 Design Tokens (globals.css)

```css
--color-ink: #0A0F14;           /* Near-black */
--color-mint: #0D9488;          /* Primary teal */
--color-mint-light: #14B8A6;    /* Hover teal */
--color-coral: #F97316;         /* Accent coral */
--color-pearl: #F8FAFC;         /* Off-white bg */
--color-cream: #FEF7ED;         /* Warm section bg */
```

## 📊 Conversion Elements

1. **Above-fold trust**: 527 reviews, 35 years, 12K patients, 99% satisfaction
2. **Single CTA focus**: "Book Appointment" repeated in hero, nav, footer
3. **Service clarity**: 6 cards with expand-on-hover feature lists
4. **Process transparency**: 4 steps, no surprises
5. **Social proof**: Real testimonials with names, photos, specific treatments
6. **Low-friction contact**: Form + phone + email + directions + hours

## 🎬 Motion Highlights

- Hero: Parallax shapes, floating elements, staggered entrance, scroll indicator bounce
- Services: Staggered card reveal, icon background fill, feature list slide-in
- Process: SVG line draw, number counter scale/rotate, card rise
- Testimonials: Carousel auto-rotate (5s), touch swipe, dot/arrow nav
- Contact: Form slide-up, info/hours stagger from opposite sides
- Navbar: Background blur on scroll, mobile menu slide-down

## 📱 Mobile Considerations

- Touch-friendly tap targets (48px minimum)
- Swipeable testimonial carousel
- Click-to-call phone links
- Hamburger menu with slide animation
- Reduced motion respected via `prefers-reduced-motion`

## 🔗 Deploy

```bash
npm run build
# Deploy to Vercel, Netlify, or any Node host
```

## 📝 Customization for Pitch

Replace placeholder content in:
- `Hero.tsx` — Stats, practice name, phone
- `Services.tsx` — Service list, features
- `Process.tsx` — Step details
- `Testimonials.tsx` — Real patient quotes
- `Contact.tsx` — Address, hours, email
- `Footer.tsx` — Social links, address
- `layout.tsx` — Schema.org structured data

---

Built with the **Uptisement** stack — Next.js + GSAP + Tailwind v4.  
Part of the Second Brain vault: `04 - Projects/rymalgage-dental-pitch`
