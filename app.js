// ========== CONFIGURATION CONSTANTS ==========

// UI and interaction constants
const MAX_UNDO_STACK_SIZE = 50;
const ROTATION_HANDLE_DISTANCE = 30; // Distance from furniture edge to rotation handle
const ROTATION_HANDLE_RADIUS = 8;
const ROTATION_SNAP_ANGLE = 45; // Degrees for rotation snapping
const FURNITURE_CORNER_RADIUS = 1.5; // Border radius for furniture shapes
const CROP_MIN_SIZE = 10; // Minimum crop area size in pixels
const SELECTION_CORNER_SIZE = 8; // Size of selection corner markers

// Measurement tool constants
const MEASURE_DIM_OFFSET = 18; // Offset of dimension line from measured segment
const MEASURE_EXT_LEN = 8; // Length of extension ticks
const DEFAULT_MEASURE_SCALE = 100; // Default pixels per meter for from-scratch plans
const MEASUREMENT_TYPES = [
  { id: "wall", code: "W", color: "#2c3e50" },
  { id: "door", code: "D", color: "#2980b9" },
  { id: "doorOffset", code: "DO", color: "#16a085" },
  { id: "window", code: "Win", color: "#f39c12" },
  { id: "windowOffset", code: "WO", color: "#e67e22" },
  { id: "chimney", code: "Ch", color: "#6c5ce7" },
  { id: "column", code: "Col", color: "#a29bfe" },
  { id: "height", code: "H", color: "#d63031" },
  { id: "other", code: "X", color: "#7f8c8d" },
];
const DEFAULT_MEASURE_TYPE = "wall";

// Rectangular fixed installations / obstructions (heaters, appliances, …)
const OBSTACLE_TYPES = [
  { id: "heater", code: "Heiz", color: "#e74c3c" },
  { id: "appliance", code: "App", color: "#8e44ad" },
  { id: "cabinet", code: "Cab", color: "#16a085" },
  { id: "pipe", code: "Pipe", color: "#5d6d7e" },
];
const DEFAULT_OBSTACLE_TYPE = "heater";

// Furniture library with default dimensions in cm
const FURNITURE_LIBRARY = [
  // Seating
  {
    id: "chair",
    name: "Chair",
    category: "seating",
    width: 45,
    depth: 50,
    color: "#8B4513",
  },
  {
    id: "armchair",
    name: "Armchair",
    category: "seating",
    width: 80,
    depth: 85,
    color: "#A0522D",
  },
  {
    id: "sofa2",
    name: "Sofa (2-Seater)",
    category: "seating",
    width: 150,
    depth: 85,
    color: "#CD853F",
  },
  {
    id: "sofa3",
    name: "Sofa (3-Seater)",
    category: "seating",
    width: 200,
    depth: 85,
    color: "#D2691E",
  },
  {
    id: "sleeperSofa",
    name: "Sleeper Sofa",
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
    name: "Corner Bench",
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
    name: "Coffee Table",
    category: "tables",
    width: 100,
    depth: 60,
    color: "#654321",
  },
  {
    id: "diningTable4",
    name: "Dining Table (4 People)",
    category: "tables",
    width: 120,
    depth: 80,
    color: "#8B7355",
  },
  {
    id: "diningTable6",
    name: "Dining Table (6 People)",
    category: "tables",
    width: 160,
    depth: 90,
    color: "#A0826D",
  },
  {
    id: "desk",
    name: "Desk",
    category: "tables",
    width: 140,
    depth: 70,
    color: "#8B7D6B",
  },
  {
    id: "roundTable",
    name: "Round Table",
    category: "tables",
    width: 120,
    depth: 120,
    color: "#9B8B7A",
    shape: "circle",
  },

  // Storage
  {
    id: "wardrobe",
    name: "Wardrobe",
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
    name: "Bookshelf",
    category: "storage",
    width: 80,
    depth: 30,
    color: "#808000",
  },
  {
    id: "tvStand",
    name: "TV Stand",
    category: "storage",
    width: 150,
    depth: 45,
    color: "#8B8B7A",
  },

  // Beds
  {
    id: "singleBed",
    name: "Single Bed",
    category: "beds",
    width: 100,
    depth: 200,
    color: "#4682B4",
  },
  {
    id: "doubleBed",
    name: "Double Bed",
    category: "beds",
    width: 160,
    depth: 200,
    color: "#4169E1",
  },
  {
    id: "queenBed",
    name: "Queen Bed",
    category: "beds",
    width: 180,
    depth: 200,
    color: "#1E90FF",
  },

  // Appliances
  {
    id: "washingMachine",
    name: "Washing Machine",
    category: "appliances",
    width: 60,
    depth: 60,
    color: "#E8E8E8",
  },
  {
    id: "dryer",
    name: "Dryer",
    category: "appliances",
    width: 60,
    depth: 60,
    color: "#D3D3D3",
  },
  {
    id: "dishwasher",
    name: "Dishwasher",
    category: "appliances",
    width: 60,
    depth: 60,
    color: "#C0C0C0",
  },
  {
    id: "fridge",
    name: "Refrigerator",
    category: "appliances",
    width: 60,
    depth: 60,
    color: "#F0F0F0",
  },
  {
    id: "fridgeLarge",
    name: "Refrigerator (Large)",
    category: "appliances",
    width: 70,
    depth: 70,
    color: "#E0E0E0",
  },
  {
    id: "stove",
    name: "Stove",
    category: "appliances",
    width: 60,
    depth: 60,
    color: "#505050",
  },
  {
    id: "oven",
    name: "Oven",
    category: "appliances",
    width: 60,
    depth: 60,
    color: "#404040",
  },

  // Decoration
  {
    id: "plantSmall",
    name: "Plant (Small)",
    category: "decoration",
    width: 30,
    depth: 30,
    color: "#228B22",
  },
  {
    id: "plantMedium",
    name: "Plant (Medium)",
    category: "decoration",
    width: 40,
    depth: 40,
    color: "#32CD32",
  },
  {
    id: "plantLarge",
    name: "Plant (Large)",
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
    name: "Floor Lamp",
    category: "decoration",
    width: 30,
    depth: 30,
    color: "#DAA520",
  },
  {
    id: "lampTable",
    name: "Table Lamp",
    category: "decoration",
    width: 20,
    depth: 20,
    color: "#FFD700",
  },
  {
    id: "kitchenWallCabinet",
    name: "Wall Cabinet",
    category: "storage",
    width: 60,
    depth: 35,
    color: "#DCDCDC",
  },
  {
    id: "kitchenBaseCabinet",
    name: "Base Cabinet",
    category: "storage",
    width: 60,
    depth: 60,
    color: "#C0C0C0",
  },
  {
    id: "rugSmall",
    name: "Rug (Small)",
    category: "decoration",
    width: 120,
    depth: 180,
    color: "#8B4513",
  },
  {
    id: "rugMedium",
    name: "Rug (Medium)",
    category: "decoration",
    width: 160,
    depth: 230,
    color: "#A0522D",
  },
  {
    id: "rugLarge",
    name: "Rug (Large)",
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
  projectName: "Untitled Project",
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
  // Measurement tool (Grundriss Maßzeichnung)
  measureMode: false,
  measurements: [],
  measureActiveType: DEFAULT_MEASURE_TYPE,
  measureDraftStart: null,
  measureDraftEnd: null,
  selectedMeasurement: null,
  // Fixed installations / obstructions drawn on the plan
  obstacles: [],
  obstacleActiveType: DEFAULT_OBSTACLE_TYPE,
  addObstacleMode: false,
  obstacleDraftStart: null,
  obstacleDraftEnd: null,
  selectedObstacle: null,
};

// Canvas and context
const canvas = document.getElementById("mainCanvas");
const ctx = canvas.getContext("2d");

// Initialize PDF.js
if (typeof pdfjsLib !== "undefined") {
  pdfjsLib.GlobalWorkerOptions.workerSrc = "libs/pdf.worker-3.11.174.min.js";
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
    const message = t("messages.snapshotForkMessage", {
      count: children.length,
    });

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
    ? t("messages.deleteSnapshotWithChildrenConfirm")
    : t("messages.deleteSnapshotConfirm");

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
      const timeStr = date.toLocaleTimeString(getCurrentLocale(), {
        hour: "2-digit",
        minute: "2-digit",
      });
      const dateStr = date.toLocaleDateString(getCurrentLocale());

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
    measurements: JSON.parse(JSON.stringify(state.measurements)),
    obstacles: JSON.parse(JSON.stringify(state.obstacles)),
    selectedFurniture: state.selectedFurniture
      ? state.furniture.indexOf(state.selectedFurniture)
      : null,
    selectedObstacle: state.selectedObstacle
      ? state.obstacles.indexOf(state.selectedObstacle)
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
    measurements: JSON.parse(JSON.stringify(state.measurements)),
    obstacles: JSON.parse(JSON.stringify(state.obstacles)),
    selectedFurniture: state.selectedFurniture
      ? state.furniture.indexOf(state.selectedFurniture)
      : null,
    selectedObstacle: state.selectedObstacle
      ? state.obstacles.indexOf(state.selectedObstacle)
      : null,
  };
  state.redoStack.push(currentState);

  // Pop state from undo stack and restore it
  const previousState = state.undoStack.pop();
  state.furniture = JSON.parse(JSON.stringify(previousState.furniture));
  state.measurements = JSON.parse(JSON.stringify(previousState.measurements));
  state.obstacles = JSON.parse(JSON.stringify(previousState.obstacles || []));

  // Restore selected furniture
  if (
    previousState.selectedFurniture !== null &&
    previousState.selectedFurniture < state.furniture.length
  ) {
    state.selectedFurniture = state.furniture[previousState.selectedFurniture];
  } else {
    state.selectedFurniture = null;
  }

  // Restore selected obstacle
  if (
    previousState.selectedObstacle !== null &&
    previousState.selectedObstacle < state.obstacles.length
  ) {
    state.selectedObstacle = state.obstacles[previousState.selectedObstacle];
  } else {
    state.selectedObstacle = null;
  }

  state.selectedMeasurement = null;
  updateSelectedFurniturePanel();
  updateUndoRedoButtons();
  if (state.measureMode) {
    renderMeasureList();
    renderObstacleList();
  }
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
    measurements: JSON.parse(JSON.stringify(state.measurements)),
    obstacles: JSON.parse(JSON.stringify(state.obstacles)),
    selectedFurniture: state.selectedFurniture
      ? state.furniture.indexOf(state.selectedFurniture)
      : null,
    selectedObstacle: state.selectedObstacle
      ? state.obstacles.indexOf(state.selectedObstacle)
      : null,
  };
  state.undoStack.push(currentState);

  // Pop state from redo stack and restore it
  const nextState = state.redoStack.pop();
  state.furniture = JSON.parse(JSON.stringify(nextState.furniture));
  state.measurements = JSON.parse(JSON.stringify(nextState.measurements));
  state.obstacles = JSON.parse(JSON.stringify(nextState.obstacles || []));

  // Restore selected furniture
  if (
    nextState.selectedFurniture !== null &&
    nextState.selectedFurniture < state.furniture.length
  ) {
    state.selectedFurniture = state.furniture[nextState.selectedFurniture];
  } else {
    state.selectedFurniture = null;
  }

  // Restore selected obstacle
  if (
    nextState.selectedObstacle !== null &&
    nextState.selectedObstacle < state.obstacles.length
  ) {
    state.selectedObstacle = state.obstacles[nextState.selectedObstacle];
  } else {
    state.selectedObstacle = null;
  }

  state.selectedMeasurement = null;
  updateSelectedFurniturePanel();
  updateUndoRedoButtons();
  if (state.measureMode) {
    renderMeasureList();
    renderObstacleList();
  }
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
      const dateStr = date.toLocaleString(getCurrentLocale(), {
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
  if (!confirm(t("messages.deleteProjectConfirm", { name: projectName })))
    return;

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
    display.textContent =
      typeof t === "function" ? t("ui.noScale") : "No Scale";
  }
}

// Initialize application
function init() {
  // Initialize i18n system first
  if (typeof initLanguage === "function") {
    initLanguage();
  }

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

// Update all UI text when language changes
function updateAllUIText() {
  if (typeof t !== "function") return;

  // Update document title and header
  document.title = t("ui.appTitle");
  const headerH1 = document.querySelector("header h1");
  if (headerH1) headerH1.textContent = t("ui.appTitle");

  // Update category buttons
  document.querySelectorAll(".category-btn").forEach((btn) => {
    const category = btn.dataset.category;
    btn.textContent = t(`ui.${category}`);
  });

  // Update scale display
  updateScaleDisplay();

  // Update furniture library
  renderFurnitureLibrary();

  // Update selected furniture panel if visible
  updateSelectedFurniturePanel();

  // Update measurement panel if the tool is active
  if (state.measureMode) renderMeasurePanel();

  // Update project name if it's still the default
  const defaultNames = ["Untitled Project", "Unbenanntes Projekt"];
  if (defaultNames.includes(state.projectName)) {
    state.projectName = t("ui.untitledProject");
    updateProjectNameDisplay();
  }

  // Re-render snapshot graph (in case tooltips need translation)
  renderSnapshotGraph();
}

// Setup all event listeners
function setupEventListeners() {
  // Language switcher
  const languageSelector = document.getElementById("languageSelector");
  if (languageSelector && typeof setLanguage === "function") {
    languageSelector.addEventListener("change", (e) => {
      setLanguage(e.target.value);
    });
    // Set initial value
    if (typeof currentLanguage !== "undefined") {
      languageSelector.value = currentLanguage;
    }
  }

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

  // Measurement tool
  document.getElementById("measureBtn").addEventListener("click", toggleMeasureMode);
  document
    .getElementById("measureScale")
    .addEventListener("change", handleMeasureScaleChange);
  document
    .getElementById("exportMeasureImage")
    .addEventListener("click", exportMeasurementImage);
  document
    .getElementById("clearMeasurements")
    .addEventListener("click", clearMeasurements);
  document
    .getElementById("exitMeasureMode")
    .addEventListener("click", exitMeasureMode);
  document
    .getElementById("addObstacleBtn")
    .addEventListener("click", toggleAddObstacleMode);
  canvas.addEventListener("contextmenu", (e) => {
    if (state.measureMode) {
      e.preventDefault();
      if (state.addObstacleMode && state.obstacleDraftStart) {
        cancelObstacleDraft();
      } else {
        cancelMeasureDraft();
      }
    }
  });

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
    alert(t("messages.enterValidLength"));
    return;
  }

  if (!state.calibrationStart || !state.calibrationEnd) {
    alert(t("messages.drawLineFirst"));
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
    alert(t("messages.uploadFloorPlanFirst"));
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
    alert(t("messages.selectAreaFirst"));
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
    alert(t("messages.areaTooSmall"));
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

    // Adjust measurements (translate by crop offset)
    state.measurements.forEach((measurement) => {
      measurement.x1 -= x1;
      measurement.y1 -= y1;
      measurement.x2 -= x1;
      measurement.y2 -= y1;
    });

    // Adjust fixed installations (translate by crop offset)
    state.obstacles.forEach((obstacle) => {
      obstacle.x -= x1;
      obstacle.y -= y1;
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

// ========== MEASUREMENT TOOL (GRUNDRISS MAßZEICHNUNG) ==========

// Toggle measurement mode
function toggleMeasureMode() {
  if (state.measureMode) {
    exitMeasureMode();
  } else {
    startMeasureMode();
  }
}

// Enter measurement mode
function startMeasureMode() {
  if (state.calibrationMode) cancelCalibration();
  if (state.cropMode) cancelCrop();

  state.measureMode = true;
  state.selectedFurniture = null;
  state.selectedMeasurement = null;
  // Obstacle flow is off by default; user opts in via the panel button
  state.addObstacleMode = false;
  state.obstacleDraftStart = null;
  state.obstacleDraftEnd = null;
  state.selectedObstacle = null;

  canvas.style.cursor = "crosshair";
  document.getElementById("measureBtn").classList.add("active");
  document.getElementById("measureBtn").setAttribute("aria-pressed", "true");

  renderMeasurePanel();
  render();
}

// Exit measurement mode
function exitMeasureMode() {
  state.measureMode = false;
  state.measureDraftStart = null;
  state.measureDraftEnd = null;
  state.selectedMeasurement = null;
  state.addObstacleMode = false;
  state.obstacleDraftStart = null;
  state.obstacleDraftEnd = null;
  state.selectedObstacle = null;

  canvas.style.cursor = "grab";
  document.getElementById("measureBtn").classList.remove("active");
  document.getElementById("measureBtn").setAttribute("aria-pressed", "false");

  updateSidebarPanels();
  updateSelectedFurniturePanel();
  render();
}

// Cancel a measurement draft in progress
function cancelMeasureDraft() {
  state.measureDraftStart = null;
  state.measureDraftEnd = null;
  renderMeasurePanel();
  render();
}

// Change the active measurement type
function setActiveMeasureType(typeId) {
  if (!getMeasureType(typeId)) return;
  state.measureActiveType = typeId;
  cancelMeasureDraft();
}

// Handle scale input change
function handleMeasureScaleChange(e) {
  const v = parseFloat(e.target.value);
  if (!Number.isFinite(v) || v <= 0) {
    e.target.value = state.pixelsPerMeter || DEFAULT_MEASURE_SCALE;
    return;
  }
  state.pixelsPerMeter = v;
  updateScaleDisplay();
  renderMeasurePanel();
  render();
}

// Compute the real length (cm) of a measurement stroke
function measurementStrokeCm(x1, y1, x2, y2) {
  const ppm = state.pixelsPerMeter || DEFAULT_MEASURE_SCALE;
  const px = Math.hypot(x2 - x1, y2 - y1);
  return px / (ppm / 100);
}

// Format a length in cm for display
function formatLength(cm) {
  return Math.round(cm) + " cm";
}

// Add a new measurement between two points
function addMeasurement(type, x1, y1, x2, y2) {
  if (Math.hypot(x2 - x1, y2 - y1) < 2) return;
  const measurement = {
    id: Date.now() + "_" + Math.random().toString(36).slice(2, 7),
    type,
    x1,
    y1,
    x2,
    y2,
  };
  pushUndoState();
  state.measurements.push(measurement);
  state.selectedMeasurement = measurement;
  markChanges();
  saveProject();
  renderMeasurePanel();
  render();
  return measurement;
}

// Look up a measurement type by id
function getMeasureType(typeId) {
  return MEASUREMENT_TYPES.find((tp) => tp.id === typeId);
}

// Delete a measurement by id
function deleteMeasurement(id) {
  const index = state.measurements.findIndex((m) => m.id === id);
  if (index < 0) return;
  if (!confirm(t("measure.deleteConfirm"))) return;
  state.measurements.splice(index, 1);
  if (state.selectedMeasurement && state.selectedMeasurement.id === id) {
    state.selectedMeasurement = null;
  }
  markChanges();
  saveProject();
  renderMeasurePanel();
  render();
}

// Clear all measurements
function clearMeasurements() {
  if (state.measurements.length === 0) return;
  if (!confirm(t("measure.clearAllConfirm"))) return;
  pushUndoState();
  state.measurements = [];
  state.selectedMeasurement = null;
  cancelMeasureDraft();
  markChanges();
  saveProject();
  renderMeasurePanel();
}

// Set the drawing scale so a measurement's drawn length matches its real value
function setMeasurementAsScale(id) {
  const measurement = state.measurements.find((m) => m.id === id);
  if (!measurement) return;
  const input = document.querySelector(`[data-attach="${id}"]`);
  const realCm = parseFloat(input ? input.value : NaN);
  if (!Number.isFinite(realCm) || realCm <= 0) {
    alert(t("messages.enterValidLength"));
    return;
  }
  const px = Math.hypot(
    measurement.x2 - measurement.x1,
    measurement.y2 - measurement.y1,
  );
  state.pixelsPerMeter = px / (realCm / 100);
  updateScaleDisplay();
  renderMeasurePanel();
  render();
  saveProject();
}

// Hit test a point against existing measurements
function hitTestMeasurement(x, y) {
  const threshold = 12;
  for (const m of state.measurements) {
    const dx = m.x2 - m.x1;
    const dy = m.y2 - m.y1;
    const len = Math.hypot(dx, dy);
    if (len < 1e-6) continue;
    const ux = dx / len;
    const uy = dy / len;
    const px = -uy;
    const py = ux;
    const off = MEASURE_DIM_OFFSET;
    const ax1 = m.x1 + px * off;
    const ay1 = m.y1 + py * off;
    const ax2 = m.x2 + px * off;
    const ay2 = m.y2 + py * off;
    if (distToSegment(x, y, ax1, ay1, ax2, ay2) <= threshold) return m;
    if (distToSegment(x, y, m.x1, m.y1, m.x2, m.y2) <= threshold * 0.6) {
      return m;
    }
  }
  return null;
}

// Distance from point to segment
function distToSegment(px, py, x1, y1, x2, y2) {
  const dx = x2 - x1;
  const dy = y2 - y1;
  const l2 = dx * dx + dy * dy;
  if (l2 === 0) return Math.hypot(px - x1, py - y1);
  let tt = ((px - x1) * dx + (py - y1) * dy) / l2;
  tt = Math.max(0, Math.min(1, tt));
  return Math.hypot(px - (x1 + tt * dx), py - (y1 + tt * dy));
}

// Render the measurement sidebar panel
function renderMeasurePanel() {
  const panel = document.getElementById("measurePanel");
  if (!panel) return;

  updateSidebarPanels();

  // Scale input
  const scaleInput = document.getElementById("measureScale");
  scaleInput.value = Math.round((state.pixelsPerMeter || DEFAULT_MEASURE_SCALE) * 10) / 10;

  // Type buttons (acts as picker + inline legend)
  const typesContainer = document.getElementById("measureTypes");
  typesContainer.innerHTML = MEASUREMENT_TYPES.map(
    (tp) => `
    <button
      type="button"
      class="measure-type-btn${tp.id === state.measureActiveType ? " active" : ""}"
      data-type="${tp.id}"
      style="--tcolor:${tp.color}"
    >
      <span class="measure-swatch" style="background:${tp.color}"></span>
      <span class="measure-code">${tp.code}</span>
      <span class="measure-type-name">${t("measure." + tp.id)}</span>
    </button>`,
  ).join("");

  typesContainer.querySelectorAll(".measure-type-btn").forEach((btn) => {
    btn.addEventListener("click", () => setActiveMeasureType(btn.dataset.type));
  });

  // Legend
  document.getElementById("measureLegend").innerHTML =
    `<div class="measure-legend-title">${t("measure.legendTitle")} <span class="measure-legend-unit">(${t("measure.legendUnit")})</span></div>` +
    MEASUREMENT_TYPES.map(
      (tp) =>
        `<div class="measure-legend-row"><span class="measure-swatch" style="background:${tp.color}"></span><span class="measure-code">${tp.code}</span><span>${t("measure." + tp.id)}</span></div>`,
    ).join("") +
    `<div class="measure-legend-group">${t("measure.obstacleTitle")}</div>` +
    OBSTACLE_TYPES.map(
      (tp) =>
        `<div class="measure-legend-row"><span class="measure-swatch" style="background:${tp.color}"></span><span class="measure-code">${tp.code}</span><span>${t("measure." + tp.id)}</span></div>`,
    ).join("");

  // Obstacle type buttons
  const obsTypesContainer = document.getElementById("obstacleTypes");
  obsTypesContainer.innerHTML = OBSTACLE_TYPES.map(
    (tp) => `
    <button
      type="button"
      class="measure-type-btn${tp.id === state.obstacleActiveType ? " active" : ""}"
      data-obstacle-type="${tp.id}"
      style="--tcolor:${tp.color}"
    >
      <span class="measure-swatch" style="background:${tp.color}"></span>
      <span class="measure-code">${tp.code}</span>
      <span class="measure-type-name">${t("measure." + tp.id)}</span>
    </button>`,
  ).join("");
  obsTypesContainer
    .querySelectorAll(".measure-type-btn")
    .forEach((btn) => {
      btn.addEventListener("click", () =>
        setObstacleActiveType(btn.dataset.obstacleType),
      );
    });
  document.getElementById("obstacleHeading").textContent =
    t("measure.obstacleTitle");

  // Add-obstacle toggle button
  const addBtn = document.getElementById("addObstacleBtn");
  addBtn.classList.toggle("active", state.addObstacleMode);
  addBtn.textContent = (state.addObstacleMode ? "✓ " : "＋ ") + t("measure.addObstacle");

  // Status hint
  const statusEl = document.getElementById("measureStatus");
  if (state.addObstacleMode) {
    statusEl.textContent = state.obstacleDraftStart
      ? t("measure.obstacleSecondCorner")
      : t("measure.obstacleFirstCorner");
  } else if (state.measureDraftStart) {
    const end = state.measureDraftEnd || state.measureDraftStart;
    const cm = measurementStrokeCm(
      state.measureDraftStart.x,
      state.measureDraftStart.y,
      end.x,
      end.y,
    );
    statusEl.textContent =
      t("measure.readyForSecond") +
      `  →  ${formatLength(cm)}`;
  } else {
    statusEl.textContent = t("measure.firstPoint");
  }

  renderMeasureList();
  renderObstacleList();
}

// Render the measurement list
function renderMeasureList() {
  const list = document.getElementById("measureList");
  if (!list) return;

  if (state.measurements.length === 0) {
    list.innerHTML = `<div class="measure-empty">${t("measure.noMeasurements")}</div>`;
    return;
  }

  list.innerHTML = state.measurements
    .map((m, i) => {
      const tp = getMeasureType(m.type) || getMeasureType("other");
      const cm = measurementStrokeCm(m.x1, m.y1, m.x2, m.y2);
      const selected = state.selectedMeasurement === m ? " selected" : "";
      return `
      <div class="measure-item${selected}" data-mid="${m.id}">
        <div class="measure-item-head">
          <span class="measure-swatch" style="background:${tp.color}"></span>
          <span class="measure-code">${tp.code}</span>
          <span class="measure-item-label">${i + 1}. ${t("measure." + m.type)}</span>
          <span class="measure-item-dist">${formatLength(cm)}</span>
        </div>
        <div class="measure-item-controls">
          <label class="measure-item-val">${t("measure.valueLabel")}:
            <input type="number" step="1" min="1" value="${Math.round(cm)}" data-attach="${m.id}" aria-label="length" />
          </label>
          <button class="measure-ref-btn" data-id="${m.id}" title="${t("measure.setAsScale")}">⚑</button>
          <button class="measure-del-btn" data-id="${m.id}" aria-label="${t("measure.delete")}">🗑</button>
        </div>
      </div>`;
    })
    .join("");

  list.querySelectorAll(".measure-item").forEach((item) => {
    item.addEventListener("click", (e) => {
      if (e.target.closest("button")) return;
      if (e.target.tagName === "INPUT") return;
      const mid = item.dataset.mid;
      const m = state.measurements.find((mm) => mm.id === mid);
      if (m) {
        state.selectedMeasurement = m;
        renderMeasureList();
        render();
      }
    });
  });

  list.querySelectorAll(".measure-ref-btn").forEach((btn) => {
    btn.addEventListener("click", () => setMeasurementAsScale(btn.dataset.id));
  });

  list.querySelectorAll(".measure-del-btn").forEach((btn) => {
    btn.addEventListener("click", () => deleteMeasurement(btn.dataset.id));
  });
}

// Ensure the correct sidebar section is visible
function updateSidebarPanels() {
  const listSection = document.querySelector(".section");
  const propsPanel = document.getElementById("selectedFurniturePanel");
  const measurePanel = document.getElementById("measurePanel");

  if (state.measureMode) {
    listSection.style.display = "none";
    propsPanel.style.display = "none";
    measurePanel.style.display = "block";
  } else if (state.selectedFurniture) {
    listSection.style.display = "none";
    propsPanel.style.display = "block";
    measurePanel.style.display = "none";
  } else {
    listSection.style.display = "block";
    propsPanel.style.display = "none";
    measurePanel.style.display = "none";
  }
}

// Draw a subtle construction grid (for from-scratch Grundrisse)
function drawMeasureGrid(targetCtx, t) {
  const ppm = state.pixelsPerMeter || DEFAULT_MEASURE_SCALE;
  const step = (50 / 100) * ppm; // 50 cm grid
  if (step < 8) return;

  targetCtx.save();
  targetCtx.lineWidth = 1;

  for (let gx = Math.ceil(t.x0 / step) * step; gx <= t.x1; gx += step) {
    targetCtx.strokeStyle =
      Math.round(gx / step) % 2 === 0
        ? "rgba(0, 0, 0, 0.10)"
        : "rgba(0, 0, 0, 0.05)";
    targetCtx.beginPath();
    targetCtx.moveTo(gx, t.y0);
    targetCtx.lineTo(gx, t.y1);
    targetCtx.stroke();
  }
  for (let gy = Math.ceil(t.y0 / step) * step; gy <= t.y1; gy += step) {
    targetCtx.strokeStyle =
      Math.round(gy / step) % 2 === 0
        ? "rgba(0, 0, 0, 0.10)"
        : "rgba(0, 0, 0, 0.05)";
    targetCtx.beginPath();
    targetCtx.moveTo(t.x0, gy);
    targetCtx.lineTo(t.x1, gy);
    targetCtx.stroke();
  }
  targetCtx.restore();
}

// Draw all measurements (and the draft while measuring)
function drawMeasurementsLayer(targetCtx) {
  state.measurements.forEach((m) => drawMeasurement(m, targetCtx, 1, 0, 0));
  if (state.measureMode && state.measureDraftStart) {
    const end = state.measureDraftEnd || state.measureDraftStart;
    drawMeasurementDraft(targetCtx, state.measureDraftStart, end);
  }
}

// Draw the drafting preview line while placing a measurement
function drawMeasurementDraft(targetCtx, a, b) {
  const tp = getMeasureType(state.measureActiveType) || getMeasureType("other");
  const cm = measurementStrokeCm(a.x, a.y, b.x, b.y);
  const label = `${tp.code} ${formatLength(cm)}`;

  targetCtx.save();
  targetCtx.setLineDash([6, 4]);
  targetCtx.strokeStyle = tp.color;
  targetCtx.lineWidth = 1.6;
  targetCtx.beginPath();
  targetCtx.moveTo(a.x, a.y);
  targetCtx.lineTo(b.x, b.y);
  targetCtx.stroke();
  targetCtx.setLineDash([]);

  targetCtx.fillStyle = tp.color;
  targetCtx.beginPath();
  targetCtx.arc(a.x, a.y, 4, 0, Math.PI * 2);
  targetCtx.fill();
  targetCtx.beginPath();
  targetCtx.arc(b.x, b.y, 4, 0, Math.PI * 2);
  targetCtx.fill();

  targetCtx.font = "bold 13px sans-serif";
  targetCtx.textAlign = "center";
  targetCtx.textBaseline = "middle";
  const midX = (a.x + b.x) / 2;
  const midY = (a.y + b.y) / 2;
  const tw = targetCtx.measureText(label).width;
  targetCtx.fillStyle = "rgba(255, 255, 255, 0.85)";
  targetCtx.fillRect(midX - tw / 2 - 4, midY - 18, tw + 8, 20);
  targetCtx.fillStyle = tp.color;
  targetCtx.fillText(label, midX, midY - 8);
  targetCtx.restore();
}

// Draw a single measurement as a CAD-style dimension
function drawMeasurement(m, targetCtx, s, ox, oy) {
  const tp = getMeasureType(m.type) || getMeasureType("other");
  const selected = state.selectedMeasurement === m;
  const color = selected ? "#FF1493" : tp.color;

  const x1 = m.x1 * s + ox;
  const y1 = m.y1 * s + oy;
  const x2 = m.x2 * s + ox;
  const y2 = m.y2 * s + oy;
  const dx = x2 - x1;
  const dy = y2 - y1;
  const len = Math.hypot(dx, dy);
  if (len < 1e-6) return;

  const ux = dx / len;
  const uy = dy / len;
  const px = -uy;
  const py = ux;
  const off = MEASURE_DIM_OFFSET * s;
  const ext = MEASURE_EXT_LEN * s;
  const lw = (selected ? 2.2 : 1.5) * s;
  const arrowLen = 7 * s;

  targetCtx.save();

  // Wall trace (thick line along the wall for room outlines)
  if (tp.id === "wall") {
    targetCtx.strokeStyle = "#2c3e50";
    targetCtx.lineWidth = 5 * s;
    targetCtx.lineCap = "round";
    targetCtx.beginPath();
    targetCtx.moveTo(x1, y1);
    targetCtx.lineTo(x2, y2);
    targetCtx.stroke();
  }

  // Extension ticks
  targetCtx.strokeStyle = color;
  targetCtx.lineWidth = lw;
  [
    [x1, y1],
    [x2, y2],
  ].forEach((p) => {
    const ex1x = p[0] + px * (off - ext);
    const ex1y = p[1] + py * (off - ext);
    const ex2x = p[0] + px * (off + ext * 0.8);
    const ex2y = p[1] + py * (off + ext * 0.8);
    targetCtx.beginPath();
    targetCtx.moveTo(ex1x, ex1y);
    targetCtx.lineTo(ex2x, ex2y);
    targetCtx.stroke();
  });

  // Dimension line (offset from the measured segment)
  const ax1 = x1 + px * off;
  const ay1 = y1 + py * off;
  const ax2 = x2 + px * off;
  const ay2 = y2 + py * off;
  targetCtx.beginPath();
  targetCtx.moveTo(ax1, ay1);
  targetCtx.lineTo(ax2, ay2);
  targetCtx.stroke();

  // Arrowheads pointing inward
  drawArrowTip(targetCtx, ax1, ay1, ax2, ay2, arrowLen, color);
  drawArrowTip(targetCtx, ax2, ay2, ax1, ay1, arrowLen, color);

  // Endpoint markers
  targetCtx.fillStyle = color;
  [
    [x1, y1],
    [x2, y2],
  ].forEach((p) => {
    targetCtx.beginPath();
    targetCtx.arc(p[0], p[1], 3.2 * s, 0, Math.PI * 2);
    targetCtx.fill();
  });

  // Label with white halo
  const label = `${tp.code} ${formatLength(measurementStrokeCm(m.x1, m.y1, m.x2, m.y2))}`;
  targetCtx.font = `bold ${Math.max(11, 13 * s)}px sans-serif`;
  targetCtx.textAlign = "center";
  targetCtx.textBaseline = "middle";
  const midX = (ax1 + ax2) / 2;
  const midY = (ay1 + ay2) / 2;
  const labelY = midY - 7 * s;
  const tw = targetCtx.measureText(label).width;
  targetCtx.fillStyle = "rgba(255, 255, 255, 0.85)";
  targetCtx.fillRect(midX - tw / 2 - 4 * s, labelY - 9 * s, tw + 8 * s, 18 * s);
  targetCtx.fillStyle = color;
  targetCtx.fillText(label, midX, labelY);

  targetCtx.restore();
}

// Draw a filled arrowhead pointing from tip toward the target point
function drawArrowTip(targetCtx, tipX, tipY, towardX, towardY, size, color) {
  const dx = towardX - tipX;
  const dy = towardY - tipY;
  const len = Math.hypot(dx, dy) || 1;
  const ux = dx / len;
  const uy = dy / len;
  const px = -uy;
  const py = ux;
  targetCtx.fillStyle = color;
  targetCtx.beginPath();
  targetCtx.moveTo(tipX, tipY);
  targetCtx.lineTo(
    tipX - ux * size + px * size * 0.45,
    tipY - uy * size + py * size * 0.45,
  );
  targetCtx.lineTo(
    tipX - ux * size - px * size * 0.45,
    tipY - uy * size - py * size * 0.45,
  );
  targetCtx.closePath();
  targetCtx.fill();
}

// ========== FIXED INSTALLATIONS / OBSTRUCTIONS ==========

function escapeHtml(str) {
  return String(str).replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        c
      ],
  );
}

function getObstacleType(typeId) {
  return OBSTACLE_TYPES.find((tp) => tp.id === typeId);
}

function setObstacleActiveType(typeId) {
  if (!getObstacleType(typeId)) return;
  state.obstacleActiveType = typeId;
  renderMeasurePanel();
}

function toggleAddObstacleMode() {
  if (state.addObstacleMode) {
    exitAddObstacleMode();
  } else {
    startAddObstacleMode();
  }
}

function startAddObstacleMode() {
  state.addObstacleMode = true;
  state.obstacleDraftStart = null;
  state.obstacleDraftEnd = null;
  // cancel any pending measurement draft so modes don't mix
  state.measureDraftStart = null;
  state.measureDraftEnd = null;
  state.selectedMeasurement = null;
  state.selectedObstacle = null;
  canvas.style.cursor = "crosshair";
  renderMeasurePanel();
  render();
}

function exitAddObstacleMode() {
  state.addObstacleMode = false;
  state.obstacleDraftStart = null;
  state.obstacleDraftEnd = null;
  canvas.style.cursor = "crosshair";
  renderMeasurePanel();
  render();
}

function cancelObstacleDraft() {
  state.obstacleDraftStart = null;
  state.obstacleDraftEnd = null;
  renderMeasurePanel();
  render();
}

// Add a rectangular obstacle from two diagonal corner points
function addObstacle(type, x1, y1, x2, y2) {
  const w = Math.abs(x2 - x1);
  const h = Math.abs(y2 - y1);
  if (w < 3 || h < 3) return null;
  if (!getObstacleType(type)) type = DEFAULT_OBSTACLE_TYPE;
  pushUndoState();
  const obstacle = {
    id: Date.now() + "_" + Math.random().toString(36).slice(2, 7),
    type,
    x: (x1 + x2) / 2,
    y: (y1 + y2) / 2,
    widthPx: w,
    heightPx: h,
    name: t("measure." + type),
  };
  state.obstacles.push(obstacle);
  state.selectedObstacle = obstacle;
  markChanges();
  saveProject();
  renderMeasurePanel();
  render();
  return obstacle;
}

function hitTestObstacle(x, y) {
  for (const ob of state.obstacles) {
    const w = ob.widthPx / 2;
    const h = ob.heightPx / 2;
    if (Math.abs(x - ob.x) <= w && Math.abs(y - ob.y) <= h) return ob;
  }
  return null;
}

function deleteObstacle(id) {
  const index = state.obstacles.findIndex((o) => o.id === id);
  if (index < 0) return;
  if (!confirm(t("measure.obstacleDeleteConfirm"))) return;
  pushUndoState();
  state.obstacles.splice(index, 1);
  if (state.selectedObstacle && state.selectedObstacle.id === id) {
    state.selectedObstacle = null;
  }
  markChanges();
  saveProject();
  renderMeasurePanel();
  render();
}

function clearObstacles() {
  if (!state.obstacles.length) return;
  if (!confirm(t("measure.obstacleClearConfirm"))) return;
  pushUndoState();
  state.obstacles = [];
  state.selectedObstacle = null;
  markChanges();
  saveProject();
  renderMeasurePanel();
  render();
}

// Update a single property (name / width-cm / depth-cm) of an obstacle
function updateObstacleField(id, field, value) {
  const ob = state.obstacles.find((o) => o.id === id);
  if (!ob) return;
  const ppm = state.pixelsPerMeter || DEFAULT_MEASURE_SCALE;
  let changed = false;
  if (field === "name") {
    ob.name = value;
    changed = true;
  } else {
    const cm = parseFloat(value);
    if (Number.isFinite(cm) && cm > 0) {
      if (field === "width") {
        ob.widthPx = (cm / 100) * ppm;
      } else if (field === "depth") {
        ob.heightPx = (cm / 100) * ppm;
      }
      changed = true;
    }
  }
  if (!changed) return;
  markChanges();
  saveProject();
  renderMeasurePanel();
  render();
}

function renderObstacleList() {
  const list = document.getElementById("obstacleList");
  if (!list) return;
  if (!state.obstacles.length) {
    list.innerHTML = "";
    return;
  }
  const ppm = state.pixelsPerMeter || DEFAULT_MEASURE_SCALE;
  list.innerHTML = state.obstacles
    .map((ob, i) => {
      const tp = getObstacleType(ob.type) || getObstacleType(DEFAULT_OBSTACLE_TYPE);
      const selected = state.selectedObstacle === ob ? " selected" : "";
      const wCm = Math.round(ob.widthPx / (ppm / 100));
      const hCm = Math.round(ob.heightPx / (ppm / 100));
      return `
      <div class="obstacle-item${selected}" data-obsid="${ob.id}" role="listitem">
        <div class="obstacle-item-head">
          <span class="measure-swatch" style="background:${tp.color}"></span>
          <span class="measure-code">${tp.code}</span>
          <span class="obstacle-item-name">${i + 1}. ${escapeHtml(ob.name || t("measure." + ob.type))}</span>
          <button class="obstacle-del-btn" data-id="${ob.id}" aria-label="${t("measure.delete")}">🗑</button>
        </div>
        <div class="obstacle-item-controls">
          <label>${t("measure.obstacleWidth")}</label>
          <input type="number" step="1" min="1" value="${wCm}" data-obsf="width" data-id="${ob.id}" aria-label="${t("measure.obstacleWidth")}" />
          <label>${t("measure.obstacleDepth")}</label>
          <input type="number" step="1" min="1" value="${hCm}" data-obsf="depth" data-id="${ob.id}" aria-label="${t("measure.obstacleDepth")}" />
        </div>
        <div class="obstacle-item-name-field">
          <span>${t("measure.obstacleName")}</span>
          <input type="text" value="${escapeHtml(ob.name || "")}" data-obsf="name" data-id="${ob.id}" aria-label="${t("measure.obstacleName")}" />
        </div>
      </div>`;
    })
    .join("");

  list.querySelectorAll(".obstacle-item").forEach((row) => {
    const id = row.getAttribute("data-obsid");
    row.addEventListener("click", (ev) => {
      if (ev.target.closest("input") || ev.target.closest("button")) return;
      const ob = state.obstacles.find((o) => o.id === id);
      if (!ob) return;
      state.selectedObstacle = ob;
      state.selectedMeasurement = null;
      renderMeasurePanel();
      render();
    });
  });
  list.querySelectorAll(".obstacle-del-btn").forEach((btn) => {
    btn.addEventListener("click", (ev) => {
      ev.stopPropagation();
      deleteObstacle(btn.getAttribute("data-id"));
    });
  });
  list.querySelectorAll("input[data-obsf]").forEach((inp) => {
    inp.addEventListener("change", () => {
      updateObstacleField(
        inp.getAttribute("data-id"),
        inp.getAttribute("data-obsf"),
        inp.value,
      );
    });
  });
}

// Draw all fixed installations on the given context (world-space, unrotated)
function drawObstaclesLayer(targetCtx) {
  state.obstacles.forEach((ob) => drawObstacle(ob, targetCtx, 1, 0, 0));
  if (state.measureMode && state.addObstacleMode && state.obstacleDraftStart) {
    const end = state.obstacleDraftEnd || state.obstacleDraftStart;
    drawObstacleDraft(targetCtx, state.obstacleDraftStart, end);
  }
}

function drawObstacle(ob, targetCtx, s, ox, oy) {
  const tp = getObstacleType(ob.type) || getObstacleType(DEFAULT_OBSTACLE_TYPE);
  const selected = state.selectedObstacle === ob;
  const x = ob.x * s + ox;
  const y = ob.y * s + oy;
  const w = ob.widthPx * s;
  const h = ob.heightPx * s;
  const left = x - w / 2;
  const top = y - h / 2;
  const lineColor = selected ? "#FF1493" : tp.color;
  const ppm = state.pixelsPerMeter || DEFAULT_MEASURE_SCALE;
  const wCm = Math.round(ob.widthPx / (ppm / 100));
  const hCm = Math.round(ob.heightPx / (ppm / 100));
  const label = ob.name || t("measure." + ob.type);

  targetCtx.save();

  // translucent fill
  targetCtx.fillStyle = lineColor;
  targetCtx.globalAlpha = 0.25;
  targetCtx.fillRect(left, top, w, h);
  targetCtx.globalAlpha = 1;

  // diagonal hatch to signal "occupies space"
  targetCtx.strokeStyle = lineColor;
  targetCtx.globalAlpha = 0.7;
  targetCtx.lineWidth = 1 * s;
  const step = Math.max(9 * s, 6);
  for (let lx = left - h; lx < left + w + step; lx += step) {
    targetCtx.beginPath();
    targetCtx.moveTo(lx, top + h);
    targetCtx.lineTo(lx + h, top);
    targetCtx.stroke();
  }
  targetCtx.globalAlpha = 1;

  // border
  targetCtx.lineWidth = (selected ? 2.5 : 1.8) * s;
  targetCtx.strokeRect(left, top, w, h);

  // corner markers when selected
  if (selected) {
    targetCtx.fillStyle = "#FF1493";
    const cs = 5 * s;
    [
      [left, top],
      [left + w, top],
      [left, top + h],
      [left + w, top + h],
    ].forEach(([cx, cy]) =>
      targetCtx.fillRect(cx - cs / 2, cy - cs / 2, cs, cs),
    );
  }

  // centered name label
  targetCtx.textAlign = "center";
  targetCtx.textBaseline = "middle";
  targetCtx.font = `bold ${Math.max(10, 12 * s)}px sans-serif`;
  const tw = targetCtx.measureText(label).width;
  const cy = top + h / 2;
  targetCtx.fillStyle = "rgba(255,255,255,0.9)";
  targetCtx.fillRect(x - tw / 2 - 3 * s, cy - 8 * s, tw + 6 * s, 16 * s);
  targetCtx.fillStyle = "#2c3e50";
  targetCtx.fillText(label, x, cy);

  // width dimension above the obstacle
  const wText = wCm + " cm";
  targetCtx.font = `bold ${Math.max(10, 11 * s)}px sans-serif`;
  const wt = targetCtx.measureText(wText).width;
  targetCtx.fillStyle = "rgba(255,255,255,0.9)";
  targetCtx.fillRect(x - wt / 2 - 2 * s, top - 12 * s, wt + 4 * s, 13 * s);
  targetCtx.fillStyle = "#2c3e50";
  targetCtx.fillText(wText, x, top - 5 * s);

  // depth dimension on the right side (rotated)
  const hText = hCm + " cm";
  targetCtx.save();
  targetCtx.translate(left + w + 11 * s, cy);
  targetCtx.rotate(Math.PI / 2);
  const ht = targetCtx.measureText(hText).width;
  targetCtx.fillStyle = "rgba(255,255,255,0.9)";
  targetCtx.fillRect(-ht / 2 - 2 * s, -6.5 * s, ht + 4 * s, 13 * s);
  targetCtx.fillStyle = "#2c3e50";
  targetCtx.fillText(hText, 0, 0);
  targetCtx.restore();

  targetCtx.restore();
}

// Live ghost while dragging the second corner of an obstacle
function drawObstacleDraft(targetCtx, a, b) {
  const tp =
    getObstacleType(state.obstacleActiveType) || getObstacleType(DEFAULT_OBSTACLE_TYPE);
  const left = Math.min(a.x, b.x);
  const top = Math.min(a.y, b.y);
  const w = Math.abs(b.x - a.x);
  const h = Math.abs(b.y - a.y);
  const ppm = state.pixelsPerMeter || DEFAULT_MEASURE_SCALE;
  const wCm = Math.round(w / (ppm / 100));
  const hCm = Math.round(h / (ppm / 100));

  targetCtx.save();
  targetCtx.setLineDash([6, 4]);
  targetCtx.strokeStyle = tp.color;
  targetCtx.lineWidth = 1.8;
  targetCtx.strokeRect(left, top, w, h);
  targetCtx.setLineDash([]);

  // first corner marker + live size label
  targetCtx.fillStyle = tp.color;
  targetCtx.beginPath();
  targetCtx.arc(a.x, a.y, 4, 0, Math.PI * 2);
  targetCtx.fill();

  const label = `${tp.code} ${wCm} × ${hCm} cm`;
  targetCtx.font = "bold 13px sans-serif";
  targetCtx.textAlign = "center";
  targetCtx.textBaseline = "middle";
  const midX = left + w / 2;
  const labelY = top - 14;
  const tw = targetCtx.measureText(label).width;
  targetCtx.fillStyle = "rgba(255,255,255,0.9)";
  targetCtx.fillRect(midX - tw / 2 - 4, labelY - 9, tw + 8, 18);
  targetCtx.fillStyle = tp.color;
  targetCtx.fillText(label, midX, labelY);
  targetCtx.restore();
}

// Export the floor plan + measurements + legend as a PNG image
function exportMeasurementImage() {
  const hasPlan = !!state.floorPlanImage;
  if (
    !hasPlan &&
    state.measurements.length === 0 &&
    state.obstacles.length === 0
  ) {
    alert(t("measure.noDataToExport"));
    return;
  }

  let bx1 = Infinity;
  let by1 = Infinity;
  let bx2 = -Infinity;
  let by2 = -Infinity;
  state.measurements.forEach((m) => {
    bx1 = Math.min(bx1, m.x1);
    by1 = Math.min(by1, m.y1);
    bx2 = Math.max(bx2, m.x2);
    by2 = Math.max(by2, m.y2);
  });
  state.obstacles.forEach((ob) => {
    bx1 = Math.min(bx1, ob.x - ob.widthPx / 2);
    by1 = Math.min(by1, ob.y - ob.heightPx / 2);
    bx2 = Math.max(bx2, ob.x + ob.widthPx / 2);
    by2 = Math.max(by2, ob.y + ob.heightPx / 2);
  });
  if (hasPlan) {
    bx1 = Math.min(bx1, 0);
    by1 = Math.min(by1, 0);
    bx2 = Math.max(bx2, state.floorPlanImage.width);
    by2 = Math.max(by2, state.floorPlanImage.height);
  }
  if (!Number.isFinite(bx1)) return;

  const pad = 60;
  const bw = bx2 - bx1;
  const bh = by2 - by1;
  const scale = Math.min(1, 3800 / Math.max(bw, bh, 1));

  // Legend band
  const legendRowH = 22;
  const obstacleRows = OBSTACLE_TYPES.length;
  const legendH =
    24 +
    legendRowH * MEASUREMENT_TYPES.length +
    18 +
    legendRowH * obstacleRows +
    12;

  const W = Math.max(2, Math.ceil((bw + pad * 2) * scale));
  const H = Math.max(2, Math.ceil((bh + pad * 2) * scale) + Math.ceil(legendH));

  const exportCanvas = document.createElement("canvas");
  exportCanvas.width = W;
  exportCanvas.height = H;
  const octx = exportCanvas.getContext("2d");

  octx.fillStyle = "#ffffff";
  octx.fillRect(0, 0, W, H);

  octx.save();
  octx.scale(scale, scale);
  octx.translate(pad - bx1, pad - by1);

  if (!hasPlan) {
    drawMeasureGrid(octx, {
      s: 1,
      ox: 0,
      oy: 0,
      x0: bx1 - pad,
      y0: by1 - pad,
      x1: bx2 + pad,
      y1: by2 + pad,
    });
  } else {
    octx.drawImage(state.floorPlanImage, 0, 0);
  }
  state.obstacles.forEach((ob) => drawObstacle(ob, octx, 1, 0, 0));
  state.measurements.forEach((m) => drawMeasurement(m, octx, 1, 0, 0));
  octx.restore();

  // Caption bar with project and scale info
  const ppm = state.pixelsPerMeter || DEFAULT_MEASURE_SCALE;
  octx.fillStyle = "#2c3e50";
  octx.font = "bold 14px sans-serif";
  octx.textAlign = "left";
  octx.textBaseline = "alphabetic";
  octx.fillText(
    `${state.projectName}  ·  ${Math.round(ppm)} px/m  ·  ${t("measure.legendUnit")}`,
    12,
    18,
  );

  // Legend band at the bottom
  const ly = H - legendH;
  octx.fillStyle = "rgba(236, 240, 241, 0.92)";
  octx.fillRect(0, ly, W, legendH);
  octx.strokeStyle = "#bdc3c7";
  octx.strokeRect(0.5, ly + 0.5, W - 1, legendH - 1);

  octx.fillStyle = "#2c3e50";
  octx.font = "bold 13px sans-serif";
  octx.fillText(
    `${t("measure.legendTitle")}  —  ${t("measure.legendUnit")}`,
    12,
    ly + 16,
  );

  MEASUREMENT_TYPES.forEach((tp, i) => {
    const yy = ly + 30 + i * legendRowH + 8;
    octx.fillStyle = tp.color;
    octx.fillRect(14, yy - 9, 12, 12);
    octx.fillStyle = "#2c3e50";
    octx.font = "12px sans-serif";
    octx.fillText(`${tp.code}  =  ${t("measure." + tp.id)}`, 34, yy);
  });

  // Separator + fixed-installation legend entries
  const obsTitleY = ly + 30 + MEASUREMENT_TYPES.length * legendRowH + 2;
  octx.fillStyle = "#7f8c8d";
  octx.font = "bold 11px sans-serif";
  octx.fillText(t("measure.obstacleTitle"), 12, obsTitleY + 4);
  OBSTACLE_TYPES.forEach((tp, i) => {
    const yy =
      ly + 30 + (MEASUREMENT_TYPES.length + 1) * legendRowH + i * legendRowH + 8;
    octx.fillStyle = tp.color;
    octx.fillRect(14, yy - 9, 12, 12);
    octx.strokeStyle = "rgba(44,62,80,0.4)";
    octx.lineWidth = 1;
    octx.strokeRect(14, yy - 9, 12, 12);
    octx.fillStyle = "#2c3e50";
    octx.font = "12px sans-serif";
    octx.fillText(`${tp.code}  =  ${t("measure." + tp.id)}`, 34, yy);
  });

  const dateStr = new Date().toLocaleString(getCurrentLocale(), {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });
  octx.fillStyle = "#7f8c8d";
  octx.font = "10px sans-serif";
  octx.textAlign = "right";
  octx.fillText(dateStr, W - 8, H - 6);

  exportCanvas.toBlob((blob) => {
    if (!blob) return;
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `Maßplan-${state.projectName.replace(/[^\w\-]+/g, "_")}.png`;
    a.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }, "image/png");
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
        alert(t("messages.pdfRenderError"));
      };
      img.src = dataUrl;
    } catch (error) {
      console.error("PDF processing error:", error);
      let errorMessage = t("messages.pdfProcessError");

      if (error.message.includes("Invalid PDF")) {
        errorMessage += t("messages.invalidPdf");
      } else if (error.message.includes("password")) {
        errorMessage += t("messages.passwordProtectedPdf");
      } else {
        errorMessage += error.message;
      }

      alert(errorMessage + "\n\n" + t("messages.tryAnotherFile"));
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
      alert(t("messages.imageLoadError"));
    };
    img.src = event.target.result;
    state.floorPlan = event.target.result;
  };
  reader.onerror = () => {
    console.error("FileReader error");
    alert(t("messages.fileReadError"));
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
    // Use translation if available, otherwise use the name from library
    const furnitureName =
      typeof t === "function" ? t(`furniture.${furniture.id}`) : furniture.name;
    div.innerHTML = `
            <h4>${furnitureName}</h4>
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

  // Use translation for furniture name if available
  const furnitureName =
    typeof t === "function" ? t(`furniture.${template.id}`) : template.name;

  const furniture = {
    id: Date.now(),
    templateId: template.id,
    name: furnitureName,
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
    if (state.measureMode) {
      // Show a construction grid for from-scratch Grundrisse
      drawMeasureGrid(ctx, {
        s: 1,
        ox: 0,
        oy: 0,
        x0: -2000,
        y0: -2000,
        x1: 20000,
        y1: 20000,
      });
    } else {
      ctx.fillStyle = "#999";
      ctx.font = "20px sans-serif";
      ctx.textAlign = "center";
      ctx.fillText("Grundriss hochladen", canvas.width / 2, canvas.height / 2);
    }
  }

  // Draw furniture (hidden while the measurement tool is active)
  if (!state.measureMode) {
    state.furniture.forEach((furniture) => {
      drawFurniture(furniture);
    });
  }

  // Draw fixed installations (heaters, built-ins, …)
  drawObstaclesLayer(ctx);

  // Draw measurements
  drawMeasurementsLayer(ctx);

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

  // Handle measurement mode
  if (state.measureMode) {
    // Middle mouse or Shift-click pans in measure mode
    if (e.button === 1 || e.shiftKey) {
      state.isPanning = true;
      state.panStart = { x: e.clientX - state.pan.x, y: e.clientY - state.pan.y };
      return;
    }

    // Placing a fixed installation: two diagonal corners
    if (state.addObstacleMode) {
      if (!state.obstacleDraftStart) {
        state.obstacleDraftStart = { x, y };
        state.obstacleDraftEnd = null;
        state.selectedObstacle = null;
      } else {
        addObstacle(
          state.obstacleActiveType,
          state.obstacleDraftStart.x,
          state.obstacleDraftStart.y,
          x,
          y,
        );
      }
      renderMeasurePanel();
      render();
      return;
    }

    // Click an existing obstacle to select it
    const hitOb = hitTestObstacle(x, y);
    if (hitOb) {
      state.selectedObstacle = hitOb;
      state.selectedMeasurement = null;
      renderMeasurePanel();
      render();
      return;
    }

    // Click an existing measurement to select it
    const hit = hitTestMeasurement(x, y);
    if (hit) {
      state.selectedMeasurement = hit;
      state.selectedObstacle = null;
      renderMeasureList();
      render();
      return;
    }

    // Otherwise place a measurement point
    if (!state.measureDraftStart) {
      state.measureDraftStart = { x, y };
      state.measureDraftEnd = null;
      state.selectedMeasurement = null;
      state.selectedObstacle = null;
    } else {
      addMeasurement(
        state.measureActiveType,
        state.measureDraftStart.x,
        state.measureDraftStart.y,
        x,
        y,
      );
      state.measureDraftStart = null;
      state.measureDraftEnd = null;
    }
    renderMeasureList();
    render();
    return;
  }

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

  if (state.measureMode && state.addObstacleMode && state.obstacleDraftStart) {
    // Live preview of the rectangle while placing a fixed installation
    const { x, y } = screenToCanvas(e.clientX, e.clientY);
    state.obstacleDraftEnd = { x, y };
    render();
    return;
  }

  if (state.measureMode && state.measureDraftStart) {
    // Live preview while placing a measurement
    const { x, y } = screenToCanvas(e.clientX, e.clientY);
    state.measureDraftEnd = { x, y };
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
  const seatDepthLabel = document.getElementById("seatDepthLabel");
  const expandedWidthLabel = document.getElementById("expandedWidthLabel");
  const expandedDepthLabel = document.getElementById("expandedDepthLabel");

  if (state.selectedFurniture) {
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
  }

  updateSidebarPanels();
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

  // Delete key removes the selected measurement, obstacle or furniture
  if (e.key === "Delete" || e.key === "Del") {
    if (state.measureMode && state.selectedObstacle) {
      deleteObstacle(state.selectedObstacle.id);
    } else if (state.measureMode && state.selectedMeasurement) {
      deleteMeasurement(state.selectedMeasurement.id);
    } else if (state.selectedFurniture) {
      deleteFurniture();
    }
    return;
  }

  // Escape cancels a draft (measurement or fixed installation)
  if (e.key === "Escape") {
    if (state.measureMode && state.addObstacleMode && state.obstacleDraftStart) {
      cancelObstacleDraft();
    } else if (state.measureMode && state.measureDraftStart) {
      cancelMeasureDraft();
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
    measurements: state.measurements,
    obstacles: state.obstacles,
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
      alert(t("messages.storageFull"));
      // Open project list to allow deletion
      showUploadOverlay();
    } else {
      console.error("Error saving project:", e);
      alert(t("messages.projectSaveError", { error: e.message }));
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

    state.projectName = project.name || "Untitled Project";
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
        alert(t("messages.floorPlanLoadError"));
        showUploadOverlay();
      };
      img.src = project.floorPlan;
      state.floorPlan = project.floorPlan;
    }

    state.pixelsPerMeter = project.pixelsPerMeter || null;
    state.furniture = project.furniture || [];
    state.measurements = project.measurements || [];
    state.obstacles = project.obstacles || [];
    // Handle both old and new snapshot formats
    state.snapshotGraph = project.snapshotGraph || [];
    state.currentSnapshotId = project.currentSnapshotId || null;
    state.hasUnsavedChanges = false;
    state.addObstacleMode = false;
    state.obstacleDraftStart = null;
    state.obstacleDraftEnd = null;
    state.selectedObstacle = null;
    updateSnapshotUI();
    renderSnapshotGraph();
  } catch (e) {
    console.error("Error loading project:", e);
    alert(t("messages.projectLoadError", { error: e.message }));
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
  state.measurements = project.measurements || [];
  state.obstacles = project.obstacles || [];
  // Handle both old and new snapshot formats
  state.snapshotGraph = project.snapshotGraph || [];
  state.currentSnapshotId = project.currentSnapshotId || null;
  state.hasUnsavedChanges = false;
  state.addObstacleMode = false;
  state.obstacleDraftStart = null;
  state.obstacleDraftEnd = null;
  state.selectedObstacle = null;
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
  state.projectName = "Untitled Project";
  state.measurements = [];
  state.measureMode = false;
  state.measureDraftStart = null;
  state.measureDraftEnd = null;
  state.selectedMeasurement = null;
  state.obstacles = [];
  state.addObstacleMode = false;
  state.obstacleDraftStart = null;
  state.obstacleDraftEnd = null;
  state.selectedObstacle = null;
  document.getElementById("measureBtn").classList.remove("active");
  document.getElementById("measureBtn").setAttribute("aria-pressed", "false");
  canvas.style.cursor = "grab";
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
    measurements: state.measurements,
    obstacles: state.obstacles,
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
        alert(t("messages.invalidProjectFormat"));
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
      alert(t("messages.importError", { error: error.message }));
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
