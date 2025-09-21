# Crusty Delights Pékség Website - Optimized Structure

This project features a clean, modular architecture with consolidated components and optimized performance.

## File Structure

```
bakery-webpage/
├── index.html              # Main landing page
├── about.html              # About page
├── products.html           # Products showcase
├── contact.html            # Contact page with Google Maps
├── events.html             # Events and workshops
├── styles.css              # All CSS styles (with utility classes)
├── script.js               # Unified JavaScript functionality
├── component-loader.js     # Universal component loading system
├── navigation.js           # Navigation helper
└── components/
    ├── header.html         # Header navigation
    ├── hero.html           # Hero section
    ├── features.html       # Bakery specialties
    ├── about.html          # About section content
    ├── products.html       # Product categories and listings
    ├── contact.html        # Contact section with map
    ├── events.html         # Events and workshops content
    └── footer.html         # Footer section
```

## How It Works

### Unified Component System
- **Clean Structure**: All HTML files use consistent structure with placeholder divs
- **Dynamic Loading**: Single component loader handles all pages automatically
- **Auto-Detection**: Component loader automatically detects which components to load
- **Separation of Concerns**: HTML, CSS, and JavaScript are in separate files
- **Easy Maintenance**: Each section can be edited independently

### Component Loading System
The `component-loader.js` file:
1. Fetches each HTML component from the `/components/` directory
2. Injects them into their respective placeholder divs
3. Initializes all interactive features after loading

### Benefits
- **Modularity**: Each component can be developed and maintained separately
- **Reusability**: Components can be easily reused across different pages
- **Performance**: Components can be cached and loaded on demand
- **Collaboration**: Multiple developers can work on different components simultaneously

## Usage

### To view the modular version:
1. Open `index.html` in your browser
2. The component loader will automatically fetch and display all components

### To edit a specific section:
- Edit the corresponding file in the `components/` folder
- Changes will be reflected when you refresh the page

### To add new components:
1. Create a new HTML file in the `components/` folder
2. Add a placeholder div in `index.html`
3. Update the `component-loader.js` to include the new component

## Files Explanation

- **styles.css**: Contains all styling for the entire website
- **script.js**: Main functionality including smooth scrolling, animations, and interactivity
- **component-loader.js**: Handles dynamic loading of HTML components
- **components/*.html**: Individual HTML components for each section

## Browser Compatibility

The modular version uses modern JavaScript features:
- Fetch API for loading components
- Async/await for component loading
- IntersectionObserver for scroll animations

Supported browsers: Chrome 55+, Firefox 52+, Safari 10.1+, Edge 14+
