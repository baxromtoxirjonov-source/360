# Virtual Tour Project - INSTRUCTIONS

## Overview
This is a single-file HTML/CSS/JS virtual tour application that uses Pannellum.js to display 360° panoramic images. The project showcases 3 rooms: Living Room, Kitchen, and Bedroom.

## How to Run

### Option 1: Using Live Server (Recommended)
1. Make sure you have [Node.js](https://nodejs.org/) installed
2. Install the Live Server extension for VS Code, or run:
   ```bash
   npm install -g live-server
   ```
3. Navigate to the project folder and run:
   ```bash
   live-server
   ```
4. Open your browser and visit `http://127.0.0.1:8080`

### Option 2: Direct Double-Click
1. Simply double-click the `virtual-tour.html` file
2. Open it in any modern browser (Chrome, Firefox, Edge, Safari)

### Option 3: Deploy to GitHub Pages / Vercel
1. Push this repository to GitHub
2. Enable GitHub Pages in repository settings
3. Or connect to Vercel for automatic deployment

## Project Structure
- `virtual-tour.html` - Single file containing all HTML, CSS, and JavaScript
- No external CSS/JS files needed (all from CDNs)

## How It Works
1. **Pannellum.js** (loaded from unpkg CDN) renders 360° panoramic images in the browser using WebGL
2. **3 Poly Haven HDRI images** are used:
   - Living Room: `combination_room` - Soft natural light from bay window, warm Victorian parlor
   - Kitchen: `kiara_interior` - Warm interior with mixed natural and soft artificial light, cozy kitchen-lounge
   - Bedroom: `glasshouse_interior` - Glasshouse interior with soft partly-cloudy light through large windows
3. **Navigation**:
   - Click hotspots (marked areas in the panorama) to interact
   - Use "Oldingi xona" / "Keyingi xona" buttons to move between rooms
   - Click on room thumbnails in the selector to jump to any room
4. **Responsive Design**: Automatically adjusts for mobile phones and computer screens

## Customizing
To add more rooms or change images:
1. Find free 360° HDRIs from [Poly Haven](https://polyhaven.com/hdris) or [Unsplash](https://unsplash.com/s/photos/360-panorama)
2. Replace the `panoUrl` property in the `panoramas` array with your new image URL
3. Add hotspot coordinates (x, y from 0-1) in each room's `hotspots` array
4. Update room titles and descriptions as needed

## Screenshot Reference Points
For exam presentation, capture screenshots of these 3 views:
1. **Mehmonxona (Living Room)** - Bay window with warm lighting
2. **Oshxona (Kitchen)** - Cozy kitchen-lounge interior
3. **Yotoqxona (Bedroom)** - Glasshouse with panoramic vista

## Browser Compatibility
- Chrome / Firefox / Edge / Safari (latest versions)
- Mobile browsers (iOS and Android)
- Requires JavaScript enabled