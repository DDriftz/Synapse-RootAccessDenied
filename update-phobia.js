// Enhanced phobia selection with manual input support
console.log('Loading phobia selection enhancement...');

// Override the startNewGame function to handle manual phobia input
document.addEventListener('DOMContentLoaded', function() {
    console.log('Setting up phobia selection...');
    
    // Wait for other scripts to load
    setTimeout(function() {
        setupPhobiaSelection();
    }, 600);
});

function setupPhobiaSelection() {
    // Find the start game button and override its click handler
    const startGameBtn = document.getElementById('start-game-btn');
    if (!startGameBtn) {
        console.error('Start game button not found!');
        return;
    }
    
    // Store the original onclick function if it exists
    const originalOnClick = startGameBtn.onclick;
    
    // Replace with our enhanced version
    startGameBtn.onclick = function() {
        console.log('Enhanced start game clicked - processing phobia...');
        
        // Get the phobia input value
        const phobiaInput = document.getElementById('player-phobia-input');
        const phobiaValue = phobiaInput ? phobiaInput.value.trim().toLowerCase() : '';
        
        console.log('Phobia input value:', phobiaValue);
        
        // Define available phobias (expanded to 20)
        const availablePhobias = [
            'random', 'darkness', 'isolation', 'blood', 'machinery', 'mirrors', 
            'silence', 'crowds', 'heights', 'spiders', 'death', 'confinement',
            'water', 'fire', 'clowns', 'dolls', 'needles', 'germs', 'storms', 'flying'
        ];
        
        let selectedPhobia = 'random'; // default
        
        if (phobiaValue) {
            // Check if the input matches any available phobia (partial match)
            const matchedPhobia = availablePhobias.find(phobia => 
                phobia.includes(phobiaValue) || phobiaValue.includes(phobia)
            );
            
            if (matchedPhobia) {
                selectedPhobia = matchedPhobia;
                console.log('Phobia matched:', selectedPhobia);
            } else {
                // Show warning for invalid phobia
                if (typeof showNotification === 'function') {
                    showNotification('Unknown phobia. Using random selection.', 'warning');
                } else {
                    console.warn('Unknown phobia entered:', phobiaValue, 'Using random selection.');
                }
            }
        }
        
        // If random is selected, pick a random phobia
        if (selectedPhobia === 'random') {
            const nonRandomPhobias = availablePhobias.filter(p => p !== 'random');
            selectedPhobia = nonRandomPhobias[Math.floor(Math.random() * nonRandomPhobias.length)];
            console.log('Random phobia selected:', selectedPhobia);
        }
        
        // Store the selected phobia in GameState if available
        if (typeof GameState !== 'undefined') {
            GameState.player.phobia = selectedPhobia;
            console.log('Phobia set in GameState:', selectedPhobia);
        } else {
            console.warn('GameState not available, storing phobia in localStorage');
            localStorage.setItem('selectedPhobia', selectedPhobia);
        }
        
        // Update the phobia input to show the selected value
        if (phobiaInput) {
            phobiaInput.value = selectedPhobia;
        }
        
        // Call the original function if it exists
        if (originalOnClick) {
            originalOnClick.call(this);
        } else {
            // Fallback: trigger the game start process
            console.log('No original onclick found, attempting to start game...');
            if (typeof startNewGame === 'function') {
                startNewGame();
            }
        }
    };
    
    console.log('Phobia selection enhancement complete');
}

// Helper function to display notifications
function showNotification(message, type = 'info') {
    console.log(`${type.toUpperCase()}: ${message}`);
    
    // Try to display in game if notification system exists
    if (typeof UI !== 'undefined' && typeof UI.showNotification === 'function') {
        UI.showNotification(message, type);
        return;
    }
    
    // Fallback: create a simple notification
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'warning' ? '#ff6b35' : '#00ff41'};
        color: black;
        padding: 10px 20px;
        border-radius: 5px;
        font-family: monospace;
        font-size: 14px;
        z-index: 1000;
        opacity: 0.9;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.parentNode.removeChild(notification);
        }
    }, 3000);
}
