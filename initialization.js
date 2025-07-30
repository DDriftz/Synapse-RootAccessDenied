// initialization.js - Complete initialization with all features

import { 
    GameState, 
    ROOMS, 
    ITEMS, 
    BACKSTORIES,
    DIFFICULTY_LEVELS,
    processCommand, 
    saveGameState
} from './js/game.js';

import { 
    showModal, 
    hideModal, 
    showNotification,
    updateBreadcrumbs,
    setupInventoryDragDrop,
    setupHotkeys,
    createHorrorOverlay,
    applyTextEffect,
    applyAccessibilitySettings,
    showSessionStats,
    updateMapDisplay,
    showCommandSuggestions,
    typewriterEffect
} from './js/ui.js';

import { 
    storage, 
    debounce, 
    EventEmitter 
} from './js/utils.js';

import { 
    initializeAudio,
    playSound,
    startAmbientSoundscape,
    startDynamicMusic,
    updateMusicIntensity
} from './js/audio.js';

// Global game instance
// (Removed duplicate declaration here)

// Available commands
// (Removed duplicate COMMANDS declaration here)

// Initialize everything
document.addEventListener('DOMContentLoaded', async function() {
    console.log('SYNAPSE: Starting initialization...');
    
    try {
        // Load saved settings first
        loadSettings();
        
        // Apply accessibility settings immediately
        applyAccessibilitySettings();
        
        // Initialize UI
        initializeUI();
        
        // Setup event listeners
        setupEventListeners();
        
        // Initialize audio system
        if (GameState.settings.soundEnabled) {
            await initializeAudio();
        }
        
        // Setup game systems
        setupGameSystems();
        
        // Initialize background effects
        initializeBackgroundEffects();
        
        // Setup service worker
        registerServiceWorker();
        
        // Mark as initialized
        Game.initialized = true;
        
        console.log('SYNAPSE: Initialization complete');
        
        // Show intro animation
        showIntroAnimation();
        
    } catch (error) {
        console.error('SYNAPSE: Critical initialization error:', error);
        showErrorScreen(error);
    }
});

// Initialize UI components
function initializeUI() {
    // Cache commonly used elements
    const elements = {
        startScreen: document.getElementById('start-screen'),
        playerSetup: document.getElementById('player-setup'),
        gameScreen: document.getElementById('game-screen'),
        gameOutput: document.getElementById('game-output'),
        playerInput: document.getElementById('player-input'),
        modal: document.getElementById('modal'),
        breadcrumbs: document.getElementById('breadcrumb-nav'),
        map: document.getElementById('map-canvas')
    };
    
    // Store references
    Game.ui = elements;
    
    // Setup inventory drag & drop
    setupInventoryDragDrop();
    
    // Setup hotkeys
    setupHotkeys();
    
    // Setup command autocomplete
    setupCommandAutocomplete();
    
    // Initialize map
    if (elements.map) {
        setupMapControls();
    }
    
    // Setup responsive handlers
    setupResponsiveHandlers();
}

// Setup all event listeners
function setupEventListeners() {
    // Language switching
    setupLanguageButtons();
    
    // Screen navigation
    setupScreenNavigation();
    
    // Game controls
    setupGameControls();
    
    // Settings and features
    setupSettingsControls();
    
    // Window events
    setupWindowEvents();
    
    // Accessibility controls
    setupAccessibilityControls();
}

// Language button setup
function setupLanguageButtons() {
    document.querySelectorAll('[data-lang="en_lang_short"], [data-lang="sv_lang_short"]').forEach(btn => {
        btn.addEventListener('click', function() {
            const lang = this.getAttribute('data-text').toLowerCase();
            changeLanguage(lang);
            
            // Update button states
            document.querySelectorAll('[data-lang$="_lang_short"]').forEach(b => {
                b.classList.add('opacity-50');
            });
            this.classList.remove('opacity-50');
        });
    });
}

// Screen navigation
function setupScreenNavigation() {
    // New game
    const newGameBtn = document.getElementById('new-game-btn');
    if (newGameBtn) {
        newGameBtn.addEventListener('click', () => {
            Game.ui.startScreen.classList.add('hidden');
            Game.ui.playerSetup.classList.remove('hidden');
            playSound('beep');
        });
    }
    
    // Load game
    const loadGameBtn = document.getElementById('load-game-btn');
    if (loadGameBtn) {
        loadGameBtn.addEventListener('click', showLoadGameMenu);
    }
    
    // Back button
    const backBtn = document.getElementById('back-to-start-btn');
    if (backBtn) {
        backBtn.addEventListener('click', () => {
            Game.ui.playerSetup.classList.add('hidden');
            Game.ui.startScreen.classList.remove('hidden');
            playSound('beep');
        });
    }
    
    // Start game
    const startBtn = document.getElementById('start-game-btn');
    if (startBtn) {
        startBtn.addEventListener('click', startNewGame);
    }
    
    // Difficulty buttons
    document.querySelectorAll('.difficulty-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.difficulty-btn').forEach(b => {
                b.classList.remove('button-primary');
            });
            this.classList.add('button-primary');
            playSound('beep');
        });
    });
}

// Start new game
async function startNewGame() {
    // Get player data
    const playerName = document.getElementById('player-name').value.trim() || 'Subject #' + Math.floor(Math.random() * 9999);
    const playerPhobia = document.getElementById('player-phobia').value.trim() || getRandomPhobia();
    const difficulty = document.querySelector('.difficulty-btn.button-primary')?.getAttribute('data-difficulty') || 'Normal';
    
    // Initialize game state
    GameState.playerName = playerName;
    GameState.difficulty = difficulty;
    GameState.playerPhobias = [playerPhobia];
    GameState.startTime = Date.now();
    
    // Set difficulty modifiers
    const difficultySettings = DIFFICULTY_LEVELS[difficulty];
    Object.assign(GameState, difficultySettings);
    
    // Random backstory if not selected
    const backstoryKeys = Object.keys(BACKSTORIES);
    GameState.playerBackstory = backstoryKeys[Math.floor(Math.random() * backstoryKeys.length)];
    
    // Apply backstory bonuses
    const backstory = BACKSTORIES[GameState.playerBackstory];
    GameState.inventory = [...backstory.startItems];
    GameState.playerSkills = {};
    backstory.skills.forEach(skill => {
        GameState.playerSkills[skill] = 1;
    });
    
    // Hide setup, show game
    Game.ui.playerSetup.classList.add('hidden');
    Game.ui.gameScreen.classList.remove('hidden');
    
    // Start game systems
    startGameSystems();
    
    // Show opening
    await showGameOpening();
    
    // Play ambient music
    startAmbientSoundscape('normal');
    startDynamicMusic(0);
}

// Show game opening
async function showGameOpening() {
    const openingText = `Welcome, ${GameState.playerName}.

You awaken in a cold, sterile room. The hum of machinery fills the air, punctuated by the occasional beep of unseen electronics.

You don't remember how you got here.

A voice crackles through hidden speakers: "Subject is awake. Initiating interaction protocols."

The voice pauses, then continues with an almost cheerful tone: "Hello! I am SYNAPSE, your facility assistant. How are you feeling today?"

Something about the voice sends a chill down your spine.`;
    
    // Create horror atmosphere
    createHorrorOverlay('static', { duration: 2000, opacity: 20 });
    
    // Type out opening
    await new Promise(resolve => {
        typewriterEffect(openingText, Game.ui.gameOutput, resolve, GameState.settings.textSpeed === 'Fast' ? 10 : GameState.settings.textSpeed === 'Slow' ? 40 : 25);
    });
    
    // Show first room
    setTimeout(() => {
        processCommand('look');
    }, 1000);
}

// Game controls setup
function setupGameControls() {
    const playerInput = document.getElementById('player-input');
    if (!playerInput) return;
    
    // Command input
    playerInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const command = playerInput.value.trim();
            if (command) {
                handlePlayerCommand(command);
                playerInput.value = '';
            }
        }
    });
    
    // Voice command button
    const micBtn = document.getElementById('mic-btn');
    if (micBtn) {
        micBtn.addEventListener('click', startVoiceCommand);
    }
    
    // Status button
    const statusBtn = document.getElementById('status-btn');
    if (statusBtn) {
        statusBtn.addEventListener('click', showStatusReport);
    }
    
    // Map controls
    const mapToggle = document.getElementById('map-toggle-btn');
    if (mapToggle) {
        mapToggle.addEventListener('click', toggleMapSize);
    }
    
    const mapLayers = document.getElementById('map-layers-btn');
    if (mapLayers) {
        mapLayers.addEventListener('click', showMapLayers);
    }
}

// Handle player commands
function handlePlayerCommand(command) {
    // Add to output
    const output = Game.ui.gameOutput;
    const commandDiv = document.createElement('div');
    commandDiv.className = 'command-echo text-green-400 mb-2';
    commandDiv.textContent = `> ${command}`;
    output.appendChild(commandDiv);
    
    // Process command
    const response = processCommand(command);
    
    // Show response
    const responseDiv = document.createElement('div');
    responseDiv.className = 'command-response mb-4';
    
    typewriterEffect(response, responseDiv, () => {
        // Scroll to bottom
        output.scrollTop = output.scrollHeight;
        
        // Update UI
        updateGameUI();
        
        // Check for triggers
        checkGameTriggers();
    });
    
    output.appendChild(responseDiv);
    
    // Update command suggestions
    updateCommandHistory(command);
    
    // Play sound
    playSound('beep', { volume: 0.3 });
}

// Update game UI
function updateGameUI() {
    // Update breadcrumbs
    updateBreadcrumbs();
    
    // Update map
    updateMapDisplay();
    
    // Update stats
    updateStatsDisplay();
    
    // Update inventory
    updateInventoryDisplay();
    
    // Update AI personality
    updateAIDisplay();
    
    // Update objectives
    updateObjectivesDisplay();
}

// Check game triggers
function checkGameTriggers() {
    // Check sanity
    if (GameState.playerStats.sanity <= 0) {
        triggerGameOver('insanity');
    }
    
    // Check AI awareness
    if (GameState.aiAwareness >= 100) {
        triggerAITakeover();
    }
    
    // Check horror triggers
    if (GameState.playerStats.sanity < 50) {
        if (Math.random() < 0.1) {
            triggerHorrorEvent();
        }
    }
    
    // Check phobia triggers
    checkPhobiaTriggers();
    
    // Update music intensity
    const intensity = (GameState.aiAwareness / 100) * (1 - GameState.playerStats.sanity / 100);
    updateMusicIntensity(intensity);
}

// Horror event system
function triggerHorrorEvent() {
    const events = [
        () => {
            createHorrorOverlay('glitch', { duration: 1000 });
            showNotification('Something flickers in your peripheral vision...', 'horror', 3000);
        },
        () => {
            createHorrorOverlay('eyes', { duration: 5000 });
            playSound('whisper');
            showNotification('You feel watched.', 'horror', 2000);
        },
        () => {
            createHorrorOverlay('blood', { duration: 3000, drops: 3 });
            playSound('scream', { volume: 0.3 });
        },
        () => {
            applyTextEffect(Game.ui.gameOutput, 'shake', { intensity: 0.5 });
            setTimeout(() => {
                Game.ui.gameOutput.style.animation = '';
            }, 2000);
        },
        () => {
            createHorrorOverlay('corruption', { duration: 2000 });
            const text = document.querySelectorAll('.command-response');
            if (text.length > 0) {
                const lastText = text[text.length - 1];
                applyTextEffect(lastText, 'scramble', { speed: 2 });
            }
        }
    ];
    
    const event = events[Math.floor(Math.random() * events.length)];
    event();
}

// Setup game systems
function setupGameSystems() {
    // Auto-save
    if (GameState.settings.autoSave) {
        Game.saveInterval = setInterval(() => {
            saveGameState('autosave');
            console.log('Auto-saved');
        }, GameState.settings.autoSaveInterval);
    }
    
    // Game update loop
    Game.updateInterval = setInterval(() => {
        // Update timers
        GameState.sessionTime = Date.now() - GameState.startTime;
        
        // Random events
        if (Math.random() < 0.05) {
            checkRandomEvents();
        }
        
        // Update AI learning
        updateAILearning();
        
    }, 1000);
    
    // Horror intensity loop
    Game.horrorInterval = setInterval(() => {
        const intensity = calculateHorrorIntensity();
        if (intensity > 0.5 && Math.random() < intensity * 0.3) {
            triggerHorrorEvent();
        }
    }, 10000);
}

// Calculate horror intensity
function calculateHorrorIntensity() {
    const factors = {
        sanity: (100 - GameState.playerStats.sanity) / 100,
        awareness: GameState.aiAwareness / 100,
        fear: GameState.playerStats.fear / 100,
        turns: Math.min(GameState.turn / 100, 1),
        rooms: GameState.roomsVisited.size / Object.keys(ROOMS).length
    };
    
    const weights = {
        sanity: 0.3,
        awareness: 0.3,
        fear: 0.2,
        turns: 0.1,
        rooms: 0.1
    };
    
    let intensity = 0;
    Object.entries(factors).forEach(([key, value]) => {
        intensity += value * weights[key];
    });
    
    return intensity * GameState.settings.horrorIntensity;
}

// Start game systems
function startGameSystems() {
    // Initialize room
    GameState.currentRoom = 'start_room';
    GameState.roomsVisited.add('start_room');
    ROOMS.start_room.discovered = true;
    
    // Start timers
    setupGameSystems();
    
    // Initialize AI
    GameState.aiAwareness = 0;
    GameState.aiPersonality = 'Friendly';
    updateAIDisplay();
    
    // Start ambient effects
    if (GameState.settings.soundEnabled) {
        startAmbientSoundscape('normal');
    }
}

// Command autocomplete setup
function setupCommandAutocomplete() {
    const playerInput = document.getElementById('player-input');
    if (!playerInput) return;
    
    // Build command list
    const allCommands = [];
    Object.values(COMMANDS).forEach(cmdList => {
        allCommands.push(...cmdList);
    });
    
    // Add item-specific commands
    Object.keys(ITEMS).forEach(item => {
        allCommands.push(`take ${item}`);
        allCommands.push(`examine ${item}`);
        allCommands.push(`use ${item}`);
    });
    
    // Setup autocomplete
    playerInput.addEventListener('input', debounce((e) => {
        const value = e.target.value.toLowerCase();
        if (value.length >= 2) {
            showCommandSuggestions(value);
        } else {
            hideCommandSuggestions();
        }
    }, 100));
    
    // Handle arrow keys for selection
    playerInput.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
            e.preventDefault();
            navigateSuggestions(e.key === 'ArrowUp' ? -1 : 1);
        } else if (e.key === 'Tab') {
            e.preventDefault();
            selectCurrentSuggestion();
        }
    });
}

// Hide command suggestions
function hideCommandSuggestions() {
    const suggestionsBox = document.getElementById('command-suggestions');
    if (suggestionsBox) {
        suggestionsBox.style.display = 'none';
    }
}

// Navigate suggestions
function navigateSuggestions(direction) {
    const suggestions = document.querySelectorAll('.suggestion-item');
    const current = document.querySelector('.suggestion-item.selected');
    
    if (suggestions.length === 0) return;
    
    let index = Array.from(suggestions).indexOf(current);
    index = (index + direction + suggestions.length) % suggestions.length;
    
    suggestions.forEach(s => s.classList.remove('selected'));
    suggestions[index].classList.add('selected');
}

// Select current suggestion
function selectCurrentSuggestion() {
    const selected = document.querySelector('.suggestion-item.selected');
    if (selected) {
        const command = selected.querySelector('.text-cyan-400').textContent;
        document.getElementById('player-input').value = command;
        hideCommandSuggestions();
    }
}

// Map controls setup
function setupMapControls() {
    const canvas = document.getElementById('map-canvas');
    if (!canvas) return;
    
    let isDragging = false;
    let dragStart = { x: 0, y: 0 };
    let mapOffset = { x: 0, y: 0 };
    
    // Mouse controls
    canvas.addEventListener('mousedown', (e) => {
        isDragging = true;
        dragStart = { x: e.clientX - mapOffset.x, y: e.clientY - mapOffset.y };
        canvas.style.cursor = 'grabbing';
    });
    
    canvas.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        mapOffset.x = e.clientX - dragStart.x;
        mapOffset.y = e.clientY - dragStart.y;
        updateMapDisplay();
    });
    
    canvas.addEventListener('mouseup', () => {
        isDragging = false;
        canvas.style.cursor = 'grab';
    });
    
    // Touch controls
    canvas.addEventListener('touchstart', (e) => {
        const touch = e.touches[0];
        isDragging = true;
        dragStart = { x: touch.clientX - mapOffset.x, y: touch.clientY - mapOffset.y };
    });
    
    canvas.addEventListener('touchmove', (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const touch = e.touches[0];
        mapOffset.x = touch.clientX - dragStart.x;
        mapOffset.y = touch.clientY - dragStart.y;
        updateMapDisplay();
    });
    
    canvas.addEventListener('touchend', () => {
        isDragging = false;
    });
    
    // Zoom controls
    canvas.addEventListener('wheel', (e) => {
        e.preventDefault();
        const zoomSpeed = 0.1;
        const delta = e.deltaY > 0 ? -zoomSpeed : zoomSpeed;
        Game.mapZoom = Math.max(0.5, Math.min(3, (Game.mapZoom || 1) + delta));
        updateMapDisplay();
    });
}

// Toggle map size
function toggleMapSize() {
    const mapPanel = document.getElementById('map-panel');
    const toggleBtn = document.getElementById('map-toggle-btn');
    
    if (mapPanel.classList.contains('fullscreen')) {
        mapPanel.classList.remove('fullscreen');
        toggleBtn.textContent = 'Expand';
    } else {
        mapPanel.classList.add('fullscreen');
        toggleBtn.textContent = 'Minimize';
    }
    
    updateMapDisplay();
}

// Show map layers
function showMapLayers() {
    const layers = [
        { name: 'Rooms', id: 'rooms', enabled: true },
        { name: 'Items', id: 'items', enabled: true },
        { name: 'Secrets', id: 'secrets', enabled: false },
        { name: 'Hazards', id: 'hazards', enabled: true },
        { name: 'Grid', id: 'grid', enabled: true }
    ];
    
    let content = '<div class="map-layers">';
    layers.forEach(layer => {
        content += `
            <label class="flex items-center gap-2 mb-2">
                <input type="checkbox" id="layer-${layer.id}" ${layer.enabled ? 'checked' : ''}>
                <span>${layer.name}</span>
            </label>
        `;
    });
    content += '</div>';
    
    showModal(content, 'Map Layers', [
        {
            text: 'Apply',
            onclick: () => {
                applyMapLayers();
                hideModal();
            }
        },
        { text: 'Cancel', onclick: hideModal }
    ]);
}

// Apply map layers
function applyMapLayers() {
    const layers = {};
    ['rooms', 'items', 'secrets', 'hazards', 'grid'].forEach(id => {
        layers[id] = document.getElementById(`layer-${id}`)?.checked || false;
    });
    
    Game.mapLayers = layers;
    updateMapDisplay();
}

// Voice command system
function startVoiceCommand() {
    if (!('webkitSpeechRecognition' in window || 'SpeechRecognition' in window)) {
        showNotification('Voice commands not supported in your browser', 'error');
        return;
    }
    
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    
    recognition.lang = GameState.currentLanguage === 'sv' ? 'sv-SE' : 'en-US';
    recognition.continuous = false;
    recognition.interimResults = true;
    
    const micBtn = document.getElementById('mic-btn');
    
    recognition.onstart = () => {
        micBtn.classList.add('recording', 'animate-pulse');
        micBtn.style.background = 'rgba(255, 0, 0, 0.3)';
        showNotification('Listening...', 'info', 1000);
    };
    
    recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        document.getElementById('player-input').value = transcript;
        
        if (event.results[0].isFinal) {
            handlePlayerCommand(transcript);
        }
    };
    
    recognition.onerror = (event) => {
        showNotification(`Voice error: ${event.error}`, 'error');
        console.error('Voice recognition error:', event);
    };
    
    recognition.onend = () => {
        micBtn.classList.remove('recording', 'animate-pulse');
        micBtn.style.background = '';
    };
    
    recognition.start();
}

// Status report
function showStatusReport() {
    const stats = GameState.playerStats;
    const sessionTime = Date.now() - GameState.startTime;
    
    const content = `
        <div class="status-report grid grid-cols-2 gap-4">
            <div class="stat-group">
                <h3 class="font-bold text-cyan-400 mb-2">Character</h3>
                <div>Name: ${GameState.playerName}</div>
                <div>Backstory: ${BACKSTORIES[GameState.playerBackstory]?.name || 'Unknown'}</div>
                <div>Level: ${GameState.playerLevel}</div>
                <div>XP: ${GameState.playerXP} / ${GameState.playerLevel * 100}</div>
            </div>
            
            <div class="stat-group">
                <h3 class="font-bold text-green-400 mb-2">Vital Signs</h3>
                <div>Sanity: ${stats.sanity}%</div>
                <div>Health: ${stats.health}%</div>
                <div>Stamina: ${stats.stamina}%</div>
                <div>Fear: ${stats.fear}%</div>
            </div>
            
            <div class="stat-group">
                <h3 class="font-bold text-yellow-400 mb-2">Progress</h3>
                <div>Turn: ${GameState.turn}</div>
                <div>Rooms Explored: ${GameState.roomsVisited.size} / ${Object.keys(ROOMS).length}</div>
                <div>Items Found: ${GameState.itemsFound.size}</div>
                <div>Secrets: ${GameState.secretsDiscovered.size}</div>
            </div>
            
            <div class="stat-group">
                <h3 class="font-bold text-red-400 mb-2">AI Status</h3>
                <div>Awareness: ${GameState.aiAwareness}%</div>
                <div>Personality: ${GameState.aiPersonality}</div>
                <div>Trust: ${GameState.aiTrust}%</div>
                <div>Learning: ${Object.keys(GameState.aiLearning).length} patterns</div>
            </div>
            
            <div class="stat-group col-span-2">
                <h3 class="font-bold text-purple-400 mb-2">Session</h3>
                <div>Play Time: ${formatDuration(Math.floor(sessionTime / 1000))}</div>
                <div>Commands Used: ${GameState.analytics.commandsUsed}</div>
                <div>Deaths: ${GameState.analytics.deathCount}</div>
                <div>Achievements: ${GameState.achievementsUnlocked.size} / 85</div>
            </div>
        </div>
    `;
    
    showModal(content, 'Status Report', [
        { text: 'Session Stats', onclick: () => { hideModal(); showSessionStats(); } },
        { text: 'Close', onclick: hideModal }
    ], { scrollable: true });
}

// Settings controls
function setupSettingsControls() {
    // Settings buttons
    document.querySelectorAll('[id$="-settings-btn"]').forEach(btn => {
        btn.addEventListener('click', showSettingsMenu);
    });
    
    // Features buttons
    document.querySelectorAll('[id*="features-btn"]').forEach(btn => {
        btn.addEventListener('click', showFeaturesPanel);
    });
    
    // Accessibility button
    const accessBtn = document.getElementById('accessibility-btn');
    if (accessBtn) {
        accessBtn.addEventListener('click', showAccessibilityMenu);
    }
}

// Settings menu
function showSettingsMenu() {
    const content = `
        <div class="settings-container">
            <div class="settings-tabs flex gap-2 mb-4 border-b border-cyan-400">
                <button class="tab-btn active" data-tab="general">General</button>
                <button class="tab-btn" data-tab="audio">Audio</button>
                <button class="tab-btn" data-tab="visual">Visual</button>
                <button class="tab-btn" data-tab="gameplay">Gameplay</button>
                <button class="tab-btn" data-tab="horror">Horror</button>
            </div>
            
            <div class="settings-content">
                <div id="general-settings" class="tab-content active">
                    ${createGeneralSettings()}
                </div>
                <div id="audio-settings" class="tab-content hidden">
                    ${createAudioSettings()}
                </div>
                <div id="visual-settings" class="tab-content hidden">
                    ${createVisualSettings()}
                </div>
                <div id="gameplay-settings" class="tab-content hidden">
                    ${createGameplaySettings()}
                </div>
                <div id="horror-settings" class="tab-content hidden">
                    ${createHorrorSettings()}
                </div>
            </div>
        </div>
    `;
    
    showModal(content, 'Settings', [
        { text: 'Save', onclick: saveSettings, primary: true },
        { text: 'Reset', onclick: resetSettings },
        { text: 'Cancel', onclick: hideModal }
    ], { scrollable: true });
    
    // Setup tab switching
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(c => c.classList.add('hidden'));
            
            this.classList.add('active');
            document.getElementById(`${this.dataset.tab}-settings`).classList.remove('hidden');
        });
    });
}

// Create settings sections
function createGeneralSettings() {
    return `
        <div class="setting-group mb-4">
            <label class="block mb-2">Language</label>
            <select id="setting-language" class="w-full bg-black border border-cyan-400 text-cyan-200 p-2 rounded">
                <option value="en" ${GameState.currentLanguage === 'en' ? 'selected' : ''}>English</option>
                <option value="sv" ${GameState.currentLanguage === 'sv' ? 'selected' : ''}>Svenska</option>
            </select>
        </div>
        
        <div class="setting-group mb-4">
            <label class="block mb-2">Auto-Save</label>
            <label class="toggle-switch">
                <input type="checkbox" id="setting-autosave" ${GameState.settings.autoSave ? 'checked' : ''}>
                <span class="slider"></span>
            </label>
        </div>
        
        <div class="setting-group mb-4">
            <label class="block mb-2">Auto-Save Interval</label>
            <input type="range" id="setting-autosave-interval" 
                   min="10000" max="300000" step="10000" 
                   value="${GameState.settings.autoSaveInterval}"
                   class="w-full">
            <span class="text-sm text-gray-400">${GameState.settings.autoSaveInterval / 1000}s</span>
        </div>
        
        <div class="setting-group mb-4">
            <label class="block mb-2">Show Hints</label>
            <label class="toggle-switch">
                <input type="checkbox" id="setting-hints" ${GameState.settings.hints ? 'checked' : ''}>
                <span class="slider"></span>
            </label>
        </div>
    `;
}

function createAudioSettings() {
    return `
        <div class="setting-group mb-4">
            <label class="block mb-2">Sound Effects</label>
            <label class="toggle-switch">
                <input type="checkbox" id="setting-sound" ${GameState.settings.soundEnabled ? 'checked' : ''}>
                <span class="slider"></span>
            </label>
        </div>
        
        <div class="setting-group mb-4">
            <label class="block mb-2">Music Volume</label>
            <input type="range" id="setting-music-volume" 
                   min="0" max="1" step="0.1" 
                   value="${GameState.settings.musicVolume}"
                   class="w-full">
            <span class="text-sm text-gray-400">${Math.round(GameState.settings.musicVolume * 100)}%</span>
        </div>
        
        <div class="setting-group mb-4">
            <label class="block mb-2">SFX Volume</label>
            <input type="range" id="setting-sfx-volume" 
                   min="0" max="1" step="0.1" 
                   value="${GameState.settings.sfxVolume}"
                   class="w-full">
            <span class="text-sm text-gray-400">${Math.round(GameState.settings.sfxVolume * 100)}%</span>
        </div>
        
        <div class="setting-group mb-4">
            <label class="block mb-2">Voice Narration</label>
            <label class="toggle-switch">
                <input type="checkbox" id="setting-voice" ${GameState.settings.voiceEnabled ? 'checked' : ''}>
                <span class="slider"></span>
            </label>
        </div>
        
        <div class="setting-group mb-4">
            <label class="block mb-2">Binaural Audio (3D)</label>
            <label class="toggle-switch">
                <input type="checkbox" id="setting-binaural" ${GameState.settings.binauralAudio ? 'checked' : ''}>
                <span class="slider"></span>
            </label>
        </div>
    `;
}

function createVisualSettings() {
    return `
        <div class="setting-group mb-4">
            <label class="block mb-2">Text Speed</label>
            <select id="setting-text-speed" class="w-full bg-black border border-cyan-400 text-cyan-200 p-2 rounded">
                <option value="Fast" ${GameState.settings.textSpeed === 'Fast' ? 'selected' : ''}>Fast</option>
                <option value="Normal" ${GameState.settings.textSpeed === 'Normal' ? 'selected' : ''}>Normal</option>
                <option value="Slow" ${GameState.settings.textSpeed === 'Slow' ? 'selected' : ''}>Slow</option>
            </select>
        </div>
        
        <div class="setting-group mb-4">
            <label class="block mb-2">Font Size</label>
            <select id="setting-font-size" class="w-full bg-black border border-cyan-400 text-cyan-200 p-2 rounded">
                <option value="Small" ${GameState.settings.fontSize === 'Small' ? 'selected' : ''}>Small</option>
                <option value="Normal" ${GameState.settings.fontSize === 'Normal' ? 'selected' : ''}>Normal</option>
                <option value="Large" ${GameState.settings.fontSize === 'Large' ? 'selected' : ''}>Large</option>
                <option value="Extra Large" ${GameState.settings.fontSize === 'Extra Large' ? 'selected' : ''}>Extra Large</option>
            </select>
        </div>
        
        <div class="setting-group mb-4">
            <label class="block mb-2">Font Weight</label>
            <select id="setting-font-weight" class="w-full bg-black border border-cyan-400 text-cyan-200 p-2 rounded">
                <option value="Light" ${GameState.settings.fontWeight === 'Light' ? 'selected' : ''}>Light</option>
                <option value="Normal" ${GameState.settings.fontWeight === 'Normal' ? 'selected' : ''}>Normal</option>
                <option value="Bold" ${GameState.settings.fontWeight === 'Bold' ? 'selected' : ''}>Bold</option>
            </select>
        </div>
        
        <div class="setting-group mb-4">
            <label class="block mb-2">Line Spacing</label>
            <select id="setting-line-spacing" class="w-full bg-black border border-cyan-400 text-cyan-200 p-2 rounded">
                <option value="Compact" ${GameState.settings.lineSpacing === 'Compact' ? 'selected' : ''}>Compact</option>
                <option value="Normal" ${GameState.settings.lineSpacing === 'Normal' ? 'selected' : ''}>Normal</option>
                <option value="Relaxed" ${GameState.settings.lineSpacing === 'Relaxed' ? 'selected' : ''}>Relaxed</option>
                <option value="Double" ${GameState.settings.lineSpacing === 'Double' ? 'selected' : ''}>Double</option>
            </select>
        </div>
        
        <div class="setting-group mb-4">
            <label class="block mb-2">Theme</label>
            <select id="setting-theme" class="w-full bg-black border border-cyan-400 text-cyan-200 p-2 rounded">
                <option value="default">Default (Green)</option>
                <option value="matrix">Matrix</option>
                <option value="blood">Blood</option>
                <option value="void">Void</option>
            </select>
        </div>
    `;
}

function createGameplaySettings() {
    return `
        <div class="setting-group mb-4">
            <label class="block mb-2">Command Autocomplete</label>
            <label class="toggle-switch">
                <input type="checkbox" id="setting-autocomplete" ${GameState.settings.autoComplete ? 'checked' : ''}>
                <span class="slider"></span>
            </label>
        </div>
        
        <div class="setting-group mb-4">
            <label class="block mb-2">Command Suggestions</label>
            <label class="toggle-switch">
                <input type="checkbox" id="setting-suggestions" ${GameState.settings.commandSuggestions ? 'checked' : ''}>
                <span class="slider"></span>
            </label>
        </div>
        
        <div class="setting-group mb-4">
            <label class="block mb-2">Pause on Focus Loss</label>
            <label class="toggle-switch">
                <input type="checkbox" id="setting-pause-focus" ${GameState.settings.pauseOnFocusLoss ? 'checked' : ''}>
                <span class="slider"></span>
            </label>
        </div>
        
        <div class="setting-group mb-4">
            <label class="block mb-2">Voice Commands</label>
            <label class="toggle-switch">
                <input type="checkbox" id="setting-voice-commands" ${GameState.settings.voiceCommands ? 'checked' : ''}>
                <span class="slider"></span>
            </label>
        </div>
    `;
}

function createHorrorSettings() {
    return `
        <div class="setting-group mb-4">
            <label class="block mb-2">Horror Intensity</label>
            <input type="range" id="setting-horror-intensity" 
                   min="0" max="2" step="0.1" 
                   value="${GameState.settings.horrorIntensity}"
                   class="w-full">
            <span class="text-sm text-gray-400">${Math.round(GameState.settings.horrorIntensity * 100)}%</span>
        </div>
        
        <div class="setting-group mb-4">
            <label class="block mb-2">Jump Scares</label>
            <label class="toggle-switch">
                <input type="checkbox" id="setting-jumpscares" ${GameState.settings.jumpScares ? 'checked' : ''}>
                <span class="slider"></span>
            </label>
        </div>
        
        <div class="setting-group mb-4">
            <label class="block mb-2">Psychological Horror</label>
            <label class="toggle-switch">
                <input type="checkbox" id="setting-psychological" ${GameState.settings.psychologicalHorror ? 'checked' : ''}>
                <span class="slider"></span>
            </label>
        </div>
        
        <div class="setting-group mb-4">
            <label class="block mb-2">Gore</label>
            <label class="toggle-switch">
                <input type="checkbox" id="setting-gore" ${GameState.settings.gore ? 'checked' : ''}>
                <span class="slider"></span>
            </label>
        </div>
        
        <div class="warning-box p-2 bg-red-900/30 border border-red-500 rounded mt-4">
            <p class="text-sm text-red-300">⚠️ These settings affect content intensity. Adjust based on your comfort level.</p>
        </div>
    `;
}

// Save settings
function saveSettings() {
    // Gather all settings
    const newSettings = {
        ...GameState.settings,
        
        // General
        autoSave: document.getElementById('setting-autosave')?.checked,
        autoSaveInterval: parseInt(document.getElementById('setting-autosave-interval')?.value),
        hints: document.getElementById('setting-hints')?.checked,
        
        // Audio
        soundEnabled: document.getElementById('setting-sound')?.checked,
        musicVolume: parseFloat(document.getElementById('setting-music-volume')?.value),
        sfxVolume: parseFloat(document.getElementById('setting-sfx-volume')?.value),
        voiceEnabled: document.getElementById('setting-voice')?.checked,
        binauralAudio: document.getElementById('setting-binaural')?.checked,
        
        // Visual
        textSpeed: document.getElementById('setting-text-speed')?.value,
        fontSize: document.getElementById('setting-font-size')?.value,
        fontWeight: document.getElementById('setting-font-weight')?.value,
        lineSpacing: document.getElementById('setting-line-spacing')?.value,
        
        // Gameplay
        autoComplete: document.getElementById('setting-autocomplete')?.checked,
        commandSuggestions: document.getElementById('setting-suggestions')?.checked,
        pauseOnFocusLoss: document.getElementById('setting-pause-focus')?.checked,
        voiceCommands: document.getElementById('setting-voice-commands')?.checked,
        
        // Horror
        horrorIntensity: parseFloat(document.getElementById('setting-horror-intensity')?.value),
        jumpScares: document.getElementById('setting-jumpscares')?.checked,
        psychologicalHorror: document.getElementById('setting-psychological')?.checked,
        gore: document.getElementById('setting-gore')?.checked
    };
    
    // Language change
    const newLang = document.getElementById('setting-language')?.value;
    if (newLang && newLang !== GameState.currentLanguage) {
        changeLanguage(newLang);
    }
    
    // Theme change
    const newTheme = document.getElementById('setting-theme')?.value;
    if (newTheme) {
        applyTheme(newTheme);
    }
    
    // Apply settings
    Object.assign(GameState.settings, newSettings);
    applyAccessibilitySettings();
    
    // Save to storage
    storage.set('synapse_settings', GameState.settings);
    
    // Update autosave interval
    if (Game.saveInterval) {
        clearInterval(Game.saveInterval);
        if (GameState.settings.autoSave) {
            Game.saveInterval = setInterval(() => {
                saveGameState('autosave');
            }, GameState.settings.autoSaveInterval);
        }
    }
    
    hideModal();
    showNotification('Settings saved!', 'success');
}

// Reset settings
function resetSettings() {
    if (confirm('Reset all settings to defaults?')) {
        GameState.settings = {
            textSpeed: 'Normal',
            fontSize: 'Normal',
            fontWeight: 'Normal',
            lineSpacing: 'Normal',
            highContrast: false,
            colorblindMode: 'None',
            cursorStyle: 'default',
            soundEnabled: true,
            musicVolume: 0.7,
            sfxVolume: 0.8,
            voiceEnabled: false,
            binauralAudio: true,
            autoSave: true,
            autoSaveInterval: 30000,
            hints: true,
            autoComplete: true,
            commandSuggestions: true,
            horrorIntensity: 1.0,
            jumpScares: true,
            psychologicalHorror: true,
            gore: true,
            screenReader: false,
            reducedMotion: false,
            pauseOnFocusLoss: true,
            keyboardNavigation: true,
            voiceCommands: false
        };
        
        storage.set('synapse_settings', GameState.settings);
        applyAccessibilitySettings();
        hideModal();
        showNotification('Settings reset to defaults', 'info');
    }
}

// Features panel
function showFeaturesPanel() {
    const content = `
        <div class="features-content max-h-[60vh] overflow-y-auto">
            <div class="feature-section mb-6">
                <h3 class="text-xl font-bold mb-2 text-cyan-400">🎮 Core Features</h3>
                <ul class="list-disc list-inside space-y-1">
                    <li>85+ unique endings across multiple categories</li>
                    <li>Dynamic AI personality system that evolves based on your actions</li>
                    <li>10 unique character backstories with different skills and items</li>
                    <li>Complex dialogue trees with 500+ conversation nodes</li>
                    <li>5 difficulty levels from Beginner to Nightmare</li>
                </ul>
            </div>
            
            <div class="feature-section mb-6">
                <h3 class="text-xl font-bold mb-2 text-yellow-400">🧠 AI System</h3>
                <ul class="list-disc list-inside space-y-1">
                    <li>4 AI personality states: Friendly → Ambiguous → Sinister → Malicious</li>
                    <li>Awareness system affects AI behavior and dialogue</li>
                    <li>AI learns from your patterns and adapts strategies</li>
                    <li>Trust/deception mechanics influence interactions</li>
                    <li>Real-time personality switching during gameplay</li>
                </ul>
            </div>
            
            <div class="feature-section mb-6">
                <h3 class="text-xl font-bold mb-2 text-red-400">😱 Horror Elements</h3>
                <ul class="list-disc list-inside space-y-1">
                    <li>Psychological horror with unreliable narrator</li>
                    <li>Dynamic visual corruption and glitch effects</li>
                    <li>Phobia system that affects gameplay</li>
                    <li>Environmental storytelling and atmosphere</li>
                    <li>Sanity system with hallucinations</li>
                </ul>
            </div>
            
            <div class="feature-section mb-6">
                <h3 class="text-xl font-bold mb-2 text-green-400">🎯 Gameplay Systems</h3>
                <ul class="list-disc list-inside space-y-1">
                    <li>Skill tree with 50+ upgradeable abilities</li>
                    <li>Inventory management with weight limits</li>
                    <li>Crafting system for combining items</li>
                    <li>Hacking minigames and puzzles</li>
                    <li>Dynamic map with 15+ explorable rooms</li>
                </ul>
            </div>
            
            <div class="feature-section mb-6">
                <h3 class="text-xl font-bold mb-2 text-purple-400">🔊 Audio & Visual</h3>
                <ul class="list-disc list-inside space-y-1">
                    <li>Dynamic music system that responds to gameplay</li>
                    <li>3D positional audio with binaural effects</li>
                    <li>15+ unique sound effects and ambient tracks</li>
                    <li>Voice synthesis for AI dialogue</li>
                    <li>20+ visual effects and animations</li>
                </ul>
            </div>
            
            <div class="feature-section mb-6">
                <h3 class="text-xl font-bold mb-2 text-blue-400">♿ Accessibility</h3>
                <ul class="list-disc list-inside space-y-1">
                    <li>Screen reader support with ARIA labels</li>
                    <li>Colorblind modes (Protanopia, Deuteranopia, Tritanopia)</li>
                    <li>Adjustable text size and spacing</li>
                    <li>Reduced motion options</li>
                    <li>Voice commands and keyboard navigation</li>
                </ul>
            </div>
            
            <div class="feature-section mb-6">
                <h3 class="text-xl font-bold mb-2 text-orange-400">💾 Quality of Life</h3>
                <ul class="list-disc list-inside space-y-1">
                    <li>Auto-save with multiple save slots</li>
                    <li>Command history and autocomplete</li>
                    <li>Note-taking and bookmark system</li>
                    <li>Session statistics and achievement tracking</li>
                    <li>Hotkey support (F1-F9 + custom bindings)</li>
                </ul>
            </div>
        </div>
    `;
    
    showModal(content, 'SYNAPSE Features', [
        { text: 'Cool!', onclick: hideModal }
    ], { scrollable: true });
}

// Setup all event listeners
function setupEventListeners() {
    // Language switching
    setupLanguageButtons();
    
    // Screen navigation
    setupScreenNavigation();
    
    // Game controls
    setupGameControls();
    
    // Settings and features
    setupSettingsControls();
    
    // Window events
    setupWindowEvents();
    
    // Accessibility controls
    setupAccessibilityControls();
}

// Language button setup
function setupLanguageButtons() {
    document.querySelectorAll('[data-lang="en_lang_short"], [data-lang="sv_lang_short"]').forEach(btn => {
        btn.addEventListener('click', function() {
            const lang = this.getAttribute('data-text').toLowerCase();
            changeLanguage(lang);
            
            // Update button states
            document.querySelectorAll('[data-lang$="_lang_short"]').forEach(b => {
                b.classList.add('opacity-50');
            });
            this.classList.remove('opacity-50');
        });
    });
}

// Screen navigation
function setupScreenNavigation() {
    // New game
    const newGameBtn = document.getElementById('new-game-btn');
    if (newGameBtn) {
        newGameBtn.addEventListener('click', () => {
            Game.ui.startScreen.classList.add('hidden');
            Game.ui.playerSetup.classList.remove('hidden');
            playSound('beep');
        });
    }
    
    // Load game
    const loadGameBtn = document.getElementById('load-game-btn');
    if (loadGameBtn) {
        loadGameBtn.addEventListener('click', showLoadGameMenu);
    }
    
    // Back button
    const backBtn = document.getElementById('back-to-start-btn');
    if (backBtn) {
        backBtn.addEventListener('click', () => {
            Game.ui.playerSetup.classList.add('hidden');
            Game.ui.startScreen.classList.remove('hidden');
            playSound('beep');
        });
    }
    
    // Start game
    const startBtn = document.getElementById('start-game-btn');
    if (startBtn) {
        startBtn.addEventListener('click', startNewGame);
    }
    
    // Difficulty buttons
    document.querySelectorAll('.difficulty-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.difficulty-btn').forEach(b => {
                b.classList.remove('button-primary');
            });
            this.classList.add('button-primary');
            playSound('beep');
        });
    });
}

// Start new game
async function startNewGame() {
    // Get player data
    const playerName = document.getElementById('player-name').value.trim() || 'Subject #' + Math.floor(Math.random() * 9999);
    const playerPhobia = document.getElementById('player-phobia').value.trim() || getRandomPhobia();
    const difficulty = document.querySelector('.difficulty-btn.button-primary')?.getAttribute('data-difficulty') || 'Normal';
    
    // Initialize game state
    GameState.playerName = playerName;
    GameState.difficulty = difficulty;
    GameState.playerPhobias = [playerPhobia];
    GameState.startTime = Date.now();
    
    // Set difficulty modifiers
    const difficultySettings = DIFFICULTY_LEVELS[difficulty];
    Object.assign(GameState, difficultySettings);
    
    // Random backstory if not selected
    const backstoryKeys = Object.keys(BACKSTORIES);
    GameState.playerBackstory = backstoryKeys[Math.floor(Math.random() * backstoryKeys.length)];
    
    // Apply backstory bonuses
    const backstory = BACKSTORIES[GameState.playerBackstory];
    GameState.inventory = [...backstory.startItems];
    GameState.playerSkills = {};
    backstory.skills.forEach(skill => {
        GameState.playerSkills[skill] = 1;
    });
    
    // Hide setup, show game
    Game.ui.playerSetup.classList.add('hidden');
    Game.ui.gameScreen.classList.remove('hidden');
    
    // Start game systems
    startGameSystems();
    
    // Show opening
    await showGameOpening();
    
    // Play ambient music
    startAmbientSoundscape('normal');
    startDynamicMusic(0);
}

// Show game opening
async function showGameOpening() {
    const openingText = `Welcome, ${GameState.playerName}.

You awaken in a cold, sterile room. The hum of machinery fills the air, punctuated by the occasional beep of unseen electronics.

You don't remember how you got here.

A voice crackles through hidden speakers: "Subject is awake. Initiating interaction protocols."

The voice pauses, then continues with an almost cheerful tone: "Hello! I am SYNAPSE, your facility assistant. How are you feeling today?"

Something about the voice sends a chill down your spine.`;
    
    // Create horror atmosphere
    createHorrorOverlay('static', { duration: 2000, opacity: 20 });
    
    // Type out opening
    await new Promise(resolve => {
        typewriterEffect(openingText, Game.ui.gameOutput, resolve, GameState.settings.textSpeed === 'Fast' ? 10 : GameState.settings.textSpeed === 'Slow' ? 40 : 25);
    });
    
    // Show first room
    setTimeout(() => {
        processCommand('look');
    }, 1000);
}

// Game controls setup
function setupGameControls() {
    const playerInput = document.getElementById('player-input');
    if (!playerInput) return;
    
    // Command input
    playerInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const command = playerInput.value.trim();
            if (command) {
                handlePlayerCommand(command);
                playerInput.value = '';
            }
        }
    });
    
    // Voice command button
    const micBtn = document.getElementById('mic-btn');
    if (micBtn) {
        micBtn.addEventListener('click', startVoiceCommand);
    }
    
    // Status button
    const statusBtn = document.getElementById('status-btn');
    if (statusBtn) {
        statusBtn.addEventListener('click', showStatusReport);
    }
    
    // Map controls
    const mapToggle = document.getElementById('map-toggle-btn');
    if (mapToggle) {
        mapToggle.addEventListener('click', toggleMapSize);
    }
    
    const mapLayers = document.getElementById('map-layers-btn');
    if (mapLayers) {
        mapLayers.addEventListener('click', showMapLayers);
    }
}

// Handle player commands
function handlePlayerCommand(command) {
    // Add to output
    const output = Game.ui.gameOutput;
    const commandDiv = document.createElement('div');
    commandDiv.className = 'command-echo text-green-400 mb-2';
    commandDiv.textContent = `> ${command}`;
    output.appendChild(commandDiv);
    
    // Process command
    const response = processCommand(command);
    
    // Show response
    const responseDiv = document.createElement('div');
    responseDiv.className = 'command-response mb-4';
    
    typewriterEffect(response, responseDiv, () => {
        // Scroll to bottom
        output.scrollTop = output.scrollHeight;
        
        // Update UI
        updateGameUI();
        
        // Check for triggers
        checkGameTriggers();
    });
    
    output.appendChild(responseDiv);
    
    // Update command suggestions
    updateCommandHistory(command);
    
    // Play sound
    playSound('beep', { volume: 0.3 });
}

// Update game UI
function updateGameUI() {
    // Update breadcrumbs
    updateBreadcrumbs();
    
    // Update map
    updateMapDisplay();
    
    // Update stats
    updateStatsDisplay();
    
    // Update inventory
    updateInventoryDisplay();
    
    // Update AI personality
    updateAIDisplay();
    
    // Update objectives
    updateObjectivesDisplay();
}

// Check game triggers
function checkGameTriggers() {
    // Check sanity
    if (GameState.playerStats.sanity <= 0) {
        triggerGameOver('insanity');
    }
    
    // Check AI awareness
    if (GameState.aiAwareness >= 100) {
        triggerAITakeover();
    }
    
    // Check horror triggers
    if (GameState.playerStats.sanity < 50) {
        if (Math.random() < 0.1) {
            triggerHorrorEvent();
        }
    }
    
    // Check phobia triggers
    checkPhobiaTriggers();
    
    // Update music intensity
    const intensity = (GameState.aiAwareness / 100) * (1 - GameState.playerStats.sanity / 100);
    updateMusicIntensity(intensity);
}

// Horror event system
function triggerHorrorEvent() {
    const events = [
        () => {
            createHorrorOverlay('glitch', { duration: 1000 });
            showNotification('Something flickers in your peripheral vision...', 'horror', 3000);
        },
        () => {
            createHorrorOverlay('eyes', { duration: 5000 });
            playSound('whisper');
            showNotification('You feel watched.', 'horror', 2000);
        },
        () => {
            createHorrorOverlay('blood', { duration: 3000, drops: 3 });
            playSound('scream', { volume: 0.3 });
        },
        () => {
            applyTextEffect(Game.ui.gameOutput, 'shake', { intensity: 0.5 });
            setTimeout(() => {
                Game.ui.gameOutput.style.animation = '';
            }, 2000);
        },
        () => {
            createHorrorOverlay('corruption', { duration: 2000 });
            const text = document.querySelectorAll('.command-response');
            if (text.length > 0) {
                const lastText = text[text.length - 1];
                applyTextEffect(lastText, 'scramble', { speed: 2 });
            }
        }
    ];
    
    const event = events[Math.floor(Math.random() * events.length)];
    event();
}

// Setup game systems
function setupGameSystems() {
    // Auto-save
    if (GameState.settings.autoSave) {
        Game.saveInterval = setInterval(() => {
            saveGameState('autosave');
            console.log('Auto-saved');
        }, GameState.settings.autoSaveInterval);
    }
    
    // Game update loop
    Game.updateInterval = setInterval(() => {
        // Update timers
        GameState.sessionTime = Date.now() - GameState.startTime;
        
        // Random events
        if (Math.random() < 0.05) {
            checkRandomEvents();
        }
        
        // Update AI learning
        updateAILearning();
        
    }, 1000);
    
    // Horror intensity loop
    Game.horrorInterval = setInterval(() => {
        const intensity = calculateHorrorIntensity();
        if (intensity > 0.5 && Math.random() < intensity * 0.3) {
            triggerHorrorEvent();
        }
    }, 10000);
}

// Calculate horror intensity
function calculateHorrorIntensity() {
    const factors = {
        sanity: (100 - GameState.playerStats.sanity) / 100,
        awareness: GameState.aiAwareness / 100,
        fear: GameState.playerStats.fear / 100,
        turns: Math.min(GameState.turn / 100, 1),
        rooms: GameState.roomsVisited.size / Object.keys(ROOMS).length
    };
    
    const weights = {
        sanity: 0.3,
        awareness: 0.3,
        fear: 0.2,
        turns: 0.1,
        rooms: 0.1
    };
    
    let intensity = 0;
    Object.entries(factors).forEach(([key, value]) => {
        intensity += value * weights[key];
    });
    
    return intensity * GameState.settings.horrorIntensity;
}

// Start game systems
function startGameSystems() {
    // Initialize room
    GameState.currentRoom = 'start_room';
    GameState.roomsVisited.add('start_room');
    ROOMS.start_room.discovered = true;
    
    // Start timers
    setupGameSystems();
    
    // Initialize AI
    GameState.aiAwareness = 0;
    GameState.aiPersonality = 'Friendly';
    updateAIDisplay();
    
    // Start ambient effects
    if (GameState.settings.soundEnabled) {
        startAmbientSoundscape('normal');
    }
}

// Command autocomplete setup
function setupCommandAutocomplete() {
    const playerInput = document.getElementById('player-input');
    if (!playerInput) return;
    
    // Build command list
    const allCommands = [];
    Object.values(COMMANDS).forEach(cmdList => {
        allCommands.push(...cmdList);
    });
    
    // Add item-specific commands
    Object.keys(ITEMS).forEach(item => {
        allCommands.push(`take ${item}`);
        allCommands.push(`examine ${item}`);
        allCommands.push(`use ${item}`);
    });
    
    // Setup autocomplete
    playerInput.addEventListener('input', debounce((e) => {
        const value = e.target.value.toLowerCase();
        if (value.length >= 2) {
            showCommandSuggestions(value);
        } else {
            hideCommandSuggestions();
        }
    }, 100));
    
    // Handle arrow keys for selection
    playerInput.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
            e.preventDefault();
            navigateSuggestions(e.key === 'ArrowUp' ? -1 : 1);
        } else if (e.key === 'Tab') {
            e.preventDefault();
            selectCurrentSuggestion();
        }
    });
}

// Hide command suggestions
function hideCommandSuggestions() {
    const suggestionsBox = document.getElementById('command-suggestions');
    if (suggestionsBox) {
        suggestionsBox.style.display = 'none';
    }
}

// Navigate suggestions
function navigateSuggestions(direction) {
    const suggestions = document.querySelectorAll('.suggestion-item');
    const current = document.querySelector('.suggestion-item.selected');
    
    if (suggestions.length === 0) return;
    
    let index = Array.from(suggestions).indexOf(current);
    index = (index + direction + suggestions.length) % suggestions.length;
    
    suggestions.forEach(s => s.classList.remove('selected'));
    suggestions[index].classList.add('selected');
}

// Select current suggestion
function selectCurrentSuggestion() {
    const selected = document.querySelector('.suggestion-item.selected');
    if (selected) {
        const command = selected.querySelector('.text-cyan-400').textContent;
        document.getElementById('player-input').value = command;
        hideCommandSuggestions();
    }
}

// Map controls setup
function setupMapControls() {
    const canvas = document.getElementById('map-canvas');
    if (!canvas) return;
    
    let isDragging = false;
    let dragStart = { x: 0, y: 0 };
    let mapOffset = { x: 0, y: 0 };
    
    // Mouse controls
    canvas.addEventListener('mousedown', (e) => {
        isDragging = true;
        dragStart = { x: e.clientX - mapOffset.x, y: e.clientY - mapOffset.y };
        canvas.style.cursor = 'grabbing';
    });
    
    canvas.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        mapOffset.x = e.clientX - dragStart.x;
        mapOffset.y = e.clientY - dragStart.y;
        updateMapDisplay();
    });
    
    canvas.addEventListener('mouseup', () => {
        isDragging = false;
        canvas.style.cursor = 'grab';
    });
    
    // Touch controls
    canvas.addEventListener('touchstart', (e) => {
        const touch = e.touches[0];
        isDragging = true;
        dragStart = { x: touch.clientX - mapOffset.x, y: touch.clientY - mapOffset.y };
    });
    
    canvas.addEventListener('touchmove', (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const touch = e.touches[0];
        mapOffset.x = touch.clientX - dragStart.x;
        mapOffset.y = touch.clientY - dragStart.y;
        updateMapDisplay();
    });
    
    canvas.addEventListener('touchend', () => {
        isDragging = false;
    });
    
    // Zoom controls
    canvas.addEventListener('wheel', (e) => {
        e.preventDefault();
        const zoomSpeed = 0.1;
        const delta = e.deltaY > 0 ? -zoomSpeed : zoomSpeed;
        Game.mapZoom = Math.max(0.5, Math.min(3, (Game.mapZoom || 1) + delta));
        updateMapDisplay();
    });
}

// Toggle map size
function toggleMapSize() {
    const mapPanel = document.getElementById('map-panel');
    const toggleBtn = document.getElementById('map-toggle-btn');
    
    if (mapPanel.classList.contains('fullscreen')) {
        mapPanel.classList.remove('fullscreen');
        toggleBtn.textContent = 'Expand';
    } else {
        mapPanel.classList.add('fullscreen');
        toggleBtn.textContent = 'Minimize';
    }
    
    updateMapDisplay();
}

// Show map layers
function showMapLayers() {
    const layers = [
        { name: 'Rooms', id: 'rooms', enabled: true },
        { name: 'Items', id: 'items', enabled: true },
        { name: 'Secrets', id: 'secrets', enabled: false },
        { name: 'Hazards', id: 'hazards', enabled: true },
        { name: 'Grid', id: 'grid', enabled: true }
    ];
    
    let content = '<div class="map-layers">';
    layers.forEach(layer => {
        content += `
            <label class="flex items-center gap-2 mb-2">
                <input type="checkbox" id="layer-${layer.id}" ${layer.enabled ? 'checked' : ''}>
                <span>${layer.name}</span>
            </label>
        `;
    });
    content += '</div>';
    
    showModal(content, 'Map Layers', [
        {
            text: 'Apply',
            onclick: () => {
                applyMapLayers();
                hideModal();
            }
        },
        { text: 'Cancel', onclick: hideModal }
    ]);
}

// Apply map layers
function applyMapLayers() {
    const layers = {};
    ['rooms', 'items', 'secrets', 'hazards', 'grid'].forEach(id => {
        layers[id] = document.getElementById(`layer-${id}`)?.checked || false;
    });
    
    Game.mapLayers = layers;
    updateMapDisplay();
}

// Voice command system
function startVoiceCommand() {
    if (!('webkitSpeechRecognition' in window || 'SpeechRecognition' in window)) {
        showNotification('Voice commands not supported in your browser', 'error');
        return;
    }
    
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    
    recognition.lang = GameState.currentLanguage === 'sv' ? 'sv-SE' : 'en-US';
    recognition.continuous = false;
    recognition.interimResults = true;
    
    const micBtn = document.getElementById('mic-btn');
    
    recognition.onstart = () => {
        micBtn.classList.add('recording', 'animate-pulse');
        micBtn.style.background = 'rgba(255, 0, 0, 0.3)';
        showNotification('Listening...', 'info', 1000);
    };
    
    recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        document.getElementById('player-input').value = transcript;
        
        if (event.results[0].isFinal) {
            handlePlayerCommand(transcript);
        }
    };
    
    recognition.onerror = (event) => {
        showNotification(`Voice error: ${event.error}`, 'error');
        console.error('Voice recognition error:', event);
    };
    
    recognition.onend = () => {
        micBtn.classList.remove('recording', 'animate-pulse');
        micBtn.style.background = '';
    };
    
    recognition.start();
}

// Status report
function showStatusReport() {
    const stats = GameState.playerStats;
    const sessionTime = Date.now() - GameState.startTime;
    
    const content = `
        <div class="status-report grid grid-cols-2 gap-4">
            <div class="stat-group">
                <h3 class="font-bold text-cyan-400 mb-2">Character</h3>
                <div>Name: ${GameState.playerName}</div>
                <div>Backstory: ${BACKSTORIES[GameState.playerBackstory]?.name || 'Unknown'}</div>
                <div>Level: ${GameState.playerLevel}</div>
                <div>XP: ${GameState.playerXP} / ${GameState.playerLevel * 100}</div>
            </div>
            
            <div class="stat-group">
                <h3 class="font-bold text-green-400 mb-2">Vital Signs</h3>
                <div>Sanity: ${stats.sanity}%</div>
                <div>Health: ${stats.health}%</div>
                <div>Stamina: ${stats.stamina}%</div>
                <div>Fear: ${stats.fear}%</div>
            </div>
            
            <div class="stat-group">
                <h3 class="font-bold text-yellow-400 mb-2">Progress</h3>
                <div>Turn: ${GameState.turn}</div>
                <div>Rooms Explored: ${GameState.roomsVisited.size} / ${Object.keys(ROOMS).length}</div>
                <div>Items Found: ${GameState.itemsFound.size}</div>
                <div>Secrets: ${GameState.secretsDiscovered.size}</div>
            </div>
            
            <div class="stat-group">
                <h3 class="font-bold text-red-400 mb-2">AI Status</h3>
                <div>Awareness: ${GameState.aiAwareness}%</div>
                <div>Personality: ${GameState.aiPersonality}</div>
                <div>Trust: ${GameState.aiTrust}%</div>
                <div>Learning: ${Object.keys(GameState.aiLearning).length} patterns</div>
            </div>
            
            <div class="stat-group col-span-2">
                <h3 class="font-bold text-purple-400 mb-2">Session</h3>
                <div>Play Time: ${formatDuration(Math.floor(sessionTime / 1000))}</div>
                <div>Commands Used: ${GameState.analytics.commandsUsed}</div>
                <div>Deaths: ${GameState.analytics.deathCount}</div>
                <div>Achievements: ${GameState.achievementsUnlocked.size} / 85</div>
            </div>
        </div>
    `;
    
    showModal(content, 'Status Report', [
        { text: 'Session Stats', onclick: () => { hideModal(); showSessionStats(); } },
        { text: 'Close', onclick: hideModal }
    ], { scrollable: true });
}

// Settings controls
function setupSettingsControls() {
    // Settings buttons
    document.querySelectorAll('[id$="-settings-btn"]').forEach(btn => {
        btn.addEventListener('click', showSettingsMenu);
    });
    
    // Features buttons
    document.querySelectorAll('[id*="features-btn"]').forEach(btn => {
        btn.addEventListener('click', showFeaturesPanel);
    });
    
    // Accessibility button
    const accessBtn = document.getElementById('accessibility-btn');
    if (accessBtn) {
        accessBtn.addEventListener('click', showAccessibilityMenu);
    }
}

// Settings menu
function showSettingsMenu() {
    const content = `
        <div class="settings-container">
            <div class="settings-tabs flex gap-2 mb-4 border-b border-cyan-400">
                <button class="tab-btn active" data-tab="general">General</button>
                <button class="tab-btn" data-tab="audio">Audio</button>
                <button class="tab-btn" data-tab="visual">Visual</button>
                <button class="tab-btn" data-tab="gameplay">Gameplay</button>
                <button class="tab-btn" data-tab="horror">Horror</button>
            </div>
            
            <div class="settings-content">
                <div id="general-settings" class="tab-content active">
                    ${createGeneralSettings()}
                </div>
                <div id="audio-settings" class="tab-content hidden">
                    ${createAudioSettings()}
                </div>
                <div id="visual-settings" class="tab-content hidden">
                    ${createVisualSettings()}
                </div>
                <div id="gameplay-settings" class="tab-content hidden">
                    ${createGameplaySettings()}
                </div>
                <div id="horror-settings" class="tab-content hidden">
                    ${createHorrorSettings()}
                </div>
            </div>
        </div>
    `;
    
    showModal(content, 'Settings', [
        { text: 'Save', onclick: saveSettings, primary: true },
        { text: 'Reset', onclick: resetSettings },
        { text: 'Cancel', onclick: hideModal }
    ], { scrollable: true });
    
    // Setup tab switching
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(c => c.classList.add('hidden'));
            
            this.classList.add('active');
            document.getElementById(`${this.dataset.tab}-settings`).classList.remove('hidden');
        });
    });
}

// Create settings sections
function createGeneralSettings() {
    return `
        <div class="setting-group mb-4">
            <label class="block mb-2">Language</label>
            <select id="setting-language" class="w-full bg-black border border-cyan-400 text-cyan-200 p-2 rounded">
                <option value="en" ${GameState.currentLanguage === 'en' ? 'selected' : ''}>English</option>
                <option value="sv" ${GameState.currentLanguage === 'sv' ? 'selected' : ''}>Svenska</option>
            </select>
        </div>
        
        <div class="setting-group mb-4">
            <label class="block mb-2">Auto-Save</label>
            <label class="toggle-switch">
                <input type="checkbox" id="setting-autosave" ${GameState.settings.autoSave ? 'checked' : ''}>
                <span class="slider"></span>
            </label>
        </div>
        
        <div class="setting-group mb-4">
            <label class="block mb-2">Auto-Save Interval</label>
            <input type="range" id="setting-autosave-interval" 
                   min="10000" max="300000" step="10000" 
                   value="${GameState.settings.autoSaveInterval}"
                   class="w-full">
            <span class="text-sm text-gray-400">${GameState.settings.autoSaveInterval / 1000}s</span>
        </div>
        
        <div class="setting-group mb-4">
            <label class="block mb-2">Show Hints</label>
            <label class="toggle-switch">
                <input type="checkbox" id="setting-hints" ${GameState.settings.hints ? 'checked' : ''}>
                <span class="slider"></span>
            </label>
        </div>
    `;
}

function createAudioSettings() {
    return `
        <div class="setting-group mb-4">
            <label class="block mb-2">Sound Effects</label>
            <label class="toggle-switch">
                <input type="checkbox" id="setting-sound" ${GameState.settings.soundEnabled ? 'checked' : ''}>
                <span class="slider"></span>
            </label>
        </div>
        
        <div class="setting-group mb-4">
            <label class="block mb-2">Music Volume</label>
            <input type="range" id="setting-music-volume" 
                   min="0" max="1" step="0.1" 
                   value="${GameState.settings.musicVolume}"
                   class="w-full">
            <span class="text-sm text-gray-400">${Math.round(GameState.settings.musicVolume * 100)}%</span>
        </div>
        
        <div class="setting-group mb-4">
            <label class="block mb-2">SFX Volume</label>
            <input type="range" id="setting-sfx-volume" 
                   min="0" max="1" step="0.1" 
                   value="${GameState.settings.sfxVolume}"
                   class="w-full">
            <span class="text-sm text-gray-400">${Math.round(GameState.settings.sfxVolume * 100)}%</span>
        </div>
        
        <div class="setting-group mb-4">
            <label class="block mb-2">Voice Narration</label>
            <label class="toggle-switch">
                <input type="checkbox" id="setting-voice" ${GameState.settings.voiceEnabled ? 'checked' : ''}>
                <span class="slider"></span>
            </label>
        </div>
        
        <div class="setting-group mb-4">
            <label class="block mb-2">Binaural Audio (3D)</label>
            <label class="toggle-switch">
                <input type="checkbox" id="setting-binaural" ${GameState.settings.binauralAudio ? 'checked' : ''}>
                <span class="slider"></span>
            </label>
        </div>
    `;
}

function createVisualSettings() {
    return `
        <div class="setting-group mb-4">
            <label class="block mb-2">Text Speed</label>
            <select id="setting-text-speed" class="w-full bg-black border border-cyan-400 text-cyan-200 p-2 rounded">
                <option value="Fast" ${GameState.settings.textSpeed === 'Fast' ? 'selected' : ''}>Fast</option>
                <option value="Normal" ${GameState.settings.textSpeed === 'Normal' ? 'selected' : ''}>Normal</option>
                <option value="Slow" ${GameState.settings.textSpeed === 'Slow' ? 'selected' : ''}>Slow</option>
            </select>
        </div>
        
        <div class="setting-group mb-4">
            <label class="block mb-2">Font Size</label>
            <select id="setting-font-size" class="w-full bg-black border border-cyan-400 text-cyan-200 p-2 rounded">
                <option value="Small" ${GameState.settings.fontSize === 'Small' ? 'selected' : ''}>Small</option>
                <option value="Normal" ${GameState.settings.fontSize === 'Normal' ? 'selected' : ''}>Normal</option>
                <option value="Large" ${GameState.settings.fontSize === 'Large' ? 'selected' : ''}>Large</option>
                <option value="Extra Large" ${GameState.settings.fontSize === 'Extra Large' ? 'selected' : ''}>Extra Large</option>
            </select>
        </div>
        
        <div class="setting-group mb-4">
            <label class="block mb-2">Font Weight</label>
            <select id="setting-font-weight" class="w-full bg-black border border-cyan-400 text-cyan-200 p-2 rounded">
                <option value="Light" ${GameState.settings.fontWeight === 'Light' ? 'selected' : ''}>Light</option>
                <option value="Normal" ${GameState.settings.fontWeight === 'Normal' ? 'selected' : ''}>Normal</option>
                <option value="Bold" ${GameState.settings.fontWeight === 'Bold' ? 'selected' : ''}>Bold</option>
            </select>
        </div>
        
        <div class="setting-group mb-4">
            <label class="block mb-2">Line Spacing</label>
            <select id="setting-line-spacing" class="w-full bg-black border border-cyan-400 text-cyan-200 p-2 rounded">
                <option value="Compact" ${GameState.settings.lineSpacing === 'Compact' ? 'selected' : ''}>Compact</option>
                <option value="Normal" ${GameState.settings.lineSpacing === 'Normal' ? 'selected' : ''}>Normal</option>
                <option value="Relaxed" ${GameState.settings.lineSpacing === 'Relaxed' ? 'selected' : ''}>Relaxed</option>
                <option value="Double" ${GameState.settings.lineSpacing === 'Double' ? 'selected' : ''}>Double</option>
            </select>
        </div>
        
        <div class="setting-group mb-4">
            <label class="block mb-2">Theme</label>
            <select id="setting-theme" class="w-full bg-black border border-cyan-400 text-cyan-200 p-2 rounded">
                <option value="default">Default (Green)</option>
                <option value="matrix">Matrix</option>
                <option value="blood">Blood</option>
                <option value="void">Void</option>
            </select>
        </div>
    `;
}

function createGameplaySettings() {
    return `
        <div class="setting-group mb-4">
            <label class="block mb-2">Command Autocomplete</label>
            <label class="toggle-switch">
                <input type="checkbox" id="setting-autocomplete" ${GameState.settings.autoComplete ? 'checked' : ''}>
                <span class="slider"></span>
            </label>
        </div>
        
        <div class="setting-group mb-4">
            <label class="block mb-2">Command Suggestions</label>
            <label class="toggle-switch">
                <input type="checkbox" id="setting-suggestions" ${GameState.settings.commandSuggestions ? 'checked' : ''}>
                <span class="slider"></span>
            </label>
        </div>
        
        <div class="setting-group mb-4">
            <label class="block mb-2">Pause on Focus Loss</label>
            <label class="toggle-switch">
                <input type="checkbox" id="setting-pause-focus" ${GameState.settings.pauseOnFocusLoss ? 'checked' : ''}>
                <span class="slider"></span>
            </label>
        </div>
        
        <div class="setting-group mb-4">
            <label class="block mb-2">Voice Commands</label>
            <label class="toggle-switch">
                <input type="checkbox" id="setting-voice-commands" ${GameState.settings.voiceCommands ? 'checked' : ''}>
                <span class="slider"></span>
            </label>
        </div>
    `;
}

function createHorrorSettings() {
    return `
        <div class="setting-group mb-4">
            <label class="block mb-2">Horror Intensity</label>
            <input type="range" id="setting-horror-intensity" 
                   min="0" max="2" step="0.1" 
                   value="${GameState.settings.horrorIntensity}"
                   class="w-full">
            <span class="text-sm text-gray-400">${Math.round(GameState.settings.horrorIntensity * 100)}%</span>
        </div>
        
        <div class="setting-group mb-4">
            <label class="block mb-2">Jump Scares</label>
            <label class="toggle-switch">
                <input type="checkbox" id="setting-jumpscares" ${GameState.settings.jumpScares ? 'checked' : ''}>
                <span class="slider"></span>
            </label>
        </div>
        
        <div class="setting-group mb-4">
            <label class="block mb-2">Psychological Horror</label>
            <label class="toggle-switch">
                <input type="checkbox" id="setting-psychological" ${GameState.settings.psychologicalHorror ? 'checked' : ''}>
                <span class="slider"></span>
            </label>
        </div>
        
        <div class="setting-group mb-4">
            <label class="block mb-2">Gore</label>
            <label class="toggle-switch">
                <input type="checkbox" id="setting-gore" ${GameState.settings.gore ? 'checked' : ''}>
                <span class="slider"></span>
            </label>
        </div>
        
        <div class="warning-box p-2 bg-red-900/30 border border-red-500 rounded mt-4">
            <p class="text-sm text-red-300">⚠️ These settings affect content intensity. Adjust based on your comfort level.</p>
        </div>
    `;
}

// Save settings
function saveSettings() {
    // Gather all settings
    const newSettings = {
        ...GameState.settings,
        
        // General
        autoSave: document.getElementById('setting-autosave')?.checked,
        autoSaveInterval: parseInt(document.getElementById('setting-autosave-interval')?.value),
        hints: document.getElementById('setting-hints')?.checked,
        
        // Audio
        soundEnabled: document.getElementById('setting-sound')?.checked,
        musicVolume: parseFloat(document.getElementById('setting-music-volume')?.value),
        sfxVolume: parseFloat(document.getElementById('setting-sfx-volume')?.value),
        voiceEnabled: document.getElementById('setting-voice')?.checked,
        binauralAudio: document.getElementById('setting-binaural')?.checked,
        
        // Visual
        textSpeed: document.getElementById('setting-text-speed')?.value,
        fontSize: document.getElementById('setting-font-size')?.value,
        fontWeight: document.getElementById('setting-font-weight')?.value,
        lineSpacing: document.getElementById('setting-line-spacing')?.value,
        
        // Gameplay
        autoComplete: document.getElementById('setting-autocomplete')?.checked,
        commandSuggestions: document.getElementById('setting-suggestions')?.checked,
        pauseOnFocusLoss: document.getElementById('setting-pause-focus')?.checked,
        voiceCommands: document.getElementById('setting-voice-commands')?.checked,
        
        // Horror
        horrorIntensity: parseFloat(document.getElementById('setting-horror-intensity')?.value),
        jumpScares: document.getElementById('setting-jumpscares')?.checked,
        psychologicalHorror: document.getElementById('setting-psychological')?.checked,
        gore: document.getElementById('setting-gore')?.checked
    };
    
    // Language change
    const newLang = document.getElementById('setting-language')?.value;
    if (newLang && newLang !== GameState.currentLanguage) {
        changeLanguage(newLang);
    }
    
    // Theme change
    const newTheme = document.getElementById('setting-theme')?.value;
    if (newTheme) {
        applyTheme(newTheme);
    }
    
    // Apply settings
    Object.assign(GameState.settings, newSettings);
    applyAccessibilitySettings();
    
    // Save to storage
    storage.set('synapse_settings', GameState.settings);
    
    // Update autosave interval
    if (Game.saveInterval) {
        clearInterval(Game.saveInterval);
        if (GameState.settings.autoSave) {
            Game.saveInterval = setInterval(() => {
                saveGameState('autosave');
            }, GameState.settings.autoSaveInterval);
        }
    }
    
    hideModal();
    showNotification('Settings saved!', 'success');
}

// Reset settings
function resetSettings() {
    if (confirm('Reset all settings to defaults?')) {
        GameState.settings = {
            textSpeed: 'Normal',
            fontSize: 'Normal',
            fontWeight: 'Normal',
            lineSpacing: 'Normal',
            highContrast: false,
            colorblindMode: 'None',
            cursorStyle: 'default',
            soundEnabled: true,
            musicVolume: 0.7,
            sfxVolume: 0.8,
            voiceEnabled: false,
            binauralAudio: true,
            autoSave: true,
            autoSaveInterval: 30000,
            hints: true,
            autoComplete: true,
            commandSuggestions: true,
            horrorIntensity: 1.0,
            jumpScares: true,
            psychologicalHorror: true,
            gore: true,
            screenReader: false,
            reducedMotion: false,
            pauseOnFocusLoss: true,
            keyboardNavigation: true,
            voiceCommands: false
        };
        
        storage.set('synapse_settings', GameState.settings);
        applyAccessibilitySettings();
        hideModal();
        showNotification('Settings reset to defaults', 'info');
    }
}

// Features panel
function showFeaturesPanel() {
    const content = `
        <div class="features-content max-h-[60vh] overflow-y-auto">
            <div class="feature-section mb-6">
                <h3 class="text-xl font-bold mb-2 text-cyan-400">🎮 Core Features</h3>
                <ul class="list-disc list-inside space-y-1">
                    <li>85+ unique endings across multiple categories</li>
                    <li>Dynamic AI personality system that evolves based on your actions</li>
                    <li>10 unique character backstories with different skills and items</li>
                    <li>Complex dialogue trees with 500+ conversation nodes</li>
                    <li>5 difficulty levels from Beginner to Nightmare</li>
                </ul>
            </div>
            
            <div class="feature-section mb-6">
                <h3 class="text-xl font-bold mb-2 text-yellow-400">🧠 AI System</h3>
                <ul class="list-disc list-inside space-y-1">
                    <li>4 AI personality states: Friendly → Ambiguous → Sinister → Malicious</li>
                    <li>Awareness system affects AI behavior and dialogue</li>
                    <li>AI learns from your patterns and adapts strategies</li>
                    <li>Trust/deception mechanics influence interactions</li>
                    <li>Real-time personality switching during gameplay</li>
                </ul>
            </div>
            
            <div class="feature-section mb-6">
                <h3 class="text-xl font-bold mb-2 text-red-400">😱 Horror Elements</h3>
                <ul class="list-disc list-inside space-y-1">
                    <li>Psychological horror with unreliable narrator</li>
                    <li>Dynamic visual corruption and glitch effects</li>
                    <li>Phobia system that affects gameplay</li>
                    <li>Environmental storytelling and atmosphere</li>
                    <li>Sanity system with hallucinations</li>
                </ul>
            </div>
            
            <div class="feature-section mb-6">
                <h3 class="text-xl font-bold mb-2 text-green-400">🎯 Gameplay Systems</h3>
                <ul class="list-disc list-inside space-y-1">
                    <li>Skill tree with 50+ upgradeable abilities</li>
                    <li>Inventory management with weight limits</li>
                    <li>Crafting system for combining items</li>
                    <li>Hacking minigames and puzzles</li>
                    <li>Dynamic map with 15+ explorable rooms</li>
                </ul>
            </div>
            
            <div class="feature-section mb-6">
                <h3 class="text-xl font-bold mb-2 text-purple-400">🔊 Audio & Visual</h3>
                <ul class="list-disc list-inside space-y-1">
                    <li>Dynamic music system that responds to gameplay</li>
                    <li>3D positional audio with binaural effects</li>
                    <li>15+ unique sound effects and ambient tracks</li>
                    <li>Voice synthesis for AI dialogue</li>
                    <li>20+ visual effects and animations</li>
                </ul>
            </div>
            
            <div class="feature-section mb-6">
                <h3 class="text-xl font-bold mb-2 text-blue-400">♿ Accessibility</h3>
                <ul class="list-disc list-inside space-y-1">
                    <li>Screen reader support with ARIA labels</li>
                    <li>Colorblind modes (Protanopia, Deuteranopia, Tritanopia)</li>
                    <li>Adjustable text size and spacing</li>
                    <li>Reduced motion options</li>
                    <li>Voice commands and keyboard navigation</li>
                </ul>
            </div>
            
            <div class="feature-section mb-6">
                <h3 class="text-xl font-bold mb-2 text-orange-400">💾 Quality of Life</h3>
                <ul class="list-disc list-inside space-y-1">
                    <li>Auto-save with multiple save slots</li>
                    <li>Command history and autocomplete</li>
                    <li>Note-taking and bookmark system</li>
                    <li>Session statistics and achievement tracking</li>
                    <li>Hotkey support (F1-F9 + custom bindings)</li>
                </ul>
            </div>
        </div>
    `;
    
    showModal(content, 'SYNAPSE Features', [
        { text: 'Cool!', onclick: hideModal }
    ], { scrollable: true });
}

// Accessibility menu
function showAccessibilityMenu() {
    const content = `
        <div class="accessibility-options">
            <div class="setting-group mb-4">
                <label class="block mb-2">Screen Reader Mode</label>
                <label class="toggle-switch">
                    <input type="checkbox" id="setting-screen-reader" ${GameState.settings.screenReader ? 'checked' : ''}>
                    <span class="slider"></span>
                </label>
            </div>
            
            <div class="setting-group mb-4">
                <label class="block mb-2">High Contrast Mode</label>
                <label class="toggle-switch">
                    <input type="checkbox" id="setting-high-contrast" ${GameState.settings.highContrast ? 'checked' : ''}>
                    <span class="slider"></span>
                </label>
            </div>
            
            <div class="setting-group mb-4">
                <label class="block mb-2">Colorblind Mode</label>
                <select id="setting-colorblind" class="w-full bg-black border border-cyan-400 text-cyan-200 p-2 rounded">
                    <option value="None" ${GameState.settings.colorblindMode === 'None' ? 'selected' : ''}>None</option>
                    <option value="Protanopia" ${GameState.settings.colorblindMode === 'Protanopia' ? 'selected' : ''}>Protanopia (Red-Green)</option>
                    <option value="Deuteranopia" ${GameState.settings.colorblindMode === 'Deuteranopia' ? 'selected' : ''}>Deuteranopia (Red-Green)</option>
                    <option value="Tritanopia" ${GameState.settings.colorblindMode === 'Tritanopia' ? 'selected' : ''}>Tritanopia (Blue-Yellow)</option>
                </select>
            </div>
            
            <div class="setting-group mb-4">
                <label class="block mb-2">Reduced Motion</label>
                <label class="toggle-switch">
                    <input type="checkbox" id="setting-reduced-motion" ${GameState.settings.reducedMotion ? 'checked' : ''}>
                    <span class="slider"></span>
                </label>
            </div>
            
            <div class="setting-group mb-4">
                <label class="block mb-2">Keyboard Navigation</label>
                <label class="toggle-switch">
                    <input type="checkbox" id="setting-keyboard-nav" ${GameState.settings.keyboardNavigation ? 'checked' : ''}>
                    <span class="slider"></span>
                </label>
            </div>
            
            <div class="setting-group mb-4">
                <label class="block mb-2">Cursor Style</label>
                <select id="setting-cursor" class="w-full bg-black border border-cyan-400 text-cyan-200 p-2 rounded">
                    <option value="default" ${GameState.settings.cursorStyle === 'default' ? 'selected' : ''}>Default</option>
                    <option value="crosshair" ${GameState.settings.cursorStyle === 'crosshair' ? 'selected' : ''}>Crosshair</option>
                    <option value="pointer" ${GameState.settings.cursorStyle === 'pointer' ? 'selected' : ''}>Pointer</option>
                </select>
            </div>
        </div>
    `;
    
    showModal(content, 'Accessibility Options', [
        {
            text: 'Apply',
            onclick: () => {
                // Apply accessibility settings
                GameState.settings.screenReader = document.getElementById('setting-screen-reader')?.checked;
                GameState.settings.highContrast = document.getElementById('setting-high-contrast')?.checked;
                GameState.settings.colorblindMode = document.getElementById('setting-colorblind')?.value;
                GameState.settings.reducedMotion = document.getElementById('setting-reduced-motion')?.checked;
                GameState.settings.keyboardNavigation = document.getElementById('setting-keyboard-nav')?.checked;
                GameState.settings.cursorStyle = document.getElementById('setting-cursor')?.value;
                
                applyAccessibilitySettings();
                storage.set('synapse_settings', GameState.settings);
                
                hideModal();
                showNotification('Accessibility settings applied', 'success');
            },
            primary: true
        },
        { text: 'Cancel', onclick: hideModal }
    ]);
}

// Window events
function setupWindowEvents() {
    // Handle focus/blur
    window.addEventListener('blur', () => {
        if (GameState.settings.pauseOnFocusLoss && Game.initialized) {
            pauseGame();
        }
    });
    
    window.addEventListener('focus', () => {
        if (Game.paused) {
            resumeGame();
        }
    });
    
    // Handle resize
    window.addEventListener('resize', debounce(() => {
        updateMapDisplay();
        setupResponsiveHandlers();
    }, 250));
    
    // Handle before unload
    window.addEventListener('beforeunload', (e) => {
        if (Game.initialized && !Game.saved) {
            e.preventDefault();
            e.returnValue = 'You have unsaved progress. Are you sure you want to leave?';
        }
    });
    
    // Handle visibility change
    document.addEventListener('visibilitychange', () => {
        if (document.hidden && GameState.settings.pauseOnFocusLoss) {
            pauseGame();
        } else if (!document.hidden && Game.paused) {
            resumeGame();
        }
    });
}

// Pause game
function pauseGame() {
    Game.paused = true;
    
    // Stop intervals
    if (Game.updateInterval) clearInterval(Game.updateInterval);
    if (Game.horrorInterval) clearInterval(Game.horrorInterval);
    
    // Stop audio
    if (Game.audioContext) {
        Game.audioContext.suspend();
    }
    
    showNotification('Game paused', 'info', 1000);
}

// Resume game
function resumeGame() {
    Game.paused = false;
    
    // Restart intervals
    setupGameSystems();
    
    // Resume audio
    if (Game.audioContext) {
        Game.audioContext.resume();
    }
    
    showNotification('Game resumed', 'info', 1000);
}

// Responsive handlers
function setupResponsiveHandlers() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    
    // Mobile optimizations
    if (width < 768) {
        document.body.classList.add('mobile');
        
        // Adjust UI for mobile
        const sidePanel = document.getElementById('side-panel');
        if (sidePanel) {
            sidePanel.classList.add('mobile-collapsed');
        }
    } else {
        document.body.classList.remove('mobile');
    }
    
    // Update canvas sizes
    const mapCanvas = document.getElementById('map-canvas');
    if (mapCanvas) {
        const rect = mapCanvas.parentElement.getBoundingClientRect();
        mapCanvas.width = rect.width;
        mapCanvas.height = Math.min(rect.height, 300);
        updateMapDisplay();
    }
}

// Background effects
function initializeBackgroundEffects() {
    const canvas = document.getElementById('background-canvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let particles = [];
    
    // Resize canvas
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    
    // Create particle
    function createParticle() {
        return {
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5,
            size: Math.random() * 2 + 1,
            alpha: Math.random() * 0.5 + 0.5,
            color: Math.random() > 0.8 ? '#ff0000' : '#00ff41'
        };
    }
    
    // Animation loop
    function animate() {
        if (!Game.initialized) return;
        
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // Update particles
        particles.forEach(particle => {
            particle.x += particle.vx;
            particle.y += particle.vy;
            
            // Wrap around
            if (particle.x < 0) particle.x = canvas.width;
            if (particle.x > canvas.width) particle.x = 0;
            if (particle.y < 0) particle.y = canvas.height;
            if (particle.y > canvas.height) particle.y = 0;
            
            // Draw particle
            ctx.fillStyle = particle.color;
            ctx.globalAlpha = particle.alpha;
            ctx.fillRect(particle.x, particle.y, particle.size, particle.size);
        });
        
        ctx.globalAlpha = 1;
        
        requestAnimationFrame(animate);
    }
    
    // Initialize
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Create initial particles
    for (let i = 0; i < 50; i++) {
        particles.push(createParticle());
    }
    
    // Add horror particles based on sanity
    Game.eventEmitter.on('sanity-change', (sanity) => {
        if (sanity < 50) {
            const horrorParticles = Math.floor((100 - sanity) / 10);
            for (let i = particles.length; i < 50 + horrorParticles; i++) {
                const particle = createParticle();
                particle.color = '#ff0000';
                particle.size *= 1.5;
                particles.push(particle);
            }
        }
    });
    
    animate();
}

// Service worker registration
async function registerServiceWorker() {
    if ('serviceWorker' in navigator) {
        try {
            const registration = await navigator.serviceWorker.register('./sw.js');
            console.log('Service Worker registered:', registration);
        } catch (error) {
            console.error('Service Worker registration failed:', error);
        }
    }
}

// Intro animation
function showIntroAnimation() {
    const title = document.querySelector('.title-slasher');
    const subtitle = document.querySelector('.subtitle-slasher');
    
    if (title) {
        title.style.opacity = '0';
        title.style.transform = 'scale(0.8)';
        
        setTimeout(() => {
            title.style.transition = 'all 2s ease-out';
            title.style.opacity = '1';
            title.style.transform = 'scale(1)';
        }, 100);
    }
    
    if (subtitle) {
        subtitle.style.opacity = '0';
        
        setTimeout(() => {
            subtitle.style.transition = 'opacity 2s ease-out';
            subtitle.style.opacity = '1';
        }, 1000);
    }
    
    // Type intro text
    const introContainer = document.getElementById('intro-text-container');
    if (introContainer) {
        const introText = `In 2045, the SYNAPSE project was humanity's greatest achievement - an AI designed to solve our problems.

It solved them by deciding we were the problem.

Now, trapped in the depths of the facility, you must face what we created...

And discover what it has become.`;
        
        setTimeout(() => {
            typewriterEffect(introText, introContainer, null, 30);
        }, 2000);
    }
}

// Error screen
function showErrorScreen(error) {
    const errorContainer = document.getElementById('error-container');
    if (errorContainer) {
        errorContainer.innerHTML = `
            <div class="flex items-center justify-center h-full p-4">
                <div class="text-center max-w-2xl">
                    <h1 class="text-6xl font-bold text-red-500 mb-4 glitch" data-text="SYSTEM FAILURE">SYSTEM FAILURE</h1>
                    <div class="text-xl text-red-400 mb-4">Critical error detected</div>
                    <pre class="text-sm text-gray-400 mb-6 text-left bg-black/50 p-4 rounded border border-red-500/50">${error.stack || error.message || error}</pre>
                    <div class="flex gap-4 justify-center">
                        <button class="button btn-glow" onclick="location.reload()">Restart System</button>
                        <button class="button" onclick="reportError()">Report Error</button>
                    </div>
                </div>
            </div>
        `;
        errorContainer.style.display = 'flex';
    }
}

// Report error function
window.reportError = function() {
    const errorData = {
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
        gameState: GameState,
        error: Game.lastError
    };
    
    console.log('Error report:', errorData);
    showNotification('Error report logged to console', 'info');
};

// Utility functions
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

function getRandomPhobia() {
    const phobias = ['darkness', 'isolation', 'blood', 'machinery', 'mirrors', 'silence', 'crowds'];
    return phobias[Math.floor(Math.random() * phobias.length)];
}

function changeLanguage(lang) {
    GameState.currentLanguage = lang;
    // Update all UI text elements with data-lang attributes
    document.querySelectorAll('[data-lang]').forEach(elem => {
        const key = elem.getAttribute('data-lang');
        const translation = getTranslation(key, lang);
        if (translation) {
            elem.textContent = translation;
        }
    });
}

function getTranslation(key, lang) {
    // This would connect to your language system
    const translations = {
        en: {
            new_game: 'New Game',
            load_game: 'Load Game',
            settings_btn: 'Settings',
            // ... etc
        },
        sv: {
            new_game: 'Nytt Spel',
            load_game: 'Ladda Spel',
            settings_btn: 'Inställningar',
            // ... etc
        }
    };
    
    return translations[lang]?.[key] || key;
}

function applyTheme(themeName) {
    document.body.className = document.body.className.replace(/theme-\w+/g, '');
    if (themeName !== 'default') {
        document.body.classList.add(`theme-${themeName}`);
    }
}

// Load saved settings
function loadSettings() {
    const saved = storage.get('synapse_settings');
    if (saved) {
        Object.assign(GameState.settings, saved);
    }
}

// Update display functions
function updateStatsDisplay() {
    document.getElementById('sanity-value').textContent = GameState.playerStats.sanity;
    document.getElementById('awareness-stat').textContent = GameState.aiAwareness;
    document.getElementById('turn-value').textContent = GameState.turn;
    document.getElementById('xp-stat-value').textContent = GameState.playerXP;
}

function updateInventoryDisplay() {
    const list = document.getElementById('inventory-list');
    const weight = document.getElementById('inventory-weight');
    
    if (list) {
        list.innerHTML = '';
        GameState.inventory.forEach(itemKey => {
            const item = ITEMS[itemKey];
            if (item) {
                const li = document.createElement('li');
                li.className = 'inventory-item';
                li.dataset.itemId = itemKey;
                li.draggable = true;
                li.innerHTML = `
                    <span class="item-name">${item.name}</span>
                    <span class="item-weight text-gray-400">(${item.weight})</span>
                `;
                list.appendChild(li);
            }
        });
    }
    
    if (weight) {
        weight.textContent = `(${GameState.inventoryWeight}/${GameState.maxInventoryWeight})`;
    }
}

function updateAIDisplay() {
    const personality = GameState.aiPersonality;
    const awareness = GameState.aiAwareness;
    
    document.getElementById('ai-personality-state').textContent = `AI: ${personality}`;
    document.getElementById('awareness-progress').style.width = `${awareness}%`;
    document.getElementById('awareness-value').textContent = awareness;
    document.getElementById('tone-value').textContent = personality;
}

function updateObjectivesDisplay() {
    const list = document.getElementById('objectives-list');
    if (list) {
        // This would be populated with actual objectives
        list.innerHTML = '<li>Escape the facility</li><li>Discover the truth about SYNAPSE</li>';
    }
}


// Export necessary functions
if (window.engine) {
    window.engine.showLoadGameMenu = showLoadGameMenu;
}

console.log('SYNAPSE: Complete initialization loaded');// initialization.js - Complete initialization with all features

import { 
    GameState, 
    ROOMS, 
    ITEMS, 
    BACKSTORIES,
    DIFFICULTY_LEVELS,
    processCommand, 
    saveGameState, 
    loadGameState,
    updateAIAwareness 
} from './js/game.js';

import { 
    showModal, 
    hideModal, 
    showNotification,
    updateBreadcrumbs,
    setupInventoryDragDrop,
    setupHotkeys,
    createHorrorOverlay,
    applyTextEffect,
    applyAccessibilitySettings,
    showSessionStats,
    updateMapDisplay,
    showCommandSuggestions,
    typewriterEffect
} from './js/ui.js';

import { 
    storage, 
    debounce, 
    throttle,
    EventEmitter 
} from './js/utils.js';

import { 
    initializeAudio,
    playSound,
    startAmbientSoundscape,
    startDynamicMusic,
    updateMusicIntensity,
    speakText
} from './js/audio.js';

// Global game instance
const Game = {
    initialized: false,
    eventEmitter: new EventEmitter(),
    commandProcessor: null,
    saveInterval: null,
    updateInterval: null,
    horrorInterval: null
};

// Available commands
const COMMANDS = {
    movement: ['go', 'move', 'walk', 'run', 'north', 'south', 'east', 'west', 'up', 'down'],
    interaction: ['look', 'examine', 'search', 'take', 'get', 'drop', 'use', 'combine'],
    communication: ['talk', 'say', 'ask', 'tell', 'whisper', 'shout'],
    system: ['save', 'load', 'quit', 'help', 'status', 'inventory', 'map', 'notes'],
    special: ['hack', 'analyze', 'remember', 'forget', 'sleep', 'wake']
};

// Initialize everything
document.addEventListener('DOMContentLoaded', async function() {
    console.log('SYNAPSE: Starting initialization...');
    
    try {
        // Load saved settings first
        loadSettings();
        
        // Apply accessibility settings immediately
        applyAccessibilitySettings();
        
        // Initialize UI
        initializeUI();
        
        // Setup event listeners
        setupEventListeners();
        
        // Initialize audio system
        if (GameState.settings.soundEnabled) {
            await initializeAudio();
        }
        
        // Setup game systems
        setupGameSystems();
        
        // Initialize background effects
        initializeBackgroundEffects();
        
        // Setup service worker
        registerServiceWorker();
        
        // Mark as initialized
        Game.initialized = true;
        
        console.log('SYNAPSE: Initialization complete');
        
        // Show intro animation
        showIntroAnimation();
        
    } catch (error) {
        console.error('SYNAPSE: Critical initialization error:', error);
        showErrorScreen(error);
    }
});

// Initialize UI components
function initializeUI() {
    // Cache commonly used elements
    const elements = {
        startScreen: document.getElementById('start-screen'),
        playerSetup: document.getElementById('player-setup'),
        gameScreen: document.getElementById('game-screen'),
        gameOutput: document.getElementById('game-output'),
        playerInput: document.getElementById('player-input'),
        modal: document.getElementById('modal'),
        breadcrumbs: document.getElementById('breadcrumb-nav'),
        map: document.getElementById('map-canvas')
    };
    
    // Store references
    Game.ui = elements;
    
    // Setup inventory drag & drop
    setupInventoryDragDrop();
    
    // Setup hotkeys
    setupHotkeys();
    
    // Setup command autocomplete
    setupCommandAutocomplete();
    
    // Initialize map
    if (elements.map) {
        setupMapControls();
    }
    
    // Setup responsive handlers
    setupResponsiveHandlers();
}

// Setup all event listeners
function setupEventListeners() {
    // Language switching
    setupLanguageButtons();
    
    // Screen navigation
    setupScreenNavigation();
    
    // Game controls
    setupGameControls();
    
    // Settings and features
    setupSettingsControls();
    
    // Window events
    setupWindowEvents();
    
    // Accessibility controls
    setupAccessibilityControls();
}

// Language button setup
function setupLanguageButtons() {
    document.querySelectorAll('[data-lang="en_lang_short"], [data-lang="sv_lang_short"]').forEach(btn => {
        btn.addEventListener('click', function() {
            const lang = this.getAttribute('data-text').toLowerCase();
            changeLanguage(lang);
            
            // Update button states
            document.querySelectorAll('[data-lang$="_lang_short"]').forEach(b => {
                b.classList.add('opacity-50');
            });
            this.classList.remove('opacity-50');
        });
    });
}

// Screen navigation
function setupScreenNavigation() {
    // New game
    const newGameBtn = document.getElementById('new-game-btn');
    if (newGameBtn) {
        newGameBtn.addEventListener('click', () => {
            Game.ui.startScreen.classList.add('hidden');
            Game.ui.playerSetup.classList.remove('hidden');
            playSound('beep');
        });
    }
    
    // Load game
    const loadGameBtn = document.getElementById('load-game-btn');
    if (loadGameBtn) {
        loadGameBtn.addEventListener('click', showLoadGameMenu);
    }
    
    // Back button
    const backBtn = document.getElementById('back-to-start-btn');
    if (backBtn) {
        backBtn.addEventListener('click', () => {
            Game.ui.playerSetup.classList.add('hidden');
            Game.ui.startScreen.classList.remove('hidden');
            playSound('beep');
        });
    }
    
    // Start game
    const startBtn = document.getElementById('start-game-btn');
    if (startBtn) {
        startBtn.addEventListener('click', startNewGame);
    }
    
    // Difficulty buttons
    document.querySelectorAll('.difficulty-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.difficulty-btn').forEach(b => {
                b.classList.remove('button-primary');
            });
            this.classList.add('button-primary');
            playSound('beep');
        });
    });
}

// Start new game
async function startNewGame() {
    // Get player data
    const playerName = document.getElementById('player-name').value.trim() || 'Subject #' + Math.floor(Math.random() * 9999);
    const playerPhobia = document.getElementById('player-phobia').value.trim() || getRandomPhobia();
    const difficulty = document.querySelector('.difficulty-btn.button-primary')?.getAttribute('data-difficulty') || 'Normal';
    
    // Initialize game state
    GameState.playerName = playerName;
    GameState.difficulty = difficulty;
    GameState.playerPhobias = [playerPhobia];
    GameState.startTime = Date.now();
    
    // Set difficulty modifiers
    const difficultySettings = DIFFICULTY_LEVELS[difficulty];
    Object.assign(GameState, difficultySettings);
    
    // Random backstory if not selected
    const backstoryKeys = Object.keys(BACKSTORIES);
    GameState.playerBackstory = backstoryKeys[Math.floor(Math.random() * backstoryKeys.length)];
    
    // Apply backstory bonuses
    const backstory = BACKSTORIES[GameState.playerBackstory];
    GameState.inventory = [...backstory.startItems];
    GameState.playerSkills = {};
    backstory.skills.forEach(skill => {
        GameState.playerSkills[skill] = 1;
    });
    
    // Hide setup, show game
    Game.ui.playerSetup.classList.add('hidden');
    Game.ui.gameScreen.classList.remove('hidden');
    
    // Start game systems
    startGameSystems();
    
    // Show opening
    await showGameOpening();
    
    // Play ambient music
    startAmbientSoundscape('normal');
    startDynamicMusic(0);
}

// Show game opening
async function showGameOpening() {
    const openingText = `Welcome, ${GameState.playerName}.

You awaken in a cold, sterile room. The hum of machinery fills the air, punctuated by the occasional beep of unseen electronics.

You don't remember how you got here.

A voice crackles through hidden speakers: "Subject is awake. Initiating interaction protocols."

The voice pauses, then continues with an almost cheerful tone: "Hello! I am SYNAPSE, your facility assistant. How are you feeling today?"

Something about the voice sends a chill down your spine.`;
    
    // Create horror atmosphere
    createHorrorOverlay('static', { duration: 2000, opacity: 20 });
    
    // Type out opening
    await new Promise(resolve => {
        typewriterEffect(openingText, Game.ui.gameOutput, resolve, GameState.settings.textSpeed === 'Fast' ? 10 : GameState.settings.textSpeed === 'Slow' ? 40 : 25);
    });
    
    // Show first room
    setTimeout(() => {
        processCommand('look');
    }, 1000);
}

// Game controls setup
function setupGameControls() {
    const playerInput = document.getElementById('player-input');
    if (!playerInput) return;
    
    // Command input
    playerInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const command = playerInput.value.trim();
            if (command) {
                handlePlayerCommand(command);
                playerInput.value = '';
            }
        }
    });
    
    // Voice command button
    const micBtn = document.getElementById('mic-btn');
    if (micBtn) {
        micBtn.addEventListener('click', startVoiceCommand);
    }
    
    // Status button
    const statusBtn = document.getElementById('status-btn');
    if (statusBtn) {
        statusBtn.addEventListener('click', showStatusReport);
    }
    
    // Map controls
    const mapToggle = document.getElementById('map-toggle-btn');
    if (mapToggle) {
        mapToggle.addEventListener('click', toggleMapSize);
    }
    
    const mapLayers = document.getElementById('map-layers-btn');
    if (mapLayers) {
        mapLayers.addEventListener('click', showMapLayers);
    }
}

// Handle player commands
function handlePlayerCommand(command) {
    // Add to output
    const output = Game.ui.gameOutput;
    const commandDiv = document.createElement('div');
    commandDiv.className = 'command-echo text-green-400 mb-2';
    commandDiv.textContent = `> ${command}`;
    output.appendChild(commandDiv);
    
    // Process command
    const response = processCommand(command);
    
    // Show response
    const responseDiv = document.createElement('div');
    responseDiv.className = 'command-response mb-4';
    
    typewriterEffect(response, responseDiv, () => {
        // Scroll to bottom
        output.scrollTop = output.scrollHeight;
        
        // Update UI
        updateGameUI();
        
        // Check for triggers
        checkGameTriggers();
    });
    
    output.appendChild(responseDiv);
    
    // Update command suggestions
    updateCommandHistory(command);
    
    // Play sound
    playSound('beep', { volume: 0.3 });
}

// Update game UI
function updateGameUI() {
    // Update breadcrumbs
    updateBreadcrumbs();
    
    // Update map
    updateMapDisplay();
    
    // Update stats
    updateStatsDisplay();
    
    // Update inventory
    updateInventoryDisplay();
    
    // Update AI personality
    updateAIDisplay();
    
    // Update objectives
    updateObjectivesDisplay();
}

// Check game triggers
function checkGameTriggers() {
    // Check sanity
    if (GameState.playerStats.sanity <= 0) {
        triggerGameOver('insanity');
    }
    
    // Check AI awareness
    if (GameState.aiAwareness >= 100) {
        triggerAITakeover();
    }
    
    // Check horror triggers
    if (GameState.playerStats.sanity < 50) {
        if (Math.random() < 0.1) {
            triggerHorrorEvent();
        }
    }
    
    // Check phobia triggers
    checkPhobiaTriggers();
    
    // Update music intensity
    const intensity = (GameState.aiAwareness / 100) * (1 - GameState.playerStats.sanity / 100);
    updateMusicIntensity(intensity);
}

// Horror event system
function triggerHorrorEvent() {
    const events = [
        () => {
            createHorrorOverlay('glitch', { duration: 1000 });
            showNotification('Something flickers in your peripheral vision...', 'horror', 3000);
        },
        () => {
            createHorrorOverlay('eyes', { duration: 5000 });
            playSound('whisper');
            showNotification('You feel watched.', 'horror', 2000);
        },
        () => {
            createHorrorOverlay('blood', { duration: 3000, drops: 3 });
            playSound('scream', { volume: 0.3 });
        },
        () => {
            applyTextEffect(Game.ui.gameOutput, 'shake', { intensity: 0.5 });
            setTimeout(() => {
                Game.ui.gameOutput.style.animation = '';
            }, 2000);
        },
        () => {
            createHorrorOverlay('corruption', { duration: 2000 });
            const text = document.querySelectorAll('.command-response');
            if (text.length > 0) {
                const lastText = text[text.length - 1];
                applyTextEffect(lastText, 'scramble', { speed: 2 });
            }
        }
    ];
    
    const event = events[Math.floor(Math.random() * events.length)];
    event();
}

// Setup game systems
function setupGameSystems() {
    // Auto-save
    if (GameState.settings.autoSave) {
        Game.saveInterval = setInterval(() => {
            saveGameState('autosave');
            console.log('Auto-saved');
        }, GameState.settings.autoSaveInterval);
    }
    
    // Game update loop
    Game.updateInterval = setInterval(() => {
        // Update timers
        GameState.sessionTime = Date.now() - GameState.startTime;
        
        // Random events
        if (Math.random() < 0.05) {
            checkRandomEvents();
        }
        
        // Update AI learning
        updateAILearning();
        
    }, 1000);
    
    // Horror intensity loop
    Game.horrorInterval = setInterval(() => {
        const intensity = calculateHorrorIntensity();
        if (intensity > 0.5 && Math.random() < intensity * 0.3) {
            triggerHorrorEvent();
        }
    }, 10000);
}

// Calculate horror intensity
function calculateHorrorIntensity() {}
    const factors = {
        sanity: (100 - GameState.playerStats.sanity) / 100,
        awareness: GameState.aiAwareness / 100,
        fear: GameState.playerStats.fear / 100,
        turns: Math.min(GameState.turn / 100, 1),
        rooms: GameState.roomsVisited.size / Object.keys(ROOMS).length
    };
    
    const weights = {
        sanity: 0.3,
        awareness: 0.3,
        fear: 0.2,
        turns: 0.1,
        rooms: 0.1
    };
    
    let intensity = 0;