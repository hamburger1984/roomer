# Visuelle Hinweise - Möbel-Darstellung

## Übersicht der visuellen Elemente

### Nicht ausgewähltes Möbel
```
        ↑ Blauer Pfeil (Rotationsindikator)
        │
    ┌───┴───┐
    │       │
    │ SOFA  │  ← Name in der Mitte
    │       │
    └───────┘
    Schwarzer Rahmen (1px)
```

### Ausgewähltes Möbel
```
    160 cm ← Breite-Angabe
        ↑
        │ Blauer Pfeil
    ┌───┴───┐
  ■ │       │ ■
    │ SOFA  │  ← Name mit schwarzem Outline
    │       │     50 cm ← Tiefe-Angabe (rotiert)
  ■ └───────┘ ■
    Blaue Ecken (8×8px)
    Blauer Rahmen (3px)
```

### Möbel mit Wandkollision
```
    ╔═══════════╗
    ║ ┌───────┐ ║ ← Rot gestrichelt (5px Abstand)
    ║ │ SOFA  │ ║
    ║ └───────┘ ║
    ╔═══════════╗
    
    Warnung: Berührt Wand!
```

---

## Element-Details

### 1. Rotations-Indikator (Blauer Pfeil)

**Aussehen:**
- Blaue Linie, 3px dick
- Ragt 15px aus der Oberseite heraus
- Pfeilspitze mit zwei Strichen

**Bedeutung:**
- Zeigt die "Vorderseite" oder "Ausrichtung" des Möbels
- Wichtig für asymmetrische Möbel (Sofa, Bett, Schreibtisch)
- Dreht sich mit dem Möbel

**Code:**
```javascript
// Arrow line
ctx.moveTo(0, -h/2);
ctx.lineTo(0, -h/2 - 15);

// Arrow head (two lines forming >)
ctx.moveTo(0, -h/2 - 15);
ctx.lineTo(-5, -h/2 - 10);  // Left side
ctx.moveTo(0, -h/2 - 15);
ctx.lineTo(5, -h/2 - 10);   // Right side
```

**Beispiel - Sofa bei verschiedenen Rotationen:**
```
0°:     90°:    180°:   270°:
  ↑     ┌──→      ↓     ←──┐
┌─┴─┐   │        ┌─┬─┐      │
│   │   │        │   │      │
└───┘   └───┐    └───┘  ┌───┘
```

### 2. Ecken-Markierungen (Blaue Quadrate)

**Aussehen:**
- 8×8 Pixel große blaue Quadrate
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
- Blau (#3498db)
- 3px dick
- Direkt am Möbel

### 6. Kollisions-Warnung

**Aussehen:**
- Rot (#e74c3c)
- 3px dick
- Gestrichelt (5px Strich, 5px Lücke)
- 5px Abstand zum Möbel

**Bedeutung:**
- Möbel berührt eine Wand
- Basiert auf Edge-Detection (21 Prüfpunkte)
- Rotation wird berücksichtigt

---

## Zusammenspiel der Elemente

### Beispiel: 160×85cm Sofa, 45° rotiert, ausgewählt

```
              160 cm
                ↑
           ╔════╪════╗  ← Rot: Kollision
           ║    │    ║
         ■ ║    │    ║ ■  ← Blaue Ecken
           ║ ┌──┴──┐ ║
           ║ │SOFA │ ║     85 cm →
           ║ └─────┘ ║
         ■ ║         ║ ■
           ╔═════════╗
           
    Blaue Box (3px) = Auswahl
    Rote gestrichelte Box = Wandkollision
    Blauer Pfeil nach oben = Vorderseite
```

---

## Kollisions-Erkennung & Rotation

### ✅ JA, Rotation wird berücksichtigt!

Die Kollisionserkennung transformiert alle 21 Prüfpunkte mit dem Rotationswinkel:

```javascript
const angle = (furniture.rotation * Math.PI) / 180;

for (const point of checkPoints) {
  // Rotation anwenden
  const rotatedX = point.x * Math.cos(angle) - point.y * Math.sin(angle);
  const rotatedY = point.x * Math.sin(angle) + point.y * Math.cos(angle);
  
  // Zur Weltposition addieren
  const worldX = furniture.x + rotatedX;
  const worldY = furniture.y + rotatedY;
  
  // Prüfen
  if (isWallAtPoint(worldX, worldY)) {
    return true; // Kollision!
  }
}
```

### Beispiel: Gedrehtes Sofa an Wand

```
0° Rotation - Keine Kollision:
    ║
    ║  ┌───────┐
    ║  │ SOFA  │
    ║  └───────┘

45° Rotation - Kollision erkannt!
    ║
    ║╔═══╗
    ║║ ╱ ║  ← Ecke berührt Wand
    ║║╱  ║  ← Rot markiert
    ║╚═══╝
```

Die 21 Prüfpunkte folgen der Rotation:
```
Original (0°):         Rotiert (45°):
*───*───*              *  *  *
│       │               *   *
*   *   *          →     * * *
│       │               *   *
*───*───*              *  *  *
```

---

## Farben-Referenz

| Element | Farbe | Hex | Verwendung |
|---------|-------|-----|------------|
| **Möbel-Füllung** | Variabel | z.B. #8B4513 | Je nach Möbeltyp |
| **Rahmen (normal)** | Schwarz | #333 | Nicht ausgewählt |
| **Rahmen (ausgewählt)** | Blau | #3498db | Ausgewählt |
| **Ecken** | Blau | #3498db | Ausgewählt |
| **Pfeil** | Blau | #3498db | Rotations-Indikator |
| **Kollision** | Rot | #e74c3c | Wand-Warnung |
| **Text (Füllung)** | Weiß | #fff | Labels & Maße |
| **Text (Outline)** | Schwarz | #000 | Lesbarkeit |

---

## Tipps zur Verwendung

### Möbel präzise ausrichten

1. **Verwenden Sie die Ecken-Markierungen:**
   - Die blauen Quadrate zeigen exakt, wo die Ecken sind
   - Perfekt zum Bündig-Ausrichten

2. **Beachten Sie den Pfeil:**
   - Der blaue Pfeil zeigt die "Vorderseite"
   - Wichtig bei Sofas (Sitzrichtung) oder Betten (Kopfteil)

3. **Achten Sie auf Maße:**
   - Breite und Tiefe werden angezeigt
   - Hilft beim Abschätzen von Abständen

### Kollisionen vermeiden

1. **Rote Markierung beachten:**
   - Erscheint sofort bei Wandberührung
   - Funktioniert auch bei Rotation

2. **Text wird ignoriert:**
   - "KÜCHE" oder "BAD" im Grundriss lösen keine Kollision aus
   - Nur echte Wände werden erkannt

3. **Farbige Räume:**
   - Grüne, blaue oder gelbe Raumflächen = OK
   - Nur Wand-Kanten werden erkannt

---

## Technische Details

### Rendering-Reihenfolge

1. Canvas-Transformationen (Pan & Zoom)
2. Grundriss-Bild
3. Für jedes Möbel:
   - Save context
   - Translate to position
   - Rotate by angle
   - Draw filled rectangle
   - Draw border
   - Draw collision warning (if needed)
   - Draw corner markers (if selected)
   - Draw dimensions (if selected)
   - Draw name label
   - Draw rotation arrow
   - Restore context
4. Kalibrierungs-Linie (wenn aktiv)

### Performance

- **21 Prüfpunkte** pro Möbel
- **~700 Pixelabfragen** für Kollisionserkennung
- **< 1ms** pro Möbel auf modernen Browsern
- Render-Loop läuft nur bei Änderungen (nicht kontinuierlich)

---

## Zusammenfassung

| Symbol | Bedeutung | Wann sichtbar |
|--------|-----------|---------------|
| ↑ Blauer Pfeil | Vorderseite/Rotation | Immer |
| ■ Blaue Quadrate | Ecken-Markierung | Nur bei Auswahl |
| "160 cm" | Maße (Breite/Tiefe) | Nur bei Auswahl |
| Blauer Rahmen (3px) | Ausgewählt | Nur bei Auswahl |
| Schwarzer Rahmen (1px) | Normal | Wenn nicht ausgewählt |
| Rot gestrichelt | Kollisions-Warnung | Bei Wandberührung |
| "SOFA" | Name | Immer |

**Alles zusammen ergibt eine klare visuelle Sprache für intuitive Möbelplatzierung!**
