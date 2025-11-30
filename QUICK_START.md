# 🚀 Portfolio Quick Start Guide

## What You Have

A modern, production-ready portfolio built with **pure Astro** (no React):

✨ **Modern Design** - Dark theme with blue gradient (#33bdf3)  
⚡ **Lightning Fast** - Pure Astro, no React overhead  
🎨 **Smooth Animations** - CSS-based transitions  
📱 **Fully Responsive** - Works on all devices  
🔵 **Blue Palette** - Beautiful blue color scheme  
✉️ **No Form** - Clean contact section without email form

## 🎯 Getting Started (3 Steps)

### Step 1: Extract and Install
```bash
# Extract the files
unzip portfolio-site.zip
# or
tar -xzf portfolio-site.tar.gz

# Navigate to folder
cd portfolio-site

# Install dependencies
npm install
```

### Step 2: Start Development
```bash
npm run dev
```

Visit: `http://localhost:4321` 🎉

### Step 3: Customize
See customization section below!

## ✏️ What to Change

### 🔴 Critical (Must Change)

1. **Your Name**
   - File: `src/components/Hero.astro`
   - Line: ~20
   - Change: "Your Name" → Your actual name

2. **Email Address**
   - File: `src/components/Contact.astro`
   - Lines: ~7, 8
   - Update: your.email@example.com

3. **LinkedIn Profile**
   - File: `src/components/Contact.astro`
   - Lines: ~11-14
   - Update URL and display text

4. **Phone Number**
   - File: `src/components/Contact.astro`
   - Lines: ~15-18

5. **GitHub Profile**
   - File: `src/components/Contact.astro`
   - Lines: ~19-22

6. **Footer Social Links**
   - File: `src/components/Footer.astro`
   - Lines: ~8-30

### 🟡 Important (Should Change)

7. **About Bio**
   - File: `src/components/About.astro`
   - Lines: ~48-58
   - Replace with your story

8. **Work Experience**
   - File: `src/components/Experience.astro`
   - Lines: ~13-48
   - Add your actual jobs

9. **Projects**
   - File: `src/components/Projects.astro`
   - Lines: ~3-60
   - Add your real projects

### 🟢 Optional (Nice to Have)

10. **Tech Stack**
    - File: `src/components/Experience.astro`
    - Lines: ~3-11
    - Update technologies

11. **Colors**
    - File: `tailwind.config.mjs`
    - Lines: ~6-15
    - Adjust blue shades

## 🎨 Key Features

### Pure Astro (No React!)
- **Simpler**: Just HTML, CSS, and minimal JavaScript
- **Faster**: Smaller bundle, quicker loads
- **Easier**: No React complexity

### Blue Color Scheme
- Main color: #33bdf3 (bright blue)
- Gradients throughout
- Easy to customize in `tailwind.config.mjs`

### CSS Animations
- Fade-in on scroll
- Smooth transitions
- No animation libraries needed
- Uses Intersection Observer API

### Contact Section
- No email form (as requested)
- Direct contact cards
- Click-to-action links
- Clean and simple

## ⚡ Quick Commands

```bash
npm run dev      # Development server
npm run build    # Build for production
npm run preview  # Preview production build
```

## 📁 File Structure

```
portfolio-site/
├── src/
│   ├── components/     # All Astro components
│   ├── layouts/        # Layout wrapper
│   ├── pages/          # index.astro (main page)
│   └── styles/         # global.css
├── public/             # Static files (favicon)
└── (config files)      # astro, tailwind, tsconfig
```

## 🔧 Common Customizations

### Change Main Color
Edit `tailwind.config.mjs`:
```js
primary: {
  500: '#33bdf3',  // Change this!
}
```

Popular alternatives:
- `#0ea5e9` - Sky blue
- `#3b82f6` - Bright blue  
- `#1890ff` - Azure blue

### Update Fonts
Edit `src/styles/global.css` line 1:
```css
@import url('https://fonts.googleapis.com/...');
```

Then update `tailwind.config.mjs` lines 17-20.

### Add Project Images
1. Add images to `/public/` folder
2. Update `image` property in Projects component
3. Change emoji to `<img>` tag

## 🌐 Deploy

### Vercel (Easiest)
1. Push to GitHub
2. Go to vercel.com
3. Import your repo
4. Deploy! ✨

### Netlify
1. Push to GitHub
2. Go to netlify.com
3. Import repo
4. Build: `npm run build`
5. Publish: `dist`

## 💡 Pro Tips

1. **Test Often**: Run `npm run dev` after changes
2. **Start Simple**: Update one section at a time
3. **Check Mobile**: Use Chrome DevTools responsive mode
4. **Deploy Early**: Get live quickly, iterate later
5. **Keep It Simple**: Astro is designed to be straightforward

## 🆘 Troubleshooting

### Port in use
The dev server will auto-select another port

### Module not found
Run `npm install` again

### Animations not working
Check that Intersection Observer script is included in components

### Styles not applying
Make sure `global.css` is imported in `index.astro`

## 🎓 Learn More

- **Astro Docs**: https://docs.astro.build
- **Tailwind**: https://tailwindcss.com
- **TypeScript**: https://typescriptlang.org

## ✨ Next Steps

1. ✅ Extract and install
2. ✅ Run `npm run dev`
3. ✅ Update your personal info
4. ✅ Add your experience
5. ✅ Add your projects
6. ✅ Deploy to Vercel
7. ✅ Share your portfolio!

---

**Questions?** Check README.md for detailed documentation.

**Ready to deploy?** See deployment section above.

Good luck with your portfolio! 🚀

---

Made with Astro 5 + TypeScript + Tailwind CSS  
Pure Astro - No React, No Complexity, Just Fast.
