# Newsom 2028 Satirical Campaign Website - Design Plan

## Overview
A satirical presidential campaign website for Gavin Newsom 2028 that appears to be a legitimate campaign site but highlights failures and controversies through clever content and design.

## Design Strategy

### Visual Identity
- **Style**: Modern presidential campaign aesthetic (similar to Obama 2008, Biden 2020, Trump 2016)
- **Colors**: 
  - Primary: Deep navy blue (#1a365d) - trust, stability
  - Secondary: Bright red (#c53030) - energy, action
  - Accent: Gold/amber (#d69e2e) - premium, presidential
  - Background: Clean white with subtle cream (#faf9f7)
- **Typography**: 
  - Headlines: Bold serif (Merriweather or similar) - authority
  - Body: Clean sans-serif (Inter or Geist) - readability

### Site Structure

```
┌─────────────────────────────────────────────────────────────┐
│  NAVIGATION: Logo | Issues | About | Join | Donate          │
├─────────────────────────────────────────────────────────────┤
│  HERO SECTION                                               │
│  ┌─────────────────────────────────────────────────────┐   │
│  │  "A New California For America"                     │   │
│  │  [Subtle satirical tagline]                         │   │
│  │  [CTA: Join the Movement]                           │   │
│  └─────────────────────────────────────────────────────┘   │
├─────────────────────────────────────────────────────────────┤
│  ISSUES SECTION (Satirical)                                 │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐       │
│  │ Homeless ││ Business ││  Crime   ││  Energy  │       │
│  │ Crisis   ││ Exodus   ││  Stats   ││  Costs   │       │
│  └──────────┘ └──────────┘ └──────────┘ └──────────┘       │
├─────────────────────────────────────────────────────────────┤
│  ACHIEVEMENTS / BY THE NUMBERS (Irony)                      │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐       │
│  │ $X Billion││ X Companies││ #1 Ranking││ X% Increase│      │
│  │   Debt    ││   Left    ││  Homeless ││   Crime    │      │
│  └──────────┘ └──────────┘ └──────────┘ └──────────┘       │
├─────────────────────────────────────────────────────────────┤
│  QUOTE SECTION                                              │
│  "Famous Newsom quotes presented dramatically"              │
├─────────────────────────────────────────────────────────────┤
│  ABOUT / BIO                                                │
│  Background story with subtle critiques                     │
├─────────────────────────────────────────────────────────────┤
│  CALL TO ACTION                                             │
│  [Join Campaign] [Donate] [Share]                           │
├─────────────────────────────────────────────────────────────┤
│  FOOTER                                                     │
│  Disclaimer: "Paid for by..." (satirical)                   │
│  Links, social media                                        │
└─────────────────────────────────────────────────────────────┘
```

### Key Design Elements

1. **Hero Section**
   - Large, bold typography with campaign slogan
   - Gradient overlay on background
   - Prominent CTA buttons
   - Subtle American flag motif

2. **Issues Cards**
   - Grid layout with icons
   - Hover effects revealing "more info"
   - Each card links to detailed satirical content

3. **Statistics Section**
   - Counter animations on scroll
   - Numbers that tell the ironic story
   - Clean, data-visualization style

4. **Quote Carousel**
   - Large, dramatic presentation
   - Auto-rotating famous/controversial quotes
   - Source attribution

5. **Footer**
   - Required campaign disclaimers (satirical)
   - Social media links
   - Privacy policy (mock)

### Content Tone
- **Satirical but Professional**: Looks like a real campaign site
- **Subtle Irony**: Content appears supportive but highlights failures
- **Data-Driven**: Uses real statistics presented in campaign style
- **Quotes**: Actual Newsom quotes presented without context for irony

### Technical Implementation
- Next.js 16 with App Router
- Tailwind CSS v4 for styling
- Framer Motion for animations
- Responsive design (mobile-first)
- Dark mode support
- SEO optimized

### Files to Create/Modify
1. `src/app/globals.css` - Update design tokens
2. `src/app/layout.tsx` - Update metadata, fonts
3. `src/app/page.tsx` - Complete redesign
4. `src/components/Navbar.tsx` - New navigation
5. `src/components/Hero.tsx` - Hero section
6. `src/components/Issues.tsx` - Issues grid
7. `src/components/Stats.tsx` - Statistics section
8. `src/components/Quotes.tsx` - Quote carousel
9. `src/components/Footer.tsx` - Footer
10. `src/components/CTA.tsx` - Call to action
