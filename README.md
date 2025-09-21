# Crusty Delights Pékség Website - Optimized Structure

This project features the source code for a university project task. The webpage is about a finctional bakery.

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

### Running Locally with Python Web Server

The website uses dynamic component loading which requires running on a web server (not just opening files directly). Here's how to run it locally:

#### Python 3.x (Recommended)

```bash
# Navigate to the project directory
cd bakery-webpage

# Start the web server on port 8000
python -m http.server 8000

# Or use a custom port (e.g., 8008)
python -m http.server 8008
```

#### Accessing the Website

After starting the server, open your browser and go to:

- `http://localhost:8000` (or your chosen port)
- Navigate to different pages:

#### Why a Web Server is Required

- The component loader uses the Fetch API to dynamically load HTML components
- Modern browsers block fetch requests to `file://` URLs for security reasons
- A local web server serves files over `http://` which allows the components to load properly

### To edit a specific section:

- Edit the corresponding file in the `components/` folder
- Changes will be reflected when you refresh the page

### To add new components:

1. Create a new HTML file in the `components/` folder
2. Add a placeholder div in the appropriate page
3. The component loader will automatically detect and load the new component

## Files Explanation

- **styles.css**: Contains all styling for the entire website
- **script.js**: Main functionality including smooth scrolling, animations, and interactivity
- **component-loader.js**: Handles dynamic loading of HTML components
- **components/*.html**: Individual HTML components for each section
