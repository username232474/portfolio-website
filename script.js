// Modern Portfolio JavaScript with Advanced Features
document.addEventListener('DOMContentLoaded', function() {
    initLoadingScreen();
    initTopNavigation();
    initSidebar();
    initSectionNavigation();
    initTypingAnimation();
    initParticles();
    initSkillBars();
    initCounters();
    initContactForm();
    initScrollAnimations();
    initGlitchEffect();
    initFloatingIcons();
    initGallery();
    updateCurrentYear();
});

// Top Navigation
function initTopNavigation() {
    const topNavLinks = document.querySelectorAll('.top-nav-link');
    const mobileToggle = document.getElementById('mobileToggle');
    const topNavMenu = document.querySelector('.top-nav-menu');

    // Handle top nav link clicks
    topNavLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetSection = link.getAttribute('data-section');
            showSection(targetSection);
            
            // Update active nav link
            topNavLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            
            // Close mobile menu
            if (window.innerWidth <= 1024) {
                topNavMenu.classList.remove('active');
                mobileToggle.classList.remove('active');
            }
        });
    });

    // Mobile toggle
    if (mobileToggle) {
        mobileToggle.addEventListener('click', () => {
            topNavMenu.classList.toggle('active');
            mobileToggle.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (window.innerWidth <= 1024) {
            if (!topNavMenu.contains(e.target) && !mobileToggle.contains(e.target)) {
                topNavMenu.classList.remove('active');
                mobileToggle.classList.remove('active');
            }
        }
    });
}

// Footer Navigation
function initFooterNavigation() {
    const footerNavLinks = document.querySelectorAll('.footer-nav-link');
    
    footerNavLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetSection = link.getAttribute('data-section');
            showSection(targetSection);
            
            // Update top nav active state
            const topNavLinks = document.querySelectorAll('.top-nav-link');
            topNavLinks.forEach(l => l.classList.remove('active'));
            const topNavLink = document.querySelector(`.top-nav-link[data-section="${targetSection}"]`);
            if (topNavLink) topNavLink.classList.add('active');
            
            // Scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });
}

// Back to Top Button
function initBackToTop() {
    const backToTopBtn = document.getElementById('backToTop');
    if (!backToTopBtn) return;

    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });

    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}
function initLoadingScreen() {
    const loadingScreen = document.getElementById('loadingScreen');
    
    setTimeout(() => {
        loadingScreen.classList.add('fade-out');
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 500);
    }, 3000);
}

// Sidebar Navigation
function initSidebar() {
    // Sidebar removed
}

// Section Navigation
function initSectionNavigation() {
    showSection('home');
}

function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
    }
}

function scrollToSection(sectionId) {
    showSection(sectionId);
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-section') === sectionId) {
            link.classList.add('active');
        }
    });
}

// Typing Animation
function initTypingAnimation() {
    const typingText = document.querySelector('.typing-text');
    if (!typingText) return;

    const texts = [
        'Software Engineering Student',
        'Creative Problem Solver',
        'Tech Enthusiast',
        'Future Full-stack Developer'
    ];

    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let isPaused = false;

    function type() {
        if (isPaused) return;

        const currentText = texts[textIndex];

        if (isDeleting) {
            typingText.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;

            if (charIndex === 0) {
                isDeleting = false;
                textIndex = (textIndex + 1) % texts.length;
                isPaused = true;
                setTimeout(() => {
                    isPaused = false;
                    type();
                }, 1000);
                return;
            }
        } else {
            typingText.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;

            if (charIndex === currentText.length) {
                isPaused = true;
                setTimeout(() => {
                    isPaused = false;
                    isDeleting = true;
                    type();
                }, 2000);
                return;
            }
        }

        const typingSpeed = isDeleting ? 50 : 100;
        setTimeout(type, typingSpeed);
    }

    setTimeout(type, 1000);
}

// Particle System
function initParticles() {
    const particlesContainer = document.getElementById('particles');
    if (!particlesContainer) return;

    function createParticle() {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Random starting position
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDuration = (Math.random() * 3 + 5) + 's';
        particle.style.animationDelay = Math.random() * 2 + 's';
        
        // Random color
        const colors = ['#00ffff', '#ff00ff', '#00ff00', '#ffff00'];
        particle.style.background = colors[Math.floor(Math.random() * colors.length)];
        
        particlesContainer.appendChild(particle);
        
        // Remove particle after animation
        setTimeout(() => {
            if (particle.parentNode) {
                particle.parentNode.removeChild(particle);
            }
        }, 8000);
    }

    // Create particles continuously
    setInterval(createParticle, 300);
}

// Skill Bars Animation
function initSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skillBar = entry.target;
                const width = skillBar.getAttribute('data-width');
                
                setTimeout(() => {
                    skillBar.style.width = width + '%';
                }, 500);
                
                observer.unobserve(skillBar);
            }
        });
    }, { threshold: 0.5 });

    skillBars.forEach(bar => observer.observe(bar));
}

// Animated Counters
function initCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.getAttribute('data-count'));
                const duration = 2000;
                const increment = target / (duration / 16);
                let current = 0;

                const updateCounter = () => {
                    current += increment;
                    if (current < target) {
                        counter.textContent = Math.ceil(current);
                        requestAnimationFrame(updateCounter);
                    } else {
                        counter.textContent = target + '+';
                    }
                };

                updateCounter();
                observer.unobserve(counter);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => observer.observe(counter));
}

// Contact Form
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (!contactForm) return;

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        if (validateForm()) {
            const submitBtn = this.querySelector('.neon-btn');
            const btnText = submitBtn.querySelector('span');
            const originalText = btnText.textContent;

            // Show loading state
            submitBtn.disabled = true;
            btnText.textContent = 'SENDING...';
            submitBtn.style.opacity = '0.7';

            // Use Formspree or EmailJS for real form submission
            const formData = new FormData(this);
            
            // For demonstration, we'll use a timeout
            // Replace this with actual form submission service
            setTimeout(() => {
                showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
                this.reset();
                
                // Reset button
                submitBtn.disabled = false;
                btnText.textContent = originalText;
                submitBtn.style.opacity = '1';
                
                // Clear form validation styles
                const inputs = this.querySelectorAll('input, textarea');
                inputs.forEach(input => {
                    input.style.borderColor = '';
                    input.classList.remove('has-value');
                });
            }, 2000);
        }
    });

    // Real-time validation and label animation
    const formInputs = contactForm.querySelectorAll('input, textarea');
    formInputs.forEach(input => {
        input.addEventListener('blur', function() {
            validateField(this);
        });
        
        input.addEventListener('input', function() {
            if (this.value.trim()) {
                this.classList.add('has-value');
            } else {
                this.classList.remove('has-value');
            }
        });
        
        // Check if field has value on load
        if (input.value.trim()) {
            input.classList.add('has-value');
        }
    });
}

function validateForm() {
    const form = document.getElementById('contactForm');
    const name = form.querySelector('#name').value.trim();
    const email = form.querySelector('#email').value.trim();
    const subject = form.querySelector('#subject').value.trim();
    const message = form.querySelector('#message').value.trim();

    let isValid = true;

    if (!name) {
        showFieldError('#name', 'Name is required');
        isValid = false;
    }

    if (!email || !isValidEmail(email)) {
        showFieldError('#email', 'Valid email is required');
        isValid = false;
    }

    if (!subject) {
        showFieldError('#subject', 'Subject is required');
        isValid = false;
    }

    if (!message || message.length < 10) {
        showFieldError('#message', 'Message must be at least 10 characters');
        isValid = false;
    }

    return isValid;
}

function validateField(field) {
    const value = field.value.trim();
    
    if (field.hasAttribute('required') && !value) {
        field.style.borderColor = '#ff0040';
        return false;
    }

    if (field.type === 'email' && value && !isValidEmail(value)) {
        field.style.borderColor = '#ff0040';
        return false;
    }

    field.style.borderColor = '#00ffff';
    return true;
}

function showFieldError(selector, message) {
    const field = document.querySelector(selector);
    field.style.borderColor = '#ff0040';
    showNotification(message, 'error');
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Notification System
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
        <span>${message}</span>
    `;
    
    // Add notification styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#00ff00' : type === 'error' ? '#ff0040' : '#00ffff'};
        color: #0a0a0a;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        font-weight: 600;
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        box-shadow: 0 0 20px ${type === 'success' ? '#00ff00' : type === 'error' ? '#ff0040' : '#00ffff'};
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 5 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 5000);
}

// Scroll Animations
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.timeline-item, .project-card, .info-card, .tech-icon');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Glitch Effect
function initGlitchEffect() {
    const glitchText = document.querySelector('.glitch-text');
    if (!glitchText) return;

    setInterval(() => {
        glitchText.style.animation = 'none';
        setTimeout(() => {
            glitchText.style.animation = 'glitch 0.3s ease-in-out';
        }, Math.random() * 2000 + 1000);
    }, 3000);
}

// Floating Icons Animation
function initFloatingIcons() {
    const floatingIcons = document.querySelectorAll('.icon-float');
    
    floatingIcons.forEach((icon, index) => {
        icon.style.animationDelay = (index * 0.5) + 's';
        
        // Add random movement
        setInterval(() => {
            const randomX = (Math.random() - 0.5) * 20;
            const randomY = (Math.random() - 0.5) * 20;
            icon.style.transform = `translate(${randomX}px, ${randomY}px)`;
        }, 3000 + (index * 500));
    });
}

// Gallery Lightbox
function initGallery() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            const img = item.querySelector('img');
            openLightbox(img.src, img.alt);
        });
    });
}

function openLightbox(src, alt) {
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.innerHTML = `
        <div class="lightbox-content">
            <img src="${src}" alt="${alt}">
            <button class="lightbox-close">&times;</button>
        </div>
    `;
    
    lightbox.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.9);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        opacity: 0;
        transition: opacity 0.3s ease;
    `;
    
    const content = lightbox.querySelector('.lightbox-content');
    content.style.cssText = `
        position: relative;
        max-width: 90%;
        max-height: 90%;
    `;
    
    const img = lightbox.querySelector('img');
    img.style.cssText = `
        width: 100%;
        height: 100%;
        object-fit: contain;
        border-radius: 10px;
        box-shadow: 0 0 50px rgba(0, 255, 255, 0.5);
    `;
    
    const closeBtn = lightbox.querySelector('.lightbox-close');
    closeBtn.style.cssText = `
        position: absolute;
        top: -40px;
        right: -40px;
        background: #ff0040;
        color: white;
        border: none;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        font-size: 1.5rem;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
    `;
    
    document.body.appendChild(lightbox);
    
    setTimeout(() => {
        lightbox.style.opacity = '1';
    }, 10);
    
    // Close lightbox
    const closeLightbox = () => {
        lightbox.style.opacity = '0';
        setTimeout(() => {
            if (lightbox.parentNode) {
                lightbox.parentNode.removeChild(lightbox);
            }
        }, 300);
    };
    
    closeBtn.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeLightbox();
        }
    });
}

// Tech Icon Hover Effects
document.addEventListener('DOMContentLoaded', function() {
    const techIcons = document.querySelectorAll('.tech-icon');
    
    techIcons.forEach(icon => {
        icon.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.1)';
            this.style.boxShadow = '0 20px 40px rgba(0, 255, 255, 0.6)';
        });
        
        icon.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '0 0 20px rgba(0, 255, 255, 0.3)';
        });
    });
});

// Update Current Year
function updateCurrentYear() {
    const yearElements = document.querySelectorAll('#currentYear');
    yearElements.forEach(element => {
        element.textContent = new Date().getFullYear();
    });
}
function smoothTransition(targetSection) {
    const currentSection = document.querySelector('.section.active');
    
    if (currentSection) {
        currentSection.style.opacity = '0';
        currentSection.style.transform = 'translateX(-50px)';
        
        setTimeout(() => {
            currentSection.classList.remove('active');
            showSection(targetSection);
            
            const newSection = document.getElementById(targetSection);
            newSection.style.opacity = '0';
            newSection.style.transform = 'translateX(50px)';
            
            setTimeout(() => {
                newSection.style.opacity = '1';
                newSection.style.transform = 'translateX(0)';
            }, 50);
        }, 300);
    } else {
        showSection(targetSection);
    }
}

// Keyboard Navigation
document.addEventListener('keydown', function(e) {
    const sections = ['home', 'about', 'skills', 'timeline', 'projects', 'gallery', 'contact'];
    const currentActive = document.querySelector('.nav-link.active');
    const currentIndex = sections.indexOf(currentActive?.getAttribute('data-section'));
    
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
        e.preventDefault();
        const nextIndex = (currentIndex + 1) % sections.length;
        const nextSection = sections[nextIndex];
        smoothTransition(nextSection);
        
        // Update nav
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('data-section') === nextSection) {
                link.classList.add('active');
            }
        });
    }
    
    if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
        e.preventDefault();
        const prevIndex = currentIndex > 0 ? currentIndex - 1 : sections.length - 1;
        const prevSection = sections[prevIndex];
        smoothTransition(prevSection);
        
        // Update nav
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('data-section') === prevSection) {
                link.classList.add('active');
            }
        });
    }
});

// Performance Optimization
const debounce = (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
};

// Optimized scroll handler
const handleScroll = debounce(() => {
    // Add any scroll-based animations here
}, 16);

window.addEventListener('scroll', handleScroll);

// Mouse trail effect
document.addEventListener('mousemove', function(e) {
    if (Math.random() > 0.9) { // Only create trail 10% of the time for performance
        const trail = document.createElement('div');
        trail.style.cssText = `
            position: fixed;
            width: 4px;
            height: 4px;
            background: #00ffff;
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            left: ${e.clientX}px;
            top: ${e.clientY}px;
            opacity: 1;
            transition: opacity 1s ease;
        `;
        
        document.body.appendChild(trail);
        
        setTimeout(() => {
            trail.style.opacity = '0';
            setTimeout(() => {
                if (trail.parentNode) {
                    trail.parentNode.removeChild(trail);
                }
            }, 1000);
        }, 100);
    }
});

// Console Easter Egg
console.log(`
%c
 █████╗ ██████╗ ███████╗██████╗ ███████╗ ██████╗██╗  ██╗
██╔══██╗██╔══██╗██╔════╝██╔══██╗██╔════╝██╔════╝██║  ██║
███████║██████╔╝█████╗  ██████╔╝█████╗  ██║     ███████║
██╔══██║██╔══██╗██╔══╝  ██╔══██╗██╔══╝  ██║     ██╔══██║
██║  ██║██████╔╝███████╗██████╔╝███████╗╚██████╗██║  ██║
╚═╝  ╚═╝╚═════╝ ╚══════╝╚═════╝ ╚══════╝ ╚═════╝╚═╝  ╚═╝

Welcome to my portfolio! 
Looking for a passionate developer? Let's connect!
Email: abyehani804@gmail.com
`, 'color: #00ffff; font-family: monospace;');