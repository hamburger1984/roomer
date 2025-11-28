# Changelog

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
