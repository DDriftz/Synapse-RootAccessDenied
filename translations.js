// translations.js - Comprehensive language system for SYNAPSE

window.currentLanguage = 'en';

window.translations = {
    en: {
        // UI Elements
        new_game: 'New Game',
        load_game: 'Load Game',
        settings_btn: 'Settings',
        understand_game: 'Understand the Game',
        go_back_btn: 'Go Back',
        begin: 'Begin',
        close: 'Close',
        
        // Character Creation
        select_difficulty: 'Select difficulty:',
        easy: 'Easy',
        normal: 'Normal',
        hard: 'Hard',
        enter_name_placeholder: 'Enter your name',
        select_backstory: 'Select your backstory:',
        select_phobia: 'Select your phobia:',
        view_list: 'View List',
        
        // Game Interface
        stats_title: 'STATS',
        inventory_title: 'INVENTORY',
        objectives_title: 'OBJECTIVES',
        journal_title: 'JOURNAL',
        achievements_title: 'ACHIEVEMENTS',
        map_title: 'MAP',
        settings_title: 'SETTINGS',
        
        // Game Stats
        sanity: 'Sanity',
        awareness: 'Awareness',
        health: 'Health',
        stamina: 'Stamina',
        fear: 'Fear',
        stress: 'Stress',
        tone: 'Tone',
        turn: 'Turn',
        level: 'Level',
        xp: 'XP',
        
        // AI Personalities
        ai_friendly: 'Friendly',
        ai_neutral: 'Neutral',
        ai_suspicious: 'Suspicious',
        ai_hostile: 'Hostile',
        ai_corrupted: 'Corrupted',
        
        // Commands and Game Text
        status_btn: 'Status',
        help_command: 'help',
        inventory_command: 'inventory',
        look_command: 'look',
        status_command: 'status',
        
        // Game Messages
        inventory_empty: 'Empty',
        no_objectives: '(None)',
        command_prompt: '>',
        welcome_message: 'Welcome',
        awakening_description: 'You awaken in a cold, sterile room. The hum of machinery fills the air, punctuated by the occasional beep of unseen electronics.',
        type_look_help: 'Type "look around" to examine your surroundings, or "help" for available commands.',
        you_are_in_sterile_room: 'You are in a sterile white room. The walls are smooth and featureless. A single door marked "EXIT" is visible on the far wall. Strange symbols flicker on a nearby monitor.',
        player_name: 'Name',
        
        // SYNAPSE Game Content
        synapse_greeting: 'Hello! I am SYNAPSE, your facility assistant. How are you feeling today?',
        synapse_awakening: 'Subject is awake. Initiating interaction protocols.',
        synapse_system_active: 'SYNAPSE - System Active',
        
        // Dialogue Options
        who_are_you: 'Who are you?',
        why_are_you_here: 'Why are you here?',
        what_do_you_want: 'What do you want?',
        comfort_synapse: '[Comfort SYNAPSE]',
        probe_for_secrets: '[Probe for secrets]',
        ask_about_facility: '[Ask about facility]',
        
        // Backstories
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
        journalist_backstory: 'Journalist',
        detective_backstory: 'Detective',
        occultist_backstory: 'Occultist',
        mercenary_backstory: 'Mercenary',
        scientist_backstory: 'Scientist',
        security_guard_backstory: 'Security Guard',
        engineer_backstory: 'Engineer',
        therapist_backstory: 'Therapist',
        archivist_backstory: 'Archivist',
        maintenance_worker_backstory: 'Maintenance Worker',
        
        // Phobias
        darkness_phobia: 'Darkness (Nyctophobia)',
        isolation_phobia: 'Isolation (Monophobia)',
        blood_phobia: 'Blood (Hemophobia)',
        machinery_phobia: 'Machinery (Mechanophobia)',
        mirrors_phobia: 'Mirrors (Eisoptrophobia)',
        silence_phobia: 'Silence (Sedatephobia)',
        crowds_phobia: 'Crowds (Agoraphobia)',
        heights_phobia: 'Heights (Acrophobia)',
        spiders_phobia: 'Spiders (Arachnophobia)',
        death_phobia: 'Death (Thanatophobia)',
        confinement_phobia: 'Confinement (Claustrophobia)',
        water_phobia: 'Water (Aquaphobia)',
        fire_phobia: 'Fire (Pyrophobia)',
        needles_phobia: 'Needles (Trypanophobia)',
        clowns_phobia: 'Clowns (Coulrophobia)',
        dolls_phobia: 'Dolls (Pediophobia)',
        insects_phobia: 'Insects (Entomophobia)',
        thunder_phobia: 'Thunder (Astraphobia)',
        medical_phobia: 'Medical Procedures (Iatrophobia)',
        technology_phobia: 'Technology (Technophobia)',
        
        // Help Text
        help_available_commands: 'Available commands:',
        help_look: 'look - Examine your surroundings',
        help_status: 'status - Check your current state',
        help_inventory: 'check inventory - View your items',
        help_help: 'help - Show this help text',
        
        // Status Messages
        status_location: 'Location',
        status_condition: 'Condition',
        status_backstory: 'Backstory',
        status_phobia: 'Phobia',
        status_difficulty: 'Difficulty',
        
        // Notifications
        language_changed: 'Language changed to English',
        game_saved: 'Game saved',
        game_loaded: 'Game loaded',
        
        // Errors
        command_not_recognized: 'Command not recognized. Type "help" for available commands.',
        invalid_input: 'Invalid input. Please try again.',
        
        // Lobby Description
        lobby_title: '--- Lobby ---',
        lobby_description: 'Flickering lights cast eerie shadows.',
        lobby_objects: 'access code, sign, datapad log',
        lobby_exits: 'north, east, south, west',
        you_dont_remember: "You don't remember how you got here.",
        voice_crackles: 'A voice crackles through hidden speakers: "Subject is awake. Initiating interaction protocols."',
        something_chills: 'Something about the voice sends a chill down your spine.'
    },
    
    sv: {
        // UI Elements  
        new_game: 'Nytt Spel',
        load_game: 'Ladda Spel',
        settings_btn: 'Inställningar',
        understand_game: 'Förstå Spelet',
        go_back_btn: 'Gå Tillbaka',
        begin: 'Börja',
        close: 'Stäng',
        
        // Character Creation
        select_difficulty: 'Välj svårighetsgrad:',
        easy: 'Lätt',
        normal: 'Normal',
        hard: 'Svår',
        enter_name_placeholder: 'Ange ditt namn',
        select_backstory: 'Välj din bakgrund:',
        select_phobia: 'Välj din fobi:',
        view_list: 'Visa Lista',
        
        // Game Interface
        stats_title: 'STATISTIK',
        inventory_title: 'INVENTARIE',
        objectives_title: 'MÅL',
        journal_title: 'DAGBOK',
        achievements_title: 'PRESTATIONER',
        map_title: 'KARTA',
        settings_title: 'INSTÄLLNINGAR',
        
        // Game Stats
        sanity: 'Mental Hälsa',
        awareness: 'Medvetenhet',
        health: 'Hälsa',
        stamina: 'Uthållighet',
        fear: 'Rädsla',
        stress: 'Stress',
        tone: 'Ton',
        turn: 'Tur',
        level: 'Nivå',
        xp: 'XP',
        
        // AI Personalities
        ai_friendly: 'Vänlig',
        ai_neutral: 'Neutral',
        ai_suspicious: 'Misstänksam',
        ai_hostile: 'Fientlig',
        ai_corrupted: 'Korrupt',
        
        // Commands and Game Text
        status_btn: 'Status',
        help_command: 'hjälp',
        inventory_command: 'inventarie',
        look_command: 'titta',
        status_command: 'status',
        
        // Game Messages
        inventory_empty: 'Tom',
        no_objectives: '(Inga)',
        command_prompt: '>',
        welcome_message: 'Välkommen',
        awakening_description: 'Du vaknar i ett kallt, sterilt rum. Ljudet av maskiner fyller luften, avbrutet av enstaka pip från osedda elektronik.',
        type_look_help: 'Skriv "titta omkring" för att undersöka din omgivning, eller "hjälp" för tillgängliga kommandon.',
        you_are_in_sterile_room: 'Du är i ett sterilt vitt rum. Väggarna är släta och utan särdrag. En enda dörr märkt "UTGÅNG" syns på den bortre väggen. Konstiga symboler flimrar på en närliggande monitor.',
        player_name: 'Namn',
        
        // SYNAPSE Game Content
        synapse_greeting: 'Hej! Jag är SYNAPSE, din facilitetsassistent. Hur mår du idag?',
        synapse_awakening: 'Subjektet är vaken. Startar interaktionsprotokoll.',
        synapse_system_active: 'SYNAPSE - System Aktivt',
        
        // Dialogue Options
        who_are_you: 'Vem är du?',
        why_are_you_here: 'Varför är du här?',
        what_do_you_want: 'Vad vill du?',
        comfort_synapse: '[Trösta SYNAPSE]',
        probe_for_secrets: '[Sök efter hemligheter]',
        ask_about_facility: '[Fråga om anläggningen]',
        
        // Backstories
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
        journalist_backstory: 'Journalist',
        detective_backstory: 'Detektiv',
        occultist_backstory: 'Ockultist',
        mercenary_backstory: 'Legosoldat',
        scientist_backstory: 'Forskare',
        security_guard_backstory: 'Säkerhetsvakt',
        engineer_backstory: 'Ingenjör',
        therapist_backstory: 'Terapeut',
        archivist_backstory: 'Arkivarie',
        maintenance_worker_backstory: 'Underhållsarbetare',
        
        // Phobias
        darkness_phobia: 'Mörker (Nyktafobi)',
        isolation_phobia: 'Isolering (Monofobi)',
        blood_phobia: 'Blod (Hemafobi)',
        machinery_phobia: 'Maskiner (Mekanofobi)',
        mirrors_phobia: 'Speglar (Eisoptrofobi)',
        silence_phobia: 'Tystnad (Sedatefobi)',
        crowds_phobia: 'Folkmassor (Agorafobi)',
        heights_phobia: 'Höjder (Akrofobi)',
        spiders_phobia: 'Spindlar (Araknofobi)',
        death_phobia: 'Död (Tanatofobi)',
        confinement_phobia: 'Instängdhet (Klaustrofobi)',
        water_phobia: 'Vatten (Akvafobi)',
        fire_phobia: 'Eld (Pyrofobi)',
        needles_phobia: 'Nålar (Trypanofobi)',
        clowns_phobia: 'Clowner (Coulrofobi)',
        dolls_phobia: 'Dockor (Pediofobi)',
        insects_phobia: 'Insekter (Entomofobi)',
        thunder_phobia: 'Åska (Astrafobi)',
        medical_phobia: 'Medicinska Procedurer (Iatrofobi)',
        technology_phobia: 'Teknologi (Teknofobi)',
        
        // Help Text
        help_available_commands: 'Tillgängliga kommandon:',
        help_look: 'titta - Undersök din omgivning',
        help_status: 'status - Kontrollera ditt nuvarande tillstånd',
        help_inventory: 'inventarie - Visa dina föremål',
        help_help: 'hjälp - Visa denna hjälptext',
        
        // Status Messages
        status_location: 'Plats',
        status_condition: 'Tillstånd',
        status_backstory: 'Bakgrund',
        status_phobia: 'Fobi',
        status_difficulty: 'Svårighetsgrad',
        
        // Notifications
        language_changed: 'Språk ändrat till Svenska',
        game_saved: 'Spelet sparat',
        game_loaded: 'Spelet laddat',
        
        // Errors
        command_not_recognized: 'Kommando ej igenkänt. Skriv "hjälp" för tillgängliga kommandon.',
        invalid_input: 'Ogiltig inmatning. Försök igen.',
        
        // Lobby Description  
        lobby_title: '--- Lobby ---',
        lobby_description: 'Flimrande ljus kastar kusliga skuggor.',
        lobby_objects: 'åtkomstkod, skylt, dataplattans logg',
        lobby_exits: 'norr, öst, syd, väst',
        you_dont_remember: 'Du kommer inte ihåg hur du kom hit.',
        voice_crackles: 'En röst krasslar genom dolda högtalare: "Subjektet är vaken. Startar interaktionsprotokoll."',
        something_chills: 'Något med rösten sänder en rysning längs din ryggrad.'
    }
};

// Translation utility functions
window.t = function(key, lang = null) {
    const currentLang = lang || window.currentLanguage || 'en';
    const translation = window.translations[currentLang]?.[key];
    return translation || window.translations.en[key] || key;
};

window.setLanguage = function(language) {
    window.currentLanguage = language;
    applyTranslations(language);
    
    // Store language preference
    localStorage.setItem('synapse_language', language);
    
    // Update button states
    updateLanguageButtons(language);
    
    console.log(`Language changed to: ${language}`);
};

window.applyTranslations = function(lang) {
    window.currentLanguage = lang;
    
    // Update all elements with data-lang attributes
    document.querySelectorAll('[data-lang]').forEach(elem => {
        const key = elem.getAttribute('data-lang');
        const translation = t(key, lang);
        if (translation) {
            elem.textContent = translation;
        }
    });
    
    // Update all placeholders with data-lang-placeholder attributes
    document.querySelectorAll('[data-lang-placeholder]').forEach(elem => {
        const key = elem.getAttribute('data-lang-placeholder');
        const translation = t(key, lang);
        if (translation) {
            elem.placeholder = translation;
        }
    });
    
    // Update titles with data-lang-title attributes
    document.querySelectorAll('[data-lang-title]').forEach(elem => {
        const key = elem.getAttribute('data-lang-title');
        const translation = t(key, lang);
        if (translation) {
            elem.title = translation;
        }
    });
    
    // Update game content if currently playing
    updateGameContent(lang);
};

window.updateLanguageButtons = function(selectedLang) {
    document.querySelectorAll('[data-lang$="_lang_short"]').forEach(btn => {
        btn.classList.add('opacity-50');
        const langCode = btn.getAttribute('data-text').toLowerCase();
        if (langCode === selectedLang) {
            btn.classList.remove('opacity-50');
        }
    });
};

window.updateGameContent = function(lang) {
    // Update game interface panels
    const gameOutput = document.getElementById('game-output');
    if (gameOutput && gameOutput.innerHTML.includes('SYNAPSE')) {
        // Re-translate game content
        updateGamePanels(lang);
    }
};

window.updateGamePanels = function(lang) {
    // Update any dynamically generated content in the game
    const elements = document.querySelectorAll('.dynamic-content');
    elements.forEach(elem => {
        if (elem.dataset.translationKey) {
            elem.textContent = t(elem.dataset.translationKey, lang);
        }
    });
};

// Initialize language system
window.initializeLanguageSystem = function() {
    // Load saved language preference
    const savedLanguage = localStorage.getItem('synapse_language') || 'en';
    setLanguage(savedLanguage);
    
    // Set up language button event listeners
    document.querySelectorAll('[data-lang="en_lang_short"], [data-lang="sv_lang_short"]').forEach(btn => {
        btn.addEventListener('click', function() {
            const lang = this.getAttribute('data-text').toLowerCase();
            setLanguage(lang);
        });
    });
};

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeLanguageSystem);
} else {
    initializeLanguageSystem();
}
