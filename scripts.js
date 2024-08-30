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
ScrollReveal().reveal('.header, .hero, .welcome, .leistungen, .footer, .logo, h1, .contact', {
  duration: 1000,
  opacity: 0,
  easing: 'ease-in-out',
  reset: true
});

// Burger menu toggle
document.addEventListener('DOMContentLoaded', function () {
  const burgerMenu = document.getElementById('burger-menu');
  const navMobile = document.getElementById('nav-mobile');

  burgerMenu.addEventListener('click', function() {
    burgerMenu.classList.toggle('open');
    navMobile.classList.toggle('open');
  });

  // Close mobile menu on link click
  document.querySelectorAll('#nav-mobile a').forEach(link => {
    link.addEventListener('click', function() {
      burgerMenu.classList.remove('open');
      navMobile.classList.remove('open');
    });
  });
});

  