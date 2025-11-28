# Visuelle Hinweise - Möbel-Darstellung

## Übersicht der visuellen Elemente

### Nicht ausgewähltes Möbel
```
    ┌───────┐
    │       │
    │ SOFA  │  ← Name in der Mitte
    │       │
    └───────┘
    Schwarzer Rahmen (1px)
```

### Ausgewähltes Möbel
```
    160 cm ← Breite-Angabe
        ○  ← Magenta Rotations-Griff
        │
    ┌───┴───┐
  ■ │       │ ■
    │ SOFA  │  ← Name mit schwarzem Outline
    │       │     50 cm ← Tiefe-Angabe (rotiert)
  ■ └───────┘ ■
    Magenta Ecken (8×8px)
    Magenta Rahmen (3px)
```

### Expandierbares Möbel (z.B. Schlafsofa)
```
    ┌ ─ ─ ─ ─ ─ ┐  ← Gestrichelt: Erweiterte Größe
    │ ┌───────┐ │
    │ │ SOFA  │ │
    │ └───────┘ │
    └ ─ ─ ─ ─ ─ ┘
```

---

## Element-Details

### 1. Rotations-Griff (Magenta Kreis)

**Aussehen:**
- Magenta (#FF1493) gefüllter Kreis mit schwarzem Rand
- Radius: 8px
- Position: 30px über der Oberkante des Möbels
- Nur bei ausgewähltem Möbel sichtbar

**Funktionalität:**
- Klicken und ziehen zum Drehen des Möbels
- Rotation rastet in 45°-Schritten ein
- Shift-Taste halten für freie Rotation ohne Rasterung
- Zeigt die aktuelle Ausrichtung des Möbels

**Code:**
```javascript
const handleDistance = 30;
const handleRadius = 8;
const handleLocalY = -h / 2 - handleDistance;

// Draw handle
ctx.beginPath();
ctx.arc(0, handleLocalY, handleRadius, 0, Math.PI * 2);
ctx.fillStyle = "#FF1493";
ctx.fill();
ctx.strokeStyle = "#000";
ctx.lineWidth = 2;
ctx.stroke();
```

**45° Rotation Snapping:**
```javascript
let angle = Math.atan2(dy, dx) * (180 / Math.PI);
angle = (angle + 90 + 360) % 360;

// Snap to 45° increments unless Shift is pressed
if (!e.shiftKey) {
  angle = Math.round(angle / 45) * 45;
}
```

### 2. Ecken-Markierungen (Magenta Quadrate)

**Aussehen:**
- 8×8 Pixel große magenta Quadrate
- Nur bei ausgewähltem Möbel sichtbar
- An allen vier Ecken

**Zweck:**
- Verdeutlichen die exakte Position der Ecken
- Helfen beim Ausrichten
- Zeigen die Rotation visuell

**Positionierung:**
```javascript
const corners = [
  [-w/2, -h/2],  // Top-left
  [w/2, -h/2],   // Top-right
  [w/2, h/2],    // Bottom-right
  [-w/2, h/2]    // Bottom-left
];
```

### 3. Maßangaben (Breite & Tiefe)

**Breite (oben):**
- Position: Zentriert, 15px über der Oberkante
- Format: `"160 cm"`
- Font: Bold 11px
- Farbe: Weiß mit schwarzem Outline

**Tiefe (rechts):**
- Position: 15px rechts von der Rechtkante
- Um 90° rotiert (vertikal)
- Format: `"85 cm"`
- Font: Bold 11px
- Farbe: Weiß mit schwarzem Outline

**Code:**
```javascript
// Width at top
ctx.strokeText(`${furniture.width} cm`, 0, -h/2 - 15);
ctx.fillText(`${furniture.width} cm`, 0, -h/2 - 15);

// Depth at right (rotated)
ctx.save();
ctx.translate(w/2 + 15, 0);
ctx.rotate(Math.PI / 2);
ctx.strokeText(`${furniture.depth} cm`, 0, 0);
ctx.fillText(`${furniture.depth} cm`, 0, 0);
ctx.restore();
```

### 4. Name-Label (Zentrum)

**Aussehen:**
- Weißer Text mit schwarzem Outline
- 12px Font
- Immer horizontal (rotiert nicht mit)
- In der Mitte des Möbels

**Zweck:**
- Identifikation des Möbeltyps
- Bleibt lesbar bei jeder Rotation

**Code:**
```javascript
ctx.strokeStyle = "#000";
ctx.lineWidth = 2;
ctx.strokeText(furniture.name, 0, 0);
ctx.fillStyle = "#fff";
ctx.fillText(furniture.name, 0, 0);
```

### 5. Auswahl-Rahmen

**Nicht ausgewählt:**
- Schwarz (#333)
- 1px dick
- Direkt am Möbel

**Ausgewählt:**
- Magenta (#FF1493)
- 3px dick
- Direkt am Möbel

### 6. Spezielle Möbelformen

**L-förmiges Möbel (Eckbank):**
- Gezeichnet als zusammenhängender Pfad
- Konfigurierbare Sitzflächentiefe
- Keine doppelten Rahmenlinien

**Runder Tisch:**
- Verwendet `ctx.arc()` für kreisförmige Darstellung
- Breite = Tiefe = Durchmesser

**Expandierbares Möbel (Schlafsofa):**
- Normale Größe: ausgefüllt
- Erweiterte Größe: gestrichelte Umrandung
- Nur sichtbar wenn Unterschied > 5cm
- Erweiterte Tiefe zeigt nach hinten

---

## Zusammenspiel der Elemente

### Beispiel: 160×85cm Sofa, 45° rotiert, ausgewählt

```
              160 cm
                ↑
                ○  ← Magenta Rotations-Griff
                │
         ■ ┌────┴────┐ ■  ← Magenta Ecken
           │  SOFA   │
           └─────────┘     85 cm →
         ■             ■
           
    Magenta Box (3px) = Auswahl
    Magenta Kreis = Rotations-Griff
    Magenta Quadrate = Ecken
```

---

## Farben-Referenz

| Element | Farbe | Hex | Verwendung |
|---------|-------|-----|------------|
| **Möbel-Füllung** | Variabel | z.B. #8B4513 | Je nach Möbeltyp |
| **Rahmen (normal)** | Schwarz | #333 | Nicht ausgewählt |
| **Rahmen (ausgewählt)** | Magenta | #FF1493 | Ausgewählt |
| **Ecken** | Magenta | #FF1493 | Ausgewählt |
| **Rotations-Griff** | Magenta | #FF1493 | Interaktive Rotation |
| **Text (Füllung)** | Weiß | #fff | Labels & Maße |
| **Text (Outline)** | Schwarz | #000 | Lesbarkeit |

---

## Tipps zur Verwendung

### Möbel präzise ausrichten

1. **Verwenden Sie die Ecken-Markierungen:**
   - Die magenta Quadrate zeigen exakt, wo die Ecken sind
   - Perfekt zum Bündig-Ausrichten

2. **Nutzen Sie den Rotations-Griff:**
   - Ziehen Sie den magenta Kreis zum Drehen
   - Automatische 45°-Rasterung für gerade Ausrichtung
   - Shift-Taste für freie Rotation

3. **Achten Sie auf Maße:**
   - Breite und Tiefe werden angezeigt
   - Hilft beim Abschätzen von Abständen

### Rotations-Tipps

1. **45°-Rasterung:**
   - Standard: Möbel rastet bei 0°, 45°, 90°, 135°, 180°, 225°, 270°, 315° ein
   - Perfekt für gerade Wände und diagonale Platzierung

2. **Freie Rotation:**
   - Shift-Taste gedrückt halten während dem Drehen
   - Für präzise Anpassung an schräge Wände

3. **Sidebar-Eingabe:**
   - Alternativ: Exakten Winkel in Sidebar eingeben
   - Nützlich für spezifische Winkel

---

## Technische Details

### Rendering-Reihenfolge

1. Canvas-Transformationen (Pan & Zoom)
2. Grundriss-Bild
3. Für jedes Möbel:
   - Save context
   - Translate to position
   - Rotate by angle
   - Draw shape (rectangle, circle, L-shape, or expandable)
   - Draw border
   - Draw expanded outline (if expandable)
   - Draw corner markers (if selected)
   - Draw rotation handle (if selected)
   - Draw dimensions (if selected)
   - Draw name label
   - Restore context
4. Kalibrierungs-Linie (wenn aktiv)

### Performance

- **Render-on-demand**: Loop läuft nur bei Änderungen (nicht kontinuierlich)
- **Canvas transformations**: Effiziente Rotation mit `ctx.rotate()`
- **< 1ms** pro Möbel auf modernen Browsern
- **Auto-save**: Speichert bei jedem Edit automatisch in localStorage

---

## Zusammenfassung

| Symbol | Bedeutung | Wann sichtbar |
|--------|-----------|---------------|
| ○ Magenta Kreis | Rotations-Griff | Nur bei Auswahl |
| ■ Magenta Quadrate | Ecken-Markierung | Nur bei Auswahl |
| "160 cm" | Maße (Breite/Tiefe) | Nur bei Auswahl |
| Magenta Rahmen (3px) | Ausgewählt | Nur bei Auswahl |
| Schwarzer Rahmen (1px) | Normal | Wenn nicht ausgewählt |
| Gestrichelte Linie | Erweiterte Größe | Bei expandierbaren Möbeln |
| "SOFA" | Name | Immer |

**Funktionen:**
- **45°-Rotation mit Shift-Override** für präzise Ausrichtung
- **Interaktiver Rotations-Griff** für intuitives Drehen
- **Auto-Save** bei jeder Änderung
- **Projekt-Management** mit Namen und Speicherliste

**Alles zusammen ergibt eine klare visuelle Sprache für intuitive Möbelplatzierung!**
