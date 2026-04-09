// Mobile menu toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Scroll: make navbar solid after hero
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 80) {
    navbar.style.background = 'rgba(26,26,26,0.97)';
  } else {
    navbar.style.background = 'rgba(0,0,0,0.7)';
  }
});
