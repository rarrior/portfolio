# Modern Portfolio Website - Pure Astro

A stunning, modern portfolio website built with **pure Astro** (no React), featuring smooth CSS transitions, a beautiful blue color palette, and full TypeScript support.

## ✨ Features

- **Pure Astro**: No React dependencies - faster and simpler
- **Modern Design**: Dark theme with blue gradient accents (#33bdf3)
- **Smooth Animations**: CSS-based transitions and scroll animations
- **Fully Responsive**: Works perfectly on all devices
- **TypeScript**: Full type safety throughout
- **SEO Optimized**: Meta tags and semantic HTML
- **Fast Performance**: Static site generation for lightning-fast loads

## 🎨 Design Highlights

- Dark theme with blue gradient accents
- Glass morphism effects
- Smooth scroll animations using Intersection Observer
- CSS-only transitions (no JavaScript animation libraries)
- Professional and modern aesthetic

## 📦 What's Included

### Sections
1. **Hero** - Eye-catching introduction with animated gradients
2. **About** - Personal bio with stats and feature cards
3. **Experience** - Interactive tech carousel + work timeline
4. **Projects** - Grid showcase of your projects
5. **Contact** - Contact information cards (no form)
6. **Footer** - Social links and quick navigation

### Tech Stack
- Astro 5
- TypeScript
- Tailwind CSS
- CSS Animations

## 🚀 Quick Start

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:4321` to see your portfolio!

### Build for Production

```bash
npm run build
```

The optimized site will be in the `dist/` folder.

## ✏️ Customization

### 1. Update Personal Information

**Hero Section** (`src/components/Hero.astro`):
- Line 20: Change "Your Name" to your actual name
- Line 26: Update your description

**Contact Section** (`src/components/Contact.astro`):
- Lines 4-24: Update email, LinkedIn, phone, GitHub

**Footer** (`src/components/Footer.astro`):
- Lines 8-30: Update social media links
- Line 82: Change "Your Name" in copyright

### 2. Add Your Experience

**Experience Component** (`src/components/Experience.astro`):
- Lines 3-11: Update technologies (keep emojis or add your own)
- Lines 13-48: Replace with your actual work experience

### 3. Add Your Projects

**Projects Component** (`src/components/Projects.astro`):
- Lines 3-60: Replace with your real projects
- Update titles, descriptions, technologies, and links

### 4. Customize Colors

**Tailwind Config** (`tailwind.config.mjs`):
- Lines 6-15: Adjust the blue primary color palette
- Current main color: #33bdf3
- Try other blues: #1890ff, #0ea5e9, #3b82f6

### 5. Change Fonts

**Global Styles** (`src/styles/global.css`):
- Line 1: Update Google Fonts import
- `tailwind.config.mjs` lines 17-20: Update font families

## 📁 Project Structure

```
/
├── public/
│   └── favicon.svg           # Blue gradient favicon
├── src/
│   ├── components/
│   │   ├── About.astro       # About section
│   │   ├── Contact.astro     # Contact info (no form)
│   │   ├── Experience.astro  # Experience + tech carousel
│   │   ├── Footer.astro      # Footer
│   │   ├── Hero.astro        # Hero section
│   │   ├── Navigation.astro  # Navigation bar
│   │   └── Projects.astro    # Projects grid
│   ├── layouts/
│   │   └── Layout.astro      # Main layout
│   ├── pages/
│   │   └── index.astro       # Homepage
│   └── styles/
│       └── global.css        # Global styles + animations
├── astro.config.mjs          # Astro configuration
├── tailwind.config.mjs       # Tailwind + color config
├── tsconfig.json             # TypeScript config
└── package.json              # Dependencies
```

## 🎯 Key Differences from React Version

✅ **Simpler**: No React, just pure Astro components  
✅ **Faster**: Smaller bundle size, faster load times  
✅ **Cleaner**: Less JavaScript, more HTML/CSS  
✅ **Native**: Uses native Web APIs (Intersection Observer)  
✅ **Easier**: No React hooks or state management needed

## 🎨 Animations

All animations are CSS-based:
- **Fade in on scroll**: Using Intersection Observer API
- **Hover effects**: Pure CSS transitions
- **Tech carousel**: Vanilla JavaScript
- **Smooth scroll**: Native CSS `scroll-behavior`

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🌐 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Import on [vercel.com](https://vercel.com)
3. Deploy automatically

### Netlify
1. Push to GitHub
2. Import on [netlify.com](https://netlify.com)
3. Build: `npm run build`
4. Publish: `dist`

### GitHub Pages
Update `astro.config.mjs`:
```js
export default defineConfig({
  site: 'https://yourusername.github.io',
  base: '/repo-name',
  // ...
});
```

## ⚡ Commands

| Command | Action |
|---------|--------|
| `npm install` | Install dependencies |
| `npm run dev` | Start dev server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |

## 🔧 Features Explained

### Tech Stack Carousel
- Displays 4 technologies at a time
- Click arrows or dots to navigate
- Smooth transitions with CSS
- Pure JavaScript (no React)

### Scroll Animations
- Elements fade in as you scroll
- Uses Intersection Observer API
- Staggered animations for visual interest
- No animation libraries needed

### Contact Section
- Clean contact information cards
- No email form (as requested)
- Click-to-action buttons
- Links to email, LinkedIn, etc.

## 💡 Pro Tips

1. **Images**: Add project screenshots to `/public/` folder
2. **Icons**: Currently using emojis, can replace with SVGs
3. **Colors**: Easy to change in `tailwind.config.mjs`
4. **Content**: All text is in component files
5. **Performance**: Astro automatically optimizes everything

## 🎓 Learn More

- [Astro Documentation](https://docs.astro.build)
- [Tailwind CSS](https://tailwindcss.com)
- [TypeScript](https://www.typescriptlang.org)

## 📄 License

MIT License - use this template for your own portfolio!

---

**Built with Astro 5, TypeScript, and Tailwind CSS**

Made with ❤️ for developers who want a fast, modern portfolio without the complexity of React.
