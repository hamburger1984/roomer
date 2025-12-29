// ========== CONFIGURATION CONSTANTS ==========

// UI and interaction constants
const MAX_UNDO_STACK_SIZE = 50;
const ROTATION_HANDLE_DISTANCE = 30; // Distance from furniture edge to rotation handle
const ROTATION_HANDLE_RADIUS = 8;
const ROTATION_SNAP_ANGLE = 45; // Degrees for rotation snapping
const FURNITURE_CORNER_RADIUS = 1.5; // Border radius for furniture shapes
const CROP_MIN_SIZE = 10; // Minimum crop area size in pixels
const SELECTION_CORNER_SIZE = 8; // Size of selection corner markers

// Furniture library with default dimensions in cm
const FURNITURE_LIBRARY = [
  // Seating
  {
    id: "chair",
    name: "Stuhl",
    category: "seating",
    width: 45,
    depth: 50,
    color: "#8B4513",
  },
  {
    id: "armchair",
    name: "Sessel",
    category: "seating",
    width: 80,
    depth: 85,
    color: "#A0522D",
  },
  {
    id: "sofa2",
    name: "Sofa (2-Sitzer)",
    category: "seating",
    width: 150,
    depth: 85,
    color: "#CD853F",
  },
  {
    id: "sofa3",
    name: "Sofa (3-Sitzer)",
    category: "seating",
    width: 200,
    depth: 85,
    color: "#D2691E",
  },
  {
    id: "sleeperSofa",
    name: "Schlafsofa",
    category: "seating",
    width: 180,
    depth: 90,
    expandedWidth: 180,
    expandedDepth: 200,
    color: "#C19A6B",
    shape: "expandable",
  },
  {
    id: "cornerBench",
    name: "Eckbank",
    category: "seating",
    width: 150,
    depth: 150,
    seatDepth: 50,
    color: "#B8860B",
    shape: "L",
  },

  // Tables
  {
    id: "coffeeTable",
    name: "Couchtisch",
    category: "tables",
    width: 100,
    depth: 60,
    color: "#654321",
  },
  {
    id: "diningTable4",
    name: "Esstisch (4 Personen)",
    category: "tables",
    width: 120,
    depth: 80,
    color: "#8B7355",
  },
  {
    id: "diningTable6",
    name: "Esstisch (6 Personen)",
    category: "tables",
    width: 160,
    depth: 90,
    color: "#A0826D",
  },
  {
    id: "desk",
    name: "Schreibtisch",
    category: "tables",
    width: 140,
    depth: 70,
    color: "#8B7D6B",
  },
  {
    id: "roundTable",
    name: "Runder Tisch",
    category: "tables",
    width: 120,
    depth: 120,
    color: "#9B8B7A",
    shape: "circle",
  },

  // Storage
  {
    id: "wardrobe",
    name: "Kleiderschrank",
    category: "storage",
    width: 200,
    depth: 60,
    color: "#556B2F",
  },
  {
    id: "sideboard",
    name: "Sideboard",
    category: "storage",
    width: 160,
    depth: 45,
    color: "#6B8E23",
  },
  {
    id: "bookshelf",
    name: "Bücherregal",
    category: "storage",
    width: 80,
    depth: 30,
    color: "#808000",
  },
  {
    id: "tvStand",
    name: "TV-Schrank",
    category: "storage",
    width: 150,
    depth: 45,
    color: "#8B8B7A",
  },

  // Beds
  {
    id: "singleBed",
    name: "Einzelbett",
    category: "beds",
    width: 100,
    depth: 200,
    color: "#4682B4",
  },
  {
    id: "doubleBed",
    name: "Doppelbett",
    category: "beds",
    width: 160,
    depth: 200,
    color: "#4169E1",
  },
  {
    id: "queenBed",
    name: "Queen-Size-Bett",
    category: "beds",
    width: 180,
    depth: 200,
    color: "#1E90FF",
  },

  // Appliances
  {
    id: "washingMachine",
    name: "Waschmaschine",
    category: "appliances",
    width: 60,
    depth: 60,
    color: "#E8E8E8",
  },
  {
    id: "dryer",
    name: "Trockner",
    category: "appliances",
    width: 60,
    depth: 60,
    color: "#D3D3D3",
  },
  {
    id: "dishwasher",
    name: "Geschirrspüler",
    category: "appliances",
    width: 60,
    depth: 60,
    color: "#C0C0C0",
  },
  {
    id: "fridge",
    name: "Kühlschrank",
    category: "appliances",
    width: 60,
    depth: 60,
    color: "#F0F0F0",
  },
  {
    id: "fridgeLarge",
    name: "Kühlschrank (groß)",
    category: "appliances",
    width: 70,
    depth: 70,
    color: "#E0E0E0",
  },
  {
    id: "stove",
    name: "Herd",
    category: "appliances",
    width: 60,
    depth: 60,
    color: "#505050",
  },
  {
    id: "oven",
    name: "Backofen",
    category: "appliances",
    width: 60,
    depth: 60,
    color: "#404040",
  },

  // Decoration
  {
    id: "plantSmall",
    name: "Pflanze (klein)",
    category: "decoration",
    width: 30,
    depth: 30,
    color: "#228B22",
  },
  {
    id: "plantMedium",
    name: "Pflanze (mittel)",
    category: "decoration",
    width: 40,
    depth: 40,
    color: "#32CD32",
  },
  {
    id: "plantLarge",
    name: "Pflanze (groß)",
    category: "decoration",
    width: 50,
    depth: 50,
    color: "#3CB371",
  },
  {
    id: "tv",
    name: "TV",
    category: "decoration",
    width: 140,
    depth: 10,
    color: "#1C1C1C",
  },
  {
    id: "lampFloor",
    name: "Stehlampe",
    category: "decoration",
    width: 30,
    depth: 30,
    color: "#DAA520",
  },
  {
    id: "lampTable",
    name: "Tischlampe",
    category: "decoration",
    width: 20,
    depth: 20,
    color: "#FFD700",
  },
  {
    id: "kitchenWallCabinet",
    name: "Hängeschrank",
    category: "storage",
    width: 60,
    depth: 35,
    color: "#DCDCDC",
  },
  {
    id: "kitchenBaseCabinet",
    name: "Unterschrank",
    category: "storage",
    width: 60,
    depth: 60,
    color: "#C0C0C0",
  },
  {
    id: "rugSmall",
    name: "Teppich (klein)",
    category: "decoration",
    width: 120,
    depth: 180,
    color: "#8B4513",
  },
  {
    id: "rugMedium",
    name: "Teppich (mittel)",
    category: "decoration",
    width: 160,
    depth: 230,
    color: "#A0522D",
  },
  {
    id: "rugLarge",
    name: "Teppich (groß)",
    category: "decoration",
    width: 200,
    depth: 300,
    color: "#CD853F",
  },
];

// Application state
const state = {
  floorPlan: null,
  floorPlanImage: null,
  pixelsPerMeter: null, // Pixels per meter - calculated from calibration
  zoom: 1,
  pan: { x: 0, y: 0 },
  furniture: [],
  selectedFurniture: null,
  isDragging: false,
  isPanning: false,
  isRotating: false,
  dragStart: { x: 0, y: 0 },
  panStart: { x: 0, y: 0 },
  currentCategory: "all",
  calibrationMode: false,
  calibrationStart: null,
  calibrationEnd: null,
  projectName: "Unbenanntes Projekt",
  sidebarPinned: true,
  // Snapshot history management (graph-based)
  snapshotGraph: [], // Array of snapshot nodes
  currentSnapshotId: null, // ID of current snapshot
  hasUnsavedChanges: false,
  // Undo/Redo management
  undoStack: [], // Stack of previous states
  redoStack: [], // Stack of undone states
  propertyEditInProgress: false, // Track if property is being edited
  // Crop management
  cropMode: false,
  cropStart: null,
  cropEnd: null,
};

// Canvas and context
const canvas = document.getElementById("mainCanvas");
const ctx = canvas.getContext("2d");

// Initialize PDF.js
if (typeof pdfjsLib !== "undefined") {
  pdfjsLib.GlobalWorkerOptions.workerSrc =
    "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";
}

// ========== SNAPSHOT MANAGEMENT ==========

// Generate unique ID for snapshots
function generateSnapshotId() {
  return (
    "snapshot_" + Date.now() + "_" + Math.random().toString(36).substr(2, 9)
  );
}

// Find snapshot node by ID
function findSnapshotById(id) {
  return state.snapshotGraph.find((s) => s.id === id);
}

// Get all child snapshots of a given snapshot
function getChildSnapshots(snapshotId) {
  return state.snapshotGraph.filter((s) => s.parentId === snapshotId);
}

// Create a snapshot of the current state
function createSnapshot(shouldFork = false) {
  const snapshotId = generateSnapshotId();
  const snapshot = {
    id: snapshotId,
    parentId: state.currentSnapshotId,
    timestamp: Date.now(),
    furniture: JSON.parse(JSON.stringify(state.furniture)),
    zoom: state.zoom,
    pan: { ...state.pan },
    pixelsPerMeter: state.pixelsPerMeter,
    floorPlan: state.floorPlan,
  };

  state.snapshotGraph.push(snapshot);
  state.currentSnapshotId = snapshotId;
  state.hasUnsavedChanges = false;
  updateSnapshotUI();
  renderSnapshotGraph();
  saveProject();

  return snapshot;
}

// Revert to a specific snapshot by ID
function revertToSnapshot(snapshotId) {
  const snapshot = findSnapshotById(snapshotId);
  if (!snapshot) return;

  // Restore state from snapshot
  state.furniture = JSON.parse(JSON.stringify(snapshot.furniture));
  state.zoom = snapshot.zoom;
  state.pan = { ...snapshot.pan };
  state.pixelsPerMeter = snapshot.pixelsPerMeter;
  state.floorPlan = snapshot.floorPlan;

  // Reload floor plan image if needed
  if (snapshot.floorPlan) {
    const img = new Image();
    img.onload = () => {
      state.floorPlanImage = img;
      resizeCanvas();
      fitToView();
    };
    img.src = snapshot.floorPlan;
  }

  state.currentSnapshotId = snapshotId;
  state.selectedFurniture = null;
  updateSelectedFurniturePanel();
  updateSnapshotUI();
  renderSnapshotGraph();
  render();
}

// Check if we need to fork or abandon future snapshots
function checkForFork() {
  if (!state.currentSnapshotId) return false;

  const children = getChildSnapshots(state.currentSnapshotId);
  if (children.length > 0) {
    // We're editing after reverting - there are already children
    const message =
      `Sie haben nach dem Zurücksetzen zu einem früheren Snapshot Änderungen vorgenommen.\n\n` +
      `Es gibt ${children.length} neuere Snapshot(s).\n\n` +
      `Möchten Sie:\n` +
      `- "Abbrechen" drücken, um einen neuen Branch zu erstellen (Fork)\n` +
      `- "OK" drücken, um die neueren Snapshots zu verwerfen`;

    const abandon = confirm(message);

    if (abandon) {
      // Abandon future snapshots (remove all descendants)
      removeDescendants(state.currentSnapshotId);
    }
    // If not abandoning, we'll create a fork (new branch alongside existing children)

    return true;
  }
  return false;
}

// Remove all descendant snapshots recursively
function removeDescendants(snapshotId) {
  const children = getChildSnapshots(snapshotId);
  children.forEach((child) => {
    removeDescendants(child.id);
    const index = state.snapshotGraph.findIndex((s) => s.id === child.id);
    if (index >= 0) {
      state.snapshotGraph.splice(index, 1);
    }
  });
}

// Delete a snapshot and its descendants
function deleteSnapshot(snapshotId) {
  const snapshot = findSnapshotById(snapshotId);
  if (!snapshot) return;

  // Confirm deletion
  const hasChildren = getChildSnapshots(snapshotId).length > 0;
  const message = hasChildren
    ? "Diesen Snapshot und alle abhängigen Snapshots löschen?"
    : "Diesen Snapshot löschen?";

  if (!confirm(message)) return;

  // If deleting current snapshot, navigate to parent first
  if (state.currentSnapshotId === snapshotId) {
    if (snapshot.parentId) {
      revertToSnapshot(snapshot.parentId);
    } else {
      // Deleting root - clear current state
      state.currentSnapshotId = null;
    }
  }

  // Remove the snapshot and all its descendants
  removeDescendants(snapshotId);
  const index = state.snapshotGraph.findIndex((s) => s.id === snapshotId);
  if (index >= 0) {
    state.snapshotGraph.splice(index, 1);
  }

  // Update UI and save
  renderSnapshotGraph();
  saveProject();
}

// Update snapshot UI (simplified - no more navigation buttons)
function updateSnapshotUI() {
  // This function is kept for compatibility but navigation is now in the graph
}

// Mark that changes have been made (to trigger fork check)
function markChanges() {
  state.hasUnsavedChanges = true;
  renderSnapshotGraph(); // Update graph to show unsaved changes indicator
}

// Render snapshot graph visualization
function renderSnapshotGraph() {
  const graphContainer = document.getElementById("snapshotGraphHeader");
  if (!graphContainer) return;

  // Clear if no snapshots
  if (state.snapshotGraph.length === 0) {
    graphContainer.innerHTML = "";
    return;
  }

  // Build graph layout using level-based positioning
  const layout = buildGraphLayout();

  // Create HTML structure - simplified for header
  let html = '<div class="snapshot-graph-container">';

  // Render each column (level)
  for (let level = 0; level < layout.levels.length; level++) {
    const nodesAtLevel = layout.levels[level];

    html += '<div class="snapshot-column">';

    // Render nodes at this level
    nodesAtLevel.forEach((node, rowIndex) => {
      const isCurrent = node.id === state.currentSnapshotId;
      const isRoot = !node.parentId;
      const classes = ["snapshot-node"];
      if (isCurrent) classes.push("current");
      if (isRoot) classes.push("root");

      const date = new Date(node.timestamp);
      const timeStr = date.toLocaleTimeString("de-DE", {
        hour: "2-digit",
        minute: "2-digit",
      });
      const dateStr = date.toLocaleDateString("de-DE");

      html += `<div class="${classes.join(" ")}" data-snapshot-id="${node.id}">`;
      html += `<div class="snapshot-tooltip">${dateStr} ${timeStr}</div>`;
      html += `<div class="snapshot-delete-btn" data-delete-id="${node.id}">×</div>`;
      html += "</div>";
    });

    html += "</div>";

    // Add connector between levels (prominent line)
    if (level < layout.levels.length - 1) {
      html +=
        '<div style="width: 12px; height: 3px; background: rgba(52, 152, 219, 0.8); flex-shrink: 0; align-self: center; border-radius: 2px;"></div>';
    }
  }

  // Add unsaved changes indicator if there are unsaved changes
  if (state.hasUnsavedChanges && state.currentSnapshotId) {
    html +=
      '<div style="width: 12px; height: 3px; background: rgba(241, 196, 15, 0.8); border-style: dashed; border-width: 0 0 2px 0; border-color: rgba(241, 196, 15, 0.9); flex-shrink: 0; align-self: center;"></div>';
    html +=
      '<div class="snapshot-node unsaved-hint" title="Nicht gespeicherte Änderungen - Snapshot erstellen">?</div>';
  }

  html += "</div>";
  graphContainer.innerHTML = html;

  // Add click event listeners to nodes
  const nodes = graphContainer.querySelectorAll(".snapshot-node");
  nodes.forEach((node) => {
    const snapshotId = node.getAttribute("data-snapshot-id");
    node.addEventListener("click", (e) => {
      // Don't navigate if clicking the delete button
      if (e.target.classList.contains("snapshot-delete-btn")) {
        return;
      }
      revertToSnapshot(snapshotId);
    });
  });

  // Add click event listeners to delete buttons
  const deleteButtons = graphContainer.querySelectorAll(".snapshot-delete-btn");
  deleteButtons.forEach((btn) => {
    const snapshotId = btn.getAttribute("data-delete-id");
    btn.addEventListener("click", (e) => {
      e.stopPropagation(); // Prevent node click
      deleteSnapshot(snapshotId);
    });
  });
}

// Build graph layout (organize nodes by level from left to right)
function buildGraphLayout() {
  const layout = { levels: [] };

  // Find root nodes (nodes without parents)
  const rootNodes = state.snapshotGraph.filter((s) => !s.parentId);

  if (rootNodes.length === 0 && state.snapshotGraph.length > 0) {
    // Fallback: if no root found, treat first as root
    layout.levels.push([state.snapshotGraph[0]]);
  } else {
    layout.levels.push(rootNodes);
  }

  // Build subsequent levels using BFS
  let currentLevel = 0;
  const visited = new Set(layout.levels[0].map((n) => n.id));

  while (currentLevel < layout.levels.length) {
    const nextLevel = [];

    layout.levels[currentLevel].forEach((node) => {
      const children = getChildSnapshots(node.id);
      children.forEach((child) => {
        if (!visited.has(child.id)) {
          nextLevel.push(child);
          visited.add(child.id);
        }
      });
    });

    if (nextLevel.length > 0) {
      // Sort by timestamp within level
      nextLevel.sort((a, b) => a.timestamp - b.timestamp);
      layout.levels.push(nextLevel);
    }

    currentLevel++;
  }

  return layout;
}

// ========== UNDO/REDO MANAGEMENT ==========

// Push current state to undo stack (before making changes)
function pushUndoState() {
  // Create a snapshot of the current furniture state
  const currentState = {
    furniture: JSON.parse(JSON.stringify(state.furniture)),
    selectedFurniture: state.selectedFurniture
      ? state.furniture.indexOf(state.selectedFurniture)
      : null,
  };

  state.undoStack.push(currentState);

  // Limit undo stack size
  if (state.undoStack.length > MAX_UNDO_STACK_SIZE) {
    state.undoStack.shift();
  }

  // Clear redo stack when a new action is performed
  state.redoStack = [];

  updateUndoRedoButtons();
}

// Undo the last action
function undo() {
  if (state.undoStack.length === 0) return;

  // Push current state to redo stack
  const currentState = {
    furniture: JSON.parse(JSON.stringify(state.furniture)),
    selectedFurniture: state.selectedFurniture
      ? state.furniture.indexOf(state.selectedFurniture)
      : null,
  };
  state.redoStack.push(currentState);

  // Pop state from undo stack and restore it
  const previousState = state.undoStack.pop();
  state.furniture = JSON.parse(JSON.stringify(previousState.furniture));

  // Restore selected furniture
  if (
    previousState.selectedFurniture !== null &&
    previousState.selectedFurniture < state.furniture.length
  ) {
    state.selectedFurniture = state.furniture[previousState.selectedFurniture];
  } else {
    state.selectedFurniture = null;
  }

  updateSelectedFurniturePanel();
  updateUndoRedoButtons();
  markChanges();
  render();
  saveProject();
}

// Redo the last undone action
function redo() {
  if (state.redoStack.length === 0) return;

  // Push current state to undo stack
  const currentState = {
    furniture: JSON.parse(JSON.stringify(state.furniture)),
    selectedFurniture: state.selectedFurniture
      ? state.furniture.indexOf(state.selectedFurniture)
      : null,
  };
  state.undoStack.push(currentState);

  // Pop state from redo stack and restore it
  const nextState = state.redoStack.pop();
  state.furniture = JSON.parse(JSON.stringify(nextState.furniture));

  // Restore selected furniture
  if (
    nextState.selectedFurniture !== null &&
    nextState.selectedFurniture < state.furniture.length
  ) {
    state.selectedFurniture = state.furniture[nextState.selectedFurniture];
  } else {
    state.selectedFurniture = null;
  }

  updateSelectedFurniturePanel();
  updateUndoRedoButtons();
  markChanges();
  render();
  saveProject();
}

// Update undo/redo button states
function updateUndoRedoButtons() {
  const undoBtn = document.getElementById("undoBtn");
  const redoBtn = document.getElementById("redoBtn");

  if (undoBtn) {
    undoBtn.disabled = state.undoStack.length === 0;
  }
  if (redoBtn) {
    redoBtn.disabled = state.redoStack.length === 0;
  }
}

// Show/hide upload overlay
function showUploadOverlay() {
  document.getElementById("uploadOverlay").style.display = "flex";
  renderProjectList();
}

function hideUploadOverlay() {
  document.getElementById("uploadOverlay").style.display = "none";
}

// Render project list in upload overlay
function renderProjectList() {
  const projects = getSavedProjects();
  const listEl = document.getElementById("projectList");

  if (projects.length === 0) {
    listEl.innerHTML =
      '<p style="color: #7f8c8d; text-align: center">Keine gespeicherten Projekte</p>';
    return;
  }

  listEl.innerHTML = projects
    .map((project) => {
      const date = new Date(project.lastModified);
      const dateStr = date.toLocaleString("de-DE", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });

      return `
      <div class="project-item" data-project-name="${project.name}">
        <div class="project-item-info">
          <div class="project-item-name">${project.name}</div>
          <div class="project-item-date">${dateStr}</div>
        </div>
        <button class="project-item-delete" data-project-name="${project.name}" onclick="event.stopPropagation()">
          Löschen
        </button>
      </div>
    `;
    })
    .join("");

  // Add click handlers
  listEl.querySelectorAll(".project-item").forEach((el) => {
    el.addEventListener("click", (e) => {
      if (!e.target.classList.contains("project-item-delete")) {
        loadProjectByName(el.dataset.projectName);
      }
    });
  });

  listEl.querySelectorAll(".project-item-delete").forEach((btn) => {
    btn.addEventListener("click", () => {
      deleteProject(btn.dataset.projectName);
    });
  });
}

// Delete a project
function deleteProject(projectName) {
  if (!confirm(`Projekt "${projectName}" wirklich löschen?`)) return;

  const projects = getSavedProjects();
  const filtered = projects.filter((p) => p.name !== projectName);
  localStorage.setItem("roomer-projects", JSON.stringify(filtered));
  renderProjectList();
}

// Update scale display in toolbar
function updateScaleDisplay() {
  const display = document.getElementById("scaleDisplay");
  if (state.pixelsPerMeter) {
    display.textContent = `${state.pixelsPerMeter.toFixed(1)} px/m`;
  } else {
    display.textContent = "Kein Maßstab";
  }
}

// Initialize application
function init() {
  setupEventListeners();
  renderFurnitureLibrary();
  loadProject();
  resizeCanvas();
  render();
  updateScaleDisplay();
  updateSnapshotUI();
  renderSnapshotGraph();
  updateUndoRedoButtons();

  // Show upload overlay if no floor plan loaded
  if (!state.floorPlanImage) {
    showUploadOverlay();
  }
}

// Setup all event listeners
function setupEventListeners() {
  // File upload
  document
    .getElementById("floorPlanUpload")
    .addEventListener("change", handleFloorPlanUpload);
  document.getElementById("uploadBtn").addEventListener("click", () => {
    document.getElementById("floorPlanUpload").click();
  });

  // Calibration tool
  document
    .getElementById("calibrateBtnSmall")
    .addEventListener("click", startCalibration);
  document
    .getElementById("applyCalibrationBtn")
    .addEventListener("click", applyCalibration);
  document
    .getElementById("cancelCalibrationBtn")
    .addEventListener("click", cancelCalibration);

  // Crop tool
  document.getElementById("cropBtn").addEventListener("click", startCrop);
  document.getElementById("applyCropBtn").addEventListener("click", applyCrop);
  document
    .getElementById("cancelCropBtn")
    .addEventListener("click", cancelCrop);

  // Undo/Redo controls
  document.getElementById("undoBtn").addEventListener("click", undo);
  document.getElementById("redoBtn").addEventListener("click", redo);

  // Zoom controls
  document
    .getElementById("zoomIn")
    .addEventListener("click", () => adjustZoom(0.1));
  document
    .getElementById("zoomOut")
    .addEventListener("click", () => adjustZoom(-0.1));
  document.getElementById("resetView").addEventListener("click", resetView);

  // Category buttons
  document.querySelectorAll(".category-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      document
        .querySelectorAll(".category-btn")
        .forEach((b) => b.classList.remove("active"));
      e.target.classList.add("active");
      state.currentCategory = e.target.dataset.category;
      renderFurnitureLibrary();
    });
  });

  // Furniture properties
  const propertyInputs = [
    "furnitureName",
    "furnitureWidth",
    "furnitureDepth",
    "furnitureSeatDepth",
    "furnitureExpandedWidth",
    "furnitureExpandedDepth",
    "furnitureRotation",
  ];

  propertyInputs.forEach((id) => {
    const input = document.getElementById(id);
    input.addEventListener("focus", () => {
      // Push undo state when starting to edit a property
      if (!state.propertyEditInProgress) {
        pushUndoState();
        state.propertyEditInProgress = true;
      }
    });
    input.addEventListener("blur", () => {
      // Reset flag when done editing
      state.propertyEditInProgress = false;
    });
    input.addEventListener("input", handleFurniturePropertyChange);
  });

  document
    .getElementById("deleteFurniture")
    .addEventListener("click", deleteFurniture);

  // Project controls
  document
    .getElementById("closeProject")
    .addEventListener("click", closeProject);
  document
    .getElementById("renameProject")
    .addEventListener("click", renameProject);
  document
    .getElementById("exportProject")
    .addEventListener("click", exportProject);
  document.getElementById("importProject").addEventListener("click", () => {
    document.getElementById("projectImport").click();
  });
  document
    .getElementById("projectImport")
    .addEventListener("change", handleProjectImport);

  // Snapshot controls
  document.getElementById("createSnapshot").addEventListener("click", () => {
    if (checkForFork()) {
      // After handling fork, create the snapshot
      createSnapshot();
    } else {
      createSnapshot();
    }
  });

  // Sidebar controls
  const sidebar = document.getElementById("sidebar");
  const sidebarPinBtn = document.getElementById("sidebarPinBtn");
  const sidebarHoverTrigger = document.querySelector(".sidebar-hover-trigger");

  sidebarPinBtn.addEventListener("click", toggleSidebarPin);

  sidebarHoverTrigger.addEventListener("mouseenter", () => {
    if (!state.sidebarPinned) {
      sidebar.classList.remove("unpinned");
    }
  });

  sidebar.addEventListener("mouseleave", () => {
    if (!state.sidebarPinned) {
      sidebar.classList.add("unpinned");
    }
  });

  // Keyboard shortcuts
  document.addEventListener("keydown", handleKeyDown);

  // Canvas interactions
  canvas.addEventListener("mousedown", handleCanvasMouseDown);
  canvas.addEventListener("mousemove", handleCanvasMouseMove);
  canvas.addEventListener("mouseup", handleCanvasMouseUp);
  canvas.addEventListener("wheel", handleCanvasWheel, { passive: false });

  // Window resize
  window.addEventListener("resize", resizeCanvas);
}

// Start calibration mode
function startCalibration() {
  state.calibrationMode = true;
  state.calibrationStart = null;
  state.calibrationEnd = null;

  document.getElementById("calibrationPanel").style.display = "block";
  document.getElementById("calibrationMeasure").style.display = "none";

  canvas.style.cursor = "crosshair";
  render();
}

// Cancel calibration
function cancelCalibration() {
  state.calibrationMode = false;
  state.calibrationStart = null;
  state.calibrationEnd = null;

  document.getElementById("calibrationPanel").style.display = "none";
  canvas.style.cursor = "grab";
  render();
}

// Apply calibration
function applyCalibration() {
  const length = parseFloat(document.getElementById("calibrationLength").value);
  const unit = document.getElementById("calibrationUnit").value;

  if (!length || length <= 0) {
    alert("Bitte geben Sie eine gültige Länge ein.");
    return;
  }

  if (!state.calibrationStart || !state.calibrationEnd) {
    alert("Bitte zeichnen Sie zuerst eine Linie im Grundriss.");
    return;
  }

  // Calculate pixel distance
  const dx = state.calibrationEnd.x - state.calibrationStart.x;
  const dy = state.calibrationEnd.y - state.calibrationStart.y;
  const pixelDistance = Math.sqrt(dx * dx + dy * dy);

  // Convert length to meters
  const lengthInMeters = unit === "cm" ? length / 100 : length;

  // Calculate pixels per meter
  state.pixelsPerMeter = pixelDistance / lengthInMeters;

  // Update toolbar scale display
  updateScaleDisplay();

  // Exit calibration mode
  cancelCalibration();
  saveProject();
}

// ========== CROP MANAGEMENT ==========

// Start crop mode
function startCrop() {
  if (!state.floorPlanImage) {
    alert("Bitte laden Sie zuerst einen Grundriss.");
    return;
  }

  state.cropMode = true;
  state.cropStart = null;
  state.cropEnd = null;

  document.getElementById("cropPanel").style.display = "block";
  document.getElementById("cropControls").style.display = "none";

  canvas.style.cursor = "crosshair";
  render();
}

// Cancel crop
function cancelCrop() {
  state.cropMode = false;
  state.cropStart = null;
  state.cropEnd = null;

  document.getElementById("cropPanel").style.display = "none";
  canvas.style.cursor = "grab";
  render();
}

// Apply crop
function applyCrop() {
  if (!state.cropStart || !state.cropEnd) {
    alert("Bitte wählen Sie einen Bereich aus.");
    return;
  }

  // Calculate crop rectangle in image coordinates
  const x1 = Math.min(state.cropStart.x, state.cropEnd.x);
  const y1 = Math.min(state.cropStart.y, state.cropEnd.y);
  const x2 = Math.max(state.cropStart.x, state.cropEnd.x);
  const y2 = Math.max(state.cropStart.y, state.cropEnd.y);

  const width = x2 - x1;
  const height = y2 - y1;

  if (width < CROP_MIN_SIZE || height < CROP_MIN_SIZE) {
    alert("Der ausgewählte Bereich ist zu klein.");
    return;
  }

  // Push undo state before cropping
  pushUndoState();

  // Create temporary canvas for cropping
  const tempCanvas = document.createElement("canvas");
  tempCanvas.width = width;
  tempCanvas.height = height;
  const tempCtx = tempCanvas.getContext("2d");

  // Draw cropped portion
  tempCtx.drawImage(
    state.floorPlanImage,
    x1,
    y1,
    width,
    height, // Source rectangle
    0,
    0,
    width,
    height, // Destination rectangle
  );

  // Convert to data URL
  const croppedDataUrl = tempCanvas.toDataURL("image/png");

  // Create new image from cropped data
  const img = new Image();
  img.onload = () => {
    // Update state
    state.floorPlanImage = img;
    state.floorPlan = croppedDataUrl;

    // Adjust furniture positions (translate by crop offset)
    state.furniture.forEach((furniture) => {
      furniture.x -= x1;
      furniture.y -= y1;
    });

    // Adjust calibration points if they exist
    if (state.calibrationStart) {
      state.calibrationStart.x -= x1;
      state.calibrationStart.y -= y1;
    }
    if (state.calibrationEnd) {
      state.calibrationEnd.x -= x1;
      state.calibrationEnd.y -= y1;
    }

    // Exit crop mode and save
    cancelCrop();
    resizeCanvas();
    fitToView();
    markChanges();
    saveProject();
  };
  img.src = croppedDataUrl;
}

// Extract scale from PDF text
async function extractScaleFromPDF(pdfDoc) {
  try {
    // Try to extract text from all pages (some PDFs have scale info on different pages)
    let allText = "";
    for (let pageNum = 1; pageNum <= Math.min(pdfDoc.numPages, 3); pageNum++) {
      const page = await pdfDoc.getPage(pageNum);
      const textContent = await page.getTextContent();

      // Join text items with both space and newline to preserve context
      const pageText = textContent.items.map((item) => item.str).join(" ");
      allText += pageText + "\n";
    }

    console.log("Extracted PDF text:", allText);
    console.log(
      "Text items count:",
      allText.split(" ").filter((s) => s.trim()).length,
    );

    // Enhanced scale patterns - try to match various formats
    const scalePatterns = [
      // Standard formats
      /(?:^|\s|M\.?\s*)1\s*:\s*(\d+)(?:\s|$)/i, // "1:100", "M 1:100", "M. 1:100"
      /(?:Maßstab|Ma(?:ß|ss)stab)\s*[:\-=]?\s*1\s*:\s*(\d+)/i, // "Maßstab 1:100", "Maßstab: 1:100"
      /(?:Scale|Echelle)\s*[:\-=]?\s*1\s*:\s*(\d+)/i, // "Scale 1:100"
      // Fractional formats
      /1\s*\/\s*(\d+)/, // "1/100"
      // With units
      /1\s*:\s*(\d+)\s*(?:cm|m)/i, // "1:100cm"
      // Just a ratio anywhere in text
      /(\d+)\s*:\s*1(?:\s|$)/i, // Reverse format "100:1"
    ];

    for (const pattern of scalePatterns) {
      const match = allText.match(pattern);
      if (match) {
        const scaleRatio = parseInt(match[1]);

        // Validate reasonable scale (typical architectural scales)
        if (scaleRatio >= 10 && scaleRatio <= 500) {
          console.log(`Scale detected: 1:${scaleRatio}`);
          return true;
        }
      }
    }

    console.log("No scale information found in PDF text");
    return false;
  } catch (error) {
    console.error("Error extracting scale from PDF:", error);
    // Non-critical error - PDF text extraction is optional
    return false;
  }
}

// Handle floor plan upload (PDF or image)
async function handleFloorPlanUpload(e) {
  const file = e.target.files[0];
  if (!file) return;

  // Get project name from input
  const projectNameInput = document.getElementById("projectNameInput");
  if (projectNameInput && projectNameInput.value.trim()) {
    state.projectName = projectNameInput.value.trim();
    updateProjectNameDisplay();
  }

  if (file.type === "application/pdf") {
    try {
      const arrayBuffer = await file.arrayBuffer();
      const pdfDoc = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;

      // Try to extract scale from PDF (but measurements in images usually need calibration)
      await extractScaleFromPDF(pdfDoc);

      // Render first page to canvas
      const page = await pdfDoc.getPage(1);
      const viewport = page.getViewport({ scale: 2.0 });

      canvas.width = viewport.width;
      canvas.height = viewport.height;

      const renderContext = {
        canvasContext: ctx,
        viewport: viewport,
      };

      await page.render(renderContext).promise;

      // Convert canvas to image for easier manipulation
      const dataUrl = canvas.toDataURL();
      const img = new Image();
      img.onload = () => {
        state.floorPlanImage = img;
        state.floorPlan = dataUrl;
        hideUploadOverlay();
        resizeCanvas();
        fitToView();
        saveProject();
      };
      img.onerror = () => {
        console.error("Error loading PDF-rendered image");
        alert(
          "Fehler beim Laden des PDF-Grundrisses.\n\n" +
            "Das konvertierte Bild konnte nicht geladen werden.",
        );
      };
      img.src = dataUrl;
    } catch (error) {
      console.error("PDF processing error:", error);
      let errorMessage = "Fehler beim Verarbeiten des PDF.\n\n";

      if (error.message.includes("Invalid PDF")) {
        errorMessage += "Die Datei scheint keine gültige PDF zu sein.";
      } else if (error.message.includes("password")) {
        errorMessage += "Die PDF ist passwortgeschützt.";
      } else {
        errorMessage += "Details: " + error.message;
      }

      alert(
        errorMessage + "\n\nBitte versuchen Sie es mit einer anderen Datei.",
      );
    }
    return;
  }

  // Handle image upload
  const reader = new FileReader();
  reader.onload = (event) => {
    const img = new Image();
    img.onload = () => {
      state.floorPlanImage = img;
      hideUploadOverlay();
      resizeCanvas();
      fitToView();
      saveProject();
    };
    img.onerror = () => {
      console.error("Error loading uploaded image");
      alert(
        "Fehler beim Laden des Bildes.\n\n" +
          "Die Datei ist möglicherweise beschädigt oder wird nicht unterstützt.\n" +
          "Unterstützte Formate: PNG, JPG, GIF, WebP",
      );
    };
    img.src = event.target.result;
    state.floorPlan = event.target.result;
  };
  reader.onerror = () => {
    console.error("FileReader error");
    alert("Fehler beim Lesen der Datei.\n\nBitte versuchen Sie es erneut.");
  };
  reader.readAsDataURL(file);
}

// Adjust zoom
function adjustZoom(delta) {
  const wrapper = document.getElementById("canvasWrapper");
  const oldZoom = state.zoom;
  const newZoom = Math.max(0.1, Math.min(5, state.zoom + delta));

  // Calculate center of viewport in canvas coordinates
  const centerX = wrapper.clientWidth / 2;
  const centerY = wrapper.clientHeight / 2;

  // Convert to canvas coordinates before zoom
  const canvasX = (centerX - state.pan.x) / oldZoom;
  const canvasY = (centerY - state.pan.y) / oldZoom;

  // Update zoom
  state.zoom = newZoom;

  // Adjust pan so the center point stays in the same screen position
  state.pan.x = centerX - canvasX * newZoom;
  state.pan.y = centerY - canvasY * newZoom;

  document.getElementById("zoomLevel").textContent =
    Math.round(state.zoom * 100) + "%";
  render();
}

// Reset view
function resetView() {
  fitToView();
}

// Resize canvas to fit container
function resizeCanvas() {
  const wrapper = document.getElementById("canvasWrapper");
  // Make canvas fill the wrapper
  canvas.width = wrapper.clientWidth;
  canvas.height = wrapper.clientHeight;

  // If we have a floor plan, fit it to view (which also calls render)
  if (state.floorPlanImage) {
    fitToView();
  } else {
    render();
  }
}

// Fit floor plan to viewport
function fitToView() {
  if (!state.floorPlanImage) return;

  const wrapper = document.getElementById("canvasWrapper");
  const wrapperWidth = wrapper.clientWidth;
  const wrapperHeight = wrapper.clientHeight;

  const imageWidth = state.floorPlanImage.width;
  const imageHeight = state.floorPlanImage.height;

  // Calculate zoom to fit with some padding
  const zoomX = (wrapperWidth * 0.9) / imageWidth;
  const zoomY = (wrapperHeight * 0.9) / imageHeight;
  state.zoom = Math.min(zoomX, zoomY, 1); // Don't zoom in beyond 100%

  // Center the image
  state.pan.x = (wrapperWidth - imageWidth * state.zoom) / 2;
  state.pan.y = (wrapperHeight - imageHeight * state.zoom) / 2;

  document.getElementById("zoomLevel").textContent =
    Math.round(state.zoom * 100) + "%";
  render();
}

// Render furniture library
function renderFurnitureLibrary() {
  const list = document.getElementById("furnitureList");
  list.innerHTML = "";

  const filtered =
    state.currentCategory === "all"
      ? FURNITURE_LIBRARY
      : FURNITURE_LIBRARY.filter((f) => f.category === state.currentCategory);

  filtered.forEach((furniture) => {
    const div = document.createElement("div");
    div.className = "furniture-item";
    div.innerHTML = `
            <h4>${furniture.name}</h4>
            <p>${furniture.width} × ${furniture.depth} cm</p>
        `;
    div.addEventListener("click", () => addFurniture(furniture));
    list.appendChild(div);
  });
}

// Add furniture to canvas
function addFurniture(template) {
  // Push current state to undo stack before adding
  pushUndoState();

  // Calculate center of current view in canvas coordinates
  const wrapper = document.getElementById("canvasWrapper");
  const centerScreenX = wrapper.clientWidth / 2;
  const centerScreenY = wrapper.clientHeight / 2;

  // Convert screen center to canvas coordinates
  const centerX = (centerScreenX - state.pan.x) / state.zoom;
  const centerY = (centerScreenY - state.pan.y) / state.zoom;

  const furniture = {
    id: Date.now(),
    templateId: template.id,
    name: template.name,
    width: template.width,
    depth: template.depth,
    color: template.color,
    x: centerX,
    y: centerY,
    rotation: 0,
  };

  // Copy optional properties from template
  if (template.shape) furniture.shape = template.shape;
  if (template.seatDepth) furniture.seatDepth = template.seatDepth;
  if (template.expandedWidth) furniture.expandedWidth = template.expandedWidth;
  if (template.expandedDepth) furniture.expandedDepth = template.expandedDepth;

  state.furniture.push(furniture);

  // Deselect all other furniture and select the new one
  state.selectedFurniture = furniture;
  updateSelectedFurniturePanel();
  markChanges();
  render();
  saveProject();
}

// Convert cm to pixels based on calibration
function cmToPixels(cm) {
  if (!state.pixelsPerMeter) {
    // Default fallback: assume 100 pixels per meter
    return (cm / 100) * 100;
  }
  // Convert cm to meters, then multiply by pixels per meter
  return (cm / 100) * state.pixelsPerMeter;
}

// Render everything
function render() {
  ctx.setTransform(1, 0, 0, 1, 0, 0); // Reset transform
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Apply zoom and pan transformations
  ctx.translate(state.pan.x, state.pan.y);
  ctx.scale(state.zoom, state.zoom);

  // Draw floor plan
  if (state.floorPlanImage) {
    ctx.drawImage(state.floorPlanImage, 0, 0);
  } else {
    ctx.fillStyle = "#f0f0f0";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#999";
    ctx.font = "20px sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("Grundriss hochladen", canvas.width / 2, canvas.height / 2);
  }

  // Draw furniture
  state.furniture.forEach((furniture) => {
    drawFurniture(furniture);
  });

  // Draw calibration line
  if (state.calibrationMode) {
    if (state.calibrationStart) {
      ctx.beginPath();
      ctx.arc(
        state.calibrationStart.x,
        state.calibrationStart.y,
        5,
        0,
        2 * Math.PI,
      );
      ctx.fillStyle = "#e74c3c";
      ctx.fill();
      ctx.strokeStyle = "#c0392b";
      ctx.lineWidth = 2;
      ctx.stroke();
    }

    if (state.calibrationStart && state.calibrationEnd) {
      // Draw line
      ctx.beginPath();
      ctx.moveTo(state.calibrationStart.x, state.calibrationStart.y);
      ctx.lineTo(state.calibrationEnd.x, state.calibrationEnd.y);
      ctx.strokeStyle = "#e74c3c";
      ctx.lineWidth = 3;
      ctx.stroke();

      // Draw end point
      ctx.beginPath();
      ctx.arc(
        state.calibrationEnd.x,
        state.calibrationEnd.y,
        5,
        0,
        2 * Math.PI,
      );
      ctx.fillStyle = "#e74c3c";
      ctx.fill();
      ctx.strokeStyle = "#c0392b";
      ctx.lineWidth = 2;
      ctx.stroke();

      // Draw distance label
      const midX = (state.calibrationStart.x + state.calibrationEnd.x) / 2;
      const midY = (state.calibrationStart.y + state.calibrationEnd.y) / 2;
      const dx = state.calibrationEnd.x - state.calibrationStart.x;
      const dy = state.calibrationEnd.y - state.calibrationStart.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      ctx.fillStyle = "#fff";
      ctx.strokeStyle = "#e74c3c";
      ctx.lineWidth = 3;
      ctx.font = "bold 14px sans-serif";
      ctx.textAlign = "center";
      ctx.strokeText(`${distance.toFixed(0)} px`, midX, midY - 10);
      ctx.fillText(`${distance.toFixed(0)} px`, midX, midY - 10);
    }
  }

  // Draw crop selection
  if (state.cropMode && state.cropStart && state.cropEnd) {
    const x1 = Math.min(state.cropStart.x, state.cropEnd.x);
    const y1 = Math.min(state.cropStart.y, state.cropEnd.y);
    const x2 = Math.max(state.cropStart.x, state.cropEnd.x);
    const y2 = Math.max(state.cropStart.y, state.cropEnd.y);

    ctx.save();

    // Darken outside area
    ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
    ctx.fillRect(0, 0, canvas.width, y1); // Top
    ctx.fillRect(0, y1, x1, y2 - y1); // Left
    ctx.fillRect(x2, y1, canvas.width - x2, y2 - y1); // Right
    ctx.fillRect(0, y2, canvas.width, canvas.height - y2); // Bottom

    // Draw selection border
    ctx.strokeStyle = "#3498db";
    ctx.lineWidth = 2;
    ctx.setLineDash([5, 5]);
    ctx.strokeRect(x1, y1, x2 - x1, y2 - y1);
    ctx.setLineDash([]);

    // Show dimensions
    const width = Math.round(x2 - x1);
    const height = Math.round(y2 - y1);
    document.getElementById("cropDimensions").textContent =
      `${width} × ${height} px`;
    document.getElementById("cropControls").style.display = "block";

    ctx.restore();
  }
}

// Draw individual furniture piece
function drawFurniture(furniture) {
  const w = cmToPixels(furniture.width);
  const h = cmToPixels(furniture.depth);
  const isSelected = state.selectedFurniture === furniture;

  ctx.save();
  ctx.translate(furniture.x, furniture.y);
  ctx.rotate((furniture.rotation * Math.PI) / 180);

  // Draw furniture shape
  ctx.fillStyle = furniture.color;
  ctx.strokeStyle = isSelected ? "#FF1493" : "#333";
  ctx.lineWidth = isSelected ? 3 : 1;
  ctx.lineJoin = "round";
  ctx.lineCap = "round";

  if (furniture.shape === "L") {
    // Draw L-shaped furniture (corner bench) with rounded corners
    // L is made of two rectangles: one horizontal and one vertical
    const armWidth = cmToPixels(furniture.seatDepth || 50); // Seat depth (width of each arm)
    const radius = FURNITURE_CORNER_RADIUS;

    // Create L-shaped path with rounded corners
    ctx.beginPath();
    // Start at top-left, after the corner radius
    ctx.moveTo(-w / 2 + radius, -h / 2);
    // Top edge to top-right of vertical arm
    ctx.lineTo(-w / 2 + armWidth - radius, -h / 2);
    // Top-right corner of vertical arm (inner corner - rounded)
    ctx.arcTo(
      -w / 2 + armWidth,
      -h / 2,
      -w / 2 + armWidth,
      -h / 2 + radius,
      radius,
    );
    // Right edge of vertical arm down to horizontal arm
    ctx.lineTo(-w / 2 + armWidth, h / 2 - armWidth - radius);
    // Inner corner (rounded)
    ctx.arcTo(
      -w / 2 + armWidth,
      h / 2 - armWidth,
      -w / 2 + armWidth + radius,
      h / 2 - armWidth,
      radius,
    );
    // Top edge of horizontal arm to the right
    ctx.lineTo(w / 2 - radius, h / 2 - armWidth);
    // Top-right corner of horizontal arm (outer corner - rounded)
    ctx.arcTo(
      w / 2,
      h / 2 - armWidth,
      w / 2,
      h / 2 - armWidth + radius,
      radius,
    );
    // Right edge down to bottom-right corner
    ctx.lineTo(w / 2, h / 2 - radius);
    // Bottom-right corner (rounded)
    ctx.arcTo(w / 2, h / 2, w / 2 - radius, h / 2, radius);
    // Bottom edge to bottom-left corner
    ctx.lineTo(-w / 2 + radius, h / 2);
    // Bottom-left corner (rounded)
    ctx.arcTo(-w / 2, h / 2, -w / 2, h / 2 - radius, radius);
    // Left edge up to top-left corner
    ctx.lineTo(-w / 2, -h / 2 + radius);
    // Top-left corner (rounded)
    ctx.arcTo(-w / 2, -h / 2, -w / 2 + radius, -h / 2, radius);
    ctx.closePath();

    ctx.fill();
    ctx.stroke();
  } else if (furniture.shape === "circle") {
    // Draw circular furniture (round table)
    const radius = Math.min(w, h) / 2;
    ctx.beginPath();
    ctx.arc(0, 0, radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
  } else if (furniture.shape === "expandable") {
    // Draw expandable furniture (sleeper sofa)
    const radius = FURNITURE_CORNER_RADIUS;

    // Expanded size (dashed outline) if significantly different
    if (furniture.expandedWidth || furniture.expandedDepth) {
      const expW = cmToPixels(furniture.expandedWidth || furniture.width);
      const expH = cmToPixels(furniture.expandedDepth || furniture.depth);

      // Only draw if expanded dimensions are significantly different (>5cm difference)
      const widthDiff = Math.abs(
        (furniture.expandedWidth || furniture.width) - furniture.width,
      );
      const depthDiff = Math.abs(
        (furniture.expandedDepth || furniture.depth) - furniture.depth,
      );

      if (widthDiff > 5 || depthDiff > 5) {
        ctx.save();
        ctx.setLineDash([1, 3]);
        ctx.strokeStyle = isSelected ? "#FF1493" : "#666";
        ctx.lineWidth = isSelected ? 2 : 1;

        // Expanded area: width centered, depth extends from back (top)
        const widthOffset = (expW - w) / 2;
        const depthOffset = expH - h;

        ctx.beginPath();
        ctx.roundRect(-expW / 2, -h / 2 - depthOffset, expW, expH, radius);
        ctx.stroke();
        ctx.setLineDash([]);
        ctx.restore();
      }

      // Regular size (rounded rectangle)
      ctx.beginPath();
      ctx.roundRect(-w / 2, -h / 2, w, h, radius);
      ctx.fill();
      ctx.stroke();
    }
  } else {
    // Draw regular rectangle with rounded corners
    const radius = FURNITURE_CORNER_RADIUS;
    ctx.beginPath();
    ctx.roundRect(-w / 2, -h / 2, w, h, radius);
    ctx.fill();
    ctx.stroke();
  }

  // Draw corner markers and rotation handle (for selected furniture)
  if (isSelected) {
    const cornerSize = SELECTION_CORNER_SIZE;
    ctx.fillStyle = "#FF1493";

    // Four corners
    const corners = [
      [-w / 2, -h / 2], // Top-left
      [w / 2, -h / 2], // Top-right
      [w / 2, h / 2], // Bottom-right
      [-w / 2, h / 2], // Bottom-left
    ];

    corners.forEach(([x, y]) => {
      ctx.fillRect(
        x - cornerSize / 2,
        y - cornerSize / 2,
        cornerSize,
        cornerSize,
      );
    });

    // Rotation handle (circle at top center, above the furniture)
    const handleDistance = ROTATION_HANDLE_DISTANCE;
    const handleRadius = ROTATION_HANDLE_RADIUS;
    const handleY = -h / 2 - handleDistance;

    // Line connecting furniture to handle
    ctx.strokeStyle = "#FF1493";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(0, -h / 2);
    ctx.lineTo(0, handleY);
    ctx.stroke();

    // Handle circle
    ctx.fillStyle = "#FF1493";
    ctx.strokeStyle = "#fff";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(0, handleY, handleRadius, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
  }

  // Draw dimensions (for selected furniture)
  if (isSelected) {
    ctx.font = "bold 11px sans-serif";
    ctx.fillStyle = "#fff";
    ctx.strokeStyle = "#000";
    ctx.lineWidth = 3;
    ctx.lineJoin = "round";
    ctx.miterLimit = 2;
    ctx.textAlign = "center";

    // Width dimension (top)
    const widthText = `${furniture.width} cm`;
    ctx.strokeText(widthText, 0, -h / 2 - 15);
    ctx.fillText(widthText, 0, -h / 2 - 15);

    // Depth dimension (right side)
    ctx.save();
    ctx.translate(w / 2 + 15, 0);
    ctx.rotate(Math.PI / 2);
    const depthText = `${furniture.depth} cm`;
    ctx.strokeText(depthText, 0, 0);
    ctx.fillText(depthText, 0, 0);
    ctx.restore();
  }

  // Draw name label (center)
  ctx.fillStyle = "#fff";
  ctx.strokeStyle = "#000";
  ctx.font = "12px sans-serif";
  ctx.textAlign = "center";
  ctx.lineWidth = 3;
  ctx.lineJoin = "round";
  ctx.miterLimit = 2;
  ctx.strokeText(furniture.name, 0, 0);
  ctx.fillText(furniture.name, 0, 0);

  ctx.restore();
}

// Convert screen coordinates to canvas coordinates
function screenToCanvas(screenX, screenY) {
  const rect = canvas.getBoundingClientRect();
  const x = (screenX - rect.left) * (canvas.width / rect.width);
  const y = (screenY - rect.top) * (canvas.height / rect.height);

  // Apply inverse transform (zoom and pan)
  const canvasX = (x - state.pan.x) / state.zoom;
  const canvasY = (y - state.pan.y) / state.zoom;

  return { x: canvasX, y: canvasY };
}

// Handle canvas mouse down
function handleCanvasMouseDown(e) {
  const { x, y } = screenToCanvas(e.clientX, e.clientY);

  // Handle calibration mode
  if (state.calibrationMode) {
    if (!state.calibrationStart) {
      state.calibrationStart = { x, y };
      render();
    } else if (!state.calibrationEnd) {
      state.calibrationEnd = { x, y };
      document.getElementById("calibrationMeasure").style.display = "block";
      render();
    }
    return;
  }

  // Handle crop mode
  if (state.cropMode) {
    if (!state.cropStart) {
      state.cropStart = { x, y };
      render();
    }
    return;
  }

  // Check if clicked on rotation handle of selected furniture
  if (
    state.selectedFurniture &&
    isPointOnRotationHandle(x, y, state.selectedFurniture)
  ) {
    // Push undo state before rotating
    pushUndoState();
    state.isRotating = true;
    render();
    return;
  }

  // Check if clicked on furniture
  let clicked = null;
  for (let i = state.furniture.length - 1; i >= 0; i--) {
    const furniture = state.furniture[i];
    if (isPointInFurniture(x, y, furniture)) {
      clicked = furniture;
      break;
    }
  }

  if (clicked) {
    // Push undo state before dragging
    pushUndoState();
    state.selectedFurniture = clicked;
    state.isDragging = true;
    state.dragStart = { x: x - clicked.x, y: y - clicked.y };
    updateSelectedFurniturePanel();
  } else {
    // Start panning
    state.isPanning = true;
    state.panStart = { x: e.clientX - state.pan.x, y: e.clientY - state.pan.y };
    state.selectedFurniture = null;
    updateSelectedFurniturePanel();
  }

  render();
}

// Check if point is on rotation handle
function isPointOnRotationHandle(x, y, furniture) {
  const w = cmToPixels(furniture.width);
  const h = cmToPixels(furniture.depth);
  const angle = (furniture.rotation * Math.PI) / 180;

  const handleDistance = ROTATION_HANDLE_DISTANCE;
  const handleRadius = ROTATION_HANDLE_RADIUS;

  // Handle position in local coordinates
  const handleLocalX = 0;
  const handleLocalY = -h / 2 - handleDistance;

  // Rotate handle position to world coordinates
  const handleWorldX =
    furniture.x +
    handleLocalX * Math.cos(angle) -
    handleLocalY * Math.sin(angle);
  const handleWorldY =
    furniture.y +
    handleLocalX * Math.sin(angle) +
    handleLocalY * Math.cos(angle);

  // Check distance from click to handle center
  const dist = Math.sqrt((x - handleWorldX) ** 2 + (y - handleWorldY) ** 2);
  return dist <= handleRadius + 5; // Add 5px tolerance
}

// Check if point is inside furniture
function isPointInFurniture(x, y, furniture) {
  const w = cmToPixels(furniture.width);
  const h = cmToPixels(furniture.depth);
  const angle = (furniture.rotation * Math.PI) / 180;

  // Translate point to furniture local space
  const dx = x - furniture.x;
  const dy = y - furniture.y;

  // Rotate point back
  const localX = dx * Math.cos(-angle) - dy * Math.sin(-angle);
  const localY = dx * Math.sin(-angle) + dy * Math.cos(-angle);

  return Math.abs(localX) <= w / 2 && Math.abs(localY) <= h / 2;
}

// Handle canvas mouse move
function handleCanvasMouseMove(e) {
  if (state.isPanning) {
    // Pan the canvas
    state.pan.x = e.clientX - state.panStart.x;
    state.pan.y = e.clientY - state.panStart.y;
    render();
    return;
  }

  if (state.cropMode && state.cropStart) {
    const { x, y } = screenToCanvas(e.clientX, e.clientY);
    state.cropEnd = { x, y };
    render();
    return;
  }

  if (state.isRotating && state.selectedFurniture) {
    // Rotate furniture based on mouse angle
    const { x, y } = screenToCanvas(e.clientX, e.clientY);
    const dx = x - state.selectedFurniture.x;
    const dy = y - state.selectedFurniture.y;
    let angle = Math.atan2(dy, dx) * (180 / Math.PI);
    angle = (angle + 90 + 360) % 360; // +90 to align with top, normalize to 0-360

    // Snap to configured angle increments unless Shift is pressed
    if (!e.shiftKey) {
      angle = Math.round(angle / ROTATION_SNAP_ANGLE) * ROTATION_SNAP_ANGLE;
    }

    state.selectedFurniture.rotation = angle;
    updateSelectedFurniturePanel();
    render();
    return;
  }

  if (state.isDragging && state.selectedFurniture) {
    // Drag furniture
    const { x, y } = screenToCanvas(e.clientX, e.clientY);
    state.selectedFurniture.x = x - state.dragStart.x;
    state.selectedFurniture.y = y - state.dragStart.y;
    render();
  }
}

// Handle canvas mouse up
function handleCanvasMouseUp() {
  if (state.isDragging) {
    state.isDragging = false;
    markChanges();
    saveProject();
  }
  if (state.isPanning) {
    state.isPanning = false;
  }
  if (state.isRotating) {
    state.isRotating = false;
    markChanges();
    saveProject();
  }
}

// Handle canvas wheel for zoom
function handleCanvasWheel(e) {
  e.preventDefault();

  // Get mouse position before zoom
  const { x: mouseX, y: mouseY } = screenToCanvas(e.clientX, e.clientY);

  // Calculate zoom delta
  const zoomDelta = e.deltaY > 0 ? -0.05 : 0.05;
  const newZoom = Math.max(0.1, Math.min(5, state.zoom + zoomDelta));

  if (newZoom !== state.zoom) {
    // Adjust pan to zoom towards mouse position
    const rect = canvas.getBoundingClientRect();
    const screenX = (e.clientX - rect.left) * (canvas.width / rect.width);
    const screenY = (e.clientY - rect.top) * (canvas.height / rect.height);

    state.pan.x = screenX - mouseX * newZoom;
    state.pan.y = screenY - mouseY * newZoom;
    state.zoom = newZoom;

    document.getElementById("zoomLevel").textContent =
      Math.round(state.zoom * 100) + "%";
    render();
  }
}

// Update selected furniture panel
function updateSelectedFurniturePanel() {
  const panel = document.getElementById("selectedFurniturePanel");
  const furnitureListSection = document.querySelector(".section");
  const seatDepthLabel = document.getElementById("seatDepthLabel");
  const expandedWidthLabel = document.getElementById("expandedWidthLabel");
  const expandedDepthLabel = document.getElementById("expandedDepthLabel");

  if (state.selectedFurniture) {
    panel.style.display = "block";
    furnitureListSection.style.display = "none";
    document.getElementById("furnitureName").value =
      state.selectedFurniture.name;
    document.getElementById("furnitureWidth").value =
      state.selectedFurniture.width;
    document.getElementById("furnitureDepth").value =
      state.selectedFurniture.depth;
    document.getElementById("furnitureRotation").value =
      state.selectedFurniture.rotation;

    // Show seat depth field only for L-shaped furniture (Eckbank)
    if (state.selectedFurniture.shape === "L") {
      seatDepthLabel.style.display = "block";
      document.getElementById("furnitureSeatDepth").value =
        state.selectedFurniture.seatDepth || 50;
    } else {
      seatDepthLabel.style.display = "none";
    }

    // Show expanded dimensions only for expandable furniture (Schlafsofa)
    if (state.selectedFurniture.shape === "expandable") {
      expandedWidthLabel.style.display = "block";
      expandedDepthLabel.style.display = "block";
      document.getElementById("furnitureExpandedWidth").value =
        state.selectedFurniture.expandedWidth || state.selectedFurniture.width;
      document.getElementById("furnitureExpandedDepth").value =
        state.selectedFurniture.expandedDepth || state.selectedFurniture.depth;
    } else {
      expandedWidthLabel.style.display = "none";
      expandedDepthLabel.style.display = "none";
    }
  } else {
    panel.style.display = "none";
    furnitureListSection.style.display = "block";
  }
}

// Handle furniture property changes
function handleFurniturePropertyChange(e) {
  if (!state.selectedFurniture) return;

  const property = e.target.id.replace("furniture", "").toLowerCase();

  if (property === "name") {
    state.selectedFurniture.name = e.target.value;
  } else if (property === "width") {
    state.selectedFurniture.width = parseFloat(e.target.value);
  } else if (property === "depth") {
    state.selectedFurniture.depth = parseFloat(e.target.value);
  } else if (property === "seatdepth") {
    state.selectedFurniture.seatDepth = parseFloat(e.target.value);
  } else if (property === "expandedwidth") {
    state.selectedFurniture.expandedWidth = parseFloat(e.target.value);
  } else if (property === "expandeddepth") {
    state.selectedFurniture.expandedDepth = parseFloat(e.target.value);
  } else if (property === "rotation") {
    state.selectedFurniture.rotation = parseFloat(e.target.value) % 360;
  }

  markChanges();
  render();
  saveProject();
}

// Delete furniture
function deleteFurniture() {
  if (!state.selectedFurniture) return;

  // Push current state to undo stack before deleting
  pushUndoState();

  state.furniture = state.furniture.filter(
    (f) => f.id !== state.selectedFurniture.id,
  );
  state.selectedFurniture = null;
  updateSelectedFurniturePanel();
  markChanges();
  render();
  saveProject();
}

// Handle keyboard shortcuts
function handleKeyDown(e) {
  // Undo (Ctrl+Z or Cmd+Z)
  if ((e.ctrlKey || e.metaKey) && e.key === "z" && !e.shiftKey) {
    e.preventDefault();
    undo();
    return;
  }

  // Redo (Ctrl+Y or Cmd+Y or Ctrl+Shift+Z or Cmd+Shift+Z)
  if (
    ((e.ctrlKey || e.metaKey) && e.key === "y") ||
    ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === "z")
  ) {
    e.preventDefault();
    redo();
    return;
  }

  // Delete key removes selected furniture
  if (e.key === "Delete" || e.key === "Del") {
    if (state.selectedFurniture) {
      deleteFurniture();
    }
  }
}

// Save project to localStorage
function saveProject() {
  const project = {
    name: state.projectName,
    floorPlan: state.floorPlan,
    pixelsPerMeter: state.pixelsPerMeter,
    furniture: state.furniture,
    snapshotGraph: state.snapshotGraph,
    currentSnapshotId: state.currentSnapshotId,
    lastModified: new Date().toISOString(),
  };

  try {
    // Save as current project
    localStorage.setItem("roomer-current-project", JSON.stringify(project));

    // Also save to named projects list
    const projects = getSavedProjects();
    const existingIndex = projects.findIndex(
      (p) => p.name === state.projectName,
    );
    if (existingIndex >= 0) {
      projects[existingIndex] = project;
    } else {
      projects.push(project);
    }
    localStorage.setItem("roomer-projects", JSON.stringify(projects));
  } catch (e) {
    if (e.name === "QuotaExceededError") {
      alert(
        "Speicher voll! Das Projekt konnte nicht gespeichert werden.\n\n" +
          "Bitte löschen Sie alte Projekte oder exportieren Sie dieses Projekt als Datei.\n\n" +
          "Tipp: Große Grundrisse (PDFs, hochauflösende Bilder) benötigen viel Speicherplatz.",
      );
      // Open project list to allow deletion
      showUploadOverlay();
    } else {
      console.error("Error saving project:", e);
      alert(
        "Fehler beim Speichern: " +
          e.message +
          "\n\nDas Projekt konnte nicht gespeichert werden.",
      );
    }
  }
}

// Get list of saved projects
function getSavedProjects() {
  const saved = localStorage.getItem("roomer-projects");
  return saved ? JSON.parse(saved) : [];
}

// Load project from localStorage
function loadProject() {
  // Try new storage first, fallback to old
  let saved = localStorage.getItem("roomer-current-project");
  if (!saved) {
    saved = localStorage.getItem("roomer-project"); // Legacy support
  }
  if (!saved) return;

  try {
    const project = JSON.parse(saved);

    state.projectName = project.name || "Unbenanntes Projekt";
    updateProjectNameDisplay();

    if (project.floorPlan) {
      const img = new Image();
      img.onload = () => {
        state.floorPlanImage = img;
        canvas.width = img.width;
        canvas.height = img.height;
        hideUploadOverlay();
        resizeCanvas();
        fitToView();
      };
      img.onerror = () => {
        console.error("Error loading floor plan image");
        alert(
          "Fehler beim Laden des Grundrisses.\n\n" +
            "Die Bilddaten sind möglicherweise beschädigt. " +
            "Bitte laden Sie einen neuen Grundriss hoch.",
        );
        showUploadOverlay();
      };
      img.src = project.floorPlan;
      state.floorPlan = project.floorPlan;
    }

    state.pixelsPerMeter = project.pixelsPerMeter || null;
    state.furniture = project.furniture || [];
    // Handle both old and new snapshot formats
    state.snapshotGraph = project.snapshotGraph || [];
    state.currentSnapshotId = project.currentSnapshotId || null;
    state.hasUnsavedChanges = false;
    updateSnapshotUI();
    renderSnapshotGraph();
  } catch (e) {
    console.error("Error loading project:", e);
    alert(
      "Fehler beim Laden des Projekts: " +
        e.message +
        "\n\n" +
        "Die Projektdaten sind möglicherweise beschädigt.\n" +
        "Versuchen Sie, das Projekt zu löschen und ein Backup zu importieren.",
    );
    // Clear corrupted data and show upload overlay
    localStorage.removeItem("roomer-current-project");
    showUploadOverlay();
  }
}

// Load a specific project by name
function loadProjectByName(projectName) {
  const projects = getSavedProjects();
  const project = projects.find((p) => p.name === projectName);
  if (!project) return;

  state.projectName = project.name;
  updateProjectNameDisplay();
  state.pixelsPerMeter = project.pixelsPerMeter || null;
  state.furniture = project.furniture || [];
  // Handle both old and new snapshot formats
  state.snapshotGraph = project.snapshotGraph || [];
  state.currentSnapshotId = project.currentSnapshotId || null;
  state.hasUnsavedChanges = false;
  updateSnapshotUI();
  renderSnapshotGraph();

  if (project.floorPlan) {
    const img = new Image();
    img.onload = () => {
      state.floorPlanImage = img;
      canvas.width = img.width;
      canvas.height = img.height;
      hideUploadOverlay();
      resizeCanvas();
      fitToView();
      render();
      updateScaleDisplay();
    };
    img.src = project.floorPlan;
    state.floorPlan = project.floorPlan;
  }

  localStorage.setItem("roomer-current-project", JSON.stringify(project));
}

// Close project (no confirmation needed as we auto-save)
function closeProject() {
  state.floorPlan = null;
  state.floorPlanImage = null;
  state.furniture = [];
  state.selectedFurniture = null;
  state.pixelsPerMeter = null;
  state.projectName = "Unbenanntes Projekt";
  localStorage.removeItem("roomer-current-project");
  showUploadOverlay();
  resizeCanvas();
  render();
  updateSelectedFurniturePanel();
  updateScaleDisplay();
  updateProjectNameDisplay();
  renderProjectList();
}

// Rename current project
function renameProject() {
  const newName = prompt("Neuer Projektname:", state.projectName);
  if (newName && newName.trim()) {
    // Save old project data before renaming
    const oldName = state.projectName;
    state.projectName = newName.trim();

    // If we're renaming an existing project, remove the old one
    if (oldName !== "Unbenanntes Projekt") {
      const projects = getSavedProjects();
      const filtered = projects.filter((p) => p.name !== oldName);
      localStorage.setItem("roomer-projects", JSON.stringify(filtered));
    }

    // Save with new name
    saveProject();
    updateProjectNameDisplay();
    renderProjectList();
  }
}

// Export project as JSON file
function exportProject() {
  const project = {
    name: state.projectName,
    floorPlan: state.floorPlan,
    pixelsPerMeter: state.pixelsPerMeter,
    furniture: state.furniture,
    snapshotGraph: state.snapshotGraph,
    currentSnapshotId: state.currentSnapshotId,
    lastModified: new Date().toISOString(),
    exportVersion: "1.0",
  };

  const blob = new Blob([JSON.stringify(project, null, 2)], {
    type: "application/json",
  });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `${state.projectName}.roomer.json`;
  a.click();
  URL.revokeObjectURL(url);
}

// Import project from JSON file
function handleProjectImport(e) {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (event) => {
    try {
      const importedProject = JSON.parse(event.target.result);

      // Validate project structure
      if (!importedProject.name || !importedProject.furniture) {
        alert("Ungültiges Projektformat.");
        return;
      }

      // Handle name conflicts
      let projectName = importedProject.name;
      const existingProjects = getSavedProjects();
      const existingNames = existingProjects.map((p) => p.name);

      if (existingNames.includes(projectName)) {
        let counter = 1;
        while (existingNames.includes(`${projectName} (${counter})`)) {
          counter++;
        }
        projectName = `${projectName} (${counter})`;
      }

      // Update project name and timestamp
      importedProject.name = projectName;
      importedProject.lastModified = new Date().toISOString();

      // Add to projects list
      existingProjects.push(importedProject);
      localStorage.setItem("roomer-projects", JSON.stringify(existingProjects));

      // Load the imported project
      loadProjectByName(projectName);
    } catch (error) {
      console.error("Import error:", error);
      alert("Fehler beim Importieren des Projekts: " + error.message);
    }
  };
  reader.readAsText(file);

  // Reset file input
  e.target.value = "";
}

// Update project name display in header
function updateProjectNameDisplay() {
  document.getElementById("projectNameDisplay").textContent = state.projectName;
}

// Toggle sidebar pin state
function toggleSidebarPin() {
  state.sidebarPinned = !state.sidebarPinned;
  const sidebar = document.getElementById("sidebar");
  const sidebarPinBtn = document.getElementById("sidebarPinBtn");

  if (state.sidebarPinned) {
    sidebar.classList.remove("unpinned");
    sidebarPinBtn.textContent = "📌";
    sidebarPinBtn.title = "Sidebar lösen";
  } else {
    sidebar.classList.add("unpinned");
    sidebarPinBtn.textContent = "📍";
    sidebarPinBtn.title = "Sidebar anheften";
  }
}

// Initialize app when DOM is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
