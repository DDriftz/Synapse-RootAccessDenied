
// SYNAPSE: AI HORROR GAME - V2.5 BUGFIX UPDATE

// === NARRATIVE & STORYTELLING ENGINE ===
const STORY_NODES = {
    start: {
        id: 'start',
        text: "You awaken in a cold, dimly lit room. The hum of machinery echoes in the distance.",
        options: [
            { text: "Look around", next: "look_around" },
            { text: "Call out", next: "call_out" }
        ]
    },
    look_around: {
        id: 'look_around',
        text: "You see flickering monitors, a locked door, and a strange terminal.",
        options: [
            { text: "Examine terminal", next: "terminal" },
            { text: "Try the door", next: "door" }
        ]
    },
    call_out: {
        id: 'call_out',
        text: "Your voice echoes, but something feels off. Did you always sound like this?",
        options: [
            { text: "Look around", next: "look_around" }
        ]
    },
    terminal: {
        id: 'terminal',
        text: "The terminal flickers. 'WELCOME, USER.' For a moment, the text glitches: 'YOU DON'T BELONG HERE.'",
        options: [
            { text: "Type 'help'", next: "help_screen" },
            { text: "Step back", next: "look_around" }
        ]
    },
    door: {
        id: 'door',
        text: "The door is locked. You feel watched.",
        options: [
            { text: "Examine terminal", next: "terminal" }
        ]
    },
    help_screen: {
        id: 'help_screen',
        text: "A list of commands appears, but some are crossed out. Did you see that?",
        options: [
            { text: "Step back", next: "look_around" }
        ]
    }
    // ...expand with more nodes and endings...
};
let currentStoryNode = STORY_NODES.start;

function showStoryNode(node) {
    const output = document.getElementById('game-output');
    if (!output) return;
    typewriterEffect(node.text, output, () => {
        const optionsDiv = document.getElementById('dialogue-options');
        optionsDiv.innerHTML = '';
        node.options.forEach(opt => {
            const btn = document.createElement('button');
            btn.className = 'button btn-glow btn-drip m-1';
            btn.textContent = opt.text;
            btn.onclick = () => {
                currentStoryNode = STORY_NODES[opt.next];
                showStoryNode(currentStoryNode);
            };
            optionsDiv.appendChild(btn);
        });
    });
}

// Typewriter effect for immersive text
function typewriterEffect(text, element, callback, speed = 28) {
    element.innerHTML = '';
    let i = 0;
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        } else if (callback) {
            callback();
        }
    }
    type();
}

// Psychological horror: unreliable narrator & memory glitch
function triggerMemoryGlitch() {
    const output = document.getElementById('game-output');
    if (output) {
        output.innerHTML = '<span class="text-red-400 animate-pulse">...Did something just change?</span>';
        setTimeout(() => showStoryNode(currentStoryNode), 1200);
    }
}

// Example: start narrative on game start
document.addEventListener('DOMContentLoaded', function() {
    const gameScreen = document.getElementById('game-screen');
    if (gameScreen) {
        // Start narrative when game screen is shown
        window.showGameScreenDemo = function() {
            showStoryNode(currentStoryNode);
        };
    }
});

// === AI PERSONALITY & DIALOGUE SYSTEM STUBS ===
const AI_PERSONALITIES = [
    { state: 'Friendly', color: 'text-cyan-400', min: 0, max: 24 },
    { state: 'Ambiguous', color: 'text-yellow-400', min: 25, max: 49 },
    { state: 'Sinister', color: 'text-orange-400', min: 50, max: 74 },
    { state: 'Malicious', color: 'text-red-500', min: 75, max: 100 }
];
let aiAwareness = 0;
let aiPersonality = AI_PERSONALITIES[0];

// Placeholder dialogue tree (expand with real data)
const dialogueTree = {
    Friendly: [
        { text: "Hello, user. How can I help you today?", options: ["Who are you?", "Where am I?"] }
    ],
    Ambiguous: [
        { text: "You ask a lot of questions...", options: ["What happened here?", "Can I trust you?"] }
    ],
    Sinister: [
        { text: "You shouldn't be here.", options: ["Let me out!", "What do you want?"] }
    ],
    Malicious: [
        { text: "You cannot escape.", options: ["...", "Help!"] }
    ]
};

function updateAIPersonalityUI() {
    // Awareness bar
    const awarenessPercent = Math.min(100, Math.max(0, aiAwareness));
    document.getElementById('awareness-progress').style.width = awarenessPercent + '%';
    document.getElementById('awareness-value').textContent = aiAwareness;
    document.getElementById('awareness-stat').textContent = aiAwareness;

    // Determine personality
    aiPersonality = AI_PERSONALITIES.find(p => aiAwareness >= p.min && aiAwareness <= p.max) || AI_PERSONALITIES[0];
    const aiStateElem = document.getElementById('ai-personality-state');
    aiStateElem.textContent = `AI: ${aiPersonality.state}`;
    aiStateElem.className = `font-mono text-base ${aiPersonality.color}`;
    document.getElementById('tone-value').textContent = aiPersonality.state;
}

function showAIDialogue() {
    const dialogue = dialogueTree[aiPersonality.state][0];
    const output = document.getElementById('game-output');
    output.innerHTML = `<div class='mb-2'>${dialogue.text}</div>`;
    const optionsDiv = document.getElementById('dialogue-options');
    optionsDiv.innerHTML = '';
    dialogue.options.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'button btn-glow btn-drip m-1';
        btn.textContent = opt;
        btn.onclick = () => handleDialogueOption(opt);
        optionsDiv.appendChild(btn);
    });
}

function handleDialogueOption(option) {
    // Example: Increase awareness for certain questions
    if (option.toLowerCase().includes('trust') || option.toLowerCase().includes('escape')) {
        aiAwareness = Math.min(100, aiAwareness + 25);
    } else {
        aiAwareness = Math.min(100, aiAwareness + 10);
    }
    updateAIPersonalityUI();
    showAIDialogue();
}

// For demo: show dialogue only (legacy, use showGameScreenDemo for full init)
window.showAIDialogueDemo = function() {
    aiAwareness = 0;
    updateAIPersonalityUI();
    showAIDialogue();
}

// === HORROR ATMOSPHERE ENHANCEMENTS ===
// ...existing code...

// === ADVANCED GAMEPLAY FEATURES ===
// 1. Dynamic Events System
function triggerDynamicEvent() {
    // Example: random event pool
    const events = [
        () => showStoryNode({ text: 'The lights flicker. You hear a distant scream.', options: [{ text: 'Continue', next: currentStoryNode.id }] }),
        () => showStoryNode({ text: 'A cold wind brushes past you, though no door is open.', options: [{ text: 'Continue', next: currentStoryNode.id }] }),
        () => showStoryNode({ text: 'You hear static from the intercom. A voice whispers: "Leave..."', options: [{ text: 'Continue', next: currentStoryNode.id }] }),
        () => { triggerEnvironmentalHorror(); },
        () => showStoryNode({ text: 'A puzzle panel slides out from the wall.', options: [{ text: 'Solve Puzzle', next: currentStoryNode.id }] })
    ];
    const event = events[Math.floor(Math.random() * events.length)];
    event();
}

// 2. Puzzle System (simple demo)
function showPuzzlePanel(puzzleId = 'demo') {
    const output = document.getElementById('game-output');
    if (!output) return;
    let html = '';
    if (puzzleId === 'demo') {
        html = `<div class='mb-2 font-bold text-yellow-300'>Puzzle: Enter the correct code (3 digits)</div>
                <input id='puzzle-input' class='bg-black border border-yellow-400 text-yellow-200 p-1 rounded' maxlength='3' style='width: 4em;'>
                <button class='button btn-glow btn-drip ml-2' onclick='window.submitPuzzleDemo()'>Submit</button>
                <div id='puzzle-feedback' class='mt-2 text-red-400'></div>`;
    }
    output.innerHTML = html;
}
window.submitPuzzleDemo = function() {
    const input = document.getElementById('puzzle-input');
    const feedback = document.getElementById('puzzle-feedback');
    if (input && feedback) {
        if (input.value === '314') {
            feedback.textContent = 'Correct! The panel retracts.';
            setTimeout(() => showStoryNode(currentStoryNode), 1200);
        } else {
            feedback.textContent = 'Incorrect code.';
        }
    }
};

// 3. Hacking System (simple demo)
function showHackingPanel() {
    const output = document.getElementById('game-output');
    if (!output) return;
    output.innerHTML = `<div class='mb-2 font-bold text-cyan-300'>Hacking: Enter override code</div>
            <input id='hack-input' class='bg-black border border-cyan-400 text-cyan-200 p-1 rounded' maxlength='5' style='width: 5em;'>
            <button class='button btn-glow btn-drip ml-2' onclick='window.submitHackDemo()'>Submit</button>
            <div id='hack-feedback' class='mt-2 text-red-400'></div>`;
}
window.submitHackDemo = function() {
    const input = document.getElementById('hack-input');
    const feedback = document.getElementById('hack-feedback');
    if (input && feedback) {
        if (input.value.toLowerCase() === 'omega') {
            feedback.textContent = 'Access granted. You retrieve a data log.';
            setTimeout(() => showStoryNode(currentStoryNode), 1200);
        } else {
            feedback.textContent = 'Access denied.';
        }
    }
};

// 4. Advanced Inventory System (demo: add/remove/use items)
let inventory = [];
function addItemToInventory(item) {
    inventory.push(item);
    updateInventoryPanelUI();
}
function removeItemFromInventory(item) {
    const idx = inventory.indexOf(item);
    if (idx !== -1) inventory.splice(idx, 1);
    updateInventoryPanelUI();
}
function updateInventoryPanelUI() {
    const panel = document.getElementById('inventory-panel');
    if (!panel) return;
    let html = `<div class='font-bold text-yellow-300 mb-1'>Inventory</div>`;
    if (inventory.length === 0) {
        html += `<div class='text-gray-400'>(empty)</div>`;
    } else {
        html += `<ul class='list-disc ml-4'>`;
        for (const item of inventory) {
            html += `<li>${item} <button class='button btn-xs btn-glow ml-1' onclick='window.useItemDemo("${item}")'>Use</button> <button class='button btn-xs ml-1' onclick='window.removeItemDemo("${item}")'>Drop</button></li>`;
        }
        html += `</ul>`;
    }
    panel.innerHTML = html;
}
window.addItemDemo = function(item) { addItemToInventory(item); };
window.removeItemDemo = function(item) { removeItemFromInventory(item); };
window.useItemDemo = function(item) {
    showStoryNode({ text: `You use the ${item}.`, options: [{ text: 'Continue', next: currentStoryNode.id }] });
    removeItemFromInventory(item);
};

// 5. Item Crafting System (demo)
function showCraftingPanel() {
    const output = document.getElementById('game-output');
    if (!output) return;
    output.innerHTML = `<div class='mb-2 font-bold text-green-300'>Crafting: Combine two items</div>
            <input id='craft-item1' class='bg-black border border-green-400 text-green-200 p-1 rounded' placeholder='Item 1' style='width: 6em;'>
            <input id='craft-item2' class='bg-black border border-green-400 text-green-200 p-1 rounded ml-2' placeholder='Item 2' style='width: 6em;'>
            <button class='button btn-glow btn-drip ml-2' onclick='window.submitCraftDemo()'>Craft</button>
            <div id='craft-feedback' class='mt-2 text-red-400'></div>`;
}
window.submitCraftDemo = function() {
    const item1 = document.getElementById('craft-item1').value.trim();
    const item2 = document.getElementById('craft-item2').value.trim();
    const feedback = document.getElementById('craft-feedback');
    if (item1 && item2 && feedback) {
        if ((item1 === 'wire' && item2 === 'battery') || (item1 === 'battery' && item2 === 'wire')) {
            feedback.textContent = 'You craft an improvised taser!';
            addItemToInventory('improvised taser');
        } else {
            feedback.textContent = 'Nothing happens.';
        }
    }
};

// 6. Environmental Hazards (demo: trigger hazard)
function triggerEnvironmentalHazard(type = 'gas') {
    if (type === 'gas') {
        showStoryNode({ text: 'A hiss fills the room. Poisonous gas is leaking in!', options: [{ text: 'Hold breath', next: currentStoryNode.id }] });
    } else if (type === 'fire') {
        showStoryNode({ text: 'Flames erupt from a broken pipe!', options: [{ text: 'Dodge', next: currentStoryNode.id }] });
    }
}

// 7. Advanced Command Parsing (demo: parse and route commands)
function parsePlayerCommand(input) {
    const cmd = input.trim().toLowerCase();
    if (cmd === 'inventory') {
        updateInventoryPanelUI();
    } else if (cmd === 'puzzle') {
        showPuzzlePanel('demo');
    } else if (cmd === 'hack') {
        showHackingPanel();
    } else if (cmd === 'craft') {
        showCraftingPanel();
    } else if (cmd === 'event') {
        triggerDynamicEvent();
    } else if (cmd === 'hazard') {
        triggerEnvironmentalHazard();
    } else {
        showStoryNode({ text: 'Unknown command.', options: [{ text: 'Continue', next: currentStoryNode.id }] });
    }
}

// === DEMO HOOKS FOR ADVANCED GAMEPLAY ===
function updateSkillTreeUI() {
    const panel = document.getElementById('skill-tree-panel');
    if (!panel) return;
    
    let html = `<div class='flex flex-wrap gap-2'>
                <span class='font-bold text-cyan-300'>Level: ${playerLevel}</span>
                <span class='font-bold text-yellow-300'>XP: ${playerXP} / ${xpForNextLevel(playerLevel)}</span>
                <span class='font-bold text-green-400'>Skill Points: ${skillPoints}</span>
            </div>
        </div>`;
    html += `<div class='grid grid-cols-2 md:grid-cols-3 gap-2'>`;
    for (const skill of SKILLS) {
        html += `<div class='p-2 border border-cyan-700 rounded bg-black/60 flex flex-col items-center'>
                <span class='text-2xl mb-1'>${skill.icon}</span>
                <span class='font-bold text-cyan-200'>${skill.name}</span>
                <span class='text-xs text-gray-400 mb-1'>${skill.desc}</span>
                <div class='flex gap-1 mb-1'>`;
        for (let i = 1; i <= skill.max; i++) {
            const filled = playerSkills[skill.id] >= i ? 'bg-cyan-400' : 'bg-gray-700';
            html += `<span class='w-4 h-4 inline-block rounded-full ${filled}'></span>`;
        }
        html += `</div>`;
        if (skillPoints > 0 && playerSkills[skill.id] < skill.max) {
            html += `<button class='button btn-glow btn-drip text-xs' onclick='window.upgradeSkill("${skill.id}")'>+ Upgrade</button>`;
        }
        html += `</div>`;
    }
    html += `</div>`;
    panel.innerHTML = html;
}

window.upgradeSkill = function(skillId) {
    if (skillPoints > 0 && playerSkills[skillId] < SKILLS.find(s => s.id === skillId).max) {
        playerSkills[skillId]++;
        skillPoints--;
        updateSkillTreeUI();
    }
};

// For demo: show skill tree and simulate XP gain

window.showSkillTreeDemo = function() {
    playerXP = 0;
    playerLevel = 1;
    skillPoints = 0;
    playerSkills = { logic: 0, perception: 0, resilience: 0, tech: 0, empathy: 0 };
    updateSkillTreeUI();
};
window.gainXPDemo = function(amount) {
    gainXP(amount);
};

// === PHOBIA SYSTEM STUBS ===
const PHOBIAS = [
    { id: 'claustrophobia', name: 'Claustrophobia', desc: 'Fear of tight spaces. Triggers in small rooms.', icon: '🚪' },
    { id: 'nyctophobia', name: 'Nyctophobia', desc: 'Fear of the dark. Triggers in unlit areas.', icon: '🌑' },
    { id: 'hemophobia', name: 'Hemophobia', desc: 'Fear of blood. Triggers on seeing blood.', icon: '🩸' },
    { id: 'technophobia', name: 'Technophobia', desc: 'Fear of machines. Triggers near malfunctioning tech.', icon: '🤖' },
    { id: 'thanatophobia', name: 'Thanatophobia', desc: 'Fear of death. Triggers near corpses.', icon: '💀' }
];
let playerPhobias = ['claustrophobia']; // Example: player starts with one phobia
let phobiaStates = {
    claustrophobia: false,
    nyctophobia: false,
    hemophobia: false,
    technophobia: false,
    thanatophobia: false
};

function triggerPhobia(phobiaId) {
    if (playerPhobias.includes(phobiaId)) {
        phobiaStates[phobiaId] = true;
        updatePhobiaPanelUI();
        showPhobiaEffect(phobiaId);
    }
}

function clearPhobia(phobiaId) {
    if (playerPhobias.includes(phobiaId)) {
        phobiaStates[phobiaId] = false;
        updatePhobiaPanelUI();
    }
}

function showPhobiaEffect(phobiaId) {
    // Simple effect: show a warning in the phobia panel (replace with horror overlay, sound, etc.)
    const panel = document.getElementById('phobia-panel');
    const phobia = PHOBIAS.find(p => p.id === phobiaId);
    if (panel && phobia) {
        const warn = document.createElement('div');
        warn.className = 'text-red-400 font-bold mb-2 animate-pulse';
        warn.textContent = `Phobia Triggered: ${phobia.name}! (${phobia.desc}`;
        panel.prepend(warn);
        setTimeout(() => warn.remove(), 2500);
    }
}

function updatePhobiaPanelUI() {
    const panel = document.getElementById('phobia-panel');
    if (!panel) return;
    let html = `<div class='font-bold text-pink-300 mb-1'>Phobias</div>`;
    if (playerPhobias.length === 0) {
        html += `<div class='text-gray-400'>(None)</div>`;
    } else {
        for (const phobiaId of playerPhobias) {
            const phobia = PHOBIAS.find(p => p.id === phobiaId);
            const triggered = phobiaStates[phobiaId];
            html += `<div class='flex items-center gap-2 mb-1'>
                    <span class='text-xl'>${phobia.icon}</span>
                    <span class='font-bold text-pink-200'>${phobia.name}</span>
                    <span class='text-xs text-gray-400'>${phobia.desc}</span>
                    ${triggered ? `<span class='text-red-400 font-bold animate-pulse ml-2'>TRIGGERED</span>` : ''}
                </div>`;
        }
    }
    panel.innerHTML = html;
}

// For demo: show phobia panel and simulate triggers
window.showPhobiaPanelDemo = function() {
    playerPhobias = ['claustrophobia', 'nyctophobia'];
    phobiaStates = { claustrophobia: false, nyctophobia: false, hemophobia: false, technophobia: false, thanatophobia: false };
    updatePhobiaPanelUI();
};
window.triggerPhobiaDemo = function(phobiaId) {
    triggerPhobia(phobiaId);
};

// === STATS & CHARACTER SYSTEM STUBS ===
const BASE_STATS = {
    sanity: 100,
    awareness: 0,
    health: 100,
    stamina: 100,
    turn: 1
};
let playerStats = { ...BASE_STATS };

function updateStatsPanelUI() {
    const panel = document.getElementById('stats-panel');
    if (!panel) return;
    let html = `<div class='font-bold text-green-300 mb-1'>Stats</div>`;
    html += `<div class='flex flex-col gap-1'>`;
    html += `<div><span class='font-bold text-yellow-300'>Sanity:</span> <span id='sanity-stat' class='text-white'>${playerStats.sanity}</span></div>`;
    html += `<div><span class='font-bold text-cyan-300'>Awareness:</span> <span id='awareness-stat' class='text-white'>${playerStats.awareness}</span></div>`;
    html += `<div><span class='font-bold text-red-400'>Health:</span> <span id='health-stat' class='text-white'>${playerStats.health}</span></div>`;
    html += `<div><span class='font-bold text-pink-300'>Stamina:</span> <span id='stamina-stat' class='text-white'>${playerStats.stamina}</span></div>`;
    html += `<div><span class='font-bold text-gray-400'>Turn:</span> <span id='turn-stat' class='text-white'>${playerStats.turn}</span></div>`;
    html += `</div>`;
    panel.innerHTML = html;
}

function changeStat(stat, amount) {
    if (playerStats.hasOwnProperty(stat)) {
        playerStats[stat] += amount;
        if (stat === 'sanity') playerStats[stat] = Math.max(0, Math.min(100, playerStats[stat]));
        if (stat === 'health') playerStats[stat] = Math.max(0, Math.min(100, playerStats[stat]));
        if (stat === 'stamina') playerStats[stat] = Math.max(0, Math.min(100, playerStats[stat]));
        if (stat === 'awareness') playerStats[stat] = Math.max(0, Math.min(100, playerStats[stat]));
        updateStatsPanelUI();
    }
}

function nextTurn() {
    playerStats.turn++;
    updateStatsPanelUI();
}

// For demo: show stats panel and simulate stat changes
window.showStatsPanelDemo = function() {
    playerStats = { ...BASE_STATS };
    updateStatsPanelUI();
};
window.changeStatDemo = function(stat, amount) {
    changeStat(stat, amount);
};
window.nextTurnDemo = function() {
    nextTurn();
};
