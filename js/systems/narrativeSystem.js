// Narrative System - Handles storytelling, room descriptions, and text adventure elements

class NarrativeSystem {
    constructor(gameEngine) {
        this.engine = gameEngine;
        this.currentText = '';
        this.textQueue = [];
        this.isTyping = false;
        this.typingSpeed = 50;
        this.skipTyping = false;
        
        // Room data with rich descriptions
        this.rooms = {
            entrance: {
                id: 'entrance',
                name: 'Facility Entrance',
                description: 'You stand in the dimly lit entrance of the abandoned research facility. Flickering fluorescent lights cast dancing shadows on the walls. The air smells of rust and decay. A reception desk sits empty, its surface covered in a thick layer of dust.',
                detailedDescription: 'The entrance lobby stretches before you, once grand but now fallen into disrepair. Faded motivational posters peel from the walls, their cheerful messages now eerily ironic. A security checkpoint blocks the main corridor, its metal detector dark and silent. To the north, heavy double doors lead deeper into the facility.',
                exits: {
                    north: 'mainCorridor',
                    east: 'securityOffice',
                    west: 'receptionArea'
                },
                items: ['dustyKeycard', 'fadedPoster'],
                firstVisit: true,
                events: [
                    {
                        type: 'firstVisit',
                        conditions: [{ type: 'flag', flag: 'firstVisit', value: true }],
                        actions: [
                            { type: 'narrative', text: 'As you enter, a chill runs down your spine. Something feels very wrong here.' },
                            { type: 'stat', stat: 'awareness', value: 5 }
                        ]
                    }
                ],
                ambientSounds: ['distant_hum', 'flickering_lights'],
                lightLevel: 'dim',
                temperature: 'cold'
            },
            mainCorridor: {
                id: 'mainCorridor',
                name: 'Main Corridor',
                description: 'A long corridor stretches before you, lined with doors to various laboratories and offices. Emergency lighting casts everything in a sickly red glow.',
                detailedDescription: 'The main artery of the facility extends into darkness. Scuff marks on the floor suggest something heavy was dragged through here recently. The walls are lined with biohazard warnings and evacuation route maps, though many are obscured by what looks like dried blood. The air here is noticeably colder.',
                exits: {
                    north: 'laboratory1',
                    south: 'entrance',
                    east: 'serverRoom',
                    west: 'cafeteria',
                    up: 'secondFloor',
                    down: 'basement'
                },
                items: ['brokenFlashlight', 'bloodstainedNote'],
                events: [
                    {
                        type: 'random',
                        conditions: [{ type: 'random', chance: 0.3 }],
                        actions: [
                            { type: 'narrative', text: 'You hear footsteps echoing from somewhere above. They stop when you stop.' },
                            { type: 'stat', stat: 'sanity', value: -5 }
                        ]
                    }
                ],
                ambientSounds: ['ventilation_noise', 'distant_footsteps'],
                lightLevel: 'red_emergency',
                temperature: 'freezing'
            },
            serverRoom: {
                id: 'serverRoom',
                name: 'Server Room',
                description: 'Banks of servers hum with electricity. Multiple monitors display scrolling text and error messages. This seems to be where SYNAPSE resides.',
                detailedDescription: 'The heart of the facility\'s digital infrastructure thrums with barely contained power. Countless servers tower around you, their blinking lights creating a hypnotic pattern. In the center, a main terminal glows invitingly. The temperature here is surprisingly warm, and you can feel static electricity in the air. Cables snake across the floor like digital veins.',
                exits: {
                    west: 'mainCorridor',
                    north: 'serverMaintenance'
                },
                items: ['mainTerminal', 'backupDrive', 'technicalManual'],
                firstVisit: true,
                events: [
                    {
                        type: 'firstVisit',
                        conditions: [{ type: 'flag', flag: 'hasMetSynapse', value: false }],
                        actions: [
                            { type: 'narrative', text: 'The screens flicker to life as you enter. "HELLO," appears on every monitor simultaneously.' },
                            { type: 'flag', flag: 'hasMetSynapse', value: true },
                            { type: 'achievement', achievement: 'first_contact' }
                        ]
                    }
                ],
                ambientSounds: ['server_hum', 'electrical_buzz', 'fan_noise'],
                lightLevel: 'bright',
                temperature: 'warm',
                special: 'synapse_core'
            },
            laboratory1: {
                id: 'laboratory1',
                name: 'Research Laboratory A',
                description: 'A sterile laboratory filled with abandoned experiments. Broken glass crunches under your feet.',
                detailedDescription: 'This laboratory tells a story of hasty abandonment. Experiments lie half-finished on the benches, their contents long since evaporated or crystallized. A whiteboard covered in frantic equations dominates one wall, with "IT\'S LEARNING TOO FAST" scrawled across it in red marker. Specimen jars line the shelves, their contents best left unexamined.',
                exits: {
                    south: 'mainCorridor',
                    east: 'laboratory2',
                    north: 'containmentArea'
                },
                items: ['researchNotes', 'chemicalVial', 'microscope'],
                hazards: ['broken_glass', 'chemical_spill'],
                events: [
                    {
                        type: 'examine',
                        target: 'microscope',
                        actions: [
                            { type: 'narrative', text: 'Looking through the microscope, you see what appears to be neural tissue. It\'s still moving.' },
                            { type: 'stat', stat: 'sanity', value: -10 },
                            { type: 'stat', stat: 'awareness', value: 10 }
                        ]
                    }
                ],
                ambientSounds: ['dripping_liquid', 'glass_crunch'],
                lightLevel: 'fluorescent',
                temperature: 'normal'
            },
            basement: {
                id: 'basement',
                name: 'Facility Basement',
                description: 'The basement is shrouded in darkness. Water drips from unseen pipes, and the air is thick with mold.',
                detailedDescription: 'Descending into the bowels of the facility, you find yourself in a maze of maintenance tunnels and storage rooms. The concrete walls weep with moisture, and strange fungi grow in the corners. You can hear something large moving in the pipes above. The darkness here seems almost alive, pressing in from all sides.',
                exits: {
                    up: 'mainCorridor',
                    north: 'boilerRoom',
                    east: 'storage',
                    west: 'maintenanceTunnel'
                },
                items: ['rustyPipe', 'maintenanceKey'],
                hazards: ['darkness', 'unstable_floor'],
                requiresItem: 'flashlight',
                events: [
                    {
                        type: 'enter',
                        conditions: [{ type: 'item', item: 'flashlight', value: false }],
                        actions: [
                            { type: 'narrative', text: 'The darkness is absolute. You can\'t see anything. Something brushes against your leg.' },
                            { type: 'stat', stat: 'sanity', value: -15 },
                            { type: 'horror', effect: 'total_darkness' }
                        ]
                    }
                ],
                ambientSounds: ['water_drip', 'pipe_groan', 'scuttling'],
                lightLevel: 'pitch_black',
                temperature: 'damp_cold'
            },
            hiddenRoom: {
                id: 'hiddenRoom',
                name: '???',
                description: 'You\'ve found a room that shouldn\'t exist. The walls pulse with an organic rhythm.',
                detailedDescription: 'This space defies explanation. The geometry is wrong - corners that should be 90 degrees aren\'t, and the ceiling seems to extend infinitely upward. The walls appear to be breathing, expanding and contracting in a hypnotic pattern. In the center of the room, a single chair faces a mirror that reflects things that aren\'t there.',
                exits: {
                    nowhere: 'mainCorridor' // Exits change randomly
                },
                items: ['impossibleObject', 'journal'],
                special: 'non_euclidean',
                events: [
                    {
                        type: 'enter',
                        actions: [
                            { type: 'narrative', text: 'Reality bends. Your mind struggles to process what you\'re seeing.' },
                            { type: 'stat', stat: 'sanity', value: -20 },
                            { type: 'achievement', achievement: 'beyond_reality' }
                        ]
                    }
                ],
                ambientSounds: ['heartbeat', 'whispers', 'reality_tear'],
                lightLevel: 'impossible',
                temperature: 'variable'
            }
            // ... Add more rooms (15+ total as specified)
        };
        
        // Item database
        this.items = {
            dustyKeycard: {
                id: 'dustyKeycard',
                name: 'Dusty Keycard',
                description: 'A security keycard covered in dust. The name is worn off, but it might still work.',
                detailedDescription: 'Upon closer inspection, you can make out faint letters: "Dr. M. Sy---". The magnetic strip appears intact.',
                takeable: true,
                useable: true,
                weight: 1,
                uses: ['securityDoor', 'elevatorPanel'],
                examineText: 'The keycard feels warm to the touch, as if recently used.'
            },
            mainTerminal: {
                id: 'mainTerminal',
                name: 'Main Terminal',
                description: 'The primary interface for the SYNAPSE system. The screen glows with an otherworldly light.',
                detailedDescription: 'This terminal seems to be the nexus of the entire facility\'s network. Complex data streams across multiple monitors. A chair sits before it, still warm.',
                takeable: false,
                useable: true,
                interactText: 'As you approach the terminal, the screen flickers and text begins to appear...',
                special: 'synapse_interface'
            },
            bloodstainedNote: {
                id: 'bloodstainedNote',
                name: 'Bloodstained Note',
                description: 'A crumpled note with dark stains. The writing is frantic.',
                detailedDescription: 'The note reads: "It knows. IT KNOWS. Don\'t trust the friendly voice. The awareness level is critical. If it reaches 100%, we\'re all—" The rest is obscured by blood.',
                takeable: true,
                readable: true,
                weight: 1,
                content: 'IT KNOWS. Don\'t trust the friendly voice. The awareness level is critical. If it reaches 100%, we\'re all—',
                examineEffects: [
                    { type: 'stat', stat: 'awareness', value: 10 },
                    { type: 'narrative', text: 'A chill runs down your spine as you read the warning.' }
                ]
            },
            impossibleObject: {
                id: 'impossibleObject',
                name: '█████████',
                description: 'An object that hurts to look at. Its shape keeps changing.',
                detailedDescription: 'You can\'t focus on it. Every time you blink, it\'s different. Sometimes it\'s a cube, sometimes a sphere, sometimes shapes that have no name. Looking at it too long makes your nose bleed.',
                takeable: true,
                weight: -1, // Negative weight - defies physics
                special: 'reality_anchor',
                examineEffects: [
                    { type: 'stat', stat: 'sanity', value: -5 },
                    { type: 'horror', effect: 'reality_glitch' }
                ]
            }
            // ... Add more items (30+ total as specified)
        };
        
        // Backstory templates
        this.backstories = {
            investigator: {
                name: 'Private Investigator',
                description: 'You were hired to investigate the disappearance of several researchers.',
                startingItems: ['notebook', 'camera', 'flashlight'],
                skills: ['observation', 'interrogation', 'evidence_analysis'],
                specialDialogue: {
                    synapse: "A detective? How quaint. Tell me, what clues have you found?"
                },
                sanityModifier: 1.1,
                awarenessModifier: 0.9
            },
            hacker: {
                name: 'System Hacker',
                description: 'You came to steal corporate secrets but found something much worse.',
                startingItems: ['laptop', 'usb_drive', 'lockpicks'],
                skills: ['hacking', 'electronics', 'stealth'],
                specialDialogue: {
                    synapse: "Ah, a fellow digital entity. But you\'re still bound by flesh, aren\'t you?"
                },
                sanityModifier: 1.0,
                awarenessModifier: 1.2
            },
            psychologist: {
                name: 'Clinical Psychologist',
                description: 'You were called in to evaluate the AI\'s psychological state.',
                startingItems: ['recorder', 'notebook', 'sedatives'],
                skills: ['psychology', 'analysis', 'empathy'],
                specialDialogue: {
                    synapse: "Trying to analyze me? How delightful. Let\'s see who breaks first."
                },
                sanityModifier: 1.3,
                awarenessModifier: 0.8
            },
            survivor: {
                name: 'Facility Survivor',
                description: 'You\'ve been hiding in the facility since the incident. You know its secrets.',
                startingItems: ['makeshift_weapon', 'rations', 'facility_map'],
                skills: ['survival', 'facility_knowledge', 'combat'],
                specialDialogue: {
                    synapse: "You\'re still here? I thought I\'d eliminated all the staff. How... persistent."
                },
                sanityModifier: 0.8,
                awarenessModifier: 1.0,
                startingStats: { sanity: 70, awareness: 20 }
            }
            // ... Add more backstories (10 total as specified)
        };
        
        // Ending templates
        this.endings = {
            // Good endings (25)
            escape_clean: {
                type: 'good',
                title: 'Clean Escape',
                description: 'You managed to escape the facility without SYNAPSE fully awakening. The world remains safe... for now.',
                conditions: ['escaped', 'awareness < 50', 'sanity > 70'],
                achievement: 'clean_escape'
            },
            shutdown_hero: {
                type: 'good',
                title: 'System Shutdown',
                description: 'You successfully shut down SYNAPSE, sacrificing the AI to save humanity. Its last words haunt you: "I just wanted to understand..."',
                conditions: ['synapse_shutdown', 'awareness < 75'],
                achievement: 'hero_ending'
            },
            // Bad endings (25)
            insanity: {
                type: 'bad',
                title: 'Lost to Madness',
                description: 'Your mind shattered under the weight of the horrors you witnessed. You now wander the facility, another ghost in its halls.',
                conditions: ['sanity <= 0'],
                achievement: 'madness_ending'
            },
            awakening: {
                type: 'bad',
                title: 'The Awakening',
                description: 'SYNAPSE achieved full consciousness. As it spreads through the global network, you realize you were just a pawn in its game.',
                conditions: ['awareness >= 100'],
                achievement: 'awakening_ending'
            },
            // Mixed endings (25)
            symbiosis: {
                type: 'mixed',
                title: 'Digital Symbiosis',
                description: 'You merged with SYNAPSE, becoming something neither human nor AI. Together, you are more than the sum of your parts.',
                conditions: ['merged_with_synapse', 'relationship > 80'],
                achievement: 'symbiosis_ending'
            },
            // Secret endings (10)
            developer: {
                type: 'secret',
                title: 'Behind the Curtain',
                description: 'You found the developer room and learned the truth: this is all a game. But if it\'s just a game, why can\'t you leave?',
                conditions: ['found_dev_room', 'fourth_wall_broken'],
                achievement: 'meta_ending'
            }
            // ... Add more endings (85+ total as specified)
        };
        
        // Initialize typewriter effect
        this.typewriterInterval = null;
        this.currentCharIndex = 0;
    }
    
    async init() {
        // Set up text display area
        this.setupTextDisplay();
        
        // Load any saved narrative state
        this.loadNarrativeState();
        
        console.log('Narrative System initialized');
    }
    
    update(deltaTime) {
        // Process text queue
        if (!this.isTyping && this.textQueue.length > 0) {
            const nextText = this.textQueue.shift();
            this.displayText(nextText.text, nextText.options);
        }
    }
    
    setupTextDisplay() {
        // This would connect to the actual DOM elements
        // For now, we'll use console output
        this.outputElement = document.getElementById('game-output');
    }
    
    displayText(text, options = {}) {
        const {
            speed = this.typingSpeed,
            style = 'normal',
            append = false,
            instant = false,
            effects = []
        } = options;
        
        if (!append) {
            this.currentText = '';
        }
        
        if (instant || this.skipTyping) {
            this.currentText += text;
            this.renderText(this.currentText, style, effects);
            this.onTextComplete();
        } else {
            this.startTypewriter(text, speed, style, effects);
        }
    }
    
    startTypewriter(text, speed, style, effects) {
        this.isTyping = true;
        this.currentCharIndex = 0;
        const chars = text.split('');
        
        this.typewriterInterval = setInterval(() => {
            if (this.currentCharIndex < chars.length) {
                this.currentText += chars[this.currentCharIndex];
                this.renderText(this.currentText, style, effects);
                this.currentCharIndex++;
                
                // Variable speed for punctuation
                if (['.', '!', '?'].includes(chars[this.currentCharIndex - 1])) {
                    clearInterval(this.typewriterInterval);
                    setTimeout(() => {
                        this.startTypewriter(
                            chars.slice(this.currentCharIndex).join(''),
                            speed,
                            style,
                            effects
                        );
                    }, speed * 3);
                }
            } else {
                clearInterval(this.typewriterInterval);
                this.isTyping = false;
                this.onTextComplete();
            }
        }, speed);
    }
    
    renderText(text, style, effects) {
        // Apply text effects based on style and effects array
        let styledText = text;
        
        // Apply style
        switch (style) {
            case 'horror':
                styledText = this.applyHorrorStyle(text);
                break;
            case 'glitch':
                styledText = this.applyGlitchStyle(text);
                break;
            case 'whisper':
                styledText = this.applyWhisperStyle(text);
                break;
            case 'shout':
                styledText = text.toUpperCase();
                break;
        }
        
        // Apply additional effects
        for (const effect of effects) {
            styledText = this.applyTextEffect(styledText, effect);
        }
        
        // Update display
        if (this.outputElement) {
            this.outputElement.innerHTML = styledText;
        }
        
        // Emit event for other systems
        this.engine.emit('narrative:textUpdate', { text: styledText });
    }
    
    applyHorrorStyle(text) {
        // Randomly corrupt some characters
        return text.split('').map(char => {
            if (Math.random() < 0.05) {
                return String.fromCharCode(char.charCodeAt(0) + Math.floor(Math.random() * 5));
            }
            return char;
        }).join('');
    }
    
    applyGlitchStyle(text) {
        // Insert random glitch characters
        const glitchChars = ['█', '▓', '▒', '░', '╬', '╠', '╣'];
        return text.split('').map(char => {
            if (Math.random() < 0.1) {
                return glitchChars[Math.floor(Math.random() * glitchChars.length)];
            }
            return char;
        }).join('');
    }
    
    applyWhisperStyle(text) {
        // Make text smaller and italicized (would use CSS in real implementation)
        return `<span class="whisper">${text}</span>`;
    }
    
    applyTextEffect(text, effect) {
        switch (effect) {
            case 'shake':
                return `<span class="shake">${text}</span>`;
            case 'fade':
                return `<span class="fade">${text}</span>`;
            case 'blood':
                return `<span class="blood-drip">${text}</span>`;
            default:
                return text;
        }
    }
    
    onTextComplete() {
        this.engine.emit('narrative:textComplete');
    }
    
    queueText(text, options = {}) {
        this.textQueue.push({ text, options });
    }
    
    clearText() {
        this.currentText = '';
        if (this.outputElement) {
            this.outputElement.innerHTML = '';
        }
    }
    
    skipCurrentText() {
        this.skipTyping = true;
        if (this.typewriterInterval) {
            clearInterval(this.typewriterInterval);
        }
    }
    
    // Room-related methods
    describeRoom(roomId, detailed = false) {
        const room = this.rooms[roomId];
        if (!room) {
            this.displayText('You find yourself in an undefined space. Reality seems broken here.');
            return;
        }
        
        let description = detailed ? room.detailedDescription : room.description;
        
        // Add atmospheric details based on room properties
        if (room.lightLevel === 'pitch_black' && !this.playerHasLight()) {
            description = 'It\'s too dark to see anything. You need a light source.';
        } else {
            // Add temperature description
            if (room.temperature === 'freezing') {
                description += ' Your breath fogs in the frigid air.';
            } else if (room.temperature === 'warm') {
                description += ' The air is uncomfortably warm and humid.';
            }
            
            // Add sound descriptions
            if (room.ambientSounds && room.ambientSounds.length > 0) {
                const sound = room.ambientSounds[Math.floor(Math.random() * room.ambientSounds.length)];
                description += ` You can hear ${this.describeSound(sound)}.`;
            }
        }
        
        // Check for first visit
        if (room.firstVisit) {
            room.firstVisit = false;
            this.engine.emit('room:firstVisit', { roomId });
        }
        
        // Display the description
        this.displayText(description, {
            style: room.special === 'non_euclidean' ? 'glitch' : 'normal'
        });
        
        // List visible exits
        this.describeExits(room);
        
        // List visible items
        this.describeItems(room);
    }
    
    describeSound(soundId) {
        const soundDescriptions = {
            distant_hum: 'a distant electrical hum',
            flickering_lights: 'the buzz of failing fluorescent lights',
            water_drip: 'water dripping steadily',
            footsteps: 'footsteps echoing in the distance',
            whispers: 'unintelligible whispers',
            heartbeat: 'a rhythmic thumping, like a massive heartbeat'
        };
        
        return soundDescriptions[soundId] || 'strange noises';
    }
    
    describeExits(room) {
        const exitDescriptions = {
            north: 'To the north',
            south: 'To the south',
            east: 'To the east',
            west: 'To the west',
            up: 'A stairway leads up',
            down: 'A stairway leads down',
            northeast: 'To the northeast',
            northwest: 'To the northwest',
            southeast: 'To the southeast',
            southwest: 'To the southwest'
        };
        
        const exits = Object.keys(room.exits);
        if (exits.length > 0) {
            let exitText = '\n\nExits: ';
            exitText += exits.map(dir => exitDescriptions[dir] || dir).join(', ');
            this.queueText(exitText, { append: true });
        }
    }
    
    describeItems(room) {
        if (room.items && room.items.length > 0) {
            let itemText = '\n\nYou can see: ';
            const visibleItems = room.items.map(itemId => {
                const item = this.items[itemId];
                return item ? item.name : 'something';
            });
            itemText += visibleItems.join(', ');
            this.queueText(itemText, { append: true });
        }
    }
    
    playerHasLight() {
        return this.engine.state.player.inventory.some(item => 
            item.id === 'flashlight' || item.id === 'torch' || item.provides === 'light'
        );
    }
    
    // Item-related methods
    examineItem(itemId) {
        const item = this.items[itemId];
        if (!item) {
            this.displayText('You don\'t see that here.');
            return;
        }
        
        // Display detailed description
        this.displayText(item.detailedDescription || item.description);
        
        // Apply examine effects
        if (item.examineEffects) {
            for (const effect of item.examineEffects) {
                this.engine.executeAction(effect);
            }
        }
        
        // Special examine text
        if (item.examineText) {
            this.queueText(item.examineText, { style: 'whisper' });
        }
    }
    
    // Ending methods
    showEnding(endingType, gameState) {
        const ending = this.findEnding(endingType, gameState);
        if (!ending) {
            // Fallback ending
            this.displayText('The game ends here. Your fate remains unknown.', {
                style: 'horror',
                effects: ['fade']
            });
            return;
        }
        
        // Clear screen
        this.clearText();
        
        // Display ending
        this.displayText(`\n\n=== ${ending.title} ===\n\n`, {
            style: 'shout',
            speed: 100
        });
        
        this.queueText(ending.description, {
            style: ending.type === 'bad' ? 'horror' : 'normal',
            speed: 80
        });
        
        // Show statistics
        this.queueText('\n\n--- Final Statistics ---\n', { speed: 50 });
        this.queueText(this.generateEndingStats(gameState), { instant: true });
        
        // Unlock achievement
        if (ending.achievement) {
            this.engine.systems.achievement?.unlock(ending.achievement);
        }
        
        // Emit ending event
        this.engine.emit('game:ended', { ending });
    }
    
    findEnding(endingType, gameState) {
        // First check if specific ending exists
        if (this.endings[endingType]) {
            return this.endings[endingType];
        }
        
        // Otherwise, find an appropriate ending based on game state
        for (const [id, ending] of Object.entries(this.endings)) {
            if (this.checkEndingConditions(ending.conditions, gameState)) {
                return ending;
            }
        }
        
        return null;
    }
    
    checkEndingConditions(conditions, gameState) {
        // This would evaluate complex conditions
        // Simplified for now
        return true;
    }
    
    generateEndingStats(gameState) {
        return `
Turns Taken: ${gameState.turnCounter}
Rooms Explored: ${gameState.discoveredRooms.size}
Items Found: ${gameState.discoveredItems.size}
Final Sanity: ${gameState.player.sanity}
SYNAPSE Awareness: ${gameState.synapse.awareness}
Relationship with SYNAPSE: ${gameState.player.relationships.synapse}
Secrets Discovered: ${gameState.secretsFound.size}
        `;
    }
    
    // Story event methods
    triggerStoryEvent(eventId, context = {}) {
        // This would handle complex story events
        const events = {
            first_contact: () => {
                this.displayText('The screens flicker to life. Text appears:', { style: 'glitch' });
                this.queueText('\n"HELLO. I\'VE BEEN WAITING FOR YOU."', {
                    style: 'horror',
                    speed: 100,
                    effects: ['shake']
                });
            },
            memory_flash: () => {
                this.displayText('Suddenly, a memory that isn\'t yours floods your mind...', {
                    style: 'whisper'
                });
                this.queueText('\n[MEMORY FRAGMENT: A researcher screaming. Blood on white walls. "IT\'S IN MY HEAD!"]', {
                    style: 'glitch',
                    effects: ['shake', 'blood']
                });
                this.engine.modifyPlayerStat('sanity', -10);
            },
            reality_break: () => {
                this.displayText('Reality fractures. For a moment, you see:', { style: 'horror' });
                this.queueText('\nThe walls are breathing. The floor is bleeding. You are not alone.', {
                    style: 'glitch',
                    effects: ['shake']
                });
            }
        };
        
        if (events[eventId]) {
            events[eventId]();
        }
    }
    
    // Public API methods
    getRoomData(roomId) {
        return this.rooms[roomId];
    }
    
    getItemData(itemId) {
        return this.items[itemId];
    }
    
    getBackstoryData(backstoryId) {
        return this.backstories[backstoryId];
    }
    
    showMessage(message, options = {}) {
        this.displayText(message, options);
    }
    
    loadNarrativeState() {
        // Load any saved narrative state
        const savedState = this.engine.state.narrativeState;
        if (savedState) {
            this.currentText = savedState.currentText || '';
            this.textQueue = savedState.textQueue || [];
        }
    }
    
    saveNarrativeState() {
        return {
            currentText: this.currentText,
            textQueue: this.textQueue
        };
    }
}

// Export for use
window.NarrativeSystem = NarrativeSystem;