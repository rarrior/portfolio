# Raúl Arriola Gómez - Portfolio

A modern, high-performance portfolio website **Built with Astro 5, TypeScript, Tailwind CSS, GSAP & Lenis** for optimal performance, featuring smooth animations, responsive design, and a professional dark theme with blue gradient accents.

## ✨ Portfolio Features

- **Pure Astro**: Built with Astro 5 - no React dependencies, faster performance
- **Modern Design**: Dark theme with blue gradient accents (#33bdf3)
- **Smooth Animations**: GSAP & Lenis for buttery-smooth scroll animations
- **Fully Responsive**: Optimized for all devices and screen sizes
- **TypeScript**: Full type safety throughout the codebase
- **SEO Optimized**: Meta tags and semantic HTML structure
- **Fast Performance**: Static site generation for lightning-fast loads
- **Glass Morphism**: Modern UI effects and transitions
- **Content Collections**: Structured content management for experiences

## 🎯 Technical Highlights

- **Astro 5** 🚀: Server-side rendering with minimal client-side JavaScript   
- **TypeScript** ✔️: Full type safety across all components and utilities.  
- **Content Collections** 📚: Type-safe content management for experiences  
- **GSAP** 🫨: Professional-grade animations library  
- **Lenis** 🎚️: Buttery-smooth scroll experience  
- **Modular Architecture** 🏛️: Reusable components and utilities  

## 📋 Portfolio Sections

1. **Hero** - Eye-catching introduction with animated gradients and 20+ years experience highlight
2. **Experience** - Complete work history with interactive tech stack showcase
3. **Tech Stack** - Comprehensive display of all technologies and tools
4. **Contact** - Easy-to-use contact information with direct links
5. **Footer** - Social links and quick navigation

## 🚀 Quick Start

### Installation

```bash
# Install dependencies
pnpm i

# Start development server
pnpm dev
```

Visit `http://localhost:4321` to see your portfolio!

### Build for Production

```bash
pnpm build
```

The optimized site will be in the `dist/` folder.

## 📁 Project Structure

```
/
├── public/
│   ├── companies/            # Company logos (devo, gft, cigna, indra, mcu)
│   └── svg/                  # Technology icons (40+ tech logos)
├── src/
│   ├── components/
│   │   ├── Hero.astro        # Hero section with animated gradients
│   │   ├── Experience.astro  # Work experience timeline
│   │   ├── TechStack.astro   # Interactive tech stack display
│   │   ├── LogoWall.astro    # Company logos showcase
│   │   ├── Contact.astro     # Contact information section
│   │   ├── Footer.astro      # Footer with social links
│   │   └── buttons/          # Reusable button components
│   ├── content/
│   │   ├── config.ts         # Content collection schema
│   │   └── experiences/      # Work experience markdown files
│   ├── layouts/
│   │   └── Layout.astro      # Main layout with SEO
│   ├── pages/
│   │   └── index.astro       # Homepage
│   ├── utils/
│   │   ├── contact.ts        # Contact information & icons
│   │   ├── technologies.ts   # Tech stack configuration
│   │   ├── navigation.ts     # Smooth scroll navigation
│   │   └── scrollAnimations.ts # Scroll animation utilities
│   └── styles/
│       └── global.css        # Global styles + animations
├── astro.config.mjs          # Astro configuration
├── tailwind.config.mjs       # Tailwind + color palette
├── tsconfig.json             # TypeScript config
└── package.json              # Dependencies
```

## 🎨 Animations & Interactions

The portfolio features smooth, performant animations:
- **GSAP**: Advanced scroll-triggered animations
- **Lenis**: Smooth scroll with momentum
- **Intersection Observer**: Lazy-loaded fade-in effects
- **CSS Transitions**: Hover effects and micro-interactions
- **Glass Morphism**: Modern UI with backdrop blur effects
- **Gradient Animations**: Animated hero background gradients

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🌐 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Import on [vercel.com](https://vercel.com)
3. Deploy automatically

### GitHub Pages
Update `astro.config.mjs`:
```js
export default defineConfig({
  site: 'https://yourusername.github.io',
  base: '/repo-name',
  // ...
});
```

## 🔧 Architecture & Best Practices

### Content Management
- **Astro Content Collections**: Type-safe markdown-based content for experiences
- **Frontmatter Validation**: Zod schemas ensure data consistency
- **Auto-sorted Content**: Experiences ordered by `order` field

### Performance Optimizations
- **Static Site Generation**: Pre-rendered HTML for instant page loads
- **Minimal JavaScript**: Only essential client-side code
- **Optimized Assets**: SVG icons for crisp scaling
- **Lazy Loading**: Images and animations load on demand

### Code Quality
- **TypeScript**: Full type coverage
- **Modular Utils**: Reusable utility functions
- **Component Architecture**: Small, focused Astro components
- **Consistent Styling**: Tailwind CSS utility classes

## 🎓 Technologies & Resources

- [Astro Documentation](https://docs.astro.build) - Framework documentation
- [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS framework
- [TypeScript](https://www.typescriptlang.org) - JavaScript with type safety
- [GSAP](https://greensock.com/gsap/) - Professional animation library
- [Lenis](https://lenis.darkroom.engineering/) - Smooth scroll library

## 🚀 Performance

Built for speed and efficiency:
- ⚡ Static Site Generation (SSG)
- 🎯 Minimal JavaScript bundle
- 📦 Optimized asset delivery
- 🔍 SEO-friendly structure
- ♿ Accessible markup

---

**Built with Astro 5, TypeScript, Tailwind CSS, GSAP & Lenis**

