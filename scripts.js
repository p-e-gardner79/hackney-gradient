document.addEventListener('DOMContentLoaded', function() {
            
            // --- FAQ Accordion Logic ---
            const faqList = document.querySelector('.faq-list');
            if (faqList) {
                faqList.addEventListener('click', function(e) {
                    const question = e.target.closest('.faq-question');
                    if (question) {
                        // Close all other items
                        const allItems = faqList.querySelectorAll('.faq-item');
                        const currentItem = question.parentElement;
                        allItems.forEach(item => {
                            if (item !== currentItem && item.classList.contains('active')) {
                                item.classList.remove('active');
                            }
                        });
                        // Toggle the clicked item
                        currentItem.classList.toggle('active');
                    }
                });
            }

            // --- Smooth Scrolling for Anchor Links ---
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    const targetId = this.getAttribute('href');
                    const targetElement = document.querySelector(targetId);
                    if(targetElement) {
                        targetElement.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                });
            });

            // --- Expressive Scroll Animations ---
            const animatedSections = document.querySelectorAll('.animated-section');
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, {
                threshold: 0.1
            });

            animatedSections.forEach(section => {
                observer.observe(section);
            });

        });
   