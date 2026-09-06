# Changelog

## Version 1.13 - Light/Dark/Auto Theme (September 2026)

### Added
- **Theme selector** in the header with three modes:
  - **Auto** - follows the OS setting (`prefers-color-scheme`)
  - **Light** and **Dark** - force a theme regardless of the OS
  - The choice is saved in `localStorage` and applied before first paint (no flash
    of the wrong theme); the canvas blank background and construction grid follow
    the theme too
- Dark-theme styling for the whole UI (sidebar, panels, buttons, forms, room/furniture
  cards, upload overlay, floating controls) via theme tokens and `[data-theme]` overrides
- **Room plans are stored and restored**: rooms-only / blank projects open directly in
  the room editor when re-opened (or opened from the saved-project list) instead of being
  hidden behind the "create new project" overlay
- **Door opening direction**: every door has a single "Direction" dropdown with all
  four opening modes — into the room (left or right) and out of the room (left or
  right), relative to the wall (a top-wall door opens to the left or right, a
  right-wall door to the top or bottom, and so on). This covers doors that open out
  of a hallway into a room as well as doors that open into the room from the hallway;
  the door stays on its wall, only the opening changes. The leaf and swing arc always
  sit on the same side of the wall (arc runs from the closed position to the open
  position). Saved projects keep working — the direction is stored as hinge
  (leading/trailing edge) plus swing (in/out)
- **Room naming**: each room card has an editable name field (empty = auto "Room n"),
  and custom names are drawn centered on the room and included in PNG exports
- **Walls drawn outside the measured area**: the wall band now extends outward from the
  room boundary instead of being centered on it, so the interior (measured) dimensions
  are not eaten into by the wall thickness; the plan export also grows to include the
  full wall thickness
- **More measurements on the drawing**: every door, window and heater shows three dims
  inside the room — left gap / opening width / right gap — and chimney corners show
  width and depth dims, in addition to the wall length labels
- **Drag fixtures on the drawing**: doors, windows and heaters can be moved along their
  wall and resized by grabbing the two edge handles; chimney corners resize via width
  and depth handles. While dragging, the measurements update live and the gaps to the
  neighboring openings on the same wall are shown
- **Measurements only for the selected room**: all dimension lines are hidden on
  unselected rooms, so the plan stays clean with several rooms; they reappear when a
  room is selected. PNG exports still show dimensions for every room
- **Selecting a fixture narrows the measurements to it**: while a door, window, heater
  or chimney is selected (clicked or dragged) only the measurements that relate to it
  stay visible — its gaps to the walls and its immediate neighbors. Selecting the room
  itself brings back the full measurement set for that room
- **Chimney gaps**: on the drawing each adjacent wall shows the chimney's size-runners
  from the corner plus the gap to the next fixture (or the remaining wall length when the
  wall is empty). Room mode also shows the gap between each pair of consecutive openings
  on a wall
- **Window board overlap**: the window ledge extends a configurable "Board overlap (cm)"
  beyond the window on both sides (symmetric); the ledge stays selectable over the full
  overhang. Defaults to 3 cm
- **Snapped door rendering**: when two rooms snap together door-to-door and neither room
  is selected, the two doors are drawn as a single merged door centered on the wall span
  the rooms share, using the average width of the two doors (the wall reveals and
  measurements follow), so the pair reads as one clean centered doorway instead of two
  doors sitting side by side. Selecting either room of the pair shows that room's door
  with its real measurements while the partner door is drawn dimmed

### Fixed
- **Chimney hatch fill** is clipped to the chimney block — the diagonal hatching no
  longer bleeds past the chimney's dimensions
- **Chimney corner measurements** run along the two walls the corner sits on instead of
  lines crossing inside the block: size-runners from the corner, the gap to the next
  fixture on each wall, or the remaining wall length when that wall is empty
- **Chimney surface label removed**: the width × depth text printed on the block is gone;
  the chimney's size now only appears as dimension runners in measurement mode, matching
  the other fixtures
- **Window board label removed**: the board depth text printed on the window ledge is
  gone too; like every fixture, the window's measurements only appear in measurement mode
- **Selecting overlapping windows and heaters**: a window's sill and a heater's body are
  now clickable anywhere on their filled area (not just on the wall line), so a heater
  below a window can be picked cleanly even where their wall bands overlap
- **Room dragging was broken**: the room hit test used `distToSegment`, which was
  accidentally removed with the measurement tool in v1.12. Rooms can be grabbed and
  moved again (wall-thickness + door snapping intact)
- **Panning the canvas** now works by left-dragging on empty space in the room editor
  (previously only middle-mouse/Shift did, and the missing `distToSegment` threw before
  any drag could even start)
- **Small plan area**: a rooms-only / blank project is now auto-fitted ("fit content")
  on load and resize, centered in the *visible* canvas area right of the pinned sidebar
  instead of half-hidden behind it; the default room is also placed in that visible area.
  The Reset view button now works for room plans too (it was a no-op without a floor
  plan image)

## Version 1.12 - Remove Measurement Tool (September 2026)

### Removed
- **Measurement Tool (📐)** and **fixed installations** (heaters, appliances, built-ins, pipes):
  - Freehand dimension lines and the typed measurement categories (W/D/DO/Win/WO/Ch/Col/H/X)
  - Measurement list, sidebar scale field, "use as scale" recalibration and the obstacle draft tool
  - Measurement/obstacle legend in PNG exports and the 📐 toolbar button
  - All `measure.*`/obstacle translations and measurement/obstacle state, persistence, undo/redo,
    crop offsets and input handling
  - The upload-dialog button now reads **"Draw rooms from scratch (blank board)"** and opens the
    room editor directly
- Kept: the construction grid (shown in the room editor), the drawing scale, PNG export
  (now floor plan + rooms only), and the room editor's door/window/heater/chimney fixtures

### Fixed
- Starting the room editor (or calibration) from the toolbar while the upload overlay was
  visible no longer leaves the canvas hidden: entering a tool hides the upload overlay, so
  rooms/plans are rendered immediately instead of behind the "create new project" screen

## Version 1.11 - Parametric Room Editor (September 2026)

### Added
- **Room Editor (🏠)** - build the floor plan from actual rooms instead of freehand lines:
  - Rooms are rectangles drawn to their **inside dimensions** (width, depth, ceiling)
  - **Global wall thickness** in cm applies to all rooms (default 15 cm used for snapping)
  - Rooms snap together with exactly one wall thickness between the interior faces
  - **Door-to-door alignment**: rooms with facing doors snap so the doors line up
  - Free drag with automatic snapping - no special ghost mode needed
  - Fixtures attached to walls with numeric offset/width/depth fields:
    - Doors (leaf + swing arc), windows (glass + window board), heaters (hatched), chimney corners
  - Automatic dimensions: wall lengths drawn on the outside, opening offsets/widths on the inside
  - Rooms persisted in projects (save/load/export/import), covered by undo/redo and crop offsets
  - Blank board shows a construction grid while in the room editor
- Undo/redo now also covers room and fixture operations

### Changed
- PNG export ("Export PNG") includes rooms and their dimensions

### Next Steps
- Irregular wall shapes and chunky corner geometry
- Snapping preview (ghost outline) while dragging rooms
- Furniture placement inside rooms

## Version 1.10 - Measurement Tool (Floor Plan Drawing) (September 2026)

### Added
- **Measurement Tool (📐)** - draw a scaled *floor plan* from real room measurements:
  - CAD-style dimension lines between any two clicked points
  - Typed measurement categories with distinct colors and short codes:
    - W = room width / wall length (also drawn as thick walls for the room outline)
    - D = door width, DO = wall → door frame (opening offset)
    - Win = window width, WO = wall → window (window offset)
    - Ch = chimney (distance from wall), Col = column/pillar, H = room height, X = other
  - Real lengths printed on the image (cm)
  - Live measurement preview while drawing
  - Construction grid on the empty board for from-scratch plans
  - **"Use as scale"** per measurement: recalibrates the drawing scale so a drawn
    distance matches the real measured value
  - Measurement list with selectable, editable and deletable entries (Delete key / 🗑)
  - **PNG export** with embedded legend explaining all measurement symbols,
    project name, scale and date
  - Measurements persisted in projects (save/load/export/import) and included in crop offsets
  - Full English/German localization
  - Furniture is hidden while measuring for a clean plan

### Changed
- Undo/redo now also covers measurement operations

### Fixed
- The upload dialog is now dismissible: "Draw floor plan from measurements
  (blank board)" starts a blank project and opens the measurement tool with the
  construction grid, so from-scratch plans work in a fresh session

### Next Steps
- OCR for image-based scale detection
- Visual scale bar recognition

## Version 1.9 - Internationalization (December 2025)

### Added
- **Multi-Language Support**:
  - Complete internationalization (i18n) system without external dependencies
  - English (default) and German language support
  - Language switcher in header (🇬🇧 English / 🇩🇪 Deutsch)
  - Automatic language detection from browser settings
  - Language preference stored in localStorage
  - Dynamic UI updates without page reload
- **Translation Coverage**:
  - All 36 furniture names translated
  - All UI labels, buttons, and form fields
  - All alert and confirm dialog messages
  - All error messages (storage, PDF, image loading, project errors)
  - ARIA labels for accessibility
  - Date and time formatting (locale-aware)
- **i18n Infrastructure**:
  - `i18n.js` - Central translation file with nested object structure
  - `t()` function for translation lookup with string interpolation
  - `getCurrentLocale()` for date/time formatting
  - `setLanguage()` for dynamic language switching
  - `updateAllUIText()` for live UI updates

### Changed
- **Default Language**: Changed from German to English
  - All hardcoded German text replaced with English defaults
  - German now available as optional language
- **Service Worker**: Updated cache to v2 to include i18n.js
- **Manifest**: Updated app name to "Roomer - Floor Plan Designer" with lang attribute
- **Code Quality**:
  - Replaced all hardcoded German strings with translation keys
  - Locale-aware date formatting (en-US / de-DE)
  - Improved error messages with context

### Technical Improvements
- Zero-dependency i18n implementation
- Efficient translation caching
- Browser language detection fallback chain: localStorage → navigator.language → English
- String interpolation support for dynamic messages (e.g., error details, counts)
- Backward compatible - existing projects load correctly regardless of language

### UI/UX Improvements
- Seamless language switching without data loss
- Consistent terminology across all UI elements
- Professional English interface for international users
- German language preserved for existing users

## Version 1.8 - Export/Import, Crop, and Undo/Redo (December 2025)

### Added
- **Undo/Redo System**:
  - Keyboard shortcuts: Ctrl+Z / Cmd+Z (undo), Ctrl+Y / Cmd+Y / Ctrl+Shift+Z (redo)
  - Toolbar buttons (↶ ↷) in canvas controls
  - History stack limited to 50 steps
  - Smart property editing: single undo entry per edit session (not per keystroke)
  - Auto-enable/disable buttons based on available history
  - Tracks: furniture add/delete, drag, rotate, property changes
- **Project Export**:
  - Export button (💾) in header controls
  - Downloads as `{ProjectName}.roomer.json` file
  - Includes all data: floor plan (base64), furniture, snapshots, calibration
  - JSON format with exportVersion field for future compatibility
  - Formatted JSON (indented) for readability
- **Project Import**:
  - Import button (📂) in header controls
  - Accepts `.json` and `.roomer.json` files
  - Automatic name conflict resolution: appends (1), (2), etc. to duplicate names
  - Validation of project structure with error messages
  - Auto-loads imported project immediately
  - Preserves all snapshots and history
- **Floor Plan Crop Tool**:
  - Crop button (✂️) in canvas controls toolbar
  - Interactive rectangle selection with drag
  - Visual feedback:
    - Semi-transparent dark overlay outside selection
    - Blue dashed border around selected area
    - Live dimension display (width × height in pixels)
  - Crop panel with confirm/cancel buttons
  - Automatic adjustments after crop:
    - Furniture positions translated to new origin
    - Calibration points updated (if set)
  - Undo support for crop operations
  - Minimum size validation (10×10 pixels)
  - Canvas refit after cropping

### Changed
- **Text Rendering**: Added `lineJoin: "round"` and `miterLimit: 2` to prevent spikes on letters M, N, W
- **Furniture Borders**: Changed to rounded corners (radius 1.5px) for softer appearance
- **L-shaped Furniture**: Complete path rewrite with proper `arcTo` usage for smooth rounded corners
- **Snapshot Creation**: Removed alert popup after creating snapshot (visual graph feedback is sufficient)

### Fixed
- L-shaped furniture spike artifact on one corner (incorrect path drawing order)
- Text rendering artifacts on sharp letter corners
- Border rendering for all furniture types now uses consistent radius

### Technical Improvements
- Blob creation for file downloads
- FileReader API for file uploads
- Canvas `getImageData()` and temporary canvas for cropping
- Coordinate transformation for position adjustments after crop
- Smart undo state tracking prevents duplicate entries during continuous editing
- Property edit session detection with focus/blur events

### UI/UX Improvements
- Export/import seamlessly integrated in header workflow
- Crop mode with crosshair cursor for precision
- Real-time crop preview with overlay
- Dimension feedback during selection
- Error handling with user-friendly German messages
- All features work with existing snapshot and undo systems

## Version 1.7 - Snapshot System & Code Quality (December 2025)

### Added
- **Snapshot System (Version Control)**:
  - Graph-based snapshot system for tracking furniture layout versions
  - Visual timeline in header with interactive node graph
  - Click nodes to instantly revert to previous states
  - Create snapshots with 📸 button
  - Branching support (fork history when editing after revert)
  - Delete snapshots with confirmation dialog
  - Cascade delete of child snapshots
  - Hover tooltips showing timestamp for each snapshot
  - Compact/expanded graph modes (70% scale, expands on hover)
  - Horizontal scrollable timeline
- **Unsaved Changes Indicator**:
  - Yellow "?" node appears automatically when editing
  - Dashed yellow line connects to current snapshot
  - Pulsing animation to draw attention
  - Automatically cleared when snapshot created
- **Visual Enhancements**:
  - Green nodes for root/first snapshots
  - Blue nodes for regular snapshots
  - Red pulsing nodes for current snapshot
  - Prominent blue connection lines between snapshots
  - Delete button (×) appears on hover over nodes
- **CSS Variables System**:
  - Centralized color, spacing, shadow, and transition definitions
  - Improved maintainability and consistency
  - Easy theming support for future dark mode

### Changed
- **Removed Reset Furniture Button**: Use snapshots for reverting changes instead
- **Improved Zoom Speed**: Reduced mouse wheel zoom delta from 0.1 to 0.05 for smoother control
- **Canvas Rendering**: Canvas now fills full viewport width regardless of sidebar state
- **Code Quality**:
  - Replaced 73 hardcoded colors with CSS variables
  - Replaced 60+ spacing values with standardized variables
  - Replaced 35 border-radius values with variables
  - Unified shadow and transition values
- **Accessibility**:
  - All inline styles moved to CSS classes
  - Added ARIA labels and roles throughout
  - Semantic HTML5 elements (nav, section, form, aside)
  - Screen reader support with live regions
  - Hidden headings for better document structure

### Removed
- `goToPreviousSnapshot()` function (replaced by click navigation)
- `goToNextSnapshot()` function (replaced by click navigation)
- `resetFurniture()` function (replaced by snapshot system)
- Snapshot navigation buttons (← →) from header
- Inline styles from HTML markup

### Technical Improvements
- Graph-based snapshot data structure with parent-child relationships
- Breadth-first search algorithm for graph layout
- Efficient descendant removal for cascade delete
- localStorage persistence of complete snapshot graph
- Auto-rendering of graph on state changes
- Backward compatible snapshot loading (handles old format)

### UI/UX Improvements
- Hover buffer zone around graph prevents flickering
- Smooth transitions for graph expansion
- Visual feedback for all interactive elements
- Tooltip positioning optimized for header placement
- Connection lines for better visual flow understanding

## Version 1.6 - Enhanced Sidebar & Improved Zoom (November 2025)

### Added
- **Translucent Auto-Hiding Sidebar**: 
  - Sidebar now has translucent background with backdrop-filter blur effect (92% opacity)
  - Pin/Unpin button (📌/📍) to toggle between persistent and auto-hide modes
  - Hover trigger zone (20px) on left edge reveals sidebar when unpinned
  - Smooth transitions (0.3s) for hide/show animations
- **Dynamic Panel Switching**:
  - When furniture selected: shows edit panel, hides furniture list
  - When nothing selected: shows furniture list, hides edit panel
- **Overlay Mode**: Sidebar floats over canvas instead of taking layout space
  - Canvas expands to full width beneath sidebar
  - Better use of screen space

### Changed
- **Zoom Behavior**: +/- buttons now zoom towards view center (instead of cursor position)
  - Provides consistent, predictable zoom behavior
  - Calculates viewport center, converts to canvas coordinates, adjusts pan after zoom
- **Pin Button Position**: Moved outside sidebar container so it stays visible when sidebar is hidden
  - Top margin added to first sidebar section to prevent overlap with pin button
  - Better accessibility on touch devices

### Fixed
- Pin button visibility on touch devices when sidebar is hidden

### Removed
- Outdated CALIBRATION.md documentation file

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
