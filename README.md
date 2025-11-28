# Roomer - Grundriss Planer

Eine Offline-First-Webanwendung zum Einrichten von Möbeln auf Grundrissen (Floor Plans).

## Features

- **Offline-First**: Funktioniert komplett offline dank Service Worker
- **Grundriss-Upload**: Unterstützt Bilder (PNG, JPG, etc.)
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
- Klicken Sie auf das Upload-Feld in der Sidebar
- Wählen Sie eine PDF- oder Bilddatei Ihres Grundrisses aus
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
- Es wird automatisch ausgewählt (blaue Umrandung)

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

### 5. Navigation & Zoom
- **Pan/Verschieben**: Klicken und ziehen auf leerem Bereich
- **Zoom**: Mausrad zum Zoomen (zoomt zur Mausposition)
- **Zoom-Buttons**: +/- Buttons in der Toolbar
- **Home-Button (⌂)**: Passt Ansicht an, um gesamten Grundriss zu zeigen
- **Automatisches Fit**: Beim Laden wird der Grundriss automatisch angepasst

### 6. Projekt verwalten
- **Automatisches Speichern**: Änderungen werden sofort gespeichert (localStorage)
- **Projektname**: Wird im Header angezeigt, kann mit ✏️ Symbol umbenannt werden
- **Projekt schließen**: Schließt das aktuelle Projekt ohne Bestätigung (da auto-gespeichert)
- **Gespeicherte Projekte**: Beim Start oder nach "Projekt schließen" werden alle gespeicherten Projekte angezeigt
- **Projekt laden**: Klicken Sie auf ein Projekt in der Liste zum Laden
- **Projekt löschen**: Klicken Sie auf "Löschen" neben einem Projekt
- **Möbel zurücksetzen**: Entfernt alle Möbel, behält Grundriss und Kalibrierung

## Technische Details

### Offline-Funktionalität
Die App verwendet einen Service Worker (`sw.js`), der alle Ressourcen cacht:
- HTML, CSS, JavaScript
- Hochgeladene Grundrisse
- Möbelanordnungen

### Datenspeicherung
- **localStorage**: Speichert Projektdaten (Grundriss, Möbel, Kalibrierung)
- Gespeichert werden: Grundriss-Bild, Möbelanordnungen, Pixel-pro-Meter-Wert
- **IndexedDB**: Könnte für größere Projekte implementiert werden

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

- PDF-Unterstützung mit PDF.js
- Exportfunktion (PNG, PDF, JSON)
- Mehrere Räume/Etagen
- Benutzerdefinierte Möbel
- Messlinien und Abstände
- Undo/Redo-Funktionalität
- Touch-Unterstützung für Tablets
- Möbelgruppen
- 3D-Vorschau

## Datenschutz

Alle Daten bleiben lokal im Browser. Es werden keine Daten an externe Server gesendet.

## Lizenz

MIT License - Frei verwendbar für private und kommerzielle Projekte.
