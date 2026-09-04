**Project:** ClearBurger — Dark-pattern-free restaurant web application

**Published App:** [clearburger-diu3.surge.sh](https://clearburger-diu3.surge.sh)

---

## Production Environment

Technology stack used:

| Tool | Version | Role |
|---|---|---|
| React | 19 | UI Framework |
| Vite | 8 | Bundler / dev server |
| Tailwind CSS | v4 | Utility-first styling engine |
| shadcn/ui | Nova preset | Accessible Radix components |
| Lucide React | — | Iconography |
| React Router DOM | v7 | Client-side routing |
| Storybook | v10 | Component documentation |

---

## Component Architecture (Atomic Design)

```
src/
├── components/
│   ├── atoms/
│   │   ├── Button.jsx        # 4 variants: primary, secondary, ghost, disabled
│   │   ├── Tag.jsx           # 3 variants: default (green), warning (amber), neutral (gray)
│   │   └── Input.jsx         # 3 states: default, focus (#D92525), error (#EF4444)
│   ├── molecules/
│   │   ├── SearchBar.jsx     # Search bar with Lucide icon, controlled state
│   │   └── IngredientButton.jsx  # Toggle button for ingredient selection
│   └── organisms/
│       ├── Navbar.jsx        # Fixed floating bar (pill), logo + navigation
│       ├── Footer.jsx        # Structured footer with link grid and social media
│       └── FooterSVGs.jsx    # SVG icons: Instagram, Twitter/X, TikTok, LinkedIn
├── pages/
│   ├── Home.jsx              # Hero + 3 featured items + "Why ClearBurger" section
│   ├── Carta.jsx             # 9 products, category filter + search
│   ├── Customizar.jsx        # Customizer with 5 categories and sticky summary
│   └── Reservar.jsx          # Form with inline validation and confirmation
├── stories/                  # Storybook stories per component
└── index.css                 # Design System tokens (colors, fonts, dark mode)
```

---

## Implemented Pages

### Home
Hero section with background image (dark overlay), headline, and primary CTA. Grid of 3 featured burgers featuring photos, tags, and pricing. "Why ClearBurger" informational section outlining the three core project values (transparency, quality, zero dark patterns).

### Menu (Carta)
Grid of 9 burgers with real-time search and category filters (All / Classics / Premium / Gourmet / Vegetarian). Each card displays an image, allergen/feature tags, description, price, and ordering button. Empty state with an informative message if no results are found.

### Customizer
Customizer split into two columns: ingredient panel (5 categories: Base, Cheeses, Vegetables, Extras, Sauces) with toggle buttons, and a sticky summary panel featuring price breakdowns, real-time totals, and an "Add to order" button (disabled until a base is selected).

### Reservation (Reservar)
Booking form with inline validation (name, email, phone, party size, date, time). Fields show a red error state with descriptive messaging. No deposit or mandatory registration required. Confirmation screen featuring a summary of the booking.

---

## Documentation with Storybook

Stories documented with `autodocs`:

| Component | Category | Stories |
|---|---|---|
| Button | Atoms | Primary · Secondary · Ghost · Disabled |
| Tag | Atoms | Default · Warning · Neutral |
| Input | Atoms | Default · Focus · Error |
| SearchBar | Molecules | Default · Active · Error |
| IngredientButton | Molecules | Available · Selected · Out of stock |

Launch Storybook: `npm run storybook` (port 6006)

---

## Design Tokens (Design System)

| Token | Value | Usage |
|---|---|---|
| `#1A1A1A` | Background | App and section backgrounds |
| `#222222` | Surface | Cards, forms, panels |
| `#2B2B2B` | Surface alt | Navbar, Footer |
| `#333333` | Border | Borders, inactive state |
| `#D92525` | Primary | Main CTA, accent |
| `#B71D1D` | Primary dark | CTA hover |
| `#D97E00` | Accent | "Build your burger" button |
| `#F5F5F5` | Text | Primary text |
| `#8C8C8C` | Muted | Secondary text |
| Montserrat 700 | Font heading | Headings |
| Inter 400/500 | Font body | Body text and UI |

---

## Briefing

The starting point for implementation was the Design System developed in Figma. The exact component hierarchy (Atomic Design), color and typography tokens, and Hi-Fi prototype page structure were translated directly into code. Tailwind CSS v4 managed styling via utility classes directly on components, eliminating the need for separate CSS files per component while keeping the entire token system consolidated in `index.css`.

For interactive components, functional fidelity to the prototype was prioritized: the Menu filters in real-time by category and text simultaneously, the Customizer calculates cumulative pricing as ingredients are selected, and the Reservation form validates each field individually with specific error messages. These behaviors directly map to the flows defined in the initial User Journey mapping and materialized during the wireframing phase.

Storybook enabled live documentation of the Design System components: each story reflects a real visual component state as it appears in the application, featuring dark mode backgrounds and matching design system styles. This creates a direct bridge between documentation and implementation, facilitating consistency and accessibility evaluation for every element in isolation.
