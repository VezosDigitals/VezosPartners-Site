

# Vezos Partners — Dark Luxury Digital Fulfillment Website

## Brand & Design System
- **Pure black (#000000)** dominant background with **neon magenta (#ff00bf)** accent glows
- **White (#ffffff)** typography with bold geometric headings and clean body text
- Cyber-luxury aesthetic: glassmorphism, neon glows, particle effects
- Logo embedded in navbar, footer, and as subtle hero watermark (5% opacity)
- Favicon set to the Vezos logo

---

## Page Sections (Single-Page Scrolling Experience)

### 1. Navigation Bar
- Fixed dark transparent navbar with glass blur effect
- Vezos Partners logo on the left
- Links: Services, Why Vezos, Process, Case Studies, Pricing, FAQ, Contact
- "Become a Partner" CTA button with magenta glow
- Smooth scroll navigation

### 2. Hero Section (Cinematic Full-Screen)
- Animated dark gradient background with floating abstract shapes and particle animation
- Headline: **"Invisible Execution. Scalable Power."** with animated text reveal
- Subtext fade-in describing white-label fulfillment for agencies
- Two CTAs: "Become a Partner" (magenta pulse glow) + "Book Strategy Call" (outline → fill hover)
- Glassmorphism card previewing a dashboard UI
- Animated scroll-down indicator

### 3. Live Counter Section
- Scroll-triggered animated counters: 150+ Partners, 1,200+ Campaigns, 98% Retention, 7+ Service Categories
- Numbers animate from 0 with smooth easing
- Magenta underglow on each counter

### 4. Core Services (Interactive Grid)
- 7 service cards: Performance Marketing, Search Optimization, Social Media, Creative Production, Design & Animation, Branding & Authority, Website & App Development
- Glassmorphism card backgrounds with magenta border glow on hover
- Scale + lift hover effects with animated icons

### 5. Why Vezos (Parallax Section)
- Split layout: scrolling text on left, animated floating UI elements on right
- Key points: Unified Backend, White-Label Execution, NDA-Protected, Scalable Infrastructure, Dedicated Account Managers, Time-Zone Aligned, Predictable Delivery
- Fade + slide animations triggered on scroll

### 6. Process Timeline
- Horizontal animated timeline with 3 steps: Strategy Alignment → Backend Execution → White-Label Delivery
- Glowing circular icons connected by animated pulse lines
- Scroll-triggered progressive reveal

### 7. Case Studies
- 3 project showcases with before/after UI mockups
- Animated performance metrics: +25% Sales Growth, +3.8x ROAS, +60% Organic Visibility
- Animated charts using Recharts with scroll-trigger
- Subtle card hover motion effects

### 8. Testimonials (Auto-Slider)
- Dark carousel with profile images, names, roles, agency types, and quotes
- Neon magenta border glow on active card
- Auto-sliding with manual navigation arrows

### 9. Service Plans (Glass Pricing Cards)
- Three tiers: Basic, Standard, Premium
- Glassmorphism cards with scope, support level, and reporting details
- Middle tier elevated with magenta glow highlight
- "Custom Quote" CTA buttons

### 10. FAQ Section
- Smooth accordion with all 7 provided questions
- Clean expand/collapse animations with no jank

### 11. Contact Section (Power CTA)
- Headline: **"Build Your Invisible Backend."**
- Dark minimal form: Name, Agency Name, Email, Services Required, Message
- Submit button with animated magenta glow ripple effect

### 12. Footer
- Logo, quick navigation links, minimal social icons, copyright

---

## Technical Approach
- All frontend, no backend needed (contact form will be UI-only initially)
- Scroll-triggered animations throughout using Intersection Observer
- CSS animations and transitions for all effects (particles, glows, parallax)
- Recharts for animated case study graphs
- Fully responsive design
- Performance-optimized with lazy loading

