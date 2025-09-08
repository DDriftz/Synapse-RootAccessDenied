// js/enhanced-features.js - Enhanced Features Initialization

import { 
    initializeNavigationSystems,
    addToBreadcrumbs,
    addToRoomHistory,
    updateCommandSuggestions,
    addToRecentCommands,
    updateProgressTracker,
    MinimapSystem,
    drawMinimap
} from './navigation.js';

import { 
    initializeInterfaceSystems,
    updateInventoryUI,
    triggerAutoSave,
    AchievementSystem,
    updateAchievementPreviews
} from './interface.js';

// Global state for enhanced features
export const EnhancedFeatures = {
    initialized: false,
    suggestionsVisible: false,
    commandHistory: [],
    lastCommand: '',
    currentMode: 'game' // 'game' or 'chat'
};

// Initialize all enhanced features
export function initializeEnhancedFeatures() {
    if (EnhancedFeatures.initialized) return;

    try {
        console.log('Initializing enhanced navigation and interface features...');
        
        // Initialize navigation systems
        initializeNavigationSystems();
        
        // Initialize interface systems  
        initializeInterfaceSystems();
        
        // Setup command suggestion toggle
        setupCommandSuggestionToggle();
        
        // Setup input enhancements
        setupInputEnhancements();
        
        // Setup periodic updates
        setupPeriodicUpdates();
        
        // Mark as initialized
        EnhancedFeatures.initialized = true;
        
        console.log('Enhanced features initialized successfully!');
        
        // Show notification to user
        if (window.showNotification) {
            window.showNotification('Enhanced navigation features enabled!', 'success', 3000, {
                showIcon: true,
                sound: 'notification'
            });
        }
        
    } catch (error) {
        console.error('Error initializing enhanced features:', error);
    }
}

// Setup command suggestion toggle functionality
function setupCommandSuggestionToggle() {
    const toggleBtn = document.getElementById('toggle-suggestions');
    const suggestionsPanel = document.getElementById('command-suggestions');
    
    if (!toggleBtn || !suggestionsPanel) return;
    
    toggleBtn.addEventListener('click', () => {
        EnhancedFeatures.suggestionsVisible = !EnhancedFeatures.suggestionsVisible;
        
        if (EnhancedFeatures.suggestionsVisible) {
            suggestionsPanel.classList.remove('hidden');
            suggestionsPanel.classList.add('show');
            updateCommandSuggestions();
            toggleBtn.style.backgroundColor = '#00ff41';
        } else {
            suggestionsPanel.classList.add('hidden');
            suggestionsPanel.classList.remove('show');
            toggleBtn.style.backgroundColor = '';
        }
    });
}

// Setup input enhancements
function setupInputEnhancements() {
    const input = document.getElementById('player-input');
    if (!input) return;
    
    // Enhanced command processing
    input.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            const command = input.value.trim();
            if (command) {
                processEnhancedCommand(command);
                addToRecentCommands(command);
                EnhancedFeatures.lastCommand = command;
                
                // Update suggestions after command
                setTimeout(() => {
                    updateCommandSuggestions();
                }, 100);
            }
        }
        
        // Show/hide suggestions on focus
        if (event.key === 'Tab' && EnhancedFeatures.suggestionsVisible) {
            event.preventDefault();
            const suggestionsPanel = document.getElementById('command-suggestions');
            const firstSuggestion = suggestionsPanel.querySelector('.suggestion-btn');
            if (firstSuggestion) {
                firstSuggestion.click();
            }
        }
    });
    
    // Show suggestions when typing
    input.addEventListener('input', () => {
        if (EnhancedFeatures.suggestionsVisible && input.value.length > 0) {
            updateCommandSuggestions();
        }
    });
    
    // Focus enhancements
    input.addEventListener('focus', () => {
        if (EnhancedFeatures.suggestionsVisible) {
            updateCommandSuggestions();
        }
    });
}

// Enhanced command processing
function processEnhancedCommand(command) {
    // Add to command history
    EnhancedFeatures.commandHistory.unshift(command);
    if (EnhancedFeatures.commandHistory.length > 50) {
        EnhancedFeatures.commandHistory.pop();
    }
    
    // Trigger auto-save after certain commands
    const autoSaveCommands = ['take', 'use', 'go', 'visit', 'examine', 'talk'];
    if (autoSaveCommands.some(cmd => command.toLowerCase().startsWith(cmd))) {
        setTimeout(triggerAutoSave, 1000);
    }
    
    // Update progress tracking
    updateProgressTracker();
    
    // Check for achievement progress
    checkAchievementProgress(command);
    
    // Process the command through the original system
    if (window.processCommand) {
        window.processCommand(command);
    }
}

// Check achievement progress
function checkAchievementProgress(command) {
    // First Steps achievement
    const firstSteps = AchievementSystem.achievements.get('first_steps');
    if (firstSteps && !firstSteps.unlocked) {
        firstSteps.unlocked = true;
        showAchievementUnlocked('First Steps', 'You took your first action in the facility!');
    }
    
    // Curious Mind achievement (examining objects)
    if (command.toLowerCase().startsWith('examine')) {
        // Track examined objects
        if (!window.examinedObjects) window.examinedObjects = new Set();
        const object = command.substring(8).trim();
        window.examinedObjects.add(object);
        
        const curiousMind = AchievementSystem.achievements.get('curious_mind');
        if (curiousMind && !curiousMind.unlocked && window.examinedObjects.size >= 10) {
            curiousMind.unlocked = true;
            showAchievementUnlocked('Curious Mind', 'You examined 10 different objects!');
        }
    }
    
    // Conversationalist achievement
    if (command.toLowerCase() === 'talk') {
        if (!window.conversationCount) window.conversationCount = 0;
        window.conversationCount++;
        
        const conversationalist = AchievementSystem.achievements.get('conversationalist');
        if (conversationalist && !conversationalist.unlocked && window.conversationCount >= 20) {
            conversationalist.unlocked = true;
            showAchievementUnlocked('Conversationalist', 'You had 20 conversations with SYNAPSE!');
        }
    }
    
    // Update achievement previews
    updateAchievementPreviews();
}

// Show achievement unlocked notification
function showAchievementUnlocked(name, description) {
    if (window.showNotification) {
        window.showNotification(`🏆 ${name}: ${description}`, 'success', 5000, {
            showIcon: true,
            sound: 'achievement'
        });
    }
}

// Setup periodic updates
function setupPeriodicUpdates() {
    // Update progress tracker every 10 seconds
    setInterval(() => {
        updateProgressTracker();
        
        // Redraw minimap if visible
        if (MinimapSystem.canvas) {
            drawMinimap();
        }
    }, 10000);
    
    // Update achievement previews every 30 seconds
    setInterval(() => {
        updateAchievementPreviews();
    }, 30000);
}

// Hook into room changes
export function onRoomChange(newRoomId, oldRoomId) {
    if (newRoomId && newRoomId !== oldRoomId) {
        addToBreadcrumbs(newRoomId);
        addToRoomHistory(newRoomId);
        updateCommandSuggestions();
        
        // Redraw minimap
        if (MinimapSystem.canvas) {
            drawMinimap();
        }
    }
}

// Hook into inventory changes
export function onInventoryChange() {
    updateInventoryUI();
    updateCommandSuggestions();
    
    // Check Pack Rat achievement
    const packRat = AchievementSystem.achievements.get('pack_rat');
    if (packRat && !packRat.unlocked && window.GameState && window.GameState.inventory.length >= 5) {
        packRat.unlocked = true;
        showAchievementUnlocked('Pack Rat', 'You collected 5 different items!');
        updateAchievementPreviews();
    }
}

// Hook into item usage for quick-use slots
export function onItemUse(item) {
    // This function can be called when items are used
    // to update quick-use slot availability, etc.
    updateInventoryUI();
}

// Export enhanced command processing for integration
export { processEnhancedCommand };

// Make functions available globally for integration
window.initializeEnhancedFeatures = initializeEnhancedFeatures;
window.onEnhancedRoomChange = onRoomChange;
window.onEnhancedInventoryChange = onInventoryChange;
window.onEnhancedItemUse = onItemUse;
