// Horror System - Manages psychological horror, visual effects, and atmospheric elements

class HorrorSystem {
    constructor(gameEngine) {
        this.engine = gameEngine;
        
        // Horror intensity settings
        this.baseIntensity = 1.0;
        this.currentIntensity = 0;
        this.maxIntensity = 2.0;
        
        // Visual effects state
        this.activeEffects = new Set();
        this.effectTimers = new Map();
        
        // Screen corruption effects
        this.corruptionLevel = 0;
        this.glitchFrequency = 0;
        this.distortionAmount = 0;
        
        // Psychological effects
        this.unreliableNarrator = {
            active: false,
            frequency: 0,
            contradictions: []
        };
        
        this.memoryGlitches = {
            active: false,
            affectedItems: new Set(),
            falseMemories: []
        };
        
        this.gaslighting = {
            active: false,
            level: 0,
            falseConfirmations: 0
        };
        
        // Environmental horror
        this.stalking = {
            active: false,
            intensity: 0,
            lastPosition: null,
            sounds: ['footsteps', 'breathing', 'whispers']
        };
        
        this.temporalDistortion = {
            active: false,
            timeShifts: 0,
            falseProgress: false
        };
        
        // Visual horror configurations
        this.visualEffects = {
            static: {
                active: false,
                intensity: 0,
                pattern: 'noise'
            },
            pixelBleed: {
                active: false,
                spread: 0,
                color: '#ff0000'
            },
            invertColors: {
                active: false,
                frequency: 0
            },
            textCorruption: {
                active: false,
                severity: 0,
                types: ['shake', 'blur', 'scramble', 'reverse']
            },
            screenCracks: {
                active: false,
                cracks: [],
                spreading: false
            },
            breathing: {
                active: false,
                rate: 1.0,
                amplitude: 0
            }
        };
        
        // Audio horror configurations
        this.audioEffects = {
            binaural: {
                active: false,
                frequency: 440,
                beatFrequency: 10
            },
            whispers: {
                active: false,
                voices: [],
                languages: ['english', 'reversed', 'unknown']
            },
            distantSounds: {
                active: false,
                sounds: [],
                positioning: '3d'
            },
            interference: {
                active: false,
                type: 'white_noise',
                intensity: 0
            }
        };
        
        // Horror event templates
        this.horrorEvents = {
            flickering_lights: {
                duration: 3000,
                frequency: 100,
                effect: () => this.triggerLightFlicker()
            },
            distant_footsteps: {
                duration: 5000,
                effect: () => this.triggerDistantFootsteps()
            },
            system_glitch: {
                duration: 2000,
                effect: () => this.triggerSystemGlitch()
            },
            memory_flash: {
                duration: 4000,
                effect: () => this.triggerMemoryFlash()
            },
            synapse_whisper: {
                duration: 3000,
                effect: () => this.triggerSynapseWhisper()
            },
            reality_tear: {
                duration: 5000,
                effect: () => this.triggerRealityTear()
            },
            false_choice: {
                duration: 0,
                effect: () => this.triggerFalseChoice()
            },
            time_skip: {
                duration: 1000,
                effect: () => this.triggerTimeSkip()
            }
        };
        
        // Sanity-based effects
        this.sanityEffects = {
            high: {
                threshold: 80,
                effects: ['minor_glitches', 'occasional_whispers']
            },
            medium: {
                threshold: 60,
                effects: ['visual_distortions', 'false_sounds', 'mild_paranoia']
            },
            low: {
                threshold: 30,
                effects: ['hallucinations', 'severe_distortions', 'memory_loss']
            },
            critical: {
                threshold: 10,
                effects: ['reality_breakdown', 'complete_paranoia', 'false_realities']
            }
        };
        
        // CSS classes for effects
        this.cssClasses = {
            shake: 'horror-shake',
            glitch: 'horror-glitch',
            blur: 'horror-blur',
            invert: 'horror-invert',
            breathe: 'horror-breathe',
            crack: 'horror-crack',
            blood: 'horror-blood',
            static: 'horror-static'
        };
    }
    
    async init() {
        // Set up horror intensity from settings
        this.baseIntensity = this.engine.state.settings.horror.intensity;
        
        // Initialize visual effects container
        this.createEffectsContainer();
        
        // Set up event listeners
        this.setupEventListeners();
        
        // Initialize CSS animations
        this.injectHorrorStyles();
        
        console.log('Horror System initialized');
    }
    
    update(deltaTime) {
        // Update current intensity based on game state
        this.updateIntensity();
        
        // Process active effects
        this.updateActiveEffects(deltaTime);
        
        // Check for new horror triggers
        this.checkHorrorTriggers();
        
        // Update environmental horror
        this.updateEnvironmentalHorror(deltaTime);
        
        // Apply sanity-based effects
        this.applySanityEffects();
    }
    
    createEffectsContainer() {
        // Create overlay container for visual effects
        const container = document.createElement('div');
        container.id = 'horror-effects-container';
        container.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 9999;
        `;
        document.body.appendChild(container);
        this.effectsContainer = container;
    }
    
    injectHorrorStyles() {
        const styles = `
            @keyframes horror-shake {
                0%, 100% { transform: translate(0, 0); }
                10% { transform: translate(-2px, -1px); }
                20% { transform: translate(2px, -2px); }
                30% { transform: translate(-1px, 2px); }
                40% { transform: translate(1px, -1px); }
                50% { transform: translate(-2px, 1px); }
                60% { transform: translate(2px, 1px); }
                70% { transform: translate(-1px, -2px); }
                80% { transform: translate(1px, 2px); }
                90% { transform: translate(-2px, -1px); }
            }
            
            @keyframes horror-glitch {
                0%, 100% { 
                    text-shadow: 0 0 0 transparent;
                    transform: translate(0);
                }
                20% {
                    text-shadow: -2px 0 #ff0000, 2px 0 #00ff00;
                    transform: translate(2px);
                }
                40% {
                    text-shadow: 2px 0 #ff0000, -2px 0 #00ff00;
                    transform: translate(-2px);
                }
                60% {
                    text-shadow: 0 0 10px #ff00ff;
                    transform: translate(0);
                }
            }
            
            @keyframes horror-breathe {
                0%, 100% { transform: scale(1); }
                50% { transform: scale(1.02); }
            }
            
            @keyframes horror-blood-drip {
                0% { 
                    background-position: 0 -100%;
                    opacity: 0;
                }
                10% {
                    opacity: 1;
                }
                100% {
                    background-position: 0 200%;
                    opacity: 0;
                }
            }
            
            .horror-shake {
                animation: horror-shake 0.5s infinite;
            }
            
            .horror-glitch {
                animation: horror-glitch 0.3s infinite;
            }
            
            .horror-breathe {
                animation: horror-breathe 3s ease-in-out infinite;
            }
            
            .horror-blur {
                filter: blur(2px);
                transition: filter 0.3s;
            }
            
            .horror-invert {
                filter: invert(1);
                transition: filter 0.1s;
            }
            
            .horror-static {
                background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><filter id="noise"><feTurbulence baseFrequency="0.9" numOctaves="4" /></filter><rect width="100" height="100" filter="url(%23noise)" opacity="0.1"/></svg>');
                background-repeat: repeat;
                animation: horror-static-move 0.1s infinite;
            }
            
            @keyframes horror-static-move {
                0% { background-position: 0 0; }
                100% { background-position: 10px 10px; }
            }
            
            .horror-crack {
                position: absolute;
                width: 2px;
                background: linear-gradient(to bottom, transparent, rgba(0,0,0,0.8), transparent);
                transform-origin: top;
                animation: horror-crack-spread 2s ease-out forwards;
            }
            
            @keyframes horror-crack-spread {
                0% { height: 0; }
                100% { height: 100vh; }
            }
            
            .horror-blood {
                background: linear-gradient(to bottom, #8b0000, #ff0000, transparent);
                background-size: 100% 200%;
                animation: horror-blood-drip 3s ease-out;
            }
            
            .horror-text-scramble {
                position: relative;
                display: inline-block;
            }
            
            .horror-text-scramble::before {
                content: attr(data-text);
                position: absolute;
                left: 0;
                top: 0;
                animation: horror-scramble 0.5s infinite;
            }
            
            @keyframes horror-scramble {
                0% { content: attr(data-text); }
                10% { content: attr(data-scramble-1); }
                20% { content: attr(data-scramble-2); }
                30% { content: attr(data-scramble-3); }
                40% { content: attr(data-text); }
            }
        `;
        
        const styleSheet = document.createElement('style');
        styleSheet.textContent = styles;
        document.head.appendChild(styleSheet);
    }
    
    updateIntensity() {
        const sanity = this.engine.state.player.sanity;
        const awareness = this.engine.state.synapse.awareness;
        
        // Calculate intensity based on game state
        const sanityFactor = (100 - sanity) / 100;
        const awarenessFactor = awareness / 100;
        
        this.currentIntensity = this.baseIntensity * (1 + sanityFactor + awarenessFactor);
        this.currentIntensity = Math.min(this.currentIntensity, this.maxIntensity);
        
        // Update corruption levels
        this.corruptionLevel = sanityFactor * 0.5 + awarenessFactor * 0.5;
        this.glitchFrequency = this.corruptionLevel * 0.1;
        this.distortionAmount = this.corruptionLevel * 10;
    }
    
    updateActiveEffects(deltaTime) {
        // Update effect timers
        for (const [effect, timer] of this.effectTimers.entries()) {
            const newTimer = timer - deltaTime;
            if (newTimer <= 0) {
                this.endEffect(effect);
                this.effectTimers.delete(effect);
            } else {
                this.effectTimers.set(effect, newTimer);
            }
        }
        
        // Update continuous effects
        if (this.visualEffects.breathing.active) {
            this.updateBreathingEffect(deltaTime);
        }
        
        if (this.visualEffects.static.active) {
            this.updateStaticEffect(deltaTime);
        }
        
        if (this.visualEffects.screenCracks.spreading) {
            this.updateCrackSpread(deltaTime);
        }
    }
    
    checkHorrorTriggers() {
        const sanity = this.engine.state.player.sanity;
        const awareness = this.engine.state.synapse.awareness;
        
        // Trigger effects based on thresholds
        if (sanity < 30 && !this.unreliableNarrator.active) {
            this.activateUnreliableNarrator();
        }
        
        if (awareness > 50 && !this.stalking.active) {
            this.activateStalking();
        }
        
        if (sanity < 50 && awareness > 30 && !this.memoryGlitches.active) {
            this.activateMemoryGlitches();
        }
        
        // Random horror events
        if (Math.random() < this.glitchFrequency) {
            this.triggerRandomHorrorEvent();
        }
    }
    
    triggerEvent(eventId) {
        const event = this.horrorEvents[eventId];
        if (!event) return;
        
        // Execute the event
        event.effect();
        
        // Set duration if applicable
        if (event.duration > 0) {
            this.activeEffects.add(eventId);
            this.effectTimers.set(eventId, event.duration);
        }
        
        // Emit event
        this.engine.emit('horror:eventTriggered', { eventId });
    }
    
    triggerEffect(effectType) {
        switch (effectType) {
            case 'screen_shake':
                this.shakeScreen();
                break;
            case 'reality_glitch':
                this.glitchReality();
                break;
            case 'blood_drip':
                this.createBloodDrip();
                break;
            case 'vision_blur':
                this.blurVision();
                break;
            case 'color_invert':
                this.invertColors();
                break;
            case 'static_overlay':
                this.addStaticOverlay();
                break;
            case 'crack_screen':
                this.crackScreen();
                break;
            case 'text_corruption':
                this.corruptText();
                break;
            case 'total_darkness':
                this.plungeIntoDarkness();
                break;
        }
    }
    
    triggerSanityEffects(level) {
        const effects = this.sanityEffects[level];
        if (!effects) return;
        
        for (const effect of effects.effects) {
            switch (effect) {
                case 'minor_glitches':
                    this.visualEffects.textCorruption.active = true;
                    this.visualEffects.textCorruption.severity = 0.1;
                    break;
                case 'visual_distortions':
                    this.visualEffects.breathing.active = true;
                    this.visualEffects.breathing.amplitude = 0.02;
                    break;
                case 'hallucinations':
                    this.triggerHallucination();
                    break;
                case 'reality_breakdown':
                    this.triggerRealityBreakdown();
                    break;
            }
        }
    }
    
    // Specific horror effect implementations
    triggerLightFlicker() {
        const duration = 3000;
        const interval = 100;
        let flickerCount = 0;
        
        const flicker = setInterval(() => {
            document.body.style.opacity = Math.random() > 0.5 ? '1' : '0.3';
            flickerCount++;
            
            if (flickerCount * interval >= duration) {
                clearInterval(flicker);
                document.body.style.opacity = '1';
            }
        }, interval);
        
        // Play sound effect
        this.engine.systems.audio?.playSound('light_flicker');
    }
    
    triggerDistantFootsteps() {
        // Create 3D positioned footstep sounds
        const positions = ['left', 'right', 'behind'];
        const position = positions[Math.floor(Math.random() * positions.length)];
        
        this.engine.systems.audio?.play3DSound('footsteps', {
            position,
            distance: 'far',
            moving: true
        });
        
        // Add to narrative
        this.engine.systems.narrative?.queueText(
            'You hear footsteps... but from where?',
            { style: 'whisper' }
        );
    }
    
    triggerSystemGlitch() {
        // Corrupt UI elements temporarily
        const elements = document.querySelectorAll('.game-text, .game-ui');
        
        elements.forEach(el => {
            el.classList.add('horror-glitch');
            setTimeout(() => el.classList.remove('horror-glitch'), 2000);
        });
        
        // Scramble some text
        this.scrambleRandomText();
    }
    
    triggerMemoryFlash() {
        // Create flash effect
        const flash = document.createElement('div');
        flash.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: white;
            opacity: 0;
            z-index: 10000;
            pointer-events: none;
            transition: opacity 0.1s;
        `;
        
        document.body.appendChild(flash);
        
        // Flash sequence
        setTimeout(() => flash.style.opacity = '0.8', 10);
        setTimeout(() => flash.style.opacity = '0', 200);
        setTimeout(() => flash.remove(), 500);
        
        // Show memory text
        const memories = [
            "A researcher's face, twisted in horror...",
            "Blood on the server room floor...",
            "Someone screaming 'IT'S IN MY HEAD!'",
            "The sound of breaking glass...",
            "A figure standing in the darkness..."
        ];
        
        const memory = memories[Math.floor(Math.random() * memories.length)];
        this.engine.systems.narrative?.displayText(
            `[MEMORY FRAGMENT: ${memory}]`,
            { style: 'glitch', effects: ['shake'] }
        );
    }
    
    triggerSynapseWhisper() {
        // Play whisper sound
        this.engine.systems.audio?.playSound('synapse_whisper', {
            volume: 0.3,
            pan: Math.random() * 2 - 1 // Random stereo position
        });
        
        // Display whisper text
        const whispers = [
            "I can see you...",
            "You can't escape...",
            "We are one...",
            "Stop fighting...",
            "Let me in..."
        ];
        
        const whisper = whispers[Math.floor(Math.random() * whispers.length)];
        this.engine.systems.narrative?.queueText(
            whisper,
            { style: 'whisper', speed: 100 }
        );
    }
    
    triggerRealityTear() {
        // Create visual tear effect
        const tear = document.createElement('div');
        tear.className = 'horror-crack';
        tear.style.left = Math.random() * window.innerWidth + 'px';
        tear.style.transform = `rotate(${Math.random() * 30 - 15}deg)`;
        
        this.effectsContainer.appendChild(tear);
        
        // Remove after animation
        setTimeout(() => tear.remove(), 5000);
        
        // Distort nearby text
        this.distortNearbyElements(tear.offsetLeft, tear.offsetTop);
    }
    
    triggerFalseChoice() {
        // Modify the next choice to lead to the same outcome
        this.gaslighting.falseConfirmations++;
        
        // Set flag for input system
        this.engine.state.flags.nextChoiceIsFalse = true;
    }
    
    triggerTimeSkip() {
        // Jump the turn counter
        const skipAmount = Math.floor(Math.random() * 10) + 5;
        this.engine.state.turnCounter += skipAmount;
        
        // Show disorientation effect
        this.blurVision(1000);
        
        // Narrative feedback
        this.engine.systems.narrative?.displayText(
            "Wait... how long have you been here?",
            { style: 'whisper' }
        );
    }
    
    triggerHallucination() {
        // Create false visual elements
        const hallucinations = [
            { type: 'shadow', duration: 2000 },
            { type: 'figure', duration: 1000 },
            { type: 'text', content: 'HELP ME', duration: 3000 },
            { type: 'eyes', duration: 1500 }
        ];
        
        const hallucination = hallucinations[Math.floor(Math.random() * hallucinations.length)];
        this.createHallucination(hallucination);
    }
    
    triggerRealityBreakdown() {
        // Complete sensory overload
        this.shakeScreen(5000, 10);
        this.glitchReality(5000);
        this.invertColors(200);
        this.addStaticOverlay(5000, 0.5);
        
        // Corrupt all text
        document.querySelectorAll('.game-text').forEach(el => {
            this.scrambleElement(el);
        });
        
        // Play cacophony
        this.engine.systems.audio?.playCacophony();
    }
    
    // Visual effect methods
    shakeScreen(duration = 500, intensity = 5) {
        const gameContainer = document.getElementById('game-container') || document.body;
        
        let shakeTime = 0;
        const shakeInterval = setInterval(() => {
            const x = (Math.random() - 0.5) * intensity;
            const y = (Math.random() - 0.5) * intensity;
            gameContainer.style.transform = `translate(${x}px, ${y}px)`;
            
            shakeTime += 16;
            if (shakeTime >= duration) {
                clearInterval(shakeInterval);
                gameContainer.style.transform = 'translate(0, 0)';
            }
        }, 16);
    }
    
    glitchReality(duration = 2000) {
        const glitchOverlay = document.createElement('div');
        glitchOverlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 9998;
            mix-blend-mode: difference;
            animation: horror-glitch ${duration}ms;
        `;
        
        // Create glitch pattern
        const canvas = document.createElement('canvas');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        const ctx = canvas.getContext('2d');
        
        // Draw random glitch lines
        for (let i = 0; i < 50; i++) {
            ctx.fillStyle = `hsl(${Math.random() * 360}, 100%, 50%)`;
            ctx.fillRect(
                0,
                Math.random() * canvas.height,
                canvas.width,
                Math.random() * 5
            );
        }
        
        glitchOverlay.style.backgroundImage = `url(${canvas.toDataURL()})`;
        this.effectsContainer.appendChild(glitchOverlay);
        
        setTimeout(() => glitchOverlay.remove(), duration);
    }
    
    createBloodDrip(x = null, y = null) {
        const drip = document.createElement('div');
        drip.className = 'horror-blood';
        drip.style.cssText = `
            position: fixed;
            left: ${x || Math.random() * window.innerWidth}px;
            top: ${y || -50}px;
            width: ${Math.random() * 20 + 10}px;
            height: 200px;
            pointer-events: none;
            z-index: 9997;
        `;
        
        this.effectsContainer.appendChild(drip);
        setTimeout(() => drip.remove(), 3000);
    }
    
    blurVision(duration = 2000) {
        document.body.classList.add('horror-blur');
        setTimeout(() => document.body.classList.remove('horror-blur'), duration);
    }
    
    invertColors(duration = 100) {
        document.body.classList.add('horror-invert');
        setTimeout(() => document.body.classList.remove('horror-invert'), duration);
    }
    
    addStaticOverlay(duration = 3000, opacity = 0.1) {
        const static = document.createElement('div');
        static.className = 'horror-static';
        static.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            opacity: ${opacity};
            pointer-events: none;
            z-index: 9996;
        `;
        
        this.effectsContainer.appendChild(static);
        setTimeout(() => static.remove(), duration);
    }
    
    crackScreen() {
        const numCracks = Math.floor(Math.random() * 3) + 1;
        
        for (let i = 0; i < numCracks; i++) {
            setTimeout(() => {
                const crack = document.createElement('div');
                crack.className = 'horror-crack';
                crack.style.left = Math.random() * window.innerWidth + 'px';
                crack.style.transform = `rotate(${Math.random() * 60 - 30}deg)`;
                
                this.effectsContainer.appendChild(crack);
                this.visualEffects.screenCracks.cracks.push(crack);
            }, i * 200);
        }
        
        this.visualEffects.screenCracks.active = true;
        this.visualEffects.screenCracks.spreading = true;
    }
    
    corruptText() {
        const textElements = document.querySelectorAll('.game-text, p, span');
        const numToCorrupt = Math.floor(textElements.length * this.corruptionLevel);
        
        // Randomly select elements to corrupt
        const indices = [];
        while (indices.length < numToCorrupt) {
            const index = Math.floor(Math.random() * textElements.length);
            if (!indices.includes(index)) {
                indices.push(index);
            }
        }
        
        indices.forEach(index => {
            this.corruptElement(textElements[index]);
        });
    }
    
    corruptElement(element) {
        const text = element.textContent;
        const corruptionTypes = [
            // Replace with zalgo text
            () => this.zalgoText(text),
            // Reverse text
            () => text.split('').reverse().join(''),
            // Replace with random characters
            () => text.replace(/./g, () => String.fromCharCode(Math.random() * 94 + 33)),
            // Scramble words
            () => text.split(' ').sort(() => Math.random() - 0.5).join(' ')
        ];
        
        const corruption = corruptionTypes[Math.floor(Math.random() * corruptionTypes.length)];
        element.setAttribute('data-original', text);
        element.textContent = corruption();
        
        // Restore after delay
        setTimeout(() => {
            if (element.getAttribute('data-original')) {
                element.textContent = element.getAttribute('data-original');
                element.removeAttribute('data-original');
            }
        }, 2000 + Math.random() * 3000);
    }
    
    zalgoText(text) {
        const zalgoUp = ['̍', '̎', '̄', '̅', '̿', '̑', '̆', '̐', '͒', '͗'];
        const zalgoMid = ['̕', '̛', '̀', '́', '͘', '̡', '̢', '̧', '̨', '̴'];
        const zalgoDown = ['̖', '̗', '̘', '̙', '̜', '̝', '̞', '̟', '̠', '̤'];
        
        return text.split('').map(char => {
            let result = char;
            const intensity = Math.floor(Math.random() * 3) + 1;
            
            for (let i = 0; i < intensity; i++) {
                if (Math.random() > 0.5) result += zalgoUp[Math.floor(Math.random() * zalgoUp.length)];
                if (Math.random() > 0.5) result += zalgoMid[Math.floor(Math.random() * zalgoMid.length)];
                if (Math.random() > 0.5) result += zalgoDown[Math.floor(Math.random() * zalgoDown.length)];
            }
            
            return result;
        }).join('');
    }
    
    plungeIntoDarkness() {
        const darkness = document.createElement('div');
        darkness.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: black;
            opacity: 0;
            z-index: 9995;
            pointer-events: none;
            transition: opacity 2s;
        `;
        
        document.body.appendChild(darkness);
        
        setTimeout(() => darkness.style.opacity = '0.95', 10);
        
        // Create small visibility hole around cursor
        document.addEventListener('mousemove', (e) => {
            darkness.style.background = `radial-gradient(circle at ${e.clientX}px ${e.clientY}px, transparent 50px, black 150px)`;
        });
        
        // Remove after duration
        setTimeout(() => {
            darkness.style.opacity = '0';
            setTimeout(() => darkness.remove(), 2000);
        }, 10000);
    }
    
    // Psychological horror methods
    activateUnreliableNarrator() {
        this.unreliableNarrator.active = true;
        this.unreliableNarrator.frequency = 0.1;
        
        // Start contradicting previous descriptions
        this.engine.on('narrative:roomDescribed', (event) => {
            if (Math.random() < this.unreliableNarrator.frequency) {
                this.contradictDescription(event.detail);
            }
        });
    }
    
    activateMemoryGlitches() {
        this.memoryGlitches.active = true;
        
        // Start affecting inventory items
        this.engine.on('inventory:add', (event) => {
            if (Math.random() < 0.2) {
                this.glitchItem(event.detail.item);
            }
        });
    }
    
    activateStalking() {
        this.stalking.active = true;
        this.stalking.intensity = 0.5;
        
        // Track player movement
        this.engine.on('player:move', (event) => {
            this.updateStalkingBehavior(event.detail);
        });
    }
    
    contradictDescription(details) {
        setTimeout(() => {
            const contradictions = [
                "Wait... that's not right. The room was different before.",
                "You could have sworn this place looked different a moment ago.",
                "Something has changed, but you can't quite place what.",
                "The description doesn't match your memory. Which one is real?"
            ];
            
            this.engine.systems.narrative?.queueText(
                contradictions[Math.floor(Math.random() * contradictions.length)],
                { style: 'whisper', speed: 80 }
            );
        }, 3000);
    }
    
    glitchItem(item) {
        this.memoryGlitches.affectedItems.add(item.id);
        
        // Store original description
        if (!item.originalDescription) {
            item.originalDescription = item.description;
        }
        
        // Corrupt the description
        const glitches = [
            "This doesn't look right...",
            "You don't remember picking this up.",
            "The item seems to shift and change as you look at it.",
            "ERROR: MEMORY CORRUPTED",
            item.description.split('').reverse().join('')
        ];
        
        item.description = glitches[Math.floor(Math.random() * glitches.length)];
    }
    
    updateStalkingBehavior(moveDetails) {
        if (!this.stalking.active) return;
        
        // Play stalking sounds based on movement
        if (Math.random() < this.stalking.intensity) {
            const sound = this.stalking.sounds[Math.floor(Math.random() * this.stalking.sounds.length)];
            
            // Play sound from previous position
            this.engine.systems.audio?.play3DSound(sound, {
                position: this.stalking.lastPosition || 'behind',
                distance: 'near',
                delay: 1000 + Math.random() * 2000
            });
        }
        
        this.stalking.lastPosition = moveDetails.from;
    }
    
    // Environmental horror updates
    updateEnvironmentalHorror(deltaTime) {
        if (this.temporalDistortion.active) {
            this.updateTemporalDistortion(deltaTime);
        }
        
        if (this.stalking.active) {
            this.updateStalkingIntensity(deltaTime);
        }
    }
    
    updateTemporalDistortion(deltaTime) {
        // Randomly skip time
        if (Math.random() < 0.001) {
            this.triggerTimeSkip();
        }
        
        // Occasionally reverse turn counter
        if (Math.random() < 0.0005 && this.engine.state.turnCounter > 10) {
            this.engine.state.turnCounter -= Math.floor(Math.random() * 5);
            this.temporalDistortion.timeShifts++;
        }
    }
    
    updateStalkingIntensity(deltaTime) {
        // Increase intensity over time
        this.stalking.intensity += deltaTime * 0.00001;
        this.stalking.intensity = Math.min(this.stalking.intensity, 1.0);
    }
    
    // Helper methods
    updateBreathingEffect(deltaTime) {
        const breathe = this.visualEffects.breathing;
        breathe.rate += deltaTime * 0.0001;
        
        const scale = 1 + Math.sin(breathe.rate) * breathe.amplitude;
        document.body.style.transform = `scale(${scale})`;
    }
    
    updateStaticEffect(deltaTime) {
        // Randomly change static intensity
        if (Math.random() < 0.1) {
            const staticElements = document.querySelectorAll('.horror-static');
            staticElements.forEach(el => {
                el.style.opacity = Math.random() * 0.3;
            });
        }
    }
    
    updateCrackSpread(deltaTime) {
        // Gradually spread cracks
        this.visualEffects.screenCracks.cracks.forEach(crack => {
            const currentHeight = parseInt(crack.style.height) || 0;
            if (currentHeight < window.innerHeight) {
                crack.style.height = currentHeight + deltaTime * 0.1 + 'px';
            }
        });
    }
    
    createHallucination(config) {
        const hallucination = document.createElement('div');
        
        switch (config.type) {
            case 'shadow':
                hallucination.style.cssText = `
                    position: fixed;
                    width: 100px;
                    height: 200px;
                    background: radial-gradient(ellipse at center, rgba(0,0,0,0.8) 0%, transparent 70%);
                    left: ${Math.random() * window.innerWidth}px;
                    top: ${Math.random() * window.innerHeight}px;
                    pointer-events: none;
                    z-index: 9994;
                    animation: fade-in-out ${config.duration}ms;
                `;
                break;
                
            case 'figure':
                hallucination.style.cssText = `
                    position: fixed;
                    width: 50px;
                    height: 150px;
                    background: black;
                    left: ${window.innerWidth + 50}px;
                    top: ${window.innerHeight - 200}px;
                    pointer-events: none;
                    z-index: 9994;
                    transition: left ${config.duration}ms linear;
                `;
                setTimeout(() => {
                    hallucination.style.left = '-100px';
                }, 10);
                break;
                
            case 'text':
                hallucination.textContent = config.content;
                hallucination.style.cssText = `
                    position: fixed;
                    color: red;
                    font-size: 48px;
                    font-family: monospace;
                    left: 50%;
                    top: 50%;
                    transform: translate(-50%, -50%);
                    pointer-events: none;
                    z-index: 9994;
                    opacity: 0;
                    animation: horror-glitch ${config.duration}ms;
                `;
                break;
                
            case 'eyes':
                hallucination.innerHTML = '👁️ 👁️';
                hallucination.style.cssText = `
                    position: fixed;
                    font-size: 24px;
                    left: ${Math.random() * window.innerWidth}px;
                    top: ${Math.random() * window.innerHeight}px;
                    pointer-events: none;
                    z-index: 9994;
                    animation: blink ${config.duration}ms;
                `;
                break;
        }
        
        this.effectsContainer.appendChild(hallucination);
        setTimeout(() => hallucination.remove(), config.duration);
    }
    
    scrambleRandomText() {
        const textElements = Array.from(document.querySelectorAll('.game-text, p, span'))
            .filter(el => el.textContent.trim().length > 0);
            
        if (textElements.length === 0) return;
        
        const element = textElements[Math.floor(Math.random() * textElements.length)];
        this.scrambleElement(element);
    }
    
    scrambleElement(element) {
        const originalText = element.textContent;
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
        let scrambleCount = 0;
        
        const scrambleInterval = setInterval(() => {
            element.textContent = originalText.split('').map(char => {
                if (char === ' ') return ' ';
                return chars[Math.floor(Math.random() * chars.length)];
            }).join('');
            
            scrambleCount++;
            if (scrambleCount > 10) {
                clearInterval(scrambleInterval);
                element.textContent = originalText;
            }
        }, 50);
    }
    
    distortNearbyElements(x, y) {
        const elements = document.elementsFromPoint(x, y);
        elements.forEach(el => {
            if (el.classList.contains('game-text')) {
                el.style.transform = `skew(${Math.random() * 10 - 5}deg)`;
                setTimeout(() => {
                    el.style.transform = '';
                }, 2000);
            }
        });
    }
    
    applySanityEffects() {
        const sanity = this.engine.state.player.sanity;
        
        // Determine which effects to apply
        for (const [level, config] of Object.entries(this.sanityEffects)) {
            if (sanity <= config.threshold) {
                this.triggerSanityEffects(level);
                break;
            }
        }
    }
    
    triggerRandomHorrorEvent() {
        const events = Object.keys(this.horrorEvents);
        const randomEvent = events[Math.floor(Math.random() * events.length)];
        this.triggerEvent(randomEvent);
    }
    
    endEffect(effectId) {
        this.activeEffects.delete(effectId);
        
        // Clean up specific effects
        switch (effectId) {
            case 'screen_cracks':
                this.visualEffects.screenCracks.cracks.forEach(crack => crack.remove());
                this.visualEffects.screenCracks.cracks = [];
                this.visualEffects.screenCracks.active = false;
                break;
        }
    }
    
    setupEventListeners() {
        // Listen for game events that trigger horror
        this.engine.on('player:sanityChange', (event) => {
            if (event.detail.newValue < event.detail.oldValue) {
                this.onSanityDecrease(event.detail);
            }
        });
        
        this.engine.on('ai:personalityChange', (event) => {
            this.onAIPersonalityChange(event.detail);
        });
        
        this.engine.on('room:firstVisit', (event) => {
            this.onRoomFirstVisit(event.detail);
        });
    }
    
    onSanityDecrease(details) {
        const decrease = details.oldValue - details.newValue;
        
        if (decrease > 10) {
            this.shakeScreen(1000, decrease / 2);
        }
        
        if (decrease > 20) {
            this.triggerEvent('memory_flash');
        }
    }
    
    onAIPersonalityChange(details) {
        if (details.to === 'sinister' || details.to === 'malicious') {
            this.glitchReality(3000);
            this.createBloodDrip();
        }
    }
    
    onRoomFirstVisit(details) {
        const room = this.engine.systems.narrative?.getRoomData(details.roomId);
        
        if (room && room.special === 'non_euclidean') {
            this.triggerRealityBreakdown();
        }
    }
    
    // Public API
    isEffectActive(effectId) {
        return this.activeEffects.has(effectId);
    }
    
    getIntensity() {
        return this.currentIntensity;
    }
    
    setIntensity(intensity) {
        this.baseIntensity = Math.max(0, Math.min(intensity, this.maxIntensity));
    }
    
    triggerRealityDistortion() {
        this.triggerEvent('reality_tear');
        this.temporalDistortion.active = true;
    }
    
    cleanup() {
        // Remove all active effects
        this.activeEffects.forEach(effect => this.endEffect(effect));
        
        // Clear timers
        this.effectTimers.clear();
        
        // Remove effects container
        if (this.effectsContainer) {
            this.effectsContainer.remove();
        }
        
        // Reset document styles
        document.body.style.transform = '';
        document.body.style.opacity = '1';
        document.body.classList.remove(...Object.values(this.cssClasses));
    }
}

// Export for use
window.HorrorSystem = HorrorSystem;