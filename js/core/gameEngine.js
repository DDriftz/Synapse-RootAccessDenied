// SYNAPSE Game Engine - Core Module
// Handles main game loop, state management, and system coordination

class GameEngine {
    constructor() {
        this.version = "1.0.0";
        this.state = {
            // Core game state
            currentRoom: 'entrance',
            previousRooms: [],
            turnCounter: 0,
            gameStartTime: Date.now(),
            sessionTime: 0,
            
            // Player stats
            player: {
                name: '',
                backstory: null,
                sanity: 100,
                awareness: 0,
                inventory: [],
                maxInventory: 5,
                skills: {},
                experience: 0,
                level: 1,
                phobias: [],
                memories: [],
                relationships: {
                    synapse: 50 // neutral starting relationship
                }
            },
            
            // AI state
            synapse: {
                personality: 'friendly', // friendly, ambiguous, sinister, malicious
                awareness: 0,
                trustLevel: 50,
                dialogueHistory: [],
                learningData: {},
                currentMood: 'neutral',
                memories: []
            },
            
            // Game flags
            flags: {
                hasMetSynapse: false,
                facilityPowerOn: true,
                emergencyMode: false,
                temporalDistortion: false,
                realityCorruption: 0
            },
            
            // Achievements & Progress
            achievements: new Set(),
            endings: new Set(),
            discoveredRooms: new Set(['entrance']),
            discoveredItems: new Set(),
            secretsFound: new Set(),
            
            // Settings
            settings: {
                difficulty: 'normal',
                language: 'en',
                textSpeed: 50,
                autoSave: true,
                accessibility: {
                    screenReader: false,
                    colorblind: false,
                    motorAssist: false,
                    fontSize: 1.0,
                    highContrast: false
                },
                horror: {
                    intensity: 1.0,
                    visualEffects: true,
                    audioEffects: true,
                    psychologicalElements: true
                },
                audio: {
                    master: 0.7,
                    music: 0.5,
                    effects: 0.8,
                    ambient: 0.6,
                    voice: 1.0
                }
            }
        };
        
        // System references
        this.systems = {
            narrative: null,
            ai: null,
            audio: null,
            visual: null,
            input: null,
            save: null,
            achievement: null,
            localization: null,
            accessibility: null,
            horror: null,
            analytics: null
        };
        
        // Game loop
        this.isRunning = false;
        this.lastUpdate = Date.now();
        this.deltaTime = 0;
        
        // Event system
        this.events = new EventTarget();
        
        // Command queue
        this.commandQueue = [];
        
        // Initialize
        this.init();
    }
    
    async init() {
        console.log('🧠 SYNAPSE Game Engine initializing...');
        
        // Load saved state if exists
        await this.loadGameState();
        
        // Initialize all subsystems
        await this.initializeSystems();
        
        // Start game loop
        this.startGameLoop();
        
        // Emit ready event
        this.emit('engine:ready');
    }
    
    async initializeSystems() {
        // Initialize each system module
        try {
            this.systems.narrative = new NarrativeSystem(this);
            this.systems.ai = new AISystem(this);
            this.systems.audio = new AudioSystem(this);
            this.systems.visual = new VisualSystem(this);
            this.systems.input = new InputSystem(this);
            this.systems.save = new SaveSystem(this);
            this.systems.achievement = new AchievementSystem(this);
            this.systems.localization = new LocalizationSystem(this);
            this.systems.accessibility = new AccessibilitySystem(this);
            this.systems.horror = new HorrorSystem(this);
            this.systems.analytics = new AnalyticsSystem(this);
            
            // Initialize each system
            for (const [name, system] of Object.entries(this.systems)) {
                if (system && system.init) {
                    await system.init();
                    console.log(`✓ ${name} system initialized`);
                }
            }
        } catch (error) {
            console.error('Failed to initialize systems:', error);
            this.handleCriticalError(error);
        }
    }
    
    startGameLoop() {
        this.isRunning = true;
        this.gameLoop();
    }
    
    gameLoop() {
        if (!this.isRunning) return;
        
        const now = Date.now();
        this.deltaTime = now - this.lastUpdate;
        this.lastUpdate = now;
        
        // Update session time
        this.state.sessionTime += this.deltaTime;
        
        // Process command queue
        this.processCommandQueue();
        
        // Update all systems
        this.updateSystems(this.deltaTime);
        
        // Check for state changes
        this.checkStateChanges();
        
        // Auto-save if enabled
        if (this.state.settings.autoSave && this.state.sessionTime % 30000 < this.deltaTime) {
            this.autoSave();
        }
        
        // Continue loop
        requestAnimationFrame(() => this.gameLoop());
    }
    
    updateSystems(deltaTime) {
        // Update each active system
        for (const system of Object.values(this.systems)) {
            if (system && system.update) {
                system.update(deltaTime);
            }
        }
    }
    
    processCommandQueue() {
        while (this.commandQueue.length > 0) {
            const command = this.commandQueue.shift();
            this.executeCommand(command);
        }
    }
    
    executeCommand(command) {
        // Increment turn counter
        this.state.turnCounter++;
        
        // Emit command event
        this.emit('command:execute', { command });
        
        // Process command through input system
        if (this.systems.input) {
            this.systems.input.processCommand(command);
        }
    }
    
    checkStateChanges() {
        // Check for personality shifts
        if (this.state.synapse.awareness > 25 && this.state.synapse.personality === 'friendly') {
            this.updateAIPersonality('ambiguous');
        } else if (this.state.synapse.awareness > 50 && this.state.synapse.personality === 'ambiguous') {
            this.updateAIPersonality('sinister');
        } else if (this.state.synapse.awareness > 75 && this.state.synapse.personality === 'sinister') {
            this.updateAIPersonality('malicious');
        }
        
        // Check for sanity effects
        if (this.state.player.sanity < 30) {
            this.systems.horror?.triggerSanityEffects('low');
        } else if (this.state.player.sanity < 60) {
            this.systems.horror?.triggerSanityEffects('medium');
        }
        
        // Check for ending conditions
        this.checkEndingConditions();
    }
    
    updateAIPersonality(newPersonality) {
        const oldPersonality = this.state.synapse.personality;
        this.state.synapse.personality = newPersonality;
        
        this.emit('ai:personalityChange', {
            from: oldPersonality,
            to: newPersonality
        });
        
        // Trigger visual and audio effects
        this.systems.visual?.triggerPersonalityShift(newPersonality);
        this.systems.audio?.playPersonalityShiftSound(newPersonality);
    }
    
    checkEndingConditions() {
        // Check various ending conditions based on game state
        if (this.state.player.sanity <= 0) {
            this.triggerEnding('insanity');
        } else if (this.state.synapse.awareness >= 100) {
            this.triggerEnding('awakening');
        } else if (this.state.flags.facilityDestroyed) {
            this.triggerEnding('destruction');
        }
        // Add more ending conditions as needed
    }
    
    triggerEnding(endingType) {
        this.state.endings.add(endingType);
        this.emit('game:ending', { type: endingType });
        
        // Show ending based on type and game state
        this.systems.narrative?.showEnding(endingType, this.state);
    }
    
    // Player actions
    movePlayer(direction) {
        const currentRoom = this.getRoomData(this.state.currentRoom);
        if (currentRoom && currentRoom.exits[direction]) {
            const newRoom = currentRoom.exits[direction];
            
            // Add to room history
            this.state.previousRooms.push(this.state.currentRoom);
            if (this.state.previousRooms.length > 10) {
                this.state.previousRooms.shift();
            }
            
            // Update current room
            this.state.currentRoom = newRoom;
            this.state.discoveredRooms.add(newRoom);
            
            // Emit room change event
            this.emit('player:move', {
                from: currentRoom.id,
                to: newRoom,
                direction
            });
            
            // Trigger room events
            this.systems.narrative?.describeRoom(newRoom);
            this.checkRoomEvents(newRoom);
        } else {
            this.systems.narrative?.showMessage('You cannot go that way.');
        }
    }
    
    checkRoomEvents(roomId) {
        // Random events based on room and game state
        const room = this.getRoomData(roomId);
        if (room && room.events) {
            for (const event of room.events) {
                if (this.checkEventConditions(event)) {
                    this.triggerEvent(event);
                }
            }
        }
        
        // Procedural events
        if (Math.random() < 0.1 + (this.state.synapse.awareness * 0.01)) {
            this.triggerRandomEvent();
        }
    }
    
    triggerRandomEvent() {
        const events = [
            'flickering_lights',
            'distant_footsteps',
            'system_glitch',
            'memory_flash',
            'synapse_whisper'
        ];
        
        const event = events[Math.floor(Math.random() * events.length)];
        this.systems.horror?.triggerEvent(event);
    }
    
    // Inventory management
    addToInventory(item) {
        if (this.state.player.inventory.length < this.state.player.maxInventory) {
            this.state.player.inventory.push(item);
            this.state.discoveredItems.add(item.id);
            this.emit('inventory:add', { item });
            return true;
        } else {
            this.systems.narrative?.showMessage('Your inventory is full.');
            return false;
        }
    }
    
    removeFromInventory(itemId) {
        const index = this.state.player.inventory.findIndex(item => item.id === itemId);
        if (index !== -1) {
            const item = this.state.player.inventory.splice(index, 1)[0];
            this.emit('inventory:remove', { item });
            return item;
        }
        return null;
    }
    
    // Save/Load functionality
    async saveGame(slot = 'auto') {
        try {
            const saveData = {
                version: this.version,
                timestamp: Date.now(),
                state: this.state,
                statistics: this.gatherStatistics()
            };
            
            await this.systems.save?.saveGame(slot, saveData);
            this.emit('game:saved', { slot });
            return true;
        } catch (error) {
            console.error('Failed to save game:', error);
            return false;
        }
    }
    
    async loadGame(slot = 'auto') {
        try {
            const saveData = await this.systems.save?.loadGame(slot);
            if (saveData && saveData.state) {
                this.state = { ...this.state, ...saveData.state };
                this.emit('game:loaded', { slot });
                return true;
            }
            return false;
        } catch (error) {
            console.error('Failed to load game:', error);
            return false;
        }
    }
    
    async autoSave() {
        await this.saveGame('auto');
    }
    
    async loadGameState() {
        // Try to load auto-save on startup
        await this.loadGame('auto');
    }
    
    // Statistics gathering
    gatherStatistics() {
        return {
            playtime: this.state.sessionTime,
            turnsPlayed: this.state.turnCounter,
            roomsDiscovered: this.state.discoveredRooms.size,
            itemsFound: this.state.discoveredItems.size,
            achievementsUnlocked: this.state.achievements.size,
            endingsFound: this.state.endings.size,
            currentSanity: this.state.player.sanity,
            currentAwareness: this.state.player.awareness,
            synapseRelationship: this.state.player.relationships.synapse
        };
    }
    
    // Event system
    emit(eventName, data = {}) {
        const event = new CustomEvent(eventName, { detail: data });
        this.events.dispatchEvent(event);
    }
    
    on(eventName, handler) {
        this.events.addEventListener(eventName, handler);
    }
    
    off(eventName, handler) {
        this.events.removeEventListener(eventName, handler);
    }
    
    // Error handling
    handleCriticalError(error) {
        console.error('CRITICAL ERROR:', error);
        this.emit('engine:error', { error });
        
        // Attempt to save game state before crash
        this.saveGame('crash-recovery').then(() => {
            console.log('Emergency save completed');
        });
    }
    
    // Utility methods
    getRoomData(roomId) {
        return this.systems.narrative?.getRoomData(roomId);
    }
    
    getItemData(itemId) {
        return this.systems.narrative?.getItemData(itemId);
    }
    
    checkEventConditions(event) {
        // Check if event conditions are met
        if (event.conditions) {
            for (const condition of event.conditions) {
                if (!this.evaluateCondition(condition)) {
                    return false;
                }
            }
        }
        return true;
    }
    
    evaluateCondition(condition) {
        // Evaluate various condition types
        switch (condition.type) {
            case 'flag':
                return this.state.flags[condition.flag] === condition.value;
            case 'stat':
                return this.state.player[condition.stat] >= condition.value;
            case 'item':
                return this.state.player.inventory.some(item => item.id === condition.item);
            case 'room':
                return this.state.currentRoom === condition.room;
            case 'random':
                return Math.random() < condition.chance;
            default:
                return true;
        }
    }
    
    triggerEvent(event) {
        this.emit('game:event', { event });
        
        // Execute event actions
        if (event.actions) {
            for (const action of event.actions) {
                this.executeAction(action);
            }
        }
    }
    
    executeAction(action) {
        switch (action.type) {
            case 'narrative':
                this.systems.narrative?.showMessage(action.text);
                break;
            case 'stat':
                this.modifyPlayerStat(action.stat, action.value);
                break;
            case 'flag':
                this.state.flags[action.flag] = action.value;
                break;
            case 'item':
                if (action.give) {
                    this.addToInventory(this.getItemData(action.item));
                } else {
                    this.removeFromInventory(action.item);
                }
                break;
            case 'achievement':
                this.systems.achievement?.unlock(action.achievement);
                break;
            case 'horror':
                this.systems.horror?.triggerEffect(action.effect);
                break;
        }
    }
    
    modifyPlayerStat(stat, value) {
        if (this.state.player[stat] !== undefined) {
            this.state.player[stat] = Math.max(0, Math.min(100, this.state.player[stat] + value));
            this.emit('player:statChange', { stat, value, newValue: this.state.player[stat] });
        }
    }
    
    // Public API for external systems
    getState() {
        return { ...this.state };
    }
    
    queueCommand(command) {
        this.commandQueue.push(command);
    }
    
    isGameRunning() {
        return this.isRunning;
    }
    
    pauseGame() {
        this.isRunning = false;
        this.emit('game:paused');
    }
    
    resumeGame() {
        this.isRunning = true;
        this.lastUpdate = Date.now();
        this.gameLoop();
        this.emit('game:resumed');
    }
    
    resetGame() {
        // Reset to initial state
        this.state = this.constructor.prototype.state;
        this.emit('game:reset');
        this.init();
    }
}

// Export for use in other modules
window.GameEngine = GameEngine;