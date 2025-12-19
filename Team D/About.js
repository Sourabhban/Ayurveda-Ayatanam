document.addEventListener('DOMContentLoaded', () => {
    // Select all elements that should animate (matching our CSS classes)
    const boxes = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right');

    // Check which boxes should be shown based on scroll position
    function checkBoxes() {
        // Trigger point: 4/5 of the viewport height from the top
        const triggerBottom = window.innerHeight / 5 * 4;

        boxes.forEach(box => {
            const boxTop = box.getBoundingClientRect().top;

            // If the top of the box is within the viewport trigger zone
            if (boxTop < triggerBottom) {
                box.classList.add('active');
            } else {
                // Remove class to allow re-animation if scrolled out
                box.classList.remove('active');
            }
        });
    }

    // Initialize boxes on page load
    checkBoxes();

    // Listen for scroll events
    window.addEventListener('scroll', checkBoxes);

    // Stats Counter Animation
    const counters = document.querySelectorAll('.counter-value');
    let hasCounted = false;

    // Attach counter check to scroll
    const statsSection = document.querySelector('.stats-section');
    if (statsSection) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !hasCounted) {
                    hasCounted = true;
                    counters.forEach(counter => {
                        const target = +counter.getAttribute('data-target');
                        const duration = 2000; // 2 seconds
                        const increment = target / (duration / 16);

                        let current = 0;
                        const updateCounter = () => {
                            current += increment;
                            if (current < target) {
                                counter.innerText = Math.ceil(current);
                                requestAnimationFrame(updateCounter);
                            } else {
                                counter.innerText = target + "+"; // Add plus sign at end
                            }
                        };
                        updateCounter();
                    });
                }
            });
        }, { threshold: 0.5 }); // Trigger when 50% of the section is visible

        observer.observe(statsSection);
        observer.observe(statsSection);
    }

    // Growing Timeline Animation
    const timelineSection = document.querySelector('.timeline-section');
    const lineProgress = document.getElementById('lineProgress');
    const timelineItems = document.querySelectorAll('.timeline-item');

    if (timelineSection && lineProgress) {
        window.addEventListener('scroll', () => {
            const sectionRect = timelineSection.getBoundingClientRect();
            const sectionTop = sectionRect.top;
            const sectionHeight = sectionRect.height;
            const windowHeight = window.innerHeight;

            // Start filling when section top hits middle of screen
            let percentage = 0;
            const startPoint = windowHeight * 0.6; // Trigger point

            if (sectionTop < startPoint) {
                // Calculate how much we've scrolled past the start point
                const scrolled = startPoint - sectionTop;
                // Cap at 100%
                percentage = Math.min((scrolled / (sectionHeight * 0.8)) * 100, 100);
                percentage = Math.max(percentage, 0); // floor at 0
            }

            lineProgress.style.height = `${percentage}%`;

            // Trigger Items based on line progress or viewport
            timelineItems.forEach(item => {
                const itemTop = item.getBoundingClientRect().top;
                // If item is somewhat above the bottom of the viewport (or "hit" by the line)
                if (itemTop < windowHeight * 0.75) {
                    item.classList.add('active');
                }
            });
        });
    }

    // Sacred Gold Dust Animation (Canvas)
    initSacredGoldDust();
});

function initSacredGoldDust() {
    const canvas = document.getElementById('sacredCanvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let width, height;
    let particles = [];

    // Resize handling
    function resize() {
        width = canvas.width = canvas.offsetWidth;
        height = canvas.height = canvas.offsetHeight;
    }
    window.addEventListener('resize', resize);
    resize();

    // Particle Class
    class Particle {
        constructor() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            this.vx = (Math.random() - 0.5) * 0.3; // Slow horizontal drift
            this.vy = (Math.random() * -0.5) - 0.2; // Gentle upward float
            this.size = Math.random() * 2 + 0.5;
            this.alpha = Math.random() * 0.5 + 0.1;
            this.color = `rgba(197, 160, 40, ${this.alpha})`; // Gold color
        }

        update() {
            this.x += this.vx;
            this.y += this.vy;

            // Wrap around screen
            if (this.y < 0) this.y = height;
            if (this.x > width) this.x = 0;
            if (this.x < 0) this.x = width;
        }

        draw() {
            ctx.fillStyle = this.color;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    // Create particles
    const particleCount = 150; // Density for visually rich effect
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }

    // Animation Loop
    function animate() {
        ctx.clearRect(0, 0, width, height);

        // Draw faint connections (Constellation/Divine Network effect) - optional, kept subtle
        ctx.strokeStyle = 'rgba(197, 160, 40, 0.05)';
        ctx.lineWidth = 0.5;

        particles.forEach((p, index) => {
            p.update();
            p.draw();

            // Connect close particles for "sacred geometry" feel
            for (let j = index + 1; j < particles.length; j++) {
                const p2 = particles[j];
                const dx = p.x - p2.x;
                const dy = p.y - p2.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 100) {
                    ctx.beginPath();
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(p2.x, p2.y);
                    ctx.stroke();
                }
            }
        });

        requestAnimationFrame(animate);
    }
    animate();
}
