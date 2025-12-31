# Visual Hints - Furniture Representation

## Overview of Visual Elements

### Unselected Furniture
```
    ┌───────┐
    │       │
    │ SOFA  │  ← Name in the center
    │       │
    └───────┘
    Black border (1px)
```

### Selected Furniture
```
    160 cm ← Width label
        ○  ← Magenta rotation handle
        │
    ┌───┴───┐
  ■ │       │ ■
    │ SOFA  │  ← Name with black outline
    │       │     50 cm ← Depth label (rotated)
  ■ └───────┘ ■
    Magenta corners (8×8px)
    Magenta border (3px)
```

### Expandable Furniture (e.g., Sleeper Sofa)
```
    ┌ ─ ─ ─ ─ ─ ┐  ← Dashed: Expanded size
    │ ┌───────┐ │
    │ │ SOFA  │ │
    │ └───────┘ │
    └ ─ ─ ─ ─ ─ ┘
```

---

## Element Details

### 1. Rotation Handle (Magenta Circle)

**Appearance:**
- Magenta (#FF1493) filled circle with black border
- Radius: 8px
- Position: 30px above the top edge of furniture
- Only visible when furniture is selected

**Functionality:**
- Click and drag to rotate furniture
- Rotation snaps to 45° increments
- Hold Shift key for free rotation without snapping
- Shows current orientation of furniture

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

### 2. Corner Markers (Magenta Squares)

**Appearance:**
- 8×8 pixel magenta squares
- Only visible when furniture is selected
- At all four corners

**Purpose:**
- Clarify exact position of corners
- Help with alignment
- Visually show rotation

**Positioning:**
```javascript
const corners = [
  [-w/2, -h/2],  // Top-left
  [w/2, -h/2],   // Top-right
  [w/2, h/2],    // Bottom-right
  [-w/2, h/2]    // Bottom-left
];
```

### 3. Dimensions (Width & Depth)

**Width (top):**
- Position: Centered, 15px above top edge
- Format: `"160 cm"`
- Font: Bold 11px
- Color: White with black outline

**Depth (right):**
- Position: 15px right of right edge
- Rotated 90° (vertical)
- Format: `"85 cm"`
- Font: Bold 11px
- Color: White with black outline

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

### 4. Name Label (Center)

**Appearance:**
- White text with black outline
- 12px font
- Always horizontal (doesn't rotate with furniture)
- In the center of furniture

**Purpose:**
- Identify furniture type
- Remains readable at any rotation

**Code:**
```javascript
ctx.strokeStyle = "#000";
ctx.lineWidth = 3;
ctx.strokeText(furniture.name, 0, 0);
ctx.fillStyle = "#fff";
ctx.fillText(furniture.name, 0, 0);
```

### 5. Selection Border

**Unselected:**
- Black (#333)
- 1px thick
- Directly on furniture

**Selected:**
- Magenta (#FF1493)
- 3px thick
- Directly on furniture

### 6. Special Furniture Shapes

**L-shaped Furniture (Corner Bench):**
- Drawn as continuous path
- Configurable seat depth
- No double border lines

**Round Table:**
- Uses `ctx.arc()` for circular representation
- Width = Depth = Diameter

**Expandable Furniture (Sleeper Sofa):**
- Normal size: filled
- Expanded size: dashed outline
- Only visible if difference > 5cm
- Expanded depth extends backward

---

## Interplay of Elements

### Example: 160×85cm Sofa, rotated 45°, selected

```
              160 cm
                ↑
                ○  ← Magenta rotation handle
                │
         ■ ┌────┴────┐ ■  ← Magenta corners
           │  SOFA   │
           └─────────┘     85 cm →
         ■             ■
           
    Magenta box (3px) = Selection
    Magenta circle = Rotation handle
    Magenta squares = Corners
```

---

## Color Reference

| Element | Color | Hex | Usage |
|---------|-------|-----|-------|
| **Furniture Fill** | Variable | e.g. #8B4513 | Depends on furniture type |
| **Border (normal)** | Black | #333 | Not selected |
| **Border (selected)** | Magenta | #FF1493 | Selected |
| **Corners** | Magenta | #FF1493 | Selected |
| **Rotation Handle** | Magenta | #FF1493 | Interactive rotation |
| **Text (Fill)** | White | #fff | Labels & dimensions |
| **Text (Outline)** | Black | #000 | Readability |

---

## Usage Tips

### Precisely Align Furniture

1. **Use corner markers:**
   - Magenta squares show exactly where corners are
   - Perfect for flush alignment

2. **Use rotation handle:**
   - Drag the magenta circle to rotate
   - Automatic 45° snapping for straight alignment
   - Shift key for free rotation

3. **Pay attention to dimensions:**
   - Width and depth are displayed
   - Helps estimate distances

### Rotation Tips

1. **45° Snapping:**
   - Default: Furniture snaps at 0°, 45°, 90°, 135°, 180°, 225°, 270°, 315°
   - Perfect for straight walls and diagonal placement

2. **Free Rotation:**
   - Hold Shift key while rotating
   - For precise adjustment to angled walls

3. **Sidebar Input:**
   - Alternative: Enter exact angle in sidebar
   - Useful for specific angles

---

## Technical Details

### Rendering Order

1. Canvas transformations (Pan & Zoom)
2. Floor plan image
3. For each furniture piece:
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
4. Calibration line (if active)

### Performance

- **Render-on-demand**: Loop only runs on changes (not continuously)
- **Canvas transformations**: Efficient rotation with `ctx.rotate()`
- **< 1ms** per furniture on modern browsers
- **Auto-save**: Automatically saves to localStorage on every edit

---

## Summary

| Symbol | Meaning | When Visible |
|--------|---------|--------------|
| ○ Magenta circle | Rotation handle | Only when selected |
| ■ Magenta squares | Corner markers | Only when selected |
| "160 cm" | Dimensions (width/depth) | Only when selected |
| Magenta border (3px) | Selected | Only when selected |
| Black border (1px) | Normal | When not selected |
| Dashed line | Expanded size | For expandable furniture |
| "SOFA" | Name | Always |

**Functions:**
- **45° rotation with Shift override** for precise alignment
- **Interactive rotation handle** for intuitive rotation
- **Auto-save** on every change
- **Project management** with names and save list

**Everything together creates a clear visual language for intuitive furniture placement!**
