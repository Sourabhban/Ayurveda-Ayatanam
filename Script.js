// MOBILE MENU TOGGLE
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');

    menuToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });

    // DROPDOWN TOGGLE
    const dropdownToggle = document.querySelector('.dropdown-toggle');
    const dropdownMenu = document.getElementById('aboutMenu');
    const arrow = document.getElementById('aboutArrow');

    dropdownToggle.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      dropdownMenu.classList.toggle('show');
      arrow.classList.toggle('rotate');
    });

    // CLOSE DROPDOWN ON OUTSIDE CLICK
    document.addEventListener('click', () => {
      dropdownMenu.classList.remove('show');
      arrow.classList.remove('rotate');
    });

    // FORM SUBMISSION
    document.getElementById('contactForm').addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Thank you! Your message has been sent.');
      e.target.reset();
    });

    // NAVBAR SCROLL EFFECT
    window.addEventListener('scroll', () => {
      const navbar = document.querySelector('.navbar');
      if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255,255,255,0.98)';
        navbar.style.backdropFilter = 'blur(10px)';
      } else {
        navbar.style.background = '#fff';
        navbar.style.backdropFilter = 'none';
      }
    });

    // SMOOTH SCROLLING
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });