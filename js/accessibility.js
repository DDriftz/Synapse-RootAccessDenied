// js/accessibility.js - Accessibility & Comfort Features

export const AccessibilitySettings = {
    readingSpeed: 'Normal', // Fast, Normal, Slow
    pauseResumeEnabled: true,
    textHighlighting: true,
    fontWeight: 'Normal', // Light, Normal, Bold
    lineSpacing: 'Normal', // Compact, Normal, Relaxed
    wordWrap: true,
    cursorStyle: 'Default', // Default, Block, Underline
    screenReaderOptimized: false,
    
    // Internal state
    isPaused: false
};

// Initialize accessibility features
export function initAccessibility() {
    console.log('Initializing Accessibility Features...');
    loadAccessibilitySettings();
    injectSettingsModal();
    applyAccessibilityStyles();
    setupFocusManagement();
    
    // Override the showSettingsModal function in robust-init.js if possible,
    // or bind to the buttons directly.
    document.querySelectorAll('[id$="-settings-btn"]').forEach(btn => {
        // Remove old listeners by cloning
        const newBtn = btn.cloneNode(true);
        btn.parentNode.replaceChild(newBtn, btn);
        newBtn.addEventListener('click', openSettingsModal);
    });
}

function loadAccessibilitySettings() {
    const saved = localStorage.getItem('synapse_accessibility');
    if (saved) {
        try {
            Object.assign(AccessibilitySettings, JSON.parse(saved));
        } catch (e) {
            console.error('Failed to load accessibility settings', e);
        }
    }
}

function saveAccessibilitySettings() {
    localStorage.setItem('synapse_accessibility', JSON.stringify(AccessibilitySettings));
}

// Dynamically inject the settings modal to keep index.html clean
function injectSettingsModal() {
    if (document.getElementById('settings-modal')) return;

    const modalHTML = `
    <div id="settings-modal" class="modal hidden">
        <div class="modal-content max-w-2xl bg-gray-900 border-2 border-cyan-400 p-6 rounded-lg text-left text-white max-h-[80vh] flex flex-col">
            <div class="flex justify-between items-center mb-4 border-b border-cyan-400 pb-2">
                <h2 class="text-2xl font-bold font-mono text-cyan-400">SETTINGS</h2>
                <button id="close-settings-btn" class="text-gray-400 hover:text-white text-xl font-bold">&times;</button>
            </div>
            
            <div class="flex-grow overflow-y-auto pr-2 space-y-6">
                <!-- Accessibility & Comfort -->
                <section>
                    <h3 class="text-xl text-cyan-300 border-b border-gray-700 mb-3 pb-1">Accessibility & Comfort</h3>
                    
                    <div class="space-y-4">
                        <div class="flex justify-between items-center">
                            <label>Reading Speed</label>
                            <select id="setting-reading-speed" class="bg-black border border-cyan-400 p-1 rounded">
                                <option value="Fast">Fast</option>
                                <option value="Normal">Normal</option>
                                <option value="Slow">Slow</option>
                            </select>
                        </div>
                        
                        <div class="flex justify-between items-center">
                            <label>Font Weight</label>
                            <select id="setting-font-weight" class="bg-black border border-cyan-400 p-1 rounded">
                                <option value="Light">Light</option>
                                <option value="Normal">Normal</option>
                                <option value="Bold">Bold</option>
                            </select>
                        </div>

                        <div class="flex justify-between items-center">
                            <label>Line Spacing</label>
                            <select id="setting-line-spacing" class="bg-black border border-cyan-400 p-1 rounded">
                                <option value="Compact">Compact</option>
                                <option value="Normal">Normal</option>
                                <option value="Relaxed">Relaxed</option>
                            </select>
                        </div>

                        <div class="flex justify-between items-center">
                            <label>Cursor Style</label>
                            <select id="setting-cursor" class="bg-black border border-cyan-400 p-1 rounded">
                                <option value="Default">Default</option>
                                <option value="Block">Block</option>
                                <option value="Underline">Underline</option>
                            </select>
                        </div>
                        
                        <div class="flex justify-between items-center">
                            <label>Text Highlighting (Colors for Dialogue)</label>
                            <input type="checkbox" id="setting-highlighting" class="w-5 h-5 accent-cyan-400">
                        </div>

                        <div class="flex justify-between items-center">
                            <label>Word Wrap</label>
                            <input type="checkbox" id="setting-word-wrap" class="w-5 h-5 accent-cyan-400">
                        </div>
                        
                        <div class="flex justify-between items-center">
                            <label>Screen Reader Optimization (ARIA)</label>
                            <input type="checkbox" id="setting-screen-reader" class="w-5 h-5 accent-cyan-400">
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </div>`;

    document.body.insertAdjacentHTML('beforeend', modalHTML);

    // Bind events
    document.getElementById('close-settings-btn').addEventListener('click', closeSettingsModal);
    
    const bindSelect = (id, key) => {
        const el = document.getElementById(id);
        el.value = AccessibilitySettings[key];
        el.addEventListener('change', (e) => {
            AccessibilitySettings[key] = e.target.value;
            applyAccessibilityStyles();
            saveAccessibilitySettings();
        });
    };

    const bindCheck = (id, key) => {
        const el = document.getElementById(id);
        el.checked = AccessibilitySettings[key];
        el.addEventListener('change', (e) => {
            AccessibilitySettings[key] = e.target.checked;
            applyAccessibilityStyles();
            saveAccessibilitySettings();
        });
    };

    bindSelect('setting-reading-speed', 'readingSpeed');
    bindSelect('setting-font-weight', 'fontWeight');
    bindSelect('setting-line-spacing', 'lineSpacing');
    bindSelect('setting-cursor', 'cursorStyle');
    
    bindCheck('setting-highlighting', 'textHighlighting');
    bindCheck('setting-word-wrap', 'wordWrap');
    bindCheck('setting-screen-reader', 'screenReaderOptimized');
}

export function openSettingsModal() {
    const modal = document.getElementById('settings-modal');
    if (modal) {
        modal.classList.remove('hidden');
        modal.classList.add('flex');
    }
}

export function closeSettingsModal() {
    const modal = document.getElementById('settings-modal');
    if (modal) {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
    }
}

// Apply the styles dynamically to the body so CSS handles it
export function applyAccessibilityStyles() {
    const body = document.body;
    
    // Font Weight
    body.style.fontWeight = AccessibilitySettings.fontWeight === 'Bold' ? 'bold' : 
                            AccessibilitySettings.fontWeight === 'Light' ? '300' : 'normal';
    
    // Line Spacing
    body.style.lineHeight = AccessibilitySettings.lineSpacing === 'Compact' ? '1.2' : 
                            AccessibilitySettings.lineSpacing === 'Relaxed' ? '1.8' : '1.5';
    
    // Word Wrap
    if (AccessibilitySettings.wordWrap) {
        body.classList.remove('no-word-wrap');
    } else {
        body.classList.add('no-word-wrap');
    }

    // Cursor
    body.classList.remove('cursor-block', 'cursor-underline');
    if (AccessibilitySettings.cursorStyle === 'Block') body.classList.add('cursor-block');
    if (AccessibilitySettings.cursorStyle === 'Underline') body.classList.add('cursor-underline');
    
    // Highlighting
    if (AccessibilitySettings.textHighlighting) {
        body.classList.add('enable-highlighting');
    } else {
        body.classList.remove('enable-highlighting');
    }

    // Screen Reader
    if (AccessibilitySettings.screenReaderOptimized) {
        body.classList.add('sr-optimized');
        document.querySelectorAll('button, input, select').forEach(el => {
            if (!el.getAttribute('aria-label')) {
                el.setAttribute('aria-label', el.innerText || el.placeholder || el.value || 'Input element');
            }
        });
    } else {
        body.classList.remove('sr-optimized');
    }
}

// Focus Management
function setupFocusManagement() {
    // Keep focus within modals when open
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Tab') {
            const openModal = document.querySelector('.modal.flex');
            if (openModal) {
                const focusableElements = openModal.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
                const firstElement = focusableElements[0];
                const lastElement = focusableElements[focusableElements.length - 1];

                if (e.shiftKey) { // Shift + Tab
                    if (document.activeElement === firstElement) {
                        lastElement.focus();
                        e.preventDefault();
                    }
                } else { // Tab
                    if (document.activeElement === lastElement) {
                        firstElement.focus();
                        e.preventDefault();
                    }
                }
            }
        }
        
        // Escape closes modals
        if (e.key === 'Escape') {
            closeSettingsModal();
        }
    });
}

// Utility to get typing speed
export function getTypingSpeed(baseSpeed) {
    if (AccessibilitySettings.readingSpeed === 'Fast') return baseSpeed / 2;
    if (AccessibilitySettings.readingSpeed === 'Slow') return baseSpeed * 2;
    return baseSpeed;
}

// Helper to format text with highlighting if enabled
export function formatGameText(text, type = 'description') {
    if (!AccessibilitySettings.textHighlighting) return text;
    
    if (type === 'dialogue') {
        return \`<span class="text-yellow-400 font-bold">\${text}</span>\`;
    } else if (type === 'system') {
        return \`<span class="text-red-400 italic">\${text}</span>\`;
    }
    return text;
}
