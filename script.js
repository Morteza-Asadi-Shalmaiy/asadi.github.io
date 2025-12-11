// ============================================
// MOBILE MENU TOGGLE
// ============================================
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        menuToggle.innerHTML = navMenu.classList.contains('active') 
            ? '<i class="fas fa-times"></i>' 
            : '<i class="fas fa-bars"></i>';
    });

    // Close menu when clicking on a link
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
        });
    });
}

// ============================================
// BACK TO TOP BUTTON
// ============================================
const backToTop = document.querySelector('.back-to-top');

if (backToTop) {
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });

    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// ============================================
// FOOTER - SET CURRENT YEAR
// ============================================
const currentYearElement = document.getElementById('current-year');
if (currentYearElement) {
    currentYearElement.textContent = new Date().getFullYear();
}

// ============================================
// NEWSLETTER FORM SUBMISSION
// ============================================
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const emailInput = newsletterForm.querySelector('input[type="email"]');
        if (emailInput && emailInput.value) {
            alert(`Thank you for subscribing with ${emailInput.value}!`);
            newsletterForm.reset();
        }
    });
}

// ============================================
// ANIMATE SKILL BARS ON SCROLL
// ============================================
const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px'
};

const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const skillLevels = entry.target.querySelectorAll('.skill-level');
            skillLevels.forEach(level => {
                level.style.transition = 'width 1s ease-in-out';
            });
            // Unobserve after animation triggers once
            skillObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all skill categories
document.querySelectorAll('.skill-category').forEach(category => {
    skillObserver.observe(category);
});

// ============================================
// SMOOTH SCROLLING FOR ANCHOR LINKS
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        
        // Skip if it's just '#' or empty
        if (targetId === '#' || targetId === '') {
            e.preventDefault();
            return;
        }
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            e.preventDefault();
            const offsetTop = targetElement.offsetTop - 80; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ============================================
// ACTIVE NAVIGATION LINK ON SCROLL
// ============================================
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-menu a');

if (sections.length > 0 && navLinks.length > 0) {
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            // Check if we're in this section (with navbar offset)
            if (window.scrollY >= (sectionTop - 150)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// ============================================
// CONTACT CARD HOVER EFFECTS
// ============================================
const contactCards = document.querySelectorAll('.contact-card');

contactCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        // Add any additional hover effects if needed
        this.style.transition = 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
    });
    
    card.addEventListener('mouseleave', function() {
        // Reset on leave
        this.style.transition = 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
    });
});

// ============================================
// PERFORMANCE: DEBOUNCE SCROLL EVENTS
// ============================================
function debounce(func, wait = 10) {
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

// Apply debouncing to scroll-heavy operations if needed
// Example: window.addEventListener('scroll', debounce(someFunction, 20));
