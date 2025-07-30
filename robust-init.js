// Robust initialization system with error handling
console.log('=== ROBUST INITIALIZATION SYSTEM ===');

// Track module loading state
const ModuleState = {
    utils: false,
    game: false,
    ui: false,
    audio: false,
    script: false,
    initialization: false,
    main: false,
    allLoaded: false
};

// Global error handler
window.addEventListener('error', function(e) {
    console.error('Global error:', e.error);
    
    const status = document.getElementById('debug-status');
    if (status) {
        status.innerHTML = 'Error detected - using fallback';
        status.style.color = '#f00';
    }
});

// Module loading with individual error handling
async function loadModulesSafely() {
    console.log('Starting safe module loading...');
    
    const status = document.getElementById('debug-status');
    if (status) {
        status.innerHTML = 'Loading modules...';
        status.style.color = '#ff0';
    }

    // Load utils first (no dependencies)
    try {
        const utils = await import('./js/utils.js');
        ModuleState.utils = true;
        console.log('✓ Utils module loaded');
        
        // Test utils functions
        if (utils.EventEmitter && utils.storage && utils.debounce) {
            console.log('✓ Utils exports verified');
        }
    } catch (error) {
        console.error('✗ Utils module failed:', error);
        return false;
    }

    // Load game module (depends on utils)
    try {
        const game = await import('./js/game.js');
        ModuleState.game = true;
        console.log('✓ Game module loaded');
        
        // Test game exports
        if (game.GameState && game.ROOMS && game.ITEMS) {
            console.log('✓ Game exports verified');
        }
    } catch (error) {
        console.error('✗ Game module failed:', error);
        return false;
    }

    // Load UI module (depends on game and utils)
    try {
        const ui = await import('./js/ui.js');
        ModuleState.ui = true;
        console.log('✓ UI module loaded');
        
        // Test UI exports
        if (ui.showModal && ui.hideModal && ui.updateMapDisplay) {
            console.log('✓ UI exports verified');
        }
    } catch (error) {
        console.error('✗ UI module failed:', error);
        return false;
    }

    // Load audio module (may depend on game state)
    try {
        const audio = await import('./js/audio.js');
        ModuleState.audio = true;
        console.log('✓ Audio module loaded');
        
        // Test audio exports
        if (audio.initializeAudio && audio.playSound) {
            console.log('✓ Audio exports verified');
        }
    } catch (error) {
        console.error('✗ Audio module failed:', error);
        // Audio is not critical, continue
    }

    // Load script module
    try {
        const script = await import('./script.js');
        ModuleState.script = true;
        console.log('✓ Script module loaded');
    } catch (error) {
        console.error('✗ Script module failed:', error);
        // Script is not critical, continue
    }

    // Load initialization module (depends on all others)
    try {
        const init = await import('./initialization.js');
        ModuleState.initialization = true;
        console.log('✓ Initialization module loaded');
    } catch (error) {
        console.error('✗ Initialization module failed:', error);
        console.log('Using fallback initialization...');
        
        // Initialize basic game functionality without full initialization
        initializeFallbackMode();
        return false;
    }

    // Load main module (optional demo features)
    try {
        const main = await import('./main.js');
        ModuleState.main = true;
        console.log('✓ Main module loaded');
    } catch (error) {
        console.error('✗ Main module failed:', error);
        // Main is not critical, continue
    }

    ModuleState.allLoaded = true;
    console.log('✓ All modules loaded successfully!');
    
    if (status) {
        status.innerHTML = 'Full game loaded!';
        status.style.color = '#0f0';
    }
    
    return true;
}

// Fallback initialization if modules fail
function initializeFallbackMode() {
    console.log('Initializing fallback mode...');
    
    const status = document.getElementById('debug-status');
    if (status) {
        status.innerHTML = 'Fallback mode active';
        status.style.color = '#0ff';
    }
    
    // Ensure simple navigation works
    setupBasicNavigation();
    
    // Add some basic game features without full modules
    setupBasicGameFeatures();
}

function setupBasicNavigation() {
    console.log('Setting up basic navigation...');
    
    // Enhanced navigation with proper error handling
    const buttons = {
        'new-game-btn': {
            action: () => {
                document.getElementById('start-screen').classList.add('hidden');
                document.getElementById('player-setup').classList.remove('hidden');
                console.log('Navigated to player setup');
            }
        },
        'load-game-btn': {
            action: () => {
                alert('Load Game feature available in full mode');
            }
        },
        'back-to-start-btn': {
            action: () => {
                document.getElementById('player-setup').classList.add('hidden');
                document.getElementById('start-screen').classList.remove('hidden');
                console.log('Navigated back to start');
            }
        },
        'start-game-btn': {
            action: () => {
                document.getElementById('player-setup').classList.add('hidden');
                document.getElementById('game-screen').classList.remove('hidden');
                console.log('Navigated to game screen');
            }
        }
    };
    
    Object.entries(buttons).forEach(([id, config]) => {
        const btn = document.getElementById(id);
        if (btn) {
            // Remove any existing handlers
            btn.onclick = null;
            
            // Add new handler with error handling
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                try {
                    config.action();
                    
                    // Update status
                    const status = document.getElementById('debug-status');
                    if (status) {
                        status.innerHTML = `${id} clicked`;
                    }
                } catch (error) {
                    console.error(`Error in ${id}:`, error);
                }
            });
            
            console.log(`✓ Handler added for ${id}`);
        } else {
            console.warn(`✗ Button ${id} not found`);
        }
    });
}

function setupBasicGameFeatures() {
    console.log('Setting up basic game features...');
    
    // Add basic input handling for the game screen
    const playerInput = document.getElementById('player-input');
    if (playerInput) {
        playerInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                const command = this.value.trim();
                if (command) {
                    handleBasicCommand(command);
                    this.value = '';
                }
            }
        });
        console.log('✓ Basic input handler added');
    }
    
    // Add basic status button
    const statusBtn = document.getElementById('status-btn');
    if (statusBtn) {
        statusBtn.addEventListener('click', function() {
            showBasicStatus();
        });
        console.log('✓ Basic status handler added');
    }
}

function handleBasicCommand(command) {
    const gameOutput = document.getElementById('game-output');
    if (gameOutput) {
        const response = getBasicResponse(command);
        gameOutput.innerHTML += `<div style="color: #0ff;">>${command}</div>`;
        gameOutput.innerHTML += `<div style="color: #fff;">${response}</div><br>`;
        gameOutput.scrollTop = gameOutput.scrollHeight;
    }
}

function getBasicResponse(command) {
    const cmd = command.toLowerCase();
    
    if (cmd.includes('help')) {
        return 'Available commands: look, status, inventory, help. Full game features loading...';
    } else if (cmd.includes('look')) {
        return 'You are in a basic game environment. The full SYNAPSE experience is loading...';
    } else if (cmd.includes('status')) {
        return 'Status: Basic mode active. Module system initializing...';
    } else if (cmd.includes('inventory')) {
        return 'Inventory: Empty (basic mode)';
    } else {
        return `Unknown command: ${command}. Type 'help' for available commands.`;
    }
}

function showBasicStatus() {
    const status = Object.entries(ModuleState)
        .map(([name, loaded]) => `${name}: ${loaded ? '✓' : '✗'}`)
        .join('\n');
    
    alert(`Module Status:\n${status}`);
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', async function() {
    console.log('DOM ready - starting robust initialization');
    
    // Wait a bit for other scripts to load
    setTimeout(async () => {
        const success = await loadModulesSafely();
        
        if (!success) {
            console.log('Modules failed to load, fallback mode activated');
        }
    }, 100);
});
