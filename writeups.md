---
layout: page
title: Writeups & Technical Articles
description: Detailed technical writeups, tutorials, and security analysis articles.
permalink: /writeups/
---

<div class="writeups-page">
  <div class="page-intro">
    <p>In-depth technical writeups covering vulnerability exploitation, CTF solutions, and practical security techniques. These articles provide step-by-step guidance and detailed analysis.</p>
  </div>

  <!-- Blog Posts -->
  <div class="writeups-list">
    {% if site.posts.size > 0 %}
      {% for post in site.posts %}
        <article class="writeup-item">
          <div class="writeup-header">
            <h3 class="writeup-title">
              <a href="{{ post.url }}">{{ post.title }}</a>
            </h3>
            {% if post.category %}
              <span class="badge badge-accent">{{ post.category }}</span>
            {% endif %}
          </div>

          {% if post.description %}
            <p class="writeup-description">{{ post.description }}</p>
          {% endif %}

          <div class="writeup-meta">
            <time datetime="{{ post.date | date_to_xmlschema }}">
              <i class="far fa-calendar"></i>
              {{ post.date | date: "%B %d, %Y" }}
            </time>
            {% if post.reading_time %}
              <span class="reading-time">
                <i class="far fa-clock"></i>
                {{ post.reading_time }} min read
              </span>
            {% endif %}
            {% if post.tags %}
              <div class="writeup-tags">
                {% for tag in post.tags limit: 3 %}
                  <span class="tag">{{ tag }}</span>
                {% endfor %}
              </div>
            {% endif %}
          </div>

          <a href="{{ post.url }}" class="read-more">Read Article →</a>
        </article>
      {% endfor %}
    {% else %}
      <div class="empty-state">
        <p>No writeups published yet. Check back soon.</p>
      </div>
    {% endif %}
  </div>
</div>

<style>
  .writeups-page {
    max-width: 900px;
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

  .writeups-list {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-2xl);
  }

  .writeup-item {
    padding: var(--spacing-xl);
    background-color: var(--surface-primary);
    border: 1px solid var(--border-primary);
    border-radius: var(--radius-lg);
    transition: all var(--transition-base);
  }

  .writeup-item:hover {
    border-color: var(--accent-primary);
    background-color: var(--surface-secondary);
  }

  .writeup-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: var(--spacing-lg);
    margin-bottom: var(--spacing-md);
  }

  .writeup-title {
    margin: 0;
    font-size: var(--font-size-lg);
  }

  .writeup-title a {
    color: var(--accent-primary);
    text-decoration: none;
  }

  .writeup-title a:hover {
    color: var(--accent-tertiary);
  }

  .writeup-description {
    color: var(--text-secondary);
    margin-bottom: var(--spacing-lg);
  }

  .writeup-meta {
    display: flex;
    flex-wrap: wrap;
    gap: var(--spacing-lg);
    margin-bottom: var(--spacing-lg);
    font-size: var(--font-size-sm);
    color: var(--text-tertiary);
  }

  .writeup-meta time {
    display: flex;
    align-items: center;
    gap: var(--spacing-sm);
  }

  .reading-time {
    display: flex;
    align-items: center;
    gap: var(--spacing-sm);
  }

  .writeup-tags {
    display: flex;
    flex-wrap: wrap;
    gap: var(--spacing-sm);
  }

  .writeup-tags .tag {
    font-size: var(--font-size-xs);
    padding: 0.2em 0.4em;
    background-color: var(--surface-secondary);
    border-radius: var(--radius-sm);
    color: var(--text-tertiary);
  }

  .read-more {
    display: inline-flex;
    align-items: center;
    gap: var(--spacing-sm);
    color: var(--accent-primary);
    text-decoration: none;
    font-weight: var(--font-weight-semibold);
    transition: all var(--transition-base);
  }

  .read-more:hover {
    color: var(--accent-tertiary);
  }

  .empty-state {
    text-align: center;
    padding: var(--spacing-3xl);
    color: var(--text-secondary);
  }

  @media (max-width: 768px) {
    .writeup-header {
      flex-direction: column;
      gap: var(--spacing-md);
    }

    .writeup-meta {
      flex-direction: column;
      gap: var(--spacing-sm);
    }
  }
</style>
