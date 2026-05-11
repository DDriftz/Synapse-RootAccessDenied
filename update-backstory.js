// This script will be added to handle the backstory input functionality
// It should be included after the initialization.js file

// Update startNewGame to handle manual backstory input
if (typeof window !== 'undefined') {
    // Override the startNewGame function to handle manual backstory input
    const originalStartNewGame = window.startNewGame;
    
    window.startNewGame = async function() {
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
        
        // Get backstory from input or random
        const playerBackstoryInput = document.getElementById('player-backstory-input')?.value.trim().toLowerCase();
        const backstoryKeys = Object.keys(BACKSTORIES);
        
        // Check if typed backstory exists, otherwise use random
        if (playerBackstoryInput && backstoryKeys.includes(playerBackstoryInput)) {
            GameState.playerBackstory = playerBackstoryInput;
        } else if (playerBackstoryInput && playerBackstoryInput !== '') {
            // Show warning for invalid backstory
            console.warn(`Backstory "${playerBackstoryInput}" not found. Using random backstory.`);
            if (typeof showNotification === 'function') {
                showNotification(`Backstory "${playerBackstoryInput}" not found. Using random backstory.`, 'warning');
            }
            GameState.playerBackstory = backstoryKeys[Math.floor(Math.random() * backstoryKeys.length)];
        } else {
            // Random backstory if nothing typed
            GameState.playerBackstory = backstoryKeys[Math.floor(Math.random() * backstoryKeys.length)];
        }
        
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
    };
}
