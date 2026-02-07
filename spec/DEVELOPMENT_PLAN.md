# Project: SWA - Anti-Gravity Architecture Portfolio

**Client:** Shubhangi Wahane Architects (SWA)
**Theme:** "Grounded Ethereal" – Melding solid architectural earth tones with weightless, fluid interactions.

## 🚀 The Zero-Penny Tech Stack

- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion (for physics/lifting)
- **Smooth Scroll:** Lenis (for weightless momentum)
- **Components:** shadcn/ui (Radix primitives)
- **Icons:** Phosphor Icons (Thin/Light weight recommended)
- **State:** Zustand (Global "Gravity" and "Menu" state)

## 🎨 Design System

### Typography

- **Headlines:** `Poppins` (Sans-serif) – Clean, geometric, structural.
- **Body/UI:** `Lora` (Serif) – Elegant, readable, modern.

### Color Palette (Extracted from Client Banner)

- **Canvas:** `#FDFBF9` (Warm Off-White) – Main background.
- **Primary:** `#8B6D5C` (Earthy Taupe) – Headings and main branding.
- **Secondary:** `#D4B9A0` (Sand) – Borders, dividers, and glassmorphism accents.
- **Structure:** `#4A4441` (Charcoal Brown) – High-contrast text and footers.

## 📁 Project Structure

```text
├── app/
│   ├── layout.tsx       # Next/Font config & Lenis Provider
│   ├── page.tsx         # Hero (SWA Mask) & Services
│   └── projects/        # [id] dynamic routes for portfolio
├── components/
│   ├── providers/       # Lenis & Theme providers
│   ├── ui/              # shadcn (Modified with Phosphor Icons)
│   ├── motion/          # <Reveal />, <Float />, <Parallax /> wrappers
│   └── shared/          # Navigation (Glassmorphism), Footer
├── store/
│   └── useGravity.ts    # Zustand store for interaction toggles
├── tailwind.config.ts   # Custom SWA color & font variables
└── public/
    └── patterns/        # Mandala SVGs for background layers
```
