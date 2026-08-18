// Skip to main content link
document.addEventListener('DOMContentLoaded', function() {
  const skipLink = document.querySelector('.skip-to-content');
  
  if (skipLink) {
    skipLink.addEventListener('click', function(e) {
      e.preventDefault();
      const mainContent = document.querySelector('#main-content');
      if (mainContent) {
        mainContent.focus();
        mainContent.scrollIntoView();
      }
    });
  }

  // Smooth scroll behavior fallback for older browsers
  if (!CSS.supports('scroll-behavior', 'smooth')) {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({behavior: 'smooth'});
        }
      });
    });
  }
});

// Add some utility functions
document.addEventListener('DOMContentLoaded', function() {
  // Add active class to current nav link
  const currentPage = window.location.pathname;
  document.querySelectorAll('.nav-link').forEach(link => {
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('active');
    }
  });
});
