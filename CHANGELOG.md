# Changelog

## Version 1.5 - Expanded Furniture Library & Decoration

### Added
- **Appliances Category**: Kitchen and laundry appliances
  - Waschmaschine (washing machine), Trockner (dryer)
  - Geschirrspüler (dishwasher), Kühlschrank (fridge)
  - Herd (stove), Backofen (oven)
- **Decoration Category**: Decorative items for room planning
  - Pflanzen in 3 Größen (small, medium, large plants)
  - TV (single size, wall-mountable)
  - Lampen (floor and table lamps)
  - Küchenschränke (wall-mounted and base cabinets)
  - Teppiche in 3 Größen (small, medium, large rugs)

### Changed
- Reduced decoration items for simplicity (removed guitars, speakers; consolidated TV sizes)

## Version 1.4 - Project Management & Rotation Improvements

### Added
- **Project Management System**: 
  - Named projects with save/load/delete functionality
  - Project list display with last modified timestamps
  - Project name shown in header with ellipsis for long names
  - Rename button (✏️) to change project names
- **Interactive Rotation Handle**: Visual magenta circle above selected furniture for dragging to rotate
- **45° Rotation Snapping**: Furniture rotation snaps to 45° increments
  - Hold Shift key to disable snapping for free rotation
- **Enhanced Furniture Library**:
  - Eckbank (L-shaped corner bench) with configurable seat depth
  - Schlafsofa (sleeper sofa) with expandable dimensions shown as dashed outline
  - Round tables with circular shape rendering
- **Furniture Renaming**: Name input field in properties panel

### Changed
- **UI Reorganization**:
  - Moved zoom/pan toolbar from top-right to bottom-right corner
  - Moved calibration controls to floating panel (activated by ✏️ button)
  - Removed calibration section from left sidebar
  - Upload overlay now centered until floor plan is loaded
- **Button Labels**:
  - "Neues Projekt" → "Projekt schließen" (no confirmation needed)
  - "Speichern" button removed (auto-save is always active)
  - Scale display shows current calibration next to zoom controls
- **Visual Changes**:
  - Selection color changed from blue (#3498db) to magenta (#FF1493)
  - Removed rotation direction arrows from furniture
- **Code Cleanup**:
  - Renamed all German property names to English in code (sitzflaeche → seatDepth)
  - Removed legacy `detectedScale` references
  - Storage keys: `roomer-project` → `roomer-current-project` + `roomer-projects` list

### Technical Improvements
- Auto-save on every edit (furniture move, rotate, resize, add, delete)
- Project storage with versioning support
- Shape-based rendering system (rectangle, circle, L-shape, expandable)
- Rotation handle with `Math.atan2()` angle calculation

## Version 1.3 - Simplified User Experience

### Removed
- **Wall Collision Detection**: Removed automatic wall collision detection and visual warnings
  - Simplified user experience - users can judge placement visually
  - Removed red dashed border collision warnings
  - Deleted edge detection algorithm and related documentation
  - Focus on simplicity over automated features

### Rationale
The collision detection system, while technically functional, added complexity without significant user benefit. Users can easily judge furniture placement visually, making the automated detection unnecessary. This change aligns with the principle of keeping the application simple and focused.

## Version 1.2 - Calibration System & Enhanced Navigation

### Added
- **Interactive Calibration Tool**: Draw a line on the floor plan and enter its real length
- **Pixels-per-meter System**: More accurate than scale ratios, independent of DPI
- **Visual Calibration Feedback**: Red line with pixel distance display during calibration
- **Pan & Zoom**: Click-drag to pan, mouse wheel to zoom towards cursor
- **Zoom-to-Fit**: Automatically fits floor plan when loaded
- **Keyboard Shortcuts**: Delete key removes selected furniture
- **Reset Furniture Button**: Clear all furniture while keeping floor plan
- **Smart Furniture Placement**: New furniture appears in center of current view
- **Auto-Selection**: Newly added furniture is automatically selected

### Changed
- Replaced abstract scale ratios (1:100) with concrete pixels-per-meter calibration
- Canvas now properly applies zoom and pan transformations
- Furniture placement uses screen center in canvas coordinates
- Home button now triggers zoom-to-fit instead of 1:1 zoom
- Selection system ensures only one piece of furniture selected at a time

### Technical Improvements
- Screen-to-canvas coordinate transformation system
- Zoom towards mouse cursor position
- Proper transform reset and application in render loop
- State tracking for panning vs. dragging furniture

## Version 1.1 - Scale Detection & Manual Input

### Added
- **PDF Support with PDF.js**: Full support for loading PDF floor plans
- **Automatic Scale Extraction**: Detects scale from PDF text (e.g., "1:100", "M 1:50", "Maßstab 1:100")
- **Manual Scale Input**: Button to manually enter scale when automatic detection fails
- **Scale Presets**: Quick buttons for common scales (1:50, 1:100, 1:200)
- **Enhanced Pattern Matching**: Improved regex patterns to detect various scale formats:
  - Standard: "1:100", "M 1:100"
  - German: "Maßstab 1:100", "Maßstab: 1:100"
  - Fractional: "1/100"
  - With units: "1:100cm"
  - Multiple pages scanned (first 3 pages)

### Changed
- Removed fixed scale input fields in favor of automatic detection + manual override
- Scale display now shows detection status with color coding:
  - Green: Automatically detected from PDF
  - Blue: Manually entered by user
  - Yellow: Default scale (needs manual input)
  - Red: Error during extraction
- Image uploads now automatically open manual scale input
- Improved user feedback with detailed status messages

### Technical Details
- PDF.js version: 3.11.174
- Scale validation: Accepts scales between 1:10 and 1:500
- Text extraction: Scans up to first 3 pages of PDF
- Console logging for debugging scale detection

### Known Limitations
- Scale bars embedded in images (non-text) are not detected
- Requires manual input for image files (JPG, PNG)
- PDFs with scale information only in graphics require manual entry

### Next Steps
- OCR for image-based scale detection
- Visual scale bar recognition
- Measurement tool to calibrate scale interactively
