// Comprehensive Begin button fix for character creation
console.log('Loading Begin button fix...');

document.addEventListener('DOMContentLoaded', function() {
    console.log('Setting up Begin button functionality...');
    
    // Wait for other scripts to load
    setTimeout(function() {
        setupBeginButton();
    }, 800);
});

function setupBeginButton() {
    const startBtn = document.getElementById('start-game-btn');
    if (!startBtn) {
        console.error('Start game button not found!');
        return;
    }
    
    // Remove existing event listeners by cloning the button
    const newStartBtn = startBtn.cloneNode(true);
    startBtn.parentNode.replaceChild(newStartBtn, startBtn);
    
    // Add our comprehensive event handler
    newStartBtn.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        
        console.log('Begin button clicked - starting character creation process...');
        
        try {
            startEnhancedNewGame();
        } catch (error) {
            console.error('Error starting game:', error);
            showErrorNotification('Failed to start game: ' + error.message);
        }
    });
    
    console.log('Begin button enhanced successfully');
}

async function startEnhancedNewGame() {
    console.log('Starting enhanced new game...');
    
    // Get player data with new input fields
    const playerName = document.getElementById('player-name')?.value.trim() || 'Subject #' + Math.floor(Math.random() * 9999);
    const difficulty = document.querySelector('.difficulty-btn.button-primary')?.getAttribute('data-difficulty') || 'Normal';
    
    // Get backstory from input field
    const backstoryInput = document.getElementById('player-backstory-input')?.value.trim().toLowerCase() || '';
    
    // Get phobia from input field  
    const phobiaInput = document.getElementById('player-phobia-input')?.value.trim().toLowerCase() || '';
    
    console.log('Player setup:', { playerName, difficulty, backstoryInput, phobiaInput });
    
    // Validate and set backstory
    let selectedBackstory = 'investigator'; // default
    const availableBackstories = [
        'investigator', 'hacker', 'doctor', 'soldier', 'scientist', 'engineer', 
        'psychologist', 'journalist', 'detective', 'occultist', 'mercenary', 
        'archaeologist', 'pilot', 'librarian', 'paramedic', 'musician', 
        'mechanic', 'photographer', 'chef', 'athlete'
    ];
    
    if (backstoryInput) {
        const matchedBackstory = availableBackstories.find(backstory => 
            backstory.includes(backstoryInput) || backstoryInput.includes(backstory)
        );
        
        if (matchedBackstory) {
            selectedBackstory = matchedBackstory;
            console.log('Backstory matched:', selectedBackstory);
        } else {
            console.warn('Unknown backstory:', backstoryInput, 'Using default.');
            showWarningNotification(`Unknown backstory "${backstoryInput}". Using investigator.`);
        }
    } else {
        // Random backstory if none entered
        selectedBackstory = availableBackstories[Math.floor(Math.random() * availableBackstories.length)];
        console.log('Random backstory selected:', selectedBackstory);
    }
    
    // Validate and set phobia
    let selectedPhobia = 'darkness'; // default
    const availablePhobias = [
        'random', 'darkness', 'isolation', 'blood', 'machinery', 'mirrors', 
        'silence', 'crowds', 'heights', 'spiders', 'death', 'confinement',
        'water', 'fire', 'clowns', 'dolls', 'needles', 'germs', 'storms', 'flying'
    ];
    
    if (phobiaInput) {
        if (phobiaInput === 'random') {
            const nonRandomPhobias = availablePhobias.filter(p => p !== 'random');
            selectedPhobia = nonRandomPhobias[Math.floor(Math.random() * nonRandomPhobias.length)];
            console.log('Random phobia selected:', selectedPhobia);
        } else {
            const matchedPhobia = availablePhobias.find(phobia => 
                phobia.includes(phobiaInput) || phobiaInput.includes(phobia)
            );
            
            if (matchedPhobia) {
                selectedPhobia = matchedPhobia;
                console.log('Phobia matched:', selectedPhobia);
            } else {
                console.warn('Unknown phobia:', phobiaInput, 'Using default.');
                showWarningNotification(`Unknown phobia "${phobiaInput}". Using darkness.`);
            }
        }
    } else {
        // Random phobia if none entered
        const nonRandomPhobias = availablePhobias.filter(p => p !== 'random');
        selectedPhobia = nonRandomPhobias[Math.floor(Math.random() * nonRandomPhobias.length)];
        console.log('Random phobia selected:', selectedPhobia);
    }
    
    // Initialize game state (check if GameState exists)
    if (typeof GameState !== 'undefined') {
        console.log('Using existing GameState object');
        GameState.playerName = playerName;
        GameState.difficulty = difficulty;
        GameState.playerBackstory = selectedBackstory;
        GameState.playerPhobia = selectedPhobia;
        GameState.playerPhobias = [selectedPhobia];
        GameState.startTime = Date.now();
        
        // Set difficulty modifiers if available
        if (typeof DIFFICULTY_LEVELS !== 'undefined') {
            const difficultySettings = DIFFICULTY_LEVELS[difficulty];
            Object.assign(GameState, difficultySettings);
        }
        
        // Apply backstory bonuses if available
        if (typeof BACKSTORIES !== 'undefined' && BACKSTORIES[selectedBackstory]) {
            const backstory = BACKSTORIES[selectedBackstory];
            GameState.inventory = [...(backstory.startItems || [])];
            GameState.playerSkills = {};
            if (backstory.skills) {
                backstory.skills.forEach(skill => {
                    GameState.playerSkills[skill] = 1;
                });
            }
        }
    } else {
        console.log('GameState not available, creating basic state');
        // Create basic game state
        window.GameState = {
            playerName: playerName,
            difficulty: difficulty,
            playerBackstory: selectedBackstory,
            playerPhobia: selectedPhobia,
            playerPhobias: [selectedPhobia],
            startTime: Date.now(),
            inventory: [],
            playerSkills: {}
        };
    }
    
    // Show completion notification
    showSuccessNotification(`Character created: ${playerName} (${selectedBackstory}, ${selectedPhobia})`);
    
    // Transition to game screen
    const playerSetup = document.getElementById('player-setup');
    const gameScreen = document.getElementById('game-screen');
    
    if (playerSetup && gameScreen) {
        console.log('Transitioning to game screen...');
        
        // Add transition effect
        playerSetup.style.transition = 'opacity 0.5s ease-out';
        playerSetup.style.opacity = '0';
        
        setTimeout(() => {
            playerSetup.classList.add('hidden');
            gameScreen.classList.remove('hidden');
            
            // Fade in game screen
            gameScreen.style.opacity = '0';
            gameScreen.style.transition = 'opacity 0.5s ease-in';
            
            setTimeout(() => {
                gameScreen.style.opacity = '1';
            }, 50);
            
            // Initialize game systems if available
            initializeGameSystems();
            
        }, 500);
        
    } else {
        console.error('Could not find player setup or game screen elements');
        showErrorNotification('Failed to transition to game screen');
    }
    
    // Play sound if available
    if (typeof playSound === 'function') {
        try {
            playSound('beep');
        } catch (e) {
            console.log('Sound error:', e);
        }
    }
}

function initializeGameSystems() {
    console.log('Initializing game systems...');
    
    // Initialize game output with welcome message
    const gameOutput = document.getElementById('game-output');
    if (gameOutput) {
        // Helper function for translations
        const translate = (key, fallback = key) => {
            if (window.t) {
                return window.t(key);
            }
            return fallback;
        };
        
        const welcomeMessage = `
            <div class="text-green-400 mb-4">
                <h2 class="text-xl font-bold mb-2">${translate('synapse_system_active', 'SYNAPSE - System Active')}</h2>
                <p>${translate('welcome_message', 'Welcome')}, ${GameState?.playerName || 'Unknown Subject'}.</p>
                <p>${translate('status_backstory', 'Backstory')}: ${GameState?.playerBackstory || 'Unknown'}</p>
                <p>${translate('status_phobia', 'Phobia')}: ${GameState?.playerPhobia || 'Unknown'}</p>
                <p>${translate('status_difficulty', 'Difficulty')}: ${GameState?.difficulty || 'Normal'}</p>
            </div>
            <div class="text-white">
                <p class="mb-2">${translate('awakening_description', 'You awaken in a cold, sterile room. The hum of machinery fills the air, punctuated by the occasional beep of unseen electronics.')}</p>
                <p class="mb-2">${translate('you_dont_remember', 'You don' + 't remember how you got here.')}</p>
                <p class="text-cyan-400 mb-4">${translate('voice_crackles', 'A voice crackles through hidden speakers.')}</p>
                <p class="text-yellow-400">${translate('type_look_help', 'Type "look around" to examine your surroundings, or "help" for available commands.')}</p>
            </div>
        `;
        gameOutput.innerHTML = welcomeMessage;
    }
    
    // Update stats panel
    updateStatsPanel();
    
    // Initialize player input
    const playerInput = document.getElementById('player-input');
    if (playerInput) {
        playerInput.focus();
        playerInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                processPlayerCommand(this.value);
                this.value = '';
            }
        });
    }
    
    // Try to start existing game systems if available
    if (typeof startGameSystems === 'function') {
        try {
            startGameSystems();
        } catch (e) {
            console.log('Could not start existing game systems:', e);
        }
    }
    
    console.log('Game systems initialized');
}

function updateStatsPanel() {
    const playerNameDisplay = document.getElementById('player-name-display');
    const playerBackstoryDisplay = document.getElementById('player-backstory-display');
    const difficultyDisplay = document.getElementById('difficulty-display');
    
    if (playerNameDisplay) {
        playerNameDisplay.textContent = `Name: ${GameState?.playerName || 'Unknown'}`;
    }
    
    if (playerBackstoryDisplay) {
        playerBackstoryDisplay.textContent = `Backstory: ${GameState?.playerBackstory || 'Unknown'}`;
    }
    
    if (difficultyDisplay) {
        difficultyDisplay.textContent = `Difficulty: ${GameState?.difficulty || 'Normal'}`;
    }
}

function processPlayerCommand(command) {
    const gameOutput = document.getElementById('game-output');
    if (!gameOutput) return;
    
    const commandDiv = document.createElement('div');
    commandDiv.className = 'mb-2';
    commandDiv.innerHTML = `<span class="text-cyan-400">&gt; ${command}</span>`;
    gameOutput.appendChild(commandDiv);
    
    // Basic command processing with translation support
    const lowerCommand = command.toLowerCase().trim();
    let response = '';
    
    // Helper function for translations (fallback if global t not available)
    const translate = (key, fallback = key) => {
        if (window.t) {
            return window.t(key);
        }
        return fallback;
    };
    
    if (lowerCommand.includes('look') || lowerCommand.includes('examine') || lowerCommand.includes('titta')) {
        response = `<p class="text-white">${translate('you_are_in_sterile_room', 'You are in a sterile white room. The walls are smooth and featureless. A single door marked "EXIT" is visible on the far wall. Strange symbols flicker on a nearby monitor.')}</p>`;
    } else if (lowerCommand.includes('help') || lowerCommand.includes('hjälp')) {
        response = `
            <div class="text-yellow-400">
                <p class="font-bold mb-2">${translate('help_available_commands', 'Available Commands')}:</p>
                <ul class="list-disc list-inside">
                    <li>${translate('help_look', 'look - Examine your surroundings')}</li>
                    <li>${translate('help_inventory', 'check inventory - View your items')}</li>
                    <li>${translate('help_status', 'status - Check your current state')}</li>
                    <li>${translate('help_help', 'help - Show this help text')}</li>
                </ul>
            </div>
        `;
    } else if (lowerCommand.includes('inventory') || lowerCommand.includes('inventarie')) {
        response = `<p class="text-yellow-400">${translate('inventory_title', 'Inventory')}: ${GameState?.inventory?.length ? GameState.inventory.join(', ') : translate('inventory_empty', 'Empty')}</p>`;
    } else if (lowerCommand.includes('status')) {
        response = `
            <div class="text-cyan-400">
                <p>${translate('player_name', 'Name')}: ${GameState?.playerName || 'Unknown'}</p>
                <p>${translate('status_backstory', 'Backstory')}: ${GameState?.playerBackstory || 'Unknown'}</p>
                <p>${translate('status_phobia', 'Phobia')}: ${GameState?.playerPhobia || 'Unknown'}</p>
                <p>${translate('sanity', 'Sanity')}: 100</p>
            </div>
        `;
    } else {
        response = `<p class="text-red-400">${translate('command_not_recognized', 'Command not recognized. Type "help" for available commands.')}</p>`;
    }
    
    const responseDiv = document.createElement('div');
    responseDiv.className = 'mb-4';
    responseDiv.innerHTML = response;
    gameOutput.appendChild(responseDiv);
    
    // Scroll to bottom
    gameOutput.scrollTop = gameOutput.scrollHeight;
}

// Notification functions
function showSuccessNotification(message) {
    showNotification(message, 'success');
}

function showWarningNotification(message) {
    showNotification(message, 'warning');
}

function showErrorNotification(message) {
    showNotification(message, 'error');
}

function showNotification(message, type = 'info') {
    console.log(`${type.toUpperCase()}: ${message}`);
    
    const colors = {
        success: '#00ff41',
        warning: '#ff6b35', 
        error: '#ff3333',
        info: '#00aaff'
    };
    
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${colors[type] || colors.info};
        color: black;
        padding: 12px 20px;
        border-radius: 5px;
        font-family: monospace;
        font-size: 14px;
        font-weight: bold;
        z-index: 1000;
        opacity: 0.95;
        box-shadow: 0 4px 12px rgba(0,0,0,0.3);
        border: 2px solid rgba(0,0,0,0.2);
        min-width: 250px;
        max-width: 400px;
        word-wrap: break-word;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Animation
    notification.style.transform = 'translateX(100%)';
    setTimeout(() => {
        notification.style.transition = 'transform 0.3s ease-out';
        notification.style.transform = 'translateX(0)';
    }, 10);
    
    // Remove after 4 seconds
    setTimeout(() => {
        notification.style.transition = 'transform 0.3s ease-in, opacity 0.3s ease-in';
        notification.style.transform = 'translateX(100%)';
        notification.style.opacity = '0';
        
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 4000);
}
