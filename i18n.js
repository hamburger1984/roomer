// ========== INTERNATIONALIZATION SYSTEM ==========
// Language translations for Roomer application

const TRANSLATIONS = {
  en: {
    furniture: {
      // Seating
      chair: "Chair",
      armchair: "Armchair",
      sofa2: "Sofa (2-Seater)",
      sofa3: "Sofa (3-Seater)",
      sleeperSofa: "Sleeper Sofa",
      cornerBench: "Corner Bench",

      // Tables
      coffeeTable: "Coffee Table",
      diningTable4: "Dining Table (4 People)",
      diningTable6: "Dining Table (6 People)",
      desk: "Desk",
      roundTable: "Round Table",

      // Storage
      wardrobe: "Wardrobe",
      sideboard: "Sideboard",
      bookshelf: "Bookshelf",
      tvStand: "TV Stand",
      kitchenWallCabinet: "Wall Cabinet",
      kitchenBaseCabinet: "Base Cabinet",

      // Beds
      singleBed: "Single Bed",
      doubleBed: "Double Bed",
      queenBed: "Queen Bed",

      // Appliances
      washingMachine: "Washing Machine",
      dryer: "Dryer",
      dishwasher: "Dishwasher",
      fridge: "Refrigerator",
      fridgeLarge: "Refrigerator (Large)",
      stove: "Stove",
      oven: "Oven",

      // Decoration
      plantSmall: "Plant (Small)",
      plantMedium: "Plant (Medium)",
      plantLarge: "Plant (Large)",
      tv: "TV",
      lampFloor: "Floor Lamp",
      lampTable: "Table Lamp",
      rugSmall: "Rug (Small)",
      rugMedium: "Rug (Medium)",
      rugLarge: "Rug (Large)",
    },

    ui: {
      // App title
      appTitle: "Roomer - Floor Plan Designer",

      // Project controls
      closeProject: "Close Project",
      renameProject: "Rename",
      exportProject: "Export",
      importProject: "Import",
      createSnapshot: "Snapshot",

      // Buttons
      upload: "Upload",
      apply: "Apply",
      cancel: "Cancel",
      delete: "Delete",

      // Upload overlay
      newProject: "New Project",
      uploadFloorPlan: "Upload Floor Plan",
      projectName: "Project Name",
      selectFile: "📁 Select File",
      savedProjects: "Saved Projects",
      noSavedProjects: "No saved projects",

      // Furniture categories
      all: "All",
      seating: "Seating",
      tables: "Tables",
      storage: "Cabinets",
      beds: "Beds",
      appliances: "Appliances",
      decoration: "Decoration",

      // Furniture properties
      name: "Name",
      widthCm: "Width (cm)",
      depthCm: "Depth (cm)",
      seatDepthCm: "Seat Depth (cm)",
      expandedWidthCm: "Expanded Width (cm)",
      expandedDepthCm: "Expanded Depth (cm)",
      rotationDeg: "Rotation (°)",

      // Toolbar
      undo: "Undo",
      redo: "Redo",
      zoomIn: "Zoom In",
      zoomOut: "Zoom Out",
      resetView: "Reset View",
      zoomLevel: "Zoom Level",
      noScale: "No Scale",

      // Calibration panel
      calibrateScale: "Calibrate Scale",
      calibrationInstructions:
        "1. Click start point\n2. Click end point\n3. Enter actual length",
      lengthOfLine: "Length of this line:",
      meter: "Meter",
      centimeter: "Centimeter",

      // Crop panel
      cropFloorPlan: "Crop Floor Plan",
      cropInstructions: "Draw a rectangle over the desired area",
      selectedArea: "Selected area:",

      // Sidebar
      pinSidebar: "Pin Sidebar",
      unpinSidebar: "Unpin Sidebar",

      // Default values
      untitledProject: "Untitled Project",
    },

    messages: {
      // Calibration
      enterValidLength: "Please enter a valid length.",
      drawLineFirst: "Please draw a line in the floor plan first.",

      // Crop
      uploadFloorPlanFirst: "Please upload a floor plan first.",
      selectAreaFirst: "Please select an area first.",
      areaTooSmall: "The selected area is too small.",

      // Storage
      storageFull:
        "Storage full! The project could not be saved.\n\n" +
        "Please delete old projects or export this project as a file.\n\n" +
        "Tip: Large floor plans (PDFs, high-resolution images) require a lot of space.",

      // Loading errors
      floorPlanLoadError:
        "Error loading floor plan.\n\n" +
        "The image data may be corrupted. Please upload a new floor plan.",
      projectLoadError:
        "Error loading project: {error}\n\n" +
        "The project data may be corrupted.\n" +
        "Try deleting the project and importing a backup.",
      projectSaveError:
        "Error saving: {error}\n\n" + "The project could not be saved.",

      // PDF errors
      pdfRenderError:
        "Error loading PDF floor plan.\n\n" +
        "The converted image could not be loaded.",
      pdfProcessError: "Error processing PDF.\n\n",
      invalidPdf: "The file does not appear to be a valid PDF.",
      passwordProtectedPdf: "The PDF is password protected.",
      tryAnotherFile: "Please try another file.",

      // Image errors
      imageLoadError:
        "Error loading image.\n\n" +
        "The file may be corrupted or is not supported.\n" +
        "Supported formats: PNG, JPG, GIF, WebP",
      fileReadError: "Error reading file.\n\nPlease try again.",

      // Import/Export
      invalidProjectFormat: "Invalid project format.",
      importError: "Error importing project: {error}",

      // Project management
      deleteProjectConfirm: 'Really delete project "{name}"?',
      deleteSnapshotConfirm: "Delete this snapshot?",
      deleteSnapshotWithChildrenConfirm:
        "Delete this snapshot and all dependent snapshots?",

      // Snapshot fork
      snapshotForkMessage:
        "You have made changes after reverting to an earlier snapshot.\n\n" +
        "There are {count} newer snapshot(s).\n\n" +
        "Would you like to:\n" +
        '- Press "Cancel" to create a new branch (Fork)\n' +
        '- Press "OK" to discard the newer snapshots',

      // Prompts
      newProjectName: "New project name:",

      // Tooltips
      unsavedChangesHint: "Unsaved changes - Create snapshot",
    },

    aria: {
      // Main sections
      furnitureAndTools: "Furniture and Tools",
      furnitureCategories: "Furniture Categories",
      furnitureProperties: "Furniture Properties",
      floorPlanWorkspace: "Floor Plan Workspace",
      viewControls: "View Controls",
      snapshotNavigation: "Snapshot Navigation",

      // Actions
      createSnapshot: "Create snapshot",
      renameProject: "Rename project",
      exportProject: "Export project",
      importProject: "Import project",
      selectProjectFile: "Select project file",
      closeProject: "Close project",
      pinSidebar: "Pin sidebar",
      selectFloorPlanFile: "Select floor plan file",
      enterProjectName: "Enter project name",
      selectFileForFloorPlan: "Select file for floor plan",
      undo: "Undo",
      redo: "Redo",
      zoomIn: "Zoom in",
      zoomOut: "Zoom out",
      resetView: "Reset view",
      calibrateScale: "Calibrate scale",
      cropFloorPlan: "Crop floor plan",
      deleteFurniture: "Delete furniture",

      // Form labels
      furnitureName: "Furniture name",
      widthInCm: "Width in centimeters",
      depthInCm: "Depth in centimeters",
      seatDepthInCm: "Seat depth in centimeters",
      expandedWidthInCm: "Expanded width in centimeters",
      expandedDepthInCm: "Expanded depth in centimeters",
      rotationInDegrees: "Rotation in degrees",
      lengthOfReferenceLine: "Length of reference line",
      measurementUnit: "Measurement unit",
      applyCrop: "Apply crop",
      cancelCrop: "Cancel crop",
      applyCalibration: "Apply calibration",
      cancelCalibration: "Cancel calibration",

      // Screen reader
      editFurnitureProperties: "Edit furniture properties",
      savedProjectsList: "Saved projects list",
      floorPlanCanvas: "Floor plan canvas",
      selectLanguage: "Select language",
    },

    room: {
      title: "Rooms",
      instructions:
        "Rooms are measured on the inside. Drag a room to snap it next to others with one wall thickness between them.",
      wallThickness: "Wall thickness (cm)",
      addRoom: "＋ Add room",
      width: "Width (cm)",
      depth: "Depth (cm)",
      ceiling: "Ceiling (cm)",
      cardName: "Room {n}",
      delete: "Delete",
      deleteConfirm: "Delete this room?",
      clearAllConfirm: "Delete all rooms?",
      noRooms: "No rooms yet – add one to start the floor plan.",
      noDataToExport:
        "Export requires at least one room or a floor plan.",
      wallTop: "Top",
      wallRight: "Right",
      wallBottom: "Bottom",
      wallLeft: "Left",
      addDoor: "Door",
      addWindow: "Window",
      addHeater: "Heater",
      chimneyAt: "Chimney at corner:",
      cornerTl: "TL",
      cornerTr: "TR",
      cornerBr: "BR",
      cornerBl: "BL",
      selectedRooms: "Selected room",
      snapHint:
        "Drag rooms near each other to snap them with a wall thickness in between. Rooms with facing doors snap so the doors line up.",
      noFixtures: "No door, window or heater on this wall yet.",
      fixtureDoor: "Door",
      fixtureWindow: "Window",
      fixtureHeater: "Heater",
      fixtureChimney: "Chimney",
      offset: "Offset (cm)",
      board: "Board (cm)",
    },
  },

  de: {
    furniture: {
      // Seating
      chair: "Stuhl",
      armchair: "Sessel",
      sofa2: "Sofa (2-Sitzer)",
      sofa3: "Sofa (3-Sitzer)",
      sleeperSofa: "Schlafsofa",
      cornerBench: "Eckbank",

      // Tables
      coffeeTable: "Couchtisch",
      diningTable4: "Esstisch (4 Personen)",
      diningTable6: "Esstisch (6 Personen)",
      desk: "Schreibtisch",
      roundTable: "Runder Tisch",

      // Storage
      wardrobe: "Kleiderschrank",
      sideboard: "Sideboard",
      bookshelf: "Bücherregal",
      tvStand: "TV-Schrank",
      kitchenWallCabinet: "Hängeschrank",
      kitchenBaseCabinet: "Unterschrank",

      // Beds
      singleBed: "Einzelbett",
      doubleBed: "Doppelbett",
      queenBed: "Queen-Size-Bett",

      // Appliances
      washingMachine: "Waschmaschine",
      dryer: "Trockner",
      dishwasher: "Geschirrspüler",
      fridge: "Kühlschrank",
      fridgeLarge: "Kühlschrank (groß)",
      stove: "Herd",
      oven: "Backofen",

      // Decoration
      plantSmall: "Pflanze (klein)",
      plantMedium: "Pflanze (mittel)",
      plantLarge: "Pflanze (groß)",
      tv: "TV",
      lampFloor: "Stehlampe",
      lampTable: "Tischlampe",
      rugSmall: "Teppich (klein)",
      rugMedium: "Teppich (mittel)",
      rugLarge: "Teppich (groß)",
    },

    ui: {
      // App title
      appTitle: "Roomer - Grundriss Planer",

      // Project controls
      closeProject: "Projekt schließen",
      renameProject: "Umbenennen",
      exportProject: "Exportieren",
      importProject: "Importieren",
      createSnapshot: "Snapshot",

      // Buttons
      upload: "Hochladen",
      apply: "Übernehmen",
      cancel: "Abbrechen",
      delete: "Löschen",

      // Upload overlay
      newProject: "Neues Projekt",
      uploadFloorPlan: "Grundriss hochladen",
      projectName: "Projektname",
      selectFile: "📁 Datei auswählen",
      savedProjects: "Gespeicherte Projekte",
      noSavedProjects: "Keine gespeicherten Projekte",

      // Furniture categories
      all: "Alle",
      seating: "Sitzgelegenheiten",
      tables: "Tische",
      storage: "Schränke",
      beds: "Betten",
      appliances: "Geräte",
      decoration: "Dekoration",

      // Furniture properties
      name: "Name",
      widthCm: "Breite (cm)",
      depthCm: "Tiefe (cm)",
      seatDepthCm: "Sitzfläche (cm)",
      expandedWidthCm: "Breite ausgeklappt (cm)",
      expandedDepthCm: "Tiefe ausgeklappt (cm)",
      rotationDeg: "Rotation (°)",

      // Toolbar
      undo: "Rückgängig",
      redo: "Wiederherstellen",
      zoomIn: "Hineinzoomen",
      zoomOut: "Herauszoomen",
      resetView: "Ansicht zurücksetzen",
      zoomLevel: "Zoomstufe",
      noScale: "Kein Maßstab",

      // Calibration panel
      calibrateScale: "Maßstab kalibrieren",
      calibrationInstructions:
        "1. Klicken Sie auf Startpunkt\n2. Klicken Sie auf Endpunkt\n3. Geben Sie die echte Länge ein",
      lengthOfLine: "Länge dieser Linie:",
      meter: "Meter",
      centimeter: "Zentimeter",

      // Crop panel
      cropFloorPlan: "Grundriss zuschneiden",
      cropInstructions: "Ziehen Sie ein Rechteck über den gewünschten Bereich",
      selectedArea: "Ausgewählter Bereich:",

      // Sidebar
      pinSidebar: "Sidebar anheften",
      unpinSidebar: "Sidebar lösen",

      // Default values
      untitledProject: "Unbenanntes Projekt",
    },

    messages: {
      // Calibration
      enterValidLength: "Bitte geben Sie eine gültige Länge ein.",
      drawLineFirst: "Bitte zeichnen Sie zuerst eine Linie im Grundriss.",

      // Crop
      uploadFloorPlanFirst: "Bitte laden Sie zuerst einen Grundriss.",
      selectAreaFirst: "Bitte wählen Sie einen Bereich aus.",
      areaTooSmall: "Der ausgewählte Bereich ist zu klein.",

      // Storage
      storageFull:
        "Speicher voll! Das Projekt konnte nicht gespeichert werden.\n\n" +
        "Bitte löschen Sie alte Projekte oder exportieren Sie dieses Projekt als Datei.\n\n" +
        "Tipp: Große Grundrisse (PDFs, hochauflösende Bilder) benötigen viel Speicherplatz.",

      // Loading errors
      floorPlanLoadError:
        "Fehler beim Laden des Grundrisses.\n\n" +
        "Die Bilddaten sind möglicherweise beschädigt. Bitte laden Sie einen neuen Grundriss hoch.",
      projectLoadError:
        "Fehler beim Laden des Projekts: {error}\n\n" +
        "Die Projektdaten sind möglicherweise beschädigt.\n" +
        "Versuchen Sie, das Projekt zu löschen und ein Backup zu importieren.",
      projectSaveError:
        "Fehler beim Speichern: {error}\n\n" +
        "Das Projekt konnte nicht gespeichert werden.",

      // PDF errors
      pdfRenderError:
        "Fehler beim Laden des PDF-Grundrisses.\n\n" +
        "Das konvertierte Bild konnte nicht geladen werden.",
      pdfProcessError: "Fehler beim Verarbeiten des PDF.\n\n",
      invalidPdf: "Die Datei scheint keine gültige PDF zu sein.",
      passwordProtectedPdf: "Die PDF ist passwortgeschützt.",
      tryAnotherFile: "Bitte versuchen Sie es mit einer anderen Datei.",

      // Image errors
      imageLoadError:
        "Fehler beim Laden des Bildes.\n\n" +
        "Die Datei ist möglicherweise beschädigt oder wird nicht unterstützt.\n" +
        "Unterstützte Formate: PNG, JPG, GIF, WebP",
      fileReadError:
        "Fehler beim Lesen der Datei.\n\nBitte versuchen Sie es erneut.",

      // Import/Export
      invalidProjectFormat: "Ungültiges Projektformat.",
      importError: "Fehler beim Importieren des Projekts: {error}",

      // Project management
      deleteProjectConfirm: 'Projekt "{name}" wirklich löschen?',
      deleteSnapshotConfirm: "Diesen Snapshot löschen?",
      deleteSnapshotWithChildrenConfirm:
        "Diesen Snapshot und alle abhängigen Snapshots löschen?",

      // Snapshot fork
      snapshotForkMessage:
        "Sie haben nach dem Zurücksetzen zu einem früheren Snapshot Änderungen vorgenommen.\n\n" +
        "Es gibt {count} neuere Snapshot(s).\n\n" +
        "Möchten Sie:\n" +
        '- "Abbrechen" drücken, um einen neuen Branch zu erstellen (Fork)\n' +
        '- "OK" drücken, um die neueren Snapshots zu verwerfen',

      // Prompts
      newProjectName: "Neuer Projektname:",

      // Tooltips
      unsavedChangesHint: "Nicht gespeicherte Änderungen - Snapshot erstellen",
    },

    aria: {
      // Main sections
      furnitureAndTools: "Möbel und Werkzeuge",
      furnitureCategories: "Möbelkategorien",
      furnitureProperties: "Möbeleigenschaften",
      floorPlanWorkspace: "Grundriss-Arbeitsbereich",
      viewControls: "Ansichtssteuerung",
      snapshotNavigation: "Snapshot Navigation",

      // Actions
      createSnapshot: "Snapshot erstellen",
      renameProject: "Projekt umbenennen",
      exportProject: "Projekt exportieren",
      importProject: "Projekt importieren",
      selectProjectFile: "Projekt-Datei auswählen",
      closeProject: "Projekt schließen",
      pinSidebar: "Sidebar anheften",
      selectFloorPlanFile: "Grundriss-Datei auswählen",
      enterProjectName: "Projektname eingeben",
      selectFileForFloorPlan: "Datei für Grundriss auswählen",
      undo: "Rückgängig",
      redo: "Wiederherstellen",
      zoomIn: "Hineinzoomen",
      zoomOut: "Herauszoomen",
      resetView: "Ansicht zurücksetzen",
      calibrateScale: "Maßstab kalibrieren",
      cropFloorPlan: "Grundriss zuschneiden",
      deleteFurniture: "Möbel löschen",

      // Form labels
      furnitureName: "Möbelname",
      widthInCm: "Breite in Zentimetern",
      depthInCm: "Tiefe in Zentimetern",
      seatDepthInCm: "Sitzflächentiefe in Zentimetern",
      expandedWidthInCm: "Breite ausgeklappt in Zentimetern",
      expandedDepthInCm: "Tiefe ausgeklappt in Zentimetern",
      rotationInDegrees: "Rotation in Grad",
      lengthOfReferenceLine: "Länge der Referenzlinie",
      measurementUnit: "Maßeinheit",
      applyCrop: "Zuschneiden anwenden",
      cancelCrop: "Zuschneiden abbrechen",
      applyCalibration: "Kalibrierung übernehmen",
      cancelCalibration: "Kalibrierung abbrechen",

      // Screen reader
      editFurnitureProperties: "Möbeleigenschaften bearbeiten",
      savedProjectsList: "Gespeicherte Projekte",
      floorPlanCanvas: "Grundriss-Canvas",
      selectLanguage: "Sprache auswählen",
    },

    room: {
      title: "Räume",
      instructions:
        "Räume werden innen gemessen. Ziehen Sie einen Raum neben andere, um ihn mit einer Wandstärke Abstand einzurasten.",
      wallThickness: "Wandstärke (cm)",
      addRoom: "＋ Raum hinzufügen",
      width: "Breite (cm)",
      depth: "Tiefe (cm)",
      ceiling: "Deckenhöhe (cm)",
      cardName: "Raum {n}",
      delete: "Löschen",
      deleteConfirm: "Diesen Raum löschen?",
      clearAllConfirm: "Alle Räume löschen?",
      noRooms: "Noch keine Räume – fügen Sie einen hinzu, um den Grundriss zu starten.",
      noDataToExport:
        "Für den Export wird mindestens ein Raum oder ein Grundriss benötigt.",
      wallTop: "Oben",
      wallRight: "Rechts",
      wallBottom: "Unten",
      wallLeft: "Links",
      addDoor: "Tür",
      addWindow: "Fenster",
      addHeater: "Heizkörper",
      chimneyAt: "Kamin an Ecke:",
      cornerTl: "OL",
      cornerTr: "OR",
      cornerBr: "UR",
      cornerBl: "UL",
      selectedRooms: "Ausgewählter Raum",
      snapHint:
        "Ziehen Sie Räume zueinander, um sie mit einer Wandstärke dazwischen einzurasten. Räume mit gegenüberliegenden Türen rasten so ein, dass die Türen fluchten.",
      noFixtures: "Noch keine Tür, kein Fenster und kein Heizkörper an dieser Wand.",
      fixtureDoor: "Tür",
      fixtureWindow: "Fenster",
      fixtureHeater: "Heizkörper",
      fixtureChimney: "Kamin",
      offset: "Abstand (cm)",
      board: "Fensterbrett (cm)",
    },
  },
};

// Current language state
let currentLanguage = "en";

// Translation function with string interpolation support
function t(path, params = {}) {
  const keys = path.split(".");
  let value = TRANSLATIONS[currentLanguage];

  for (const key of keys) {
    value = value?.[key];
    if (value === undefined) {
      console.warn(`Translation missing for: ${path} (${currentLanguage})`);
      // Fallback to English
      value = TRANSLATIONS.en;
      for (const k of keys) {
        value = value?.[k];
      }
      if (value === undefined) {
        return path;
      }
    }
  }

  // Handle string interpolation
  if (typeof value === "string" && Object.keys(params).length > 0) {
    return value.replace(/\{(\w+)\}/g, (match, key) => params[key] || match);
  }

  return value;
}

// Initialize language from browser/localStorage
function initLanguage() {
  // Check localStorage first
  const savedLang = localStorage.getItem("roomer-language");
  if (savedLang && TRANSLATIONS[savedLang]) {
    currentLanguage = savedLang;
    console.log(`Language initialized from localStorage: ${currentLanguage}`);
    return;
  }

  // Detect from browser
  const browserLang = navigator.language.split("-")[0]; // 'en-US' → 'en'
  if (TRANSLATIONS[browserLang]) {
    currentLanguage = browserLang;
    console.log(`Language detected from browser: ${currentLanguage}`);
  } else {
    currentLanguage = "en"; // Default fallback
    console.log(`Language defaulted to: ${currentLanguage}`);
  }

  localStorage.setItem("roomer-language", currentLanguage);
}

// Change language
function setLanguage(lang) {
  if (!TRANSLATIONS[lang]) {
    console.error(`Language not supported: ${lang}`);
    return;
  }

  currentLanguage = lang;
  localStorage.setItem("roomer-language", lang);
  console.log(`Language changed to: ${currentLanguage}`);

  // Update the language selector if it exists
  const selector = document.getElementById("languageSelector");
  if (selector) {
    selector.value = lang;
  }

  // Update all UI text
  if (typeof updateAllUIText === "function") {
    updateAllUIText();
  }
}

// Get current locale for date formatting
function getCurrentLocale() {
  return currentLanguage === "de" ? "de-DE" : "en-US";
}

console.log("i18n.js loaded successfully");
