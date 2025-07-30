// js/audio.js - Complete audio system with Tone.js

import { GameState } from './game.js';

// Audio State
const AudioState = {
    initialized: false,
    context: null,
    sounds: {},
    ambientLayers: [],
    musicLayers: [],
    currentAmbient: null,
    currentMusic: null,
    spatialSounds: new Map(),
    whisperVoices: [],
    heartbeatSynth: null,
    staticNoise: null
};

// Initialize Tone.js
export async function initializeAudio() {
    if (AudioState.initialized) return;
    
    try {
        await Tone.start();
        AudioState.context = Tone.context;
        AudioState.initialized = true;
        
        // Create audio nodes
        createAudioNodes();
        
        // Load sound effects
        await loadSoundEffects();
        
        console.log('Audio system initialized');
        
    } catch (error) {
        console.error('Failed to initialize audio:', error);
        AudioState.initialized = false;
    }
}

// Create audio synthesis nodes
function createAudioNodes() {
    // Heartbeat synth
    AudioState.heartbeatSynth = new Tone.MembraneSynth({
        pitchDecay: 0.01,
        octaves: 2,
        oscillator: { type: 'sine' },
        envelope: {
            attack: 0.001,
            decay: 0.4,
            sustain: 0.01,
            release: 1.4,
            attackCurve: 'exponential'
        }
    }).toDestination();
    
    // Static noise generator
    AudioState.staticNoise = new Tone.Noise('white').toDestination();
    AudioState.staticNoise.volume.value = -30;
    
    // Whisper voices (using oscillators with filters)
    for (let i = 0; i < 3; i++) {
        const whisper = new Tone.Oscillator({
            frequency: 200 + (i * 50),
            type: 'sawtooth'
        });
        
        const filter = new Tone.Filter({
            frequency: 1000,
            type: 'bandpass',
            rolloff: -24
        });
        
        const tremolo = new Tone.Tremolo({
            frequency: 5 + (i * 2),
            depth: 0.5
        }).toDestination().start();
        
        whisper.connect(filter);
        filter.connect(tremolo);
        whisper.volume.value = -40;
        
        AudioState.whisperVoices.push({ osc: whisper, filter, tremolo });
    }
}

// Load sound effects
async function loadSoundEffects() {
    const soundUrls = {
        footstep: 'data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEAQB8AAIA+AAACABAAZGF0YQAAAAA=',
        door_open: 'data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEAQB8AAIA+AAACABAAZGF0YQAAAAA=',
        door_close: 'data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEAQB8AAIA+AAACABAAZGF0YQAAAAA=',
        glitch: 'data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEAQB8AAIA+AAACABAAZGF0YQAAAAA=',
        scream: 'data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEAQB8AAIA+AAACABAAZGF0YQAAAAA=',
        heartbeat: 'data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEAQB8AAIA+AAACABAAZGF0YQAAAAA=',
        static: 'data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEAQB8AAIA+AAACABAAZGF0YQAAAAA=',
        beep: 'data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEAQB8AAIA+AAACABAAZGF0YQAAAAA=',
        error: 'data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEAQB8AAIA+AAACABAAZGF0YQAAAAA=',
        success: 'data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEAQB8AAIA+AAACABAAZGF0YQAAAAA='
    };
    
    // For actual implementation, replace with real sound files
    // This is placeholder data
}

// Play sound effect
export function playSound(soundName, options = {}) {
    if (!AudioState.initialized || !GameState.settings.soundEnabled) return;
    
    const volume = (options.volume || 1) * GameState.settings.sfxVolume;
    
    try {
        switch (soundName) {
            case 'footstep':
                playFootstep(options);
                break;
                
            case 'heartbeat':
                playHeartbeat(options);
                break;
                
            case 'static':
                playStatic(options);
                break;
                
            case 'whisper':
                playWhisper(options);
                break;
                
            case 'glitch':
                playGlitch(options);
                break;
                
            default:
                // Play from loaded sounds
                if (AudioState.sounds[soundName]) {
                    const player = new Tone.Player(AudioState.sounds[soundName]).toDestination();
                    player.volume.value = Tone.gainToDb(volume);
                    player.start();
                }
        }
    } catch (error) {
        console.error(`Error playing sound ${soundName}:`, error);
    }
}

// Specific sound effect implementations
function playFootstep(options = {}) {
    const synth = new Tone.NoiseSynth({
        noise: { type: 'brown' },
        envelope: {
            attack: 0.01,
            decay: 0.1,
            sustain: 0,
            release: 0.1
        }
    }).toDestination();
    
    synth.volume.value = -20;
    synth.triggerAttackRelease('16n');
}

function playHeartbeat(options = {}) {
    const rate = options.rate || 60; // BPM
    const interval = 60000 / rate; // ms between beats
    
    if (AudioState.heartbeatInterval) {
        clearInterval(AudioState.heartbeatInterval);
    }
    
    AudioState.heartbeatInterval = setInterval(() => {
        AudioState.heartbeatSynth.triggerAttackRelease('C1', '8n');
        setTimeout(() => {
            AudioState.heartbeatSynth.triggerAttackRelease('C1', '8n');
        }, interval * 0.3);
    }, interval);
    
    if (options.duration) {
        setTimeout(() => stopHeartbeat(), options.duration);
    }
}

function stopHeartbeat() {
    if (AudioState.heartbeatInterval) {
        clearInterval(AudioState.heartbeatInterval);
        AudioState.heartbeatInterval = null;
    }
}

function playStatic(options = {}) {
    const duration = options.duration || 1000;
    
    AudioState.staticNoise.start();
    setTimeout(() => AudioState.staticNoise.stop(), duration);
}

function playWhisper(options = {}) {
    const whisperIndex = Math.floor(Math.random() * AudioState.whisperVoices.length);
    const whisper = AudioState.whisperVoices[whisperIndex];
    
    whisper.osc.start();
    
    // Modulate frequency for whisper effect
    const lfo = new Tone.LFO({
        frequency: Math.random() * 10 + 5,
        min: 150,
        max: 300
    }).connect(whisper.osc.frequency);
    lfo.start();
    
    setTimeout(() => {
        whisper.osc.stop();
        lfo.stop();
        lfo.dispose();
    }, options.duration || 2000);
}

function playGlitch(options = {}) {
    const glitchSynth = new Tone.FMSynth({
        harmonicity: 15,
        modulationIndex: 100,
        oscillator: { type: 'square' },
        envelope: {
            attack: 0.001,
            decay: 0.1,
            sustain: 0,
            release: 0.1
        },
        modulation: { type: 'square' },
        modulationEnvelope: {
            attack: 0.001,
            decay: 0.1,
            sustain: 0.5,
            release: 0.1
        }
    }).toDestination();
    
    glitchSynth.volume.value = -10;
    
    // Play random glitch notes
    for (let i = 0; i < 5; i++) {
        setTimeout(() => {
            const note = `${['C', 'D', 'E', 'F', 'G', 'A', 'B'][Math.floor(Math.random() * 7)]}${Math.floor(Math.random() * 3) + 2}`;
            glitchSynth.triggerAttackRelease(note, '32n');
        }, i * 50);
    }
    
    setTimeout(() => glitchSynth.dispose(), 1000);
}

// Ambient soundscape system
export function startAmbientSoundscape(type = 'normal') {
    if (!AudioState.initialized || !GameState.settings.soundEnabled) return;
    
    stopAmbientSoundscape();
    
    switch (type) {
        case 'normal':
            createNormalAmbient();
            break;
            
        case 'tense':
            createTenseAmbient();
            break;
            
        case 'horror':
            createHorrorAmbient();
            break;
            
        case 'glitched':
            createGlitchedAmbient();
            break;
    }
}

function createNormalAmbient() {
    // Low drone
    const drone = new Tone.Oscillator({
        frequency: 60,
        type: 'sine'
    }).toDestination();
    drone.volume.value = -30;
    drone.start();
    
    // Subtle noise
    const noise = new Tone.Noise('pink').toDestination();
    noise.volume.value = -40;
    noise.start();
    
    // Occasional mechanical sounds
    const mechLoop = new Tone.Loop((time) => {
        if (Math.random() < 0.3) {
            playSound('mechanical', { volume: 0.5 });
        }
    }, '4n').start();
    
    AudioState.ambientLayers = [drone, noise, mechLoop];
}

function createTenseAmbient() {
    // Dissonant drone
    const drone1 = new Tone.Oscillator(50, 'sine').toDestination();
    const drone2 = new Tone.Oscillator(51.5, 'sine').toDestination();
    drone1.volume.value = -25;
    drone2.volume.value = -25;
    drone1.start();
    drone2.start();
    
    // Rising tension
    const riser = new Tone.Oscillator({
        frequency: 100,
        type: 'sawtooth'
    }).toDestination();
    riser.volume.value = -35;
    riser.frequency.rampTo(200, 30);
    riser.start();
    
    AudioState.ambientLayers = [drone1, drone2, riser];
}

function createHorrorAmbient() {
    // Deep rumble
    const rumble = new Tone.Oscillator(30, 'sawtooth').toDestination();
    const filter = new Tone.Filter(100, 'lowpass').toDestination();
    rumble.connect(filter);
    rumble.volume.value = -20;
    rumble.start();
    
    // Whispers
    const whisperLoop = new Tone.Loop((time) => {
        if (Math.random() < 0.4) {
            playWhisper({ duration: Math.random() * 3000 + 1000 });
        }
    }, '2n').start();
    
    // Heartbeat (variable rate based on sanity)
    const heartRate = 60 + (100 - GameState.playerStats.sanity) * 1.5;
    playHeartbeat({ rate: heartRate });
    
    AudioState.ambientLayers = [rumble, filter, whisperLoop];
}

function createGlitchedAmbient() {
    // Glitchy artifacts
    const glitchLoop = new Tone.Loop((time) => {
        if (Math.random() < 0.6) {
            playGlitch();
        }
    }, '8n').start();
    
    // Digital noise bursts
    const noiseBurst = new Tone.NoiseSynth({
        noise: { type: 'white' },
        envelope: {
            attack: 0.001,
            decay: 0.05,
            sustain: 0,
            release: 0.05
        }
    }).toDestination();
    
    const burstLoop = new Tone.Loop((time) => {
        if (Math.random() < 0.3) {
            noiseBurst.triggerAttackRelease('32n');
        }
    }, '16n').start();
    
    AudioState.ambientLayers = [glitchLoop, burstLoop];
}

export function stopAmbientSoundscape() {
    AudioState.ambientLayers.forEach(layer => {
        if (layer.stop) layer.stop();
        if (layer.dispose) layer.dispose();
    });
    AudioState.ambientLayers = [];
    stopHeartbeat();
}

// 3D/Spatial audio
export function play3DSound(soundName, position = { x: 0, y: 0 }, options = {}) {
    if (!AudioState.initialized || !GameState.settings.binauralAudio) {
        return playSound(soundName, options);
    }
    
    const panner = new Tone.Panner3D({
        positionX: position.x,
        positionY: 0,
        positionZ: position.y,
        orientationX: 0,
        orientationY: 0,
        orientationZ: 1,
        distanceModel: 'inverse',
        refDistance: 1,
        maxDistance: 100,
        rolloffFactor: 1,
        coneInnerAngle: 360,
        coneOuterAngle: 0,
        coneOuterGain: 0
    }).toDestination();
    
    // Play sound through panner
    playSound(soundName, { ...options, output: panner });
    
    // Store for cleanup
    AudioState.spatialSounds.set(soundName + Date.now(), panner);
    
    // Auto cleanup after sound duration
    setTimeout(() => {
        panner.dispose();
    }, options.duration || 5000);
}

// Dynamic music system
export function startDynamicMusic(intensity = 0) {
    if (!AudioState.initialized || !GameState.settings.soundEnabled) return;
    
    stopDynamicMusic();
    
    // Create layered music based on intensity (0-1)
    const layers = [
        createMusicLayer('base', 0),      // Always playing
        createMusicLayer('tension', 0.3),  // Adds at 30% intensity
        createMusicLayer('danger', 0.6),   // Adds at 60% intensity
        createMusicLayer('climax', 0.9)    // Adds at 90% intensity
    ];
    
    layers.forEach((layer, index) => {
        if (intensity >= layer.threshold) {
            layer.synth.start();
        }
        AudioState.musicLayers.push(layer);
    });
}

function createMusicLayer(type, threshold) {
    let synth;
    
    switch (type) {
        case 'base':
            synth = new Tone.PolySynth(Tone.Synth, {
                oscillator: { type: 'sine' },
                envelope: {
                    attack: 2,
                    decay: 1,
                    sustain: 0.5,
                    release: 4
                }
            }).toDestination();
            synth.volume.value = -20;
            break;
            
        case 'tension':
            synth = new Tone.PolySynth(Tone.Synth, {
                oscillator: { type: 'triangle' },
                envelope: {
                    attack: 0.5,
                    decay: 0.5,
                    sustain: 0.7,
                    release: 2
                }
            }).toDestination();
            synth.volume.value = -25;
            break;
            
        case 'danger':
            synth = new Tone.MetalSynth({
                frequency: 200,
                envelope: {
                    attack: 0.001,
                    decay: 1.4,
                    release: 0.2
                },
                harmonicity: 5.1,
                modulationIndex: 32,
                resonance: 4000,
                octaves: 1.5
            }).toDestination();
            synth.volume.value = -30;
            break;
            
        case 'climax':
            synth = new Tone.FMSynth({
                harmonicity: 8,
                modulationIndex: 2,
                oscillator: { type: 'sawtooth' },
                envelope: {
                    attack: 0.1,
                    decay: 0.2,
                    sustain: 0.5,
                    release: 1
                },
                modulation: { type: 'square' }
            }).toDestination();
            synth.volume.value = -15;
            break;
    }
    
    return { type, threshold, synth };
}

export function updateMusicIntensity(intensity) {
    AudioState.musicLayers.forEach(layer => {
        if (intensity >= layer.threshold && !layer.playing) {
            layer.synth.start();
            layer.playing = true;
        } else if (intensity < layer.threshold && layer.playing) {
            layer.synth.stop();
            layer.playing = false;
        }
    });
}

export function stopDynamicMusic() {
    AudioState.musicLayers.forEach(layer => {
        if (layer.synth.stop) layer.synth.stop();
        if (layer.synth.dispose) layer.synth.dispose();
    });
    AudioState.musicLayers = [];
}

// Voice synthesis for SYNAPSE
export function speakText(text, personality = 'Friendly') {
    if (!AudioState.initialized || !GameState.settings.voiceEnabled) return;
    
    // Use Web Speech API as fallback
    if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(text);
        
        // Adjust voice parameters based on personality
        switch (personality) {
            case 'Friendly':
                utterance.pitch = 1.2;
                utterance.rate = 1.0;
                break;
            case 'Ambiguous':
                utterance.pitch = 1.0;
                utterance.rate = 0.9;
                break;
            case 'Sinister':
                utterance.pitch = 0.8;
                utterance.rate = 0.8;
                break;
            case 'Malicious':
                utterance.pitch = 0.6;
                utterance.rate = 0.7;
                break;
        }
        
        utterance.volume = GameState.settings.sfxVolume;
        speechSynthesis.speak(utterance);
    }
}

// Cleanup
export function cleanupAudio() {
    stopAllSounds();
    stopAmbientSoundscape();
    stopDynamicMusic();
    
    if (AudioState.context) {
        AudioState.context.close();
    }
    
    AudioState.initialized = false;
}

export function stopAllSounds() {
    // Stop all Tone.js sounds
    Tone.Transport.stop();
    Tone.Transport.cancel();
    
    // Clear spatial sounds
    AudioState.spatialSounds.forEach(panner => panner.dispose());
    AudioState.spatialSounds.clear();
    
    // Stop heartbeat
    stopHeartbeat();
    
    // Stop static
    if (AudioState.staticNoise) {
        AudioState.staticNoise.stop();
    }
    
    // Stop whispers
    AudioState.whisperVoices.forEach(whisper => {
        if (whisper.osc.state === 'started') {
            whisper.osc.stop();
        }
    });
}

// Auto-initialize on first user interaction
let audioInitialized = false;
document.addEventListener('click', async () => {
    if (!audioInitialized && GameState.settings.soundEnabled) {
        await initializeAudio();
        audioInitialized = true;
    }
}, { once: true });