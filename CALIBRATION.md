# Kalibrierungs-System

## Überblick

Das neue Kalibrierungs-System ermöglicht präzise Maßstabsbestimmung durch:
1. **Interaktive Linienzeichnung** auf dem Grundriss
2. **Eingabe der echten Länge** dieser Linie
3. **Automatische Berechnung** von Pixeln pro Meter

Dies ist **deutlich präziser** als die Verwendung von Maßstabsverhältnissen wie 1:100, da:
- Pixelgrößen zwischen verschiedenen PDFs variieren (DPI-abhängig)
- Bildschirmauflösungen unterschiedlich sind
- Der Benutzer jede beliebige sichtbare Strecke nutzen kann

## Vorteile gegenüber Maßstabs-Verhältnissen

### ❌ Altes System: Maßstabs-Verhältnis
```
Problem: 1:100 bedeutet "1cm auf Papier = 100cm in Realität"
- Aber wie viele Pixel sind 1cm auf dem Bildschirm?
- Hängt von PDF-DPI, Zoom-Level, Bildschirmgröße ab
- Ungenau und fehleranfällig
```

### ✅ Neues System: Pixel-pro-Meter-Kalibrierung
```
Lösung: Direkte Messung im aktuellen Bild
- Benutzer zeichnet Linie über bekannte Strecke (z.B. 3.25m)
- System misst: 650 Pixel
- Berechnung: 650 px / 3.25 m = 200 px/m
- Präzise und unabhängig von DPI/Zoom
```

## Implementierung

### Datenstruktur
```javascript
state = {
  pixelsPerMeter: 200,  // Kalibrierter Wert
  calibrationMode: false,  // Aktiv beim Linienzeichnen
  calibrationStart: { x, y },  // Startpunkt
  calibrationEnd: { x, y }  // Endpunkt
}
```

### Kalibrierungsablauf

1. **Start:** Button "🖊️ Kalibrieren" klicken
   - `calibrationMode = true`
   - Cursor wird zu Fadenkreuz
   - Anweisungen werden angezeigt

2. **Erster Klick:** Startpunkt setzen
   - `calibrationStart = { x, y }`
   - Roter Punkt wird gezeichnet

3. **Zweiter Klick:** Endpunkt setzen
   - `calibrationEnd = { x, y }`
   - Rote Linie wird gezeichnet
   - Eingabefeld erscheint

4. **Eingabe:** Echte Länge eingeben
   - Wert in Meter oder Zentimeter
   - Beispiel: 3.25 m oder 325 cm

5. **Berechnung:**
```javascript
const dx = calibrationEnd.x - calibrationStart.x;
const dy = calibrationEnd.y - calibrationStart.y;
const pixelDistance = Math.sqrt(dx * dx + dy * dy);

const lengthInMeters = unit === 'cm' ? length / 100 : length;
state.pixelsPerMeter = pixelDistance / lengthInMeters;
```

## Möbelgrößen-Berechnung

### Vorher (Maßstabs-basiert)
```javascript
function cmToPixels(cm) {
  const scaleFactor = state.scaleUnit === 'm' ? 100 : 1;
  return (cm / (state.scale * scaleFactor)) * 100;
}
// Unklar was "scale" genau bedeutet
```

### Nachher (Kalibrierungs-basiert)
```javascript
function cmToPixels(cm) {
  if (!state.pixelsPerMeter) {
    return (cm / 100) * 100;  // Fallback: 100 px/m
  }
  return (cm / 100) * state.pixelsPerMeter;
}
// Klare Bedeutung: cm → m → Pixel
```

### Beispiel
```
Sofa: 200 cm breit
Kalibrierung: 150 px/m

Berechnung:
200 cm / 100 = 2 m
2 m * 150 px/m = 300 Pixel

→ Sofa wird 300 Pixel breit dargestellt
```

## Visuelle Darstellung

### Kalibrierungslinie
- **Farbe:** Rot (#e74c3c)
- **Startpunkt:** Ausgefüllter Kreis (5px Radius)
- **Linie:** 3px dick
- **Endpunkt:** Ausgefüllter Kreis (5px Radius)
- **Label:** Pixelabstand wird angezeigt

### Canvas-Cursor
- **Normal:** `grab`
- **Kalibrierung:** `crosshair`
- **Verschieben:** `grabbing`

## Persistenz

### Speichern
```javascript
const project = {
  floorPlan: state.floorPlan,  // Base64 Bild
  pixelsPerMeter: state.pixelsPerMeter,  // Kalibrierter Wert
  furniture: state.furniture  // Möbelanordnungen
};
localStorage.setItem('roomer-project', JSON.stringify(project));
```

### Laden
```javascript
state.pixelsPerMeter = project.pixelsPerMeter || null;
// Anzeige: "200.0 px/m (gespeichert)"
```

## Fehlerbehandlung

### Kein Maßstab kalibriert
```javascript
if (!state.pixelsPerMeter) {
  // Fallback: 100 px/m (1 Meter = 100 Pixel)
  return (cm / 100) * 100;
}
```

### Ungültige Eingabe
```javascript
if (!length || length <= 0) {
  alert('Bitte geben Sie eine gültige Länge ein.');
  return;
}
```

### Linie nicht gezeichnet
```javascript
if (!state.calibrationStart || !state.calibrationEnd) {
  alert('Bitte zeichnen Sie zuerst eine Linie im Grundriss.');
  return;
}
```

## Automatische Erkennung (Zukünftig)

### Maßangaben im Grundriss
Viele Grundrisse enthalten Maßangaben wie:
```
|-------------------|
      3.25 m
```

Geplante Funktionen:
1. **OCR für Bilder:** Text aus Bildern extrahieren
2. **Muster-Erkennung:** Linien + Maße finden
3. **Automatische Vorschläge:** "Gefunden: 3.25m bei Pixel 100-650"

### Erkennbare Muster
```javascript
const measurementPatterns = [
  /(\d+\.?\d*)\s*m/,        // "3.25 m"
  /(\d+)\s*cm/,             // "325 cm"  
  /(\d+\.?\d*)\s*meter/i,   // "3.25 Meter"
];
```

## Best Practices

### Für Benutzer
1. **Lange Strecken wählen:** Je länger, desto präziser
2. **Sichtbare Maße nutzen:** Im Grundriss eingezeichnete Maße verwenden
3. **Gerade Linien:** Horizontal oder vertikal für Genauigkeit
4. **Mehrfach kalibrieren:** Bei Unsicherheit mehrere Strecken messen

### Für Entwickler
1. **Konsistente Einheiten:** Immer in Metern intern rechnen
2. **Visuelle Feedback:** Linie und Abstand deutlich zeigen
3. **Eingabevalidierung:** Nur positive Zahlen akzeptieren
4. **Fallback-Werte:** Bei fehlender Kalibrierung sinnvolle Defaults

## Migration

### Von altem System
```javascript
// Alt: state.scale = 100, state.scaleUnit = 'cm'
// → Bedeutung unklar

// Neu: state.pixelsPerMeter = 200
// → Klar definiert
```

### Rückwärts-Kompatibilität
```javascript
// Alte Projekte ohne pixelsPerMeter
if (project.scale && !project.pixelsPerMeter) {
  // Ungefähre Umrechnung (nicht präzise!)
  state.pixelsPerMeter = 100;  // Schätzwert
}
```

## Zusammenfassung

✅ **Vorteile:**
- Präzise Maßstabsbestimmung
- Unabhängig von DPI/Zoom
- Benutzerfreundlich und visuell
- Funktioniert mit jedem Grundriss

✅ **Anwendungsfälle:**
- PDFs mit Maßangaben
- Bilder ohne Maßstabsangabe
- Gescannte Grundrisse
- Fotos von Bauplänen

✅ **Technisch robust:**
- Klare Berechnungslogik
- Gute Fehlerbehandlung
- Persistente Speicherung
- Visuelles Feedback
