import { GameState, stateSnapshots, currentLanguage, animationFrameId, UI, currentTextSpeed } from './game.js';
import { updateUIText, showModal, hideModal } from './ui.js';
import { getRandomElement, getRandomNumber } from './utils.js';

// --- ENUMS & CONSTANTS ---
const ChatbotTone = { Friendly: 'Friendly', Ambiguous: 'Ambiguous', Sinister: 'Sinister', Malicious: 'Malicious' };
const ItemType = { Tool: 'Tool', Consumable: 'Consumable', Key: 'Key', Log: 'Log', Puzzle: 'Puzzle', Weapon: 'Weapon' };
const Difficulty = { Beginner: 'Beginner', Easy: 'Easy', Normal: 'Normal', Hard: 'Hard', Nightmare: 'Nightmare' };
const TextSpeed = { Fast: 5, Normal: 15, Slow: 30 };
const MAX_INVENTORY_WEIGHT = 5;
const ENDINGS_STORAGE_KEY = 'synapse_endings_unlocked_v15';
const ACHIEVEMENTS_STORAGE_KEY = 'synapse_achievements_unlocked_v15';
const SETTINGS_KEY = 'synapse_settings_v15';
const PLAYER_CHOICES_KEY = 'synapse_player_choices_v15'; // New key for player choices
const GUIDANCE_COLOR = '#34d399';
const questionWords = {
    'en': ['who', 'what', 'where', 'when', 'why', 'how', 'are', 'is', 'can', 'do', 'does', 'did', 'which'],
    'sv': ['vem', 'vad', 'var', 'när', 'varför', 'hur', 'är', 'kan', 'gör', 'gjorde', 'vilken', 'vilket', 'vilka']
};