// Enhanced backstory and phobia selection handling for initialization.js

// Enhanced start new game function
async function startNewGameEnhanced() {
    // Get player data
    const playerName = document.getElementById('player-name').value.trim() || 'Subject #' + Math.floor(Math.random() * 9999);
    const selectedPhobia = document.getElementById('player-phobia').value;
    const selectedBackstory = document.getElementById('player-backstory').value;
    const difficulty = document.querySelector('.difficulty-btn.button-primary')?.getAttribute('data-difficulty') || 'Normal';
    
    // Handle phobia selection
    let playerPhobia;
    if (selectedPhobia === 'random') {
        playerPhobia = getRandomPhobia();
    } else {
        playerPhobia = selectedPhobia;
    }
    
    // Handle backstory selection
    let playerBackstory;
    if (selectedBackstory === 'random') {
        const backstoryKeys = Object.keys(BACKSTORIES);
        playerBackstory = backstoryKeys[Math.floor(Math.random() * backstoryKeys.length)];
    } else {
        playerBackstory = selectedBackstory;
    }
    
    // Initialize game state
    GameState.playerName = playerName;
    GameState.difficulty = difficulty;
    GameState.playerPhobias = [playerPhobia];
    GameState.playerBackstory = playerBackstory;
    GameState.startTime = Date.now();
    
    // Set difficulty modifiers
    const difficultySettings = DIFFICULTY_LEVELS[difficulty];
    Object.assign(GameState, difficultySettings);
    
    // Apply backstory bonuses
    const backstory = BACKSTORIES[GameState.playerBackstory];
    if (backstory) {
        GameState.inventory = [...backstory.startItems];
        GameState.playerSkills = {};
        backstory.skills.forEach(skill => {
            GameState.playerSkills[skill] = 1;
        });
    }
    
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

// Enhanced phobia system
function getRandomPhobiaEnhanced() {
    const phobias = ['darkness', 'isolation', 'blood', 'machinery', 'mirrors', 'silence', 'crowds', 'heights', 'spiders', 'death'];
    return phobias[Math.floor(Math.random() * phobias.length)];
}

// Enhanced backstory and phobia change handlers
function setupEnhancedPlayerSetup() {
    // Handle backstory selection changes
    const backstorySelect = document.getElementById('player-backstory');
    if (backstorySelect) {
        backstorySelect.addEventListener('change', function() {
            updateAbilityDisplay();
        });
    }
    
    // Handle phobia selection changes
    const phobiaSelect = document.getElementById('player-phobia');
    if (phobiaSelect) {
        phobiaSelect.addEventListener('change', function() {
            updateAbilityDisplay();
        });
    }
    
    // Initialize ability display
    updateAbilityDisplay();
}

function updateAbilityDisplay() {
    const abilityDisplay = document.getElementById('ability-display');
    const backstorySelect = document.getElementById('player-backstory');
    const phobiaSelect = document.getElementById('player-phobia');
    
    if (!abilityDisplay || !backstorySelect || !phobiaSelect) return;
    
    const selectedBackstory = backstorySelect.value;
    const selectedPhobia = phobiaSelect.value;
    
    let displayText = '';
    
    // Show backstory info
    if (selectedBackstory && selectedBackstory !== 'random' && BACKSTORIES[selectedBackstory]) {
        const backstory = BACKSTORIES[selectedBackstory];
        displayText += `<strong>${backstory.name}:</strong> ${backstory.desc}<br>`;
        displayText += `<em>Skills:</em> ${backstory.skills.join(', ')}<br>`;
        displayText += `<em>Starting Items:</em> ${backstory.startItems.join(', ')}<br>`;
    }
    
    // Show phobia info
    if (selectedPhobia && selectedPhobia !== 'random') {
        const phobiaNames = {
            darkness: 'Darkness (Nyctophobia)',
            isolation: 'Isolation (Monophobia)',
            blood: 'Blood (Hemophobia)',
            machinery: 'Machinery (Mechanophobia)',
            mirrors: 'Mirrors (Eisoptrophobia)',
            silence: 'Silence (Sedatephobia)',
            crowds: 'Crowds (Agoraphobia)',
            heights: 'Heights (Acrophobia)',
            spiders: 'Spiders (Arachnophobia)',
            death: 'Death (Thanatophobia)'
        };
        
        if (displayText) displayText += '<br>';
        displayText += `<strong>Phobia:</strong> ${phobiaNames[selectedPhobia] || selectedPhobia}`;
    }
    
    if (!displayText) {
        displayText = 'Select your backstory and phobia to see character details';
    }
    
    abilityDisplay.innerHTML = displayText;
}
