 document.addEventListener('DOMContentLoaded', function() {
            const sections = document.querySelectorAll('.section, .section-3, .section-4, .section-5');
            const dots = document.querySelectorAll('.dot');
            const scrollIndicator = document.getElementById('scrollIndicator');
            const overlays = document.querySelectorAll('.overlay');
            const bgImages = document.querySelectorAll('.bg-image');
            
            
            function updateActiveSection() {
                const scrollPosition = window.pageYOffset;
                const windowHeight = window.innerHeight;
                
                sections.forEach((section, index) => {
                    const sectionTop = section.offsetTop;
                    const sectionHeight = section.offsetHeight;
                    
                    
                    const isInView = (
                        scrollPosition >= sectionTop - windowHeight/3 &&
                        scrollPosition < sectionTop + sectionHeight - windowHeight/3
                    );
                    
                    if (isInView) {
                        
                        dots.forEach(dot => dot.classList.remove('active'));
                        if (dots[index]) dots[index].classList.add('active');
                        
                     
                        if (index <= 1) {
                            
                            const scrollProgress = Math.min(
                                (scrollPosition - sectionTop + windowHeight/3) / (sectionHeight * 0.7), 
                                1
                            );
                            
                            if (index === 0) {
                                
                                const opacity = 1 - scrollProgress;
                                if (overlays[0]) overlays[0].style.opacity = opacity;
                                if (bgImages[0]) bgImages[0].style.opacity = opacity;
                                
                              
                                scrollIndicator.style.opacity = opacity > 0.3 ? '1' : '0';
                            } else if (index === 1) {
                                
                                const opacity = scrollProgress;
                                if (overlays[1]) overlays[1].style.opacity = opacity;
                                if (bgImages[1]) bgImages[1].style.opacity = opacity;
                            }
                        }
                    }
                });
            }
            
            
            dots.forEach(dot => {
                dot.addEventListener('click', function() {
                    const sectionIndex = parseInt(this.getAttribute('data-section'));
                    const targetSection = sections[sectionIndex];
                    
                    window.scrollTo({
                        top: targetSection.offsetTop,
                        behavior: 'smooth'
                    });
                });
            });
            
            
            let scrollTimeout;
            window.addEventListener('scroll', function() {
                if (scrollTimeout) {
                    clearTimeout(scrollTimeout);
                }
                
                scrollTimeout = setTimeout(function() {
                    updateActiveSection();
                }, 10);
            });
            
           
            updateActiveSection();
            
           
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };
            
            const contentObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }
                });
            }, observerOptions);
        
            document.querySelectorAll('.content-box, .section-3-content, .text-content-container').forEach(content => {
                content.style.opacity = '0';
                content.style.transform = 'translateY(20px)';
                content.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
                contentObserver.observe(content);
            });
            

            const listItems = document.querySelectorAll('.indications-list li');
            listItems.forEach((item, index) => {
                item.style.opacity = '0';
                item.style.transform = 'translateX(-20px)';
                item.style.transition = `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s`;
                
                const itemObserver = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            entry.target.style.opacity = '1';
                            entry.target.style.transform = 'translateX(0)';
                        }
                    });
                }, observerOptions);
                
                itemObserver.observe(item);
            });
        });