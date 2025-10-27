# Vagabond Vibes — Static Website

This is a responsive, SEO-friendly static website for the travel brand "Vagabond Vibes".

What you get:
- index.html — fully structured, accessible HTML with SEO meta tags and schema.org JSON-LD.
- css/styles.css — responsive, modern styling (mobile-first).
- js/main.js — small scripts for nav toggle, smooth scrolling, and a demo contact handler.
- sitemap.xml and robots.txt examples.
- assets/ — place your logo and optimized images here.

Quick setup:
1. Create folders:
   - assets/
   - css/
   - js/

2. Add files to the repository from this template:
   - index.html
   - css/styles.css
   - js/main.js
   - sitemap.xml
   - robots.txt
   - README.md

3. Add images:
   - Place the provided logo image as `assets/logo.png` (used throughout).
   - Add hero and destination images (recommended: optimized .webp plus fallback .jpg)
     - assets/hero.jpg, assets/hero.webp
     - assets/dest-beach.jpg, assets/dest-mountain.jpg, assets/dest-city.jpg
     - assets/favicon.png

4. Serve the site:
   - Locally: `npx http-server` or `python3 -m http.server 8000`
   - Deploy: any static host (GitHub Pages, Netlify, Vercel, S3 + CloudFront).

Performance & SEO notes:
- The template uses system fonts to avoid external font network requests — swap in preloaded webfonts if you prefer.
- Replace placeholder images with optimized JPEG/WebP at appropriate sizes. Use responsive srcsets for larger projects.
- Add real contact form backend (Formspree, Netlify Forms, or your server) by updating the form action in `index.html` and removing the simulated send in `js/main.js`.
- Add real domain in meta canonical and structured data before publishing.
- Add compression (gzip/brotli) and a CDN for best global performance.

Accessibility:
- Keyboard focusable cards, meaningful alt text on images, ARIA attributes on navigation and live region for form status.

If you'd like, I can:
- generate optimized webp versions of your logo,
- wire the contact form to Netlify Forms or a serverless function,
- create a pull request from this branch into main and enable a GitHub Pages/Netlify deployment.