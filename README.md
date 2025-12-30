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

## Privacy

All data remains local in the browser. No data is sent to external servers.

## License

MIT License - Free to use for private and commercial projects.

---

---

# Roomer - Grundriss Planer

Eine Offline-First-Webanwendung zum Einrichten von Möbeln auf Grundrissen (Floor Plans).

## Features

- **Offline-First**: Funktioniert komplett offline dank Service Worker
- **Mehrsprachige Unterstützung**: Englisch und Deutsch mit automatischer Spracherkennung
- **Grundriss-Upload**: Unterstützt Bilder (PNG, JPG, etc.) und PDFs
- **Maßstab-Konfiguration**: Definieren Sie den Maßstab Ihres Grundrisses
- **Möbelbibliothek**: Vorgefertigte Möbel mit realistischen Abmessungen
  - Sitzgelegenheiten (Stühle, Sessel, Sofas, Eckbank, Schlafsofa)
  - Tische (Couch-, Ess-, Schreibtische, runde Tische)
  - Schränke (Kleiderschränke, Sideboards, Regale)
  - Betten (Einzel-, Doppel-, Queen-Size)
  - Geräte (Waschmaschine, Trockner, Geschirrspüler, Kühlschrank, Herd, Backofen)
  - Dekoration (Pflanzen, TV, Lampen, Küchenschränke, Teppiche)
- **Interaktive Platzierung**: Möbel per Drag & Drop platzieren
- **Rotation**: Möbel drehen mit 45°-Rasterung (Shift-Taste für freie Rotation)
- **Rotations-Handle**: Visueller Griff zum Drehen von ausgewählten Möbeln
- **Dimensionsanpassung**: Breite und Tiefe individuell anpassen
- **Möbel umbenennen**: Individuelle Namen für Möbelstücke vergeben
- **Zoom & Pan**: Grundriss zoomen und verschieben
- **Snapshot-System**: Versionskontrolle für Ihre Einrichtungsentwürfe mit visueller Timeline
- **Undo/Redo**: Rückgängig machen und Wiederherstellen von Änderungen (Strg+Z / Strg+Y)
- **Export/Import**: Projekte als .roomer.json Dateien exportieren und importieren
- **Zuschneiden**: Grundriss auf gewünschten Bereich zuschneiden
- **Datenpersistenz**: Automatisches Speichern in localStorage

## Installation

1. Kopieren Sie alle Dateien in ein Verzeichnis
2. Öffnen Sie `index.html` in einem modernen Browser
3. Alternativ: Starten Sie einen lokalen Webserver:
   ```bash
   # Mit Python 3
   python -m http.server 8000
   
   # Mit Node.js (npx)
   npx serve
   ```
4. Öffnen Sie `http://localhost:8000` im Browser

## Verwendung

### 1. Grundriss hochladen
- Klicken Sie auf das Upload-Feld auf dem Start-Bildschirm
- Wählen Sie eine PDF- oder Bilddatei Ihres Grundrisses aus (PNG, JPG, GIF, WebP, PDF)
- Der Grundriss wird auf dem Canvas angezeigt

### 2. Maßstab kalibrieren
**Kalibrierung durch Linienzeichnung:**
1. Klicken Sie auf das ✏️ Symbol in der Toolbar (unten rechts)
2. Klicken Sie auf einen Startpunkt einer bekannten Strecke im Grundriss
3. Klicken Sie auf den Endpunkt derselben Strecke
4. Geben Sie die echte Länge dieser Strecke ein (z.B. "3.25")
5. Wählen Sie die Einheit (Meter oder Zentimeter)
6. Klicken Sie auf "Übernehmen"

**Tipps für präzise Kalibrierung:**
- Wählen Sie eine lange, gut sichtbare Strecke (z.B. Raumlänge)
- Nutzen Sie Maßangaben, die im Grundriss eingezeichnet sind
- Die Anwendung zeigt die Pixellänge der gezeichneten Linie an

**Automatische Text-Erkennung:**
- Bei PDFs versucht die App, Maßstabsangaben wie "1:100" zu erkennen
- Dies funktioniert nur, wenn der Maßstab als Text (nicht als Bild) im PDF enthalten ist
- In den meisten Fällen ist die manuelle Kalibrierung genauer

### 3. Möbel hinzufügen
- Wählen Sie eine Kategorie oder "Alle"
- Klicken Sie auf ein Möbelstück aus der Bibliothek
- Das Möbel erscheint **in der Mitte Ihrer aktuellen Ansicht**
- Es wird automatisch ausgewählt (magenta Umrandung)

### 4. Möbel bearbeiten
- **Verschieben**: Klicken und ziehen Sie das Möbelstück
- **Auswählen**: Klicken Sie auf ein Möbel (magenta Umrandung = ausgewählt)
- **Drehen**: 
  - Klicken und ziehen Sie den magenta Rotations-Griff über dem Möbel, oder
  - Ändern Sie den Rotationswinkel in der Sidebar
  - Rotation rastet automatisch in 45°-Schritten ein
  - Halten Sie die Shift-Taste für freie Rotation ohne Rasterung
- **Größe anpassen**: Ändern Sie Breite und Tiefe in der Sidebar
- **Umbenennen**: Ändern Sie den Namen in der Sidebar
- **Löschen**: 
  - Drücken Sie die `Entf`/`Delete`-Taste, oder
  - Klicken Sie "Löschen" in der Sidebar

**Visuelle Hinweise:**
- **Magenta Umrandung**: Zeigt ausgewähltes Möbel
- **Magenta Kreis**: Rotations-Griff zum Drehen (oberhalb des Möbels)
- **Eck-Markierungen**: Kleine Quadrate an den vier Ecken (nur bei Auswahl)
- **Maßangaben**: Breite (oben) und Tiefe (rechts) in cm (nur bei Auswahl)
- **Gestrichelte Linie**: Zeigt erweiterte Größe bei ausklappbaren Möbeln (z.B. Schlafsofa)

### 5. Sidebar
- **Pin/Unpin**: Klicken Sie auf das 📌/📍 Symbol, um die Sidebar permanent anzuzeigen oder automatisch auszublenden
- **Automatisches Ausblenden**: Im unpinned Modus verschwindet die Sidebar automatisch beim Interagieren mit dem Canvas
- **Overlay-Modus**: Die Sidebar überlagert den Canvas ohne dessen Größe zu beeinflussen

### 6. Navigation & Zoom
- **Pan/Verschieben**: Klicken und ziehen auf leerem Bereich
- **Zoom**: Mausrad zum Zoomen (zoomt zur Mausposition)
- **Zoom-Buttons**: +/- Buttons in der Toolbar (unten rechts, zoomen zur Ansichtsmitte)
- **Home-Button (⌂)**: Passt Ansicht an, um gesamten Grundriss zu zeigen
- **Automatisches Fit**: Beim Laden wird der Grundriss automatisch angepasst

### 7. Snapshot-System (Versionskontrolle)

Das Snapshot-System ermöglicht es Ihnen, verschiedene Versionen Ihrer Einrichtung zu speichern und zwischen ihnen zu wechseln - ähnlich wie Git für Code.

**Snapshot erstellen:**
- Klicken Sie auf das 📸 Symbol im Header
- Ihr aktueller Zustand (Möbel, Positionen, Zoom, Pan) wird gespeichert
- Der neue Snapshot erscheint in der visuellen Timeline

**Visuelle Timeline (Graph):**
- Befindet sich im Header zwischen "Projekt schließen" und 📸 Symbol
- **Kompakter Modus**: Graph ist standardmäßig verkleinert und skaliert auf 70%
- **Hover zum Erweitern**: Fahren Sie mit der Maus über den Graph, um ihn zu vergrößern
- **Horizontale Timeline**: Snapshots werden von links nach rechts angeordnet
- **Scrollbar**: Bei vielen Snapshots horizontal scrollbar

**Graph-Elemente:**
- 🟢 **Grüner Knoten**: Erster/Root-Snapshot
- 🔵 **Blaue Knoten**: Normale Snapshots
- 🔴 **Roter Knoten**: Aktueller Snapshot (pulsiert sanft)
- 🟡 **Gelber "?" Knoten**: Nicht gespeicherte Änderungen (erscheint automatisch bei Bearbeitung)
- **Verbindungslinien**: Blaue Linien zeigen die Verbindungen zwischen Snapshots
- **Gestrichelte gelbe Linie**: Zeigt an, dass eine neue Version erstellt werden sollte

**Navigation:**
- **Klick auf Knoten**: Springt sofort zu diesem Snapshot
- **Hover über Knoten**: Zeigt Datum und Uhrzeit der Erstellung
- **Tooltip**: Erscheint automatisch beim Hovern

**Snapshot löschen:**
- Fahren Sie mit der Maus über einen Knoten
- Klicken Sie auf das rote × Symbol (erscheint oben rechts)
- **Bestätigung**: Bei Snapshots mit abhängigen Versionen erscheint eine Warnung
- **Kaskadierendes Löschen**: Löscht auch alle abhängigen Child-Snapshots

**Branching (Verzweigung):**
- Springen Sie zu einem älteren Snapshot zurück
- Nehmen Sie Änderungen vor
- Beim Erstellen eines neuen Snapshots werden Sie gefragt:
  - **"OK"**: Neuere Snapshots verwerfen (lineare Historie)
  - **"Abbrechen"**: Neuen Branch erstellen (Fork)
- Branches werden vertikal im Graph angezeigt

**Unsaved Changes Indicator:**
- Gelber "?" Knoten erscheint automatisch nach dem aktuellen Snapshot
- Zeigt an, dass Sie Änderungen vorgenommen haben, die noch nicht gesichert sind
- Verschwindet, wenn Sie einen neuen Snapshot erstellen
- **Auslöser**: Möbel hinzufügen, löschen, verschieben, drehen, oder Eigenschaften ändern

**Beispiel-Workflow:**
1. Grundriss hochladen → 📸 Snapshot 1 (leerer Raum)
2. Möbel platzieren → 📸 Snapshot 2 (erste Version)
3. Umstellen → 📸 Snapshot 3 (zweite Version)
4. Zu Snapshot 2 zurück → Änderungen → Fork erstellen → 📸 Snapshot 4 (alternative Version)
5. Graph zeigt nun zwei Branches: 1→2→3 und 1→2→4

### 8. Undo/Redo
- **Rückgängig**: Strg+Z (Windows/Linux) oder Cmd+Z (Mac) oder ↶ Button
- **Wiederherstellen**: Strg+Y oder Strg+Shift+Z (Windows/Linux) oder Cmd+Y oder Cmd+Shift+Z (Mac) oder ↷ Button
- **Verlauf**: Bis zu 50 Schritte werden gespeichert
- **Unterstützte Aktionen**: Möbel hinzufügen, löschen, verschieben, drehen, Eigenschaften ändern
- **Intelligente Gruppierung**: Beim Bearbeiten von Eigenschaften wird nur ein Undo-Schritt pro Bearbeitungssitzung erstellt
- **Buttons**: Werden automatisch aktiviert/deaktiviert je nach verfügbarem Verlauf

### 9. Export/Import
**Projekt exportieren:**
- Klicken Sie auf das 💾 Symbol im Header
- Datei wird als `{Projektname}.roomer.json` heruntergeladen
- Enthält: Grundriss, Möbel, Snapshots, Kalibrierung, alle Einstellungen
- Format: JSON (kann mit Texteditor geöffnet werden)

**Projekt importieren:**
- Klicken Sie auf das 📂 Symbol im Header
- Wählen Sie eine `.roomer.json` Datei aus
- **Automatische Namenskonflikte-Behandlung**: Bei gleichen Projektnamen wird automatisch (1), (2), etc. angehängt
- Projekt wird automatisch geladen nach Import
- Fehlerhafte Dateien werden mit Fehlermeldung abgelehnt

**Anwendungsfälle:**
- Projekte zwischen Browsern/Geräten übertragen
- Projekte mit anderen Personen teilen
- Backup-Kopien erstellen
- Archivierung außerhalb des Browsers

### 10. Grundriss zuschneiden
**Zuschneiden aktivieren:**
- Klicken Sie auf das ✂️ Symbol in der Canvas-Toolbar (unten rechts)
- Cursor wird zum Fadenkreuz

**Bereich auswählen:**
- Klicken und ziehen Sie, um ein Rechteck zu zeichnen
- **Visuelle Hilfen**:
  - Dunkler Overlay außerhalb der Auswahl
  - Blaue gestrichelte Linie um die Auswahl
  - Live-Dimensionsanzeige in Pixeln
- Crop-Panel zeigt ausgewählte Größe an

**Zuschneiden anwenden:**
- Klicken Sie "Zuschneiden" im Crop-Panel
- **Automatische Anpassungen**:
  - Grundriss wird auf ausgewählten Bereich zugeschnitten
  - Möbelpositionen werden entsprechend verschoben
  - Kalibrierungspunkte werden angepasst (falls vorhanden)
- **Undo-Unterstützung**: Zuschneiden kann rückgängig gemacht werden
- **Validierung**: Mindestgröße 10×10 Pixel

**Abbrechen:**
- Klicken Sie "Abbrechen" oder drücken Sie ESC
- Auswahl wird verworfen, keine Änderungen

**Anwendungsfälle:**
- Entfernen von unnötigen Bereichen aus gescannten Dokumenten
- Fokus auf einzelnen Raum in Gesamtgrundriss
- Reduzierung der Dateigröße
- Verbesserung der Übersichtlichkeit

### 11. Projekt verwalten
- **Automatisches Speichern**: Änderungen werden sofort gespeichert (localStorage)
- **Projektname**: Wird im Header angezeigt, kann mit ✏️ Symbol umbenannt werden
- **Projekt exportieren**: 💾 Symbol zum Download als .roomer.json Datei
- **Projekt importieren**: 📂 Symbol zum Laden von .roomer.json Dateien
- **Projekt schließen**: Schließt das aktuelle Projekt ohne Bestätigung (da auto-gespeichert)
- **Gespeicherte Projekte**: Beim Start oder nach "Projekt schließen" werden alle gespeicherten Projekte angezeigt
- **Projekt laden**: Klicken Sie auf ein Projekt in der Liste zum Laden
- **Projekt löschen**: Klicken Sie auf "Löschen" neben einem Projekt
- **Snapshot-Historie**: Wird mit dem Projekt gespeichert und wiederhergestellt

### 12. Spracheinstellungen
- **Sprachumschalter**: Befindet sich im Header (🇬🇧 English / 🇩🇪 Deutsch)
- **Automatische Erkennung**: Erkennt Browsersprache bei erster Verwendung
- **Präferenz-Speicherung**: Sprachwahl wird in localStorage gespeichert
- **Live-Updates**: UI aktualisiert sich sofort beim Sprachwechsel
- **Unterstützte Sprachen**: Englisch (Standard), Deutsch

## Technische Details

### Offline-Funktionalität
Die App verwendet einen Service Worker (`sw.js`), der alle Ressourcen cacht:
- HTML, CSS, JavaScript
- Hochgeladene Grundrisse
- Möbelanordnungen

### Datenspeicherung
- **localStorage**: Speichert alle Projektdaten (Grundriss, Möbel, Kalibrierung)
- Gespeichert werden: Grundriss-Bild, Möbelanordnungen, Pixel-pro-Meter-Wert, Projektname, Zeitstempel
- Speicherkeys: `roomer-current-project` (aktuelles Projekt), `roomer-projects` (alle Projekte), `roomer-language` (Sprachpräferenz)
- **IndexedDB**: Nicht implementiert (könnte für größere Projekte hinzugefügt werden)

### Browser-Kompatibilität
- Chrome/Edge: ✓ Vollständig unterstützt
- Firefox: ✓ Vollständig unterstützt
- Safari: ✓ Vollständig unterstützt
- IE11: ✗ Nicht unterstützt

### Kalibrierungs-Berechnung
Die App berechnet Pixel pro Meter basierend auf einer vom Benutzer gezeichneten Linie:

```javascript
// Berechnung der Pixeldistanz
pixelDistance = √(dx² + dy²)

// Umrechnung in Meter
lengthInMeters = (Eingabe in cm) / 100  // oder direkt in Metern

// Pixel pro Meter
pixelsPerMeter = pixelDistance / lengthInMeters
```

**Beispiel:** 
- Gezeichnete Linie: 500 Pixel
- Echte Länge: 5 Meter
- Ergebnis: 100 Pixel/Meter

**Möbel-Größenberechnung:**
```javascript
// Ein 160cm breites Bett bei 100 px/m
pixels = (160 cm / 100) * 100 px/m = 160 Pixel
```

## Zukünftige Erweiterungen

- PNG/PDF Export (Rendering des Grundrisses)
- Mehrere Räume/Etagen
- Benutzerdefinierte Möbel
- Messlinien und Abstände
- Touch-Unterstützung für Tablets
- Möbelgruppen
- 3D-Vorschau
- IndexedDB für größere Projekte (aktuell nur localStorage)
- Snapshot-Annotationen (Notizen zu einzelnen Versionen)

## Datenschutz

Alle Daten bleiben lokal im Browser. Es werden keine Daten an externe Server gesendet.

## Lizenz

MIT License - Frei verwendbar für private und kommerzielle Projekte.
