# Security Research Portfolio

A production-ready, Jekyll-based cybersecurity research portfolio website. Static, fast, mobile-responsive, and designed for security researchers.

## Features

- ✅ **Static Site** - No database or backend required
- ✅ **Fast** - Optimized Jekyll build, minimal JavaScript
- ✅ **Mobile Responsive** - Works perfectly on all devices (375px - 1440px+)
- ✅ **Accessible** - WCAG compliance, keyboard navigation, screen reader support
- ✅ **SEO Optimized** - Proper semantic HTML, metadata, sitemap, Open Graph
- ✅ **GitHub Pages Compatible** - Free hosting with automatic deployment
- ✅ **Dark Theme** - Modern, professional security research aesthetic
- ✅ **Collections** - Research, Projects, Labs, and Writeups
- ✅ **Decap CMS Ready** - Can add headless CMS later without major changes

## Technology Stack

- **Jekyll 4.x** - Static site generator
- **Liquid** - Template language
- **HTML5 & CSS3** - Modern semantic markup and styling
- **Vanilla JavaScript** - Minimal, accessible
- **Markdown** - Content authoring
- **YAML** - Configuration and data
- **GitHub Pages** - Free hosting
- **GitHub Actions** - CI/CD deployment

## Quick Start

### Local Development

**Prerequisites:** Ruby 3.0+, Bundler

```bash
# Install dependencies
bundle install

# Start development server
bundle exec jekyll serve
```

Visit `http://localhost:4000`

### Deploy to GitHub Pages

1. Push to GitHub
2. Enable GitHub Pages in Settings → Pages
3. GitHub Actions automatically builds and deploys

## Directory Structure

```
myportfolio/
├── _config.yml              # Jekyll configuration
├── _layouts/                # HTML templates
│   ├── default.html        # Base layout
│   ├── page.html           # Page layout
│   ├── post.html           # Blog post layout
│   ├── research.html       # Research article layout
│   ├── project.html        # Project detail layout
│   └── lab.html            # Lab detail layout
├── _includes/              # Reusable components
│   ├── navbar.html         # Navigation bar
│   ├── footer.html         # Footer
│   ├── research-card.html  # Research card component
│   ├── project-card.html   # Project card component
│   └── lab-card.html       # Lab card component
├── _research/              # Research articles (collection)
├── _projects/              # Projects (collection)
├── _labs/                  # Labs (collection)
├── _posts/                 # Blog writeups
├── assets/
│   ├── css/
│   │   ├── main.css        # Design system and base styles
│   │   ├── responsive.css  # Media queries
│   │   └── accessibility.css
│   ├── js/
│   │   └── main.js         # Minimal JavaScript
│   └── images/             # Images and assets
├── .github/workflows/      # GitHub Actions
│   └── jekyll.yml         # Build and deploy workflow
├── index.md               # Homepage
├── research.md            # Research page
├── writeups.md            # Writeups page
├── projects.md            # Projects page
├── labs.md                # Labs page
├── about.md               # About page
├── 404.html               # 404 page
├── robots.txt             # Search engines
├── Gemfile                # Ruby dependencies
└── README.md              # This file
```

## Creating Content

### Adding Research Articles

Create a new file in `_research/` with front matter:

```markdown
---
title: "Article Title"
description: "Short summary"
date: 2024-02-15
category: "Web Security"
tags: [web, security, research]
status: "Published"
severity: "High"
technologies: ["Python", "Burp Suite"]
reading_time: 12
---

Your article content here.
```

### Adding Projects

Create a new file in `_projects/`:

```markdown
---
title: "Project Name"
description: "What it does"
category: "Security Tools"
technologies: ["Python", "FastAPI"]
status: "Active"
year: 2024
github_url: "https://github.com/..."
demo_url: "https://demo.example.com"
---

Project details.
```

### Adding Labs

Create a new file in `_labs/`:

```markdown
---
title: "Lab Name"
objective: "What you'll learn"
category: "Web Security"
difficulty: "Beginner"
status: "Complete"
technologies: ["Docker", "Python"]
---

Lab instructions and content.
```

### Adding Writeups

Create a new file in `_posts/` with filename `YYYY-MM-DD-title.md`:

```markdown
---
title: "Writeup Title"
description: "Summary"
date: 2024-02-15
category: "CTF"
tags: [ctf, writeup]
reading_time: 8
---

Writeup content.
```

## Customization

### Update Configuration

Edit `_config.yml`:

```yaml
title: Your Portfolio Title
description: Your description
author: Your Name
email: your-email@example.com
url: https://yourdomain.com
```

### Update Contact Information

Update in multiple locations:
- `_config.yml` - social links
- `_includes/navbar.html` - GitHub/LinkedIn
- `_includes/footer.html` - Contact links
- `about.md` - About section

### Customize Theme

Edit CSS variables in `assets/css/main.css`:

```css
:root {
  --bg-primary: #0d1117;
  --text-primary: #e6edf3;
  --accent-primary: #58a6ff;
  /* ... more variables ... */
}
```

## GitHub Pages Setup

1. **Enable Pages**
   - Settings → Pages
   - Source: Deploy from a branch
   - Branch: main / root

2. **Configure Actions**
   - Settings → Actions → General
   - Enable workflow permissions

3. **Custom Domain** (optional)
   - Settings → Pages → Custom domain
   - Update DNS records
   - Update `_config.yml` url

## SEO & Analytics

- Includes Open Graph and Twitter metadata
- XML sitemap and robots.txt
- Optional Google Analytics support
- Structured data ready

Add Google Analytics:
```yaml
google_analytics: UA-XXXXXXXXX-X  # in _config.yml
```

## Accessibility

- WCAG 2.1 AA compliant
- Keyboard navigation
- Screen reader support
- Skip to content link
- Reduced motion support
- Semantic HTML

## Performance

- Static site (fast)
- Minimal JavaScript
- No heavy frameworks
- Optimized CSS
- Mobile-first design

Check with Lighthouse, PageSpeed Insights, or GTmetrix.

## Security

- No backend or database
- No unnecessary scripts
- Minimal dependencies
- HTTPS ready (GitHub Pages)
- No secrets in code

## Deployment

**Local build:**
```bash
bundle exec jekyll build
```

**GitHub Pages:** Automatic via GitHub Actions (`.github/workflows/jekyll.yml`)

## Troubleshooting

**Jekyll won't build:**
```bash
rm -rf _site .jekyll-cache
bundle exec jekyll build
```

**Update gems:**
```bash
bundle update
```

**Check Jekyll version:**
```bash
bundle exec jekyll --version
```

## Important Notes

- ⚠️ All sample content is placeholder - replace with your actual research
- ⚠️ Update contact info in multiple files
- ⚠️ Don't commit `.env` files or secrets
- ⚠️ Test locally before pushing
- ⚠️ Keep dependencies updated

## Future Enhancements

- Add Decap CMS for headless content editing
- Add analytics (Google Analytics, Plausible)
- Add comments system (Giscus, Utterances)
- Add search functionality

## Resources

- [Jekyll Docs](https://jekyllrb.com/)
- [GitHub Pages](https://pages.github.com/)
- [Markdown Guide](https://www.markdownguide.org/)
- [YAML Syntax](https://yaml.org/)
- [Liquid Templates](https://shopify.github.io/liquid/)

---

**Built for security researchers. Fast. Clean. Professional.**