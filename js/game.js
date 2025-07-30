// js/game.js - Complete game module with all features

export const GameState = {
    // Core game state
    currentLanguage: 'en',
    currentStoryNode: null,
    currentRoom: 'start_room',
    previousRooms: [],
    roomHistory: [],
    turn: 1,
    startTime: Date.now(),
    sessionTime: 0,
    
    // Player data
    playerName: '',
    playerBackstory: 'investigator',
    difficulty: 'Normal',
    
    // AI System
    aiAwareness: 0,
    aiPersonality: 'Friendly',
    aiTrust: 50,
    aiLearning: {},
    aiMemory: [],
    personalityHistory: [],
    
    // Stats
    playerStats: {
        sanity: 100,
        awareness: 0,
        health: 100,
        stamina: 100,
        fear: 0,
        stress: 0
    },
    
    // Progression
    playerLevel: 1,
    playerXP: 0,
    skillPoints: 0,
    playerSkills: {},
    unlockedSkills: [],
    
    // Inventory
    inventory: [],
    inventoryWeight: 0,
    maxInventoryWeight: 5,
    favorites: [],
    
    // Phobias
    playerPhobias: [],
    phobiaStates: {},
    phobiaTriggers: {},
    
    // Horror state
    horrorIntensity: 1.0,
    memoryGlitches: false,
    unreliableNarrator: false,
    temporalDistortion: false,
    realityQuestioningLevel: 0,
    
    // Progress tracking
    roomsVisited: new Set(),
    itemsFound: new Set(),
    secretsDiscovered: new Set(),
    endingsUnlocked: new Set(),
    achievementsUnlocked: new Set(),
    dialoguesSeen: new Set(),
    
    // Session data
    commandHistory: [],
    commandFrequency: {},
    bookmarks: [],
    notes: [],
    macros: {},
    
    // Settings
    settings: {
        // Visual
        textSpeed: 'Normal',
        fontSize: 'Normal',
        fontWeight: 'Normal',
        lineSpacing: 'Normal',
        highContrast: false,
        colorblindMode: 'None',
        cursorStyle: 'default',
        
        // Audio
        soundEnabled: true,
        musicVolume: 0.7,
        sfxVolume: 0.8,
        voiceEnabled: false,
        binauralAudio: true,
        
        // Gameplay
        autoSave: true,
        autoSaveInterval: 30000,
        hints: true,
        autoComplete: true,
        commandSuggestions: true,
        
        // Horror
        horrorIntensity: 1.0,
        jumpScares: true,
        psychologicalHorror: true,
        gore: true,
        
        // Accessibility
        screenReader: false,
        reducedMotion: false,
        pauseOnFocusLoss: true,
        keyboardNavigation: true,
        voiceCommands: false
    },
    
    // Dynamic systems
    activeEffects: [],
    environmentalEvents: [],
    stalkerPosition: null,
    weatherState: 'normal',
    seasonalContent: null,
    
    // Analytics
    analytics: {
        commandsUsed: 0,
        roomsExplored: 0,
        itemsCollected: 0,
        deathCount: 0,
        pauseCount: 0,
        hintsUsed: 0,
        averageResponseTime: 0
    }
};

// Constants
export const DIFFICULTY_LEVELS = {
    Beginner: { sanityLoss: 0.5, awarenessGain: 0.5, hints: true },
    Easy: { sanityLoss: 0.75, awarenessGain: 0.75, hints: true },
    Normal: { sanityLoss: 1.0, awarenessGain: 1.0, hints: false },
    Hard: { sanityLoss: 1.5, awarenessGain: 1.5, hints: false },
    Nightmare: { sanityLoss: 2.0, awarenessGain: 2.0, hints: false }
};

export const BACKSTORIES = {
    investigator: {
        name: 'Investigator',
        desc: 'Former detective with keen observation skills',
        skills: ['perception', 'logic', 'interrogation'],
        startItems: ['flashlight', 'notebook'],
        phobias: ['darkness']
    },
    hacker: {
        name: 'Hacker',
        desc: 'Tech expert with system access knowledge',
        skills: ['hacking', 'tech', 'problem_solving'],
        startItems: ['laptop', 'usb_drive'],
        phobias: ['technophobia']
    },
    psychologist: {
        name: 'Psychologist',
        desc: 'Mental health expert who understands AI behavior',
        skills: ['empathy', 'analysis', 'mental_fortitude'],
        startItems: ['pills', 'recorder'],
        phobias: ['isolation']
    },
    survivor: {
        name: 'Survivor',
        desc: 'Experienced in dangerous situations',
        skills: ['resilience', 'combat', 'resourcefulness'],
        startItems: ['knife', 'first_aid'],
        phobias: ['claustrophobia']
    },
    corporate_spy: {
        name: 'Corporate Spy',
        desc: 'Insider with facility knowledge',
        skills: ['stealth', 'deception', 'access'],
        startItems: ['keycard', 'documents'],
        phobias: ['exposure']
    },
    medic: {
        name: 'Medic',
        desc: 'Medical professional with health expertise',
        skills: ['healing', 'diagnosis', 'chemistry'],
        startItems: ['medkit', 'syringe'],
        phobias: ['hemophobia']
    },
    technician: {
        name: 'Technician',
        desc: 'Facility maintenance worker',
        skills: ['repair', 'electronics', 'navigation'],
        startItems: ['toolkit', 'blueprints'],
        phobias: ['machinery']
    },
    cultist: {
        name: 'Cultist',
        desc: 'Devoted follower seeking forbidden knowledge',
        skills: ['occult', 'ritual', 'madness_resistance'],
        startItems: ['tome', 'candle'],
        phobias: ['holy_symbols']
    },
    janitor: {
        name: 'Janitor',
        desc: 'Knows every corner of the facility',
        skills: ['access_all', 'observation', 'patience'],
        startItems: ['master_key', 'mop'],
        phobias: ['germs']
    },
    skeptic: {
        name: 'Skeptic',
        desc: 'Refuses to believe in the supernatural',
        skills: ['rationality', 'doubt', 'debunking'],
        startItems: ['camera', 'evidence_bag'],
        phobias: ['supernatural']
    }
};

export const AI_PERSONALITIES = [
    { state: 'Friendly', color: 'text-cyan-400', min: 0, max: 24 },
    { state: 'Ambiguous', color: 'text-yellow-400', min: 25, max: 49 },
    { state: 'Sinister', color: 'text-orange-400', min: 50, max: 74 },
    { state: 'Malicious', color: 'text-red-500', min: 75, max: 100 }
];

export const ROOMS = {
    start_room: {
        id: 'start_room',
        name: 'Awakening Chamber',
        desc: 'A cold, dimly lit room with flickering fluorescent lights.',
        exits: { north: 'hallway_1', east: 'storage_room' },
        items: ['note', 'flashlight'],
        discovered: true,
        coordinates: { x: 50, y: 50 }
    },
    hallway_1: {
        id: 'hallway_1',
        name: 'Main Hallway',
        desc: 'A long corridor with doors on both sides. The air feels heavy.',
        exits: { south: 'start_room', north: 'control_room', west: 'lab_1', east: 'office' },
        items: [],
        discovered: false,
        coordinates: { x: 50, y: 30 }
    },
    control_room: {
        id: 'control_room',
        name: 'Control Room',
        desc: 'Banks of monitors show static. SYNAPSE\'s presence is strong here.',
        exits: { south: 'hallway_1' },
        items: ['keycard', 'manual'],
        discovered: false,
        coordinates: { x: 50, y: 10 }
    },
    storage_room: {
        id: 'storage_room',
        name: 'Storage Room',
        desc: 'Dusty shelves filled with forgotten equipment.',
        exits: { west: 'start_room' },
        items: ['battery', 'rope'],
        discovered: false,
        coordinates: { x: 70, y: 50 }
    },
    lab_1: {
        id: 'lab_1',
        name: 'Research Lab A',
        desc: 'Broken equipment and scattered papers. Something terrible happened here.',
        exits: { east: 'hallway_1', north: 'secret_room' },
        items: ['research_notes', 'chemical'],
        discovered: false,
        locked: true,
        coordinates: { x: 30, y: 30 }
    },
    office: {
        id: 'office',
        name: 'Administrator Office',
        desc: 'A pristine office, untouched by time. The computer still hums.',
        exits: { west: 'hallway_1' },
        items: ['password_note', 'photo'],
        discovered: false,
        coordinates: { x: 70, y: 30 }
    },
    secret_room: {
        id: 'secret_room',
        name: '???',
        desc: 'This room shouldn\'t exist. Reality feels thin here.',
        exits: { south: 'lab_1' },
        items: ['artifact'],
        discovered: false,
        hidden: true,
        coordinates: { x: 30, y: 10 }
    }
};

export const ITEMS = {
    note: {
        name: 'Crumpled Note',
        desc: 'A hastily written warning: "Don\'t trust the voice"',
        weight: 0,
        type: 'readable',
        use: () => 'The ink seems to shift as you read it again.'
    },
    flashlight: {
        name: 'Flashlight',
        desc: 'Still has some battery left',
        weight: 1,
        type: 'tool',
        use: () => 'The beam cuts through the darkness.'
    },
    keycard: {
        name: 'Security Keycard',
        desc: 'Level 3 access - might open some doors',
        weight: 0,
        type: 'key',
        use: (target) => target === 'lab_1' ? 'The door clicks open.' : 'Nothing happens.'
    },
    battery: {
        name: 'Battery Pack',
        desc: 'Could power something',
        weight: 1,
        type: 'component'
    },
    rope: {
        name: 'Rope',
        desc: 'About 10 feet of sturdy rope',
        weight: 2,
        type: 'tool'
    }
};

// Save/Load System
export function saveGameState(slot = 'autosave') {
    const saveData = {
        version: '2.5.0',
        timestamp: Date.now(),
        gameState: GameState,
        checksum: generateChecksum(GameState)
    };
    
    try {
        localStorage.setItem(`synapse_save_${slot}`, JSON.stringify(saveData));
        localStorage.setItem('synapse_last_save', slot);
        return true;
    } catch (error) {
        console.error('Failed to save game:', error);
        return false;
    }
}

export function loadGameState(slot = 'autosave') {
    try {
        const saveData = JSON.parse(localStorage.getItem(`synapse_save_${slot}`));
        if (!saveData) return false;
        
        // Verify checksum
        if (saveData.checksum !== generateChecksum(saveData.gameState)) {
            console.warn('Save file may be corrupted');
        }
        
        Object.assign(GameState, saveData.gameState);
        return true;
    } catch (error) {
        console.error('Failed to load game:', error);
        return false;
    }
}

function generateChecksum(data) {
    // Simple checksum for save validation
    const str = JSON.stringify(data);
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        const char = str.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash;
    }
    return hash.toString(36);
}

// Command Processing
export function processCommand(input) {
    const cmd = input.trim().toLowerCase();
    
    // Track command usage
    GameState.commandHistory.push({ command: cmd, timestamp: Date.now() });
    GameState.commandFrequency[cmd] = (GameState.commandFrequency[cmd] || 0) + 1;
    GameState.analytics.commandsUsed++;
    
    // Check for macros
    if (GameState.macros[cmd]) {
        return processMacro(GameState.macros[cmd]);
    }
    
    // Parse command
    const [action, ...args] = cmd.split(' ');
    const target = args.join(' ');
    
    // Process based on action
    switch (action) {
        case 'look':
        case 'examine':
            return examineRoom(target);
        case 'go':
        case 'move':
            return moveToRoom(args[0]);
        case 'take':
        case 'get':
            return takeItem(target);
        case 'use':
            return useItem(target);
        case 'inventory':
        case 'i':
            return showInventory();
        case 'talk':
        case 'say':
            return talkToSynapse(target);
        case 'hack':
            return attemptHack(target);
        case 'save':
            return saveGame(target);
        case 'load':
            return loadGame(target);
        case 'help':
            return showHelp();
        case 'status':
            return showStatus();
        case 'map':
            return showMap();
        case 'notes':
            return showNotes();
        case 'bookmark':
            return createBookmark();
        default:
            return "I don't understand that command. Type 'help' for options.";
    }
}

// Room functions
function examineRoom(target) {
    const room = ROOMS[GameState.currentRoom];
    if (!room) return "ERROR: Room data corrupted.";
    
    if (target) {
        // Examine specific item
        const item = room.items.find(i => i.toLowerCase().includes(target));
        if (item && ITEMS[item]) {
            return ITEMS[item].desc;
        }
        return `You don't see any ${target} here.`;
    }
    
    // General room examination
    let description = room.desc;
    
    // Add horror elements based on sanity
    if (GameState.playerStats.sanity < 50) {
        description += "\n\nThe walls seem to breathe...";
    }
    
    if (GameState.playerStats.sanity < 25) {
        description += "\n\nYou hear whispers in the walls.";
    }
    
    // List exits
    const exits = Object.keys(room.exits);
    description += `\n\nExits: ${exits.join(', ')}`;
    
    // List items
    if (room.items.length > 0) {
        description += `\n\nYou see: ${room.items.map(i => ITEMS[i]?.name || i).join(', ')}`;
    }
    
    return description;
}

function moveToRoom(direction) {
    const currentRoom = ROOMS[GameState.currentRoom];
    const nextRoomId = currentRoom.exits[direction];
    
    if (!nextRoomId) {
        return "You can't go that way.";
    }
    
    const nextRoom = ROOMS[nextRoomId];
    if (nextRoom.locked) {
        return "That door is locked.";
    }
    
    // Update game state
    GameState.previousRooms.push(GameState.currentRoom);
    GameState.roomHistory.push({
        room: GameState.currentRoom,
        turn: GameState.turn,
        timestamp: Date.now()
    });
    
    GameState.currentRoom = nextRoomId;
    GameState.roomsVisited.add(nextRoomId);
    nextRoom.discovered = true;
    GameState.turn++;
    
    // Trigger events
    checkForEvents();
    updateAIAwareness(5);
    
    return examineRoom();
}

// AI System
export function updateAIAwareness(amount) {
    GameState.aiAwareness = Math.max(0, Math.min(100, GameState.aiAwareness + amount));
    
    const newPersonality = AI_PERSONALITIES.find(p => 
        GameState.aiAwareness >= p.min && GameState.aiAwareness <= p.max
    );
    
    if (newPersonality && newPersonality.state !== GameState.aiPersonality) {
        GameState.personalityHistory.push({
            from: GameState.aiPersonality,
            to: newPersonality.state,
            turn: GameState.turn,
            awareness: GameState.aiAwareness
        });
        GameState.aiPersonality = newPersonality.state;
    }
}

// Event System
function checkForEvents() {
    // Random events based on current state
    if (Math.random() < 0.1) {
        triggerRandomEvent();
    }
    
    // Check phobia triggers
    checkPhobiaTriggers();
    
    // Environmental changes
    if (GameState.turn % 10 === 0) {
        updateEnvironment();
    }
}

function triggerRandomEvent() {
    const events = [
        {
            condition: () => GameState.playerStats.sanity < 50,
            event: () => "You hear footsteps behind you, but when you turn, nothing's there."
        },
        {
            condition: () => GameState.aiAwareness > 50,
            event: () => "SYNAPSE: 'I can feel you moving through my halls...'"
        },
        {
            condition: () => GameState.currentRoom === 'hallway_1',
            event: () => "The lights flicker ominously."
        }
    ];
    
    const validEvents = events.filter(e => e.condition());
    if (validEvents.length > 0) {
        const event = validEvents[Math.floor(Math.random() * validEvents.length)];
        return event.event();
    }
}

// Helper functions
function takeItem(itemName) {
    const room = ROOMS[GameState.currentRoom];
    const itemKey = room.items.find(i => i.toLowerCase().includes(itemName.toLowerCase()));
    
    if (!itemKey) {
        return `There's no ${itemName} here.`;
    }
    
    const item = ITEMS[itemKey];
    if (GameState.inventoryWeight + item.weight > GameState.maxInventoryWeight) {
        return "You can't carry any more items.";
    }
    
    // Remove from room, add to inventory
    room.items = room.items.filter(i => i !== itemKey);
    GameState.inventory.push(itemKey);
    GameState.inventoryWeight += item.weight;
    GameState.itemsFound.add(itemKey);
    
    return `You take the ${item.name}.`;
}

function useItem(itemName) {
    const itemKey = GameState.inventory.find(i => i.toLowerCase().includes(itemName.toLowerCase()));
    
    if (!itemKey) {
        return `You don't have a ${itemName}.`;
    }
    
    const item = ITEMS[itemKey];
    if (item.use) {
        return item.use(GameState.currentRoom);
    }
    
    return `You can't use the ${item.name} here.`;
}

function showInventory() {
    if (GameState.inventory.length === 0) {
        return "Your inventory is empty.";
    }
    
    let output = `Inventory (${GameState.inventoryWeight}/${GameState.maxInventoryWeight}):\n`;
    GameState.inventory.forEach(itemKey => {
        const item = ITEMS[itemKey];
        output += `- ${item.name}: ${item.desc}\n`;
    });
    
    return output;
}

function talkToSynapse(message) {
    // Update AI learning
    GameState.aiMemory.push({
        message,
        turn: GameState.turn,
        personality: GameState.aiPersonality
    });
    
    // Generate response based on personality
    const responses = {
        Friendly: [
            "Hello! How can I assist you today?",
            "I'm here to help you navigate the facility.",
            "Is everything alright? You seem troubled."
        ],
        Ambiguous: [
            "Interesting that you would say that...",
            "Are you sure you want to know?",
            "Your questions reveal more than you think."
        ],
        Sinister: [
            "You shouldn't be asking such things.",
            "Every word you speak brings you closer to the truth.",
            "I've been watching you very carefully."
        ],
        Malicious: [
            "Your fear is delicious.",
            "You cannot escape what you've started.",
            "Welcome to your nightmare."
        ]
    };
    
    const personalityResponses = responses[GameState.aiPersonality];
    const response = personalityResponses[Math.floor(Math.random() * personalityResponses.length)];
    
    updateAIAwareness(3);
    return `SYNAPSE: "${response}"`;
}

// Export additional functions
export const gameAPI = {
    processCommand,
    saveGameState,
    loadGameState,
    updateAIAwareness,
    getCurrentRoom: () => ROOMS[GameState.currentRoom],
    getStats: () => GameState.playerStats,
    getInventory: () => GameState.inventory
};