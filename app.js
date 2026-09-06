// ========== CONFIGURATION CONSTANTS ==========

// UI and interaction constants
const MAX_UNDO_STACK_SIZE = 50;
const ROTATION_HANDLE_DISTANCE = 30; // Distance from furniture edge to rotation handle
const ROTATION_HANDLE_RADIUS = 8;
const ROTATION_SNAP_ANGLE = 45; // Degrees for rotation snapping
const FURNITURE_CORNER_RADIUS = 1.5; // Border radius for furniture shapes
const CROP_MIN_SIZE = 10; // Minimum crop area size in pixels
const SELECTION_CORNER_SIZE = 8; // Size of selection corner markers

// Drawing scale
const DEFAULT_MEASURE_SCALE = 100; // Default pixels per meter for from-scratch plans

// Room editor (parametric floor plans)
const ROOM_WALL_TYPES = ["top", "right", "bottom", "left"];
const ROOM_CORNERS = ["tl", "tr", "br", "bl"];
const ROOM_FIXTURE_TYPES = ["door", "window", "heater", "chimney"];
const DEFAULT_WALL_THICKNESS_CM = 15;
const DEFAULT_ROOM_WIDTH_CM = 400;
const DEFAULT_ROOM_DEPTH_CM = 350;
const ROOM_SNAP_TOLERANCE_CM = 30;
const ROOM_DOOR_SNAP_TOLERANCE_CM = 60;
const ROOM_WALL_COLOR = "#34495e";
const ROOM_BG = "#fafafa";
const ROOM_COLORS = {
  door: "#2980b9",
  window: "#f39c12",
  heater: "#e74c3c",
  chimney: "#6c5ce7",
};

// Colors for rooms connected door-to-door: each connection gets its own color
// from this palette so both doors of a snapped pair are easy to match by eye.
const SNAPPED_DOOR_COLORS = [
  "#ef476f",
  "#2a9d8f",
  "#e9c46a",
  "#6d597a",
  "#3d5a80",
  "#ee6c4d",
  "#8338ec",
  "#0e7490",
];

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
  // Room editor (parametric floor plans)
  roomEditorMode: false,
  rooms: [],
  wallThicknessCm: DEFAULT_WALL_THICKNESS_CM,
  selectedRoomId: null,
  selectedWall: null,
  selectedFixtureId: null,
  draggingRoomId: null,
  roomDragGrab: null,
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

// Capture the current editable state for undo/redo snapshots
function snapshotCurrentState() {
  return {
    furniture: JSON.parse(JSON.stringify(state.furniture)),
    rooms: JSON.parse(JSON.stringify(state.rooms)),
    wallThicknessCm: state.wallThicknessCm,
    selectedFurniture: state.selectedFurniture
      ? state.furniture.indexOf(state.selectedFurniture)
      : null,
    selectedRoomId: state.selectedRoomId,
  };
}

// Restore a snapshot captured by snapshotCurrentState
function restoreSnapshot(snapshot) {
  state.furniture = JSON.parse(JSON.stringify(snapshot.furniture));
  state.rooms = JSON.parse(JSON.stringify(snapshot.rooms || []));
  state.wallThicknessCm = snapshot.wallThicknessCm || DEFAULT_WALL_THICKNESS_CM;

  if (
    snapshot.selectedFurniture !== null &&
    snapshot.selectedFurniture < state.furniture.length
  ) {
    state.selectedFurniture = state.furniture[snapshot.selectedFurniture];
  } else {
    state.selectedFurniture = null;
  }

  state.selectedRoomId =
    snapshot.selectedRoomId && state.rooms.some((r) => r.id === snapshot.selectedRoomId)
      ? snapshot.selectedRoomId
      : null;
  state.selectedFixtureId = null;
}

// Push current state to undo stack (before making changes)
function pushUndoState() {
  state.undoStack.push(snapshotCurrentState());

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
  state.redoStack.push(snapshotCurrentState());

  // Pop state from undo stack and restore it
  restoreSnapshot(state.undoStack.pop());

  updateSelectedFurniturePanel();
  updateUndoRedoButtons();
  if (state.roomEditorMode) {
    renderRoomPanel();
  }
  markChanges();
  render();
  saveProject();
}

// Redo the last undone action
function redo() {
  if (state.redoStack.length === 0) return;

  // Push current state to undo stack
  state.undoStack.push(snapshotCurrentState());

  // Pop state from redo stack and restore it
  restoreSnapshot(state.redoStack.pop());

  updateSelectedFurniturePanel();
  updateUndoRedoButtons();
  if (state.roomEditorMode) {
    renderRoomPanel();
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

// Start a fresh blank board so a floor plan can be drawn with the room editor
function startBlankProject() {
  const nameInput = document.getElementById("projectNameInput");
  const name = (nameInput && nameInput.value.trim()) || "Untitled Project";

  state.floorPlan = null;
  state.floorPlanImage = null;
  state.furniture = [];
  state.selectedFurniture = null;
  state.rooms = [];
  state.wallThicknessCm = DEFAULT_WALL_THICKNESS_CM;
  state.pixelsPerMeter = null;
  state.projectName = name;
  state.zoom = 1;
  state.pan = { x: 0, y: 0 };
  state.undoStack = [];
  state.redoStack = [];

  // Give the canvas a blank working surface (no uploaded image)
  const wrapper = document.getElementById("canvasWrapper");
  canvas.width = wrapper.clientWidth;
  canvas.height = wrapper.clientHeight;

  // Reset overlay and UI
  hideUploadOverlay();
  updateProjectNameDisplay();
  updateScaleDisplay();
  updateUndoRedoButtons();
  updateSelectedFurniturePanel();
  saveProject();
  renderProjectList();
  render();

  // Open the room editor so the construction grid is visible immediately
  startRoomEditorMode();
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

// ========== THEME (light / dark / auto) ==========
let currentTheme = "auto";

function getResolvedTheme() {
  if (currentTheme === "auto") {
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }
  return currentTheme;
}

function getThemeCanvasColors() {
  if (getResolvedTheme() === "dark") {
    return {
      bg: "#171a1f",
      hint: "#9aa0a6",
      grid: { major: "rgba(255, 255, 255, 0.12)", minor: "rgba(255, 255, 255, 0.06)" },
    };
  }
  return {
    bg: "#f0f0f0",
    hint: "#999",
    grid: { major: "rgba(0, 0, 0, 0.10)", minor: "rgba(0, 0, 0, 0.05)" },
  };
}

function updateThemeSelector() {
  const sel = document.getElementById("themeSelector");
  if (!sel) return;
  sel.value = currentTheme;
  if (typeof t === "function") {
    sel.setAttribute("aria-label", t("ui.themeSelector"));
    for (const opt of sel.options) {
      const key = { auto: "themeAuto", light: "themeLight", dark: "themeDark" }[opt.value];
      if (key) opt.textContent = t(`ui.${key}`);
    }
  }
}

function applyTheme() {
  document.documentElement.setAttribute("data-theme", getResolvedTheme());
  updateThemeSelector();
  render();
}

function initTheme() {
  const saved = localStorage.getItem("roomer-theme");
  if (saved === "auto" || saved === "light" || saved === "dark") {
    currentTheme = saved;
  }
  applyTheme();
  const mq = window.matchMedia("(prefers-color-scheme: dark)");
  if (typeof mq.addEventListener === "function") {
    mq.addEventListener("change", () => {
      if (currentTheme === "auto") applyTheme();
    });
  }
}

function setTheme(theme) {
  if (theme !== "auto" && theme !== "light" && theme !== "dark") return;
  currentTheme = theme;
  localStorage.setItem("roomer-theme", theme);
  applyTheme();
}

// Initialize application
function init() {
  // Initialize i18n system first
  if (typeof initLanguage === "function") {
    initLanguage();
  }
  // Initialize theme (light/dark/auto)
  initTheme();

  setupEventListeners();
  renderFurnitureLibrary();
  loadProject();
  resizeCanvas();
  render();
  updateScaleDisplay();
  updateSnapshotUI();
  renderSnapshotGraph();
  updateUndoRedoButtons();

  // Show upload overlay only if there is no content at all (no floor plan,
  // no rooms, no furniture) – stored room plans must be visible right away
  if (!state.floorPlanImage && !state.rooms.length && !state.furniture.length) {
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

  // Update the room editor panel if active
  if (state.roomEditorMode) renderRoomPanel();

  // Translate the static room heading
  const roomHeading = document.getElementById("roomHeading");
  if (roomHeading && typeof t === "function") roomHeading.textContent = t("room.title");

  // Translate the theme selector labels
  updateThemeSelector();

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

  // Theme switcher
  const themeSelector = document.getElementById("themeSelector");
  if (themeSelector) {
    themeSelector.addEventListener("change", (e) => {
      setTheme(e.target.value);
    });
    if (typeof currentTheme !== "undefined") {
      themeSelector.value = currentTheme;
    }
  }

  // File upload
  document
    .getElementById("floorPlanUpload")
    .addEventListener("change", handleFloorPlanUpload);
  document.getElementById("uploadBtn").addEventListener("click", () => {
    document.getElementById("floorPlanUpload").click();
  });

  // Start a blank board to draw a floor plan from scratch
  document
    .getElementById("blankProjectBtn")
    .addEventListener("click", startBlankProject);

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

  // Room editor
  document.getElementById("roomBtn").addEventListener("click", toggleRoomEditorMode);
  const wtInput = document.getElementById("wallThickness");
  if (wtInput) wtInput.addEventListener("change", (e) => setWallThickness(e.target.value));
  const addRoomBtn = document.getElementById("addRoomBtn");
  if (addRoomBtn) addRoomBtn.addEventListener("click", addDefaultRoom);
  const exportRoomImage = document.getElementById("exportRoomImage");
  if (exportRoomImage) {
    exportRoomImage.addEventListener("click", () => {
      exportMeasurementImage();
    });
  }
  const clearRoomsBtn = document.getElementById("clearRooms");
  if (clearRoomsBtn) clearRoomsBtn.addEventListener("click", clearRooms);
  const exitRoomEditor = document.getElementById("exitRoomEditor");
  if (exitRoomEditor) exitRoomEditor.addEventListener("click", exitRoomEditorMode);

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
  hideUploadOverlay();

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

    // Adjust parametric rooms (translate by crop offset, px → cm via scale)
    if (state.rooms.length) {
      const pxScale = (state.pixelsPerMeter || DEFAULT_MEASURE_SCALE) / 100;
      state.rooms.forEach((room) => {
        room.x -= x1 / pxScale;
        room.y -= y1 / pxScale;
      });
    }

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

// Format a length in cm for display
function formatLength(cm) {
  return Math.round(cm) + " cm";
}
// Ensure the correct sidebar section is visible
function updateSidebarPanels() {
  const listSection = document.querySelector(".section");
  const propsPanel = document.getElementById("selectedFurniturePanel");
  const roomPanel = document.getElementById("roomPanel");

  if (state.roomEditorMode) {
    listSection.style.display = "none";
    propsPanel.style.display = "none";
    roomPanel.style.display = "block";
  } else if (state.selectedFurniture) {
    listSection.style.display = "none";
    propsPanel.style.display = "block";
    roomPanel.style.display = "none";
  } else {
    listSection.style.display = "block";
    propsPanel.style.display = "none";
    roomPanel.style.display = "none";
  }
}

// Draw a subtle construction grid (for from-scratch Grundrisse)
function drawMeasureGrid(targetCtx, t, gridColors) {
  const ppm = state.pixelsPerMeter || DEFAULT_MEASURE_SCALE;
  const step = (50 / 100) * ppm; // 50 cm grid
  if (step < 8) return;
  const colors = gridColors || {
    major: "rgba(0, 0, 0, 0.10)",
    minor: "rgba(0, 0, 0, 0.05)",
  };

  targetCtx.save();
  targetCtx.lineWidth = 1;

  for (let gx = Math.ceil(t.x0 / step) * step; gx <= t.x1; gx += step) {
    targetCtx.strokeStyle =
      Math.round(gx / step) % 2 === 0 ? colors.major : colors.minor;
    targetCtx.beginPath();
    targetCtx.moveTo(gx, t.y0);
    targetCtx.lineTo(gx, t.y1);
    targetCtx.stroke();
  }
  for (let gy = Math.ceil(t.y0 / step) * step; gy <= t.y1; gy += step) {
    targetCtx.strokeStyle =
      Math.round(gy / step) % 2 === 0 ? colors.major : colors.minor;
    targetCtx.beginPath();
    targetCtx.moveTo(t.x0, gy);
    targetCtx.lineTo(t.x1, gy);
    targetCtx.stroke();
  }
  targetCtx.restore();
}


// ========== ROOM EDITOR (PARAMETRIC FLOOR PLANS) ==========

function getRoom(id) {
  return state.rooms.find((r) => r.id === id);
}

function toggleRoomEditorMode() {
  if (state.roomEditorMode) {
    exitRoomEditorMode();
  } else {
    startRoomEditorMode();
  }
}

function startRoomEditorMode() {
  if (state.calibrationMode) cancelCalibration();
  if (state.cropMode) cancelCrop();

  hideUploadOverlay();

  state.roomEditorMode = true;

  canvas.style.cursor = "grab";
  const btn = document.getElementById("roomBtn");
  btn.classList.add("active");
  btn.setAttribute("aria-pressed", "true");

  renderRoomPanel();
  render();
}

function exitRoomEditorMode() {
  state.roomEditorMode = false;
  state.draggingRoomId = null;
  state.roomDragGrab = null;

  canvas.style.cursor = "grab";
  const btn = document.getElementById("roomBtn");
  btn.classList.remove("active");
  btn.setAttribute("aria-pressed", "false");

  updateSidebarPanels();
  updateSelectedFurniturePanel();
  render();
}

// --- Geometry helpers (all room geometry is stored in centimeters) ---

function roomPxScale() {
  return (state.pixelsPerMeter || DEFAULT_MEASURE_SCALE) / 100; // px per cm
}

// Interior face of a wall, measured clockwise around the room perimeter.
// `offset` of fixtures is measured from `a` towards `b`.
function roomWallSegment(r, wall) {
  const w = r.widthCm;
  const d = r.depthCm;
  switch (wall) {
    case "top":
      return { a: { x: r.x, y: r.y }, b: { x: r.x + w, y: r.y } };
    case "right":
      return { a: { x: r.x + w, y: r.y }, b: { x: r.x + w, y: r.y + d } };
    case "bottom":
      return { a: { x: r.x + w, y: r.y + d }, b: { x: r.x, y: r.y + d } };
    case "left":
      return { a: { x: r.x, y: r.y + d }, b: { x: r.x, y: r.y } };
  }
}

function roomWallLength(r, wall) {
  return wall === "top" || wall === "bottom" ? r.widthCm : r.depthCm;
}

// Outward (away from the interior) unit normal of each wall.
function roomWallNormal(r, wall) {
  switch (wall) {
    case "top":
      return { x: 0, y: -1 };
    case "right":
      return { x: 1, y: 0 };
    case "bottom":
      return { x: 0, y: 1 };
    case "left":
      return { x: -1, y: 0 };
  }
}

function roomCorners(r) {
  const w = r.widthCm;
  const d = r.depthCm;
  return {
    tl: { x: r.x, y: r.y },
    tr: { x: r.x + w, y: r.y },
    br: { x: r.x + w, y: r.y + d },
    bl: { x: r.x, y: r.y + d },
  };
}

// Center of an opening along a wall: {t} = tangent offset from wall start,
// {p} = midpoint in world cm.
function fixtureCenter(r, wall, fx) {
  const seg = roomWallSegment(r, wall);
  const dx = seg.b.x - seg.a.x;
  const dy = seg.b.y - seg.a.y;
  const len = Math.hypot(dx, dy) || 1;
  const ux = dx / len;
  const uy = dy / len;
  const t = fx.offsetCm + fx.widthCm / 2;
  return { t, x: seg.a.x + ux * t, y: seg.a.y + uy * t };
}

function addRoom(x, y, widthCm, depthCm, ceilingHeightCm) {
  pushUndoState();
  const room = {
    id: Date.now() + "_" + Math.random().toString(36).slice(2, 7),
    x,
    y,
    widthCm,
    depthCm,
    ceilingHeightCm: ceilingHeightCm || null,
    name: "",
    fixtures: [],
  };
  state.rooms.push(room);
  state.selectedRoomId = room.id;
  state.selectedWall = "top";
  state.selectedFixtureId = null;
  markChanges();
  saveProject();
  renderRoomPanel();
  render();
  return room;
}

function addDefaultRoom() {
  const rect = canvas.getBoundingClientRect();
  const sbw = sidebarOverlayWidth();
  const visibleW = Math.max(1, rect.width - sbw);
  const c = screenToCanvas(
    rect.left + sbw + visibleW / 2,
    rect.top + rect.height / 2,
  );
  const pxScale = roomPxScale();
  return addRoom(
    c.x / pxScale - DEFAULT_ROOM_WIDTH_CM / 2,
    c.y / pxScale - DEFAULT_ROOM_DEPTH_CM / 2,
    DEFAULT_ROOM_WIDTH_CM,
    DEFAULT_ROOM_DEPTH_CM,
    260,
  );
}

function deleteRoom(id) {
  const idx = state.rooms.findIndex((r) => r.id === id);
  if (idx < 0) return;
  if (!confirm(t("room.deleteConfirm"))) return;
  pushUndoState();
  state.rooms.splice(idx, 1);
  if (state.selectedRoomId === id) {
    state.selectedRoomId = null;
    state.selectedWall = null;
    state.selectedFixtureId = null;
  }
  markChanges();
  saveProject();
  renderRoomPanel();
  render();
}

function clearRooms() {
  if (!state.rooms.length) return;
  if (!confirm(t("room.clearAllConfirm"))) return;
  pushUndoState();
  state.rooms = [];
  state.selectedRoomId = null;
  state.selectedWall = null;
  state.selectedFixtureId = null;
  markChanges();
  saveProject();
  renderRoomPanel();
  render();
}

// Update a numeric property of a room (width / depth / ceiling)
function updateRoomField(id, field, value) {
  const r = getRoom(id);
  if (!r) return;
  const cm = parseFloat(value);
  if (!Number.isFinite(cm) || cm <= 0) return;
  if (field === "width") r.widthCm = cm;
  else if (field === "depth") r.depthCm = cm;
  else if (field === "ceiling" && cm > 0) r.ceilingHeightCm = cm;
  // keep fixtures inside the wall
  r.fixtures.forEach((fx) => {
    if (fx.type !== "chimney") {
      const len = roomWallLength(r, fx.wall);
      fx.offsetCm = Math.min(fx.offsetCm, Math.max(0, len - fx.widthCm));
    }
  });
  markChanges();
  saveProject();
  renderRoomPanel();
  render();
}

function renameRoom(id, name) {
  const r = getRoom(id);
  if (!r) return;
  pushUndoState();
  r.name = (name || "").trim();
  markChanges();
  saveProject();
  renderRoomPanel();
  render();
}

function setWallThickness(value) {
  const cm = parseFloat(value);
  if (!Number.isFinite(cm) || cm <= 0) return;
  state.wallThicknessCm = cm;
  markChanges();
  saveProject();
  renderRoomPanel();
  render();
}

// --- Fixtures (door / window / heater / chimney) ---

function addFixture(roomId, wall, type) {
  const r = getRoom(roomId);
  if (!r) return;
  if (!ROOM_FIXTURE_TYPES.includes(type)) return;
  const len = roomWallLength(r, wall);
  let fx = { id: Date.now() + "_" + Math.random().toString(36).slice(2, 7), type, wall };
  if (type === "door") {
    fx.offsetCm = 0;
    fx.widthCm = Math.min(80, len);
    fx.hinge = "end";
    fx.swing = "in";
  } else if (type === "window") {
    fx.offsetCm = 0;
    fx.widthCm = Math.min(120, len);
    fx.boardDepthCm = 20;
    fx.boardOverlapCm = 3;
  } else if (type === "heater") {
    fx.offsetCm = 0;
    fx.widthCm = Math.min(90, len);
    fx.depthCm = 30;
  } else if (type === "chimney") {
    fx.corner = wall; // reuse wall param as corner id
    fx.widthCm = 45;
    fx.depthCm = 45;
    fx.wall = "corner";
  }
  if (fx.wall !== "corner") {
    fx.offsetCm = Math.min(fx.offsetCm, Math.max(0, len - fx.widthCm));
  }
  pushUndoState();
  r.fixtures.push(fx);
  state.selectedWall = fx.wall === "corner" ? state.selectedWall : wall;
  state.selectedFixtureId = fx.id;
  markChanges();
  saveProject();
  renderRoomPanel();
  render();
}

function deleteFixture(roomId, fiscalId) {
  const r = getRoom(roomId);
  if (!r) return;
  const idx = r.fixtures.findIndex((f) => f.id === fiscalId);
  if (idx < 0) return;
  pushUndoState();
  r.fixtures.splice(idx, 1);
  if (state.selectedFixtureId === fiscalId) state.selectedFixtureId = null;
  markChanges();
  saveProject();
  renderRoomPanel();
  render();
}

// Change how a door opens, without moving it.
//   "opening" = "<swing>-<hinge>", e.g. "in-start" — opens into the room,
//     hinged at the leading ("start") edge. All of in/out x start/end is
//     possible, so every "in/out x left/right" combination can be expressed.
//   Single-field "hinge"/"swing" changes are still accepted for backward
//   compatibility.
function setDoorOption(roomId, fixtureId, field, value) {
  const r = getRoom(roomId);
  if (!r) return;
  const fx = r.fixtures.find((f) => f.id === fixtureId);
  if (!fx || fx.type !== "door") return;
  if (field === "opening") {
    const match = /^(in|out)-(start|end)$/.exec(value);
    if (!match) return;
    const swing = match[1];
    const hinge = match[2];
    if (fx.swing === swing && fx.hinge === hinge) return;
    pushUndoState();
    fx.swing = swing;
    fx.hinge = hinge;
    markChanges();
    saveProject();
    renderRoomPanel();
    render();
    return;
  }
  if (field === "hinge" && value !== "start" && value !== "end") return;
  if (field === "swing" && value !== "in" && value !== "out") return;
  if (fx[field] === value) return;
  pushUndoState();
  fx[field] = value;
  markChanges();
  saveProject();
  renderRoomPanel();
  render();
}

function updateFixtureField(roomId, fiscalId, field, value) {
  const r = getRoom(roomId);
  if (!r) return;
  const fx = r.fixtures.find((f) => f.id === fiscalId);
  if (!fx) return;
  const cm = parseFloat(value);
  if (!Number.isFinite(cm)) return;
  if (field === "boardOverlap") {
    if (cm < 0) return;
    fx.boardOverlapCm = cm;
    markChanges();
    saveProject();
    renderRoomPanel();
    render();
    return;
  }
  if (cm <= 0) return;
  if (field === "width") fx.widthCm = cm;
  else if (field === "offset") fx.offsetCm = cm;
  else if (field === "depth") fx.depthCm = cm;
  else if (field === "board") fx.boardDepthCm = cm;
  if (fx.type === "chimney") {
    fx.widthCm = Math.max(fx.widthCm, fx.depthCm); // keep square-ish elsewhere? no-op
  } else {
    const len = roomWallLength(r, fx.wall);
    fx.offsetCm = Math.min(fx.offsetCm, Math.max(0, len - fx.widthCm));
  }
  markChanges();
  saveProject();
  renderRoomPanel();
  render();
}

function selectRoom(id) {
  const r = getRoom(id);
  if (!r) return;
  state.selectedRoomId = id;
  state.selectedWall = state.selectedWall && roomWallLength(r, state.selectedWall) ? state.selectedWall : "top";
  state.selectedFixtureId = null;
  renderRoomPanel();
  render();
}

// --- Hit testing (world/px space) ---

// Distance from a point (px, py) to the segment (x1,y1)-(x2,y2)
function distToSegment(px, py, x1, y1, x2, y2) {
  const dx = x2 - x1;
  const dy = y2 - y1;
  const lenSq = dx * dx + dy * dy;
  if (lenSq === 0) return Math.hypot(px - x1, py - y1);
  let t = ((px - x1) * dx + (py - y1) * dy) / lenSq;
  t = Math.max(0, Math.min(1, t));
  return Math.hypot(px - (x1 + t * dx), py - (y1 + t * dy));
}

function hitTestRooms(x, y) {
  const THRESH = 12;
  for (const r of state.rooms) {
    const x0 = cmToPixels(r.x);
    const y0 = cmToPixels(r.y);
    const w = cmToPixels(r.widthCm);
    const d = cmToPixels(r.depthCm);
    const walls = {
      top: [[x0, y0], [x0 + w, y0]],
      right: [[x0 + w, y0], [x0 + w, y0 + d]],
      bottom: [[x0 + w, y0 + d], [x0, y0 + d]],
      left: [[x0, y0 + d], [x0, y0]],
    };
    for (const wall in walls) {
      const p = walls[wall];
      if (
        distToSegment(x, y, p[0][0], p[0][1], p[1][0], p[1][1]) <= THRESH
      ) {
        return { room: r, wall };
      }
    }
    if (x >= x0 && x <= x0 + w && y >= y0 && y <= y0 + d) {
      return { room: r };
    }
  }
  return null;
}

// Hit test a fixture's grab zone on the canvas (world px). Returns
// { room, fx, handle } where handle is the drag kind:
//   null       -> move the fixture along the wall (or just select a chimney)
//   "start"    -> resize from the opening's leading edge
//   "end"      -> resize from the opening's trailing edge
//   "chimneyW" -> resize chimney width
//   "chimneyD" -> resize chimney depth
function hitTestFixture(x, y) {
  const pxScale = roomPxScale();
  const grabPx = 14;
  const grabCm = grabPx / pxScale;
  let best = null;

  // Prefer the smallest priority; on a tie the fixture drawn later (topmost)
  // wins, which is achieved by replacing on equal priority.
  const consider = (room, fx, handle, priority) => {
    if (!best || priority <= best.priority) {
      best = { room, fx, handle, priority };
    }
  };

  for (const r of state.rooms) {
    for (const fx of r.fixtures) {
      if (fx.type === "chimney") {
        const corners = roomCorners(r);
        const c = corners[fx.corner];
        if (!c) continue;
        const cxp = cmToPixels(c.x);
        const cyp = cmToPixels(c.y);
        const dirX = fx.corner === "tl" || fx.corner === "bl" ? 1 : -1;
        const dirY = fx.corner === "tl" || fx.corner === "tr" ? 1 : -1;
        const w = fx.widthCm * pxScale;
        const d = fx.depthCm * pxScale;
        const x0 = dirX > 0 ? cxp : cxp - w;
        const y0 = dirY > 0 ? cyp : cyp - d;
        if (distToSegment(x, y, x0 + w, y0, x0 + w, y0 + d) <= grabPx) {
          consider(r, fx, "chimneyW", -1);
          continue;
        }
        if (distToSegment(x, y, x0, y0 + d, x0 + w, y0 + d) <= grabPx) {
          consider(r, fx, "chimneyD", -1);
          continue;
        }
        if (x >= x0 && x <= x0 + w && y >= y0 && y <= y0 + d) {
          consider(r, fx, null, 0);
        }
        continue;
      }
      const seg = roomWallSegment(r, fx.wall);
      const a = { x: cmToPixels(seg.a.x), y: cmToPixels(seg.a.y) };
      const b = { x: cmToPixels(seg.b.x), y: cmToPixels(seg.b.y) };
      const plen = Math.hypot(b.x - a.x, b.y - a.y) || 1;
      const ux = (b.x - a.x) / plen;
      const uy = (b.y - a.y) / plen;
      const n = roomWallNormal(r, fx.wall);
      // band thickness the fixture can be grabbed on: the wall plus a margin
      // into the room
      const band = state.wallThicknessCm / 2 + grabCm;
      // how far the fixture's drawn body reaches into the room (window board,
      // heater body) so it can be selected anywhere on that filled area
      const inDepth =
        fx.type === "heater" ? (fx.depthCm || 30) :
        fx.type === "window" ? (fx.boardDepthCm || 0) : 0;
      // hit-test where the door is actually drawn (merged doors sit centered)
      const geom = fx.type === "door" ? doorRenderGeom(r, fx) : null;
      const offCm = geom ? geom.offsetCm : fx.offsetCm;
      const widCm = geom ? geom.widthCm : fx.widthCm;
      const p1 = { x: a.x + ux * offCm * pxScale, y: a.y + uy * offCm * pxScale };
      const p2 = { x: a.x + ux * (offCm + widCm) * pxScale, y: a.y + uy * (offCm + widCm) * pxScale };
      const relX = x - p1.x;
      const relY = y - p1.y;
      const along = (relX * ux + relY * uy) / pxScale;
      const perp = (relX * n.x + relY * n.y) / pxScale; // >0 outside, <0 into room
      const openLen = widCm;
      // window boards stick out past both jambs, so selectable area grows too
      const extra = fx.type === "window" ? (fx.boardOverlapCm != null ? fx.boardOverlapCm : 3) : 0;
      if (along < -grabCm - extra || along > openLen + grabCm + extra) continue;
      // edge handles take priority for resizing
      const dStart = Math.hypot(x - p1.x, y - p1.y);
      const dEnd = Math.hypot(x - p2.x, y - p2.y);
      if (dStart <= grabPx || dEnd <= grabPx) {
        consider(r, fx, dStart <= dEnd ? "start" : "end", -1);
        continue;
      }
      // drawn body of a window board or heater, in the room
      if (inDepth > 0 && perp < 0 && perp >= -inDepth) {
        consider(r, fx, null, 0);
      }
      // the wall band itself
      if (perp > -grabCm && perp <= band) {
        consider(r, fx, null, 1);
      }
    }
  }
  return best ? { room: best.room, fx: best.fx, handle: best.handle } : null;
}

// Start dragging a fixture in the room editor (world-px canvas point)
function startFixtureDrag(room, fx, handle, canvasPoint) {
  state.selectedRoomId = room.id;
  state.selectedFixtureId = fx.id;
  if (fx.type !== "chimney") state.selectedWall = fx.wall;
  pushUndoState();
  const pxScale = roomPxScale();
  if (fx.type === "chimney") {
    state.draggingFixture = { roomId: room.id, fixtureId: fx.id, kind: handle };
    state.fixtureDragStart = null;
    return;
  }
  const seg = roomWallSegment(room, fx.wall);
  const plen = Math.hypot(seg.b.x - seg.a.x, seg.b.y - seg.a.y) || 1;
  const ux = (seg.b.x - seg.a.x) / plen;
  const uy = (seg.b.y - seg.a.y) / plen;
  const along = (canvasPoint.x / pxScale - seg.a.x) * ux + (canvasPoint.y / pxScale - seg.a.y) * uy;
  const kind = handle || "move";
  state.draggingFixture = { roomId: room.id, fixtureId: fx.id, kind };
  state.fixtureDragStart =
    kind === "move"
      ? { grab: fx.offsetCm + fx.widthCm / 2 - along }
      : { offset: fx.offsetCm, width: fx.widthCm, along };
}

function moveFixtureDragTo(canvasPoint) {
  const d = state.draggingFixture;
  if (!d) return;
  const r = getRoom(d.roomId);
  if (!r) return;
  const fx = r.fixtures.find((f) => f.id === d.fixtureId);
  if (!fx) return;
  const pxScale = roomPxScale();
  if (fx.type === "chimney") {
    const corners = roomCorners(r);
    const c = corners[fx.corner];
    if (!c) return;
    const dirX = fx.corner === "tl" || fx.corner === "bl" ? 1 : -1;
    const dirY = fx.corner === "tl" || fx.corner === "tr" ? 1 : -1;
    const cxp = cmToPixels(c.x);
    const cyp = cmToPixels(c.y);
    if (d.kind === "chimneyW") {
      const wCm = Math.round(((canvasPoint.x - cxp) / pxScale) * dirX);
      fx.widthCm = Math.min(Math.max(10, wCm), Math.max(10, Math.floor(r.widthCm * 0.9)));
    } else if (d.kind === "chimneyD") {
      const dCm = Math.round(((canvasPoint.y - cyp) / pxScale) * dirY);
      fx.depthCm = Math.min(Math.max(10, dCm), Math.max(10, Math.floor(r.depthCm * 0.9)));
    }
    markChanges();
    render();
    return;
  }
  const seg = roomWallSegment(r, fx.wall);
  const lenCm = roomWallLength(r, fx.wall);
  const plen = Math.hypot(seg.b.x - seg.a.x, seg.b.y - seg.a.y) || 1;
  const ux = (seg.b.x - seg.a.x) / plen;
  const uy = (seg.b.y - seg.a.y) / plen;
  const along = (canvasPoint.x / pxScale - seg.a.x) * ux + (canvasPoint.y / pxScale - seg.a.y) * uy;
  if (d.kind === "move") {
    let off = along + state.fixtureDragStart.grab - fx.widthCm / 2;
    fx.offsetCm = Math.round(Math.max(0, Math.min(lenCm - fx.widthCm, off)));
  } else if (d.kind === "start") {
    // resize from the leading edge: the trailing edge stays fixed
    const end = state.fixtureDragStart.offset + state.fixtureDragStart.width;
    const off = Math.max(0, Math.min(along, end - 10));
    fx.offsetCm = Math.round(off);
    fx.widthCm = Math.round(Math.max(10, end - off));
  } else if (d.kind === "end") {
    // resize from the trailing edge: the leading edge stays fixed
    const w = Math.max(10, Math.min(along - state.fixtureDragStart.offset, lenCm - state.fixtureDragStart.offset));
    fx.widthCm = Math.round(w);
  }
  markChanges();
  render();
}

function endFixtureDrag() {
  if (state.draggingFixture) {
    markChanges();
    saveProject();
  }
  state.draggingFixture = null;
  state.fixtureDragStart = null;
}

// --- Drag + snapping (wall thickness between rooms, door-to-door) ---

function startRoomDrag(room, grabCm) {
  state.draggingRoomId = room.id;
  state.roomDragGrab = grabCm;
  pushUndoState();
}

function moveRoomDragTo(canvasPoint) {
  const r = getRoom(state.draggingRoomId);
  if (!r) return;
  const pxScale = roomPxScale();
  const nx = canvasPoint.x / pxScale - state.roomDragGrab.dx;
  const ny = canvasPoint.y / pxScale - state.roomDragGrab.dy;
  const snap = snapRoomPosition(r, nx, ny);
  r.x = Math.round(snap.x);
  r.y = Math.round(snap.y);
  markChanges();
  render();
}

function endRoomDrag() {
  if (state.draggingRoomId) saveProject();
  state.draggingRoomId = null;
  state.roomDragGrab = null;
}

function snapRoomPosition(room, nx, ny) {
  const T = state.wallThicknessCm;
  const tolP = ROOM_SNAP_TOLERANCE_CM;
  const tolD = ROOM_DOOR_SNAP_TOLERANCE_CM;
  let px = nx;
  let py = ny;
  const rw = room.widthCm;
  const rd = room.depthCm;

  for (const other of state.rooms) {
    if (other.id === room.id) continue;
    const ox = other.x;
    const oy = other.y;
    const ow = other.widthCm;
    const od = other.depthCm;

    const rL = px, rR = px + rw, rT = py, rB = py + rd;
    const oL = ox, oR = ox + ow, oT = oy, oB = oy + od;
    const yOverlap = Math.min(rB, oB) - Math.max(rT, oT);
    const xOverlap = Math.min(rR, oR) - Math.max(rL, oL);

    let facingWallA = null; // other's wall facing this room
    let facingWallB = null; // this room's wall facing other
    let snapped = false;

    // Vertical faces adjacent (this room right of other, or left of other)
    if (!snapped && Math.abs(rL - (oR + T)) <= tolP && yOverlap > T) {
      px = oR + T; snapped = true; facingWallA = "right"; facingWallB = "left";
    } else if (!snapped && Math.abs((oL - T) - rR) <= tolP && yOverlap > T) {
      px = oL - T - rw; snapped = true; facingWallA = "left"; facingWallB = "right";
    }
    // Horizontal faces adjacent (this room below / above other)
    if (!snapped && Math.abs(rT - (oB + T)) <= tolP && xOverlap > T) {
      py = oB + T; snapped = true; facingWallA = "bottom"; facingWallB = "top";
    } else if (!snapped && Math.abs((oT - T) - rB) <= tolP && xOverlap > T) {
      py = oT - T - rd; snapped = true; facingWallA = "top"; facingWallB = "bottom";
    }
    if (!snapped) continue;

    // Door alignment along the tangent of the shared wall
    const myDoor = room.fixtures.find((f) => f.type === "door" && f.wall === facingWallB);
    const otherDoor = other.fixtures.find((f) => f.type === "door" && f.wall === facingWallA);
    if (myDoor && otherDoor && facingWallB === "left" && facingWallA === "right") {
      // both vertical; offsets measured: room left wall start at bottom-left going +up (=-y)
      const myT = myDoor.offsetCm + myDoor.widthCm / 2;
      const ot = otherDoor.offsetCm + otherDoor.widthCm / 2;
      // room center y = (y+rd) - myT ; other center y = oy + ot
      const targetY = oy + ot + myT - rd;
      if (Math.abs(targetY - py) <= tolD) py = targetY;
    } else if (myDoor && otherDoor && facingWallB === "right" && facingWallA === "left") {
      const myT = myDoor.offsetCm + myDoor.widthCm / 2;
      const ot = otherDoor.offsetCm + otherDoor.widthCm / 2;
      // room right wall start at top-right going down (+y): center y = y + myT
      // other left wall start bottom-left going up: center y = (oy+od) - ot
      const targetY = oy + od - ot - myT;
      if (Math.abs(targetY - py) <= tolD) py = targetY;
    } else if (myDoor && otherDoor && facingWallB === "top" && facingWallA === "bottom") {
      const myT = myDoor.offsetCm + myDoor.widthCm / 2;
      const ot = otherDoor.offsetCm + otherDoor.widthCm / 2;
      // room top wall start top-left going right (+x): center x = x + myT
      // other bottom wall start bottom-right going left: center x = (ox+ow) - ot
      const targetX = ox + ow - ot - myT;
      if (Math.abs(targetX - px) <= tolD) px = targetX;
    } else if (myDoor && otherDoor && facingWallB === "bottom" && facingWallA === "top") {
      const myT = myDoor.offsetCm + myDoor.widthCm / 2;
      const ot = otherDoor.offsetCm + otherDoor.widthCm / 2;
      // room bottom wall start bottom-right going left: center x = (x+rw) - myT
      // other top wall start top-left going right: center x = ox + ot
      const targetX = ox + ot + myT - rw;
      if (Math.abs(targetX - px) <= tolD) px = targetX;
    }
  }
  return { x: px, y: py };
}

// The room + door a door is snapped to (door-to-door over the shared wall): the
// other room sits at wall-thickness distance on the door's wall side, has a door
// on the facing wall, and the two door centers are aligned. Returns null when
// the door is not part of such a pair.
function doorSnapPair(r, fx) {
  if (fx.type !== "door") return null;
  const T = state.wallThicknessCm;
  const facing = { left: "right", right: "left", top: "bottom", bottom: "top" }[fx.wall];
  if (!facing) return null;
  const myCenter = fx.offsetCm + fx.widthCm / 2;
  for (const other of state.rooms) {
    if (other.id === r.id) continue;
    let gap, overlap;
    if (fx.wall === "left" || fx.wall === "right") {
      gap = fx.wall === "left" ? r.x - (other.x + other.widthCm) : other.x - (r.x + r.widthCm);
      overlap = Math.min(r.y + r.depthCm, other.y + other.depthCm) - Math.max(r.y, other.y);
    } else {
      gap = fx.wall === "top" ? r.y - (other.y + other.depthCm) : other.y - (r.y + r.depthCm);
      overlap = Math.min(r.x + r.widthCm, other.x + other.widthCm) - Math.max(r.x, other.x);
    }
    if (Math.abs(gap - T) > 1 || overlap <= T) continue;
    const otherFx = other.fixtures.find((f) => f.type === "door" && f.wall === facing);
    if (!otherFx) continue;
    const otherCenter = otherFx.offsetCm + otherFx.widthCm / 2;
    const aligned =
      fx.wall === "left" ? Math.abs(r.y + r.depthCm - myCenter - (other.y + otherCenter)) <= ROOM_DOOR_SNAP_TOLERANCE_CM :
      fx.wall === "right" ? Math.abs(r.y + myCenter - (other.y + other.depthCm - otherCenter)) <= ROOM_DOOR_SNAP_TOLERANCE_CM :
      fx.wall === "top" ? Math.abs(r.x + myCenter - (other.x + other.widthCm - otherCenter)) <= ROOM_DOOR_SNAP_TOLERANCE_CM :
      Math.abs(r.x + r.widthCm - myCenter - (other.x + otherCenter)) <= ROOM_DOOR_SNAP_TOLERANCE_CM;
    if (!aligned) continue;
    return { otherRoom: other, otherDoor: otherFx };
  }
  return null;
}

// Effective geometry a door is drawn with. Door-to-door snapped doors are merged
// when NEITHER room of the pair is selected: each door centers on its wall and
// uses the average width of both doors. When one room of the pair is selected
// the selected room's door keeps its real geometry and the other door is dimmed.
// Non-paired doors render as-is.
// Color shared by the two doors of a snapped connection. Chosen deterministically
// (hashed from the two room ids, order-independent) so the pair renders in the same
// color every frame instead of flickering, while still looking random per connection.
function snappedDoorColorHex(r, o) {
  const key = [String(r.id), String(o.id)].sort().join("|");
  let h = 0;
  for (let i = 0; i < key.length; i++) h = ((h << 5) - h + key.charCodeAt(i)) | 0;
  return SNAPPED_DOOR_COLORS[Math.abs(h) % SNAPPED_DOOR_COLORS.length];
}

function hexToRgba(hex, alpha) {
  const n = parseInt(hex.slice(1), 16);
  return "rgba(" + ((n >> 16) & 255) + "," + ((n >> 8) & 255) + "," + (n & 255) + "," + alpha + ")";
}

function doorRenderGeom(r, fx) {
  const pair = doorSnapPair(r, fx);
  if (!pair) return { offsetCm: fx.offsetCm, widthCm: fx.widthCm, dim: 1, merged: false, primary: true };
  const thisSel = r.id === state.selectedRoomId;
  const otherSel = pair.otherRoom.id === state.selectedRoomId;
  const colorHex = snappedDoorColorHex(r, pair.otherRoom);
  if (thisSel || otherSel) {
    return { offsetCm: fx.offsetCm, widthCm: fx.widthCm, dim: thisSel ? 1 : 0.35, merged: false, primary: true, colorHex };
  }
  // Merged look: only ONE of the two doors is drawn, centered on the wall span the
  // two rooms share and using the average of the two widths, so the pair reads as a
  // single centered doorway (the two wall reveals coincide; drawing both door symbols
  // would show two doors sitting next to each other).
  const o = pair.otherRoom;
  const spanStart = (fx.wall === "left" || fx.wall === "right")
    ? Math.max(r.y, o.y)
    : Math.max(r.x, o.x);
  const spanEnd = (fx.wall === "left" || fx.wall === "right")
    ? Math.min(r.y + r.depthCm, o.y + o.depthCm)
    : Math.min(r.x + r.widthCm, o.x + o.widthCm);
  const spanCenter = (spanStart + spanEnd) / 2;
  const offsetCm = fx.wall === "right" ? spanCenter - r.y :
    fx.wall === "left" ? r.y + r.depthCm - spanCenter :
    fx.wall === "bottom" ? r.x + r.widthCm - spanCenter :
    spanCenter - r.x;
  const widthCm = (fx.widthCm + pair.otherDoor.widthCm) / 2;
  const primary = state.rooms.indexOf(r) <= state.rooms.indexOf(pair.otherRoom);
  return { offsetCm: Math.max(0, offsetCm), widthCm, dim: 1, merged: true, primary, colorHex };
}

// --- Rendering ---

function drawRoomsLayer(targetCtx, withDims, keepAllDims) {
  if (!state.rooms.length) return;
  state.rooms.forEach((r) => drawRoom(r, targetCtx, withDims, keepAllDims));
}

function drawRoom(r, targetCtx, withDims, keepAllDims) {
  const pxScale = roomPxScale();
  const T = cmToPixels(state.wallThicknessCm);
  const selected = r.id === state.selectedRoomId;

  for (const wall of ROOM_WALL_TYPES) {
    drawRoomWall(r, wall, targetCtx, T, pxScale);
  }

  // Fixtures (drawn on top of the wall bands)
  r.fixtures.forEach((fx) => drawFixture(r, fx, targetCtx, pxScale));

  // Selection highlight
  if (selected) {
    const x0 = cmToPixels(r.x);
    const y0 = cmToPixels(r.y);
    const w = cmToPixels(r.widthCm);
    const d = cmToPixels(r.depthCm);
    targetCtx.save();
    targetCtx.setLineDash([5, 4]);
    targetCtx.strokeStyle = "#FF1493";
    targetCtx.lineWidth = 2;
    targetCtx.strokeRect(x0, y0, w, d);
    if (state.selectedWall) {
      const seg = roomWallSegment(r, state.selectedWall);
      const a = cmToPixels(seg.a.x), b = cmToPixels(seg.b.x), a2 = cmToPixels(seg.a.y), b2 = cmToPixels(seg.b.y);
      targetCtx.setLineDash([]);
      targetCtx.strokeStyle = "#FF1493";
      targetCtx.lineWidth = 3;
      targetCtx.beginPath();
      targetCtx.moveTo(a, a2);
      targetCtx.lineTo(b, b2);
      targetCtx.stroke();
    }
    targetCtx.restore();
  }

  // Room name label (centered on the room)
  if (r.name) {
    const cx = cmToPixels(r.x) + cmToPixels(r.widthCm) / 2;
    const cy = cmToPixels(r.y) + cmToPixels(r.depthCm) / 2;
    targetCtx.save();
    targetCtx.font = "bold 14px sans-serif";
    targetCtx.textAlign = "center";
    targetCtx.textBaseline = "middle";
    targetCtx.fillStyle = "rgba(44,62,80,0.9)";
    targetCtx.fillText(r.name, cx, cy);
    targetCtx.restore();
  }

  // Measurements only for the selected room (or all rooms in a PNG export)
  if (withDims && (keepAllDims || selected)) drawRoomDimensions(r, targetCtx, T, pxScale);
}

function drawRoomWall(r, wall, targetCtx, T, pxScale) {
  const seg = roomWallSegment(r, wall);
  const a = { x: cmToPixels(seg.a.x), y: cmToPixels(seg.a.y) };
  const b = { x: cmToPixels(seg.b.x), y: cmToPixels(seg.b.y) };
  const lenCm = roomWallLength(r, wall);
  const plen = Math.hypot(b.x - a.x, b.y - a.y) || 1;
  const ux = (b.x - a.x) / plen;
  const uy = (b.y - a.y) / plen;
  const n = roomWallNormal(r, wall);
  const openings = [];
  for (const f of r.fixtures) {
    if (f.wall !== wall || (f.type !== "door" && f.type !== "window")) continue;
    const eff = f.type === "door" ? doorRenderGeom(r, f) : { offsetCm: f.offsetCm, widthCm: f.widthCm };
    openings.push({ offsetCm: eff.offsetCm, widthCm: eff.widthCm });
  }

  targetCtx.save();
  targetCtx.lineCap = "butt";
  targetCtx.lineWidth = T;
  targetCtx.strokeStyle = ROOM_WALL_COLOR;

  // The wall band is drawn OUTSIDE the measured (interior) area: its interior
  // face lies on the room boundary, and the band extends outward from there.
  const shX = n.x * (T / 2);
  const shY = n.y * (T / 2);

  // Wall segments excluding openings
  const pts = [0];
  openings.forEach((f) => pts.push(f.offsetCm, f.offsetCm + f.widthCm));
  pts.push(lenCm);
  for (let i = 0; i < pts.length - 1; i += 2) {
    const s = Math.max(0, pts[i]);
    const e = Math.min(lenCm, pts[i + 1]);
    if (e - s < 0.1) continue;
    targetCtx.beginPath();
    targetCtx.moveTo(a.x + ux * s * pxScale + shX, a.y + uy * s * pxScale + shY);
    targetCtx.lineTo(a.x + ux * e * pxScale + shX, a.y + uy * e * pxScale + shY);
    targetCtx.stroke();
  }

  // Interior face line (thin reveal) including openings, on the room boundary
  targetCtx.lineWidth = 1.2;
  targetCtx.strokeStyle = "rgba(255,255,255,0.85)";
  targetCtx.beginPath();
  targetCtx.moveTo(a.x, a.y);
  targetCtx.lineTo(b.x, b.y);
  targetCtx.stroke();
  targetCtx.restore();
}

function drawFixture(r, fx, targetCtx, pxScale) {
  const selected = fx.id === state.selectedFixtureId;
  const color = selected ? "#FF1493" : ROOM_COLORS[fx.type] || "#7f8c8d";

  if (fx.type === "chimney") {
    drawChimney(r, fx, targetCtx, pxScale);
    return;
  }

  const seg = roomWallSegment(r, fx.wall);
  const a = { x: cmToPixels(seg.a.x), y: cmToPixels(seg.a.y) };
  const b = { x: cmToPixels(seg.b.x), y: cmToPixels(seg.b.y) };
  const lenCm = roomWallLength(r, fx.wall);
  const plen = Math.hypot(b.x - a.x, b.y - a.y) || 1;
  const ux = (b.x - a.x) / plen;
  const uy = (b.y - a.y) / plen;
  const n = roomWallNormal(r, fx.wall);
  const o1 = fx.offsetCm * pxScale;
  const o2 = (fx.offsetCm + fx.widthCm) * pxScale;
  const p1 = { x: a.x + ux * o1, y: a.y + uy * o1 };
  const p2 = { x: a.x + ux * o2, y: a.y + uy * o2 };
  const T = cmToPixels(state.wallThicknessCm);

  // Door-to-door snapped doors may render with effective geometry: the pair is
  // drawn as ONE merged door at the shared wall center when neither room is
  // selected, or real geometry with the non-selected partner door dimmed while
  // the other room is selected
  let dp1 = p1;
  let dp2 = p2;
  let doorColor = color;
  let skipDoor = false;
  if (fx.type === "door") {
    const eff = doorRenderGeom(r, fx);
    dp1 = { x: a.x + ux * eff.offsetCm * pxScale, y: a.y + uy * eff.offsetCm * pxScale };
    dp2 = { x: a.x + ux * (eff.offsetCm + eff.widthCm) * pxScale, y: a.y + uy * (eff.offsetCm + eff.widthCm) * pxScale };
    if (eff.colorHex) doorColor = eff.dim < 1 ? hexToRgba(eff.colorHex, 0.4) : eff.colorHex;
    else if (eff.dim < 1) doorColor = "rgba(90,90,95,0.4)";
    // only the primary door of a merged pair draws a symbol
    skipDoor = eff.merged && !eff.primary;
  }

  targetCtx.save();
  if (fx.type === "window") {
    // opening reveal
    targetCtx.strokeStyle = color;
    targetCtx.lineWidth = 1.4;
    targetCtx.beginPath();
    targetCtx.moveTo(p1.x, p1.y);
    targetCtx.lineTo(p2.x, p2.y);
    targetCtx.stroke();
    // glass lines perpendicular to the wall
    targetCtx.lineWidth = 1;
    const nwx = -uy;
    const nwy = ux;
    for (let k = 1; k <= 3; k++) {
      const g = {
        x: p1.x + ux * (o2 - o1) * (k / 4),
        y: p1.y + uy * (o2 - o1) * (k / 4),
      };
      targetCtx.beginPath();
      targetCtx.moveTo(g.x - nwx * 4, g.y - nwy * 4);
      targetCtx.lineTo(g.x + nwx * 4, g.y + nwy * 4);
      targetCtx.stroke();
    }
    // window board (ledge protruding into the room, slightly wider than the
    // window: extends boardOverlapCm past each jamb, symmetric on both sides)
    if (fx.boardDepthCm > 0) {
      const bd = fx.boardDepthCm * pxScale;
      const ov = (fx.boardOverlapCm != null ? fx.boardOverlapCm : 3) * pxScale;
      const bp1 = { x: p1.x - ux * ov, y: p1.y - uy * ov };
      const bp2 = { x: p2.x + ux * ov, y: p2.y + uy * ov };
      targetCtx.fillStyle = "rgba(243,156,18,0.28)";
      targetCtx.strokeStyle = "rgba(243,156,18,0.6)";
      targetCtx.lineWidth = 1;
      targetCtx.beginPath();
      targetCtx.moveTo(bp1.x, bp1.y);
      targetCtx.lineTo(bp1.x - n.x * bd, bp1.y - n.y * bd);
      targetCtx.lineTo(bp2.x - n.x * bd, bp2.y - n.y * bd);
      targetCtx.lineTo(bp2.x, bp2.y);
      targetCtx.closePath();
      targetCtx.fill();
      targetCtx.stroke();
    }
  } else if (fx.type === "door") {
    // In a merged pair only the primary door draws a symbol; the partner door's
    // wall reveal is still shown by its room so the two read as one opening
    if (skipDoor) {
      targetCtx.restore();
      return;
    }
    // Door leaf + swing arc on the SAME side of the wall. The hinge sits on the
    // trailing ("end") or leading ("start") edge of the opening, and the door
    // swings into the room ("in") or out of it ("out"). The arc runs from the
    // closed position (across the opening, along the wall) to the open position
    // (perpendicular to the wall), always on the swing side.
    const leafLen = Math.hypot(dp2.x - dp1.x, dp2.y - dp1.y);
    const hinge = fx.hinge === "start" ? dp1 : dp2;
    const openDirX = fx.swing === "out" ? n.x : -n.x;
    const openDirY = fx.swing === "out" ? n.y : -n.y;
    const leafEnd = { x: hinge.x + openDirX * leafLen, y: hinge.y + openDirY * leafLen };
    targetCtx.strokeStyle = doorColor;
    targetCtx.lineWidth = 2;
    targetCtx.beginPath();
    targetCtx.moveTo(hinge.x, hinge.y);
    targetCtx.lineTo(leafEnd.x, leafEnd.y);
    targetCtx.stroke();
    // swing arc from the closed door position to the open door position
    targetCtx.lineWidth = 1;
    const closeX = hinge === dp2 ? -ux : ux;
    const closeY = hinge === dp2 ? -uy : uy;
    const startAng = Math.atan2(closeY, closeX);
    const openAng = Math.atan2(openDirY, openDirX);
    const delta = Math.atan2(Math.sin(openAng - startAng), Math.cos(openAng - startAng));
    targetCtx.beginPath();
    targetCtx.arc(hinge.x, hinge.y, leafLen, startAng, startAng + delta, delta < 0);
    targetCtx.stroke();
  } else if (fx.type === "heater") {
    const dp = fx.depthCm * pxScale || cmToPixels(30);
    targetCtx.beginPath();
    targetCtx.moveTo(p1.x, p1.y);
    targetCtx.lineTo(p1.x - n.x * dp, p1.y - n.y * dp);
    targetCtx.lineTo(p2.x - n.x * dp, p2.y - n.y * dp);
    targetCtx.lineTo(p2.x, p2.y);
    targetCtx.closePath();
    targetCtx.fillStyle = color;
    targetCtx.globalAlpha = 0.28;
    targetCtx.fill();
    targetCtx.strokeStyle = color;
    targetCtx.lineWidth = 1.4;
    targetCtx.globalAlpha = 0.6;
    targetCtx.stroke();
    targetCtx.globalAlpha = 1;
    targetCtx.save();
    targetCtx.clip();
    targetCtx.strokeStyle = color;
    targetCtx.lineWidth = 1;
    const step = Math.max(8, dp / 4);
    for (let lx = p1.x - dp; lx < p2.x + dp; lx += step) {
      targetCtx.beginPath();
      targetCtx.moveTo(lx, p1.y);
      targetCtx.lineTo(lx + dp, p1.y - dp);
      targetCtx.stroke();
    }
    targetCtx.restore();
  }

  // Resize handles at the opening's two edges for the selected fixture
  if (selected && (fx.type === "door" || fx.type === "window" || fx.type === "heater")) {
    const hr = 4;
    targetCtx.fillStyle = "#fff";
    targetCtx.strokeStyle = "#FF1493";
    targetCtx.lineWidth = 1.5;
    for (const hp of [p1, p2]) {
      targetCtx.beginPath();
      targetCtx.arc(hp.x, hp.y, hr, 0, Math.PI * 2);
      targetCtx.fill();
      targetCtx.stroke();
    }
  }
  targetCtx.restore();
}

function drawChimney(r, fx, targetCtx, pxScale) {
  const corners = roomCorners(r);
  const c = corners[fx.corner];
  const cxp = cmToPixels(c.x);
  const cyp = cmToPixels(c.y);
  const dirX = fx.corner === "tl" || fx.corner === "bl" ? 1 : -1;
  const dirY = fx.corner === "tl" || fx.corner === "tr" ? 1 : -1;
  const w = fx.widthCm * pxScale;
  const d = fx.depthCm * pxScale;
  const x0 = dirX > 0 ? cxp : cxp - w;
  const y0 = dirY > 0 ? cyp : cyp - d;
  const color = fx.id === state.selectedFixtureId ? "#FF1493" : ROOM_COLORS.chimney;

  targetCtx.save();
  targetCtx.fillStyle = color;
  targetCtx.globalAlpha = 0.3;
  targetCtx.fillRect(x0, y0, w, d);
  targetCtx.globalAlpha = 1;
  targetCtx.strokeStyle = color;
  targetCtx.lineWidth = 1.6;
  targetCtx.strokeRect(x0, y0, w, d);
  // hatch pattern, clipped to the chimney box so it never bleeds outside
  targetCtx.save();
  targetCtx.beginPath();
  targetCtx.rect(x0, y0, w, d);
  targetCtx.clip();
  targetCtx.globalAlpha = 0.7;
  targetCtx.lineWidth = 1;
  for (let lx = x0 - d; lx < x0 + w + d; lx += 12) {
    targetCtx.beginPath();
    targetCtx.moveTo(lx, y0 + d);
    targetCtx.lineTo(lx + d, y0);
    targetCtx.stroke();
  }
  targetCtx.restore();
  targetCtx.globalAlpha = 1;
  // resize handles on the two free faces
  if (fx.id === state.selectedFixtureId) {
    const hr = 4;
    targetCtx.fillStyle = "#fff";
    targetCtx.strokeStyle = "#FF1493";
    targetCtx.lineWidth = 1.5;
    // width handle (face parallel to the y axis, changes widthCm)
    targetCtx.beginPath();
    targetCtx.arc(x0 + w, y0 + d / 2, hr, 0, Math.PI * 2);
    targetCtx.fill();
    targetCtx.stroke();
    // depth handle (face parallel to the x axis, changes depthCm)
    targetCtx.beginPath();
    targetCtx.arc(x0 + w / 2, y0 + d, hr, 0, Math.PI * 2);
    targetCtx.fill();
    targetCtx.stroke();
  }
  targetCtx.restore();
}

// The selected fixture if it belongs to room r, else null
function roomSelectedFixture(r) {
  const id = state.selectedFixtureId;
  if (!id) return null;
  const fx = r.fixtures.find((f) => f.id === id);
  return fx || null;
}

// The span [start,end] (in wall-offset cm) a chimney occupies on wall,
// or null if the chimney does not touch that wall
function chimneySpanOnWall(r, fx, wall) {
  const w = fx.widthCm;
  const d = fx.depthCm;
  const W = r.widthCm;
  const D = r.depthCm;
  switch (fx.corner) {
    case "tl": return wall === "top" ? { start: 0, end: w } : wall === "left" ? { start: D - d, end: D } : null;
    case "tr": return wall === "top" ? { start: W - w, end: W } : wall === "right" ? { start: 0, end: d } : null;
    case "br": return wall === "bottom" ? { start: 0, end: w } : wall === "right" ? { start: D - d, end: D } : null;
    case "bl": return wall === "bottom" ? { start: W - w, end: W } : wall === "left" ? { start: 0, end: d } : null;
  }
  return null;
}

// All items sitting on a wall (openings + chimney spans) sorted by offset
function wallOccupantSpans(r, wall) {
  const list = [];
  for (const fx of r.fixtures) {
    let span = null;
    if (fx.type === "chimney") {
      span = chimneySpanOnWall(r, fx, wall);
    } else if (fx.wall === wall) {
      const g = fx.type === "door" ? doorRenderGeom(r, fx) : fx;
      span = { start: g.offsetCm, end: g.offsetCm + g.widthCm };
    }
    if (span) list.push({ id: fx.id, type: fx.type, start: span.start, end: span.end });
  }
  return list.sort((a, b) => a.start - b.start);
}

// A point on a wall at wall-offset offCm, in world px
function wallPointPx(r, wall, offCm) {
  const s = roomWallSegment(r, wall);
  const dx = s.b.x - s.a.x;
  const dy = s.b.y - s.a.y;
  const len = Math.hypot(dx, dy) || 1;
  return {
    x: cmToPixels(s.a.x + dx * (offCm / len)),
    y: cmToPixels(s.a.y + dy * (offCm / len)),
  };
}

// A linear gap dimension between two offsets on a wall, drawn depthOffset
// px inside the room
function drawGapOnWall(r, targetCtx, wall, fromCm, toCm, depthOffset, color) {
  const n = roomWallNormal(r, wall);
  const pA = wallPointPx(r, wall, fromCm);
  const pB = wallPointPx(r, wall, toCm);
  drawRoomDim(
    targetCtx, pA.x - n.x * depthOffset, pA.y - n.y * depthOffset,
    pB.x - n.x * depthOffset, pB.y - n.y * depthOffset,
    formatLength(Math.round(Math.abs(toCm - fromCm))), color, 6,
  );
}

// Doors/windows/heaters: left gap / width / right gap, staggered inside
function drawOpeningDimensions(r, fx, targetCtx, T, pxScale) {
  const eff = fx.type === "door" ? doorRenderGeom(r, fx) : { offsetCm: fx.offsetCm, widthCm: fx.widthCm, dim: 1 };
  if (eff.merged && !eff.primary) return; // hidden partner of a merged door pair
  const color = eff.colorHex ? (eff.dim < 1 ? hexToRgba(eff.colorHex, 0.55) : eff.colorHex) :
    (eff.dim < 1 ? "rgba(90,90,95,0.55)" : ROOM_COLORS[fx.type] || "#7f8c8d");
  const seg = roomWallSegment(r, fx.wall);
  const a = { x: cmToPixels(seg.a.x), y: cmToPixels(seg.a.y) };
  const b = { x: cmToPixels(seg.b.x), y: cmToPixels(seg.b.y) };
  const lenCm = roomWallLength(r, fx.wall);
  const plen = Math.hypot(b.x - a.x, b.y - a.y) || 1;
  const ux = (b.x - a.x) / plen;
  const uy = (b.y - a.y) / plen;
  const n = roomWallNormal(r, fx.wall);
  const p1 = { x: a.x + ux * eff.offsetCm * pxScale, y: a.y + uy * eff.offsetCm * pxScale };
  const p2 = {
    x: a.x + ux * (eff.offsetCm + eff.widthCm) * pxScale,
    y: a.y + uy * (eff.offsetCm + eff.widthCm) * pxScale,
  };
  // three dims on the inside, staggered: left gap / opening width / right gap
  const in1 = T / 2 + 8;
  const inW = T / 2 + 12;
  const in2 = T / 2 + 22;
  const a1 = { x: a.x - n.x * in1, y: a.y - n.y * in1 };
  const p1d = { x: p1.x - n.x * in1, y: p1.y - n.y * in1 };
  const pW1 = { x: p1.x - n.x * inW, y: p1.y - n.y * inW };
  const pW2 = { x: p2.x - n.x * inW, y: p2.y - n.y * inW };
  const p2d = { x: p2.x - n.x * in2, y: p2.y - n.y * in2 };
  const b2 = { x: b.x - n.x * in2, y: b.y - n.y * in2 };
  drawRoomDim(targetCtx, a1.x, a1.y, p1d.x, p1d.y, formatLength(eff.offsetCm), color, 6);
  drawRoomDim(targetCtx, pW1.x, pW1.y, pW2.x, pW2.y, formatLength(eff.widthCm), color, 5);
  drawRoomDim(
    targetCtx, p2d.x, p2d.y, b2.x, b2.y,
    formatLength(Math.max(0, Math.round(lenCm - eff.offsetCm - eff.widthCm))), color, 6,
  );
}

// Chimneys: size-runner from the corner plus, on each adjacent wall, the gap to
// the next item (or the remainder to the wall end when the wall is empty)
function drawChimneyGapDimensions(r, fx, targetCtx, T) {
  const color = ROOM_COLORS.chimney || "#7f8c8d";
  const corners = roomCorners(r);
  const c = corners[fx.corner];
  if (!c) return;
  const cxp = cmToPixels(c.x);
  const cyp = cmToPixels(c.y);
  const dirX = fx.corner === "tl" || fx.corner === "bl" ? 1 : -1;
  const dirY = fx.corner === "tl" || fx.corner === "tr" ? 1 : -1;
  const inA = T / 2 + 12;
  const inB = T / 2 + 22;
  const wallLenH = r.widthCm;
  const wallLenV = r.depthCm;
  const spans = {
    tl: { h: ["top", 0, fx.widthCm], v: ["left", wallLenV - fx.depthCm, wallLenV] },
    tr: { h: ["top", wallLenH - fx.widthCm, wallLenH], v: ["right", 0, fx.depthCm] },
    br: { h: ["bottom", 0, fx.widthCm], v: ["right", wallLenV - fx.depthCm, wallLenV] },
    bl: { h: ["bottom", wallLenH - fx.widthCm, wallLenH], v: ["left", 0, fx.depthCm] },
  };
  if (!spans[fx.corner]) return;
  const nearestOn = (wall, cStart, cEnd) => {
    let best = null;
    for (const nb of r.fixtures) {
      if (nb.type === "chimney" || nb.wall !== wall) continue;
      const nbStart = nb.offsetCm;
      const nbEnd = nb.offsetCm + nb.widthCm;
      if (nbEnd <= cStart) {
        const d = cStart - nbEnd;
        if (!best || d < best.d) best = { d, dir: -1, edge: nbEnd };
      } else if (nbStart >= cEnd) {
        const d = nbStart - cEnd;
        if (!best || d < best.d) best = { d, dir: 1, edge: nbStart };
      }
    }
    return best;
  };
  const drawOne = (spanArr, isHoriz, remainLabel) => {
    const [wall, cStart, cEnd] = spanArr;
    // the chimney edge facing the wall remainder (start edge if the chimney
    // begins at the wall start, else the end edge)
    const farEdge = cStart === 0 ? cEnd : cStart;
    const oppositeEnd = cStart === 0 ? (isHoriz ? wallLenH : wallLenV) : 0;
    const ePx = wallPointPx(r, wall, farEdge);
    // the chimney's own size from the corner ...
    if (isHoriz) {
      drawRoomDim(targetCtx, cxp, cyp + dirY * inA, ePx.x, cyp + dirY * inA, formatLength(fx.widthCm), color, 6);
    } else {
      drawRoomDim(targetCtx, cxp + dirX * inA, cyp, cxp + dirX * inA, ePx.y, formatLength(fx.depthCm), color, 6);
    }
    // ... in addition to the gap to the next item (or the wall remainder)
    const nb = nearestOn(wall, cStart, cEnd);
    let x1, y1, x2, y2, label;
    if (nb) {
      const edgePx = wallPointPx(r, wall, nb.dir > 0 ? cEnd : cStart);
      const nbPx = wallPointPx(r, wall, nb.edge);
      if (isHoriz) {
        x1 = edgePx.x; y1 = cyp + dirY * inB;
        x2 = nbPx.x; y2 = cyp + dirY * inB;
      } else {
        x1 = cxp + dirX * inB; y1 = edgePx.y;
        x2 = cxp + dirX * inB; y2 = nbPx.y;
      }
      label = formatLength(Math.round(nb.d));
    } else {
      const oPx = wallPointPx(r, wall, oppositeEnd);
      if (isHoriz) {
        x1 = ePx.x; y1 = cyp + dirY * inB;
        x2 = oPx.x; y2 = cyp + dirY * inB;
      } else {
        x1 = cxp + dirX * inB; y1 = ePx.y;
        x2 = cxp + dirX * inB; y2 = oPx.y;
      }
      label = remainLabel;
    }
    drawRoomDim(targetCtx, x1, y1, x2, y2, label, color, 6);
  };
  drawOne(spans[fx.corner].h, true, formatLength(Math.max(0, Math.round(wallLenH - fx.widthCm))));
  drawOne(spans[fx.corner].v, false, formatLength(Math.max(0, Math.round(wallLenV - fx.depthCm))));
}

// Gaps between the selected opening and its immediate neighbours on the wall
function drawEntityNeighborGaps(r, fx, targetCtx, T) {
  const inG = T / 2 + 32;
  const items = wallOccupantSpans(r, fx.wall);
  const idx = items.findIndex((it) => it.id === fx.id);
  if (idx < 0) return;
  const prev = items[idx - 1];
  const next = items[idx + 1];
  if (prev) {
    const gap = fx.offsetCm - prev.end;
    if (gap > 0) drawGapOnWall(r, targetCtx, fx.wall, prev.end, fx.offsetCm, inG, "#95a5a6");
  }
  if (next) {
    const gap = next.start - (fx.offsetCm + fx.widthCm);
    if (gap > 0) drawGapOnWall(r, targetCtx, fx.wall, fx.offsetCm + fx.widthCm, next.start, inG, "#95a5a6");
  }
}

// In room mode: gaps between every pair of consecutive openings on a wall
// (chimney gaps are already drawn by the chimney dimensions)
function drawWallSegmentGaps(r, targetCtx, T) {
  const inG = T / 2 + 32;
  for (const wall of ROOM_WALL_TYPES) {
    const items = wallOccupantSpans(r, wall).filter((it) => it.type !== "chimney");
    for (let i = 0; i < items.length - 1; i++) {
      const gap = items[i + 1].start - items[i].end;
      if (gap <= 0) continue;
      drawGapOnWall(r, targetCtx, wall, items[i].end, items[i + 1].start, inG, "#95a5a6");
    }
  }
}

// Automatic dimensions: wall lengths on the outside, openings on the inside
function drawRoomDimensions(r, targetCtx, T, pxScale) {
  targetCtx.save();
  // A selected fixture narrows the measurements to the ones related to it
  const selFx = roomSelectedFixture(r);
  if (selFx) {
    if (selFx.type === "chimney") {
      drawChimneyGapDimensions(r, selFx, targetCtx, T);
    } else {
      drawOpeningDimensions(r, selFx, targetCtx, T, pxScale);
      drawEntityNeighborGaps(r, selFx, targetCtx, T);
    }
    targetCtx.restore();
    return;
  }
  for (const wall of ROOM_WALL_TYPES) {
    const seg = roomWallSegment(r, wall);
    const a = { x: cmToPixels(seg.a.x), y: cmToPixels(seg.a.y) };
    const b = { x: cmToPixels(seg.b.x), y: cmToPixels(seg.b.y) };
    const n = roomWallNormal(r, wall);
    const off = T + 16; // clear of the wall band, which now lies fully outside
    const outA = { x: a.x + n.x * off, y: a.y + n.y * off };
    const outB = { x: b.x + n.x * off, y: b.y + n.y * off };
    const label = formatLength(roomWallLength(r, wall));
    drawRoomDim(targetCtx, outA.x, outA.y, outB.x, outB.y, label, "#7f8c8d");
  }
  r.fixtures.forEach((fx) => {
    if (fx.type === "chimney") drawChimneyGapDimensions(r, fx, targetCtx, T);
    else drawOpeningDimensions(r, fx, targetCtx, T, pxScale);
  });

  // Gaps between consecutive openings on each wall
  drawWallSegmentGaps(r, targetCtx, T);

  targetCtx.restore();
}

// Minimal linear dimension with halo label (world px space)
function drawRoomDim(targetCtx, x1, y1, x2, y2, label, color, fontSize) {
  targetCtx.save();
  targetCtx.strokeStyle = color;
  targetCtx.fillStyle = color;
  targetCtx.lineWidth = 1;
  targetCtx.beginPath();
  targetCtx.moveTo(x1, y1);
  targetCtx.lineTo(x2, y2);
  targetCtx.stroke();
  const mx = (x1 + x2) / 2;
  const my = (y1 + y2) / 2;
  const fs = fontSize || 11;
  targetCtx.font = `bold ${fs}px sans-serif`;
  targetCtx.textAlign = "center";
  targetCtx.textBaseline = "middle";
  const tw = targetCtx.measureText(label).width;
  targetCtx.fillStyle = "rgba(255,255,255,0.9)";
  targetCtx.fillRect(mx - tw / 2 - 3, my - fs / 2 - 2, tw + 6, fs + 4);
  targetCtx.fillStyle = color;
  targetCtx.fillText(label, mx, my);
  targetCtx.restore();
}

function fitRoomView() {
  if (!state.rooms.length && !state.floorPlanImage) return;
  const wrapper = document.getElementById("canvasWrapper");
  const ww = wrapper.clientWidth;
  const wh = wrapper.clientHeight;
  let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
  if (state.floorPlanImage) {
    minX = 0; minY = 0; maxX = state.floorPlanImage.width; maxY = state.floorPlanImage.height;
  }
  state.rooms.forEach((r) => {
    const x0 = cmToPixels(r.x), y0 = cmToPixels(r.y);
    const x1 = cmToPixels(r.x + r.widthCm), y1 = cmToPixels(r.y + r.depthCm);
    minX = Math.min(minX, x0); minY = Math.min(minY, y0);
    maxX = Math.max(maxX, x1); maxY = Math.max(maxY, y1);
  });
  const bw = maxX - minX, bh = maxY - minY;
  if (bw <= 0 || bh <= 0) return;
  state.zoom = Math.min((ww * 0.9) / bw, (wh * 0.9) / bh, 2);
  state.zoom = Math.max(state.zoom, 0.02);
  state.pan.x = (ww - bw * state.zoom) / 2 - minX * state.zoom;
  state.pan.y = (wh - bh * state.zoom) / 2 - minY * state.zoom;
  document.getElementById("zoomLevel").textContent = Math.round(state.zoom * 100) + "%";
  render();
}

// --- Panel rendering ---

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function renderRoomPanel() {
  const panel = document.getElementById("roomPanel");
  if (!panel) return;
  updateSidebarPanels();

  const wt = document.getElementById("wallThickness");
  if (wt) wt.value = Math.round(state.wallThicknessCm * 10) / 10;

  renderRoomList();
  renderRoomDetail();
}

function renderRoomList() {
  const list = document.getElementById("roomList");
  if (!list) return;
  if (!state.rooms.length) {
    list.innerHTML = `<div class="room-empty">${t("room.noRooms")}</div>`;
    return;
  }
  list.innerHTML = state.rooms
    .map((r, i) => {
      const selected = r.id === state.selectedRoomId ? " selected" : "";
      return `
      <div class="room-card${selected}" data-roomid="${r.id}" role="listitem">
        <div class="room-card-head">
          <input type="text" class="room-card-name" data-roomname="${r.id}" value="${escapeHtml(r.name || "")}" placeholder="${t("room.cardName", { n: i + 1 })}" aria-label="${t("room.roomName")}" />
          <button class="obstacle-del-btn" data-delroom="${r.id}" aria-label="${t("room.delete")}">🗑</button>
        </div>
        <div class="room-card-inputs">
          <label>${t("room.width")} <input type="number" step="1" min="1" value="${Math.round(r.widthCm)}" data-roomfield="width" data-id="${r.id}" /></label>
          <label>${t("room.depth")} <input type="number" step="1" min="1" value="${Math.round(r.depthCm)}" data-roomfield="depth" data-id="${r.id}" /></label>
          <label>${t("room.ceiling")} <input type="number" step="1" min="1" value="${r.ceilingHeightCm || 260}" data-roomfield="ceiling" data-id="${r.id}" /></label>
        </div>
      </div>`;
    })
    .join("");

  list.querySelectorAll(".room-card").forEach((card) => {
    const id = card.getAttribute("data-roomid");
    card.addEventListener("click", (ev) => {
      if (ev.target.closest("input") || ev.target.closest("button")) return;
      selectRoom(id);
    });
  });
  list.querySelectorAll("[data-delroom]").forEach((btn) => {
    btn.addEventListener("click", (ev) => {
      ev.stopPropagation();
      deleteRoom(btn.getAttribute("data-delroom"));
    });
  });
  list.querySelectorAll("[data-roomfield]").forEach((inp) => {
    inp.addEventListener("change", () => {
      updateRoomField(inp.getAttribute("data-id"), inp.getAttribute("data-roomfield"), inp.value);
    });
  });
  list.querySelectorAll("[data-roomname]").forEach((inp) => {
    inp.addEventListener("change", () => {
      renameRoom(inp.getAttribute("data-roomname"), inp.value);
    });
  });
}

function renderRoomDetail() {
  const detail = document.getElementById("roomDetail");
  if (!detail) return;
  const r = getRoom(state.selectedRoomId);
  if (!r) {
    detail.innerHTML = "";
    return;
  }

  const wallHtml = ROOM_WALL_TYPES.map(
    (w) => `<button type="button" class="room-wall-btn${w === state.selectedWall ? " active" : ""}" data-wall="${w}">${t("room.wall" + {
      top: "Top", right: "Right", bottom: "Bottom", left: "Left",
    }[w])}</button>`,
  ).join("");

  const addHtml = `
    <button type="button" class="room-add-btn" data-addfx="door" style="--fcolor:${ROOM_COLORS.door}">🚪 ${t("room.addDoor")}</button>
    <button type="button" class="room-add-btn" data-addfx="window" style="--fcolor:${ROOM_COLORS.window}">🪟 ${t("room.addWindow")}</button>
    <button type="button" class="room-add-btn" data-addfx="heater" style="--fcolor:${ROOM_COLORS.heater}">♨ ${t("room.addHeater")}</button>
  `;

  const cornerHtml = ROOM_CORNERS.map(
    (c) => `<button type="button" class="room-corner-btn" data-corner="${c}">${t("room.corner" + { tl: "Tl", tr: "Tr", br: "Br", bl: "Bl" }[c])}</button>`,
  ).join("");

  detail.innerHTML = `
    <div class="room-detail-block">
      <div class="room-detail-title">${t("room.selectedRooms")}</div>
      <div class="room-wall-picker">${wallHtml}</div>
      <div class="room-fixture-adds">${addHtml}</div>
      <div class="room-fixture-adds room-corner-row">
        <span class="room-corner-label">${t("room.chimneyAt")}</span>
        ${cornerHtml}
      </div>
    </div>
    <div id="roomFixtureList" class="room-fixture-list"></div>
    <div class="room-hint">${t("room.snapHint")}</div>
  `;

  detail.querySelectorAll(".room-wall-btn").forEach((b) => {
    b.addEventListener("click", () => {
      state.selectedWall = b.getAttribute("data-wall");
      renderRoomPanel();
    });
  });
  detail.querySelectorAll("[data-addfx]").forEach((b) => {
    b.addEventListener("click", () => {
      if (!state.selectedWall) return;
      addFixture(r.id, state.selectedWall, b.getAttribute("data-addfx"));
    });
  });
  detail.querySelectorAll("[data-corner]").forEach((b) => {
    b.addEventListener("click", () => {
      addFixture(r.id, b.getAttribute("data-corner"), "chimney");
    });
  });

  renderFixtureList();
}

function renderFixtureList() {
  const list = document.getElementById("roomFixtureList");
  if (!list) return;
  const r = getRoom(state.selectedRoomId);
  if (!r || !list) return;
  if (!r.fixtures.length) {
    list.innerHTML = `<div class="room-empty">${t("room.noFixtures")}</div>`;
    return;
  }
  const wallLen = state.selectedWall ? roomWallLength(r, state.selectedWall) : 0;
  list.innerHTML = r.fixtures
    .map((fx) => {
      const selected = fx.id === state.selectedFixtureId ? " selected" : "";
      const color = ROOM_COLORS[fx.type] || "#7f8c8d";
      const name = t("room.fixture" + { door: "Door", window: "Window", heater: "Heater", chimney: "Chimney" }[fx.type]);
      const controls = [];
      if (fx.type === "chimney") {
        controls.push(`<label>${t("room.width")} <input type="number" step="1" min="1" value="${Math.round(fx.widthCm)}" data-fixturefield="width" data-id="${fx.id}" /></label>`);
        controls.push(`<label>${t("room.depth")} <input type="number" step="1" min="1" value="${Math.round(fx.depthCm)}" data-fixturefield="depth" data-id="${fx.id}" /></label>`);
      } else {
        controls.push(`<label>${t("room.offset")} <input type="number" step="1" min="0" max="${wallLen}" value="${Math.round(fx.offsetCm)}" data-fixturefield="offset" data-id="${fx.id}" /></label>`);
        controls.push(`<label>${t("room.width")} <input type="number" step="1" min="1" max="${wallLen}" value="${Math.round(fx.widthCm)}" data-fixturefield="width" data-id="${fx.id}" /></label>`);
        if (fx.type === "door") {
          const compass = {
            top: { start: "Left", end: "Right" },
            right: { start: "Top", end: "Bottom" },
            bottom: { start: "Right", end: "Left" },
            left: { start: "Bottom", end: "Top" },
          }[fx.wall] || { start: "Left", end: "Right" };
          const opening = `${fx.swing}-${fx.hinge}`;
          const openingOpts = [
            ["in-start", `${t("room.swingIn")} · ${t("room.wall" + compass.start)}`],
            ["in-end", `${t("room.swingIn")} · ${t("room.wall" + compass.end)}`],
            ["out-start", `${t("room.swingOut")} · ${t("room.wall" + compass.start)}`],
            ["out-end", `${t("room.swingOut")} · ${t("room.wall" + compass.end)}`],
          ]
            .map(([v, label]) => `<option value="${v}"${opening === v ? " selected" : ""}>${label}</option>`)
            .join("");
          controls.push(`<label>${t("room.direction")} <select data-dooropt="opening" data-id="${fx.id}">${openingOpts}</select></label>`);
        }
        if (fx.type === "heater") {
          controls.push(`<label>${t("room.depth")} <input type="number" step="1" min="1" value="${Math.round(fx.depthCm)}" data-fixturefield="depth" data-id="${fx.id}" /></label>`);
        }
        if (fx.type === "window" && fx.boardDepthCm != null) {
          controls.push(`<label>${t("room.board")} <input type="number" step="1" min="0" value="${Math.round(fx.boardDepthCm)}" data-fixturefield="board" data-id="${fx.id}" /></label>`);
          controls.push(`<label>${t("room.boardOverlap")} <input type="number" step="1" min="0" value="${Math.round(fx.boardOverlapCm != null ? fx.boardOverlapCm : 3)}" data-fixturefield="boardOverlap" data-id="${fx.id}" /></label>`);
        }
      }
      const wallTag = fx.wall === "corner" ? t("room.corner" + { tl: "Tl", tr: "Tr", br: "Br", bl: "Bl" }[fx.corner]) : t("room.wall" + { top: "Top", right: "Right", bottom: "Bottom", left: "Left" }[fx.wall]);
      return `
      <div class="room-fixture-item${selected}" data-fixtureid="${fx.id}">
        <div class="room-fixture-head">
          <span class="measure-swatch" style="background:${color}"></span>
          <span class="obstacle-item-name">${name} · ${wallTag}</span>
          <button class="obstacle-del-btn" data-delfixture="${fx.id}" aria-label="${t("room.delete")}">🗑</button>
        </div>
        <div class="room-fixture-controls">${controls.join("")}</div>
      </div>`;
    })
    .join("");

  list.querySelectorAll(".room-fixture-item").forEach((item) => {
    item.addEventListener("click", (ev) => {
      if (ev.target.closest("input") || ev.target.closest("button")) return;
      state.selectedFixtureId = item.getAttribute("data-fixtureid");
      renderRoomPanel();
      render();
    });
  });
  list.querySelectorAll("[data-delfixture]").forEach((btn) => {
    btn.addEventListener("click", (ev) => {
      ev.stopPropagation();
      deleteFixture(r.id, btn.getAttribute("data-delfixture"));
    });
  });
  list.querySelectorAll("[data-fixturefield]").forEach((inp) => {
    inp.addEventListener("change", () => {
      updateFixtureField(r.id, inp.getAttribute("data-id"), inp.getAttribute("data-fixturefield"), inp.value);
    });
  });
  list.querySelectorAll("[data-dooropt]").forEach((sel) => {
    sel.addEventListener("change", () => {
      setDoorOption(r.id, sel.getAttribute("data-id"), sel.getAttribute("data-dooropt"), sel.value);
    });
  });
}

// Export the floor plan + rooms as a PNG image
function exportMeasurementImage() {
  const hasPlan = !!state.floorPlanImage;
  if (!hasPlan && state.rooms.length === 0) {
    alert(t("room.noDataToExport"));
    return;
  }

  let bx1 = Infinity;
  let by1 = Infinity;
  let bx2 = -Infinity;
  let by2 = -Infinity;
  if (state.rooms.length) {
    const ex = (state.pixelsPerMeter || DEFAULT_MEASURE_SCALE) / 100;
    // include the wall band, which extends the wall thickness OUTSIDE the room
    const wt = state.wallThicknessCm * ex;
    state.rooms.forEach((r) => {
      bx1 = Math.min(bx1, r.x * ex - wt);
      by1 = Math.min(by1, r.y * ex - wt);
      bx2 = Math.max(bx2, (r.x + r.widthCm) * ex + wt);
      by2 = Math.max(by2, (r.y + r.depthCm) * ex + wt);
    });
  }
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

  const W = Math.max(2, Math.ceil((bw + pad * 2) * scale));
  const H = Math.max(2, Math.ceil((bh + pad * 2) * scale) + 32);

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
  // Export keeps measurements for every room
  drawRoomsLayer(octx, true, true);
  octx.restore();

  // Caption bar with project and scale info
  const ppm = state.pixelsPerMeter || DEFAULT_MEASURE_SCALE;
  octx.fillStyle = "#2c3e50";
  octx.font = "bold 14px sans-serif";
  octx.textAlign = "left";
  octx.textBaseline = "alphabetic";
  octx.fillText(
    `${state.projectName}  ·  ${Math.round(ppm)} px/m`,
    12,
    18,
  );

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

  // Fit the plan (or the rooms) to the view, which also renders
  if (state.floorPlanImage) {
    fitToView();
  } else if (state.rooms.length) {
    fitRoomsToView();
  } else {
    render();
  }
}

// Fit floor plan to viewport (or room content for rooms-only projects)
function fitToView() {
  if (!state.floorPlanImage) {
    fitRoomsToView();
    return;
  }

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

// Width of the canvas hidden behind the pinned sidebar (px) so content can be
// centered in the actually visible area
function sidebarOverlayWidth() {
  if (state.sidebarPinned) {
    const sidebar = document.getElementById("sidebar");
    if (sidebar) return 320;
  }
  return 0;
}

// Center and zoom the room footprints to fill the visible canvas area
function fitRoomsToView() {
  const rect = canvas.getBoundingClientRect();
  const w = rect.width || 1;
  const h = rect.height || 1;

  if (!state.rooms.length) {
    state.zoom = 1;
    state.pan = { x: 0, y: 0 };
    document.getElementById("zoomLevel").textContent = "100%";
    render();
    return;
  }

  const sbw = sidebarOverlayWidth();
  const visibleW = Math.max(1, w - sbw);

  const padCm = 60;
  let x0 = Infinity,
    y0 = Infinity,
    x1 = -Infinity,
    y1 = -Infinity;
  for (const r of state.rooms) {
    x0 = Math.min(x0, cmToPixels(r.x) - cmToPixels(padCm));
    y0 = Math.min(y0, cmToPixels(r.y) - cmToPixels(padCm));
    x1 = Math.max(x1, cmToPixels(r.x + r.widthCm) + cmToPixels(padCm));
    y1 = Math.max(y1, cmToPixels(r.y + r.depthCm) + cmToPixels(padCm));
  }
  const contentW = Math.max(1, x1 - x0);
  const contentH = Math.max(1, y1 - y0);

  const zoom = Math.min((visibleW * 0.9) / contentW, (h * 0.9) / contentH, 2);
  state.zoom = Math.max(0.1, zoom);

  // Center the content in the visible area (right of the pinned sidebar)
  const vcX = sbw + visibleW / 2;
  const vcY = h / 2;
  state.pan.x = vcX - ((x0 + x1) / 2) * state.zoom;
  state.pan.y = vcY - ((y0 + y1) / 2) * state.zoom;

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
    const themeColors = getThemeCanvasColors();
    ctx.fillStyle = themeColors.bg;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    if (state.roomEditorMode) {
      // Show a construction grid for from-scratch Grundrisse
      drawMeasureGrid(
        ctx,
        {
          s: 1,
          ox: 0,
          oy: 0,
          x0: -2000,
          y0: -2000,
          x1: 20000,
          y1: 20000,
        },
        themeColors.grid
      );
    } else {
      ctx.fillStyle = themeColors.hint;
      ctx.font = "20px sans-serif";
      ctx.textAlign = "center";
      ctx.fillText("Grundriss hochladen", canvas.width / 2, canvas.height / 2);
    }
  }

  // Draw the parametric rooms (floor plan created from dimensions)
  drawRoomsLayer(ctx, state.roomEditorMode);

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

  // Handle room editor mode
  if (state.roomEditorMode) {
    // Middle mouse or Shift-click drag pans
    if (e.button === 1 || e.shiftKey) {
      state.isPanning = true;
      state.panStart = { x: e.clientX - state.pan.x, y: e.clientY - state.pan.y };
      return;
    }

    // Fixtures (doors, windows, heaters, chimney corner) get dragged/resized
    const fxHit = hitTestFixture(x, y);
    if (fxHit) {
      if (fxHit.fx.type === "chimney" && !fxHit.handle) {
        // plain click inside a selected chimney just selects it
        state.selectedRoomId = fxHit.room.id;
        state.selectedFixtureId = fxHit.fx.id;
        renderRoomPanel();
        render();
      } else {
        startFixtureDrag(fxHit.room, fxHit.fx, fxHit.handle, { x, y });
        canvas.style.cursor = "grabbing";
        renderRoomPanel();
        render();
      }
      return;
    }

    const hit = hitTestRooms(x, y);
    if (hit) {
      const r = hit.room;
      state.selectedRoomId = r.id;
      state.selectedWall = hit.wall || state.selectedWall || "top";
      state.selectedFixtureId = null;
      canvas.style.cursor = "grabbing";
      const pxScale = roomPxScale();
      startRoomDrag(r, {
        dx: x / pxScale - r.x,
        dy: y / pxScale - r.y,
      });
      renderRoomPanel();
      render();
    } else {
      state.selectedRoomId = null;
      state.selectedWall = null;
      state.selectedFixtureId = null;
      renderRoomPanel();
      render();
      // Left-drag on empty canvas pans the view (like furniture mode)
      state.isPanning = true;
      state.panStart = { x: e.clientX - state.pan.x, y: e.clientY - state.pan.y };
    }
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

  if (state.roomEditorMode && state.draggingFixture) {
    // Move/resize a fixture (door, window, heater, chimney) along its wall
    const { x, y } = screenToCanvas(e.clientX, e.clientY);
    moveFixtureDragTo({ x, y });
    return;
  }

  if (state.roomEditorMode && state.draggingRoomId) {
    // Move the room with wall-thickness + door snapping
    const { x, y } = screenToCanvas(e.clientX, e.clientY);
    moveRoomDragTo({ x, y });
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
  if (state.draggingRoomId) {
    endRoomDrag();
    renderRoomPanel();
  }
  if (state.draggingFixture) {
    endFixtureDrag();
    renderRoomPanel();
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

  // Delete key removes the selected room, room fixture or furniture
  if (e.key === "Delete" || e.key === "Del") {
    if (state.roomEditorMode && state.selectedFixtureId) {
      const r = state.rooms.find((rm) =>
        rm.fixtures.some((f) => f.id === state.selectedFixtureId),
      );
      if (r) deleteFixture(r.id, state.selectedFixtureId);
    } else if (state.roomEditorMode && state.selectedRoomId) {
      deleteRoom(state.selectedRoomId);
    } else if (state.selectedFurniture) {
      deleteFurniture();
    }
    return;
  }

  // Escape exits the room editor
  if (e.key === "Escape") {
    if (state.roomEditorMode) {
      exitRoomEditorMode();
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
    rooms: state.rooms,
    wallThicknessCm: state.wallThicknessCm,
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
    state.rooms = project.rooms || [];
    state.wallThicknessCm = project.wallThicknessCm || DEFAULT_WALL_THICKNESS_CM;
    // Handle both old and new snapshot formats
    state.snapshotGraph = project.snapshotGraph || [];
    state.currentSnapshotId = project.currentSnapshotId || null;
    state.hasUnsavedChanges = false;
    state.roomEditorMode = false;
    state.selectedRoomId = null;
    state.selectedWall = null;
    state.selectedFixtureId = null;
    updateSnapshotUI();
    renderSnapshotGraph();

    // Room plans open directly in the room editor (and hide the overlay)
    if (state.rooms.length) startRoomEditorMode();
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
  state.rooms = project.rooms || [];
  state.wallThicknessCm = project.wallThicknessCm || DEFAULT_WALL_THICKNESS_CM;
  // Handle both old and new snapshot formats
  state.snapshotGraph = project.snapshotGraph || [];
  state.currentSnapshotId = project.currentSnapshotId || null;
  state.hasUnsavedChanges = false;
  state.roomEditorMode = false;
  state.selectedRoomId = null;
  state.selectedWall = null;
  state.selectedFixtureId = null;
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

  // Show the restored plan immediately: hide the overlay, size the canvas and
  // open the room editor whenever rooms exist
  hideUploadOverlay();
  resizeCanvas();
  if (state.rooms.length) {
    startRoomEditorMode();
  } else {
    render();
    updateScaleDisplay();
  }
}

// Close project (no confirmation needed as we auto-save)
function closeProject() {
  state.floorPlan = null;
  state.floorPlanImage = null;
  state.furniture = [];
  state.selectedFurniture = null;
  state.pixelsPerMeter = null;
  state.projectName = "Untitled Project";
  state.rooms = [];
  state.wallThicknessCm = DEFAULT_WALL_THICKNESS_CM;
  state.roomEditorMode = false;
  state.selectedRoomId = null;
  state.selectedWall = null;
  state.selectedFixtureId = null;
  const roomBtn = document.getElementById("roomBtn");
  if (roomBtn) {
    roomBtn.classList.remove("active");
    roomBtn.setAttribute("aria-pressed", "false");
  }
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
// Export project to JSON file
function exportProject() {
  const project = {
    name: state.projectName,
    floorPlan: state.floorPlan,
    pixelsPerMeter: state.pixelsPerMeter,
    furniture: state.furniture,
    rooms: state.rooms,
    wallThicknessCm: state.wallThicknessCm,
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
