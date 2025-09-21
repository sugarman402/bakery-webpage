// Navigation Helper for Crusty Delights Pékség
// This script handles active navigation states and page transitions

class NavigationHelper {
    constructor() {
        this.init();
    }

    init() {
        this.setActiveNavigation();
        this.addNavigationClickHandlers();
    }

    setActiveNavigation() {
        const currentPath = window.location.pathname;
        const navLinks = document.querySelectorAll('.nav-menu a');
        
        console.log('Current path:', currentPath); // Debug log
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            
            const href = link.getAttribute('href');
            if (href) {
                // Check if current page matches the link
                if (currentPath.includes('contact.html') && href.includes('contact.html')) {
                    link.classList.add('active');
                    console.log('Contact page active'); // Debug log
                } else if (currentPath.includes('about.html') && href.includes('about.html')) {
                    link.classList.add('active');
                    console.log('About page active'); // Debug log
                } else if (currentPath.includes('products.html') && href.includes('products.html')) {
                    link.classList.add('active');
                    console.log('Products page active'); // Debug log
                } else if (currentPath.includes('events.html') && href.includes('events.html')) {
                    link.classList.add('active');
                    console.log('Events page active'); // Debug log
                } else if ((currentPath.includes('index.html') || currentPath === '/' || currentPath.endsWith('/')) && href.includes('index.html')) {
                    link.classList.add('active');
                    console.log('Home page active'); // Debug log
                }
            }
        });
    }

    addNavigationClickHandlers() {
        // Add smooth transition effect for page navigation
        document.querySelectorAll('.nav-menu a[href$=".html"]').forEach(link => {
            link.addEventListener('click', function(e) {
                // Add loading state
                const originalText = this.textContent;
                this.style.opacity = '0.7';
                
                // Restore state after a short delay
                setTimeout(() => {
                    this.style.opacity = '1';
                }, 200);
            });
        });

        // Handle logo click
        const logo = document.querySelector('.logo');
        if (logo) {
            logo.addEventListener('click', function(e) {
                this.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    this.style.transform = 'scale(1)';
                }, 150);
            });
        }
    }

    // Method to programmatically navigate (useful for future enhancements)
    navigateTo(page) {
        window.location.href = page;
    }
}

// Initialize navigation helper when components are loaded
function initializeNavigation() {
    new NavigationHelper();
}

// Export for use in other scripts
if (typeof window !== 'undefined') {
    window.NavigationHelper = NavigationHelper;
    window.initializeNavigation = initializeNavigation;
}
