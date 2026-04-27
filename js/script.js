// ===================================
// Vagabond Vibes - Interactive Features
// ===================================

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // ===================================
    // Mobile Menu Toggle & Accessibility
    // ===================================
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Helper function to toggle menu and handle SEO/Accessibility states
    function toggleMenu() {
        const isActive = mobileMenuToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
        
        // SEO/Accessibility: Update ARIA attributes for screen readers
        mobileMenuToggle.setAttribute('aria-expanded', isActive);
        mobileMenuToggle.setAttribute('aria-label', isActive ? 'Close menu' : 'Open menu');
        
        // Prevent body scrolling when menu is open
        document.body.style.overflow = isActive ? 'hidden' : '';
    }

    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', toggleMenu);
    }
    
    // Close mobile menu when clicking on a nav link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (navMenu.classList.contains('active')) {
                toggleMenu(); // Reuse the function to ensure ARIA states reset cleanly
            }
        });
    });

    // Bug Fix: Reset menu state if user resizes window from mobile to desktop
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768 && navMenu.classList.contains('active')) {
            mobileMenuToggle.classList.remove('active');
            navMenu.classList.remove('active');
            mobileMenuToggle.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
        }
    });
    
    // ===================================
    // Header Scroll Effect
    // ===================================
    const header = document.getElementById('header');
    let lastScroll = 0;
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        // Add scrolled class for shadow effect
        if (currentScroll > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        lastScroll = currentScroll;
    });
    
    // ===================================
    // Active Navigation Link on Scroll
    // ===================================
    const sections = document.querySelectorAll('section[id]');
    
    function highlightNavigation() {
        const scrollY = window.pageYOffset;
        
        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
            
            if (navLink) {
                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    navLink.classList.add('active');
                } else {
                    navLink.classList.remove('active');
                }
            }
        });
    }
    
    window.addEventListener('scroll', highlightNavigation);
    
    // ===================================
    // Smooth Scroll for Navigation Links
    // ===================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Skip if it's just "#"
            if (href === '#') {
                e.preventDefault();
                return;
            }
            
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                const headerHeight = header.offsetHeight;
                const targetPosition = target.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // ===================================
    // WhatsApp Contact Form Submission
    // ===================================
    const whatsappForm = document.getElementById('whatsappForm');
    
    if (whatsappForm) {
        whatsappForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('waName').value.trim();
            const email = document.getElementById('waEmail').value.trim();
            const message = document.getElementById('waMessage').value.trim();
            
            if (name && email && message) {
                // Format the WhatsApp message with line breaks
                const whatsappMessage = `*New Inquiry from Website*%0A%0A*Name:* ${name}%0A*Email:* ${email}%0A*Message:* ${message}`;
                
                // Vagabond Vibes WhatsApp Number
                const phoneNumber = '919531671758';
                
                // Create the WhatsApp API URL
                const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;
                
                // Open WhatsApp in a new tab
                window.open(whatsappUrl, '_blank');
                
                // Note: If you have a custom showNotification function, use it here
                // showNotification('Opening WhatsApp to send your message...', 'success');
                this.reset();
            } else {
                alert('Please fill in all fields.');
            }
        });
    }

    // ===================================
    // Intersection Observer for Fade-in Animations
    // ===================================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe all fade-in-up elements
    document.querySelectorAll('.fade-in-up').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
        observer.observe(element);
    });
    
    // ===================================
    // Destination Cards Hover Effect Enhancement
    // ===================================
    const destinationCards = document.querySelectorAll('.destination-card');
    
    destinationCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // ===================================
    // Testimonial Slider (Simple Implementation)
    // ===================================
    const testimonials = [
        {
            text: "Our trip to Andaman & Nicobar Islands organized by Vagabond Vibes was absolutely magical! Every detail was perfectly planned, from the stunning accommodations to the incredible cultural experiences. The team's attention to detail and personalized service made our honeymoon truly unforgettable. We can't wait to book our next adventure with them!",
            author: "Priya Sharma",
            location: "Mumbai, India",
            image: "https://images.unsplash.com/photo-1706943262459-3ef6ce03305c?w=200&h=200&fit=crop"
        },
        {
            text: "Vagabond Vibes exceeded all our expectations! The Sikkim tour was perfectly curated with a great mix of adventure, culture, and relaxation. Our guide was knowledgeable and friendly, and every hotel was top-notch. The 24/7 support gave us peace of mind throughout our journey. Highly recommended!",
            author: "Rahul Verma",
            location: "Delhi, India",
            image: "https://images.unsplash.com/photo-1598096969068-7f52cac10c83?w=200&h=200&fit=crop"
        },
        {
            text: "As a solo traveler, I was initially nervous, but Vagabond Vibes made everything so easy and comfortable. The Goa package was incredible value for money, and I felt safe and well-cared for throughout. The team helped me create memories that will last a lifetime. Thank you for an amazing experience!",
            author: "Anjali Patel",
            location: "Bangalore, India",
            image: "https://images.unsplash.com/photo-1659293554631-d7a38642c5e3?w=200&h=200&fit=crop"
        }
    ];
    
    let currentTestimonial = 0;
    const testimonialCard = document.querySelector('.testimonial-card');
    const navDots = document.querySelectorAll('.nav-dot');
    
    function updateTestimonial(index) {
        const testimonial = testimonials[index];
        
        if (testimonialCard) {
            // Fade out
            testimonialCard.style.opacity = '0';
            testimonialCard.style.transform = 'translateY(20px)';
            
            setTimeout(() => {
                // Update content
                testimonialCard.querySelector('.testimonial-text').textContent = testimonial.text;
                testimonialCard.querySelector('.author-info h4').textContent = testimonial.author;
                testimonialCard.querySelector('.author-info p').textContent = testimonial.location;
                testimonialCard.querySelector('.author-image img').src = testimonial.image;
                testimonialCard.querySelector('.author-image img').alt = testimonial.author;
                
                // Update active dot
                navDots.forEach((dot, i) => {
                    dot.classList.toggle('active', i === index);
                });
                
                // Fade in
                testimonialCard.style.opacity = '1';
                testimonialCard.style.transform = 'translateY(0)';
            }, 300);
        }
    }
    
    // Add click handlers to navigation dots
    navDots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentTestimonial = index;
            updateTestimonial(currentTestimonial);
        });
    });
    
    // Auto-rotate testimonials every 8 seconds
    setInterval(() => {
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        updateTestimonial(currentTestimonial);
    }, 8000);
    
    // ===================================
    // Lazy Loading Images Enhancement
    // ===================================
    if ('loading' in HTMLImageElement.prototype) {
        // Browser supports native lazy loading
        const images = document.querySelectorAll('img[loading="lazy"]');
        images.forEach(img => {
            img.src = img.src;
        });
    } else {
        // Fallback for browsers that don't support lazy loading
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            });
        });
        
        document.querySelectorAll('img[loading="lazy"]').forEach(img => {
            imageObserver.observe(img);
        });
    }
    
    // ===================================
    // Performance Optimization: Debounce Scroll Events
    // ===================================
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
    
    // Apply debounce to scroll-heavy functions
    const debouncedHighlight = debounce(highlightNavigation, 100);
    window.addEventListener('scroll', debouncedHighlight);
    
    // ===================================
    // Accessibility: Keyboard Navigation
    // ===================================
    document.addEventListener('keydown', function(e) {
        // ESC key closes mobile menu cleanly via our new helper function
        if (e.key === 'Escape' && navMenu.classList.contains('active')) {
            toggleMenu();
        }
    });
    
    // ===================================
    // Add to Calendar Functionality (Future Enhancement)
    // ===================================
    function addToCalendar(destination, date) {
        // This is a placeholder for future calendar integration
        console.log(`Adding ${destination} trip on ${date} to calendar`);
    }
    
    // ===================================
    // Print Functionality
    // ===================================
    window.addEventListener('beforeprint', function() {
        // Expand all collapsed sections before printing
        document.querySelectorAll('.destination-card').forEach(card => {
            card.style.pageBreakInside = 'avoid';
        });
    });
    
    // ===================================
    // Console Welcome Message
    // ===================================
    console.log('%c🌍 Welcome to Vagabond Vibes! 🌍', 'color: #7C3AED; font-size: 20px; font-weight: bold;');
    console.log('%cExplore the world with us!', 'color: #5DADE2; font-size: 14px;');
    console.log('%cWebsite: www.vagabondvibes.in', 'color: #4B5563; font-size: 12px;');
    
    // ===================================
    // Initialize Page
    // ===================================
    console.log('✅ Vagabond Vibes website initialized successfully!');
    
    // Trigger initial highlight
    highlightNavigation();
});

// ===================================
// Service Worker Registration (for PWA - Future Enhancement)
// ===================================
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // Service worker registration can be added here for PWA functionality
        console.log('Service Worker support detected');
    });
}

// ===================================
// Analytics Tracking (Placeholder)
// ===================================
function trackEvent(category, action, label) {
    // Placeholder for analytics tracking
    console.log(`Analytics: ${category} - ${action} - ${label}`);
    
    // Example: Google Analytics integration
    // if (typeof gtag !== 'undefined') {
    //     gtag('event', action, {
    //         'event_category': category,
    //         'event_label': label
    //     });
    // }
}

// Track destination card clicks
document.addEventListener('click', function(e) {
    const destinationCard = e.target.closest('.destination-card');
    if (destinationCard) {
        const destinationName = destinationCard.querySelector('h3').textContent;
        trackEvent('Destinations', 'Click', destinationName);
    }
});
