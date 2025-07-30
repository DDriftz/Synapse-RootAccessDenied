// js/ui.js - Enhanced UI module with all features

import { GameState, ROOMS, ITEMS } from './game.js';
import { playSound, stopAllSounds } from './audio.js';

// UI State
const UIState = {
    currentModal: null,
    activeOverlays: [],
    typewriterActive: false,
    glitchEffects: [],
    notifications: [],
    contextMenuOpen: false,
    mapZoom: 1,
    mapOffset: { x: 0, y: 0 },
    currentTheme: 'default',
    activeAnimations: new Set()
};

// Modal Management
export function showModal(content, title = '', buttons = [], options = {}) {
    const modal = document.getElementById('modal');
    const modalContent = document.getElementById('modal-content');
    
    if (!modal || !modalContent) return;
    
    // Clear existing modal
    if (UIState.currentModal) {
        hideModal();
    }
    
    let html = '<div class="modal-inner">';
    
    if (title) {
        html += `<h2 class="text-2xl font-bold mb-4 text-cyan-400 glitch" data-text="${title}">${title}</h2>`;
    }
    
    html += `<div class="modal-body mb-4 ${options.scrollable ? 'modal-scroll max-h-[60vh]' : ''}">${content}</div>`;
    
    if (buttons.length > 0) {
        html += '<div class="modal-buttons flex gap-2 justify-center flex-wrap">';
        buttons.forEach((btn, index) => {
            const btnClass = btn.primary ? 'button-primary' : '';
            const btnId = `modal-btn-${index}`;
            html += `<button id="${btnId}" class="button btn-glow btn-drip ${btnClass} ${btn.class || ''}">${btn.text}</button>`;
        });
        html += '</div>';
    }
    
    html += '</div>';
    
    modalContent.innerHTML = html;
    
    // Add button handlers
    buttons.forEach((btn, index) => {
        const btnElement = document.getElementById(`modal-btn-${index}`);
        if (btnElement && btn.onclick) {
            btnElement.addEventListener('click', btn.onclick);
        }
    });
    
    // Show modal with animation
    modal.classList.add('flex');
    modal.style.display = 'flex';
    
    if (options.horror) {
        modalContent.classList.add('horror-modal');
        addHorrorEffects(modalContent);
    }
    
    UIState.currentModal = { content, title, buttons, options };
    
    // Auto-close timer if specified
    if (options.autoClose) {
        setTimeout(() => hideModal(), options.autoClose);
    }
}

export function hideModal() {
    const modal = document.getElementById('modal');
    if (modal) {
        modal.classList.add('fade-out');
        setTimeout(() => {
            modal.classList.remove('flex', 'fade-out');
            modal.style.display = 'none';
            UIState.currentModal = null;
        }, 300);
    }
}

// Notification System
export function showNotification(message, type = 'info', duration = 3000, options = {}) {
    const notification = document.createElement('div');
    const id = `notif-${Date.now()}`;
    notification.id = id;
    
    const types = {
        info: { bg: 'bg-blue-600', icon: 'ℹ️' },
        success: { bg: 'bg-green-600', icon: '✓' },
        warning: { bg: 'bg-yellow-600', icon: '⚠️' },
        error: { bg: 'bg-red-600', icon: '✗' },
        horror: { bg: 'bg-black border-2 border-red-500', icon: '☠️' },
        system: { bg: 'bg-purple-600', icon: '⚡' }
    };
    
    const config = types[type] || types.info;
    
    notification.className = `notification fixed z-50 p-4 rounded-md shadow-lg animate-slide-in ${config.bg} text-white max-w-sm`;
    
    // Position based on existing notifications
    const existingNotifs = UIState.notifications.length;
    notification.style.top = `${20 + (existingNotifs * 80)}px`;
    notification.style.right = '20px';
    
    let html = '<div class="flex items-center gap-3">';
    if (options.showIcon !== false) {
        html += `<span class="text-2xl">${config.icon}</span>`;
    }
    html += `<div class="flex-1">${message}</div>`;
    if (options.closeable !== false) {
        html += `<button class="ml-2 hover:opacity-70" onclick="closeNotification('${id}')">✕</button>`;
    }
    html += '</div>';
    
    if (options.progress) {
        html += `<div class="mt-2 h-1 bg-white/20 rounded-full overflow-hidden">
                    <div class="h-full bg-white/60 rounded-full transition-all duration-${duration}" 
                         style="animation: progress ${duration}ms linear"></div>
                 </div>`;
    }
    
    notification.innerHTML = html;
    document.body.appendChild(notification);
    
    UIState.notifications.push(id);
    
    // Play sound if enabled
    if (GameState.settings.soundEnabled && options.sound) {
        playSound(options.sound);
    }
    
    // Auto-remove
    if (duration > 0) {
        setTimeout(() => {
            removeNotification(id);
        }, duration);
    }
    
    return id;
}

function removeNotification(id) {
    const notification = document.getElementById(id);
    if (notification) {
        notification.classList.add('animate-slide-out');
        setTimeout(() => {
            notification.remove();
            UIState.notifications = UIState.notifications.filter(n => n !== id);
            repositionNotifications();
        }, 300);
    }
}

window.closeNotification = removeNotification;

function repositionNotifications() {
    UIState.notifications.forEach((id, index) => {
        const notif = document.getElementById(id);
        if (notif) {
            notif.style.top = `${20 + (index * 80)}px`;
        }
    });
}

// Breadcrumb Navigation
export function updateBreadcrumbs() {
    const breadcrumbContainer = document.getElementById('breadcrumb-nav');
    if (!breadcrumbContainer) return;
    
    const history = GameState.roomHistory.slice(-5); // Last 5 rooms
    
    let html = '<div class="flex items-center gap-2 text-sm">';
    history.forEach((entry, index) => {
        const room = ROOMS[entry.room];
        if (room) {
            html += `<span class="cursor-pointer hover:text-cyan-400" onclick="showRoomInfo('${room.id}')">${room.name}</span>`;
            if (index < history.length - 1) {
                html += '<span class="text-gray-500">›</span>';
            }
        }
    });
    html += '</div>';
    
    breadcrumbContainer.innerHTML = html;
}

// Room History Panel
export function showRoomHistoryPanel() {
    const history = GameState.roomHistory.slice().reverse();
    
    let content = '<div class="room-history max-h-[400px] overflow-y-auto">';
    
    if (history.length === 0) {
        content += '<p class="text-gray-400">No rooms visited yet.</p>';
    } else {
        history.forEach((entry, index) => {
            const room = ROOMS[entry.room];
            if (room) {
                const timeAgo = formatTimeAgo(entry.timestamp);
                content += `
                    <div class="room-history-item p-2 mb-2 border border-cyan-400/30 rounded hover:bg-cyan-400/10 cursor-pointer"
                         onclick="showRoomInfo('${room.id}')">
                        <div class="flex justify-between items-center">
                            <span class="font-bold text-cyan-400">${room.name}</span>
                            <span class="text-xs text-gray-400">Turn ${entry.turn}</span>
                        </div>
                        <div class="text-sm text-gray-300 mt-1">${timeAgo}</div>
                    </div>
                `;
            }
        });
    }
    
    content += '</div>';
    
    showModal(content, 'Room History', [
        { text: 'Close', onclick: hideModal }
    ], { scrollable: true });
}

// Interactive Map System
export function updateMapDisplay() {
    const canvas = document.getElementById('map-canvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const { width, height } = canvas;
    
    // Clear canvas
    ctx.fillStyle = '#001a00';
    ctx.fillRect(0, 0, width, height);
    
    // Apply zoom and offset
    ctx.save();
    ctx.translate(width/2, height/2);
    ctx.scale(UIState.mapZoom, UIState.mapZoom);
    ctx.translate(-width/2 + UIState.mapOffset.x, -height/2 + UIState.mapOffset.y);
    
    // Draw grid
    drawMapGrid(ctx, width, height);
    
    // Draw rooms
    Object.values(ROOMS).forEach(room => {
        if (room.discovered || GameState.settings.revealMap) {
            drawRoom(ctx, room);
        }
    });
    
    // Draw connections
    drawRoomConnections(ctx);
    
    // Draw player position
    const currentRoom = ROOMS[GameState.currentRoom];
    if (currentRoom) {
        drawPlayerMarker(ctx, currentRoom);
    }
    
    ctx.restore();
    
    // Draw UI elements
    drawMapUI(ctx, width, height);
}

function drawRoom(ctx, room) {
    const x = room.coordinates.x * 3;
    const y = room.coordinates.y * 3;
    const size = 20;
    
    // Room fill
    ctx.fillStyle = room.id === GameState.currentRoom ? '#00ff41' : '#004400';
    ctx.fillRect(x - size/2, y - size/2, size, size);
    
    // Room border
    ctx.strokeStyle = '#00ff41';
    ctx.lineWidth = 1;
    ctx.strokeRect(x - size/2, y - size/2, size, size);
    
    // Room label
    ctx.fillStyle = '#ffffff';
    ctx.font = '10px monospace';
    ctx.textAlign = 'center';
    ctx.fillText(room.name, x, y + size/2 + 12);
    
    // Special markers
    if (room.locked) {
        ctx.fillStyle = '#ff0000';
        ctx.fillText('🔒', x, y);
    }
    
    if (room.items.length > 0) {
        ctx.fillStyle = '#ffff00';
        ctx.fillText('⚡', x + size/2, y - size/2);
    }
}

function drawMapGrid(ctx, width, height) {
    ctx.strokeStyle = '#003300';
    ctx.lineWidth = 0.5;
    
    const gridSize = 30;
    for (let x = 0; x < width * 2; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x - width/2, -height);
        ctx.lineTo(x - width/2, height * 2);
        ctx.stroke();
    }
    
    for (let y = 0; y < height * 2; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(-width, y - height/2);
        ctx.lineTo(width * 2, y - height/2);
        ctx.stroke();
    }
}

// Command Suggestions
export function showCommandSuggestions(input) {
    const suggestionsBox = document.getElementById('command-suggestions');
    if (!suggestionsBox) return;
    
    // Get context-aware suggestions
    const suggestions = getContextualSuggestions(input);
    
    if (suggestions.length === 0) {
        suggestionsBox.style.display = 'none';
        return;
    }
    
    let html = '<div class="suggestions-list">';
    suggestions.forEach((cmd, index) => {
        html += `
            <div class="suggestion-item p-2 hover:bg-cyan-400/20 cursor-pointer ${index === 0 ? 'selected' : ''}"
                 onclick="selectSuggestion('${cmd.command}')">
                <span class="text-cyan-400">${cmd.command}</span>
                <span class="text-gray-400 text-sm ml-2">${cmd.description}</span>
            </div>
        `;
    });
    html += '</div>';
    
    suggestionsBox.innerHTML = html;
    suggestionsBox.style.display = 'block';
}

function getContextualSuggestions(input) {
    const room = ROOMS[GameState.currentRoom];
    const suggestions = [];
    
    // Basic commands
    if ('look'.startsWith(input)) {
        suggestions.push({ command: 'look', description: 'Examine the room' });
        suggestions.push({ command: 'look at', description: 'Examine something specific' });
    }
    
    // Room-specific suggestions
    if (room) {
        // Exit suggestions
        Object.keys(room.exits).forEach(dir => {
            if (dir.startsWith(input) || `go ${dir}`.startsWith(input)) {
                suggestions.push({ command: `go ${dir}`, description: `Move ${dir}` });
            }
        });
        
        // Item suggestions
        room.items.forEach(itemKey => {
            const item = ITEMS[itemKey];
            if (item && item.name.toLowerCase().includes(input)) {
                suggestions.push({ command: `take ${itemKey}`, description: `Pick up ${item.name}` });
                suggestions.push({ command: `examine ${itemKey}`, description: `Look at ${item.name}` });
            }
        });
    }
    
    // Inventory suggestions
    GameState.inventory.forEach(itemKey => {
        const item = ITEMS[itemKey];
        if (item && item.name.toLowerCase().includes(input)) {
            suggestions.push({ command: `use ${itemKey}`, description: `Use ${item.name}` });
        }
    });
    
    return suggestions.slice(0, 5);
}

// Drag & Drop Inventory
export function setupInventoryDragDrop() {
    const inventoryList = document.getElementById('inventory-list');
    if (!inventoryList) return;
    
    inventoryList.addEventListener('dragstart', handleDragStart);
    inventoryList.addEventListener('dragover', handleDragOver);
    inventoryList.addEventListener('drop', handleDrop);
    inventoryList.addEventListener('dragend', handleDragEnd);
}

function handleDragStart(e) {
    if (e.target.classList.contains('inventory-item')) {
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/html', e.target.innerHTML);
        e.dataTransfer.setData('item-id', e.target.dataset.itemId);
        e.target.classList.add('dragging');
    }
}

function handleDragOver(e) {
    if (e.preventDefault) e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    
    const draggingItem = document.querySelector('.dragging');
    const afterElement = getDragAfterElement(e.currentTarget, e.clientY);
    
    if (afterElement == null) {
        e.currentTarget.appendChild(draggingItem);
    } else {
        e.currentTarget.insertBefore(draggingItem, afterElement);
    }
    
    return false;
}

function handleDrop(e) {
    if (e.stopPropagation) e.stopPropagation();
    
    const itemId = e.dataTransfer.getData('item-id');
    const targetId = e.target.dataset.itemId;
    
    if (itemId && targetId && itemId !== targetId) {
        // Combine items if possible
        attemptItemCombination(itemId, targetId);
    }
    
    return false;
}

// Hotkey System
export function setupHotkeys() {
    const hotkeys = {
        'F1': () => showHelp(),
        'F2': () => showInventory(),
        'F3': () => showMap(),
        'F4': () => showStatus(),
        'F5': () => quickSave(),
        'F9': () => quickLoad(),
        'i': () => showInventory(),
        'm': () => showMap(),
        'j': () => showJournal(),
        'n': () => showNotes(),
        'Escape': () => {
            if (UIState.currentModal) hideModal();
            else showPauseMenu();
        },
        'Tab': (e) => {
            e.preventDefault();
            cycleCommandSuggestions();
        }
    };
    
    document.addEventListener('keydown', (e) => {
        const key = e.key;
        
        if (hotkeys[key] && !isInputFocused()) {
            e.preventDefault();
            hotkeys[key](e);
        }
        
        // Ctrl combinations
        if (e.ctrlKey) {
            if (key === 's') {
                e.preventDefault();
                quickSave();
            } else if (key === 'l') {
                e.preventDefault();
                quickLoad();
            } else if (key === 'f') {
                e.preventDefault();
                showSearchDialog();
            }
        }
    });
}

function isInputFocused() {
    const activeElement = document.activeElement;
    return activeElement.tagName === 'INPUT' || 
           activeElement.tagName === 'TEXTAREA' ||
           activeElement.contentEditable === 'true';
}

// Note-Taking System
export function showNotePad() {
    const notes = GameState.notes;
    
    let content = `
        <div class="notepad-container">
            <textarea id="notepad-content" class="w-full h-64 bg-black border border-cyan-400 text-cyan-200 p-2 rounded font-mono"
                      placeholder="Type your notes here...">${notes.join('\n')}</textarea>
            <div class="mt-2 flex gap-2">
                <button class="button btn-sm" onclick="saveNotes()">Save</button>
                <button class="button btn-sm" onclick="clearNotes()">Clear</button>
                <button class="button btn-sm" onclick="exportNotes()">Export</button>
            </div>
        </div>
    `;
    
    showModal(content, 'Notes', [], { scrollable: true });
}

window.saveNotes = function() {
    const textarea = document.getElementById('notepad-content');
    if (textarea) {
        GameState.notes = textarea.value.split('\n').filter(n => n.trim());
        showNotification('Notes saved!', 'success');
    }
};

window.clearNotes = function() {
    if (confirm('Clear all notes?')) {
        GameState.notes = [];
        const textarea = document.getElementById('notepad-content');
        if (textarea) textarea.value = '';
        showNotification('Notes cleared', 'info');
    }
};

window.exportNotes = function() {
    const notesText = GameState.notes.join('\n');
    const blob = new Blob([notesText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `synapse_notes_${Date.now()}.txt`;
    a.click();
    URL.revokeObjectURL(url);
    showNotification('Notes exported!', 'success');
};

// Bookmark System
export function createBookmark() {
    const bookmark = {
        id: Date.now(),
        room: GameState.currentRoom,
        turn: GameState.turn,
        timestamp: Date.now(),
        description: ROOMS[GameState.currentRoom]?.desc || '',
        note: ''
    };
    
    const content = `
        <div class="bookmark-form">
            <p class="mb-2">Bookmarking: <span class="text-cyan-400">${ROOMS[GameState.currentRoom]?.name}</span></p>
            <textarea id="bookmark-note" class="w-full h-24 bg-black border border-cyan-400 text-cyan-200 p-2 rounded"
                      placeholder="Add a note for this bookmark..."></textarea>
        </div>
    `;
    
    showModal(content, 'Create Bookmark', [
        {
            text: 'Save',
            onclick: () => {
                const note = document.getElementById('bookmark-note')?.value;
                bookmark.note = note;
                GameState.bookmarks.push(bookmark);
                hideModal();
                showNotification('Bookmark created!', 'success');
            }
        },
        { text: 'Cancel', onclick: hideModal }
    ]);
}

// Session Statistics
export function showSessionStats() {
    const sessionTime = Date.now() - GameState.startTime;
    const stats = GameState.analytics;
    
    const content = `
        <div class="session-stats grid grid-cols-2 gap-4">
            <div class="stat-item">
                <span class="text-gray-400">Session Time:</span>
                <span class="text-cyan-400 font-bold">${formatDuration(sessionTime / 1000)}</span>
            </div>
            <div class="stat-item">
                <span class="text-gray-400">Commands Used:</span>
                <span class="text-cyan-400 font-bold">${stats.commandsUsed}</span>
            </div>
            <div class="stat-item">
                <span class="text-gray-400">Rooms Explored:</span>
                <span class="text-cyan-400 font-bold">${GameState.roomsVisited.size}</span>
            </div>
            <div class="stat-item">
                <span class="text-gray-400">Items Found:</span>
                <span class="text-cyan-400 font-bold">${GameState.itemsFound.size}</span>
            </div>
            <div class="stat-item">
                <span class="text-gray-400">Deaths:</span>
                <span class="text-cyan-400 font-bold">${stats.deathCount}</span>
            </div>
            <div class="stat-item">
                <span class="text-gray-400">Hints Used:</span>
                <span class="text-cyan-400 font-bold">${stats.hintsUsed}</span>
            </div>
        </div>
        
        <div class="mt-4">
            <h3 class="font-bold mb-2">Most Used Commands:</h3>
            <div class="command-frequency">
                ${getTopCommands()}
            </div>
        </div>
    `;
    
    showModal(content, 'Session Statistics', [
        { text: 'Close', onclick: hideModal }
    ], { scrollable: true });
}

function getTopCommands() {
    const sorted = Object.entries(GameState.commandFrequency)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 5);
    
    if (sorted.length === 0) {
        return '<p class="text-gray-400">No commands used yet.</p>';
    }
    
    return sorted.map(([cmd, count]) => `
        <div class="flex justify-between items-center mb-1">
            <span class="text-cyan-400">${cmd}</span>
            <span class="text-gray-400">${count} times</span>
        </div>
    `).join('');
}

// Horror Visual Effects
export function createHorrorOverlay(type = 'glitch', options = {}) {
    const overlayContainer = document.getElementById('overlay-container');
    if (!overlayContainer) return;
    
    const overlay = document.createElement('div');
    overlay.className = 'horror-overlay fixed inset-0 pointer-events-none';
    overlay.style.zIndex = options.zIndex || '40';
    
    switch (type) {
        case 'glitch':
            overlay.classList.add('glitch-overlay');
            overlay.style.animation = `glitch-anim ${options.duration || 1.5}s infinite`;
            break;
            
        case 'static':
            createStaticEffect(overlay, options);
            break;
            
        case 'blood':
            createBloodEffect(overlay, options);
            break;
            
        case 'corruption':
            createCorruptionEffect(overlay, options);
            break;
            
        case 'eyes':
            createWatchingEyes(overlay, options);
            break;
            
        case 'fracture':
            createFractureEffect(overlay, options);
            break;
            
        case 'whispers':
            createWhisperText(overlay, options);
            break;
    }
    
    overlayContainer.appendChild(overlay);
    UIState.activeOverlays.push(overlay);
    
    // Auto-remove
    const duration = options.duration || 3000;
    if (duration > 0) {
        setTimeout(() => {
            overlay.classList.add('fade-out');
            setTimeout(() => {
                overlay.remove();
                UIState.activeOverlays = UIState.activeOverlays.filter(o => o !== overlay);
            }, 500);
        }, duration);
    }
    
    return overlay;
}

function createStaticEffect(overlay, options) {
    const canvas = document.createElement('canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    overlay.appendChild(canvas);
    
    const ctx = canvas.getContext('2d');
    
    function drawStatic() {
        const imageData = ctx.createImageData(canvas.width, canvas.height);
        const data = imageData.data;
        
        for (let i = 0; i < data.length; i += 4) {
            const noise = Math.random() * 255;
            data[i] = noise;     // R
            data[i + 1] = noise; // G
            data[i + 2] = noise; // B
            data[i + 3] = options.opacity || 30; // A
        }
        
        ctx.putImageData(imageData, 0, 0);
        
        if (!overlay.removed) {
            requestAnimationFrame(drawStatic);
        }
    }
    
    drawStatic();
}

function createBloodEffect(overlay, options) {
    const dropCount = options.drops || 5;
    
    for (let i = 0; i < dropCount; i++) {
        const drop = document.createElement('div');
        drop.className = 'blood-drop';
        drop.style.cssText = `
            position: absolute;
            width: ${Math.random() * 30 + 10}px;
            height: ${Math.random() * 100 + 50}px;
            background: linear-gradient(to bottom, #8B0000, #DC143C, transparent);
            left: ${Math.random() * 100}%;
            top: -100px;
            animation: blood-drip ${Math.random() * 3 + 2}s ease-in forwards;
            animation-delay: ${Math.random() * 2}s;
        `;
        overlay.appendChild(drop);
    }
    
    // Add CSS animation
    if (!document.getElementById('blood-drip-style')) {
        const style = document.createElement('style');
        style.id = 'blood-drip-style';
        style.textContent = `
            @keyframes blood-drip {
                to {
                    top: 100%;
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
}

// Dynamic Typography Effects
export function applyTextEffect(element, effect, options = {}) {
    switch (effect) {
        case 'shake':
            element.style.animation = `text-shake ${options.intensity || 0.5}s infinite`;
            break;
            
        case 'glitch':
            element.classList.add('text-glitch');
            element.setAttribute('data-text', element.textContent);
            break;
            
        case 'scramble':
            scrambleText(element, options);
            break;
            
        case 'typewriter':
            typewriterEffect(element.textContent, element, options.callback, options.speed);
            break;
            
        case 'fade':
            element.style.animation = `text-fade ${options.duration || 2}s ease-in-out`;
            break;
    }
}

function scrambleText(element, options = {}) {
    const originalText = element.textContent;
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
    let iterations = 0;
    
    const interval = setInterval(() => {
        element.textContent = originalText
            .split('')
            .map((char, index) => {
                if (index < iterations) {
                    return originalText[index];
                }
                return chars[Math.floor(Math.random() * chars.length)];
            })
            .join('');
        
        if (iterations >= originalText.length) {
            clearInterval(interval);
            if (options.callback) options.callback();
        }
        
        iterations += 1 / (options.speed || 3);
    }, 30);
}

// Typewriter Effect
export function typewriterEffect(text, element, callback, speed = 30) {
    if (!element || UIState.typewriterActive) return;
    
    UIState.typewriterActive = true;
    element.innerHTML = '';
    let index = 0;
    
    function type() {
        if (index < text.length) {
            // Check for HTML tags
            if (text[index] === '<') {
                const tagEnd = text.indexOf('>', index);
                if (tagEnd !== -1) {
                    element.innerHTML += text.substring(index, tagEnd + 1);
                    index = tagEnd + 1;
                } else {
                    element.innerHTML += text[index];
                    index++;
                }
            } else {
                element.innerHTML += text[index];
                index++;
            }
            
            // Variable speed for punctuation
            let delay = speed;
            if (['.', '!', '?'].includes(text[index - 1])) {
                delay *= 3;
            } else if ([',', ';', ':'].includes(text[index - 1])) {
                delay *= 2;
            }
            
            setTimeout(type, delay);
        } else {
            UIState.typewriterActive = false;
            if (callback) callback();
        }
    }
    
    type();
}

// Accessibility Features
export function applyAccessibilitySettings() {
    const body = document.body;
    
    // Font size
    body.classList.remove('text-sm', 'text-base', 'text-lg', 'text-xl');
    switch (GameState.settings.fontSize) {
        case 'Small': body.classList.add('text-sm'); break;
        case 'Large': body.classList.add('text-lg'); break;
        case 'Extra Large': body.classList.add('text-xl'); break;
        default: body.classList.add('text-base');
    }
    
    // Font weight
    body.style.fontWeight = GameState.settings.fontWeight.toLowerCase();
    
    // Line spacing
    const lineHeights = { Compact: '1.2', Normal: '1.5', Relaxed: '1.8', Double: '2' };
    body.style.lineHeight = lineHeights[GameState.settings.lineSpacing] || '1.5';
    
    // High contrast
    if (GameState.settings.highContrast) {
        body.classList.add('high-contrast');
    } else {
        body.classList.remove('high-contrast');
    }
    
    // Reduced motion
    if (GameState.settings.reducedMotion) {
        body.classList.add('reduced-motion');
        // Disable all animations
        UIState.activeAnimations.forEach(anim => anim.pause());
    } else {
        body.classList.remove('reduced-motion');
    }
    
    // Colorblind modes
    body.classList.remove('protanopia', 'deuteranopia', 'tritanopia');
    if (GameState.settings.colorblindMode !== 'None') {
        body.classList.add(GameState.settings.colorblindMode.toLowerCase());
    }
    
    // Screen reader announcements
    if (GameState.settings.screenReader) {
        enableScreenReaderMode();
    }
}

function enableScreenReaderMode() {
    // Create live region for announcements
    let liveRegion = document.getElementById('screen-reader-live');
    if (!liveRegion) {
        liveRegion = document.createElement('div');
        liveRegion.id = 'screen-reader-live';
        liveRegion.setAttribute('role', 'status');
        liveRegion.setAttribute('aria-live', 'polite');
        liveRegion.className = 'sr-only';
        document.body.appendChild(liveRegion);
    }
    
    // Enhance all interactive elements
    document.querySelectorAll('button, a, input, [role="button"]').forEach(element => {
        if (!element.getAttribute('aria-label')) {
            element.setAttribute('aria-label', element.textContent || element.value || 'Interactive element');
        }
    });
}

// Utility functions
function formatTimeAgo(timestamp) {
    const seconds = Math.floor((Date.now() - timestamp) / 1000);
    
    if (seconds < 60) return `${seconds} seconds ago`;
    if (seconds < 3600) return `${Math.floor(seconds / 60)} minutes ago`;
    if (seconds < 86400) return `${Math.floor(seconds / 3600)} hours ago`;
    return `${Math.floor(seconds / 86400)} days ago`;
}

function formatDuration(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = Math.floor(seconds % 60);
    
    if (hours > 0) {
        return `${hours}h ${minutes}m ${secs}s`;
    } else if (minutes > 0) {
        return `${minutes}m ${secs}s`;
    } else {
        return `${secs}s`;
    }
}

// Export functions
export { 
    updateBreadcrumbs, 
    setupInventoryDragDrop, 
    setupHotkeys,
    applyTextEffect,
    applyAccessibilitySettings,
    showSessionStats,
    updateMapDisplay
};