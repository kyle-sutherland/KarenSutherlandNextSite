# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 website for Karen Sutherland Counselling, deployed to Netlify. The site uses the Pages Router architecture (not App Router) with React 19, Tailwind CSS 3, and SCSS for styling.

## Development Commands

This project uses **pnpm** as the package manager.

```bash
# Start development server (runs on http://localhost:3000)
pnpm run dev

# Build for production
pnpm run build

# Export static site
pnpm run export

# Install dependencies
pnpm install
```

## Architecture

### Routing & Pages Structure

- Uses Next.js **Pages Router** (pages/ directory, not app/)
- All pages are in `/pages/*.js`
- Main pages: index.js, profile.js, services.js, contact.js, fees.js, resources.js
- Custom App component at `pages/_app.js` wraps all pages with Layout

### Component Structure

The site follows a component-based architecture:

- **Layout Component** (`components/layout.js`): Main wrapper containing Navbar and Footer
- All components are in `/components/*.js`
- Reusable components: navbar.js, footer.js, header.js, card.js, content.js, buttons.js

### Styling System

- **Primary**: Tailwind CSS 3 with custom configuration
- **Secondary**: SCSS in `styles/globals.scss`
- **PostCSS**: Uses standard `tailwindcss` plugin
- **Custom colors** defined in `tailwind.config.js`:
  - charcoal, slate, cool-gray
  - maniac-mansion (brand blue)
  - thistle-blossom (accent blue)
  - bosporus (secondary blue)
  - calypso-blue
  - bleached-silk (off-white)
- Background image applied globally via `styles/globals.scss`

### Import Aliases

Configured in `jsconfig.json`:
- `@components/*` → `components/*`
- `@styles/*` → `styles/*`

Always use these aliases when importing:
```javascript
import Header from "@components/header";
import "@styles/globals.scss";
```

### Key UI Components

**Navbar** (`components/navbar.js`):
- Uses @headlessui/react Disclosure for mobile menu
- Navigation items: Home, Profile, Services, Contact
- Responsive design with mobile hamburger menu
- Sticky header with shadow

**Buttons** (`components/buttons.js`):
- `LinkButton`: For href links with target/rel options
- `ActionButton`: For form submissions and actions
- Shared styling via `buttonStyle` constant

**Layout** (`components/layout.js`):
- Wraps content with Navbar and Footer
- Container max-width: lg:max-w-7xl
- Font: font-serif applied to page container

### Form Handling

Contact form (`pages/contact.js`):
- Netlify Forms integration (data-netlify="true")
- Honeypot field for spam protection
- Success redirect with query param (?success=true)
- Uses Next.js router for confirmation state management
- ReCAPTCHA code present but commented out

### Deployment

- Deploys to Netlify automatically
- Build command: `npm run build`
- Publish directory: `.next`
- Configuration in `netlify.toml`

## Important Notes

- **Package manager**: pnpm (not npm)
- **No next.config.js**: Uses Next.js defaults
- **Environment variables**: Stored in `.env` (ReCAPTCHA key present but unused)
- **Public assets**: Logo SVGs, background image, favicon in `/public`
- **React version**: React 19
- **Next.js version**: 15 (Pages Router)
- **Tailwind version**: 3.4.x (uses standard `tailwindcss` plugin in postcss.config.js)

## Common Patterns

When adding new pages:
1. Create page in `/pages/*.js`
2. Import and use Layout component
3. Use Header component from `@components/header` for page titles
4. Use Content component from `@components/content` for main content wrapper
5. Add navigation link to `navigation` array in `components/navbar.js`

When styling components:
- Prefer Tailwind utility classes
- Use custom color names from tailwind.config.js
- Custom CSS only in globals.scss for global styles
- Font is font-serif (applied via Tailwind)
