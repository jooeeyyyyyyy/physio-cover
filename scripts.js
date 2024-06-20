// scripts.js

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Initialize ScrollReveal with fade-in effect
ScrollReveal().reveal('.header, .hero, .welcome, .footer, .logo, h1, .contact', {
  duration: 1000,
  opacity: 0,
  easing: 'ease-in-out',
  reset: true
});

// Parallax scrolling effect
window.addEventListener('scroll', function() {
  const scrolled = window.scrollY;
  document.querySelector('.hero').style.backgroundPositionY = `${scrolled * 0.5}px`;
});

// Burger menu toggle
const burgerMenu = document.getElementById('burger-menu');
const navMobile = document.getElementById('nav-mobile');

burgerMenu.addEventListener('click', function() {
  burgerMenu.classList.toggle('open');
  navMobile.classList.toggle('open');
});
  
  