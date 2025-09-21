// Crusty Delights Pékség JavaScript

// Initialize all bakery features
window.initializeBakeryFeatures = function() {
    initializeSmoothScrolling();
    initializeCardInteractivity();
    initializeHeaderEffects();
    initializeScrollAnimations();
};

// Simple smooth scrolling for navigation links
function initializeSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Add click feedback for external navigation links
    document.querySelectorAll('.nav-menu a[href$=".html"]').forEach(link => {
        link.addEventListener('click', function(e) {
            // Add visual feedback
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        });
    });
}

// Add some interactivity to feature cards
function initializeCardInteractivity() {
    document.querySelectorAll('.feature-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.15)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1)';
        });
    });
}

// Mobile menu toggle functionality
function toggleMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('mobile-active');
}

// Add scroll effect to header
function initializeHeaderEffects() {
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (header) {
            if (window.scrollY > 100) {
                header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
            } else {
                header.style.boxShadow = 'none';
            }
        }
    });
}

// Initialize scroll animations
function initializeScrollAnimations() {
    // Add fade-in animation to elements as they come into view
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
    
    // Observe all feature cards
    document.querySelectorAll('.feature-card').forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(item);
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('Crusty Delights Pékség weboldal sikeresen betöltve!');
    
    // If components are already loaded, initialize features
    // Otherwise, the component loader will call initializeBakeryFeatures
    if (document.querySelector('header')) {
        initializeBakeryFeatures();
    }
});

// Page-specific initialization functions
// Products page features
window.initializeProductFeatures = function() {
    // Add hover effects to product cards
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
            this.style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.1)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.1)';
        });
    });

    // Add click-to-expand functionality for ingredients
    const productCards2 = document.querySelectorAll('.product-card');
    productCards2.forEach(card => {
        const ingredients = card.querySelector('.product-ingredients');
        if (ingredients) {
            ingredients.style.maxHeight = '0';
            ingredients.style.overflow = 'hidden';
            ingredients.style.transition = 'max-height 0.3s ease';
            
            card.addEventListener('click', function() {
                if (ingredients.style.maxHeight === '0px' || ingredients.style.maxHeight === '') {
                    ingredients.style.maxHeight = ingredients.scrollHeight + 'px';
                    card.classList.add('expanded');
                } else {
                    ingredients.style.maxHeight = '0';
                    card.classList.remove('expanded');
                }
            });
        }
    });

    // Add category filter functionality
    addCategoryNavigation();
};

function addCategoryNavigation() {
    // Create category navigation
    const firstCategory = document.querySelector('.product-category');
    if (firstCategory) {
        const nav = document.createElement('div');
        nav.className = 'category-navigation';
        nav.innerHTML = `
            <div class="category-nav-container">
                <button class="category-btn active" data-category="all">Összes</button>
                <button class="category-btn" data-category="breads">Kenyerek</button>
                <button class="category-btn" data-category="pastries">Péksütemények</button>
                <button class="category-btn" data-category="cakes">Sütemények</button>
                <button class="category-btn" data-category="specials">Különlegességek</button>
            </div>
        `;
        
        firstCategory.parentNode.insertBefore(nav, firstCategory);
        
        // Add click handlers for category buttons
        const categoryBtns = document.querySelectorAll('.category-btn');
        categoryBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                // Remove active class from all buttons
                categoryBtns.forEach(b => b.classList.remove('active'));
                // Add active class to clicked button
                this.classList.add('active');
                
                // Filter categories
                filterCategories(this.dataset.category);
            });
        });
    }
}

function filterCategories(category) {
    const categories = document.querySelectorAll('.product-category');
    
    categories.forEach(cat => {
        if (category === 'all') {
            cat.style.display = 'block';
        } else {
            const categoryTitle = cat.querySelector('.category-title').textContent.toLowerCase();
            const shouldShow = 
                (category === 'breads' && categoryTitle.includes('kenyerek')) ||
                (category === 'pastries' && categoryTitle.includes('péksütemények')) ||
                (category === 'cakes' && categoryTitle.includes('sütemények')) ||
                (category === 'specials' && categoryTitle.includes('különlegességek'));
            
            cat.style.display = shouldShow ? 'block' : 'none';
        }
    });
}

// Contact page features
window.initializeContactForm = function() {
    const form = document.querySelector('.contact-form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(form);
            const name = formData.get('name');
            const email = formData.get('email');
            const subject = formData.get('subject');
            const message = formData.get('message');
            
            // Simple validation
            if (!name || !email || !subject || !message) {
                alert('Kérjük, töltse ki az összes kötelező mezőt.');
                return;
            }
            
            // Simulate form submission
            const submitButton = form.querySelector('button[type="submit"]');
            const originalText = submitButton.textContent;
            
            submitButton.textContent = 'Küldés...';
            submitButton.disabled = true;
            
            // Simulate API call
            setTimeout(() => {
                alert(`Köszönjük, ${name}! Az üzenete sikeresen elküldve. 24 órán belül válaszolunk.`);
                form.reset();
                submitButton.textContent = originalText;
                submitButton.disabled = false;
            }, 1500);
        });
    }
};

// Animation initialization for all pages
window.initializeAnimations = function() {
    // Simple fade-in animation for page content
    const animatedElements = document.querySelectorAll('.feature-card, .product-card, .contact-card');
    animatedElements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        
        setTimeout(() => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, index * 100);
    });
};
