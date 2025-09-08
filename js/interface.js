// js/interface.js - Enhanced Interface Systems

import { GameState } from './game.js';

// Inventory Quick-Use System
export const InventorySystem = {
    draggedItem: null,
    dragOffset: { x: 0, y: 0 },
    quickUseSlots: Array(6).fill(null), // 6 quick-use slots
    isDragging: false
};

export function initializeInventoryDragAndDrop() {
    const inventoryPanel = document.getElementById('inventory-panel');
    if (!inventoryPanel) return;

    // Create quick-use slots
    createQuickUseSlots();
    
    // Update inventory with drag capabilities
    updateInventoryUI();
}

function createQuickUseSlots() {
    const existingSlots = document.getElementById('quick-use-slots');
    if (existingSlots) return;

    const quickUseContainer = document.createElement('div');
    quickUseContainer.id = 'quick-use-slots';
    quickUseContainer.className = 'flex gap-1 mt-2 p-2 border-t border-gray-600';
    
    let html = '<div class="text-xs text-gray-400 mb-1">Quick Use (1-6):</div>';
    html += '<div class="flex gap-1">';
    
    for (let i = 0; i < 6; i++) {
        html += `<div id="quick-slot-${i}" 
                     class="quick-use-slot w-8 h-8 border border-gray-600 rounded bg-gray-800 flex items-center justify-center text-xs cursor-pointer hover:border-cyan-400"
                     data-slot="${i}"
                     onclick="useQuickSlot(${i})"
                     ondrop="dropOnQuickSlot(event, ${i})"
                     ondragover="allowDrop(event)"
                     title="Hotkey: ${i + 1}">
                    ${i + 1}
                 </div>`;
    }
    
    html += '</div>';
    quickUseContainer.innerHTML = html;
    
    const inventoryPanel = document.getElementById('inventory-panel');
    inventoryPanel.appendChild(quickUseContainer);
}

export function updateInventoryUI() {
    const inventoryList = document.getElementById('inventory-list');
    if (!inventoryList) return;

    if (GameState.inventory.length === 0) {
        inventoryList.innerHTML = '<li class="text-gray-500 text-sm">(empty)</li>';
        return;
    }

    let html = '';
    GameState.inventory.forEach((item, index) => {
        html += `<li class="inventory-item flex justify-between items-center p-1 mb-1 bg-gray-800 rounded cursor-move" 
                     draggable="true"
                     data-item="${item}"
                     ondragstart="startDragItem(event, '${item}')"
                     ondragend="endDragItem(event)">
                    <span class="flex-1">${item}</span>
                    <div class="flex gap-1">
                        <button class="text-xs px-1 py-0 bg-cyan-600 hover:bg-cyan-500 rounded" 
                                onclick="quickUseItem('${item}')">Use</button>
                        <button class="text-xs px-1 py-0 bg-red-600 hover:bg-red-500 rounded" 
                                onclick="quickDropItem('${item}')">Drop</button>
                    </div>
                 </li>`;
    });

    inventoryList.innerHTML = html;
    updateQuickUseSlots();
}

function updateQuickUseSlots() {
    for (let i = 0; i < 6; i++) {
        const slot = document.getElementById(`quick-slot-${i}`);
        if (!slot) continue;

        const item = InventorySystem.quickUseSlots[i];
        if (item) {
            slot.innerHTML = `<div class="text-xs truncate px-1" title="${item}">${item.substring(0, 3)}</div>`;
            slot.style.backgroundColor = '#1a4a3a';
            slot.style.borderColor = '#00ff41';
        } else {
            slot.innerHTML = i + 1;
            slot.style.backgroundColor = '#2d2d2d';
            slot.style.borderColor = '#666666';
        }
    }
}

// Global functions for drag and drop
window.startDragItem = function(event, item) {
    InventorySystem.draggedItem = item;
    InventorySystem.isDragging = true;
    event.dataTransfer.setData('text/plain', item);
    event.dataTransfer.effectAllowed = 'move';
};

window.endDragItem = function(event) {
    InventorySystem.draggedItem = null;
    InventorySystem.isDragging = false;
};

window.allowDrop = function(event) {
    event.preventDefault();
};

window.dropOnQuickSlot = function(event, slotIndex) {
    event.preventDefault();
    const item = event.dataTransfer.getData('text/plain');
    
    if (item && GameState.inventory.includes(item)) {
        InventorySystem.quickUseSlots[slotIndex] = item;
        updateQuickUseSlots();
        showNotification(`${item} assigned to slot ${slotIndex + 1}`, 'success', 2000);
    }
};

window.useQuickSlot = function(slotIndex) {
    const item = InventorySystem.quickUseSlots[slotIndex];
    if (item && GameState.inventory.includes(item)) {
        if (window.processCommand) {
            window.processCommand(`use ${item}`);
        }
    }
};

window.quickUseItem = function(item) {
    if (window.processCommand) {
        window.processCommand(`use ${item}`);
    }
};

window.quickDropItem = function(item) {
    if (window.processCommand) {
        window.processCommand(`drop ${item}`);
    }
};

// Hotkey System
export const HotkeySystem = {
    keys: new Map(),
    modifiers: { ctrl: false, shift: false, alt: false }
};

export function initializeHotkeySystem() {
    // Default hotkeys
    HotkeySystem.keys.set('F1', () => showHelpModal());
    HotkeySystem.keys.set('F2', () => showInventoryModal());
    HotkeySystem.keys.set('F3', () => showMapModal());
    HotkeySystem.keys.set('F4', () => showJournalModal());
    HotkeySystem.keys.set('F5', () => showProgressModal());
    HotkeySystem.keys.set('Escape', () => showPauseModal());
    
    // Quick-use slots (1-6)
    for (let i = 1; i <= 6; i++) {
        HotkeySystem.keys.set(`Digit${i}`, () => useQuickSlot(i - 1));
    }

    // Common commands
    HotkeySystem.keys.set('KeyI', () => executeCommand('inventory'));
    HotkeySystem.keys.set('KeyL', () => executeCommand('look around'));
    HotkeySystem.keys.set('KeyM', () => executeCommand('map'));
    HotkeySystem.keys.set('KeyS', () => executeCommand('save'));

    document.addEventListener('keydown', handleHotkeyPress);
    document.addEventListener('keyup', handleHotkeyRelease);
}

function handleHotkeyPress(event) {
    // Don't trigger hotkeys when typing in input fields
    if (event.target.tagName === 'INPUT' || event.target.tagName === 'TEXTAREA') {
        return;
    }

    // Update modifiers
    HotkeySystem.modifiers.ctrl = event.ctrlKey;
    HotkeySystem.modifiers.shift = event.shiftKey;
    HotkeySystem.modifiers.alt = event.altKey;

    // Check for hotkey
    const handler = HotkeySystem.keys.get(event.code);
    if (handler) {
        event.preventDefault();
        handler();
    }
}

function handleHotkeyRelease(event) {
    HotkeySystem.modifiers.ctrl = event.ctrlKey;
    HotkeySystem.modifiers.shift = event.shiftKey;
    HotkeySystem.modifiers.alt = event.altKey;
}

function executeCommand(command) {
    if (window.processCommand) {
        window.processCommand(command);
    }
}

// Split Command Input System
export const SplitCommandSystem = {
    mode: 'game', // 'game' or 'chat'
    chatHistory: [],
    gameHistory: []
};

export function initializeSplitCommandSystem() {
    const inputContainer = document.querySelector('.mt-2.flex.items-center');
    if (!inputContainer) return;

    // Create mode toggle
    const modeToggle = document.createElement('div');
    modeToggle.className = 'flex mr-2';
    modeToggle.innerHTML = `
        <button id="mode-game" class="px-2 py-1 text-xs bg-cyan-600 text-white rounded-l border-r border-cyan-400">GAME</button>
        <button id="mode-chat" class="px-2 py-1 text-xs bg-gray-600 text-white rounded-r">CHAT</button>
    `;

    inputContainer.insertBefore(modeToggle, inputContainer.firstChild);

    // Add event listeners
    document.getElementById('mode-game').addEventListener('click', () => switchMode('game'));
    document.getElementById('mode-chat').addEventListener('click', () => switchMode('chat'));

    // Update input placeholder
    updateInputPlaceholder();
}

function switchMode(mode) {
    SplitCommandSystem.mode = mode;
    
    const gameBtn = document.getElementById('mode-game');
    const chatBtn = document.getElementById('mode-chat');
    
    if (mode === 'game') {
        gameBtn.className = 'px-2 py-1 text-xs bg-cyan-600 text-white rounded-l border-r border-cyan-400';
        chatBtn.className = 'px-2 py-1 text-xs bg-gray-600 text-white rounded-r';
    } else {
        gameBtn.className = 'px-2 py-1 text-xs bg-gray-600 text-white rounded-l border-r border-gray-400';
        chatBtn.className = 'px-2 py-1 text-xs bg-cyan-600 text-white rounded-r';
    }
    
    updateInputPlaceholder();
    document.getElementById('player-input').focus();
}

function updateInputPlaceholder() {
    const input = document.getElementById('player-input');
    if (!input) return;

    if (SplitCommandSystem.mode === 'game') {
        input.placeholder = 'Enter game command...';
        input.style.borderColor = '#00ff41';
    } else {
        input.placeholder = 'Talk to SYNAPSE...';
        input.style.borderColor = '#facc15';
    }
}

// Achievement Preview System
export const AchievementSystem = {
    achievements: new Map(),
    previews: new Map()
};

export function initializeAchievementSystem() {
    // Define achievements with hints
    AchievementSystem.achievements.set('first_steps', {
        name: 'First Steps',
        description: 'Take your first action in the facility',
        hint: 'Move to another room or examine an object',
        unlocked: false,
        category: 'exploration'
    });

    AchievementSystem.achievements.set('curious_mind', {
        name: 'Curious Mind',
        description: 'Examine 10 different objects',
        hint: 'Look closely at items in rooms',
        unlocked: false,
        category: 'exploration'
    });

    AchievementSystem.achievements.set('pack_rat', {
        name: 'Pack Rat',
        description: 'Collect 5 different items',
        hint: 'Pick up items you find scattered around',
        unlocked: false,
        category: 'collection'
    });

    AchievementSystem.achievements.set('conversationalist', {
        name: 'Conversationalist',
        description: 'Have 20 conversations with SYNAPSE',
        hint: 'Use the talk command frequently',
        unlocked: false,
        category: 'social'
    });

    AchievementSystem.achievements.set('escape_artist', {
        name: 'Escape Artist',
        description: 'Find and unlock a secret exit',
        hint: 'Some walls hide more than they reveal',
        unlocked: false,
        category: 'secret'
    });

    // Create achievement preview UI
    createAchievementPreviewPanel();
}

function createAchievementPreviewPanel() {
    const existingPanel = document.getElementById('achievement-previews');
    if (existingPanel) return;

    const achievementPanel = document.createElement('div');
    achievementPanel.id = 'achievement-previews';
    achievementPanel.className = 'p-3 border border-yellow-600 rounded-md bg-black/50 mt-2';
    
    achievementPanel.innerHTML = `
        <h3 class="font-bold border-b border-yellow-600 mb-2 text-yellow-400">ACHIEVEMENTS</h3>
        <div id="achievement-preview-list" class="text-sm space-y-1"></div>
        <button id="show-all-achievements" class="mt-2 text-xs px-2 py-1 bg-yellow-600 hover:bg-yellow-500 rounded">Show All</button>
    `;

    const sidePanel = document.getElementById('side-panel');
    if (sidePanel) {
        sidePanel.appendChild(achievementPanel);
    }

    // Add event listener for show all button
    document.getElementById('show-all-achievements').addEventListener('click', showAllAchievements);
    
    updateAchievementPreviews();
}

export function updateAchievementPreviews() {
    const previewList = document.getElementById('achievement-preview-list');
    if (!previewList) return;

    const achievements = Array.from(AchievementSystem.achievements.values());
    const nearCompletion = achievements.filter(a => !a.unlocked && shouldShowHint(a));
    
    let html = '';
    
    if (nearCompletion.length > 0) {
        nearCompletion.slice(0, 3).forEach(achievement => {
            html += `<div class="achievement-hint p-1 bg-yellow-900/30 rounded">
                        <div class="font-medium text-yellow-300">${achievement.name}</div>
                        <div class="text-xs text-gray-300">${achievement.hint}</div>
                     </div>`;
        });
    } else {
        html = '<div class="text-gray-500 text-xs">Complete actions to see achievement hints</div>';
    }

    previewList.innerHTML = html;
}

function shouldShowHint(achievement) {
    // Logic to determine if achievement hint should be shown
    // based on player progress
    switch (achievement.category) {
        case 'exploration':
            return GameState.roomsVisited.size > 0;
        case 'collection':
            return GameState.inventory.length > 0;
        case 'social':
            return GameState.turn > 5;
        default:
            return GameState.turn > 10;
    }
}

function showAllAchievements() {
    const achievements = Array.from(AchievementSystem.achievements.values());
    
    let content = '<div class="space-y-3">';
    
    achievements.forEach(achievement => {
        const status = achievement.unlocked ? 'Unlocked' : 'Locked';
        const statusColor = achievement.unlocked ? 'text-green-400' : 'text-gray-400';
        
        content += `<div class="border-b border-gray-600 pb-2">
                       <div class="flex justify-between items-center">
                           <span class="font-medium">${achievement.name}</span>
                           <span class="text-xs ${statusColor}">${status}</span>
                       </div>
                       <div class="text-sm text-gray-300">${achievement.description}</div>`;
        
        if (!achievement.unlocked && shouldShowHint(achievement)) {
            content += `<div class="text-xs text-yellow-400 mt-1">Hint: ${achievement.hint}</div>`;
        }
        
        content += '</div>';
    });
    
    content += '</div>';

    if (window.showModal) {
        window.showModal(content, 'Achievements', [
            { text: 'Close', onclick: () => window.hideModal() }
        ]);
    }
}

// Modal functions for hotkeys
function showHelpModal() {
    if (window.showModal) {
        const helpContent = `
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                    <h4 class="font-bold text-cyan-400 mb-2">Hotkeys</h4>
                    <ul class="space-y-1 text-xs">
                        <li><strong>F1</strong> - Show help</li>
                        <li><strong>F2</strong> - Show inventory</li>
                        <li><strong>F3</strong> - Show map</li>
                        <li><strong>F4</strong> - Show journal</li>
                        <li><strong>F5</strong> - Show progress</li>
                        <li><strong>ESC</strong> - Pause game</li>
                        <li><strong>1-6</strong> - Use quick slots</li>
                    </ul>
                </div>
                <div>
                    <h4 class="font-bold text-yellow-400 mb-2">Quick Commands</h4>
                    <ul class="space-y-1 text-xs">
                        <li><strong>I</strong> - Inventory</li>
                        <li><strong>L</strong> - Look around</li>
                        <li><strong>M</strong> - Show map</li>
                        <li><strong>S</strong> - Save game</li>
                    </ul>
                </div>
            </div>
        `;
        window.showModal(helpContent, 'Help & Hotkeys', [
            { text: 'Close', onclick: () => window.hideModal() }
        ]);
    }
}

function showInventoryModal() {
    const inventoryContent = `
        <div class="text-sm">
            <h4 class="font-bold text-cyan-400 mb-2">Current Inventory</h4>
            ${GameState.inventory.length === 0 ? 
                '<p class="text-gray-400">No items</p>' :
                `<ul class="space-y-1">${GameState.inventory.map(item => `<li>• ${item}</li>`).join('')}</ul>`
            }
            <div class="mt-4 text-xs text-gray-400">
                Weight: ${GameState.inventoryWeight}/${GameState.maxInventoryWeight}
            </div>
        </div>
    `;
    
    if (window.showModal) {
        window.showModal(inventoryContent, 'Inventory', [
            { text: 'Close', onclick: () => window.hideModal() }
        ]);
    }
}

function showMapModal() {
    // This would show a larger version of the map
    if (window.showModal) {
        window.showModal('<div class="text-center">Full map view would appear here</div>', 'Map', [
            { text: 'Close', onclick: () => window.hideModal() }
        ]);
    }
}

function showJournalModal() {
    const journalContent = `
        <div class="text-sm">
            <h4 class="font-bold text-yellow-400 mb-2">Journal Entries</h4>
            ${GameState.notes.length === 0 ? 
                '<p class="text-gray-400">No journal entries</p>' :
                `<div class="space-y-2">${GameState.notes.map((note, index) => 
                    `<div class="border-b border-gray-600 pb-1">
                        <div class="text-xs text-gray-400">Entry ${index + 1}</div>
                        <div>${note}</div>
                    </div>`
                ).join('')}</div>`
            }
        </div>
    `;
    
    if (window.showModal) {
        window.showModal(journalContent, 'Journal', [
            { text: 'Close', onclick: () => window.hideModal() }
        ]);
    }
}

function showProgressModal() {
    const progressContent = `
        <div class="text-sm space-y-3">
            <div>
                <h4 class="font-bold text-green-400 mb-2">Game Progress</h4>
                <div class="grid grid-cols-2 gap-4">
                    <div>
                        <div class="text-gray-300">Rooms Explored:</div>
                        <div class="text-cyan-400">${GameState.roomsVisited.size} rooms</div>
                    </div>
                    <div>
                        <div class="text-gray-300">Items Collected:</div>
                        <div class="text-cyan-400">${GameState.itemsFound.size} items</div>
                    </div>
                    <div>
                        <div class="text-gray-300">Secrets Found:</div>
                        <div class="text-cyan-400">${GameState.secretsDiscovered.size} secrets</div>
                    </div>
                    <div>
                        <div class="text-gray-300">Current Turn:</div>
                        <div class="text-cyan-400">${GameState.turn}</div>
                    </div>
                </div>
            </div>
            
            <div>
                <h4 class="font-bold text-yellow-400 mb-2">Statistics</h4>
                <div class="grid grid-cols-2 gap-4 text-xs">
                    <div>Sanity: ${GameState.playerStats.sanity}/100</div>
                    <div>Awareness: ${GameState.playerStats.awareness}/100</div>
                    <div>Health: ${GameState.playerStats.health}/100</div>
                    <div>Fear: ${GameState.playerStats.fear}/100</div>
                </div>
            </div>
        </div>
    `;
    
    if (window.showModal) {
        window.showModal(progressContent, 'Progress Report', [
            { text: 'Close', onclick: () => window.hideModal() }
        ]);
    }
}

function showPauseModal() {
    const pauseContent = `
        <div class="text-center">
            <h3 class="text-2xl mb-4">Game Paused</h3>
            <p class="mb-4">Take a moment to breathe...</p>
        </div>
    `;
    
    if (window.showModal) {
        window.showModal(pauseContent, 'Pause', [
            { text: 'Resume', onclick: () => window.hideModal(), primary: true },
            { text: 'Settings', onclick: () => showSettingsFromPause() },
            { text: 'Main Menu', onclick: () => confirmMainMenu() }
        ]);
    }
}

function showSettingsFromPause() {
    // This would show settings modal
    window.hideModal();
    setTimeout(() => {
        if (window.showSettingsModal) {
            window.showSettingsModal();
        }
    }, 100);
}

function confirmMainMenu() {
    const confirmContent = `
        <p class="mb-4">Are you sure you want to return to the main menu?</p>
        <p class="text-yellow-400 text-sm">Unsaved progress will be lost.</p>
    `;
    
    window.hideModal();
    setTimeout(() => {
        if (window.showModal) {
            window.showModal(confirmContent, 'Confirm', [
                { text: 'Yes, Return', onclick: () => returnToMainMenu(), class: 'bg-red-600 hover:bg-red-500' },
                { text: 'Cancel', onclick: () => window.hideModal(), primary: true }
            ]);
        }
    }, 100);
}

function returnToMainMenu() {
    window.hideModal();
    // Logic to return to main menu
    if (window.showMainMenu) {
        window.showMainMenu();
    }
}

// Auto-save system integration
export function triggerAutoSave() {
    if (GameState.settings.autoSave) {
        showAutoSaveIndicator();
        // Actual save logic would go here
        if (window.saveGame) {
            window.saveGame();
        }
    }
}

// Auto-Save Indicator System
export const AutoSaveIndicator = {
    isVisible: false,
    timeout: null
};

export function showAutoSaveIndicator() {
    const indicator = document.getElementById('autosave-indicator');
    if (!indicator) return;

    indicator.style.display = 'block';
    indicator.classList.add('fade-in');
    AutoSaveIndicator.isVisible = true;

    // Clear existing timeout
    if (AutoSaveIndicator.timeout) {
        clearTimeout(AutoSaveIndicator.timeout);
    }

    // Hide after 2 seconds
    AutoSaveIndicator.timeout = setTimeout(() => {
        indicator.classList.add('fade-out');
        setTimeout(() => {
            indicator.style.display = 'none';
            indicator.classList.remove('fade-in', 'fade-out');
            AutoSaveIndicator.isVisible = false;
        }, 300);
    }, 2000);
}

// Initialize all interface systems
export function initializeInterfaceSystems() {
    initializeInventoryDragAndDrop();
    initializeHotkeySystem();
    initializeSplitCommandSystem();
    initializeAchievementSystem();

    // Auto-save interval
    if (GameState.settings.autoSave) {
        setInterval(() => {
            triggerAutoSave();
        }, GameState.settings.autoSaveInterval || 30000);
    }
}
