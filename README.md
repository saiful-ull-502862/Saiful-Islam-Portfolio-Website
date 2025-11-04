# Md Saiful Islam - Portfolio Website

A professional portfolio website showcasing expertise in FEA engineering, biomechanics, and computational modeling. Built with Astro and TailwindCSS using the Astrofy template.

## About

This portfolio website showcases the research, publications, and professional experience of Md Saiful Islam, Ph.D. Candidate specializing in:
- Finite Element Analysis (FEA)
- Soft Tissue Biomechanics
- Computational Modeling
- Machine Learning Applications
- Materials Engineering

## Features

- **Modern Design**: Clean, professional layout with dark/light mode toggle
- **Responsive**: Fully responsive design for all devices
- **Blog Section**: Research publications and technical articles
- **CV/Resume**: Detailed education and experience timeline
- **Projects Gallery**: Showcase of research projects
- **RSS Feed**: Automated RSS feed generation
- **Fast Performance**: Built with Astro for optimal loading speed

## Tech Stack

- **Framework**: Astro 3.x
- **Styling**: TailwindCSS + DaisyUI
- **Language**: TypeScript
- **Build Tool**: Astro CLI
- **Package Manager**: npm/pnpm

## Project Structure

```
portfolio-website/
├── public/
│   ├── Md Saiful Islam Resume.pdf
│   ├── Md Saiful Islam Resume.docx
│   └── assets/              # Images and media files
├── src/
│   ├── components/          # Reusable Astro components
│   ├── content/
│   │   ├── blog/           # Blog posts (markdown)
│   │   └── store/          # Store items (if needed)
│   ├── layouts/            # Page layouts
│   ├── pages/              # Page components
│   │   ├── index.astro    # Homepage
│   │   ├── cv.astro       # CV/Resume page
│   │   ├── projects.astro # Projects page
│   │   └── blog/          # Blog section
│   ├── styles/            # Global styles
│   └── config.ts          # Site configuration
├── astro.config.mjs       # Astro configuration
├── tailwind.config.cjs    # Tailwind configuration
└── package.json
```

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or pnpm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Saiful-Islam-Portfolio-Website
```

2. Install dependencies:
```bash
npm install
# or
pnpm install
```

3. Start the development server:
```bash
npm run dev
# or
pnpm dev
```

4. Open your browser and navigate to `http://localhost:4321`

### Building for Production

```bash
npm run build
# or
pnpm build
```

The built files will be in the `dist` directory.

## Deployment

### GitHub Pages

1. Update `astro.config.mjs` with your site URL
2. Build the project:
```bash
npm run build
```
3. Deploy the `dist` folder to GitHub Pages

### Netlify / Vercel

Connect your repository to Netlify or Vercel for automatic deployments:
- Build command: `npm run build`
- Publish directory: `dist`

## Customization

### Site Configuration

Update personal information in `src/config.ts`:
```typescript
export const SITE_TITLE = 'Your Name | Your Title';
export const SITE_DESCRIPTION = 'Your description';
```

### Adding Blog Posts

Create new markdown files in `src/content/blog/`:
```markdown
---
title: "Your Post Title"
description: "Post description"
pubDate: "2024-01-01"
heroImage: "/post_img.webp"
tags: ["tag1", "tag2"]
---

Your content here...
```

### Theme Customization

Modify the theme in `src/layouts/BaseLayout.astro` by changing the `data-theme` attribute. Available themes from DaisyUI include: light, dark, cupcake, and many more.

## Content Sections

- **Home**: Introduction and featured projects
- **CV**: Education, experience, skills, and certifications
- **Projects**: Research projects and technical work
- **Blog**: Publications and technical articles
- **Services**: Professional services offered (if applicable)

## Contact Information

- **Email**: md-saiful.islam1@louisiana.edu
- **LinkedIn**: [Md Saiful Islam](https://www.linkedin.com/in/saiful-islam-22b680115/)
- **Location**: Lafayette, LA

## License

This project is based on the [Astrofy](https://github.com/manuelernestog/astrofy) template by Manuel Ernesto Garcia.

## Acknowledgments

- Astrofy template by Manuel Ernesto Garcia
- Astro framework
- TailwindCSS and DaisyUI

---

Last Updated: November 2024
