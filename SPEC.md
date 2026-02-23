# Zing Website — Homepage Spec

## Overview
Single-page marketing site for Zing, an à la carte apartment cleaning service. Targets **renters** living in buildings where Zing operates. The site should feel like: **Calm + Status + Innovation + Elevated Simplicity**.

## Design Inspiration
- **Public Goods** (publicgoods.com): Clean, minimal layout. Lots of whitespace. Simple product-focused sections. Muted natural color palette. Sans-serif typography.
- **Levels Health** (levelshealth.com): Hero section specifically — full-width background video with dark overlay, bold white headline text, subtle CTA button. Confident, modern, health-tech feel.

## Brand Direction (NEW — do NOT use old Zing colors)
- **Primary**: Deep charcoal (#1A1A2E) for text
- **Accent**: Warm sage green (#7B9E6B) — calm, elevated
- **Secondary accent**: Soft gold (#C4A862) — status, warmth  
- **Background**: Off-white (#FAFAF7) with occasional warm cream (#F5F0E8) sections
- **CTA buttons**: Sage green (#7B9E6B) with white text, rounded corners
- **Typography**: Clean sans-serif (Inter or similar from Google Fonts)
- Logo is WHITE — it goes on dark backgrounds (hero, footer). Provide a placeholder SVG text "zing" in the nav.

## Tech Stack
- Single HTML file with inline CSS and minimal JS
- No frameworks — pure HTML/CSS/JS
- Google Fonts for typography
- Responsive (mobile-first)
- Smooth scroll, subtle fade-in animations on scroll

## Page Structure

### 1. Navigation (sticky)
- Logo "zing" (lowercase, clean) on left
- Links: How It Works, Services, Pricing, FAQ
- "Get Started" button on right
- Transparent on hero, solid white on scroll

### 2. Hero Section (Levels Health style)
- Full-viewport height
- Background: dark overlay on a `<video>` element (with poster image fallback). Use a placeholder — the video src will be swapped later.
- Center-aligned content:
  - Headline: "Hotel-style cleaning. In your building. À la carte."
  - Subtext: "Zing puts a dedicated cleaner in your apartment building so you can book bite-sized tasks — bathrooms for $23, floors mopped for $14, clothes folded for $12."
  - CTA: "Get Started" button (sage green)
- Subtle scroll indicator arrow at bottom

### 3. The Magic Section (why this is different)
- Section title: "This changes everything"
- 3 cards showing the à la carte magic:
  - 🛁 "Just the bathrooms" — $23
  - 🧹 "Just the floors" — $14  
  - 👕 "Just the folding" — $12
- Subtext: "No minimums. No packages you don't need. Just the tasks you actually want done."
- Visual: clean card layout, price prominent, icons above

### 4. How It Works
- 3 steps, horizontal layout on desktop, vertical on mobile:
  1. "Book in seconds" — Pick your tasks, choose a time. Same-day available.
  2. "Your cleaner is already there" — A dedicated Zing pro works in your building every day. No strangers, no scheduling headaches.
  3. "Come home to clean" — That's it. Enjoy your space.
- Clean numbered steps with subtle connecting line

### 5. Why Zing Section
- Title: "Housekeeping built for how you actually live"
- 3 feature blocks:
  - "A familiar face" — Same cleaner every day, not rotating contractors
  - "On-demand, always" — Book a single task or set up a recurring routine
  - "Absurdly affordable" — A full-time on-site cleaner means prices traditional services can't touch

### 6. Services/Packages Section  
- Title: "Choose how you clean"
- 3 tiers presented like cards (Public Goods membership style):
  - **Quick Tasks** — Individual à la carte items (bathrooms, floors, dishes, bed-making, folding)
  - **Routines** — Set recurring schedules (e.g., bathrooms 2x/month, dishes every night)
  - **Full Clean** — Complete apartment cleaning, one-time or recurring
- Each card has a "Get Started" CTA

### 7. Social Proof / Stats
- "70% of residents say Zing is a top reason they love their building"
- Pull quote or testimonial area (placeholder text is fine)
- Clean, minimal — maybe a large stat number with supporting text

### 8. FAQ Section
- Expandable accordion style
- Questions from existing site:
  - How does Zing work in my building?
  - Do I need to give access to my apartment?
  - How do I sign up?
  - What if I need to cancel?
  - How much does it cost?

### 9. CTA Banner
- Full-width sage green background
- "Ready for a cleaner home?" 
- "Get Started" button (white)

### 10. Footer
- Logo "zing" in white on dark background
- Links: About, How It Works, FAQ, Contact
- Social media icon placeholders
- © 2024 Zing Cleaning

## Animations
- Fade-in on scroll for sections (IntersectionObserver)
- Smooth scroll for nav links
- Nav background transition on scroll
- Subtle hover effects on cards and buttons

## Important Notes
- The video in the hero is a PLACEHOLDER — just use a dark solid color or gradient as fallback, with a `<video>` tag ready for a src to be added
- All images are placeholders — use CSS backgrounds or placeholder blocks
- This is renter-facing copy, NOT property manager copy
- CTA "Get Started" should link to "#get-started" (placeholder)
- Make it feel premium, calm, elevated — NOT like a typical cleaning service site
