// engine-init.js - Instantiates the GameEngine and attaches to window
import '../js/core/gameEngine.js';

// If not already present, create the engine and attach to window
if (!window.engine && window.GameEngine) {
    window.engine = new window.GameEngine();
}
