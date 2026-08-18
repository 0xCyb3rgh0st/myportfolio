---
layout: page
title: Security Labs
description: Practical security laboratories and hands-on experimentation environments.
permalink: /labs/
---

<div class="labs-page">
  <div class="page-intro">
    <p>Practical security laboratories covering various domains including web security, network security, malware analysis, and detection engineering. Each lab includes objectives, setup instructions, and learning resources.</p>
  </div>

  <!-- Labs Grid -->
  <div class="labs-grid">
    {% for lab in site.labs %}
      {% include lab-card.html 
        title=lab.title 
        objective=lab.objective
        category=lab.category
        difficulty=lab.difficulty
        status=lab.status
        technologies=lab.technologies
        url=lab.url
      %}
    {% endfor %}
  </div>

  {% if site.labs.size == 0 %}
    <div class="empty-state">
      <p>No labs created yet. Check back soon.</p>
    </div>
  {% endif %}
</div>

<style>
  .labs-page {
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

  .labs-grid {
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
    .labs-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
