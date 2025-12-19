function toggleMenu() {
    document.getElementById("navLinks").classList.toggle("active");
}

/* Scroll Animation */
const animatedElements = document.querySelectorAll(
    "[data-animate], .panchakarma-card"
);

const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    },
    { threshold: 0.15 }
);

animatedElements.forEach(el => observer.observe(el));