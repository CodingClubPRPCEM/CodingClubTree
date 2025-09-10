// Main JavaScript for Coding Club Tree

document.addEventListener('DOMContentLoaded', function() {
  // Initialize animations
  initParticleBackground();
  initCodeRain();
  animateSlogan();
  
  // Track page views
  trackPageView();
  
  // Add hover effects to cards
  addCardHoverEffects();
});

// Create a particle background effect
function initParticleBackground() {
  const particleBg = document.getElementById('particleBg');
  if (!particleBg) return;
  
  const colors = ['#00d4ff', '#8b5cf6', '#f472b6', '#10b981'];
  
  // Generate particles based on screen size
  const particleCount = window.innerWidth < 768 ? 15 : 30;
  
  for (let i = 0; i < particleCount; i++) {
    createParticle(particleBg, colors);
  }
}

function createParticle(container, colors) {
  const particle = document.createElement('div');
  particle.classList.add('particle');
  
  // Random properties
  const size = Math.random() * 4 + 2;
  const color = colors[Math.floor(Math.random() * colors.length)];
  const left = Math.random() * 100;
  const delay = Math.random() * 10;
  const duration = Math.random() * 20 + 10;
  
  // Apply styles
  particle.style.width = `${size}px`;
  particle.style.height = `${size}px`;
  particle.style.backgroundColor = color;
  particle.style.boxShadow = `0 0 ${size * 2}px ${color}`;
  particle.style.left = `${left}%`;
  particle.style.bottom = '-20px';
  particle.style.animationDelay = `${delay}s`;
  particle.style.animationDuration = `${duration}s`;
  
  container.appendChild(particle);
}

// Create Matrix-style code rain effect
function initCodeRain() {
  const codeRain = document.getElementById('codeRain');
  if (!codeRain) return;
  
  const characters = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン01010101';
  const columns = Math.floor(window.innerWidth / 20);
  
  for (let i = 0; i < columns; i++) {
    const column = document.createElement('div');
    column.classList.add('code-column');
    column.style.left = `${i * 20}px`;
    column.style.animationDelay = `${Math.random() * 2}s`;
    column.style.animationDuration = `${Math.random() * 3 + 1}s`;
    
    const columnLength = Math.floor(Math.random() * 30) + 5;
    
    for (let j = 0; j < columnLength; j++) {
      const char = document.createElement('div');
      char.textContent = characters.charAt(Math.floor(Math.random() * characters.length));
      char.style.color = j === 0 ? '#00d4ff' : '#22c55e';
      char.style.opacity = j === 0 ? '1' : `${(columnLength - j) / columnLength}`;
      column.appendChild(char);
    }
    
    codeRain.appendChild(column);
  }
}

// Animate the "Think Beyond the Syntax" slogan
function animateSlogan() {
  const slogan = document.querySelector('.slogan');
  if (!slogan) return;
  
  // Add typing animation class
  slogan.classList.add('typing-animation');
}

// Track page views
function trackPageView() {
  // Simple fetch to update view count
  fetch('viewCount.json')
    .then(response => response.json())
    .then(data => {
      let count = data.count || 0;
      count++;
      
      // Update display if element exists
      const viewCounter = document.getElementById('viewCounter');
      if (viewCounter) {
        viewCounter.textContent = count;
      }
      
      // For a real implementation, you'd send this back to the server
      // But for this demo, we'll just log it
      console.log(`Page view count: ${count}`);
    })
    .catch(error => console.error('Error updating view count:', error));
}

// Add hover effects to social cards
function addCardHoverEffects() {
  const cards = document.querySelectorAll('.social-card');
  
  cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      const icon = this.querySelector('i');
      if (icon) {
        icon.classList.add('animate-float');
      }
    });
    
    card.addEventListener('mouseleave', function() {
      const icon = this.querySelector('i');
      if (icon) {
        icon.classList.remove('animate-float');
      }
    });
  });
}
