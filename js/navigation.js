// js/navigation.js - Enhanced Navigation System

import { GameState, ROOMS } from './game.js';

// Navigation State
export const NavigationState = {
    breadcrumbs: [],
    roomHistory: [],
    maxBreadcrumbs: 10,
    maxHistory: 50,
    currentPath: []
};

// Breadcrumb Navigation System
export function addToBreadcrumbs(roomId) {
    const room = ROOMS[roomId];
    if (!room) return;

    const breadcrumb = {
        id: roomId,
        name: room.name,
        timestamp: Date.now(),
        turn: GameState.turn
    };

    // Remove duplicate if exists
    NavigationState.breadcrumbs = NavigationState.breadcrumbs.filter(b => b.id !== roomId);
    
    // Add to front
    NavigationState.breadcrumbs.unshift(breadcrumb);
    
    // Limit size
    if (NavigationState.breadcrumbs.length > NavigationState.maxBreadcrumbs) {
        NavigationState.breadcrumbs = NavigationState.breadcrumbs.slice(0, NavigationState.maxBreadcrumbs);
    }

    updateBreadcrumbUI();
}

export function addToRoomHistory(roomId) {
    const room = ROOMS[roomId];
    if (!room) return;

    const historyEntry = {
        id: roomId,
        name: room.name,
        timestamp: Date.now(),
        turn: GameState.turn,
        visitCount: 1
    };

    // Check if room already in history
    const existingIndex = NavigationState.roomHistory.findIndex(r => r.id === roomId);
    if (existingIndex !== -1) {
        NavigationState.roomHistory[existingIndex].visitCount++;
        NavigationState.roomHistory[existingIndex].timestamp = Date.now();
    } else {
        NavigationState.roomHistory.unshift(historyEntry);
    }

    // Limit size
    if (NavigationState.roomHistory.length > NavigationState.maxHistory) {
        NavigationState.roomHistory = NavigationState.roomHistory.slice(0, NavigationState.maxHistory);
    }

    updateRoomHistoryUI();
}

export function updateBreadcrumbUI() {
    const breadcrumbContainer = document.getElementById('breadcrumb-navigation');
    if (!breadcrumbContainer) return;

    if (NavigationState.breadcrumbs.length === 0) {
        breadcrumbContainer.innerHTML = '<div class="text-gray-500 text-sm">No previous rooms</div>';
        return;
    }

    let html = '<div class="flex flex-wrap gap-1 text-sm">';
    
    NavigationState.breadcrumbs.forEach((breadcrumb, index) => {
        const isLast = index === NavigationState.breadcrumbs.length - 1;
        const opacity = Math.max(0.4, 1 - (index * 0.1)); // Fade older entries
        
        html += `<div class="flex items-center" style="opacity: ${opacity}">`;
        html += `<button class="breadcrumb-room text-cyan-400 hover:text-cyan-200 underline cursor-pointer" 
                        onclick="navigateToRoom('${breadcrumb.id}')" 
                        title="Turn ${breadcrumb.turn}">${breadcrumb.name}</button>`;
        
        if (!isLast) {
            html += `<span class="mx-1 text-gray-500">→</span>`;
        }
        
        html += `</div>`;
    });
    
    html += '</div>';
    breadcrumbContainer.innerHTML = html;
}

export function updateRoomHistoryUI() {
    const historyPanel = document.getElementById('room-history-panel');
    if (!historyPanel) return;

    const recentRooms = NavigationState.roomHistory.slice(0, 10); // Show last 10
    
    let html = '';
    if (recentRooms.length === 0) {
        html = '<div class="text-gray-500 text-sm">No rooms visited yet</div>';
    } else {
        html = '<div class="space-y-1">';
        recentRooms.forEach(room => {
            const timeAgo = Math.floor((Date.now() - room.timestamp) / 1000);
            const timeText = timeAgo < 60 ? 'Just now' : `${Math.floor(timeAgo / 60)}m ago`;
            
            html += `<div class="flex justify-between items-center text-sm">
                        <button class="history-room text-yellow-400 hover:text-yellow-200 underline cursor-pointer flex-1 text-left" 
                                onclick="navigateToRoom('${room.id}')">${room.name}</button>
                        <div class="text-gray-500 text-xs ml-2">
                            <span title="Visit count">×${room.visitCount}</span>
                            <span class="ml-1" title="Last visit">${timeText}</span>
                        </div>
                    </div>`;
        });
        html += '</div>';
    }
    
    historyPanel.innerHTML = html;
}

// Navigate to room function (to be called from UI)
window.navigateToRoom = function(roomId) {
    if (ROOMS[roomId] && GameState.currentRoom !== roomId) {
        // Use the game's movement system
        if (window.goToRoom) {
            window.goToRoom(roomId);
        } else {
            // Fallback: simulate visit command
            const command = `visit ${ROOMS[roomId].name.toLowerCase().replace(/\s+/g, '_')}`;
            if (window.processCommand) {
                window.processCommand(command);
            }
        }
    }
};

// Command Suggestion System
export const CommandSuggestions = {
    contextCommands: new Map(),
    recentCommands: [],
    maxRecent: 10
};

export function getContextualCommands(roomId, inventory = []) {
    const room = ROOMS[roomId];
    if (!room) return [];

    const suggestions = [];
    
    // Room-based suggestions
    if (room.items && room.items.length > 0) {
        room.items.forEach(item => {
            suggestions.push(`take ${item}`);
            suggestions.push(`examine ${item}`);
        });
    }

    // Exit suggestions
    if (room.exits) {
        Object.keys(room.exits).forEach(direction => {
            suggestions.push(`go ${direction}`);
        });
    }

    // Inventory-based suggestions
    inventory.forEach(item => {
        suggestions.push(`use ${item}`);
        suggestions.push(`examine ${item}`);
        suggestions.push(`drop ${item}`);
    });

    // General context suggestions
    suggestions.push('look around');
    suggestions.push('listen');
    suggestions.push('talk');
    
    if (room.locked) {
        suggestions.push('search for key');
    }

    return [...new Set(suggestions)]; // Remove duplicates
}

export function addToRecentCommands(command) {
    CommandSuggestions.recentCommands = CommandSuggestions.recentCommands.filter(c => c !== command);
    CommandSuggestions.recentCommands.unshift(command);
    
    if (CommandSuggestions.recentCommands.length > CommandSuggestions.maxRecent) {
        CommandSuggestions.recentCommands.pop();
    }
}

export function updateCommandSuggestions() {
    const suggestionsContainer = document.getElementById('command-suggestions');
    if (!suggestionsContainer) return;

    const contextCommands = getContextualCommands(GameState.currentRoom, GameState.inventory);
    const recentCommands = CommandSuggestions.recentCommands.slice(0, 5);

    let html = '';
    
    if (contextCommands.length > 0) {
        html += '<div class="mb-2"><h5 class="text-xs text-cyan-400 mb-1">Suggested Actions:</h5>';
        html += '<div class="flex flex-wrap gap-1">';
        contextCommands.slice(0, 6).forEach(cmd => {
            html += `<button class="suggestion-btn text-xs px-2 py-1 bg-gray-800 hover:bg-gray-700 rounded border border-cyan-600 text-cyan-300" 
                            onclick="useSuggestion('${cmd}')">${cmd}</button>`;
        });
        html += '</div></div>';
    }

    if (recentCommands.length > 0) {
        html += '<div><h5 class="text-xs text-yellow-400 mb-1">Recent Commands:</h5>';
        html += '<div class="flex flex-wrap gap-1">';
        recentCommands.forEach(cmd => {
            html += `<button class="suggestion-btn text-xs px-2 py-1 bg-gray-800 hover:bg-gray-700 rounded border border-yellow-600 text-yellow-300" 
                            onclick="useSuggestion('${cmd}')">${cmd}</button>`;
        });
        html += '</div></div>';
    }

    suggestionsContainer.innerHTML = html;
}

window.useSuggestion = function(command) {
    const input = document.getElementById('player-input');
    if (input) {
        input.value = command;
        input.focus();
    }
};

// Interactive Minimap System
export const MinimapSystem = {
    canvas: null,
    ctx: null,
    scale: 20,
    offsetX: 0,
    offsetY: 0,
    roomSize: 18,
    isDragging: false,
    lastMousePos: { x: 0, y: 0 }
};

export function initializeMinimap() {
    const canvas = document.getElementById('minimap-canvas');
    if (!canvas) return;

    MinimapSystem.canvas = canvas;
    MinimapSystem.ctx = canvas.getContext('2d');

    // Set canvas size
    const container = canvas.parentElement;
    canvas.width = container.clientWidth - 20;
    canvas.height = 200;

    // Add event listeners
    canvas.addEventListener('click', handleMinimapClick);
    canvas.addEventListener('mousedown', handleMinimapMouseDown);
    canvas.addEventListener('mousemove', handleMinimapMouseMove);
    canvas.addEventListener('mouseup', handleMinimapMouseUp);
    canvas.addEventListener('mouseleave', handleMinimapMouseUp);
    canvas.addEventListener('wheel', handleMinimapWheel);

    drawMinimap();
}

function handleMinimapClick(event) {
    const rect = MinimapSystem.canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    // Convert screen coordinates to world coordinates
    const worldX = (x - MinimapSystem.canvas.width / 2 - MinimapSystem.offsetX) / MinimapSystem.scale;
    const worldY = (y - MinimapSystem.canvas.height / 2 - MinimapSystem.offsetY) / MinimapSystem.scale;

    // Find clicked room
    for (const roomId in ROOMS) {
        const room = ROOMS[roomId];
        if (room.coordinates) {
            const dx = Math.abs(worldX - room.coordinates.x);
            const dy = Math.abs(worldY - room.coordinates.y);
            
            if (dx < MinimapSystem.roomSize / 2 && dy < MinimapSystem.roomSize / 2) {
                showRoomQuickInfo(room);
                break;
            }
        }
    }
}

function handleMinimapMouseDown(event) {
    MinimapSystem.isDragging = true;
    MinimapSystem.lastMousePos = { x: event.clientX, y: event.clientY };
    MinimapSystem.canvas.style.cursor = 'grabbing';
}

function handleMinimapMouseMove(event) {
    if (!MinimapSystem.isDragging) return;

    const deltaX = event.clientX - MinimapSystem.lastMousePos.x;
    const deltaY = event.clientY - MinimapSystem.lastMousePos.y;

    MinimapSystem.offsetX += deltaX;
    MinimapSystem.offsetY += deltaY;

    MinimapSystem.lastMousePos = { x: event.clientX, y: event.clientY };

    drawMinimap();
}

function handleMinimapMouseUp() {
    MinimapSystem.isDragging = false;
    MinimapSystem.canvas.style.cursor = 'grab';
}

function handleMinimapWheel(event) {
    event.preventDefault();
    
    const zoomFactor = event.deltaY > 0 ? 0.9 : 1.1;
    MinimapSystem.scale *= zoomFactor;
    MinimapSystem.scale = Math.max(10, Math.min(50, MinimapSystem.scale)); // Limit zoom
    
    drawMinimap();
}

export function drawMinimap() {
    if (!MinimapSystem.ctx) return;

    const ctx = MinimapSystem.ctx;
    const canvas = MinimapSystem.canvas;

    // Clear canvas
    ctx.fillStyle = '#0d0d0d';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Center coordinates
    const centerX = canvas.width / 2 + MinimapSystem.offsetX;
    const centerY = canvas.height / 2 + MinimapSystem.offsetY;

    // Draw rooms
    for (const roomId in ROOMS) {
        const room = ROOMS[roomId];
        if (!room.coordinates) continue;

        const x = centerX + room.coordinates.x * MinimapSystem.scale;
        const y = centerY + room.coordinates.y * MinimapSystem.scale;
        const size = MinimapSystem.roomSize;

        // Room background
        let fillColor = '#1a1a1a';
        let borderColor = '#333333';

        if (room.discovered || GameState.roomsVisited.has(roomId)) {
            fillColor = '#2d2d2d';
            borderColor = '#555555';
        }

        if (roomId === GameState.currentRoom) {
            fillColor = '#00ff4133';
            borderColor = '#00ff41';
        }

        if (room.hidden && !room.discovered) {
            continue; // Don't show hidden rooms
        }

        // Draw room
        ctx.fillStyle = fillColor;
        ctx.fillRect(x - size/2, y - size/2, size, size);
        
        ctx.strokeStyle = borderColor;
        ctx.lineWidth = 1;
        ctx.strokeRect(x - size/2, y - size/2, size, size);

        // Draw room connections
        if (room.exits) {
            ctx.strokeStyle = '#444444';
            ctx.lineWidth = 1;
            
            for (const direction in room.exits) {
                const targetRoomId = room.exits[direction];
                const targetRoom = ROOMS[targetRoomId];
                
                if (targetRoom && targetRoom.coordinates) {
                    const targetX = centerX + targetRoom.coordinates.x * MinimapSystem.scale;
                    const targetY = centerY + targetRoom.coordinates.y * MinimapSystem.scale;
                    
                    ctx.beginPath();
                    ctx.moveTo(x, y);
                    ctx.lineTo(targetX, targetY);
                    ctx.stroke();
                }
            }
        }

        // Room name (if visited and zoom is high enough)
        if ((room.discovered || GameState.roomsVisited.has(roomId)) && MinimapSystem.scale > 25) {
            ctx.fillStyle = '#00ff41';
            ctx.font = '8px monospace';
            ctx.textAlign = 'center';
            ctx.fillText(room.name, x, y + size/2 + 10);
        }
    }

    // Draw scale indicator
    ctx.fillStyle = '#666666';
    ctx.font = '10px monospace';
    ctx.textAlign = 'right';
    ctx.fillText(`Scale: ${MinimapSystem.scale.toFixed(0)}`, canvas.width - 5, canvas.height - 5);
}

function showRoomQuickInfo(room) {
    const tooltip = document.getElementById('minimap-tooltip') || createMinimapTooltip();
    
    let content = `<strong>${room.name}</strong>`;
    
    if (room.discovered || GameState.roomsVisited.has(room.id)) {
        content += `<br><small>${room.desc}</small>`;
        
        if (room.items && room.items.length > 0) {
            content += `<br><em>Items: ${room.items.join(', ')}</em>`;
        }

        if (room.exits) {
            const exits = Object.keys(room.exits).join(', ');
            content += `<br><small>Exits: ${exits}</small>`;
        }

        if (NavigationState.roomHistory.find(r => r.id === room.id)) {
            const visitCount = NavigationState.roomHistory.find(r => r.id === room.id).visitCount;
            content += `<br><small>Visited ${visitCount} time(s)</small>`;
        }
    } else {
        content += `<br><small>Unexplored</small>`;
    }

    tooltip.innerHTML = content;
    tooltip.style.display = 'block';
    
    // Auto-hide after 3 seconds
    setTimeout(() => {
        tooltip.style.display = 'none';
    }, 3000);
}

function createMinimapTooltip() {
    const tooltip = document.createElement('div');
    tooltip.id = 'minimap-tooltip';
    tooltip.className = 'absolute bg-black border border-cyan-400 rounded p-2 text-sm z-50 max-w-48';
    tooltip.style.display = 'none';
    tooltip.style.top = '10px';
    tooltip.style.right = '10px';
    
    document.getElementById('map-panel').appendChild(tooltip);
    return tooltip;
}

// Progress Tracking System
export const ProgressTracker = {
    totalRooms: 0,
    totalItems: 0,
    totalSecrets: 0,
    roomsFound: 0,
    itemsCollected: 0,
    secretsDiscovered: 0
};

export function updateProgressTracker() {
    // Calculate totals
    ProgressTracker.totalRooms = Object.keys(ROOMS).length;
    ProgressTracker.roomsFound = GameState.roomsVisited.size;
    ProgressTracker.itemsCollected = GameState.itemsFound.size;
    ProgressTracker.secretsDiscovered = GameState.secretsDiscovered.size;

    // Update UI
    updateProgressUI();
}

export function updateProgressUI() {
    const progressContainer = document.getElementById('progress-tracking');
    if (!progressContainer) return;

    const roomProgress = ProgressTracker.totalRooms > 0 ? 
        (ProgressTracker.roomsFound / ProgressTracker.totalRooms * 100).toFixed(1) : 0;
    
    let html = `
        <div class="space-y-2 text-sm">
            <div class="flex justify-between">
                <span>Exploration:</span>
                <span>${roomProgress}% (${ProgressTracker.roomsFound}/${ProgressTracker.totalRooms})</span>
            </div>
            <div class="w-full bg-gray-700 rounded-full h-2">
                <div class="bg-cyan-400 h-2 rounded-full" style="width: ${roomProgress}%"></div>
            </div>
            
            <div class="flex justify-between">
                <span>Items Found:</span>
                <span>${ProgressTracker.itemsCollected}</span>
            </div>
            
            <div class="flex justify-between">
                <span>Secrets:</span>
                <span>${ProgressTracker.secretsDiscovered}</span>
            </div>
            
            <div class="flex justify-between">
                <span>Turn:</span>
                <span>${GameState.turn}</span>
            </div>
        </div>
    `;

    progressContainer.innerHTML = html;
}

// Auto-save will be handled by interface.js
export function triggerAutoSaveFromNavigation() {
    // This function can be called from navigation events
    // The actual auto-save logic is in interface.js to avoid circular dependencies
    if (window.triggerAutoSave) {
        window.triggerAutoSave();
    }
}

// Initialize all navigation systems
export function initializeNavigationSystems() {
    initializeMinimap();
    updateProgressTracker();
    updateCommandSuggestions();
    updateBreadcrumbUI();
    updateRoomHistoryUI();
}
