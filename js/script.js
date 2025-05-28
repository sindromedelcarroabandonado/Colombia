// Add smooth scrolling for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Add animation to elements when they enter the viewport
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1
});

// Elements to observe
const elementsToAnimate = document.querySelectorAll('.benefit-card, .content-card, .cta-button');
elementsToAnimate.forEach(element => {
  observer.observe(element);
});

// Create placeholder images if real images are not available
document.addEventListener('DOMContentLoaded', function() {
  // Book cover image placeholder
  if (document.querySelector('.hero__image').naturalWidth === 0) {
    createPlaceholderImage('.hero__image', 'Síndrome del Carro Abandonado', 'var(--color-primary)');
  }
  
  // Author image placeholder
  if (document.querySelector('.author__image').naturalWidth === 0) {
    createPlaceholderImage('.author__image', 'JRG', 'var(--color-secondary)');
  }
});

function createPlaceholderImage(selector, text, bgColor) {
  const img = document.querySelector(selector);
  const container = document.createElement('div');
  
  container.style.width = '100%';
  container.style.height = '100%';
  container.style.backgroundColor = bgColor;
  container.style.display = 'flex';
  container.style.alignItems = 'center';
  container.style.justifyContent = 'center';
  container.style.color = 'white';
  container.style.fontWeight = 'bold';
  container.style.fontSize = '2rem';
  container.textContent = text;
  
  img.parentNode.replaceChild(container, img);
}