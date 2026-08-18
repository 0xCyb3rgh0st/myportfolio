---
layout: page
title: Projects
description: Security tools, automation frameworks, and open-source projects.
permalink: /projects/
---

<div class="projects-page">
  <div class="page-intro">
    <p>Open-source security tools and automation frameworks designed to improve security workflows, enable easier vulnerability detection, and streamline security research.</p>
  </div>

  <!-- Projects Grid -->
  <div class="projects-grid">
    {% for project in site.projects %}
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

  {% if site.projects.size == 0 %}
    <div class="empty-state">
      <p>No projects published yet. Check back soon.</p>
    </div>
  {% endif %}
</div>

<style>
  .projects-page {
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

  .projects-grid {
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
    .projects-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
