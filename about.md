---
layout: page
title: About
description: Background, experience, and focus areas in cybersecurity research.
permalink: /about/
---

<div class="about-page">
  <div class="about-intro">
    <h2>About This Research</h2>
    <p>This portfolio documents independent security research, vulnerability analysis, and practical security experimentation. The focus is on understanding attack vectors, developing detection mechanisms, and sharing knowledge with the security community.</p>
  </div>

  <div class="about-sections">
    <!-- Security Focus -->
    <section class="about-section">
      <h3>Security Focus</h3>
      <div class="about-content">
        <ul>
          <li>Web Application Security</li>
          <li>API Security and Analysis</li>
          <li>Vulnerability Assessment and Exploitation</li>
          <li>Security Automation and Tooling</li>
          <li>Offensive Security Techniques</li>
          <li>Security Research Methodology</li>
        </ul>
      </div>
    </section>

    <!-- Technical Interests -->
    <section class="about-section">
      <h3>Technical Interests</h3>
      <div class="about-content">
        <div class="interest-tags">
          <span class="tech-tag">Web Security</span>
          <span class="tech-tag">API Security</span>
          <span class="tech-tag">Python</span>
          <span class="tech-tag">JavaScript</span>
          <span class="tech-tag">Reverse Engineering</span>
          <span class="tech-tag">Penetration Testing</span>
          <span class="tech-tag">Vulnerability Research</span>
          <span class="tech-tag">OWASP</span>
          <span class="tech-tag">Burp Suite</span>
          <span class="tech-tag">Docker</span>
        </div>
      </div>
    </section>

    <!-- Certifications -->
    <section class="about-section">
      <h3>Certifications</h3>
      <div class="about-content">
        <p class="placeholder-note"><em>Add your certifications here. Only include genuine credentials. Examples:</em></p>
        <ul class="placeholder-list">
          <li>Offensive Security Web Expert (OSWE) - if applicable</li>
          <li>Certified Ethical Hacker (CEH) - if applicable</li>
          <li>GIAC Security Essentials (GSEC) - if applicable</li>
          <li>Other relevant certifications</li>
        </ul>
      </div>
    </section>

    <!-- Tools & Technologies -->
    <section class="about-section">
      <h3>Tools & Technologies</h3>
      <div class="about-content">
        <div class="tool-categories">
          <div class="tool-group">
            <h4>Security Testing</h4>
            <ul>
              <li>Burp Suite</li>
              <li>OWASP ZAP</li>
              <li>Metasploit</li>
              <li>Wireshark</li>
            </ul>
          </div>
          <div class="tool-group">
            <h4>Development</h4>
            <ul>
              <li>Python</li>
              <li>JavaScript / Node.js</li>
              <li>Bash</li>
              <li>Git</li>
            </ul>
          </div>
          <div class="tool-group">
            <h4>Infrastructure</h4>
            <ul>
              <li>Docker</li>
              <li>Linux</li>
              <li>AWS</li>
              <li>GitHub</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact -->
    <section class="about-section">
      <h3>Contact &amp; Connect</h3>
      <div class="about-content">
        <p>For inquiries about research, collaboration, or security issues:</p>
        <div class="contact-links">
          <a href="mailto:your-email@example.com" class="contact-link">
            <i class="fas fa-envelope"></i> Email
          </a>
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" class="contact-link">
            <i class="fab fa-github"></i> GitHub
          </a>
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" class="contact-link">
            <i class="fab fa-linkedin"></i> LinkedIn
          </a>
        </div>
      </div>
    </section>
  </div>
</div>

<style>
  .about-page {
    max-width: 900px;
    margin: 0 auto;
    padding: 0 var(--spacing-lg);
  }

  .about-intro {
    margin-bottom: var(--spacing-3xl);
    padding-bottom: var(--spacing-2xl);
    border-bottom: 1px solid var(--border-primary);
  }

  .about-intro h2 {
    margin-bottom: var(--spacing-lg);
  }

  .about-intro p {
    font-size: var(--font-size-lg);
    color: var(--text-secondary);
    line-height: var(--line-height-relaxed);
  }

  .about-sections {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-3xl);
  }

  .about-section {
    padding: var(--spacing-xl);
    background-color: var(--surface-primary);
    border: 1px solid var(--border-primary);
    border-radius: var(--radius-lg);
  }

  .about-section h3 {
    margin-top: 0;
    margin-bottom: var(--spacing-lg);
    font-size: var(--font-size-xl);
  }

  .about-section h4 {
    margin-top: 0;
    margin-bottom: var(--spacing-md);
    font-size: var(--font-size-base);
    color: var(--accent-primary);
  }

  .about-content ul {
    margin-left: var(--spacing-lg);
    list-style-type: disc;
  }

  .about-content li {
    color: var(--text-secondary);
    margin-bottom: var(--spacing-sm);
  }

  .placeholder-note {
    color: var(--text-tertiary);
    font-size: var(--font-size-sm);
    margin-bottom: var(--spacing-lg);
  }

  .placeholder-list {
    color: var(--text-tertiary);
  }

  .interest-tags {
    display: flex;
    flex-wrap: wrap;
    gap: var(--spacing-md);
  }

  .tech-tag {
    display: inline-block;
    padding: 0.5rem 1rem;
    background-color: var(--surface-secondary);
    color: var(--accent-tertiary);
    border: 1px solid var(--border-primary);
    border-radius: var(--radius-lg);
    font-size: var(--font-size-sm);
    font-weight: var(--font-weight-medium);
  }

  .tool-categories {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: var(--spacing-lg);
  }

  .tool-group ul {
    margin-left: var(--spacing-lg);
    list-style-type: disc;
  }

  .tool-group li {
    color: var(--text-secondary);
    margin-bottom: var(--spacing-sm);
  }

  .contact-links {
    display: flex;
    flex-wrap: wrap;
    gap: var(--spacing-lg);
    margin-top: var(--spacing-lg);
  }

  .contact-link {
    display: inline-flex;
    align-items: center;
    gap: var(--spacing-sm);
    padding: 0.5rem 1rem;
    background-color: var(--surface-secondary);
    color: var(--accent-primary);
    border: 1px solid var(--border-primary);
    border-radius: var(--radius-lg);
    text-decoration: none;
    transition: all var(--transition-base);
  }

  .contact-link:hover {
    background-color: var(--accent-primary);
    color: var(--bg-primary);
    border-color: var(--accent-primary);
  }

  @media (max-width: 768px) {
    .about-section {
      padding: var(--spacing-lg);
    }

    .tool-categories {
      grid-template-columns: 1fr;
    }

    .contact-links {
      flex-direction: column;
    }

    .contact-link {
      justify-content: center;
      width: 100%;
    }
  }
</style>
