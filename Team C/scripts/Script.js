// Animation 
gsap.from('h1', {
    opacity: 0, y: -40,
    duration: 1,
    ease: 'power3.out'
});

gsap.from('.sub-text', {
    opacity: 0, y: -20,
    duration: 1,
    delay: 0.3,
    ease: 'power3.out'
});

gsap.from('[data-animate]', {
    opacity: 0,
    y: 60,
    duration: 1.3,
    stagger: 0.25,
    ease: 'power2.out'
});

//-------------------------------------------------------------------------------------------------------------------------------
// Panchkarma js
