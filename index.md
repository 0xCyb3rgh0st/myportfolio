---
layout: default
title: Security Research Portfolio
description: Independent security research, vulnerability analysis, and technical writeups.
---

<!-- Hero Section -->
<section class="hero">
  <div class="container">
    <div class="hero-content">
      <div class="hero-badge">
        SECURITY RESEARCHER
      </div>
      
      <h1 class="hero-title">
        Security Research &amp; Analysis
      </h1>

      <div class="hero-categories">
        <span class="category-tag">Web Security</span>
        <span class="category-tag">API Security</span>
        <span class="category-tag">Offensive Security</span>
        <span class="category-tag">Vulnerability Analysis</span>
      </div>

      <p class="hero-description">
        Independent security researcher focused on identifying and understanding vulnerabilities in modern web applications, APIs, and infrastructure. This site documents research, techniques, and practical security labs.
      </p>

      <div class="hero-actions">
        <a href="/research/" class="btn btn-primary">
          <i class="fas fa-microscope"></i> View Research
        </a>
        <a href="/projects/" class="btn btn-secondary">
          <i class="fas fa-code"></i> View Projects
        </a>
      </div>
    </div>

    <div class="hero-visual">
      <div class="visual-element"></div>
    </div>
  </div>
</section>

<!-- Recent Research Section -->
<section class="recent-section">
  <div class="container">
    <header class="section-header">
      <h2>Recent Research</h2>
      <p>Latest security research and vulnerability analysis</p>
    </header>

    <div class="research-grid">
      {% for research in site.research limit: 3 %}
        {% include research-card.html 
          title=research.title 
          description=research.description
          date=research.date
          category=research.category
          status=research.status
          technologies=research.technologies
          url=research.url
        %}
      {% endfor %}
    </div>

    <div class="section-footer">
      <a href="/research/" class="btn btn-secondary">View All Research →</a>
    </div>
  </div>
</section>

<!-- Projects Section -->
<section class="projects-section">
  <div class="container">
    <header class="section-header">
      <h2>Featured Projects</h2>
      <p>Security tools and automation frameworks</p>
    </header>

    <div class="projects-grid">
      {% for project in site.projects limit: 3 %}
        {% include project-card.html 
          title=project.title 
          description=project.description
          category=project.category
          status=project.status
          technologies=project.technologies
          year=project.year
          url=project.url
        %}
      {% endfor %}
    </div>

    <div class="section-footer">
      <a href="/projects/" class="btn btn-secondary">View All Projects →</a>
    </div>
  </div>
</section>

<!-- CTA Section -->
<section class="cta-section">
  <div class="container">
    <div class="cta-content">
      <h2>Interested in Security Research?</h2>
      <p>Explore labs, read writeups, and learn practical security techniques.</p>
      <a href="/labs/" class="btn btn-primary">Explore Security Labs</a>
    </div>
  </div>
</section>

<style>
  /* Hero Section */
  .hero {
    padding: var(--spacing-4xl) 0;
    border-bottom: 1px solid var(--border-primary);
  }

  .hero .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--spacing-3xl);
    align-items: center;
  }

  .hero-badge {
    display: inline-block;
    padding: 0.5rem 1rem;
    background-color: rgba(88, 166, 255, 0.1);
    color: var(--accent-tertiary);
    border: 1px solid var(--accent-primary);
    border-radius: var(--radius-lg);
    font-size: var(--font-size-xs);
    font-weight: var(--font-weight-semibold);
    letter-spacing: 0.05em;
    margin-bottom: var(--spacing-xl);
  }

  .hero-title {
    font-size: 3.5rem;
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: var(--spacing-lg);
    color: var(--text-primary);
  }

  .hero-categories {
    display: flex;
    flex-wrap: wrap;
    gap: var(--spacing-md);
    margin-bottom: var(--spacing-2xl);
  }

  .category-tag {
    display: inline-block;
    padding: 0.4rem 0.8rem;
    background-color: var(--surface-secondary);
    border: 1px solid var(--border-primary);
    border-radius: var(--radius-md);
    font-size: var(--font-size-sm);
    font-weight: var(--font-weight-medium);
    color: var(--text-secondary);
  }

  .hero-description {
    font-size: var(--font-size-lg);
    line-height: var(--line-height-relaxed);
    color: var(--text-secondary);
    margin-bottom: var(--spacing-2xl);
    max-width: 600px;
  }

  .hero-actions {
    display: flex;
    gap: var(--spacing-md);
    flex-wrap: wrap;
  }

  .hero-visual {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 400px;
  }

  .visual-element {
    width: 100%;
    height: 300px;
    background: linear-gradient(135deg, rgba(88, 166, 255, 0.1), rgba(31, 111, 235, 0.05));
    border: 1px solid var(--border-primary);
    border-radius: var(--radius-xl);
    position: relative;
    overflow: hidden;
  }

  .visual-element::before {
    content: '';
    position: absolute;
    top: -50%;
    right: -50%;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle, rgba(88, 166, 255, 0.1) 1px, transparent 1px);
    background-size: 50px 50px;
    animation: float 20s ease-in-out infinite;
  }

  @keyframes float {
    0%, 100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-20px);
    }
  }

  /* Sections */
  .recent-section,
  .projects-section {
    padding: var(--spacing-4xl) 0;
    border-bottom: 1px solid var(--border-primary);
  }

  .section-header {
    margin-bottom: var(--spacing-3xl);
    text-align: center;
  }

  .section-header h2 {
    margin-bottom: var(--spacing-md);
    font-size: 2.5rem;
  }

  .section-header p {
    font-size: var(--font-size-lg);
    color: var(--text-secondary);
    margin: 0;
  }

  .research-grid,
  .projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: var(--spacing-xl);
    margin-bottom: var(--spacing-3xl);
  }

  .section-footer {
    text-align: center;
  }

  /* CTA Section */
  .cta-section {
    padding: var(--spacing-4xl) 0;
    background-color: var(--surface-primary);
    border-radius: var(--radius-xl);
    border: 1px solid var(--border-primary);
    margin: var(--spacing-4xl) 0;
  }

  .cta-content {
    text-align: center;
  }

  .cta-content h2 {
    margin-bottom: var(--spacing-md);
    font-size: 2rem;
  }

  .cta-content p {
    font-size: var(--font-size-lg);
    color: var(--text-secondary);
    margin-bottom: var(--spacing-lg);
  }

  /* Mobile */
  @media (max-width: 1024px) {
    .hero .container {
      grid-template-columns: 1fr;
    }

    .hero-title {
      font-size: 2.5rem;
    }

    .hero-visual {
      min-height: 300px;
    }
  }

  @media (max-width: 768px) {
    .hero {
      padding: var(--spacing-2xl) 0;
    }

    .hero-title {
      font-size: 2rem;
    }

    .hero-actions {
      flex-direction: column;
    }

    .hero-actions .btn {
      width: 100%;
    }

    .section-header h2 {
      font-size: 1.75rem;
    }

    .cta-content h2 {
      font-size: 1.5rem;
    }
  }
</style>
