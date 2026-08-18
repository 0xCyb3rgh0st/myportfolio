---
layout: page
title: Research
description: Security research, vulnerability analysis, and technical investigations.
permalink: /research/
---

<div class="research-page">
  <div class="page-intro">
    <p>Detailed security research covering web applications, APIs, infrastructure, and emerging threats. Each article documents methodologies, findings, and practical recommendations.</p>
  </div>

  <!-- Filter Options -->
  <div class="research-filters">
    <h3>Filter by Category</h3>
    <div class="filter-tags">
      <a href="/research/" class="filter-tag active">All</a>
      {% assign categories = site.research | map: 'category' | uniq %}
      {% for category in categories %}
        <a href="#{{ category | slugify }}" class="filter-tag">{{ category }}</a>
      {% endfor %}
    </div>
  </div>

  <!-- Research Grid -->
  <div class="research-grid">
    {% for research in site.research %}
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

  {% if site.research.size == 0 %}
    <div class="empty-state">
      <p>No research articles published yet. Check back soon.</p>
    </div>
  {% endif %}
</div>

<style>
  .research-page {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 var(--spacing-lg);
  }

  .page-intro {
    font-size: var(--font-size-lg);
    color: var(--text-secondary);
    margin-bottom: var(--spacing-3xl);
    padding-bottom: var(--spacing-2xl);
    border-bottom: 1px solid var(--border-primary);
  }

  .research-filters {
    margin-bottom: var(--spacing-3xl);
  }

  .research-filters h3 {
    margin-bottom: var(--spacing-lg);
    font-size: var(--font-size-lg);
  }

  .filter-tags {
    display: flex;
    flex-wrap: wrap;
    gap: var(--spacing-md);
  }

  .filter-tag {
    padding: 0.5rem 1rem;
    background-color: var(--surface-secondary);
    color: var(--text-secondary);
    border: 1px solid var(--border-primary);
    border-radius: var(--radius-lg);
    font-size: var(--font-size-sm);
    text-decoration: none;
    transition: all var(--transition-base);
    cursor: pointer;
  }

  .filter-tag:hover,
  .filter-tag.active {
    background-color: var(--accent-primary);
    color: var(--bg-primary);
    border-color: var(--accent-primary);
  }

  .research-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
    gap: var(--spacing-xl);
  }

  .empty-state {
    text-align: center;
    padding: var(--spacing-3xl);
    color: var(--text-secondary);
  }

  @media (max-width: 768px) {
    .research-grid {
      grid-template-columns: 1fr;
    }

    .filter-tags {
      gap: var(--spacing-sm);
    }

    .filter-tag {
      font-size: var(--font-size-xs);
      padding: 0.4rem 0.8rem;
    }
  }
</style>
