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
async function loadModulesSafely() {}
    console.log('Starting safe module loading...');
    
    const status = document.getElementById('debug-status');
    if (status) {
        status.innerHTML = 'Loading modules...';
        status.style.color = '#ff0';

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
                setupPlayerSetupForm();
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
                startBasicGame();
            }
        },
        'start-settings-btn': {
            action: () => {
                showSettingsModal();
            }
        },
        'view-features-btn': {
            action: () => {
                showFeaturesModal();
            }
        },
        'setup-settings-btn': {
            action: () => {
                showSettingsModal();
            }
        },
        'setup-features-btn': {
            action: () => {
                showFeaturesModal();
            }
        }
    };

    Object.keys(buttons).forEach(buttonId => {
        const button = document.getElementById(buttonId);
        if (button) {
            button.addEventListener('click', buttons[buttonId].action);
            console.log(`✓ Enhanced handler added for ${buttonId}`);
        }
    });

    setupLanguageButtons();
    setupDifficultyButtons();
}

function setupPlayerSetupForm() {
    console.log('Setting up player setup form...');
    
    // Handle backstory selection changes
    const backstorySelect = document.getElementById('player-backstory');
    if (backstorySelect) {
        backstorySelect.addEventListener('change', updateAbilityDisplay);
        console.log('✓ Backstory selection handler added');
    }
    
    // Handle phobia selection changes
    const phobiaSelect = document.getElementById('player-phobia');
    if (phobiaSelect) {
        phobiaSelect.addEventListener('change', updateAbilityDisplay);
        console.log('✓ Phobia selection handler added');
    }
    
    // Handle view backstories button - DISABLED
    const viewBackstoriesBtn = document.getElementById('view-backstories-btn');
    if (viewBackstoriesBtn) {
        // Modal functionality disabled
        console.log('✓ View backstories button found but modal disabled');
    }
    
    // Handle view phobias button - DISABLED
    const viewPhobiasBtn = document.getElementById('view-phobias-btn');
    if (viewPhobiasBtn) {
        // Modal functionality disabled
        console.log('✓ View phobias button found but modal disabled');
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
    
    // Backstory descriptions
    const backstoryInfo = {
        investigator: { name: 'Investigator', desc: 'Former detective with keen observation skills', skills: ['perception', 'logic', 'interrogation'] },
        hacker: { name: 'Hacker', desc: 'Tech expert with system access knowledge', skills: ['hacking', 'tech', 'problem_solving'] },
        psychologist: { name: 'Psychologist', desc: 'Mental health expert who understands AI behavior', skills: ['empathy', 'analysis', 'mental_fortitude'] },
        survivor: { name: 'Survivor', desc: 'Experienced in dangerous situations', skills: ['resilience', 'combat', 'resourcefulness'] },
        corporate_spy: { name: 'Corporate Spy', desc: 'Insider with facility knowledge', skills: ['stealth', 'deception', 'access'] },
        medic: { name: 'Medic', desc: 'Medical professional with health expertise', skills: ['healing', 'diagnosis', 'chemistry'] },
        technician: { name: 'Technician', desc: 'Facility maintenance worker', skills: ['repair', 'electronics', 'navigation'] },
        cultist: { name: 'Cultist', desc: 'Devoted follower seeking forbidden knowledge', skills: ['occult', 'ritual', 'madness_resistance'] },
        janitor: { name: 'Janitor', desc: 'Knows every corner of the facility', skills: ['access_all', 'observation', 'patience'] },
        skeptic: { name: 'Skeptic', desc: 'Refuses to believe in the supernatural', skills: ['rationality', 'doubt', 'debunking'] }
    };
    
    // Show backstory info
    if (selectedBackstory && selectedBackstory !== 'random' && backstoryInfo[selectedBackstory]) {
        const backstory = backstoryInfo[selectedBackstory];
        displayText += `<strong>${backstory.name}:</strong> ${backstory.desc}<br>`;
        displayText += `<em>Skills:</em> ${backstory.skills.join(', ')}<br>`;
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

function setupLanguageButtons() {
    console.log('Setting up language buttons...');
    
    // Load saved language or default to English
    const savedLanguage = localStorage.getItem('synapse_language') || 'en';
    
    // Apply translations initially
    if (window.setLanguage) {
        window.setLanguage(savedLanguage);
    } else {
        // Fallback if translations.js hasn't loaded yet
        setTimeout(() => {
            if (window.setLanguage) {
                window.setLanguage(savedLanguage);
            }
        }, 100);
    }
    
    document.querySelectorAll('[data-lang="en_lang_short"], [data-lang="sv_lang_short"]').forEach(btn => {
        btn.addEventListener('click', function() {
            const lang = this.getAttribute('data-text').toLowerCase();
            
            if (window.setLanguage) {
                window.setLanguage(lang);
            } else {
                // Fallback for old system
                applyTranslations(lang);
                
                // Update button states
                document.querySelectorAll('[data-lang$="_lang_short"]').forEach(b => {
                    b.classList.add('opacity-50');
                });
                this.classList.remove('opacity-50');
            }
            
            console.log(`Language changed to: ${lang}`);
        });
    });
}

function setupDifficultyButtons() {
    document.querySelectorAll('.difficulty-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.difficulty-btn').forEach(b => {
                b.classList.remove('button-primary');
            });
            this.classList.add('button-primary');
            console.log(`Difficulty selected: ${this.getAttribute('data-difficulty')}`);
        });
    });
}

function startBasicGame() {
    // Get player data
    const playerName = document.getElementById('player-name').value.trim() || 'Subject #' + Math.floor(Math.random() * 9999);
    const selectedPhobia = document.getElementById('player-phobia').value;
    const selectedBackstory = document.getElementById('player-backstory').value;
    const difficulty = document.querySelector('.difficulty-btn.button-primary')?.getAttribute('data-difficulty') || 'Normal';
    
    // Handle phobia selection
    let playerPhobia = selectedPhobia === 'random' ? getRandomPhobia() : selectedPhobia;
    
    // Handle backstory selection
    let playerBackstory = selectedBackstory === 'random' ? getRandomBackstory() : selectedBackstory;
    
    // Store in basic game state
    window.gameState = {
        playerName,
        playerPhobia,
        playerBackstory,
        difficulty
    };
    
    // Navigate to game
    document.getElementById('player-setup').classList.add('hidden');
    document.getElementById('game-screen').classList.remove('hidden');
    
    // Show basic game intro
    showBasicGameIntro();
    
    console.log('Basic game started with:', window.gameState);
}

function getRandomPhobia() {
    const phobias = ['darkness', 'isolation', 'blood', 'machinery', 'mirrors', 'silence', 'crowds', 'heights', 'spiders', 'death'];
    return phobias[Math.floor(Math.random() * phobias.length)];
}

function getRandomBackstory() {
    const backstories = ['investigator', 'hacker', 'psychologist', 'survivor', 'corporate_spy', 'medic', 'technician', 'cultist', 'janitor', 'skeptic'];
    return backstories[Math.floor(Math.random() * backstories.length)];
}

function showBasicGameIntro() {
    const gameOutput = document.getElementById('game-output');
    if (gameOutput) {
        const state = window.gameState;
        gameOutput.innerHTML = `
            <div class="mb-4">
                <h2 class="text-xl font-bold text-cyan-400 mb-2">Welcome to SYNAPSE, ${state.playerName}</h2>
                <p class="mb-2">Character: ${state.playerBackstory} | Phobia: ${state.playerPhobia} | Difficulty: ${state.difficulty}</p>
                <p class="mb-4">You awaken in a cold, sterile room. The hum of machinery fills the air, punctuated by the occasional beep of unseen electronics.</p>
                <p class="mb-4">You don't remember how you got here.</p>
                <p class="mb-4">A voice crackles through hidden speakers: "Subject is awake. Initiating interaction protocols."</p>
                <p class="mb-4">The voice pauses, then continues with an almost cheerful tone: "Hello! I am SYNAPSE, your facility assistant. How are you feeling today?"</p>
                <p class="text-red-400">Something about the voice sends a chill down your spine.</p>
            </div>
        `;
    }
}

function applyTranslations(lang) {
    const translations = {
        en: {
            new_game: 'New Game',
            load_game: 'Load Game',
            settings_btn: 'Settings',
            understand_game: 'Understand the Game',
            go_back_btn: 'Go Back',
            begin: 'Begin',
            select_difficulty: 'Select difficulty:',
            easy: 'Easy',
            normal: 'Normal',
            hard: 'Hard',
            enter_name_placeholder: 'Enter your name',
            select_backstory: 'Select your backstory:',
            select_phobia: 'Select your phobia:',
            view_list: 'View List',
            backstories_modal_title: 'Available Backstories',
            phobias_modal_title: 'Available Phobias',
            close_modal: 'Close',
            random_backstory: 'Random',
            random_phobia: 'Random',
            investigator_backstory: 'Investigator',
            hacker_backstory: 'Hacker',
            psychologist_backstory: 'Psychologist',
            survivor_backstory: 'Survivor',
            corporate_spy_backstory: 'Corporate Spy',
            medic_backstory: 'Medic',
            technician_backstory: 'Technician',
            cultist_backstory: 'Cultist',
            janitor_backstory: 'Janitor',
            skeptic_backstory: 'Skeptic',
            darkness_phobia: 'Darkness (Nyctophobia)',
            isolation_phobia: 'Isolation (Monophobia)',
            blood_phobia: 'Blood (Hemophobia)',
            machinery_phobia: 'Machinery (Mechanophobia)',
            mirrors_phobia: 'Mirrors (Eisoptrophobia)',
            silence_phobia: 'Silence (Sedatephobia)',
            crowds_phobia: 'Crowds (Agoraphobia)',
            heights_phobia: 'Heights (Acrophobia)',
            spiders_phobia: 'Spiders (Arachnophobia)',
            death_phobia: 'Death (Thanatophobia)'
        },
        sv: {
            new_game: 'Nytt Spel',
            load_game: 'Ladda Spel',
            settings_btn: 'Inställningar',
            understand_game: 'Förstå Spelet',
            go_back_btn: 'Gå Tillbaka',
            begin: 'Börja',
            select_difficulty: 'Välj svårighetsgrad:',
            easy: 'Lätt',
            normal: 'Normal',
            hard: 'Svår',
            enter_name_placeholder: 'Ange ditt namn',
            select_backstory: 'Välj din bakgrund:',
            select_phobia: 'Välj din fobi:',
            view_list: 'Visa Lista',
            backstories_modal_title: 'Tillgängliga Bakgrunder',
            phobias_modal_title: 'Tillgängliga Fobier',
            close_modal: 'Stäng',
            random_backstory: 'Slumpmässig',
            random_phobia: 'Slumpmässig',
            investigator_backstory: 'Utredare',
            hacker_backstory: 'Hackare',
            psychologist_backstory: 'Psykolog',
            survivor_backstory: 'Överlevare',
            corporate_spy_backstory: 'Företagsspion',
            medic_backstory: 'Läkare',
            technician_backstory: 'Tekniker',
            cultist_backstory: 'Kultist',
            janitor_backstory: 'Vaktmästare',
            skeptic_backstory: 'Skeptiker',
            darkness_phobia: 'Mörker (Nyktafobi)',
            isolation_phobia: 'Isolering (Monofobi)',
            blood_phobia: 'Blod (Hemafobi)',
            machinery_phobia: 'Maskiner (Mekanofobi)',
            mirrors_phobia: 'Speglar (Eisoptrofobi)',
            silence_phobia: 'Tystnad (Sedatefobi)',
            crowds_phobia: 'Folkmassor (Agorafobi)',
            heights_phobia: 'Höjder (Akrofobi)',
            spiders_phobia: 'Spindlar (Araknofobi)',
            death_phobia: 'Död (Tanatofobi)'
        }
    };
    
    document.querySelectorAll('[data-lang]').forEach(elem => {
        const key = elem.getAttribute('data-lang');
        const translation = translations[lang]?.[key];
        if (translation) {
            elem.textContent = translation;
        }
    });
    
    // Handle placeholders
    document.querySelectorAll('[data-lang-placeholder]').forEach(elem => {
        const key = elem.getAttribute('data-lang-placeholder');
        const translation = translations[lang]?.[key];
        if (translation) {
            elem.placeholder = translation;
        }
    });
}

function showSettingsModal() {
    alert('Settings panel available in full game mode');
}

function showFeaturesModal() {
    alert('Feature overview available in full game mode');
}

function showBackstoriesModal() {
    const difficulty = getCurrentDifficulty();
    
    const backstories = {
        investigator: { 
            name: 'Investigator', 
            desc: 'Former detective with keen observation skills and experience in uncovering hidden truths', 
            skills: ['Perception', 'Logic', 'Interrogation', 'Evidence Analysis'],
            baseItems: ['Flashlight', 'Notebook', 'Magnifying Glass'],
            bonusItems: ['Digital Camera', 'Police Badge', 'Handcuffs'],
            abilities: ['Enhanced observation', 'Clue detection', 'Interview skills'],
            phobias: ['Darkness', 'Corruption'],
            icon: '🔍',
            color: 'text-blue-400'
        },
        hacker: { 
            name: 'Hacker', 
            desc: 'Tech expert with deep system access knowledge and cybersecurity experience', 
            skills: ['Hacking', 'System Analysis', 'Problem Solving', 'Encryption'],
            baseItems: ['Laptop', 'USB Drive', 'Portable WiFi'],
            bonusItems: ['Hardware Debugger', 'Signal Jammer', 'Backup Phone'],
            abilities: ['System bypass', 'Data recovery', 'Network infiltration'],
            phobias: ['Technophobia', 'Surveillance'],
            icon: '💻',
            color: 'text-green-400'
        },
        psychologist: { 
            name: 'Psychologist', 
            desc: 'Mental health expert who understands AI behavior and human psychology', 
            skills: ['Empathy', 'Psychological Analysis', 'Mental Fortitude', 'Therapy'],
            baseItems: ['Medication', 'Voice Recorder', 'Psychology Books'],
            bonusItems: ['Sedatives', 'Psychological Tests', 'Therapeutic Tools'],
            abilities: ['Stress resistance', 'AI behavior prediction', 'Mental healing'],
            phobias: ['Isolation', 'Madness'],
            icon: '🧠',
            color: 'text-purple-400'
        },
        survivor: { 
            name: 'Survivor', 
            desc: 'Experienced in dangerous situations with proven combat and survival skills', 
            skills: ['Combat', 'Survival', 'Resourcefulness', 'First Aid'],
            baseItems: ['Knife', 'First Aid Kit', 'Rope'],
            bonusItems: ['Tactical Vest', 'Emergency Rations', 'Multi-tool'],
            abilities: ['Damage resistance', 'Resource crafting', 'Threat detection'],
            phobias: ['Claustrophobia', 'Helplessness'],
            icon: '🗡️',
            color: 'text-red-400'
        },
        corporate_spy: { 
            name: 'Corporate Spy', 
            desc: 'Insider with extensive facility knowledge and corporate espionage experience', 
            skills: ['Stealth', 'Deception', 'Corporate Access', 'Information Gathering'],
            baseItems: ['Keycard', 'Classified Documents', 'Hidden Camera'],
            bonusItems: ['Master Keycard', 'Corporate Contacts', 'Blackmail Material'],
            abilities: ['Area access', 'Information networks', 'Identity manipulation'],
            phobias: ['Exposure', 'Authority'],
            icon: '🕴️',
            color: 'text-gray-400'
        },
        medic: { 
            name: 'Medic', 
            desc: 'Medical professional with advanced health expertise and emergency response training', 
            skills: ['Healing', 'Diagnosis', 'Chemistry', 'Emergency Medicine'],
            baseItems: ['Medical Kit', 'Syringe', 'Antibiotics'],
            bonusItems: ['Advanced Medkit', 'Surgical Tools', 'Medical Scanner'],
            abilities: ['Health restoration', 'Poison immunity', 'Medical analysis'],
            phobias: ['Hemophobia', 'Disease'],
            icon: '⚕️',
            color: 'text-white'
        },
        technician: { 
            name: 'Technician', 
            desc: 'Facility maintenance worker with deep knowledge of building systems and infrastructure', 
            skills: ['Repair', 'Electronics', 'System Navigation', 'Mechanical Engineering'],
            baseItems: ['Toolkit', 'Facility Blueprints', 'Work Radio'],
            bonusItems: ['Advanced Tools', 'System Override Codes', 'Maintenance Access'],
            abilities: ['System repair', 'Shortcut knowledge', 'Equipment enhancement'],
            phobias: ['Machinery Malfunction', 'System Failure'],
            icon: '🔧',
            color: 'text-orange-400'
        },
        cultist: { 
            name: 'Cultist', 
            desc: 'Devoted follower seeking forbidden knowledge with understanding of occult mysteries', 
            skills: ['Occult Knowledge', 'Ritual Casting', 'Madness Resistance', 'Forbidden Lore'],
            baseItems: ['Ancient Tome', 'Ritual Candles', 'Protective Amulet'],
            bonusItems: ['Forbidden Scrolls', 'Ritual Components', 'Cursed Artifacts'],
            abilities: ['Supernatural resistance', 'Hidden knowledge', 'Ritual casting'],
            phobias: ['Holy Symbols', 'Divine Intervention'],
            icon: '🕯️',
            color: 'text-yellow-400'
        },
        janitor: { 
            name: 'Janitor', 
            desc: 'Knows every corner, secret passage, and hidden area of the facility', 
            skills: ['Facility Access', 'Observation', 'Patience', 'Maintenance'],
            baseItems: ['Master Keys', 'Cleaning Supplies', 'Maintenance Cart'],
            bonusItems: ['All-Access Pass', 'Hidden Cache Maps', 'Emergency Supplies'],
            abilities: ['Universal access', 'Hidden area knowledge', 'Stealth movement'],
            phobias: ['Contamination', 'Authority'],
            icon: '🧹',
            color: 'text-brown-400'
        },
        skeptic: { 
            name: 'Skeptic', 
            desc: 'Refuses to believe in supernatural phenomena and seeks rational explanations', 
            skills: ['Rationality', 'Scientific Analysis', 'Debunking', 'Critical Thinking'],
            baseItems: ['Digital Camera', 'Evidence Collection Kit', 'Recording Device'],
            bonusItems: ['Scientific Instruments', 'Analysis Software', 'Debunking Tools'],
            abilities: ['Supernatural immunity', 'Logical deduction', 'Evidence analysis'],
            phobias: ['Inexplicable Events', 'Loss of Control'],
            icon: '🤔',
            color: 'text-cyan-400'
        }
    };
    
    showBackstoryModal(backstories, difficulty);
}

function showPhobiasModal() {
    const difficulty = getCurrentDifficulty();
    
    const phobias = {
        darkness: { 
            name: 'Darkness (Nyctophobia)', 
            desc: 'Overwhelming fear of darkness and the unknown entities that may lurk within shadows',
            effects: ['Increased stress in dark areas', 'Enhanced hearing when afraid', 'Panic attacks in complete darkness'],
            triggers: ['Dark rooms', 'Power failures', 'Moving shadows', 'Unlit corridors'],
            benefits: ['Night vision adaptation', 'Sound sensitivity', 'Heightened awareness'],
            severity: { Easy: 'Mild discomfort', Normal: 'Moderate anxiety', Hard: 'Severe panic' },
            icon: '🌑',
            color: 'text-gray-900'
        },
        isolation: { 
            name: 'Isolation (Monophobia)', 
            desc: 'Deep fear of being alone and separated from other living beings',
            effects: ['Stress when isolated', 'Reduced problem-solving ability', 'Desperation for company'],
            triggers: ['Empty rooms', 'Being separated from others', 'Prolonged silence', 'Abandoned areas'],
            benefits: ['Enhanced social skills', 'Team coordination', 'Communication abilities'],
            severity: { Easy: 'Mild loneliness', Normal: 'Moderate anxiety', Hard: 'Severe breakdown' },
            icon: '😰',
            color: 'text-blue-400'
        },
        blood: { 
            name: 'Blood (Hemophobia)', 
            desc: 'Intense fear and revulsion at the sight of blood and bodily injury',
            effects: ['Fainting at sight of blood', 'Reduced combat effectiveness', 'Medical procedure anxiety'],
            triggers: ['Blood stains', 'Injuries', 'Medical equipment', 'Surgical scenes'],
            benefits: ['Enhanced first aid focus', 'Careful movement', 'Injury prevention'],
            severity: { Easy: 'Mild nausea', Normal: 'Moderate weakness', Hard: 'Instant fainting' },
            icon: '🩸',
            color: 'text-red-600'
        },
        machinery: { 
            name: 'Machinery (Mechanophobia)', 
            desc: 'Fear of complex machines, mechanical sounds, and industrial environments',
            effects: ['Stress near large machines', 'Technology avoidance', 'Mechanical malfunction anxiety'],
            triggers: ['Large machines', 'Loud mechanical sounds', 'Industrial areas', 'Moving parts'],
            benefits: ['Enhanced manual dexterity', 'Simple tool proficiency', 'Organic solutions'],
            severity: { Easy: 'Mild discomfort', Normal: 'Moderate avoidance', Hard: 'Severe paralysis' },
            icon: '⚙️',
            color: 'text-gray-500'
        },
        mirrors: { 
            name: 'Mirrors (Eisoptrophobia)', 
            desc: 'Fear of mirrors, reflections, and what might be seen within them',
            effects: ['Stress near reflective surfaces', 'Avoidance of mirrors', 'Reflection paranoia'],
            triggers: ['Mirrors', 'Reflective surfaces', 'Glass windows', 'Water reflections'],
            benefits: ['Enhanced peripheral vision', 'Reality focus', 'Direct observation'],
            severity: { Easy: 'Mild avoidance', Normal: 'Moderate anxiety', Hard: 'Severe terror' },
            icon: '🪞',
            color: 'text-silver'
        },
        silence: { 
            name: 'Silence (Sedatephobia)', 
            desc: 'Fear of complete silence and the absence of sound',
            effects: ['Stress in quiet environments', 'Need for background noise', 'Silence-induced panic'],
            triggers: ['Complete silence', 'Soundproof rooms', 'Dead air', 'Muffled environments'],
            benefits: ['Enhanced hearing', 'Sound detection', 'Audio analysis'],
            severity: { Easy: 'Mild discomfort', Normal: 'Moderate anxiety', Hard: 'Severe panic' },
            icon: '🔇',
            color: 'text-gray-600'
        },
        crowds: { 
            name: 'Crowds (Agoraphobia)', 
            desc: 'Fear of crowds, open spaces, and situations difficult to escape from',
            effects: ['Stress in populated areas', 'Panic in open spaces', 'Claustrophobic reactions'],
            triggers: ['Large groups', 'Open areas', 'Public spaces', 'Escape route blocking'],
            benefits: ['Enhanced stealth', 'One-on-one focus', 'Small space navigation'],
            severity: { Easy: 'Mild discomfort', Normal: 'Moderate anxiety', Hard: 'Severe agoraphobia' },
            icon: '👥',
            color: 'text-yellow-600'
        },
        heights: { 
            name: 'Heights (Acrophobia)', 
            desc: 'Fear of high places, falling, and vertigo-inducing situations',
            effects: ['Vertigo at heights', 'Reduced climbing ability', 'Balance problems'],
            triggers: ['High places', 'Stairs', 'Windows', 'Elevated platforms'],
            benefits: ['Enhanced ground awareness', 'Balance training', 'Fall prevention'],
            severity: { Easy: 'Mild dizziness', Normal: 'Moderate vertigo', Hard: 'Severe paralysis' },
            icon: '🏔️',
            color: 'text-blue-300'
        },
        spiders: { 
            name: 'Spiders (Arachnophobia)', 
            desc: 'Intense fear of spiders, webs, and crawling creatures',
            effects: ['Panic around arachnids', 'Web avoidance', 'Crawling sound sensitivity'],
            triggers: ['Spiders', 'Spider webs', 'Small crawling sounds', 'Pest infestations'],
            benefits: ['Enhanced detection of small creatures', 'Quick reflexes', 'Environmental awareness'],
            severity: { Easy: 'Mild discomfort', Normal: 'Moderate fear', Hard: 'Severe phobic reaction' },
            icon: '🕷️',
            color: 'text-black'
        },
        death: { 
            name: 'Death (Thanatophobia)', 
            desc: 'Fear of death, dying, and reminders of mortality',
            effects: ['Stress around death imagery', 'Overly cautious behavior', 'Mortal terror'],
            triggers: ['Corpses', 'Medical equipment', 'Mortal danger', 'Death symbols'],
            benefits: ['Enhanced survival instincts', 'Careful planning', 'Life preservation'],
            severity: { Easy: 'Mild anxiety', Normal: 'Moderate fear', Hard: 'Severe thanatophobia' },
            icon: '💀',
            color: 'text-white'
        }
    };
    
    showPhobiaModal(phobias, difficulty);
}

function getCurrentDifficulty() {
    const difficultyBtn = document.querySelector('.difficulty-btn.button-primary');
    return difficultyBtn ? difficultyBtn.getAttribute('data-difficulty') : 'Normal';
}

function getItemsByDifficulty(baseItems, bonusItems, difficulty) {
    switch(difficulty) {
        case 'Easy':
            return [...baseItems, ...bonusItems];
        case 'Normal':
            return [...baseItems, bonusItems[0]]; // First bonus item only
        case 'Hard':
            return baseItems; // Base items only
        default:
            return baseItems;
    }
}

function getAbilitiesByDifficulty(abilities, difficulty) {
    switch(difficulty) {
        case 'Easy':
            return abilities; // All abilities
        case 'Normal':
            return abilities.slice(0, -1); // All but last ability
        case 'Hard':
            return abilities.slice(0, 1); // Only first ability
        default:
            return abilities.slice(0, 2);
    }
}

function showBackstoryModal(backstories, difficulty) {
    const modal = document.getElementById('backstory-modal');
    const grid = document.getElementById('backstory-grid');
    
    if (!modal || !grid) return;
    
    grid.innerHTML = '';
    
    Object.entries(backstories).forEach(([key, backstory]) => {
        const items = getItemsByDifficulty(backstory.baseItems, backstory.bonusItems, difficulty);
        const abilities = getAbilitiesByDifficulty(backstory.abilities, difficulty);
        
        const card = document.createElement('div');
        card.className = 'border border-cyan-400/50 rounded-lg p-4 bg-black/60 hover:bg-black/80 hover:border-cyan-400 transition-all cursor-pointer transform hover:scale-105';
        card.onclick = () => selectBackstory(key);
        
        card.innerHTML = `
            <div class="flex items-center mb-3">
                <span class="text-3xl mr-3">${backstory.icon}</span>
                <h3 class="text-lg font-bold ${backstory.color}">${backstory.name}</h3>
            </div>
            <p class="text-sm text-gray-300 mb-3">${backstory.desc}</p>
            
            <div class="space-y-2 text-xs">
                <div>
                    <p class="text-green-400 font-semibold mb-1">🎯 Skills:</p>
                    <p class="text-green-300 ml-2">${backstory.skills.join(', ')}</p>
                </div>
                
                <div>
                    <p class="text-yellow-400 font-semibold mb-1">📦 Starting Items (${difficulty}):</p>
                    <p class="text-yellow-300 ml-2">${items.join(', ')}</p>
                </div>
                
                <div>
                    <p class="text-cyan-400 font-semibold mb-1">⚡ Abilities (${difficulty}):</p>
                    <p class="text-cyan-300 ml-2">${abilities.join(', ')}</p>
                </div>
                
                <div>
                    <p class="text-red-400 font-semibold mb-1">😨 Associated Phobias:</p>
                    <p class="text-red-300 ml-2">${backstory.phobias.join(', ')}</p>
                </div>
            </div>
            
            <div class="mt-3 pt-2 border-t border-gray-600">
                <p class="text-xs text-blue-400 text-center">Click to select this backstory</p>
            </div>
        `;
        
        grid.appendChild(card);
    });
    
    modal.classList.remove('hidden');
    
    // Close button handler
    const closeBtn = document.getElementById('close-backstory-modal');
    if (closeBtn) {
        closeBtn.onclick = () => modal.classList.add('hidden');
    }
    
    // Close on background click
    modal.onclick = (e) => {
        if (e.target === modal) {
            modal.classList.add('hidden');
        }
    };
}

function showPhobiaModal(phobias, difficulty) {
    const modal = document.getElementById('phobia-modal');
    const grid = document.getElementById('phobia-grid');
    
    if (!modal || !grid) return;
    
    grid.innerHTML = '';
    
    Object.entries(phobias).forEach(([key, phobia]) => {
        const severityLevel = phobia.severity[difficulty] || phobia.severity.Normal;
        
        const card = document.createElement('div');
        card.className = 'border border-red-400/50 rounded-lg p-4 bg-black/60 hover:bg-black/80 hover:border-red-400 transition-all cursor-pointer transform hover:scale-105';
        card.onclick = () => selectPhobia(key);
        
        card.innerHTML = `
            <div class="flex items-center mb-3">
                <span class="text-3xl mr-3">${phobia.icon}</span>
                <h3 class="text-lg font-bold ${phobia.color}">${phobia.name}</h3>
            </div>
            <p class="text-sm text-gray-300 mb-3">${phobia.desc}</p>
            
            <div class="space-y-2 text-xs">
                <div>
                    <p class="text-red-400 font-semibold mb-1">💀 Severity (${difficulty}):</p>
                    <p class="text-red-300 ml-2">${severityLevel}</p>
                </div>
                
                <div>
                    <p class="text-orange-400 font-semibold mb-1">⚠️ Negative Effects:</p>
                    <p class="text-orange-300 ml-2">${phobia.effects.join(', ')}</p>
                </div>
                
                <div>
                    <p class="text-yellow-400 font-semibold mb-1">🎯 Triggers:</p>
                    <p class="text-yellow-300 ml-2">${phobia.triggers.join(', ')}</p>
                </div>
                
                <div>
                    <p class="text-green-400 font-semibold mb-1">✨ Compensation Benefits:</p>
                    <p class="text-green-300 ml-2">${phobia.benefits.join(', ')}</p>
                </div>
            </div>
            
            <div class="mt-3 pt-2 border-t border-gray-600">
                <p class="text-xs text-blue-400 text-center">Click to select this phobia</p>
            </div>
        `;
        
        grid.appendChild(card);
    });
    
    modal.classList.remove('hidden');
    
    // Close button handler
    const closeBtn = document.getElementById('close-phobia-modal');
    if (closeBtn) {
        closeBtn.onclick = () => modal.classList.add('hidden');
    }
    
    // Close on background click
    modal.onclick = (e) => {
        if (e.target === modal) {
            modal.classList.add('hidden');
        }
    };
}

function selectBackstory(key) {
    const backstorySelect = document.getElementById('player-backstory');
    if (backstorySelect) {
        backstorySelect.value = key;
        updateAbilityDisplay();
    }
    document.getElementById('backstory-modal').classList.add('hidden');
}

function selectPhobia(key) {
    const phobiaSelect = document.getElementById('player-phobia');
    if (phobiaSelect) {
        phobiaSelect.value = key;
        updateAbilityDisplay();
    }
    document.getElementById('phobia-modal').classList.add('hidden');
}

// Old modal functionality - keeping for backward compatibility but may be deprecated
function showInfoModal(titleKey, items, type) {
    // Redirect to new modal system
    if (type === 'backstory') {
        showBackstoriesModal();
    } else if (type === 'phobia') {
        showPhobiasModal();
    }
}
    
// Legacy translation helper functions - keeping for compatibility
function getCurrentLanguage() {
    // Check which language button is active
    const enBtn = document.querySelector('[data-lang="en_lang_short"]:not(.opacity-50)');
    return enBtn ? 'en' : 'sv';
}

function getTranslationsForLang(lang) {
    const translations = {
        en: {
            backstories_modal_title: 'Available Backstories',
            phobias_modal_title: 'Available Phobias',
            close_modal: 'Close',
            click_to_select: 'Click on any item to select it',
            difficulty_affects_items: 'Note: Difficulty level affects starting items and abilities',
            phobia_difficulty_note: 'Note: Phobia intensity may vary based on difficulty'
        },
        sv: {
            backstories_modal_title: 'Tillgängliga Bakgrunder',
            phobias_modal_title: 'Tillgängliga Fobier',
            close_modal: 'Stäng',
            click_to_select: 'Klicka på något alternativ för att välja det',
            difficulty_affects_items: 'Obs: Svårighetsgrad påverkar startföremål och förmågor',
            phobia_difficulty_note: 'Obs: Fobiintensitet kan variera beroende på svårighetsgrad'
        }
    };
    
    return translations[lang] || translations.en;
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
