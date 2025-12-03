# Raúl Arriola Gómez - Portfolio

A modern, high-performance portfolio website showcasing 20+ years of software engineering experience. Built with **Astro 5** for optimal performance, featuring smooth animations, responsive design, and a professional dark theme with blue gradient accents.

## 👨‍💻 About

**Raúl Arriola Gómez** - Software Engineer
📍 Based in Madrid, Spain | Available for remote work worldwide
💼 20+ years of experience in Software Development & Team Leadership

### Contact Information
- 📧 Email: [raul.arriola@gmail.com](mailto:raul.arriola@gmail.com)
- 💼 LinkedIn: [linkedin.com/in/raularriolagomez](https://www.linkedin.com/in/raularriolagomez)
- 🐙 GitHub: [github.com/rarrior](https://github.com/rarrior)
- 📱 Phone: +34 680 357 348

## 💼 Professional Experience

### Team Lead @ Devo (2023 - 2025)
Leading development of scalable web applications using React, TypeScript and cloud technologies.
- Reduced alert triage time by 30% through UX streamlining and data visualization improvements
- Implemented CI/CD pipeline reducing deployment time by 40%
- Led team of 5 developers on major product launch
- **Tech:** React, TypeScript, Styled-Components, GraphQL, WebSockets, Jest, Java, AWS

### Senior Frontend Engineer @ Devo (2018 - 2023)
Leading the design and delivery of scalable React/TypeScript web platforms on cloud infrastructure.
- Delivered a new SIEM product, contributing to a 50% uplift in security revenue
- Conducted code reviews and mentored junior developers
- **Tech:** React, TypeScript, Styled-Components, Redux, Cypress, AWS

### Senior Frontend Engineer @ Indra (2016 - 2018)
Owned architecture and implementation of GIS-driven air-defense web platforms for real-time operational awareness.
- Developed air defense web systems utilizing Luciad RIA GIS technology
- Integrated RESTful APIs and WebSockets to optimize functionality
- **Tech:** JavaScript, Luciad RIA, jQuery, Dojo, WebSockets

### Senior Fullstack Engineer @ Cigna (2014 - 2016)
Led design, development, and delivery of scalable full-stack web applications for insurance domain.
- Delivered an insured web portal, enhancing customer experience
- Mentored junior developers on coding standards and best practices
- **Tech:** Java J2EE, Hibernate, Spring MVC, Jenkins, Maven, Git

### Big Data Technical Analyst @ GFT (2013 - 2014)
Led development of scalable ETL pipelines using Big Data technologies for banking data transformation.
- Developed ETL jobs for banking sector data processing
- **Tech:** Java J2EE, Hadoop, XPath, XML, XSL, Maven, JUnit

### Senior Fullstack Engineer @ Ministry of Culture (2006 - 2013)
Led cross-functional teams in delivering secure e-government solutions compliant with regulations.
- Led teams in e-government projects targeting digital signature and PKI security
- Ensured compliance with Electronic Administration Law
- **Tech:** Java J2EE, Hibernate, Struts, Spring, SOAP, JavaScript, jQuery

## 🛠️ Tech Stack

### Frontend
React • JavaScript • TypeScript • Redux • Next.js • Astro • Vue.js • HTML5 • CSS3 • Tailwind CSS • Styled Components • Webpack • GraphQL • WebSockets • Highcharts

### Testing
Jest • Cypress • Playwright • React Testing Library

### Backend
Java • Spring • Hibernate • Node.js

### Database
MySQL • PostgreSQL • Redis • Supabase

### DevOps & Tools
Git • Jenkins • AWS • Jira • Maven • CI/CD

### Methodologies
Scrum • Kanban • Agile

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

## ✏️ Customization Guide

### Adding New Experiences

Experiences are managed using Astro Content Collections. To add a new position:

1. Create a new `.md` file in `src/content/experiences/`
2. Use this template:

```markdown
---
period: YYYY - YYYY
role: Your Role
company: Company Name
img: company-logo.png
description: Brief description of your role
achievements:
  - Achievement 1
  - Achievement 2
technologies:
  - Tech 1
  - Tech 2
order: 1  # Lower numbers appear first
---

Your detailed role description here.
```

3. Add company logo to `/public/companies/`

### Updating Contact Information

Edit `src/utils/contact.ts` to update:
- Email address
- LinkedIn profile URL
- GitHub username
- Phone number

### Customizing Tech Stack

Edit `src/utils/technologies.ts` to modify the technologies displayed:
- Add technology icons to `/public/svg/`
- Update the `techStack` object with your skills
- Categories: Frontend, Backend, Database, Tools, Agile

### Customizing Colors

**Tailwind Config** (`tailwind.config.mjs`):
- Adjust the blue primary color palette (default: #33bdf3)
- Alternative blues: #1890ff, #0ea5e9, #3b82f6

### Changing Fonts

**Global Styles** (`src/styles/global.css`):
- Update Google Fonts import
- Modify font families in `tailwind.config.mjs`

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

## 🎯 Technical Highlights

✅ **Astro 5**: Server-side rendering with minimal client-side JavaScript
✅ **TypeScript**: Full type safety across all components and utilities
✅ **Content Collections**: Type-safe content management for experiences
✅ **GSAP**: Professional-grade animations library
✅ **Lenis**: Buttery-smooth scroll experience
✅ **Modular Architecture**: Reusable components and utilities

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

## 💡 Development Tips

1. **Adding Tech Icons**: Place SVG files in `/public/svg/` and update `technologies.ts`
2. **Company Logos**: Add to `/public/companies/` (PNG format recommended)
3. **Colors**: Modify the primary color palette in `tailwind.config.mjs`
4. **Animations**: Adjust GSAP settings in component files
5. **Content**: Edit markdown files in `src/content/experiences/`

## 🎓 Technologies & Resources

- [Astro Documentation](https://docs.astro.build) - Framework documentation
- [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS framework
- [TypeScript](https://www.typescriptlang.org) - JavaScript with type safety
- [GSAP](https://greensock.com/gsap/) - Professional animation library
- [Lenis](https://lenis.darkroom.engineering/) - Smooth scroll library

## 📝 Content Structure

All professional experience is managed through Astro Content Collections:
- 6 detailed work experiences spanning 20+ years
- 40+ technology icons and logos
- Categorized tech stack (Frontend, Backend, Database, Tools, Agile)
- Achievement highlights and metrics from each role

## 🚀 Performance

Built for speed and efficiency:
- ⚡ Static Site Generation (SSG)
- 🎯 Minimal JavaScript bundle
- 📦 Optimized asset delivery
- 🔍 SEO-friendly structure
- ♿ Accessible markup

---

**Built with Astro 5, TypeScript, Tailwind CSS, GSAP & Lenis**

Portfolio of Raúl Arriola Gómez - Software Engineer with 20+ years of experience in modern web development.
