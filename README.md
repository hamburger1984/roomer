# Roomer - Floor Plan Designer

An offline-first web application for arranging furniture on floor plans.

## Features

- **Offline-First**: Works completely offline thanks to Service Worker
- **Multi-Language Support**: English and German with automatic language detection
- **Floor Plan Upload**: Supports images (PNG, JPG, etc.) and PDFs
- **Scale Configuration**: Define the scale of your floor plan
- **Furniture Library**: Pre-made furniture with realistic dimensions
  - Seating (chairs, armchairs, sofas, corner bench, sleeper sofa)
  - Tables (coffee, dining, desks, round tables)
  - Storage (wardrobes, sideboards, shelves)
  - Beds (single, double, queen-size)
  - Appliances (washing machine, dryer, dishwasher, refrigerator, stove, oven)
  - Decoration (plants, TV, lamps, kitchen cabinets, rugs)
- **Interactive Placement**: Place furniture via drag & drop
- **Rotation**: Rotate furniture with 45° snapping (Shift key for free rotation)
- **Rotation Handle**: Visual handle for rotating selected furniture
- **Dimension Adjustment**: Customize width and depth individually
- **Rename Furniture**: Assign individual names to furniture pieces
- **Zoom & Pan**: Zoom and pan the floor plan
- **Snapshot System**: Version control for your design drafts with visual timeline
- **Undo/Redo**: Undo and redo changes (Ctrl+Z / Ctrl+Y)
- **Export/Import**: Export and import projects as .roomer.json files
- **Crop**: Crop floor plan to desired area
- **Data Persistence**: Automatic saving in localStorage

## Installation

1. Copy all files to a directory
2. Open `index.html` in a modern browser
3. Alternatively: Start a local web server:
   ```bash
   # With Python 3
   python -m http.server 8000
   
   # With Node.js (npx)
   npx serve
   ```
4. Open `http://localhost:8000` in your browser

## Usage

### 1. Upload Floor Plan
- Click on the upload field on the start screen
- Select a PDF or image file of your floor plan (PNG, JPG, GIF, WebP, PDF)
- The floor plan will be displayed on the canvas

### 2. Calibrate Scale
**Calibration by drawing a line:**
1. Click on the ✏️ symbol in the toolbar (bottom right)
2. Click on a starting point of a known distance in the floor plan
3. Click on the end point of the same distance
4. Enter the real length of this distance (e.g., "3.25")
5. Select the unit (meter or centimeter)
6. Click "Apply"

**Tips for precise calibration:**
- Choose a long, clearly visible distance (e.g., room length)
- Use measurements that are marked in the floor plan
- The application shows the pixel length of the drawn line

**Automatic text recognition:**
- For PDFs, the app tries to detect scale specifications like "1:100"
- This only works if the scale is contained as text (not as image) in the PDF
- In most cases, manual calibration is more accurate

### 3. Add Furniture
- Select a category or "All"
- Click on a furniture piece from the library
- The furniture appears **in the center of your current view**
- It is automatically selected (magenta outline)

### 4. Edit Furniture
- **Move**: Click and drag the furniture piece
- **Select**: Click on furniture (magenta outline = selected)
- **Rotate**: 
  - Click and drag the magenta rotation handle above the furniture, or
  - Change the rotation angle in the sidebar
  - Rotation automatically snaps to 45° increments
  - Hold Shift key for free rotation without snapping
- **Adjust Size**: Change width and depth in the sidebar
- **Rename**: Change the name in the sidebar
- **Delete**: 
  - Press the `Delete` key, or
  - Click "Delete" in the sidebar

**Visual Hints:**
- **Magenta Outline**: Shows selected furniture
- **Magenta Circle**: Rotation handle for rotating (above furniture)
- **Corner Markers**: Small squares at the four corners (only when selected)
- **Dimensions**: Width (top) and depth (right) in cm (only when selected)
- **Dashed Line**: Shows expanded size for extendable furniture (e.g., sleeper sofa)

### 5. Sidebar
- **Pin/Unpin**: Click on the 📌/📍 symbol to permanently show the sidebar or auto-hide it
- **Auto-hide**: In unpinned mode, the sidebar automatically disappears when interacting with the canvas
- **Overlay Mode**: The sidebar overlays the canvas without affecting its size

### 6. Navigation & Zoom
- **Pan/Move**: Click and drag on empty area
- **Zoom**: Mouse wheel to zoom (zooms to mouse position)
- **Zoom Buttons**: +/- buttons in the toolbar (bottom right, zoom to view center)
- **Home Button (⌂)**: Fits view to show entire floor plan
- **Automatic Fit**: When loading, the floor plan is automatically fitted

### 7. Snapshot System (Version Control)

The snapshot system allows you to save different versions of your furniture arrangement and switch between them - similar to Git for code.

**Create Snapshot:**
- Click on the 📸 symbol in the header
- Your current state (furniture, positions, zoom, pan) is saved
- The new snapshot appears in the visual timeline

**Visual Timeline (Graph):**
- Located in the header between "Close Project" and 📸 symbol
- **Compact Mode**: Graph is scaled to 70% by default
- **Hover to Expand**: Move your mouse over the graph to enlarge it
- **Horizontal Timeline**: Snapshots are arranged from left to right
- **Scrollbar**: Horizontally scrollable with many snapshots

**Graph Elements:**
- 🟢 **Green Node**: First/Root snapshot
- 🔵 **Blue Nodes**: Regular snapshots
- 🔴 **Red Node**: Current snapshot (pulses gently)
- 🟡 **Yellow "?" Node**: Unsaved changes (appears automatically when editing)
- **Connection Lines**: Blue lines show connections between snapshots
- **Dashed Yellow Line**: Indicates a new version should be created

**Navigation:**
- **Click on Node**: Jumps immediately to this snapshot
- **Hover over Node**: Shows date and time of creation
- **Tooltip**: Appears automatically when hovering

**Delete Snapshot:**
- Hover over a node
- Click on the red × symbol (appears in top right)
- **Confirmation**: A warning appears for snapshots with dependent versions
- **Cascading Delete**: Also deletes all dependent child snapshots

**Branching (Forking):**
- Jump back to an older snapshot
- Make changes
- When creating a new snapshot, you will be asked:
  - **"OK"**: Discard newer snapshots (linear history)
  - **"Cancel"**: Create new branch (fork)
- Branches are displayed vertically in the graph

**Unsaved Changes Indicator:**
- Yellow "?" node appears automatically after the current snapshot
- Indicates you have made changes that are not yet saved
- Disappears when you create a new snapshot
- **Triggers**: Add, delete, move, rotate furniture, or change properties

**Example Workflow:**
1. Upload floor plan → 📸 Snapshot 1 (empty room)
2. Place furniture → 📸 Snapshot 2 (first version)
3. Rearrange → 📸 Snapshot 3 (second version)
4. Back to Snapshot 2 → Changes → Create fork → 📸 Snapshot 4 (alternative version)
5. Graph now shows two branches: 1→2→3 and 1→2→4

### 8. Undo/Redo
- **Undo**: Ctrl+Z (Windows/Linux) or Cmd+Z (Mac) or ↶ button
- **Redo**: Ctrl+Y or Ctrl+Shift+Z (Windows/Linux) or Cmd+Y or Cmd+Shift+Z (Mac) or ↷ button
- **History**: Up to 50 steps are saved
- **Supported Actions**: Add, delete, move, rotate furniture, change properties
- **Smart Grouping**: When editing properties, only one undo step is created per editing session
- **Buttons**: Automatically enabled/disabled depending on available history

### 9. Export/Import
**Export Project:**
- Click on the 💾 symbol in the header
- File is downloaded as `{ProjectName}.roomer.json`
- Contains: Floor plan, furniture, snapshots, calibration, all settings
- Format: JSON (can be opened with text editor)

**Import Project:**
- Click on the 📂 symbol in the header
- Select a `.roomer.json` file
- **Automatic Name Conflict Handling**: With same project names, (1), (2), etc. is automatically appended
- Project is automatically loaded after import
- Corrupted files are rejected with error message

**Use Cases:**
- Transfer projects between browsers/devices
- Share projects with other people
- Create backup copies
- Archive outside the browser

### 10. Crop Floor Plan
**Activate Cropping:**
- Click on the ✂️ symbol in the canvas toolbar (bottom right)
- Cursor becomes crosshair

**Select Area:**
- Click and drag to draw a rectangle
- **Visual Aids**:
  - Dark overlay outside selection
  - Blue dashed line around selection
  - Live dimension display in pixels
- Crop panel shows selected size

**Apply Crop:**
- Click "Crop" in the crop panel
- **Automatic Adjustments**:
  - Floor plan is cropped to selected area
  - Furniture positions are shifted accordingly
  - Calibration points are adjusted (if present)
- **Undo Support**: Cropping can be undone
- **Validation**: Minimum size 10×10 pixels

**Cancel:**
- Click "Cancel" or press ESC
- Selection is discarded, no changes

**Use Cases:**
- Remove unnecessary areas from scanned documents
- Focus on single room in overall floor plan
- Reduce file size
- Improve clarity

### 11. Project Management
- **Automatic Saving**: Changes are saved immediately (localStorage)
- **Project Name**: Displayed in header, can be renamed with ✏️ symbol
- **Export Project**: 💾 symbol to download as .roomer.json file
- **Import Project**: 📂 symbol to load .roomer.json files
- **Close Project**: Closes current project without confirmation (since auto-saved)
- **Saved Projects**: At start or after "Close Project", all saved projects are displayed
- **Load Project**: Click on a project in the list to load
- **Delete Project**: Click "Delete" next to a project
- **Snapshot History**: Saved with project and restored

### 12. Language Settings
- **Language Switcher**: Located in header (🇬🇧 English / 🇩🇪 Deutsch)
- **Automatic Detection**: Detects browser language on first use
- **Preference Storage**: Language choice is saved in localStorage
- **Live Updates**: UI updates immediately when changing language
- **Supported Languages**: English (default), German

## Technical Details

### Offline Functionality
The app uses a Service Worker (`sw.js`) that caches all resources:
- HTML, CSS, JavaScript
- Uploaded floor plans
- Furniture arrangements

### Data Storage
- **localStorage**: Stores all project data (floor plan, furniture, calibration)
- Saved: Floor plan image, furniture arrangements, pixels-per-meter value, project name, timestamp
- Storage keys: `roomer-current-project` (current project), `roomer-projects` (all projects), `roomer-language` (language preference)
- **IndexedDB**: Not implemented (could be added for larger projects)

### Browser Compatibility
- Chrome/Edge: ✓ Fully supported
- Firefox: ✓ Fully supported
- Safari: ✓ Fully supported
- IE11: ✗ Not supported

### Calibration Calculation
The app calculates pixels per meter based on a user-drawn line:

```javascript
// Calculate pixel distance
pixelDistance = √(dx² + dy²)

// Convert to meters
lengthInMeters = (input in cm) / 100  // or directly in meters

// Pixels per meter
pixelsPerMeter = pixelDistance / lengthInMeters
```

**Example:** 
- Drawn line: 500 pixels
- Real length: 5 meters
- Result: 100 pixels/meter

**Furniture Size Calculation:**
```javascript
// A 160cm wide bed at 100 px/m
pixels = (160 cm / 100) * 100 px/m = 160 pixels
```

## Future Extensions

- PNG/PDF Export (rendering of floor plan)
- Multiple rooms/floors
- Custom furniture
- Measurement lines and distances
- Touch support for tablets
- Furniture groups
- 3D preview
- IndexedDB for larger projects (currently only localStorage)
- Snapshot annotations (notes for individual versions)

## Dependencies & Security

### Software Bill of Materials (SBOM)

Roomer maintains a complete SBOM (Software Bill of Materials) for transparency and security auditing. See [`sbom.json`](sbom.json) for the full CycloneDX-format inventory.

**External Dependencies:**
- **PDF.js 3.11.174** (Mozilla, Apache 2.0 License)
  - Purpose: Render PDF floor plans in the browser
  - Files: `libs/pdf-3.11.174.min.js`, `libs/pdf.worker-3.11.174.min.js`
  - Source: https://github.com/mozilla/pdf.js
  - Self-hosted for offline functionality (no CDN dependencies)

**Updating PDF.js:**
1. Download new version from Mozilla CDN or GitHub releases
2. Rename files to include version: `pdf-X.Y.Z.min.js`, `pdf.worker-X.Y.Z.min.js`
3. Update references in `index.html`, `app.js`, and `sw.js`
4. Update `CACHE_NAME` in `sw.js` (e.g., `roomer-v4`)
5. Update `sbom.json` with new version and SHA256 checksums
6. Commit changes

**Security:**
- All dependencies are self-hosted (no external CDN requests)
- SHA256 checksums documented in SBOM
- Regular updates recommended for security patches

## Privacy

All data remains local in the browser. No data is sent to external servers.

## License

MIT License - Free to use for private and commercial projects.
