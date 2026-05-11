// Simple initialization test - no imports
console.log('=== SIMPLE INIT TEST ===');

// Create a status indicator on the page
function createStatusIndicator() {
    const status = document.createElement('div');
    status.id = 'debug-status';
    status.style.cssText = `
        position: fixed;
        top: 10px;
        right: 10px;
        background: #000;
        color: #0f0;
        padding: 10px;
        border: 1px solid #0f0;
        z-index: 10000;
        font-family: monospace;
        font-size: 12px;
    `;
    status.innerHTML = 'Initializing...';
    document.body.appendChild(status);
    return status;
}

document.addEventListener('DOMContentLoaded', function() {
    const status = createStatusIndicator();
    status.innerHTML = 'DOM loaded';
    
    console.log('DOM loaded in simple test');
    
    // Simple button functionality
    const newGameBtn = document.getElementById('new-game-btn');
    const loadGameBtn = document.getElementById('load-game-btn');
    const backBtn = document.getElementById('back-to-start-btn');
    const startBtn = document.getElementById('start-game-btn');
    
    let handlersAdded = 0;
    
    if (newGameBtn) {
        newGameBtn.addEventListener('click', function() {
            console.log('Simple: New Game clicked');
            status.innerHTML = 'New Game clicked!';
            document.getElementById('start-screen').classList.add('hidden');
            document.getElementById('player-setup').classList.remove('hidden');
        });
        console.log('✓ New Game button handler added');
        handlersAdded++;
    }
    
    if (loadGameBtn) {
        loadGameBtn.addEventListener('click', function() {
            console.log('Simple: Load Game clicked');
            status.innerHTML = 'Load Game clicked!';
            alert('Load Game - Simple Handler');
        });
        console.log('✓ Load Game button handler added');
        handlersAdded++;
    }
    
    if (backBtn) {
        backBtn.addEventListener('click', function() {
            console.log('Simple: Back clicked');
            status.innerHTML = 'Back clicked!';
            document.getElementById('player-setup').classList.add('hidden');
            document.getElementById('start-screen').classList.remove('hidden');
        });
        console.log('✓ Back button handler added');
        handlersAdded++;
    }
    
    if (startBtn) {
        startBtn.addEventListener('click', function() {
            console.log('Simple: Start Game clicked');
            status.innerHTML = 'Start Game clicked!';
            document.getElementById('player-setup').classList.add('hidden');
            document.getElementById('game-screen').classList.remove('hidden');
        });
        console.log('✓ Start Game button handler added');
        handlersAdded++;
    }
    
    status.innerHTML = `Ready - ${handlersAdded} handlers added`;
    console.log('Simple initialization complete');
});
