// Debug script to test button functionality
console.log('=== SYNAPSE DEBUG SCRIPT LOADED ===');

// Test basic functionality immediately
console.log('Document ready state:', document.readyState);
console.log('Window loaded:', window.loaded || 'not set');

// Test CSS and element visibility
function testPageElements() {
    console.log('=== TESTING PAGE ELEMENTS ===');
    
    const startScreen = document.getElementById('start-screen');
    const gameScreen = document.getElementById('game-screen');
    const playerSetup = document.getElementById('player-setup');
    
    console.log('Start Screen:', startScreen ? 'Found' : 'NOT FOUND');
    console.log('Game Screen:', gameScreen ? 'Found' : 'NOT FOUND');
    console.log('Player Setup:', playerSetup ? 'Found' : 'NOT FOUND');
    
    if (startScreen) {
        console.log('Start Screen classes:', startScreen.className);
        console.log('Start Screen visibility:', window.getComputedStyle(startScreen).display);
    }
    
    // Test button elements
    const buttons = {
        'new-game-btn': document.getElementById('new-game-btn'),
        'load-game-btn': document.getElementById('load-game-btn'),
        'start-game-btn': document.getElementById('start-game-btn'),
        'back-to-start-btn': document.getElementById('back-to-start-btn')
    };
    
    console.log('=== BUTTON TEST ===');
    Object.entries(buttons).forEach(([id, element]) => {
        if (element) {
            console.log(`✓ ${id}:`, element.textContent.trim());
            console.log(`  - Disabled: ${element.disabled}`);
            console.log(`  - Style display: ${window.getComputedStyle(element).display}`);
            console.log(`  - Style visibility: ${window.getComputedStyle(element).visibility}`);
            console.log(`  - Pointer events: ${window.getComputedStyle(element).pointerEvents}`);
        } else {
            console.log(`✗ ${id}: NOT FOUND`);
        }
    });
    
    // Test if Tailwind CSS is loaded
    const testElement = document.createElement('div');
    testElement.className = 'hidden';
    document.body.appendChild(testElement);
    const isHidden = window.getComputedStyle(testElement).display === 'none';
    document.body.removeChild(testElement);
    console.log('Tailwind CSS loaded:', isHidden ? 'YES' : 'NO');
}

// Run immediately if DOM is ready, otherwise wait
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', testPageElements);
} else {
    testPageElements();
}

// Also run on window load
window.addEventListener('load', function() {
    console.log('=== WINDOW LOAD EVENT ===');
    testPageElements();
    
    // Add emergency button handlers
    console.log('Adding emergency button handlers...');
    
    const newGameBtn = document.getElementById('new-game-btn');
    if (newGameBtn) {
        // Remove any existing handlers and add a simple one
        newGameBtn.onclick = function(e) {
            e.preventDefault();
            console.log('EMERGENCY: New Game clicked');
            document.getElementById('start-screen').style.display = 'none';
            document.getElementById('player-setup').style.display = 'block';
            return false;
        };
        console.log('✓ Emergency handler added to New Game button');
    }
    
    const backBtn = document.getElementById('back-to-start-btn');
    if (backBtn) {
        backBtn.onclick = function(e) {
            e.preventDefault();
            console.log('EMERGENCY: Back clicked');
            document.getElementById('player-setup').style.display = 'none';
            document.getElementById('start-screen').style.display = 'block';
            return false;
        };
        console.log('✓ Emergency handler added to Back button');
    }
    
    const startBtn = document.getElementById('start-game-btn');
    if (startBtn) {
        startBtn.onclick = function(e) {
            e.preventDefault();
            console.log('EMERGENCY: Start Game clicked');
            document.getElementById('player-setup').style.display = 'none';
            document.getElementById('game-screen').style.display = 'block';
            return false;
        };
        console.log('✓ Emergency handler added to Start Game button');
    }
});
