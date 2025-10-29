document.addEventListener("DOMContentLoaded", function() {
    // Sticky Header
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Mobile Menu
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Lazy Loading Images
    const lazyImages = document.querySelectorAll('img[data-src]');
    const lazyImageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                lazyImageObserver.unobserve(img);
            }
        });
    });

    lazyImages.forEach(img => {
        lazyImageObserver.observe(img);
    });

    // Contact Form Submission (using Formspree)
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const formData = new FormData(contactForm);
            
            try {
                const response = await fetch('https://formspree.io/f/your-form-id', {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                });

                if (response.ok) {
                    alert('Thanks for your submission!');
                    contactForm.reset();
                } else {
                    alert('Oops! There was a problem submitting your form.');
                }
            } catch (error) {
                alert('Oops! There was a problem submitting your form.');
            }
        });
    }
});
