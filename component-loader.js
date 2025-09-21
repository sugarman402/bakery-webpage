// Universal Component Loader for Crusty Delights Pékség
// This script dynamically loads HTML components into any page

class ComponentLoader {
    constructor(customComponents = null) {
        // Default components for main page
        this.defaultComponents = [
            { selector: '#header-placeholder', file: 'components/header.html' },
            { selector: '#hero-placeholder', file: 'components/hero.html' },
            { selector: '#features-placeholder', file: 'components/features.html' },
            { selector: '#footer-placeholder', file: 'components/footer.html' }
        ];
        
        // Auto-detect components based on existing placeholders if no custom components provided
        this.components = customComponents || this.autoDetectComponents();
    }
    
    autoDetectComponents() {
        const detectedComponents = [];
        const componentMap = {
            '#header-placeholder': 'components/header.html',
            '#header': 'components/header.html',
            '#hero-placeholder': 'components/hero.html',
            '#features-placeholder': 'components/features.html',
            '#about-placeholder': 'components/about.html',
            '#about': 'components/about.html',
            '#products-placeholder': 'components/products.html',
            '#products': 'components/products.html',
            '#contact-placeholder': 'components/contact.html',
            '#contact': 'components/contact.html',
            '#events-placeholder': 'components/events.html',
            '#events': 'components/events.html',
            '#footer-placeholder': 'components/footer.html',
            '#footer': 'components/footer.html'
        };
        
        Object.entries(componentMap).forEach(([selector, file]) => {
            if (document.querySelector(selector)) {
                detectedComponents.push({ selector, file });
            }
        });
        
        return detectedComponents.length > 0 ? detectedComponents : this.defaultComponents;
    }

    async loadComponent(selector, file) {
        try {
            const response = await fetch(file);
            if (!response.ok) {
                throw new Error(`Failed to load ${file}: ${response.status}`);
            }
            const html = await response.text();
            const element = document.querySelector(selector);
            if (element) {
                element.innerHTML = html;
            }
        } catch (error) {
            console.error(`Error loading component ${file}:`, error);
        }
    }

    async loadAllComponents() {
        const loadPromises = this.components.map(component => 
            this.loadComponent(component.selector, component.file)
        );
        
        try {
            await Promise.all(loadPromises);
            console.log('Minden komponens sikeresen betöltve');
            
            // Initialize interactive features after components are loaded
            this.initializeInteractivity();
        } catch (error) {
            console.error('Error loading components:', error);
        }
    }

    initializeInteractivity() {
        // Re-run the main script functionality after components are loaded
        if (typeof window.initializeBakeryFeatures === 'function') {
            window.initializeBakeryFeatures();
        }
        
        // Initialize navigation
        if (typeof window.initializeNavigation === 'function') {
            window.initializeNavigation();
        }
        
        // Initialize page-specific features
        this.initializePageSpecificFeatures();
        
        // Update active navigation state
        this.updateActiveNavigation();
    }
    
    initializePageSpecificFeatures() {
        // Initialize features based on current page
        const currentPath = window.location.pathname;
        
        if (currentPath.includes('products.html')) {
            if (typeof window.initializeProductFeatures === 'function') {
                window.initializeProductFeatures();
            }
        } else if (currentPath.includes('contact.html')) {
            if (typeof window.initializeContactForm === 'function') {
                window.initializeContactForm();
            }
        } else if (currentPath.includes('events.html')) {
            if (typeof window.initializeEventFeatures === 'function') {
                window.initializeEventFeatures();
            }
        }
        
        // Initialize animations for all pages
        if (typeof window.initializeAnimations === 'function') {
            window.initializeAnimations();
        }
    }
    
    updateActiveNavigation() {
        const currentPath = window.location.pathname;
        const navLinks = document.querySelectorAll('.nav-menu a');
        
        navLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href && currentPath.includes(href.replace('.html', ''))) {
                link.style.color = '#d97706';
                link.style.fontWeight = '600';
            }
        });
    }
}

// Initialize component loader when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    const loader = new ComponentLoader();
    loader.loadAllComponents();
});

// Global function to initialize loader with custom components (for backwards compatibility)
window.initializeComponentLoader = function(customComponents = null) {
    const loader = new ComponentLoader(customComponents);
    loader.loadAllComponents();
};

// Legacy loadComponent function for backwards compatibility
window.loadComponent = function(elementId, componentPath) {
    fetch(componentPath)
        .then(response => response.text())
        .then(data => {
            const element = document.getElementById(elementId);
            if (element) {
                element.innerHTML = data;
            }
        })
        .catch(error => console.error('Error loading component:', error));
};
