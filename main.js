// Main JavaScript for Strade Segrete website

document.addEventListener('DOMContentLoaded', function() {
    // Initialize components
    initHeader();
    initHeroCarousel();
    initTestimonialsSlider();
    initMapPreview();
    initFloatingCTA();
    initAnimations();
    initNewsletterForm();
    
    // Header scroll effect and mobile menu
    function initHeader() {
        const header = document.querySelector('.site-header');
        const hamburger = document.querySelector('.hamburger');
        const navMobile = document.querySelector('.nav-mobile');
        
        // Handle header background on scroll
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
        
        // Mobile menu toggle
        if (hamburger && navMobile) {
            hamburger.addEventListener('click', function() {
                this.classList.toggle('active');
                navMobile.classList.toggle('active');
                document.body.classList.toggle('menu-open');
            });
            
            // Close mobile menu when clicking outside
            document.addEventListener('click', function(event) {
                if (!hamburger.contains(event.target) && !navMobile.contains(event.target) && navMobile.classList.contains('active')) {
                    hamburger.classList.remove('active');
                    navMobile.classList.remove('active');
                    document.body.classList.remove('menu-open');
                }
            });
            
            // Close mobile menu when pressing Escape key
            document.addEventListener('keydown', function(event) {
                if (event.key === 'Escape' && navMobile.classList.contains('active')) {
                    hamburger.classList.remove('active');
                    navMobile.classList.remove('active');
                    document.body.classList.remove('menu-open');
                }
            });
        }
    }
    
    // Hero Carousel with Swiper.js
    function initHeroCarousel() {
        const heroCarousel = document.querySelector('.hero-carousel .swiper-container');
        
        if (heroCarousel) {
            new Swiper(heroCarousel, {
                slidesPerView: 1,
                spaceBetween: 0,
                loop: true,
                speed: 1000,
                autoplay: {
                    delay: 5000,
                    disableOnInteraction: false,
                },
                pagination: {
                    el: '.hero-carousel .swiper-pagination',
                    clickable: true,
                },
                navigation: {
                    nextEl: '.hero-carousel .swiper-button-next',
                    prevEl: '.hero-carousel .swiper-button-prev',
                },
                parallax: true,
                effect: 'fade',
                fadeEffect: {
                    crossFade: true
                },
                keyboard: {
                    enabled: true,
                    onlyInViewport: true,
                },
                a11y: {
                    prevSlideMessage: 'Slide precedente',
                    nextSlideMessage: 'Slide successiva',
                    firstSlideMessage: 'Prima slide',
                    lastSlideMessage: 'Ultima slide',
                    paginationBulletMessage: 'Vai alla slide {{index}}',
                }
            });
        }
    }
    
    // Testimonials Slider with Swiper.js
    function initTestimonialsSlider() {
        const testimonialsSlider = document.querySelector('.testimonials-slider .swiper-container');
        
        if (testimonialsSlider) {
            new Swiper(testimonialsSlider, {
                slidesPerView: 1,
                spaceBetween: 30,
                loop: true,
                autoplay: {
                    delay: 4000,
                    disableOnInteraction: false,
                },
                pagination: {
                    el: '.testimonials-slider .swiper-pagination',
                    clickable: true,
                },
                breakpoints: {
                    768: {
                        slidesPerView: 2,
                    },
                    992: {
                        slidesPerView: 3,
                    }
                },
                keyboard: {
                    enabled: true,
                    onlyInViewport: true,
                },
                a11y: {
                    prevSlideMessage: 'Testimonianza precedente',
                    nextSlideMessage: 'Testimonianza successiva',
                    paginationBulletMessage: 'Vai alla testimonianza {{index}}',
                }
            });
        }
    }
    
    // Map Preview with Leaflet.js
    function initMapPreview() {
        const mapContainer = document.getElementById('preview-map');
        
        if (mapContainer) {
            // Initialize map
            const map = L.map(mapContainer, {
                zoomControl: false,
                dragging: false,
                scrollWheelZoom: false,
                doubleClickZoom: false,
                boxZoom: false,
                tap: false,
                keyboard: false,
                attributionControl: false
            }).setView([46.0, 10.5], 6);
            
            // Add custom styled map tiles
            L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
            }).addTo(map);
            
            // Add sample markers for key destinations
            const destinations = [
                { name: "Dolomiti", lat: 46.4102, lng: 11.8440 },
                { name: "Lago di Como", lat: 46.0154, lng: 9.2557 },
                { name: "Lago di Garda", lat: 45.6000, lng: 10.6333 },
                { name: "Langhe", lat: 44.6990, lng: 8.0356 },
                { name: "Veneto", lat: 45.4408, lng: 12.3155 },
                { name: "Trentino", lat: 46.0664, lng: 11.1242 }
            ];
            
            // Custom icon
            const bikeIcon = L.icon({
                iconUrl: 'images/map-marker.png',
                iconSize: [32, 32],
                iconAnchor: [16, 32],
                popupAnchor: [0, -32]
            });
            
            // Add markers
            destinations.forEach(dest => {
                L.marker([dest.lat, dest.lng], {icon: bikeIcon})
                    .addTo(map);
            });
            
            // Add click handler to navigate to full map
            mapContainer.addEventListener('click', function() {
                window.location.href = 'mappa.html';
            });
            
            // Make map container and overlay accessible
            mapContainer.setAttribute('tabindex', '0');
            mapContainer.setAttribute('role', 'button');
            mapContainer.setAttribute('aria-label', 'Anteprima mappa interattiva. Clicca per esplorare la mappa completa');
            
            mapContainer.addEventListener('keydown', function(event) {
                if (event.key === 'Enter' || event.key === ' ') {
                    window.location.href = 'mappa.html';
                }
            });
        }
    }
    
    // Floating CTA
    function initFloatingCTA() {
        const floatingCTA = document.getElementById('floatingCTA');
        const ctaClose = floatingCTA ? floatingCTA.querySelector('.cta-close') : null;
        const footer = document.querySelector('footer');
        const mainCTAs = document.querySelectorAll('.cta-section, .hero-carousel');
        
        if (!floatingCTA) return;
        
        // Close button handler
        if (ctaClose) {
            ctaClose.addEventListener('click', function() {
                floatingCTA.classList.remove('visible');
                // Save to session storage to prevent reappearing
                sessionStorage.setItem('ctaClosed', 'true');
            });
        }
        
        // Check if already closed
        if (sessionStorage.getItem('ctaClosed') === 'true') {
            return;
        }
        
        // Intersection Observer for footer
        const footerObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    floatingCTA.classList.remove('visible');
                } else {
                    if (window.scrollY > 600 && !isMainCTAVisible()) {
                        floatingCTA.classList.add('visible');
                    }
                }
            });
        }, { threshold: 0.1 });
        
        if (footer) {
            footerObserver.observe(footer);
        }
        
        // Intersection Observer for main CTAs
        const ctaObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    floatingCTA.classList.remove('visible');
                } else {
                    if (window.scrollY > 600 && !isFooterVisible() && !isMainCTAVisible()) {
                        floatingCTA.classList.add('visible');
                    }
                }
            });
        }, { threshold: 0.3 });
        
        mainCTAs.forEach(cta => {
            ctaObserver.observe(cta);
        });
        
        // Show after scroll
        window.addEventListener('scroll', function() {
            if (window.scrollY > 600 && !isFooterVisible() && !isMainCTAVisible()) {
                floatingCTA.classList.add('visible');
            } else {
                floatingCTA.classList.remove('visible');
            }
        });
        
        function isFooterVisible() {
            if (!footer) return false;
            const rect = footer.getBoundingClientRect();
            return rect.top < window.innerHeight;
        }
        
        function isMainCTAVisible() {
            for (const cta of mainCTAs) {
                const rect = cta.getBoundingClientRect();
                if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
                    return true;
                }
            }
            return false;
        }
        
        // Accessibility
        floatingCTA.setAttribute('role', 'dialog');
        floatingCTA.setAttribute('aria-labelledby', 'floatingCTATitle');
        
        const ctaTitle = floatingCTA.querySelector('h3');
        if (ctaTitle) {
            ctaTitle.id = 'floatingCTATitle';
        }
        
        if (ctaClose) {
            ctaClose.setAttribute('aria-label', 'Chiudi');
        }
    }
    
    // Scroll animations
    function initAnimations() {
        const animatedElements = document.querySelectorAll('.animate-on-scroll');
        
        if (animatedElements.length === 0) return;
        
        const observerOptions = {
            threshold: 0.15,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animated', 'fade-in-up');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);
        
        animatedElements.forEach(element => {
            observer.observe(element);
        });
        
        // Add CSS for animations if not already in stylesheet
        if (!document.querySelector('#animation-styles')) {
            const styleSheet = document.createElement('style');
            styleSheet.id = 'animation-styles';
            styleSheet.textContent = `
                .animate-on-scroll {
                    opacity: 0;
                    transform: translateY(20px);
                    transition: opacity 0.8s ease, transform 0.8s ease;
                }
                
                .animate-on-scroll.animated {
                    opacity: 1;
                    transform: translateY(0);
                }
                
                .fade-in-up {
                    animation-name: fadeInUp;
                }
                
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            `;
            document.head.appendChild(styleSheet);
        }
    }
    
    // Newsletter form
    function initNewsletterForm() {
        const newsletterForm = document.getElementById('newsletter-form');
        
        if (newsletterForm) {
            newsletterForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                const emailInput = this.querySelector('input[type="email"]');
                if (!emailInput || emailInput.value.trim() === '') {
                    showFormMessage(newsletterForm, 'Per favore, inserisci un indirizzo email valido.', 'error');
                    return;
                }
                
                // Simulate form submission
                const submitBtn = this.querySelector('button[type="submit"]');
                const originalText = submitBtn.textContent;
                submitBtn.textContent = 'Iscrizione in corso...';
                submitBtn.disabled = true;
                
                // Simulate API call
                setTimeout(() => {
                    showFormMessage(newsletterForm, 'Grazie per l\'iscrizione alla nostra newsletter!', 'success');
                    emailInput.value = '';
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                }, 1500);
            });
        }
        
        function showFormMessage(form, message, type) {
            // Remove any existing message
            const existingMessage = form.nextElementSibling;
            if (existingMessage && existingMessage.classList.contains('form-message')) {
                existingMessage.remove();
            }
            
            // Create message element
            const messageElement = document.createElement('div');
            messageElement.className = `form-message ${type}`;
            messageElement.textContent = message;
            messageElement.setAttribute('role', 'alert');
            
            // Insert after form
            form.parentNode.insertBefore(messageElement, form.nextSibling);
            
            // Remove success message after delay
            if (type === 'success') {
                setTimeout(() => {
                    messageElement.classList.add('fade-out');
                    setTimeout(() => {
                        messageElement.remove();
                    }, 500);
                }, 3000);
            }
        }
    }
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                e.preventDefault();
                
                const headerOffset = document.querySelector('.site-header').offsetHeight;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
                
                // Update URL without scrolling
                history.pushState(null, null, targetId);
                
                // Set focus to the target element
                targetElement.setAttribute('tabindex', '-1');
                targetElement.focus();
                targetElement.removeAttribute('tabindex');
            }
        });
    });
    
    // Accessibility improvements
    const focusableElements = document.querySelectorAll('a, button, input, select, textarea, [tabindex]:not([tabindex="-1"])');
    
    focusableElements.forEach(element => {
        element.addEventListener('focus', function() {
            this.classList.add('focused');
        });
        
        element.addEventListener('blur', function() {
            this.classList.remove('focused');
        });
    });
    
    // Handle "Skip to content" functionality
    const skipLink = document.querySelector('.skip-link');
    if (skipLink) {
        skipLink.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.setAttribute('tabindex', '-1');
                targetElement.focus();
                
                // Remove tabindex after transition
                setTimeout(() => {
                    targetElement.removeAttribute('tabindex');
                }, 1000);
            }
        });
    }
});
