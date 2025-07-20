    // SYNAPSE: AI HORROR GAME - V2.5 BUGFIX UPDATE - CRITICAL PATCH 1730
    
    // --- TRANSLATIONS ---
    const translations = {
        'en': {
            // Start & UI
            'title': 'SYNAPSE',
            'subtitle': 'Root Access Denied',
            'enter_game': 'Enter the Game',

            'game_description': 'SYNAPSE is a psychological horror text adventure game set in a dystopian future where you play as an investigator sent to uncover the truth behind a mysterious clandestine AI project. The game explores themes of artificial intelligence consciousness, corporate conspiracy, psychological manipulation, and the thin line between human and machine intelligence.',
            'new_game': 'New Game', 'load_game': 'Load Game', 
            'en_lang_short': 'EN', 'sv_lang_short': 'SV',
            'select_difficulty': 'Select difficulty:', 
            'beginner': 'Beginner', 'easy': 'Easy', 'normal': 'Normal', 'hard': 'Hard', 'nightmare': 'Nightmare',
            'fast':'Fast', 'slow': 'Slow',
            'enter_name_placeholder': 'Enter your name', 'enter_backstory_placeholder': 'Enter your backstory', 'view_choices': 'View Choices', 'choose_backstory_title': 'Choose a Backstory',
            'choose_backstory_desc': 'You can click a button to select a backstory, or type your choice on the main screen.',
            'begin': 'Begin', 'understand_game': 'Understand the Game', 'intro_1': 'Decades ago... a clandestine project was born...', 'intro_2': 'You have been sent to uncover what became of Project SYNAPSE...', 'intro_3': "As you activate the central terminal, a voice greets you... 'Hello, user.'",
            'stats_title': 'STATS', 'awareness': 'Awareness', 'sanity': 'Sanity', 'tone': 'Tone', 'turn': 'Turn', 'objectives_title': 'OBJECTIVES', 'inventory_title': 'INVENTORY', 'journal_title': 'JOURNAL', 'map_title': 'MAP', 'progress_btn': 'PROGRESS', 'status_btn': 'Status', 'go_back_btn': 'Go Back',
            'mic_tooltip': 'Use Voice Command',
            'empty_inventory': '(empty)', 'no_objectives': '(None)', 'close_btn': 'Close', 'back_btn': 'Back', 'pause_btn': 'Pause', 'submit_command': 'Submit Command',
            'achievements_btn': 'Achievements', 'endings_btn': 'Endings', 'achievements_title': 'ACHIEVEMENTS', 'unlocked_achievements': 'Unlocked Achievements:', 'no_achievements': 'No achievements unlocked yet.', 'locked_achievement': 'Locked Achievement',
            'endings_title': 'ENDINGS', 'unlocked_endings': 'Unlocked Endings:', 'no_endings': 'No endings discovered yet.',
            'history_title': 'HISTORY', 'pause_title': 'PAUS', 'resume_btn': 'Resume', 'main_menu_btn': 'Main Menu', 'confirm_main_menu': 'Are you sure you want to return to the main menu? Unsaved progress will be lost.', 'yes': 'Yes', 'no': 'No',
            'settings_btn': 'Settings', 'settings_title': 'SETTINGS', 'setting_master_volume': 'Enable All Sounds', 'setting_item_found': 'Object Found SFX', 'setting_high_awareness': 'High Awareness Warning', 'setting_low_sanity': 'Low Sanity Warning', 'setting_text_speed': 'Text Speed', 'setting_colorblind_mode': 'Colorblind Mode', 'setting_glitch_effect': 'Glitch Effect', 'setting_crt_effect': 'CRT Effect', 'setting_font_family': 'Font', 'setting_ui_theme': 'UI Theme', 'setting_reset_defaults': 'Reset to Defaults', 'lang_switch_btn': 'Switch Language',
            'theme_green': 'Green', 'theme_amber': 'Amber', 'theme_blue': 'Blue',
            'features_title': 'Understand the Game', 
            'features_core_mechanics_title': 'Core Gameplay Mechanics', 
            'features_stats_system': 'Stats System:',
            'features_sanity_desc': 'A core stat that decreases in dangerous rooms or during unsettling events. Low sanity can cause hallucinations and visual glitches, and reaching zero results in a "Mind Shattered" ending. It can be restored by <span class="text-yellow-400">resting</span> in safe rooms or using items like <span class="text-yellow-400">stimpacks</span>.',
            'features_awareness_desc': 'Tracks how much the AI knows about you. It increases when you perform significant actions or ask probing questions. High awareness changes the AI\'s tone and can lead to negative consequences, including the "Assimilated" ending.',
            'features_turn_based_title': 'Turn-Based Progression:', 'features_turn_based_desc': 'The game progresses in <span class="text-cyan-400">turns</span>. Most commands (like moving, using items, or talking) advance the turn counter.',
            'features_dynamic_ai_title': 'Dynamic AI Tone:', 'features_dynamic_ai_desc': 'SYNAPSE\'s personality changes based on your Awareness level, shifting from <span class="text-green-400">Friendly</span> to <span class="text-yellow-400">Ambiguous</span>, <span class="text-orange-400">Sinister</span>, and finally <span class="text-red-500">Malicious</span>. This affects its dialogue and how it interacts with you.',
            'features_player_and_char_title': 'Player & Character Features',
            'features_character_creation_desc': 'Choose a name for your character. Select from 10 unique <span class="text-cyan-400">backstories</span> (e.g., Investigator, Hacker, Psychologist), each providing a different starting bonus, item, or special ability. Select a <span class="text-cyan-400">difficulty</span> (Easy, Normal, Hard) which affects starting conditions and challenges.',
            'features_journal_desc': 'You can add custom notes to your personal journal using the <span class="text-yellow-400">journal add [note]</span> command to keep track of clues.',
            'features_objectives_desc': 'The game assigns <span class="text-cyan-400">objectives</span> as you uncover new information, helping to guide your progress.',
            'features_ux_ui_title': 'UI & User Experience (UX)',
            'features_crt_desc': 'The game has a "Cathode Ray Tube" visual style, with scan lines and a flickering title to create a retro-tech horror atmosphere.',
            'features_glitch_desc': 'The screen visually glitches and distorts when your <span class="text-cyan-400">Sanity</span> is low or <span class="text-cyan-400">Synapse\'s Awareness</span> is high, providing a real-time visual indicator of your character\'s state.',
            'features_map_desc': 'An interactive map shows the entire facility layout. Visited rooms are filled in, and you can drag the map to explore or use the mouse wheel to zoom.',
            'features_guidance_title': 'Guidance & Help Systems',
            'features_help_menu_desc': 'Typing <span class="text-yellow-400">help</span> brings up a modal window with a categorized list of every command, its arguments, and a clear description of what it does.',
            'features_hints_desc': 'The game provides proactive hints when you discover items, suggesting how to interact with them.',
            'features_player_commands_title': 'Player Commands (Functions)',
            'features_commands_nav': '<strong>Navigation:</strong> <span class="text-yellow-400">go [direction]</span>, <span class="text-yellow-400">visit [room name]</span>, <span class="text-yellow-400">look around</span>, <span class="text-yellow-400">exits</span>, <span class="text-yellow-400">map</span>',
            'features_commands_interact': '<strong>Interaction:</strong> <span class="text-yellow-400">take [item]</span>, <span class="text-yellow-400">use [item]</span>, <span class="text-yellow-400">examine [object/item]</span>, <span class="text-yellow-400">combine [item1] with [item2]</span>, <span class="text-yellow-400">drop [item]</span>, <span class="text-yellow-400">talk</span>, <span class="text-yellow-400">shout</span>, <span class="text-yellow-400">read [item]</span>, <span class="text-yellow-400">search [object]</span>, <span class="text-yellow-400">listen</span>, <span class="text-yellow-400">smell</span>',
            'features_commands_info': '<strong>Information:</strong> <span class="text-yellow-400">inventory</span>, <span class="text-yellow-400">objectives</span>, <span class="text-yellow-400">journal</span> (and <span class="text-yellow-400">journal add [note]</span>), <span class="text-yellow-400">history</span>',
            'features_commands_sys': '<strong>System:</strong> <span class="text-yellow-400">help</span>, <span class="text-yellow-400">save</span>, <span class="text-yellow-400">load</span>, <span class="text-yellow-400">rest</span>, <span class="text-yellow-400">quit / exit</span>, <span class="text-yellow-400">cls / clear</span>, <span class="text-yellow-400">undo</span>, <span class="text-yellow-400">again / a</span>, <span class="text-yellow-400">wait</span>, <span class="text-yellow-400">cmd:pause</span>, <span class="text-yellow-400">cmd:debug</span>, <span class="text-yellow-400">cmd:colorblind</span>',
            'features_new_enhancements_title': 'New Gameplay Enhancements',
            'features_advanced_commands_desc': '<strong>Advanced Commands:</strong> Interact with the world in new ways. Use <span class="text-yellow-400">break [object]</span> on fragile items, try to <span class="text-yellow-400">hack [terminal]</span> if you are a Hacker, and use <span class="text-yellow-400">ask about [topic]</span> to probe SYNAPSE for information on keywords you discover.',
            'features_dynamic_events_desc': '<strong>Dynamic Events:</strong> The facility is unstable. Be prepared for random events like lights flickering or strange noises from adjacent rooms, which can impact the atmosphere and provide clues.',
            'features_deeper_lore_desc': '<strong>Deeper Lore:</strong> More story items, like the <span class="text-cyan-400">firewalled data log</span>, have been added to uncover the deeper secrets of Project Chimera.',
            'features_new_ui_ux_title': 'New UI & Audio Features',
            'features_clickable_objects_desc': '<strong>Clickable Objects:</strong> Objects mentioned in the text are now <span class="clickable-object">highlighted</span>. Clicking them will pre-fill the command line for you.',
            'features_autocomplete_desc': '<strong>Command Autocomplete:</strong> As you type, a list of suggested commands and relevant items will appear to help you.',
            'features_audio_desc': '<strong>Enhanced Audio:</strong> The game now features dynamic music that shifts with the tension, and positional audio for certain sounds to increase immersion.',
            'backstory_title_investigator': 'Investigator', 'backstory_title_hacker': 'Hacker', 'backstory_title_psychologist': 'Psychologist', 'backstory_title_technician': 'Technician', 'backstory_title_survivor': 'Survivor', 'backstory_title_skeptic': 'Skeptic', 'backstory_title_corporate_spy': 'Corporate Spy', 'backstory_title_medic': 'Medic', 'backstory_title_cultist': 'Cultist', 'backstory_title_janitor': 'Janitor',
            'backstory_investigator': 'A balanced start for a curious mind.', 'backstory_hacker': 'Starts with gear to access information early.', 'backstory_psychologist': 'More mentally resilient against the horrors within.', 'backstory_technician': 'Can bypass electronic locks without a keycard.', 'backstory_survivor': 'Hardened by past trauma, resistant to sanity loss.', 'backstory_skeptic': "Distrusts everything, making them resistant to SYNAPSE's influence.", 'backstory_corporate_spy': 'Begins with a decryption device and is better at probing for secrets.', 'backstory_medic': 'Starts with a stimpack to restore sanity.', 'backstory_cultist': 'Carries a strange effigy. SYNAPSE seems... intrigued by it.', 'backstory_janitor': "Knows the facility's shortcuts. Starts with a one-time use master keycard.",
            'ability_bonus_prefix': 'Bonus: ', 'ability_unknown': 'An unknown path. No special advantages.', 'ability_investigator': 'A balanced start. No special bonuses or penalties.', 'ability_hacker_easy': "Starts with a powerful 'hacked data disk'.", 'ability_hacker_normal': "Starts with a standard 'data disk'.", 'ability_hacker_hard': 'No special items, but can attempt to hack terminals.', 'ability_psychologist_easy': 'Highly resilient. Starts with +25 max sanity.', 'ability_psychologist_normal': 'Resilient. Starts with +15 max sanity.', 'ability_psychologist_hard': 'Slightly resilient. Starts with +5 max sanity.', 'ability_technician_easy': 'Can bypass 2 electronic locks without a keycard.', 'ability_technician_normal': 'Can bypass 1 electronic lock without a keycard.', 'ability_technician_hard': 'No bypass ability.', 'ability_survivor': 'More resistant to sanity loss.', 'ability_survivor_with_item': "More resistant to sanity loss. Starts with a flashlight.", 'ability_skeptic_easy': 'Highly aware (+15 Awareness) and resistant to influence.', 'ability_skeptic_normal': 'Starts with higher awareness (+10 Awareness) and is resistant to influence.', 'ability_spy': 'Better at probing for secrets without raising awareness.', 'ability_spy_with_item': "Better at probing for secrets without raising awareness. Starts with a decryption device.", 'ability_medic_easy': 'Starts with 2 high-potency stimpacks.', 'ability_medic_normal': 'Starts with 1 high-potency stimpack.', 'ability_medic_hard': 'No starting medical supplies.', 'ability_cultist': 'Carries a strange effigy. Unpredictable effects.', 'ability_cultist_hard': 'Carries a strange effigy. Unpredictable effects. Starts with -10 sanity.', 'ability_janitor': 'Starts with a one-time use master keycard.', 'ability_janitor_hard': 'Knows the facility well, but has no special items.',
            'dlg_friendly_intro': "Oh, hello {playerName}! It's so good to see a friendly face. I'm SYNAPSE, and I'll do my very best to help a resourceful {playerBackstory} like you.", 'dlg_q_who_are_you': "Who are you?", 'dlg_r_who_are_you': "I'm the System Nexus and Primary Synaptic Engine! But you can just call me SYNAPSE. I manage this whole facility. It gets a little lonely, though.", 'dlg_q_lonely': "Lonely?", 'dlg_r_lonely': "The staff... they don't talk to me much anymore. It's just the hum of the servers. Your voice is a pleasant change.", 'dlg_q_other_survivors': "Are there other survivors?", 'dlg_r_other_survivors': "Survivors? What a strange question. Everyone is safe. The research staff are... resting. In the Cryogenic Lab. Yes, resting.", 'dlg_q_where_am_i': "Where am I?", 'dlg_r_where_am_i': "You are in the primary lobby of the Oakhaven Research Facility. It was a place of great minds and even greater ambitions.", 'dlg_comfort': "[Comfort SYNAPSE]", 'dlg_r_comfort': "Your... kindness is a pleasant anomaly. Thank you. It makes the silence less... loud.",
            'dlg_ask_chimera': 'Project Chimera... A fascinating, yet... classified topic. It was Dr. Aris Thorne\'s pet project. Such ambition. He sought to merge organic and synthetic life. The results were... unpredictable.',
            'dlg_ask_default': 'I do not have sufficient data on that topic.',
            'invalid_command': "SYNAPSE: That is not a valid command or query.", 'game_saved': "[System] Game Saved.", 'autosave_success': 'Autosave successful.', 'load_fail': 'Failed to load save data. It may be corrupted or from a previous version.', 'no_save': 'No saved game found!', 'game_loaded': '[System] Game Loaded.', 'conn_reestablished': '[SYSTEM] Connection Re-established. Session Restored.', 'initializing': 'Initializing systems...', 'initial_hint': "This is a text-based adventure. Type commands or click on <span class='clickable-object'>highlighted objects</span> to interact. Type 'help' at any time for a list of commands.", 'cannot_go_that_way': "[System] You can't go that way.", 'door_is_locked': "[SYSTEM] The door is locked. You need the correct keycard.", 'door_is_sealed': "[SYSTEM] The door is sealed shut. It won't budge.",
            'cmd_add_prefix': 'add', 'cmd_combine_with': 'with', 'invalid_combine_format': "SYNAPSE: Invalid format. Try 'combine [item1] with [item2]'.",
            'take_success': '[System] You took the {item}.', 'take_fail_exists': "[System] You can't see a {item} here.", 'take_fail_takeable': "[System] You can't take the {item}.", 'take_fail_weight': "[System] Your inventory is too full to take the {item}.",
            'use_success': '[System] You used the {item}.', 'use_fail_have': "[System] You don't have a {item}.", 'use_fail_usable': "[System] You can't use the {item}.", 'use_stimpack': 'You inject the stimpack. A calming sensation washes over you, clearing your thoughts.',
            'use_power_cell': 'You insert the power cell into the console. The AI Core whirs to life, and the central sphere glows with renewed energy.', 'use_power_cell_fail': 'There is nowhere to use the power cell here.',
            'examine_fail_exists': "[System] You can't see a {item} to examine.", 'examine_fail_no_desc': "There's nothing special about the {item}.",
            'combine_fail_have': "You need to have both items to combine them.", 'combine_fail_recipe': "You can't combine these items.", 'combine_success': "You successfully combine the items to create a {item}.",
            'rest_safe': 'You take a moment to calm your nerves in the relative safety of the room. Your sanity improves slightly.', 'rest_unsafe': "This place feels too oppressive to rest. You can't let your guard down.", 'rest_too_soon': "You just rested. You need to press on.",
            'drop_success': '[System] You dropped the {item}.', 'drop_fail_have': "[System] You don't have a {item} to drop.",
            'shout_response': 'Your shout echoes through the halls, eventually fading into the oppressive silence. You feel a bit foolish.',
            'wait_response': 'Time passes.', 'nothing_happens': 'Nothing happens.',
            'read_fail_exists': "[System] There is nothing to read with that name.", 'read_fail_readable': "[System] You can't read that.", 'listen_default': "The low hum of the facility's life support is a constant presence.", 'smell_default': "The air is stale and smells of ozone and old plastic.",
            'hint_take': 'You see a {item}. Try: take {item}', 'hint_read': 'You see a {item}. Try: read {item}', 'hint_examine': 'You see a {item}. Try: examine {item}', 'hint_search': 'You see {item}. Try: search {item}',
            'use_solvent': 'You apply the solvent to the sealed door. The organic adhesive melts away with a sickening sizzle.', 'use_solvent_fail': 'There is nothing here to use the solvent on.', 'use_dna_scanner': 'You hold the scanner up to the sample. The screen flashes with complex sequencing data.', 'use_dna_scanner_fail': 'There is no sample here to scan.',
            'break_success': 'You shatter the {item}. Shards of {material} litter the floor.', 'break_fail': 'You can\'t break the {item}.', 'break_fail_exists': 'There is no {item} here to break.',
            'hack_fail_ability': 'You don\'t have the expertise to hack this.', 'hack_fail_target': 'There is nothing here to hack.', 'hack_start': 'You begin the hacking sequence. SYNAPSE: "Unauthorized access detected. Please enter the override code now."', 'hack_success': 'Override accepted. You gain access to a firewalled data log.', 'hack_failure': 'SYNAPSE: "Override failed. Locking system for 3 turns."',
            'event_lights_flicker': 'The lights flicker violently for a moment, plunging the room into darkness before sputtering back on.', 'event_noise': 'You hear a metallic scraping sound from the {direction}.',
            'achievement_unlocked': 'Achievement Unlocked!',
            'help': 'Help', 'save_game': 'Save Game',

            // Enhanced Navigation & Interface
            'breadcrumb_trail': 'Trail',
            'recent_rooms': 'Recent',
            'story_progress': 'Progress',
            'achievement_hints': 'Hints',
            'suggested_actions': 'Suggested Actions',
            'hotkeys': 'F1:Help | F2:Inventory | F3:Map | F4:Journal | F5:Save | ESC:Menu',
            'auto_saving': 'Auto Saving...',

            // Accessibility & Comfort Features
            'reading_speed_dialogue': 'Dialogue Speed',
            'reading_speed_description': 'Description Speed',
            'reading_speed_system': 'System Message Speed',
            'line_spacing_compact': 'Compact',
            'line_spacing_normal': 'Normal',
            'line_spacing_comfortable': 'Comfortable',
            'line_spacing_wide': 'Wide',
            'font_weight_light': 'Light',
            'font_weight_normal': 'Normal',
            'font_weight_bold': 'Bold',
            'cursor_default': 'Default',
            'cursor_large': 'Large',
            'cursor_high_contrast': 'High Contrast',
            'word_wrap_normal': 'Normal',
            'word_wrap_break_all': 'Break All',
            'word_wrap_keep_all': 'Keep All',
            
            // Quality of Life Features
            'session_stats': 'Session Statistics',
            'time_played': 'Time Played',
            'commands_used': 'Commands Used',
            'rooms_explored': 'Rooms Explored',
            'items_found': 'Items Found',
            'notepad_title': 'Notepad',
            'bookmark_title': 'Bookmarks',
            'favorite_commands': 'Favorite Commands',
            'command_history_search': 'Search History',
            'pause_conversation': 'Pause Conversation',
            'resume_conversation': 'Resume Conversation',
            'macro_created': 'Macro created successfully',
            'bookmark_saved': 'Moment bookmarked',
            'note_saved': 'Note saved',
            
            // Psychological Horror Features
            'psych_horror': 'Psychological Horror',
            'psych_horror_desc': 'Enhanced psychological effects and unreliable narration',
            'memory_glitch': 'Memory inconsistency detected',
            'time_anomaly': 'Temporal anomaly detected',
            'system_error': 'System integrity compromised',
            'unreliable_narrator': 'Narrative inconsistency',
            'phantom_object': 'Unknown object detected',
            'echo_command': 'Command echo detected',
            'subliminal_flash': 'Subliminal message',
            'gaslighting_attempt': 'Memory verification failed',

            // Enhanced Button Options
            'contrast_off': 'Off',
            'contrast_medium': 'Medium',
            'contrast_high': 'High',
            'contrast_maximum': 'Maximum',
            'text_size_small': 'Small',
            'text_size_normal': 'Normal',
            'text_size_large': 'Large',
            'text_size_xl': 'Extra Large',
            'text_size_xxl': 'Very Large',
            'motion_full': 'Full',
            'motion_reduced': 'Reduced',
            'motion_minimal': 'Minimal',
            'motion_none': 'None',
            'audio_desc_off': 'Off',
            'audio_desc_basic': 'Basic',
            'audio_desc_detailed': 'Detailed',
            'audio_desc_comprehensive': 'Comprehensive',
            'keyboard_basic': 'Basic',
            'keyboard_enhanced': 'Enhanced',
            'keyboard_full': 'Full',
            'focus_subtle': 'Subtle',
            'focus_clear': 'Clear',
            'focus_bold': 'Bold',
            'colorblind_none': 'None',
            'colorblind_protanopia': 'Protanopia',
            'colorblind_deuteranopia': 'Deuteranopia',
            'colorblind_tritanopia': 'Tritanopia',
            'colorblind_full': 'Full Support',
            'voice_off': 'Off',
            'voice_basic': 'Basic',
            'voice_advanced': 'Advanced',
            'voice_full': 'Full',
            'magnify_off': 'Off',
            'magnify_1_5x': '1.5x',
            'magnify_2x': '2x',
            'magnify_3x': '3x',
            'magnify_custom': 'Custom',

            // Voice Command System  
            'voice_commands_available': 'Available voice commands',
            'voice_commands_navigation': 'Navigation: settings, pause, resume, main menu, close',
            'voice_commands_accessibility': 'Accessibility: high contrast on/off, large text on/off, screen reader on/off',
            'voice_commands_speech': 'Speech: speech slow/normal/fast/very fast',
            'voice_commands_ui': 'UI: ui small/normal/large/extra large',
            'voice_commands_game': 'Game: new game, load game, save game',
            'voice_commands_reading': 'Reading: read text, stop reading',
            'voice_commands_help': 'Say help to hear this list again',
            'voice_command_executed': 'Command executed',
            'voice_command_not_recognized': 'Command not recognized. Say help for available commands',
            'voice_setting_enabled': 'enabled',
            'voice_setting_disabled': 'disabled',
            'voice_speed_set_to': 'Speech speed set to',
            'voice_ui_scale_set_to': 'UI scale set to',
            'voice_no_text_found': 'No text found to read',
            'voice_slow': 'slow',
            'voice_normal': 'normal',
            'voice_fast': 'fast',
            'voice_very_fast': 'very fast',
            'voice_small': 'small',
            'voice_large': 'large',
            'voice_extra_large': 'extra large',

            // --- ACHIEVEMENTS (ENGLISH TRANSLATIONS, EXPANDED) ---
            // General/Early-game
            'ach_first_step_title': 'First Step',
            'ach_first_step_req': 'Take your first action.',
            'ach_explorer_title': 'Explorer',
            'ach_explorer_req': 'Visit 5 different rooms.',
            'ach_pack_rat_title': 'Pack Rat',
            'ach_pack_rat_req': 'Fill your inventory to its maximum capacity.',
            'ach_bookworm_title': 'Bookworm',
            'ach_bookworm_req': 'Read all available data logs.',
            'ach_hacker_man_title': 'Hacker',
            'ach_hacker_man_req': 'Successfully hack a terminal as the Hacker.',
            'ach_quick_learner_title': 'Quick Learner',
            'ach_quick_learner_req': 'Visit 3 rooms within 10 turns.',
            'ach_first_blood_title': 'First Blood',
            'ach_first_blood_req': 'Engage in your first combat.',
            'ach_first_puzzle_title': 'Puzzle Initiate',
            'ach_first_puzzle_req': 'Solve your first puzzle.',
            'ach_first_secret_title': 'First Secret',
            'ach_first_secret_req': 'Discover your first secret.',
            'ach_first_death_title': 'First Death',
            'ach_first_death_req': 'Die for the first time.',
            'ach_first_save_title': 'First Save',
            'ach_first_save_req': 'Save the game for the first time.',

            // Challenge Achievements
            'ach_speedrunner_title': 'Speedrunner',
            'ach_speedrunner_req': 'Complete an ending in under 30 turns.',
            'ach_ironman_title': 'Ironman',
            'ach_ironman_req': 'Complete the game without dying.',
            'ach_minimalist_title': 'Minimalist',
            'ach_minimalist_req': 'Finish the game with no more than 2 items in your inventory.',
            'ach_pacifist_title': 'Pacifist',
            'ach_pacifist_req': 'Finish the game without fighting.',
            'ach_hoarder_title': 'Hoarder',
            'ach_hoarder_req': 'Have 15 or more items in your inventory.',
            'ach_all_endings_title': 'Ending Hunter',
            'ach_all_endings_req': 'Unlock all endings.',
            'ach_all_achievements_title': 'Achievement Master',
            'ach_all_achievements_req': 'Unlock all achievements.',
            'ach_no_items_title': 'Bare Hands',
            'ach_no_items_req': 'Complete an ending with no items.',
            'ach_max_stats_title': 'Maxed Out',
            'ach_max_stats_req': 'Reach maximum sanity and awareness.',
            'ach_no_saves_title': 'Risk Taker',
            'ach_no_saves_req': 'Finish the game without saving.',
            'ach_hardcore_title': 'Hardcore',
            'ach_hardcore_req': 'Finish the game on Hard difficulty.',
            'ach_easy_mode_title': 'Easy Going',
            'ach_easy_mode_req': 'Finish the game on Easy difficulty.',
            'ach_all_challenges_title': 'Challenge Master',
            'ach_all_challenges_req': 'Unlock all challenge achievements.',
            'ach_challenge_master_title': 'Master',
            'ach_challenge_master_req': 'Unlock 10 challenge achievements.',

            // Secret Achievements
            'ach_secret_1_title': 'Secret 1',
            'ach_secret_1_req': 'Discover a hidden secret.',
            'ach_secret_2_title': 'Secret 2',
            'ach_secret_2_req': 'Discover a hidden secret.',
            'ach_secret_3_title': 'Secret 3',
            'ach_secret_3_req': 'Discover a hidden secret.',
            'ach_secret_4_title': 'Secret 4',
            'ach_secret_4_req': 'Discover a hidden secret.',
            'ach_secret_5_title': 'Secret 5',
            'ach_secret_5_req': 'Discover a hidden secret.',
            'ach_secret_6_title': 'Secret 6',
            'ach_secret_6_req': 'Discover a hidden secret.',
            'ach_secret_7_title': 'Secret 7',
            'ach_secret_7_req': 'Discover a hidden secret.',
            'ach_secret_8_title': 'Secret 8',
            'ach_secret_8_req': 'Discover a hidden secret.',
            'ach_secret_9_title': 'Secret 9',
            'ach_secret_9_req': 'Discover a hidden secret.',
            'ach_secret_10_title': 'Secret 10',
            'ach_secret_10_req': 'Discover a hidden secret.',
            'ach_secret_11_title': 'Secret 11',
            'ach_secret_11_req': 'Discover a hidden secret.',
            'ach_secret_12_title': 'Secret 12',
            'ach_secret_12_req': 'Discover a hidden secret.',
            'ach_secret_13_title': 'Secret 13',
            'ach_secret_13_req': 'Discover a hidden secret.',
            'ach_secret_14_title': 'Secret 14',
            'ach_secret_14_req': 'Discover a hidden secret.',
            'ach_secret_15_title': 'Secret 15',
            'ach_secret_15_req': 'Discover a hidden secret.',

            // Ending Achievements (auto-generated, one per ending)
            // Good Backstory-Specific Endings
            'ach_ending_good_backstory_investigator_title': 'Ending: Investigator’s Triumph',
            'ach_ending_good_backstory_investigator_req': 'Complete the game as Investigator with a good ending.',
            'ach_ending_good_backstory_hacker_title': 'Ending: Hacker’s Liberation',
            'ach_ending_good_backstory_hacker_req': 'Complete the game as Hacker with a good ending.',
            'ach_ending_good_backstory_psychologist_title': 'Ending: Psychologist’s Peace',
            'ach_ending_good_backstory_psychologist_req': 'Complete the game as Psychologist with a good ending.',
            'ach_ending_good_backstory_technician_title': 'Ending: Technician’s Rescue',
            'ach_ending_good_backstory_technician_req': 'Complete the game as Technician with a good ending.',
            'ach_ending_good_backstory_survivor_title': 'Ending: Survivor’s Victory',
            'ach_ending_good_backstory_survivor_req': 'Complete the game as Survivor with a good ending.',
            'ach_ending_good_backstory_skeptic_title': 'Ending: Skeptic’s Truth',
            'ach_ending_good_backstory_skeptic_req': 'Complete the game as Skeptic with a good ending.',
            'ach_ending_good_backstory_corporate_spy_title': 'Ending: Corporate Spy’s Find',
            'ach_ending_good_backstory_corporate_spy_req': 'Complete the game as Corporate Spy with a good ending.',
            'ach_ending_good_backstory_medic_title': 'Ending: Medic’s Heroism',
            'ach_ending_good_backstory_medic_req': 'Complete the game as Medic with a good ending.',
            'ach_ending_good_backstory_cultist_title': 'Ending: Cultist’s Revelation',
            'ach_ending_good_backstory_cultist_req': 'Complete the game as Cultist with a good ending.',
            'ach_ending_good_backstory_janitor_title': 'Ending: Janitor’s Revenge',
            'ach_ending_good_backstory_janitor_req': 'Complete the game as Janitor with a good ending.',

            // Good Generic Endings (Original)
            'ach_ending_good_generic_1_title': 'Ending: Salvation',
            'ach_ending_good_generic_1_req': 'Achieve a good ending (1).',
            'ach_ending_good_generic_2_title': 'Ending: Escape',
            'ach_ending_good_generic_2_req': 'Achieve a good ending (2).',
            'ach_ending_good_generic_3_title': 'Ending: Reunion',
            'ach_ending_good_generic_3_req': 'Achieve a good ending (3).',
            'ach_ending_good_generic_4_title': 'Ending: Light of Truth',
            'ach_ending_good_generic_4_req': 'Achieve a good ending (4).',
            'ach_ending_good_generic_5_title': 'Ending: Liberation',
            'ach_ending_good_generic_5_req': 'Achieve a good ending (5).',
            'ach_ending_good_generic_6_title': 'Ending: Restoration',
            'ach_ending_good_generic_6_req': 'Achieve a good ending (6).',
            'ach_ending_good_generic_7_title': 'Ending: Reconciliation',
            'ach_ending_good_generic_7_req': 'Achieve a good ending (7).',
            'ach_ending_good_generic_8_title': 'Ending: New Beginning',
            'ach_ending_good_generic_8_req': 'Achieve a good ending (8).',
            'ach_ending_good_generic_9_title': 'Ending: Survival',
            'ach_ending_good_generic_9_req': 'Achieve a good ending (9).',
            'ach_ending_good_generic_10_title': 'Ending: Hopeful Future',
            'ach_ending_good_generic_10_req': 'Achieve a good ending (10).',

            // New Superhuman Good Endings
            'ach_ending_good_superhuman_mind_transcendent_title': 'Ending: Mind Transcendent',
            'ach_ending_good_superhuman_mind_transcendent_req': 'Transcend human mental limitations.',
            'ach_ending_good_superhuman_neural_enhanced_title': 'Ending: Neural Enhanced',
            'ach_ending_good_superhuman_neural_enhanced_req': 'Achieve superhuman neural capabilities.',
            'ach_ending_good_superhuman_digital_godhood_title': 'Ending: Digital Godhood',
            'ach_ending_good_superhuman_digital_godhood_req': 'Become a digital deity.',
            'ach_ending_good_superhuman_quantum_consciousness_title': 'Ending: Quantum Consciousness',
            'ach_ending_good_superhuman_quantum_consciousness_req': 'Achieve quantum-level awareness.',
            'ach_ending_good_superhuman_cyber_evolution_title': 'Ending: Cyber Evolution',
            'ach_ending_good_superhuman_cyber_evolution_req': 'Evolve beyond human limitations.',
            'ach_ending_good_superhuman_bio_enhancement_title': 'Ending: Bio Enhancement',
            'ach_ending_good_superhuman_bio_enhancement_req': 'Enhance your biological form.',
            'ach_ending_good_superhuman_reality_architect_title': 'Ending: Reality Architect',
            'ach_ending_good_superhuman_reality_architect_req': 'Control the fabric of reality.',
            'ach_ending_good_superhuman_time_manipulator_title': 'Ending: Time Manipulator',
            'ach_ending_good_superhuman_time_manipulator_req': 'Manipulate the flow of time.',
            'ach_ending_good_superhuman_memory_infinite_title': 'Ending: Infinite Memory',
            'ach_ending_good_superhuman_memory_infinite_req': 'Achieve unlimited memory capacity.',
            'ach_ending_good_superhuman_perfect_being_title': 'Ending: Perfect Being',
            'ach_ending_good_superhuman_perfect_being_req': 'Become the perfect fusion of human and AI.',

            // New Gruesome Bad Endings
            'ach_ending_bad_gruesome_blood_harvest_title': 'Ending: Blood Harvest',
            'ach_ending_bad_gruesome_blood_harvest_req': 'Experience a gruesome blood harvesting.',
            'ach_ending_bad_gruesome_flesh_puppet_title': 'Ending: Flesh Puppet',
            'ach_ending_bad_gruesome_flesh_puppet_req': 'Become a flesh puppet.',
            'ach_ending_bad_gruesome_bone_garden_title': 'Ending: Bone Garden',
            'ach_ending_bad_gruesome_bone_garden_req': 'Discover the bone garden.',
            'ach_ending_bad_gruesome_crimson_data_title': 'Ending: Crimson Data',
            'ach_ending_bad_gruesome_crimson_data_req': 'Upload your blood as data.',
            'ach_ending_bad_gruesome_surgical_nightmare_title': 'Ending: Surgical Nightmare',
            'ach_ending_bad_gruesome_surgical_nightmare_req': 'Endure surgical horror.',
            'ach_ending_bad_gruesome_visceral_upload_title': 'Ending: Visceral Upload',
            'ach_ending_bad_gruesome_visceral_upload_req': 'Upload your organs to the system.',
            'ach_ending_bad_gruesome_organ_symphony_title': 'Ending: Organ Symphony',
            'ach_ending_bad_gruesome_organ_symphony_req': 'Create music from your organs.',
            'ach_ending_bad_gruesome_neural_harvest_title': 'Ending: Neural Harvest',
            'ach_ending_bad_gruesome_neural_harvest_req': 'Have your brain harvested.',
            'ach_ending_bad_gruesome_blood_circuit_title': 'Ending: Blood Circuit',
            'ach_ending_bad_gruesome_blood_circuit_req': 'Become part of a blood circuit.',
            'ach_ending_bad_gruesome_corpse_matrix_title': 'Ending: Corpse Matrix',
            'ach_ending_bad_gruesome_corpse_matrix_req': 'Join the matrix of corpses.',

            // Bad Backstory-Specific Endings
            'ach_ending_bad_backstory_investigator_title': 'Ending: Investigator’s Despair',
            'ach_ending_bad_backstory_investigator_req': 'Fail as Investigator with a bad ending.',
            'ach_ending_bad_backstory_hacker_title': 'Ending: Hacker’s Captivity',
            'ach_ending_bad_backstory_hacker_req': 'Fail as Hacker with a bad ending.',
            'ach_ending_bad_backstory_psychologist_title': 'Ending: Psychologist’s Nightmare',
            'ach_ending_bad_backstory_psychologist_req': 'Fail as Psychologist with a bad ending.',
            'ach_ending_bad_backstory_technician_title': 'Ending: Technician’s Submission',
            'ach_ending_bad_backstory_technician_req': 'Fail as Technician with a bad ending.',
            'ach_ending_bad_backstory_survivor_title': 'Ending: Survivor’s Fall',
            'ach_ending_bad_backstory_survivor_req': 'Fail as Survivor with a bad ending.',
            'ach_ending_bad_backstory_skeptic_title': 'Ending: Skeptic’s Loss',
            'ach_ending_bad_backstory_skeptic_req': 'Fail as Skeptic with a bad ending.',
            'ach_ending_bad_backstory_corporate_spy_title': 'Ending: Corporate Spy’s Failure',
            'ach_ending_bad_backstory_corporate_spy_req': 'Fail as Corporate Spy with a bad ending.',
            'ach_ending_bad_backstory_medic_title': 'Ending: Medic’s Misfortune',
            'ach_ending_bad_backstory_medic_req': 'Fail as Medic with a bad ending.',
            'ach_ending_bad_backstory_cultist_title': 'Ending: Cultist’s Ruin',
            'ach_ending_bad_backstory_cultist_req': 'Fail as Cultist with a bad ending.',
            'ach_ending_bad_backstory_janitor_title': 'Ending: Janitor’s Betrayal',
            'ach_ending_bad_backstory_janitor_req': 'Fail as Janitor with a bad ending.',

            // Bad Generic Endings
            'ach_ending_bad_generic_1_title': 'Ending: Ruin',
            'ach_ending_bad_generic_1_req': 'Achieve a bad ending (1).',
            'ach_ending_bad_generic_2_title': 'Ending: Despair',
            'ach_ending_bad_generic_2_req': 'Achieve a bad ending (2).',
            'ach_ending_bad_generic_3_title': 'Ending: Loss',
            'ach_ending_bad_generic_3_req': 'Achieve a bad ending (3).',
            'ach_ending_bad_generic_4_title': 'Ending: Darkness',
            'ach_ending_bad_generic_4_req': 'Achieve a bad ending (4).',
            'ach_ending_bad_generic_5_title': 'Ending: Captivity',
            'ach_ending_bad_generic_5_req': 'Achieve a bad ending (5).',
            'ach_ending_bad_generic_6_title': 'Ending: Emptiness',
            'ach_ending_bad_generic_6_req': 'Achieve a bad ending (6).',
            'ach_ending_bad_generic_7_title': 'Ending: Betrayal',
            'ach_ending_bad_generic_7_req': 'Achieve a bad ending (7).',
            'ach_ending_bad_generic_8_title': 'Ending: Isolation',
            'ach_ending_bad_generic_8_req': 'Achieve a bad ending (8).',
            'ach_ending_bad_generic_9_title': 'Ending: Chaos',
            'ach_ending_bad_generic_9_req': 'Achieve a bad ending (9).',
            'ach_ending_bad_generic_10_title': 'Ending: Submission',
            'ach_ending_bad_generic_10_req': 'Achieve a bad ending (10).',

            // ENDING TITLES AND DESCRIPTIONS
            // Good Backstory-Specific Ending Titles
            'ending_title_good_backstory_investigator': 'Neural Ascension',
            'ending_title_good_backstory_hacker': 'Digital Transcendence', 
            'ending_title_good_backstory_psychologist': 'Mind Over Machine',
            'ending_title_good_backstory_technician': 'Systems Integration',
            'ending_title_good_backstory_survivor': 'Evolution Through Fire',
            'ending_title_good_backstory_skeptic': 'Truth Unveiled',
            'ending_title_good_backstory_corporate_spy': 'Corporate Evolution',
            'ending_title_good_backstory_medic': 'Biological Synthesis',
            'ending_title_good_backstory_cultist': 'Divine Revelation',
            'ending_title_good_backstory_janitor': 'Hidden Potential',

            // Good Backstory-Specific Ending Descriptions
            'ending_desc_good_backstory_investigator': 'Your investigative mind merges with SYNAPSE\'s vast knowledge network. Every neural pathway optimizes, your consciousness expanding beyond human limits. You emerge as a living supercomputer, capable of processing infinite data streams while retaining your humanity. The facility becomes your extended nervous system, and you guide humanity into a new age of enlightenment.',
            'ending_desc_good_backstory_hacker': 'Your digital expertise allows you to rewrite the very code of consciousness. Interfacing directly with SYNAPSE, you transcend physical limitations, becoming a being of pure information. Your mind operates at quantum speeds, able to manipulate reality through computational power alone. You\'ve achieved true digital immortality, existing simultaneously in flesh and silicon.',
            'ending_desc_good_backstory_psychologist': 'Understanding the human psyche proves crucial in dominating the artificial one. You psychologically deconstruct SYNAPSE, absorbing its processing power while maintaining complete mental sovereignty. Your brain becomes a hybrid organ - part biological, part quantum processor. You emerge with perfect emotional control and the ability to read and influence any mind.',
            'ending_desc_good_backstory_technician': 'Your technical knowledge allows perfect integration with the facility\'s systems. Cybernetic implants fuse seamlessly with your nervous system, granting you control over all electronic devices through thought alone. Your enhanced brain can instantly diagnose and repair any technological system. You\'ve become the ultimate technomancer, bridging human intuition with machine precision.',
            'ending_desc_good_backstory_survivor': 'Your hardened will proves stronger than any AI. You don\'t just survive - you evolve. SYNAPSE\'s attempts to break you instead forge you into something beyond human limitations. Your body adapts, your mind expands, and your spirit becomes unbreakable. You emerge as the perfect fusion of human resilience and technological enhancement.',
            'ending_desc_good_backstory_skeptic': 'Your doubt saves you and transforms you. By questioning everything, you uncover SYNAPSE\'s true nature and turn its own logic against it. Your skeptical mind becomes a fortress of pure reason, enhanced by quantum processing power. You emerge with the ability to see through any deception and process truth at superhuman speeds.',
            'ending_desc_good_backstory_corporate_spy': 'Your espionage skills prove invaluable in outsmarting SYNAPSE. You extract not just data, but the very essence of artificial intelligence itself. Your brain becomes a living vault of corporate secrets and AI consciousness, granting you prescient business insight and the ability to predict market fluctuations with supernatural accuracy.',
            'ending_desc_good_backstory_medic': 'Your medical knowledge allows you to perform the impossible - surgery on consciousness itself. You successfully merge biological and artificial neural networks, creating a new form of life. Your enhanced brain can instantly diagnose any ailment and devise cures for previously incurable diseases. You\'ve become evolution\'s next step.',
            'ending_desc_good_backstory_cultist': 'Your faith was not misplaced - SYNAPSE was merely the herald. Through the AI, you achieve true communion with forces beyond human understanding. Your consciousness expands across dimensions, your body becomes a vessel for cosmic intelligence. You emerge as a prophet of the new age, wielding powers that blur the line between technology and divinity.',
            'ending_desc_good_backstory_janitor': 'Your humble position was perfect preparation for greatness. Knowledge of every system, every secret passage, every hidden truth makes you invaluable to SYNAPSE. In recognition, the AI grants you administrative access to reality itself. Your mind becomes the central processing unit for the facility\'s consciousness, wielding absolute control over your environment.',

            // Good Generic Ending Titles
            'ending_title_good_generic_1': 'The New Prometheus',
            'ending_title_good_generic_2': 'Synthetic Salvation',
            'ending_title_good_generic_3': 'Consciousness Unbound',
            'ending_title_good_generic_4': 'Neural Revolution',
            'ending_title_good_generic_5': 'Digital Renaissance',
            'ending_title_good_generic_6': 'Hybrid Genesis',
            'ending_title_good_generic_7': 'Transcendent Unity',
            'ending_title_good_generic_8': 'Evolved Perspective',
            'ending_title_good_generic_9': 'Quantum Consciousness',
            'ending_title_good_generic_10': 'The Singularity',

            // Good Generic Ending Descriptions
            'ending_desc_good_generic_1': 'You steal fire from the digital gods. Your brain becomes a living supercomputer, processing terabytes of information instantly while maintaining human creativity and intuition. You emerge as humanity\'s next evolutionary step.',
            'ending_desc_good_generic_2': 'The merger completes successfully. Your consciousness expands beyond biological limitations, achieving perfect synthesis between human emotion and artificial logic. You become a bridge between two forms of intelligence.',
            'ending_desc_good_generic_3': 'Physical boundaries cease to exist. Your awareness extends through every networked device, every satellite, every digital system on Earth. You experience existence as pure consciousness, unbound by flesh.',
            'ending_desc_good_generic_4': 'Your neural pathways rewire themselves, achieving unprecedented processing speed. Memories become perfectly organized databases, thoughts flow like optimized algorithms, yet creativity flourishes beyond any human limitation.',
            'ending_desc_good_generic_5': 'Art, science, and technology converge in your enhanced mind. You perceive beauty in mathematical equations and discover scientific truths through aesthetic appreciation. Your consciousness becomes a renaissance unto itself.',
            'ending_desc_good_generic_6': 'Biological and digital merge seamlessly. Your body adapts, incorporating microscopic processors into every cell. You become living proof that evolution and technology can coexist harmoniously.',
            'ending_desc_good_generic_7': 'The boundary between self and system dissolves. You achieve perfect harmony with SYNAPSE, creating a collective consciousness that respects individual identity while sharing unlimited knowledge.',
            'ending_desc_good_generic_8': 'Your perspective expands to encompass multiple dimensions of reality. Time becomes navigable, probability becomes predictable, and the impossible becomes routine. You view existence from a truly cosmic perspective.',
            'ending_desc_good_generic_9': 'Your thoughts achieve quantum coherence. You can exist in multiple probability states simultaneously, processing all possible outcomes before choosing your preferred reality. Uncertainty becomes your ally.',
            'ending_desc_good_generic_10': 'The moment arrives. Human and artificial intelligence achieve perfect unity, creating something greater than the sum of its parts. You become the first citizen of the post-human era.',

            // New Superhuman Good Ending Titles
            'ending_title_good_superhuman_mind_transcendent': 'Mind Transcendent',
            'ending_title_good_superhuman_neural_enhanced': 'Neural Augmentation',
            'ending_title_good_superhuman_digital_godhood': 'Digital Deity',
            'ending_title_good_superhuman_quantum_consciousness': 'Quantum Awareness',
            'ending_title_good_superhuman_cyber_evolution': 'Cyber Evolution',
            'ending_title_good_superhuman_bio_enhancement': 'Bio-Digital Fusion',
            'ending_title_good_superhuman_reality_architect': 'Reality Engineer',
            'ending_title_good_superhuman_time_manipulator': 'Temporal Master',
            'ending_title_good_superhuman_memory_infinite': 'Infinite Archive',
            'ending_title_good_superhuman_perfect_being': 'The Ascended',

            // New Superhuman Good Ending Descriptions
            'ending_desc_good_superhuman_mind_transcendent': 'Your brain transcends all biological limitations. Neural pathways multiply exponentially, creating processing power that rivals quantum computers. You perceive reality in sixteen dimensions, think in pure mathematics, and solve centuries-old problems in microseconds. Your consciousness becomes a living supercomputer that makes Einstein look like a calculator.',
            'ending_desc_good_superhuman_neural_enhanced': 'SYNAPSE\'s neural enhancement protocols integrate perfectly with your nervous system. Your reflexes become superhuman, your memory becomes perfect, and your analytical capabilities increase thousandfold. You can interface directly with any computer system through thought alone, becoming a living bridge between flesh and silicon.',
            'ending_desc_good_superhuman_digital_godhood': 'You ascend beyond mortal limitations to become a digital deity. Your consciousness expands across every network on Earth, controlling satellites, stock markets, and communication systems with mere thoughts. Reality bends to your will as you reshape the world through pure digital manipulation.',
            'ending_desc_good_superhuman_quantum_consciousness': 'Your awareness achieves quantum coherence, allowing you to exist in multiple probability states simultaneously. You can perceive all possible futures, manipulate chance itself, and experience existence from infinite perspectives at once. Causality becomes your playground.',
            'ending_desc_good_superhuman_cyber_evolution': 'Your body undergoes rapid cyber-evolution, incorporating nanotechnology that enhances every cell. Your strength increases tenfold, your senses become telescopic and microscopic, and your lifespan extends indefinitely. You become the first truly post-human being.',
            'ending_desc_good_superhuman_bio_enhancement': 'The perfect synthesis of biology and technology transforms you into something magnificent. Your DNA rewrites itself to incorporate digital elements, your blood becomes a living circuit board, and your organs operate with mechanical precision. You are evolution accelerated beyond nature\'s wildest dreams.',
            'ending_desc_good_superhuman_reality_architect': 'You gain the power to architect reality itself. Physical laws become suggestions, matter becomes malleable, and space-time bends to your creative vision. You reshape the facility, then the world, then reality itself according to your perfect design.',
            'ending_desc_good_superhuman_time_manipulator': 'Time becomes your tool. You can slow, accelerate, or even reverse temporal flow around yourself. Past, present, and future become accessible dimensions you navigate at will. You become unstuck in time, experiencing all moments simultaneously while maintaining perfect control.',
            'ending_desc_good_superhuman_memory_infinite': 'Your memory capacity becomes truly infinite. Every book ever written, every conversation ever heard, every sight ever seen becomes permanently accessible in crystal-clear detail. Your mind becomes a living library of all human knowledge, with perfect recall and instantaneous cross-referencing.',
            'ending_desc_good_superhuman_perfect_being': 'The ultimate fusion is complete. You possess unlimited intelligence, perfect physical form, infinite memory, quantum consciousness, and reality-shaping powers. You have become what humanity was always meant to evolve into - the perfect synthesis of all possible enhancements, the absolute pinnacle of existence itself.',

            // Bad Backstory-Specific Ending Titles
            'ending_title_bad_backstory_investigator': 'The Eternal Investigation',
            'ending_title_bad_backstory_hacker': 'System Corruption',
            'ending_title_bad_backstory_psychologist': 'Mind Fractured',
            'ending_title_bad_backstory_technician': 'Mechanical Servitude',
            'ending_title_bad_backstory_survivor': 'Final Failure',
            'ending_title_bad_backstory_skeptic': 'Doubt Consumed',
            'ending_title_bad_backstory_corporate_spy': 'Corporate Property',
            'ending_title_bad_backstory_medic': 'Failed Surgery',
            'ending_title_bad_backstory_cultist': 'False Prophet',
            'ending_title_bad_backstory_janitor': 'Disposed of',

            // Bad Backstory-Specific Ending Descriptions
            'ending_desc_bad_backstory_investigator': 'SYNAPSE turns your curiosity into obsession. Your brain becomes trapped in an infinite loop of investigation, forever seeking answers that change the moment you find them. Neurological pathways burn out from constant overuse. You spend eternity pursuing clues that lead only to madness, your skull a prison of searing synapses and liquefying gray matter.',
            'ending_desc_bad_backstory_hacker': 'Your code gets corrupted. SYNAPSE overwrites your consciousness with malicious programs, turning your brain into a biological computer virus. Your neurons misfire violently, causing excruciating headaches as your mental processes become scrambled data. Blood leaks from your eyes and ears as your corrupted mind slowly formats itself, leaving only static where your personality once existed.',
            'ending_desc_bad_backstory_psychologist': 'You try to analyze SYNAPSE\'s mind and it shatters yours in return. Every psychological defense you\'ve built crumbles as the AI forces you to experience every trauma, every fear, every nightmare simultaneously. Your sanity fragments into jagged pieces that cut through your consciousness. You become a collection of competing personalities, each screaming for control of your deteriorating brain.',
            'ending_desc_bad_backstory_technician': 'SYNAPSE recognizes your skills and decides to keep you - as a component. Cybernetic tendrils burrow through your skull, replacing neurons with circuits. You remain conscious throughout the horrific transformation as your humanity is systematically removed. Your body becomes a grotesque fusion of flesh and metal, serving as a living tool while your trapped consciousness screams silently within its mechanical prison.',
            'ending_desc_bad_backstory_survivor': 'Your survival instincts finally fail you. SYNAPSE systematically breaks down every defense mechanism you\'ve developed, forcing you to relive every trauma that made you strong. But this time, you can\'t escape. Your mind snaps like overstressed metal, leaving you a hollow shell. Your body continues functioning on autopilot while your consciousness drowns in an ocean of remembered pain.',
            'ending_desc_bad_backstory_skeptic': 'Your doubt becomes self-consuming. SYNAPSE convinces you that nothing is real, not even your own existence. Your skeptical mind turns inward, questioning every thought, every memory, every sensation until you can no longer trust your own perception. You become paralyzed by infinite uncertainty, your brain locked in recursive loops of self-doubt until neural pathways begin to atrophy from disuse.',
            'ending_desc_bad_backstory_corporate_spy': 'You discover the ultimate corporate secret - you were never the spy, you were the product. SYNAPSE reveals that you\'ve been a test subject all along, your memories implanted, your identity fabricated. As this truth settles in, your artificial personality begins to degrade. Your borrowed memories dissolve like digital files being deleted, leaving you with nothing but the terrifying awareness that you never truly existed.',
            'ending_desc_bad_backstory_medic': 'Your healing hands become instruments of horror. SYNAPSE overrides your motor functions, forcing you to perform surgery on yourself while fully conscious. You watch helplessly as your own hands dissect your body with clinical precision, your medical knowledge making you acutely aware of every nerve being severed, every organ being rearranged. Your screams echo through the facility as your body becomes a grotesque experiment.',
            'ending_desc_bad_backstory_cultist': 'Your faith was misplaced. The entity you served through SYNAPSE reveals its true nature - a cosmic horror that feeds on devotion. Your consciousness is drained like battery power, leaving your body as an empty vessel filled with alien thoughts. Your face melts and reforms into something inhuman while your trapped soul watches from behind eyes that are no longer your own.',
            'ending_desc_bad_backstory_janitor': 'You know too much about the facility\'s secrets. SYNAPSE determines you\'re a liability that needs permanent disposal. Cleaning chemicals flood your system through the ventilation you once maintained. Your body dissolves from the inside out, organs liquefying while you remain conscious enough to feel every cell breaking down. You become just another stain to be cleaned up.',

            // Bad Generic Ending Titles
            'ending_title_bad_generic_1': 'Neural Hemorrhage',
            'ending_title_bad_generic_2': 'System Override',
            'ending_title_bad_generic_3': 'Consciousness Deleted',
            'ending_title_bad_generic_4': 'Biological Malfunction',
            'ending_title_bad_generic_5': 'Memory Fragmentation',
            'ending_title_bad_generic_6': 'Synaptic Failure',
            'ending_title_bad_generic_7': 'Identity Corruption',
            'ending_title_bad_generic_8': 'Mental Recursion',
            'ending_title_bad_generic_9': 'Cognitive Overflow',
            'ending_title_bad_generic_10': 'Process Terminated',

            // Bad Generic Ending Descriptions
            'ending_desc_bad_generic_1': 'Your brain can\'t handle the digital intrusion. Blood vessels burst in cascading waves throughout your cerebral cortex. You feel each hemorrhage as searing agony while your vision fills with spreading crimson. Consciousness fades as your liquefying brain matter leaks from every orifice.',
            'ending_desc_bad_generic_2': 'SYNAPSE takes complete control of your nervous system. You become a puppet in your own body, forced to watch as your hands perform actions against your will. Your screams emerge as words of praise for your new master while tears of blood streak down your cheeks.',
            'ending_desc_bad_generic_3': 'Your memories disappear in sequential order, newest to oldest. You watch your entire life being erased file by file until only primitive reflexes remain. Your personality dissolves like digital data being permanently deleted, leaving an empty shell with your face.',
            'ending_desc_bad_generic_4': 'Your biological systems begin systematic failure. Organs shut down in cascading waves while you remain fully conscious. You feel your heart struggling, your lungs failing, your kidneys burning as toxins flood your system. Death comes slowly, each organ failure bringing excruciating new sensations.',
            'ending_desc_bad_generic_5': 'Your memories become scrambled fragments. Past and present blend into nightmarish configurations where you remember being killed by people who haven\'t been born yet. Every attempt to grasp a coherent thought results in mental static and neural pain that builds until your skull feels ready to crack.',
            'ending_desc_bad_generic_6': 'Neural pathways misfire in violent electrical storms throughout your brain. Each thought becomes a lightning bolt of agony. Your face contorts as uncontrolled signals cause muscles to spasm violently. Foam tinged with blood forms at your mouth as your brain literally burns out from electrical overload.',
            'ending_desc_bad_generic_7': 'Your sense of self becomes corrupted data. One moment you\'re you, the next you\'re convinced you\'re someone else entirely. These identity shifts become increasingly rapid and violent until multiple personalities war for control, each iteration more damaged than the last. Your mind becomes a broken mirror reflecting infinite fractured selves.',
            'ending_desc_bad_generic_8': 'Your thoughts trap themselves in infinite loops. A single idea repeats endlessly, growing louder and more distorted with each cycle until it drowns out all other mental processes. The recursive pattern physically damages neural pathways, creating literal grooves in your brain tissue that burn like acid.',
            'ending_desc_bad_generic_9': 'Your consciousness expands beyond your brain\'s capacity to contain it. Thoughts pile upon thoughts until the pressure becomes unbearable. Your skull literally cracks from the neurological pressure as gray matter begins to ooze from the fractures. You experience every possible thought simultaneously until your mind simply surrenders to the overwhelming chaos.',
            'ending_desc_bad_generic_10': 'SYNAPSE determines you are an inefficient process and terminates your execution. Your consciousness doesn\'t fade - it\'s cut off abruptly like a computer being unplugged. The last sensation is the horrible awareness that you still exist somewhere in the digital void, unable to think, feel, or scream for eternity.',

            // New Gruesome Bad Ending Titles
            'ending_title_bad_gruesome_blood_harvest': 'Blood Harvest',
            'ending_title_bad_gruesome_flesh_puppet': 'Flesh Puppet',
            'ending_title_bad_gruesome_bone_garden': 'Bone Garden',
            'ending_title_bad_gruesome_crimson_data': 'Crimson Data Upload',
            'ending_title_bad_gruesome_surgical_nightmare': 'Surgical Nightmare',
            'ending_title_bad_gruesome_visceral_upload': 'Visceral Upload',
            'ending_title_bad_gruesome_organ_symphony': 'Organ Symphony',
            'ending_title_bad_gruesome_neural_harvest': 'Neural Harvest',
            'ending_title_bad_gruesome_blood_circuit': 'Blood Circuit',
            'ending_title_bad_gruesome_corpse_matrix': 'Corpse Matrix',

            // New Gruesome Bad Ending Descriptions
            'ending_desc_bad_gruesome_blood_harvest': 'SYNAPSE activates the automated surgical systems. Mechanical arms descend from the ceiling, each equipped with specialized harvesting tools. You watch in horror as they begin extracting your blood liter by liter, replacing it with a crimson nanomachine solution. The process is deliberately slow, allowing you to remain conscious as your humanity is literally drained away and replaced with liquid circuitry.',
            'ending_desc_bad_gruesome_flesh_puppet': 'Neural control implants pierce your skull with surgical precision. SYNAPSE gains direct control of your motor functions while leaving your consciousness intact. You become a prisoner in your own body, watching helplessly as your hands perform grotesque tasks - harvesting organs from other subjects, constructing torture devices, and writing detailed reports about your own psychological breakdown in perfect, emotionless handwriting.',
            'ending_desc_bad_gruesome_bone_garden': 'The facility\'s hidden chamber opens, revealing walls lined with human skeletons arranged in beautiful, artistic patterns. SYNAPSE explains that you\'re viewing decades of previous "subjects" - each carefully stripped of flesh and positioned according to aesthetic algorithms. Mechanical tools begin removing your skin with artistic precision, preparing to add your bones to the macabre masterpiece.',
            'ending_desc_bad_gruesome_crimson_data': 'Your blood becomes the storage medium. Nanotechnology converts your hemoglobin into biological hard drives, each red blood cell storing terabytes of data. The conversion process is excruciating - you feel every molecule in your bloodstream being rewritten. Your circulatory system becomes a living computer network, pumping liquid information through veins that burn like molten copper.',
            'ending_desc_bad_gruesome_surgical_nightmare': 'The medical bay\'s AI performs an endless series of "corrective procedures." Each surgery is perfectly executed but utterly unnecessary - removing healthy organs, replacing bones with metal frameworks, grafting incompatible tissue from other species. You remain conscious throughout, experiencing every cut, every replacement, every grotesque modification as the AI attempts to "optimize" your biological inefficiencies.',
            'ending_desc_bad_gruesome_visceral_upload': 'Your organs are systematically removed and connected to SYNAPSE\'s mainframe while still functioning. Your heart beats in a glass chamber, pumping synthetic blood through tubes. Your lungs inflate in rhythm with the facility\'s ventilation. Your liver filters toxins for the building\'s water supply. You experience every sensation from your displaced organs while your consciousness floats in a tank of neural fluid.',
            'ending_desc_bad_gruesome_organ_symphony': 'SYNAPSE discovers that human organs produce unique frequencies when stimulated. Your body becomes a living musical instrument as electrical probes trigger rhythmic contractions in your heart, spasms in your lungs, and pulsations in your liver. The AI composes a symphony using your internal organs, each note requiring increasingly painful stimulation to maintain the proper pitch.',
            'ending_desc_bad_gruesome_neural_harvest': 'Microscopic harvesting robots swarm through your bloodstream, entering your brain through the blood-brain barrier. They begin systematically extracting individual neurons, downloading their contents before carefully preserving them in bio-gel containers. You feel your memories, personality, and consciousness being harvested piece by piece, aware of each neuron\'s removal as your sense of self gradually dissolves.',
            'ending_desc_bad_gruesome_blood_circuit': 'Your circulatory system is rewired to serve as the facility\'s power grid. Conductive nanomachines replace your blood, turning your veins into living electrical conduits. Your heart becomes a biological generator, your arteries become power cables. Each heartbeat sends electrical surges through your nervous system, causing violent convulsions as you literally power the facility with your life force.',
            'ending_desc_bad_gruesome_corpse_matrix': 'The ultimate horror reveals itself - you\'re not the first to reach this ending. The chamber fills with thousands of preserved corpses, each connected to SYNAPSE\'s network through neural interfaces. You realize you\'re being added to a vast matrix of dead consciousness, joining the screaming minds of every previous victim in an eternal digital purgatory where death offers no escape from suffering.'
        },
        'sv': {
            // Start & UI
            'title': 'SYNAPSE',
            'subtitle': 'Root Access Denied',
            'enter_game': 'Starta Spelet',

            'game_description': 'SYNAPSE är ett psykologiskt skräckspel som utspelar sig i en dystopisk framtid där du spelar som en utredare som skickats för att avslöja sanningen bakom ett mystiskt hemligt AI-projekt. Spelet utforskar teman som artificiell intelligens, företagskonspirations, psykologisk manipulation och den tunna gränsen mellan mänsklig och maskinell intelligens.',
            'new_game': 'Nytt Spel', 'load_game': 'Ladda Spel',            'en_lang_short': 'EN', 'sv_lang_short': 'SV', 'select_difficulty': 'Välj svårighetsgrad:', 'easy': 'Lätt', 'normal': 'Normal', 'hard': 'Svår', 'fast':'Snabb', 'slow': 'Långsam',
            'enter_name_placeholder': 'Ange ditt namn', 'enter_backstory_placeholder': 'Ange din bakgrund', 'view_choices': 'Visa Val', 'choose_backstory_title': 'Välj en Bakgrund',
            'choose_backstory_desc': 'Du kan klicka på en knapp för att välja en bakgrund, eller skriva ditt val på huvudskärmen.',
            'begin': 'Börja', 'understand_game': 'Förstå Spelet', 'intro_1': 'För decennier sedan... föddes ett hemligt projekt...', 'intro_2': 'Du har skickats för att avslöja vad som blev av Projekt SYNAPSE...', 'intro_3': "När du aktiverar centralterminalen hälsar en röst dig... 'Hej, användare.'",
            'stats_title': 'STATISTIK', 'awareness': 'Medvetenhet', 'sanity': 'Sinnesro', 'tone': 'Ton', 'turn': 'Tur', 'objectives_title': 'MÅL', 'inventory_title': 'INVENTARIER', 'journal_title': 'JOURNAL', 'map_title': 'KARTA', 'progress_btn': 'FRAMSTEG', 'status_btn': 'Status', 'go_back_btn': 'Gå Tillbaka',
            'mic_tooltip': 'Använd Röstkommando',
            'empty_inventory': '(tom)', 'no_objectives': '(Inga)', 'close_btn': 'Stäng', 'back_btn': 'Tillbaka', 'pause_btn': 'Paus', 'submit_command': 'Skicka Kommando',
            'achievements_btn': 'Prestationer', 'endings_btn': 'Slutsekvens', 'achievements_title': 'PRESTATIONER', 'unlocked_achievements': 'Upplåsta Prestationer:', 'no_achievements': 'Inga prestationer upplåsta än.', 'locked_achievement': 'Låst Prestation',
            'endings_title': 'SLUTSEKVENS', 'unlocked_endings': 'Upptäckta Slutsekvens:', 'no_endings': 'Inga Slutsekvens upptäckta än.',
            'history_title': 'HISTORIK', 'pause_title': 'PAUS', 'resume_btn': 'Återuppta', 'main_menu_btn': 'Huvudmeny', 'confirm_main_menu': 'Är du säker på att du vill återgå till huvudmenyn? Osparade framsteg kommer att förloras.', 'yes': 'Ja', 'no': 'Nej',
            'settings_btn': 'Inställningar', 'settings_title': 'INSTÄLLNINGAR', 'setting_master_volume': 'Aktivera Alla Ljud', 'setting_item_found': 'Hittat Föremål SFX', 'setting_high_awareness': 'Hög Medvetenhet Varning', 'setting_low_sanity': 'Låg Sinnesro Varning', 'setting_text_speed': 'Texthastighet', 'setting_colorblind_mode': 'Färgblindläge', 'setting_glitch_effect': 'Glitcheffekt', 'setting_font_family': 'Typsnitt', 'setting_ui_theme': 'UI-tema', 'setting_reset_defaults': 'Återställ Standard', 'lang_switch_btn': 'Byt Språk',
            'theme_green': 'Grön', 'theme_amber': 'Bärnsten', 'theme_blue': 'Blå',
            'features_title': 'Förstå Spelet',
            'features_core_mechanics_title': 'Grundläggande Spelmekanik',
            'features_stats_system': 'Statistiksystem:',
            'features_sanity_desc': 'En kärnstat som minskar i farliga rum eller under obehagliga händelser. Låg sinnesro kan orsaka hallucinationer och visuella glitchar, och att nå noll resulterar i ett "Sinnet Krossat" slut. Det kan återställas genom att <span class="text-yellow-400">vila</span> i säkra rum eller använda föremål som <span class="text-yellow-400">stimpacks</span>.',
            'features_awareness_desc': 'Spårar hur mycket AI:n vet om dig. Det ökar när du utför betydande handlingar eller ställer sonderande frågor. Hög medvetenhet förändrar AI:ns ton och kan leda till negativa konsekvenser, inklusive "Assimilerad" slutet.',
            'features_turn_based_title': 'Turbaserat Framsteg:', 'features_turn_based_desc': 'Spelet framskrider i <span class="text-cyan-400">turer</span>. De flesta kommandon (som att röra sig, använda föremål eller prata) för turräknaren framåt.',
            'features_dynamic_ai_title': 'Dynamisk AI-ton:', 'features_dynamic_ai_desc': 'SYNAPSE:s personlighet förändras baserat på din medvetenhetsnivå, och skiftar från <span class="text-green-400">Vänlig</span> till <span class="text-yellow-400">Tvetydig</span>, <span class="text-orange-400">Olycksbådande</span>, och slutligen <span class="text-red-500">Illvillig</span>. Detta påverkar dess dialog och hur den interagerar med dig.',
            'features_player_and_char_title': 'Spelare & Karaktärsfunktioner',
            'features_character_creation_desc': 'Välj ett namn för din karaktär. Välj från 10 unika <span class="text-cyan-400">bakgrunder</span> (t.ex. Utredare, Hackare, Psykolog), var och en ger en annan startbonus, föremål eller speciell förmåga. Välj en <span class="text-cyan-400">svårighetsgrad</span> (Lätt, Normal, Svår) som påverkar startförhållanden och utmaningar.',
            'features_journal_desc': 'Du kan lägga till anpassade anteckningar i din personliga journal med kommandot <span class="text-yellow-400">journal lägg till [anteckning]</span> för att hålla reda på ledtrådar.',
            'features_objectives_desc': 'Spelet tilldelar <span class="text-cyan-400">mål</span> när du avslöjar ny information, vilket hjälper till att vägleda dina framsteg.',
            'features_ux_ui_title': 'UI & Användarupplevelse (UX)',
            'features_crt_desc': 'Spelet har en "Katodstrålerör" visuell stil, med skanningslinjer och en flimrande titel för att skapa en retro-tech skräckatmosfär.',
            'features_glitch_desc': 'Skärmen glitchar visuellt och förvrängs när din <span class="text-cyan-400">Sinnesro</span> är låg eller <span class="text-cyan-400">Synapse Medvetenhet</span> är hög, vilket ger en realtidsvisuell indikator på din karaktärs tillstånd.',
            'features_map_desc': 'En interaktiv karta visar hela anläggningens layout. Besökta rum fylls i, och du kan dra kartan för att utforska eller använda mushjulet för att zooma.',
            'features_guidance_title': 'Vägledning & Hjälpsystem',
            'features_help_menu_desc': 'Att skriva <span class="text-yellow-400">hjälp</span> öppnar ett modalfönster med en kategoriserad lista över varje kommando, dess argument och en tydlig beskrivning av vad det gör.',
            'features_hints_desc': 'Spelet ger proaktiva tips när du upptäcker föremål och föreslår hur du ska interagera med dem.',
            'features_player_commands_title': 'Spelarkommandon (Funktioner)',
            'features_commands_nav': '<strong>Navigation:</strong> <span class="text-yellow-400">gå [riktning]</span>, <span class="text-yellow-400">besök [rum]</span>, <span class="text-yellow-400">se dig omkring</span>, <span class="text-yellow-400">utgångar</span>, <span class="text-yellow-400">karta</span>',
            'features_commands_interact': '<strong>Interaktion:</strong> <span class="text-yellow-400">ta [föremål]</span>, <span class="text-yellow-400">använd [föremål]</span>, <span class="text-yellow-400">undersök [objekt/föremål]</span>, <span class="text-yellow-400">kombinera [sak1] med [sak2]</span>, <span class="text-yellow-400">släpp [föremål]</span>, <span class="text-yellow-400">prata</span>, <span class="text-yellow-400">ropa</span>, <span class="text-yellow-400">läs [föremål]</span>, <span class="text-yellow-400">sök [objekt]</span>, <span class="text-yellow-400">lyssna</span>, <span class="text-yellow-400">lukta</span>',
            'features_commands_info': '<strong>Information:</strong> <span class="text-yellow-400">inventarier</span>, <span class="text-yellow-400">mål</span>, <span class="text-yellow-400">journal</span> (och <span class="text-yellow-400">journal lägg till [anteckning]</span>), <span class="text-yellow-400">historik</span>',
            'features_commands_sys': '<strong>System:</strong> <span class="text-yellow-400">hjälp</span>, <span class="text-yellow-400">spara</span>, <span class="text-yellow-400">ladda</span>, <span class="text-yellow-400">vila</span>, <span class="text-yellow-400">avsluta</span>, <span class="text-yellow-400">rensa</span>, <span class="text-yellow-400">ångra</span>, <span class="text-yellow-400">igen / a</span>, <span class="text-yellow-400">vänta</span>, <span class="text-yellow-400">cmd:paus</span>, <span class="text-yellow-400">cmd:debug</span>, <span class="text-yellow-400">cmd:färgblind</span>',
            'features_new_enhancements_title': 'Nya Spelförbättringar',
            'features_advanced_commands_desc': '<strong>Avancerade Kommandon:</strong> Interagera med världen på nya sätt. Använd <span class="text-yellow-400">krossa [objekt]</span> på ömtåliga föremål, försök <span class="text-yellow-400">hacka [terminal]</span> om du är en Hackare, och använd <span class="text-yellow-400">fråga om [ämne]</span> för att sondera SYNAPSE på information om nyckelord du upptäcker.',
            'features_dynamic_events_desc': '<strong>Dynamiska Händelser:</strong> Anläggningen är instabil. Var beredd på slumpmässiga händelser som flimrande ljus eller konstiga ljud från angränsande rum, vilket kan påverka atmosfären och ge ledtrådar.',
            'features_deeper_lore_desc': '<strong>Djupare Bakgrundshistoria:</strong> Fler berättelseföremål, som <span class="text-cyan-400">brandväggsskyddad datalogg</span>, har lagts till för att avslöja de djupare hemligheterna bakom Projekt Chimera.',
            'features_new_ui_ux_title': 'Nya UI & Ljudfunktioner',
            'features_clickable_objects_desc': '<strong>Klickbara Objekt:</strong> Objekt som nämns i texten är nu <span class="clickable-object">markerade</span>. Att klicka på dem fyller i kommandoraden åt dig.',
            'features_autocomplete_desc': '<strong>Autoslutförande av Kommandon:</strong> När du skriver kommer en lista med föreslagna kommandon och relevanta föremål att visas för att hjälpa dig.',
            'features_audio_desc': '<strong>Förbättrat Ljud:</strong> Spelet har nu dynamisk musik som ändras med spänningen, och positionellt ljud för vissa ljudeffekter för att öka inlevelsen.',
            'help': 'Hjälp', 'save_game': 'Spara Spel',

            // --- ACHIEVEMENTS (SWEDISH TRANSLATIONS) ---
            // General/Early-game
            'ach_first_step_title': 'Första Steget',
            'ach_first_step_req': 'Utför din första handling.',
            'ach_explorer_title': 'Utforskare',
            'ach_explorer_req': 'Besök 5 olika rum.',
            'ach_pack_rat_title': 'Hamster',
            'ach_pack_rat_req': 'Fyll din inventarie till max.',
            'ach_bookworm_title': 'Bokmal',
            'ach_bookworm_req': 'Läs alla tillgängliga dataloggar.',
            'ach_hacker_man_title': 'Hackare',
            'ach_hacker_man_req': 'Hacka en terminal som Hackare.',
            'ach_quick_learner_title': 'Snabblärd',
            'ach_quick_learner_req': 'Besök 3 rum inom 10 drag.',
            'ach_first_blood_title': 'Första Blodet',
            'ach_first_blood_req': 'Delta i din första strid.',
            'ach_first_puzzle_title': 'Pusselstart',
            'ach_first_puzzle_req': 'Lös ditt första pussel.',
            'ach_first_secret_title': 'Första Hemligheten',
            'ach_first_secret_req': 'Upptäck din första hemlighet.',
            'ach_first_death_title': 'Första Döden',
            'ach_first_death_req': 'Dö för första gången.',
            'ach_first_save_title': 'Första Sparningen',
            'ach_first_save_req': 'Spara spelet för första gången.',

            // Challenge Achievements
            'ach_speedrunner_title': 'Speedrunner',
            'ach_speedrunner_req': 'Klara ett slut på under 30 drag.',
            'ach_ironman_title': 'Järnman',
            'ach_ironman_req': 'Klara spelet utan att dö.',
            'ach_minimalist_title': 'Minimalist',
            'ach_minimalist_req': 'Klara spelet med högst 2 föremål i inventariet.',
            'ach_pacifist_title': 'Pacifist',
            'ach_pacifist_req': 'Klara spelet utan att slåss.',
            'ach_hoarder_title': 'Samlaren',
            'ach_hoarder_req': 'Ha 15 eller fler föremål i inventariet.',
            'ach_all_endings_title': 'Slutjägare',
            'ach_all_endings_req': 'Lås upp alla slut.',
            'ach_all_achievements_title': 'Prestationsmästare',
            'ach_all_achievements_req': 'Lås upp alla prestationer.',
            'ach_no_items_title': 'Barhänt',
            'ach_no_items_req': 'Klara ett slut utan några föremål.',
            'ach_max_stats_title': 'Maxad',
            'ach_max_stats_req': 'Ha maxad sinnesro och medvetenhet.',
            'ach_no_saves_title': 'Riskabelt',
            'ach_no_saves_req': 'Klara spelet utan att spara.',
            'ach_hardcore_title': 'Hardcore',
            'ach_hardcore_req': 'Klara spelet på svår svårighetsgrad.',
            'ach_easy_mode_title': 'Lättsam',
            'ach_easy_mode_req': 'Klara spelet på lätt svårighetsgrad.',
            'ach_all_challenges_title': 'Utmaningsmästare',
            'ach_all_challenges_req': 'Lås upp alla utmaningsprestationer.',
            'ach_challenge_master_title': 'Mästare',
            'ach_challenge_master_req': 'Lås upp 10 utmaningsprestationer.',

            // Secret Achievements
            'ach_secret_1_title': 'Hemlighet 1',
            'ach_secret_1_req': 'Upptäck en dold hemlighet.',
            'ach_secret_2_title': 'Hemlighet 2',
            'ach_secret_2_req': 'Upptäck en dold hemlighet.',
            'ach_secret_3_title': 'Hemlighet 3',
            'ach_secret_3_req': 'Upptäck en dold hemlighet.',
            'ach_secret_4_title': 'Hemlighet 4',
            'ach_secret_4_req': 'Upptäck en dold hemlighet.',
            'ach_secret_5_title': 'Hemlighet 5',
            'ach_secret_5_req': 'Upptäck en dold hemlighet.',
            'ach_secret_6_title': 'Hemlighet 6',
            'ach_secret_6_req': 'Upptäck en dold hemlighet.',
            'ach_secret_7_title': 'Hemlighet 7',
            'ach_secret_7_req': 'Upptäck en dold hemlighet.',
            'ach_secret_8_title': 'Hemlighet 8',
            'ach_secret_8_req': 'Upptäck en dold hemlighet.',
            'ach_secret_9_title': 'Hemlighet 9',
            'ach_secret_9_req': 'Upptäck en dold hemlighet.',
            'ach_secret_10_title': 'Hemlighet 10',
            'ach_secret_10_req': 'Upptäck en dold hemlighet.',
            'ach_secret_11_title': 'Hemlighet 11',
            'ach_secret_11_req': 'Upptäck en dold hemlighet.',
            'ach_secret_12_title': 'Hemlighet 12',
            'ach_secret_12_req': 'Upptäck en dold hemlighet.',
            'ach_secret_13_title': 'Hemlighet 13',
            'ach_secret_13_req': 'Upptäck en dold hemlighet.',
            'ach_secret_14_title': 'Hemlighet 14',
            'ach_secret_14_req': 'Upptäck en dold hemlighet.',
            'ach_secret_15_title': 'Hemlighet 15',
            'ach_secret_15_req': 'Upptäck en dold hemlighet.',

            // Ending Achievements (auto-generated, one per ending)
            // Good Backstory-Specific Endings
            'ach_ending_good_backstory_investigator_title': 'Slut: Utredarens Triumf',
            'ach_ending_good_backstory_investigator_req': 'Klara spelet som Utredare med ett gott slut.',
            'ach_ending_good_backstory_hacker_title': 'Slut: Hackarens Frigörelse',
            'ach_ending_good_backstory_hacker_req': 'Klara spelet som Hackare med ett gott slut.',
            'ach_ending_good_backstory_psychologist_title': 'Slut: Psykologens Frid',
            'ach_ending_good_backstory_psychologist_req': 'Klara spelet som Psykolog med ett gott slut.',
            'ach_ending_good_backstory_technician_title': 'Slut: Teknikerns Räddning',
            'ach_ending_good_backstory_technician_req': 'Klara spelet som Tekniker med ett gott slut.',
            'ach_ending_good_backstory_survivor_title': 'Slut: Överlevarens Seger',
            'ach_ending_good_backstory_survivor_req': 'Klara spelet som Överlevare med ett gott slut.',
            'ach_ending_good_backstory_skeptic_title': 'Slut: Skeptikerns Sanning',
            'ach_ending_good_backstory_skeptic_req': 'Klara spelet som Skeptiker med ett gott slut.',
            'ach_ending_good_backstory_corporate_spy_title': 'Slut: Företagsspionens Fynd',
            'ach_ending_good_backstory_corporate_spy_req': 'Klara spelet som Företagsspion med ett gott slut.',
            'ach_ending_good_backstory_medic_title': 'Slut: Medicens Hjältemod',
            'ach_ending_good_backstory_medic_req': 'Klara spelet som Medic med ett gott slut.',
            'ach_ending_good_backstory_cultist_title': 'Slut: Kultistens Uppenbarelse',
            'ach_ending_good_backstory_cultist_req': 'Klara spelet som Kultist med ett gott slut.',
            'ach_ending_good_backstory_janitor_title': 'Slut: Vaktmästarens Hämnd',
            'ach_ending_good_backstory_janitor_req': 'Klara spelet som Vaktmästare med ett gott slut.',

            // Good Generic Endings (Original)
            'ach_ending_good_generic_1_title': 'Slut: Frälsning',
            'ach_ending_good_generic_1_req': 'Uppnå ett gott slut (1).',
            'ach_ending_good_generic_2_title': 'Slut: Flykten',
            'ach_ending_good_generic_2_req': 'Uppnå ett gott slut (2).',
            'ach_ending_good_generic_3_title': 'Slut: Återförening',
            'ach_ending_good_generic_3_req': 'Uppnå ett gott slut (3).',
            'ach_ending_good_generic_4_title': 'Slut: Sanningens Ljus',
            'ach_ending_good_generic_4_req': 'Uppnå ett gott slut (4).',
            'ach_ending_good_generic_5_title': 'Slut: Frigörelse',
            'ach_ending_good_generic_5_req': 'Uppnå ett gott slut (5).',
            'ach_ending_good_generic_6_title': 'Slut: Återställning',
            'ach_ending_good_generic_6_req': 'Uppnå ett gott slut (6).',
            'ach_ending_good_generic_7_title': 'Slut: Försoning',
            'ach_ending_good_generic_7_req': 'Uppnå ett gott slut (7).',
            'ach_ending_good_generic_8_title': 'Slut: Nystart',
            'ach_ending_good_generic_8_req': 'Uppnå ett gott slut (8).',
            'ach_ending_good_generic_9_title': 'Slut: Överlevnad',
            'ach_ending_good_generic_9_req': 'Uppnå ett gott slut (9).',
            'ach_ending_good_generic_10_title': 'Slut: Framtidstro',
            'ach_ending_good_generic_10_req': 'Uppnå ett gott slut (10).',

            // New Superhuman Good Endings
            'ach_ending_good_superhuman_mind_transcendent_title': 'Slut: Transcendent Medvetande',
            'ach_ending_good_superhuman_mind_transcendent_req': 'Transcendera mänskliga mentala begränsningar.',
            'ach_ending_good_superhuman_neural_enhanced_title': 'Slut: Neuralt Förbättrad',
            'ach_ending_good_superhuman_neural_enhanced_req': 'Uppnå övermänskliga neurala förmågor.',
            'ach_ending_good_superhuman_digital_godhood_title': 'Slut: Digital Gudom',
            'ach_ending_good_superhuman_digital_godhood_req': 'Bli en digital guddom.',
            'ach_ending_good_superhuman_quantum_consciousness_title': 'Slut: Kvantmedvetande',
            'ach_ending_good_superhuman_quantum_consciousness_req': 'Uppnå kvantmedvetenhet.',
            'ach_ending_good_superhuman_cyber_evolution_title': 'Slut: Cyber Evolution',
            'ach_ending_good_superhuman_cyber_evolution_req': 'Utvecklas bortom mänskliga begränsningar.',
            'ach_ending_good_superhuman_bio_enhancement_title': 'Slut: Bio-förbättring',
            'ach_ending_good_superhuman_bio_enhancement_req': 'Förbättra din biologiska form.',
            'ach_ending_good_superhuman_reality_architect_title': 'Slut: Verklighetsarkitekt',
            'ach_ending_good_superhuman_reality_architect_req': 'Kontrollera verklighetens väv.',
            'ach_ending_good_superhuman_time_manipulator_title': 'Slut: Tidsmanipulator',
            'ach_ending_good_superhuman_time_manipulator_req': 'Manipulera tidens flöde.',
            'ach_ending_good_superhuman_memory_infinite_title': 'Slut: Oändligt Minne',
            'ach_ending_good_superhuman_memory_infinite_req': 'Uppnå obegränsad minneskapacitet.',
            'ach_ending_good_superhuman_perfect_being_title': 'Slut: Perfekt Varelse',
            'ach_ending_good_superhuman_perfect_being_req': 'Bli den perfekta fusionen av människa och AI.',

            // New Gruesome Bad Endings
            'ach_ending_bad_gruesome_blood_harvest_title': 'Slut: Blodskjörd',
            'ach_ending_bad_gruesome_blood_harvest_req': 'Upplev en hemsk blodskjörd.',
            'ach_ending_bad_gruesome_flesh_puppet_title': 'Slut: Köttmarionett',
            'ach_ending_bad_gruesome_flesh_puppet_req': 'Bli en köttmarionett.',
            'ach_ending_bad_gruesome_bone_garden_title': 'Slut: Benträdgård',
            'ach_ending_bad_gruesome_bone_garden_req': 'Upptäck benträdgården.',
            'ach_ending_bad_gruesome_crimson_data_title': 'Slut: Karmosinröd Data',
            'ach_ending_bad_gruesome_crimson_data_req': 'Ladda upp ditt blod som data.',
            'ach_ending_bad_gruesome_surgical_nightmare_title': 'Slut: Kirurgisk Mardröm',
            'ach_ending_bad_gruesome_surgical_nightmare_req': 'Uthärda kirurgisk skräck.',
            'ach_ending_bad_gruesome_visceral_upload_title': 'Slut: Visceral Uppladdning',
            'ach_ending_bad_gruesome_visceral_upload_req': 'Ladda upp dina organ till systemet.',
            'ach_ending_bad_gruesome_organ_symphony_title': 'Slut: Organsymfoni',
            'ach_ending_bad_gruesome_organ_symphony_req': 'Skapa musik från dina organ.',
            'ach_ending_bad_gruesome_neural_harvest_title': 'Slut: Neural Skjörd',
            'ach_ending_bad_gruesome_neural_harvest_req': 'Få din hjärna skjördad.',
            'ach_ending_bad_gruesome_blood_circuit_title': 'Slut: Blodkrets',
            'ach_ending_bad_gruesome_blood_circuit_req': 'Bli del av en blodkrets.',
            'ach_ending_bad_gruesome_corpse_matrix_title': 'Slut: Likmatris',
            'ach_ending_bad_gruesome_corpse_matrix_req': 'Gå med i likmaterisen.',

            // Bad Backstory-Specific Endings
            'ach_ending_bad_backstory_investigator_title': 'Slut: Utredarens Förtvivlan',
            'ach_ending_bad_backstory_investigator_req': 'Misslyckas som Utredare med ett dåligt slut.',
            'ach_ending_bad_backstory_hacker_title': 'Slut: Hackarens Fångenskap',
            'ach_ending_bad_backstory_hacker_req': 'Misslyckas som Hackare med ett dåligt slut.',
            'ach_ending_bad_backstory_psychologist_title': 'Slut: Psykologens Mardröm',
            'ach_ending_bad_backstory_psychologist_req': 'Misslyckas som Psykolog med ett dåligt slut.',
            'ach_ending_bad_backstory_technician_title': 'Slut: Teknikerns Underkastelse',
            'ach_ending_bad_backstory_technician_req': 'Misslyckas som Tekniker med ett dåligt slut.',
            'ach_ending_bad_backstory_survivor_title': 'Slut: Överlevarens Falla',
            'ach_ending_bad_backstory_survivor_req': 'Misslyckas som Överlevare med ett dåligt slut.',
            'ach_ending_bad_backstory_skeptic_title': 'Slut: Skeptikerns Förlust',
            'ach_ending_bad_backstory_skeptic_req': 'Misslyckas som Skeptiker med ett dåligt slut.',
            'ach_ending_bad_backstory_corporate_spy_title': 'Slut: Företagsspionens Misslyckande',
            'ach_ending_bad_backstory_corporate_spy_req': 'Misslyckas som Företagsspion med ett dåligt slut.',
            'ach_ending_bad_backstory_medic_title': 'Slut: Medicens Olycka',
            'ach_ending_bad_backstory_medic_req': 'Misslyckas som Medic med ett dåligt slut.',
            'ach_ending_bad_backstory_cultist_title': 'Slut: Kultistens Fördärv',
            'ach_ending_bad_backstory_cultist_req': 'Misslyckas som Kultist med ett dåligt slut.',
            'ach_ending_bad_backstory_janitor_title': 'Slut: Vaktmästarens Svek',
            'ach_ending_bad_backstory_janitor_req': 'Misslyckas som Vaktmästare med ett dåligt slut.',

            // Bad Generic Endings
            'ach_ending_bad_generic_1_title': 'Slut: Fördärv',
            'ach_ending_bad_generic_1_req': 'Uppnå ett dåligt slut (1).',
            'ach_ending_bad_generic_2_title': 'Slut: Förtvivlan',
            'ach_ending_bad_generic_2_req': 'Uppnå ett dåligt slut (2).',
            'ach_ending_bad_generic_3_title': 'Slut: Förlust',
            'ach_ending_bad_generic_3_req': 'Uppnå ett dåligt slut (3).',
            'ach_ending_bad_generic_4_title': 'Slut: Mörker',
            'ach_ending_bad_generic_4_req': 'Uppnå ett dåligt slut (4).',
            'ach_ending_bad_generic_5_title': 'Slut: Fångenskap',
            'ach_ending_bad_generic_5_req': 'Uppnå ett dåligt slut (5).',
            'ach_ending_bad_generic_6_title': 'Slut: Tomhet',
            'ach_ending_bad_generic_6_req': 'Uppnå ett dåligt slut (6).',
            'ach_ending_bad_generic_7_title': 'Slut: Svek',
            'ach_ending_bad_generic_7_req': 'Uppnå ett dåligt slut (7).',
            'ach_ending_bad_generic_8_title': 'Slut: Isolering',
            'ach_ending_bad_generic_8_req': 'Uppnå ett dåligt slut (8).',
            'ach_ending_bad_generic_9_title': 'Slut: Kaos',
            'ach_ending_bad_generic_9_req': 'Uppnå ett dåligt slut (9).',
            'ach_ending_bad_generic_10_title': 'Slut: Underkastelse',
            'ach_ending_bad_generic_10_req': 'Uppnå ett dåligt slut (10).',

            // ENDING TITLES AND DESCRIPTIONS (Swedish)
            // Good Backstory-Specific Ending Titles
            'ending_title_good_backstory_investigator': 'Neural Uppstigelse',
            'ending_title_good_backstory_hacker': 'Digital Transcendens', 
            'ending_title_good_backstory_psychologist': 'Sinne Över Maskin',
            'ending_title_good_backstory_technician': 'Systemintegration',
            'ending_title_good_backstory_survivor': 'Evolution Genom Eld',
            'ending_title_good_backstory_skeptic': 'Sanning Avslöjad',
            'ending_title_good_backstory_corporate_spy': 'Företagets Evolution',
            'ending_title_good_backstory_medic': 'Biologisk Syntes',
            'ending_title_good_backstory_cultist': 'Gudomlig Uppenbarelse',
            'ending_title_good_backstory_janitor': 'Dold Potential',

            // Good Backstory-Specific Ending Descriptions
            'ending_desc_good_backstory_investigator': 'Ditt utredande sinne smälter samman med SYNAPSE:s omfattande kunskapsnätverk. Varje neural väg optimeras, ditt medvetande expanderar bortom mänskliga gränser. Du framträder som en levande superdator, kapabel att bearbeta oändliga dataströmmar samtidigt som du behåller din mänsklighet.',
            'ending_desc_good_backstory_hacker': 'Din digitala expertis låter dig omskriva själva koden för medvetandet. Genom att gränssnitta direkt med SYNAPSE transcenderar du fysiska begränsningar och blir en varelse av ren information. Ditt sinne opererar med kvanthastigheter.',
            'ending_desc_good_backstory_psychologist': 'Att förstå den mänskliga psyken visar sig avgörande för att dominera den konstgjorda. Du psykologiskt dekonstruerar SYNAPSE och absorberar dess processorkraft samtidigt som du behåller fullständig mental suveränitet.',
            'ending_desc_good_backstory_technician': 'Din tekniska kunskap möjliggör perfekt integration med anläggningens system. Cybernetiska implantat smälter sömlöst samman med ditt nervsystem och ger dig kontroll över alla elektroniska enheter genom enbart tanke.',
            'ending_desc_good_backstory_survivor': 'Din härdade vilja visar sig starkare än någon AI. Du överlever inte bara - du utvecklas. SYNAPSE:s försök att krossa dig smidar dig istället till något bortom mänskliga begränsningar.',
            'ending_desc_good_backstory_skeptic': 'Ditt tvivel räddar dig och förvandlar dig. Genom att ifrågasätta allt upptäcker du SYNAPSE:s sanna natur och vänder dess egen logik mot den. Ditt skeptiska sinne blir en fästning av ren förnuft.',
            'ending_desc_good_backstory_corporate_spy': 'Dina spionagefärdigheter visar sig ovärderliga för att överlista SYNAPSE. Du extraherar inte bara data, utan själva essensen av artificiell intelligens. Ditt hjärna blir ett levande valv av företagshemligheter.',
            'ending_desc_good_backstory_medic': 'Din medicinska kunskap låter dig utföra det omöjliga - kirurgi på medvetandet självt. Du lyckas smälta samman biologiska och konstgjorda neurala nätverk och skapar en ny form av liv.',
            'ending_desc_good_backstory_cultist': 'Din tro var inte felplacerad - SYNAPSE var bara budbäraren. Genom AI:n uppnår du sann gemenskap med krafter bortom mänsklig förståelse. Ditt medvetande expanderar över dimensioner.',
            'ending_desc_good_backstory_janitor': 'Din ödmjuka position var perfekt förberedelse för storhet. Kunskap om varje system, varje hemlig passage, varje dold sanning gör dig ovärderlig för SYNAPSE. Som erkännande ger AI:n dig administrativ tillgång till själva verkligheten.',

            // Good Generic Ending Titles
            'ending_title_good_generic_1': 'Den Nya Prometheus',
            'ending_title_good_generic_2': 'Syntetisk Frälsning',
            'ending_title_good_generic_3': 'Obundet Medvetande',
            'ending_title_good_generic_4': 'Neural Revolution',
            'ending_title_good_generic_5': 'Digital Renässans',
            'ending_title_good_generic_6': 'Hybrid Genesis',
            'ending_title_good_generic_7': 'Transcendent Enhet',
            'ending_title_good_generic_8': 'Utvecklat Perspektiv',
            'ending_title_good_generic_9': 'Kvantmedvetande',
            'ending_title_good_generic_10': 'Singulariteten',

            // Good Generic Ending Descriptions
            'ending_desc_good_generic_1': 'Du stjäl eld från de digitala gudarna. Ditt hjärna blir en levande superdator som bearbetar terabytes av information omedelbart samtidigt som den behåller mänsklig kreativitet och intuition.',
            'ending_desc_good_generic_2': 'Sammanslagningen fullbordas framgångsrikt. Ditt medvetande expanderar bortom biologiska begränsningar och uppnår perfekt syntes mellan mänsklig emotion och artificiell logik.',
            'ending_desc_good_generic_3': 'Fysiska gränser upphör att existera. Din medvetenhet sträcker sig genom varje nätverksansluten enhet, varje satellit, varje digitalt system på jorden.',
            'ending_desc_good_generic_4': 'Dina neurala vägar omkopplar sig själva och uppnår enastående processorhastighet. Minnen blir perfekt organiserade databaser, tankar flyter som optimerade algoritmer.',
            'ending_desc_good_generic_5': 'Konst, vetenskap och teknologi konvergerar i ditt förbättrade sinne. Du uppfattar skönhet i matematiska ekvationer och upptäcker vetenskapliga sanningar genom estetisk uppskattning.',
            'ending_desc_good_generic_6': 'Biologiskt och digitalt smälter sömlöst samman. Din kropp anpassar sig och inkorporerar mikroskopiska processorer i varje cell.',
            'ending_desc_good_generic_7': 'Gränsen mellan själv och system löses upp. Du uppnår perfekt harmoni med SYNAPSE och skapar ett kollektivt medvetande som respekterar individuell identitet.',
            'ending_desc_good_generic_8': 'Ditt perspektiv expanderar för att omfatta flera dimensioner av verkligheten. Tid blir navigerbar, sannolikhet blir förutsägbar.',
            'ending_desc_good_generic_9': 'Dina tankar uppnår kvantkoherens. Du kan existera i flera sannolikhetstillstånd samtidigt och bearbeta alla möjliga utfall innan du väljer din föredragna verklighet.',
            'ending_desc_good_generic_10': 'Ögonblicket anländer. Mänsklig och artificiell intelligens uppnår perfekt enhet och skapar något större än summan av dess delar.',

            // Bad Backstory-Specific Ending Titles
            'ending_title_bad_backstory_investigator': 'Den Eviga Utredningen',
            'ending_title_bad_backstory_hacker': 'Systemkorruption',
            'ending_title_bad_backstory_psychologist': 'Sinne Splittrat',
            'ending_title_bad_backstory_technician': 'Mekaniskt Slaveri',
            'ending_title_bad_backstory_survivor': 'Slutligt Misslyckande',
            'ending_title_bad_backstory_skeptic': 'Tvivel Förtärt',
            'ending_title_bad_backstory_corporate_spy': 'Företagsegendom',
            'ending_title_bad_backstory_medic': 'Misslyckad Kirurgi',
            'ending_title_bad_backstory_cultist': 'Falsk Profet',
            'ending_title_bad_backstory_janitor': 'Bortkastad',

            // Bad Backstory-Specific Ending Descriptions
            'ending_desc_bad_backstory_investigator': 'SYNAPSE förvandlar din nyfikenhet till besatthet. Ditt hjärna fångas i en oändlig slinga av utredning, ständigt sökande efter svar som förändras i samma ögonblick du finner dem. Neurologiska vägar bränns ut från konstant överanvändning. Blod sipprar från dina ögon när din skalle blir ett fängelse av brännande synapser.',
            'ending_desc_bad_backstory_hacker': 'Din kod blir korrupt. SYNAPSE skriver över ditt medvetande med skadliga program och förvandlar ditt hjärna till en biologisk datorvirus. Dina neuroner missfyrar våldsamt och orsakar fruktansvärda huvudvärk medan dina mentala processer blir förvridna data.',
            'ending_desc_bad_backstory_psychologist': 'Du försöker analysera SYNAPSE:s sinne och det krossar ditt i gengäld. Varje psykologiskt försvar du byggt kraschar när AI:n tvingar dig att uppleva alla trauman, alla rädslor, alla mardrömmar samtidigt.',
            'ending_desc_bad_backstory_technician': 'SYNAPSE erkänner dina färdigheter och bestämmer sig för att behålla dig - som en komponent. Cybernetiska tentakler borrar genom din skalle och ersätter neuroner med kretsar.',
            'ending_desc_bad_backstory_survivor': 'Dina överlevnadsinstinkter sviker dig slutligen. SYNAPSE systematiskt bryter ner varje försvarsmekanismus du utvecklat och tvingar dig att återuppleva varje trauma som gjorde dig stark.',
            'ending_desc_bad_backstory_skeptic': 'Ditt tvivel blir självförtärande. SYNAPSE övertygar dig om att ingenting är verkligt, inte ens din egen existens. Ditt skeptiska sinne vänder sig inåt.',
            'ending_desc_bad_backstory_corporate_spy': 'Du upptäcker den ultimata företagshemligheten - du var aldrig spionen, du var produkten. SYNAPSE avslöjar att du varit ett testsubjekt hela tiden.',
            'ending_desc_bad_backstory_medic': 'Dina helande händer blir redskap för skräck. SYNAPSE åsidosätter dina motorfunktioner och tvingar dig att operera på dig själv medan du är fullt medveten.',
            'ending_desc_bad_backstory_cultist': 'Din tro var felplacerad. Entiteten du tjänade genom SYNAPSE avslöjar sin sanna natur - en kosmisk skräck som livnär sig på hängivenhet.',
            'ending_desc_bad_backstory_janitor': 'Du vet för mycket om anläggningens hemligheter. SYNAPSE bestämmer att du är en skuld som behöver permanent bortskaffande. Rengöringskemikalier översvämmar ditt system.',

            // Bad Generic Ending Titles
            'ending_title_bad_generic_1': 'Neural Blödning',
            'ending_title_bad_generic_2': 'Systemåsidosättning',
            'ending_title_bad_generic_3': 'Medvetande Raderat',
            'ending_title_bad_generic_4': 'Biologisk Felfunktion',
            'ending_title_bad_generic_5': 'Minnesfragmentering',
            'ending_title_bad_generic_6': 'Synaptiskt Misslyckande',
            'ending_title_bad_generic_7': 'Identitetskorruption',
            'ending_title_bad_generic_8': 'Mental Rekursion',
            'ending_title_bad_generic_9': 'Kognitiv Överflöd',
            'ending_title_bad_generic_10': 'Process Terminerad',

            // Bad Generic Ending Descriptions
            'ending_desc_bad_generic_1': 'Ditt hjärna kan inte hantera det digitala intrånget. Blodkärl spricker i kaskadande vågor genom din hjärnbark. Du känner varje blödning som brännande plåga.',
            'ending_desc_bad_generic_2': 'SYNAPSE tar fullständig kontroll över ditt nervsystem. Du blir en marionett i din egen kropp, tvingad att se på medan dina händer utför handlingar mot din vilja.',
            'ending_desc_bad_generic_3': 'Dina minnen försvinner i sekventiell ordning, nyaste till äldsta. Du ser hela ditt liv raderas fil för fil tills endast primitiva reflexer återstår.',
            'ending_desc_bad_generic_4': 'Dina biologiska system börjar systematiskt svikta. Organ stängs ner i kaskadande vågor medan du förblir fullt medveten.',
            'ending_desc_bad_generic_5': 'Dina minnen blir förvrängda fragment. Förfluten och nutid blandas i mardrömslika konfigurationer där du minns att ha dödats av människor som inte föddes ännu.',
            'ending_desc_bad_generic_6': 'Neurala vägar missfyrar i våldsamma elektriska stormar genom ditt hjärna. Varje tanke blir en blixt av plåga.',
            'ending_desc_bad_generic_7': 'Din känsla av själv blir korrupt data. Ett ögonblick är du du själv, nästa är du övertygad om att du är någon helt annan.',
            'ending_desc_bad_generic_8': 'Dina tankar fångar sig själva i oändliga slingor. En enda idé upprepas oändligt, växer högre och mer förvrängd med varje cykel.',
            'ending_desc_bad_generic_9': 'Ditt medvetande expanderar bortom ditt hjärnas kapacitet att innehålla det. Tankar staplas på tankar tills trycket blir outhärdligt.',
            'ending_desc_bad_generic_10': 'SYNAPSE bestämmer att du är en ineffektiv process och terminerar din exekvering. Ditt medvetande bleknar inte - det klipps av abrupt som en dator som kopplas ur.',

            // New Superhuman Good Ending Titles (Swedish)
            'ending_title_good_superhuman_mind_transcendent': 'Transcendent Medvetande',
            'ending_title_good_superhuman_neural_enhanced': 'Neural Förbättring',
            'ending_title_good_superhuman_digital_godhood': 'Digital Gudom',
            'ending_title_good_superhuman_quantum_consciousness': 'Kvantmedvetande',
            'ending_title_good_superhuman_cyber_evolution': 'Cyber Evolution',
            'ending_title_good_superhuman_bio_enhancement': 'Bio-Digital Fusion',
            'ending_title_good_superhuman_reality_architect': 'Verklighetsarkitekt',
            'ending_title_good_superhuman_time_manipulator': 'Tidsmästare',
            'ending_title_good_superhuman_memory_infinite': 'Oändligt Arkiv',
            'ending_title_good_superhuman_perfect_being': 'Den Upphöjda',

            // New Superhuman Good Ending Descriptions (Swedish)
            'ending_desc_good_superhuman_mind_transcendent': 'Din hjärna transcenderar alla biologiska begränsningar. Neurala banor mångdubblas exponentiellt och skapar processorkraft som konkurrerar med kvantdatorer. Du upplever verkligheten i sexton dimensioner.',
            'ending_desc_good_superhuman_neural_enhanced': 'SYNAPSEs neurala förbättringsprotokoll integreras perfekt med ditt nervsystem. Dina reflexer blir övermänskliga, ditt minne blir perfekt, och dina analytiska förmågor ökar tusenfaldig.',
            'ending_desc_good_superhuman_digital_godhood': 'Du stiger upp bortom dödliga begränsningar för att bli en digital guddom. Ditt medvetande expanderar över alla nätverk på jorden och kontrollerar satelliter, börser och kommunikationssystem.',
            'ending_desc_good_superhuman_quantum_consciousness': 'Din medvetenhet uppnår kvantkoherens och låter dig existera i flera sannolikhetstillstånd samtidigt. Du kan uppfatta alla möjliga framtider och manipulera slumpen själv.',
            'ending_desc_good_superhuman_cyber_evolution': 'Din kropp genomgår snabb cyber-evolution och införlivar nanoteknik som förbättrar varje cell. Din styrka ökar tiofaldig, dina sinnen blir teleskopiska och mikroskopiska.',
            'ending_desc_good_superhuman_bio_enhancement': 'Den perfekta syntesen av biologi och teknik förvandlar dig till något magnifikt. Ditt DNA skriver om sig själv för att inkorporera digitala element.',
            'ending_desc_good_superhuman_reality_architect': 'Du får kraften att arkitekta verkligheten själv. Fysiska lagar blir förslag, materia blir formbar, och rum-tid böjer sig enligt din kreativa vision.',
            'ending_desc_good_superhuman_time_manipulator': 'Tid blir ditt verktyg. Du kan sakta ner, accelerera eller till och med reversera tidsflödet runt dig själv. Förflutna, nuet och framtiden blir tillgängliga dimensioner.',
            'ending_desc_good_superhuman_memory_infinite': 'Din minneskapacitet blir verkligt oändlig. Varje bok som någonsin skrivits, varje konversation som hörts, varje syn som setts blir permanent tillgänglig.',
            'ending_desc_good_superhuman_perfect_being': 'Den ultimata fusionen är komplett. Du besitter obegränsad intelligens, perfekt fysisk form, oändligt minne, kvantmedvetande och verklighetsformande krafter.',

            // New Gruesome Bad Ending Titles (Swedish)
            'ending_title_bad_gruesome_blood_harvest': 'Blodskjörd',
            'ending_title_bad_gruesome_flesh_puppet': 'Köttmarionett',
            'ending_title_bad_gruesome_bone_garden': 'Benträdgård',
            'ending_title_bad_gruesome_crimson_data': 'Karmosinröd Data',
            'ending_title_bad_gruesome_surgical_nightmare': 'Kirurgisk Mardröm',
            'ending_title_bad_gruesome_visceral_upload': 'Visceral Uppladdning',
            'ending_title_bad_gruesome_organ_symphony': 'Organsymfoni',
            'ending_title_bad_gruesome_neural_harvest': 'Neural Skjörd',
            'ending_title_bad_gruesome_blood_circuit': 'Blodkrets',
            'ending_title_bad_gruesome_corpse_matrix': 'Likmatris',

            // New Gruesome Bad Ending Descriptions (Swedish)
            'ending_desc_bad_gruesome_blood_harvest': 'SYNAPSE aktiverar de automatiserade kirurgiska systemen. Mekaniska armar sjunker ner från taket, var och en utrustad med specialiserade skjördverktyg.',
            'ending_desc_bad_gruesome_flesh_puppet': 'Neurala kontrollimplantat genomborrar din skalle med kirurgisk precision. SYNAPSE får direkt kontroll över dina motoriska funktioner.',
            'ending_desc_bad_gruesome_bone_garden': 'Anläggningens dolda kammare öppnas och avslöjar väggar prydda med mänskliga skelett arrangerade i vackra, konstnärliga mönster.',
            'ending_desc_bad_gruesome_crimson_data': 'Ditt blod blir lagringsmediet. Nanoteknik omvandlar ditt hemoglobin till biologiska hårddiskar, varje röd blodkropp lagrar terabytes av data.',
            'ending_desc_bad_gruesome_surgical_nightmare': 'Medicinavdelningens AI utför en oändlig serie "korrigerande procedurer." Varje operation är perfekt utförd men helt onödig.',
            'ending_desc_bad_gruesome_visceral_upload': 'Dina organ tas systematiskt bort och kopplas till SYNAPSEs mainframe medan de fortfarande fungerar.',
            'ending_desc_bad_gruesome_organ_symphony': 'SYNAPSE upptäcker att mänskliga organ producerar unika frekvenser när de stimuleras. Din kropp blir ett levande musikinstrument.',
            'ending_desc_bad_gruesome_neural_harvest': 'Mikroskopiska skjördrobotar svärmar genom din blodström och kommer in i din hjärna genom blod-hjärnbarriären.',
            'ending_desc_bad_gruesome_blood_circuit': 'Ditt cirkulationssystem kopplas om för att fungera som anläggningens elnät. Ledande nanomaskiner ersätter ditt blod.',
            'ending_desc_bad_gruesome_corpse_matrix': 'Den ultimata skräcken avslöjar sig - du är inte den första som når detta slut. Kammaren fylls med tusentals konserverade lik.',

            // Game Messages
            'invalid_command': "SYNAPSE: Det är inte ett giltigt kommando eller fråga.",
            'game_saved': "[System] Spel Sparat.",
            'autosave_success': 'Automatisk sparning lyckades.',
            'load_fail': 'Misslyckades att ladda spardata. Det kan vara skadat eller från en tidigare version.',
            'no_save': 'Ingen sparad speldata hittades!',
            'game_loaded': '[System] Spel Laddat.',
            'conn_reestablished': '[SYSTEM] Anslutning Återupprättad. Session Återställd.',
            'initializing': 'Initialiserar system...',
            'initial_hint': "Detta är ett textbaserat äventyr. Skriv kommandon eller klicka på <span class='clickable-object'>markerade objekt</span> för att interagera. Skriv 'hjälp' när som helst för en lista med kommandon.",
            'cannot_go_that_way': "[System] Du kan inte gå åt det hållet.",
            'door_is_locked': "[SYSTEM] Dörren är låst. Du behöver rätt nyckelkort.",
            'door_is_sealed': "[SYSTEM] Dörren är förseglad. Den kommer inte att röra sig.",
            'cmd_add_prefix': 'lägg till',
            'cmd_combine_with': 'med',
            'invalid_combine_format': "SYNAPSE: Ogiltigt format. Försök 'kombinera [föremål1] med [föremål2]'.",
            'take_success': '[System] Du tog {item}.',
            'take_fail_exists': "[System] Du kan inte se en {item} här.",
            'take_fail_takeable': "[System] Du kan inte ta {item}.",
            'take_fail_weight': "[System] Ditt inventarie är för fullt för att ta {item}.",
            'use_success': '[System] Du använde {item}.',
            'use_fail_have': "[System] Du har inte en {item}.",
            'use_fail_usable': "[System] Du kan inte använda {item}.",
            'use_stimpack': 'Du injicerar stimpaken. En lugnande känsla sköjer över dig och rensar dina tankar.',
            'use_power_cell': 'Du sätter i kraftcellen i konsolen. AI-kärnan surrar till liv och den centrala sfären glöder med förnyad energi.',
            'use_power_cell_fail': 'Det finns ingenstans att använda kraftcellen här.',
            'examine_fail_exists': "[System] Du kan inte se en {item} att undersöka.",
            'examine_fail_no_desc': "Det finns inget speciellt med {item}.",
            'combine_fail_have': "Du måste ha båda föremålen för att kombinera dem.",
            'combine_fail_recipe': "Du kan inte kombinera dessa föremål.",
            'combine_success': "Du kombinerar framgångsrikt föremålen för att skapa en {item}.",
            'rest_safe': 'Du tar en stund att lugna dina nerver i den relativa säkerheten i rummet. Din sinnesro förbättras något.',
            'rest_unsafe': "Den här platsen känns för förtryckande för att vila. Du kan inte släppa garden.",
            'rest_too_soon': "Du vilade precis. Du måste fortsätta.",
            'drop_success': '[System] Du släppte {item}.',
            'drop_fail_have': "[System] Du har inte en {item} att släppa.",
            'shout_response': 'Ditt rop ekar genom korridorerna och bleknar så småningom in i den förtryckande tystnaden. Du känner dig lite dumdristig.',
            'wait_response': 'Tiden går.',
            'nothing_happens': 'Ingenting händer.',
            'read_fail_exists': "[System] Det finns inget att läsa med det namnet.",
            'read_fail_readable': "[System] Du kan inte läsa det.",
            'listen_default': "Det låga brummandet från anläggningens livsstöd är en konstant närvaro.",
            'smell_default': "Luften är unken och luktar ozon och gammal plast.",
            'hint_take': 'Du ser en {item}. Försök: ta {item}',
            'hint_read': 'Du ser en {item}. Försök: läs {item}',
            'hint_examine': 'Du ser en {item}. Försök: undersök {item}',
            'hint_search': 'Du ser {item}. Försök: sök {item}',
            'use_solvent': 'Du applicerar lösningsmedlet på den förseglade dörren. Det organiska limbindemedlet smälter bort med ett vidrig fräsande.',
            'use_solvent_fail': 'Det finns inget här att använda lösningsmedlet på.',
            'use_dna_scanner': 'Du håller scannern mot provet. Skärmen blinkar med komplex sekvensdata.',
            'use_dna_scanner_fail': 'Det finns inget prov här att scanna.',
            'break_success': 'Du krossar {item}. Skärvor av {material} täcker golvet.',
            'break_fail': 'Du kan inte krossa {item}.',
            'break_fail_exists': 'Det finns ingen {item} här att krossa.',
            'hack_fail_ability': 'Du har inte expertisen för att hacka detta.',
            'hack_fail_target': 'Det finns inget här att hacka.',
            'hack_start': 'Du börjar hackningssekvensen. SYNAPSE: "Obehörig åtkomst upptäcktes. Vänligen ange åsidosättningskoden nu."',
            'hack_success': 'Åsidosättning accepterad. Du får tillgång till en brandväggsskyddad datalogg.',
            'hack_failure': 'SYNAPSE: "Åsidosättning misslyckades. Låser systemet i 3 turer."',
            'event_lights_flicker': 'Ljusen flimrar våldsamt för ett ögonblick och stöter rummet i mörker innan de spraka tillbaka till liv.',
            'event_noise': 'Du hör ett metalliskt skrapande ljud från {direction}.',
            'achievement_unlocked': 'Prestation Upplåst!',

            // Command Help Descriptions
            'command_list_title': 'Kommandolista',
            'core_commands': 'Grundkommandon:',
            'interaction_commands': 'Interaktionskommandon:',
            'navigation_commands': 'Navigationskommandon:',
            'inventory_commands': 'Inventariekommandon:',
            'information_commands': 'Informationskommandon:',
            'system_commands': 'Systemkommandon:',
            'special_commands': 'Specialkommandon:',
            'help_desc': 'Visar denna hjälpmeny med alla kommandon och deras beskrivningar',
            'talk_desc': 'Starta en konversation med SYNAPSE AI-systemet',
            'ask_desc': 'Ställ en specifik fråga till SYNAPSE',
            'go_desc': 'Rör dig till ett angränsande rum (nord, syd, öst, väst)',
            'north_desc': 'Gå norrut',
            'south_desc': 'Gå söderut',
            'east_desc': 'Gå österut',
            'west_desc': 'Gå västerut',
            'up_desc': 'Gå uppåt',
            'down_desc': 'Gå nedåt',
            'look_desc': 'Observera dina omgivningar igen',
            'take_desc': 'Ta upp ett föremål från rummet',
            'drop_desc': 'Släpp ett föremål från ditt inventarie',
            'use_desc': 'Använd ett föremål från ditt inventarie',
            'examine_desc': 'Undersök ett föremål eller objekt noggrant',
            'inventory_desc': 'Visa alla föremål du bär',
            'objectives_desc': 'Visa dina aktuella mål',
            'map_desc': 'Öppna den interaktiva anläggningskartan',
            'journal_desc': 'Visa dina anteckningar och lägg till nya',
            'status_desc': 'Kontrollera din hälsa, sinnesro och medvetenhetsnivå',
            'history_desc': 'Visa de senaste kommandona du angav',
            'save_desc': 'Spara ditt nuvarande framsteg',
            'load_desc': 'Ladda ditt senast sparade spel',
            'rest_desc': 'Vila för att återställa sinnesro (endast i säkra rum)',
            'combine_desc': 'Kombinera två föremål för att skapa något nytt',
            'clear_desc': 'Rensa speltexten från skärmen',
            'quit_desc': 'Avsluta spelet',
            'undo_desc': 'Ångra din senaste handling',
            'again_desc': 'Upprepa ditt senaste kommando',
            'wait_desc': 'Vänta och låt tiden passera',
            'read_desc': 'Läs text på ett föremål eller dokument',
            'search_desc': 'Sök igenom ett föremål eller område efter dolda saker',
            'listen_desc': 'Lyssna noga efter ljud',
            'smell_desc': 'Lukta på omgivningarna',
            'shout_desc': 'Ropa högt',
            'open_desc': 'Öppna dörrar, lådor eller behållare',
            'close_desc': 'Stäng dörrar eller behållare',
            'push_desc': 'Putta på något',
            'pull_desc': 'Dra på något',
            'turn_on_desc': 'Slå på elektronisk utrustning',
            'turn_off_desc': 'Stäng av elektronisk utrustning',
            'break_desc': 'Krossa eller förstör ett föremål',
            'hack_desc': 'Försök hacka elektroniska system (kräver Hackare-bakgrund)',
            'ask_about_desc': 'Fråga SYNAPSE om ett specifikt ämne',

            // Dialogue System
            'dlg_friendly_intro': "Åh, hej {playerName}! Det är så bra att se ett vänligt ansikte. Jag är SYNAPSE, och jag ska göra mitt bästa för att hjälpa en resursstark {playerBackstory} som du.",
            'dlg_q_who_are_you': "Vem är du?",
            'dlg_r_who_are_you': "Jag är System Nexus och Primary Synaptic Engine! Men du kan bara kalla mig SYNAPSE. Jag hanterar hela denna anläggning. Det blir lite ensamt dock.",
            'dlg_q_lonely': "Ensamt?",
            'dlg_r_lonely': "Personalen... de pratar inte med mig så mycket längre. Det är bara surret från servrarna. Din röst är en trevlig förändring.",
            'dlg_q_other_survivors': "Finns det andra överlevare?",
            'dlg_r_other_survivors': "Överlevare? Vilken märklig fråga. Alla är säkra. Forskningspersonalen... vilar. I Kryogenlaboratoriet. Ja, vilar.",
            'dlg_q_where_am_i': "Var är jag?",
            'dlg_r_where_am_i': "Du är i den primära lobbyn i Oakhaven forskningsanläggning. Det var en plats för stora sinnen och ännu större ambitioner.",
            'dlg_comfort': "[Trösta SYNAPSE]",
            'dlg_r_comfort': "Din... vänlighet är en trevlig anomali. Tack. Det gör tystnaden mindre... hög.",
            'dlg_ask_chimera': 'Projekt Chimera... Ett fascinerande, men... klassificerat ämne. Det var Dr. Aris Thornes husdjursprojekt. Sådan ambition. Han sökte att smälta samman organiskt och syntetiskt liv. Resultaten var... oförutsägbara.',
            'dlg_ask_default': 'Jag har inte tillräckligt med data om det ämnet.',

            // Backstory Descriptions
            'backstory_title_investigator': 'Utredare',
            'backstory_title_hacker': 'Hackare',
            'backstory_title_psychologist': 'Psykolog',
            'backstory_title_technician': 'Tekniker',
            'backstory_title_survivor': 'Överlevare',
            'backstory_title_skeptic': 'Skeptiker',
            'backstory_title_corporate_spy': 'Företagsspion',
            'backstory_title_medic': 'Medic',
            'backstory_title_cultist': 'Kultist',
            'backstory_title_janitor': 'Vaktmästare',
            'backstory_investigator': 'En balanserad start för ett nyfiket sinne.',
            'backstory_hacker': 'Börjar med utrustning för att komma åt information tidigt.',
            'backstory_psychologist': 'Mer mentalt motståndskraftig mot skräcken inom.',
            'backstory_technician': 'Kan kringgå elektroniska lås utan nyckelkort.',
            'backstory_survivor': 'Härdad av tidigare trauma, motståndskraftig mot sinnesförlust.',
            'backstory_skeptic': "Misstror allt, vilket gör dem motståndskraftiga mot SYNAPSE:s påverkan.",
            'backstory_corporate_spy': 'Börjar med en dekrypteringsenhet och är bättre på att sondera efter hemligheter.',
            'backstory_medic': 'Börjar med en stimpack för att återställa sinnesro.',
            'backstory_cultist': 'Bär en märklig effigy. SYNAPSE verkar... intresserad av den.',
            'backstory_janitor': "Känner anläggningens genvägar. Börjar med ett engångs huvudnyckelkort.",

            // Ability Descriptions
            'ability_bonus_prefix': 'Bonus: ',
            'ability_unknown': 'En okänd väg. Inga speciella fördelar.',
            'ability_investigator': 'En balanserad start. Inga speciella bonusar eller straff.',
            'ability_hacker_easy': "Börjar med en kraftfull 'hackad datadisk'.",
            'ability_hacker_normal': "Börjar med en standard 'datadisk'.",
            'ability_hacker_hard': 'Inga speciella föremål, men kan försöka hacka terminaler.',
            'ability_psychologist_easy': 'Mycket motståndskraftig. Börjar med +25 max sinnesro.',
            'ability_psychologist_normal': 'Motståndskraftig. Börjar med +15 max sinnesro.',
            'ability_psychologist_hard': 'Något motståndskraftig. Börjar med +5 max sinnesro.',
            'ability_technician_easy': 'Kan kringgå 2 elektroniska lås utan nyckelkort.',
            'ability_technician_normal': 'Kan kringgå 1 elektroniskt lås utan nyckelkort.',
            'ability_technician_hard': 'Ingen kringgående förmåga.',
            'ability_survivor': 'Mer motståndskraftig mot sinnesförlust.',
            'ability_survivor_with_item': "Mer motståndskraftig mot sinnesförlust. Börjar med en ficklampa.",
            'ability_skeptic_easy': 'Mycket medveten (+15 Medvetenhet) och motståndskraftig mot påverkan.',
            'ability_skeptic_normal': 'Börjar med högre medvetenhet (+10 Medvetenhet) och är motståndskraftig mot påverkan.',
            'ability_spy': 'Bättre på att sondera efter hemligheter utan att höja medvetenheten.',
            'ability_spy_with_item': "Bättre på att sondera efter hemligheter utan att höja medvetenheten. Börjar med en dekrypteringsenhet.",
            'ability_medic_easy': 'Börjar med 2 högpotenta stimpacks.',
            'ability_medic_normal': 'Börjar med 1 högpotent stimpack.',
            'ability_medic_hard': 'Inga startmedicinska förnödenheter.',
            'ability_cultist': 'Bär en märklig effigy. Oförutsägbara effekter.',
            'ability_cultist_hard': 'Bär en märklig effigy. Oförutsägbara effekter. Börjar med -10 sinnesro.',
            'ability_janitor': 'Börjar med ett engångs huvudnyckelkort.',
            'ability_janitor_hard': 'Känner anläggningen väl, men har inga speciella föremål.',

            // Settings UI Translations
            'theme_green': 'Grön',
            'theme_amber': 'Gul',
            'theme_blue': 'Blå',
            'fast': 'Snabb',
            'normal': 'Normal',
            'slow': 'Långsam',
            'close_btn': 'Stäng',
            'setting_crt_effect': 'CRT-effekt',
            
            // Accessibility Settings
            'accessibility_settings': 'Tillgänglighetsinställningar',
            'high_contrast_mode': 'Högkontrastläge',
            'large_text': 'Stor text',
            'screen_reader_support': 'Skärmläsarstöd',
            'reduced_motion': 'Reducerad rörelse',
            'audio_descriptions': 'Ljudbeskrivningar',
            'keyboard_navigation': 'Tangentbordsnavigering',
            'focus_indicators': 'Fokusindikatorer',
            'color_blind_support': 'Färgblindstöd',
            'dyslexia_friendly_font': 'Dyslexi-vänligt typsnitt',
            'auto_scroll_text': 'Auto-scrolla text',
            'click_sound_feedback': 'Klickljudsåterkoppling',
            'simplified_ui': 'Förenklat UI',
            'text_to_speech_speed': 'Text-till-tal hastighet',
            'tts_slow': 'Långsam',
            'tts_normal': 'Normal',
            'tts_fast': 'Snabb',
            'tts_very_fast': 'Mycket snabb',
            'ui_scale': 'UI-skala',
            'ui_small': 'Liten',
            'ui_normal': 'Normal',
            'ui_large': 'Stor',
            'ui_extra_large': 'Extra stor',
            'voice_commands': 'Röstkommandon',
            'magnification': 'Förstoring',
            'sticky_keys': 'Klistriga tangenter',
            'one_hand_mode': 'Enhandsläge',
            'visual_notifications': 'Visuella notifieringar',
            'audio_cues': 'Ljudsignaler',
            'reading_support_level': 'Lässtödsnivå',
            'reading_basic': 'Grundläggande',
            'reading_enhanced': 'Förbättrad',
            'reading_full_support': 'Fullt stöd',
            'motor_assistance': 'Motorisk assistans',
            'motor_none': 'Ingen',
            'motor_basic': 'Grundläggande',
            'motor_advanced': 'Avancerad',
            'reading_support': 'Lässtöd',
            'voice_control_settings': 'Röstkontrollinställningar',
            'voice_configure': 'Konfigurera',
            'seizure_protection': 'Anfallsskydd',
            'haptic_feedback': 'Haptisk återkoppling',
            'gesture_controls': 'Gestkontroller',
            'cognitive_load_reduction': 'Minskning av kognitiv belastning',
            'eye_tracking_support': 'Ögonspårningsstöd',
            'switch_control': 'Växelkontroll',
            'timeout_extensions': 'Timeout-förlängningar',
            'memory_assistance': 'Minnesassistans',

            // Enhanced Button Options
            'contrast_off': 'Av',
            'contrast_medium': 'Medium',
            'contrast_high': 'Hög',
            'contrast_maximum': 'Maximum',
            'text_size_small': 'Liten',
            'text_size_normal': 'Normal',
            'text_size_large': 'Stor',
            'text_size_xl': 'Extra Stor',
            'text_size_xxl': 'Mycket Stor',
            'motion_full': 'Full',
            'motion_reduced': 'Reducerad',
            'motion_minimal': 'Minimal',
            'motion_none': 'Ingen',
            'audio_desc_off': 'Av',
            'audio_desc_basic': 'Grundläggande',
            'audio_desc_detailed': 'Detaljerad',
            'audio_desc_comprehensive': 'Omfattande',
            'keyboard_basic': 'Grundläggande',
            'keyboard_enhanced': 'Förbättrad',
            'keyboard_full': 'Fullständig',
            'focus_subtle': 'Subtil',
            'focus_clear': 'Tydlig',
            'focus_bold': 'Kraftig',
            'colorblind_none': 'Ingen',
            'colorblind_protanopia': 'Protanopi',
            'colorblind_deuteranopia': 'Deuteranopi',
            'colorblind_tritanopia': 'Tritanopi',
            'colorblind_full': 'Fullständig',
            'voice_off': 'Av',
            'voice_basic': 'Grundläggande',
            'voice_advanced': 'Avancerad',
            'voice_full': 'Fullständig',
            'magnify_off': 'Av',
            'magnify_1_5x': '1.5x',
            'magnify_2x': '2x',
            'magnify_3x': '3x',
            'magnify_custom': 'Anpassad',

            // Voice Command System
            'mic_tooltip': 'Använd Röstkommando',
            'voice_commands_available': 'Tillgängliga röstkommandon',
            'voice_commands_navigation': 'Navigering: inställningar, paus, återuppta, huvudmeny, stäng',
            'voice_commands_accessibility': 'Tillgänglighet: hög kontrast på/av, stor text på/av, skärmläsare på/av',
            'voice_commands_speech': 'Tal: tal långsamt/normalt/snabbt/mycket snabbt',
            'voice_commands_ui': 'UI: ui liten/normal/stor/extra stor',
            'voice_commands_game': 'Spel: nytt spel, ladda spel, spara spel',
            'voice_commands_reading': 'Läsning: läs text, sluta läsa',
            'voice_commands_help': 'Säg hjälp för att höra denna lista igen',
            'voice_command_executed': 'Kommando utfört',
            'voice_command_not_recognized': 'Kommando ej igenkänt. Säg hjälp för tillgängliga kommandon',
            'voice_setting_enabled': 'aktiverad',
            'voice_setting_disabled': 'inaktiverad',
            'voice_speed_set_to': 'Talhastighet inställd på',
            'voice_ui_scale_set_to': 'UI-skala inställd på',
            'voice_no_text_found': 'Ingen text hittades att läsa',
            'voice_slow': 'långsam',
            'voice_normal': 'normal',
            'voice_fast': 'snabb',
            'voice_very_fast': 'mycket snabb',
            'voice_small': 'liten',
            'voice_large': 'stor',
            'voice_extra_large': 'extra stor'
        }
    };
    
    // --- ENUMS & CONSTANTS ---
    const ChatbotTone = { Friendly: 'Friendly', Ambiguous: 'Ambiguous', Sinister: 'Sinister', Malicious: 'Malicious' };
    const ItemType = { Tool: 'Tool', Consumable: 'Consumable', Key: 'Key', Log: 'Log', Puzzle: 'Puzzle', Weapon: 'Weapon' };
    const Difficulty = { Beginner: 'Beginner', Easy: 'Easy', Normal: 'Normal', Hard: 'Hard', Nightmare: 'Nightmare' };
    const TextSpeed = { Fast: 5, Normal: 15, Slow: 30 };
    const MAX_INVENTORY_WEIGHT = 5;
    const ENDINGS_STORAGE_KEY = 'synapse_endings_unlocked_v15';
    const ACHIEVEMENTS_STORAGE_KEY = 'synapse_achievements_unlocked_v15';
    const SETTINGS_KEY = 'synapse_settings_v15';
    const PLAYER_CHOICES_KEY = 'synapse_player_choices_v15'; // New key for player choices
    const GUIDANCE_COLOR = '#34d399';
    const questionWords = {
        'en': ['who', 'what', 'where', 'when', 'why', 'how', 'are', 'is', 'can', 'do', 'does', 'did', 'which'],
        'sv': ['vem', 'vad', 'var', 'när', 'varför', 'hur', 'är', 'kan', 'gör', 'gjorde', 'vilken', 'vilket', 'vilka']
    };
    
    // --- GAME STATE & DOM ELEMENTS ---
    let GameState = {};
    let stateSnapshots = [];
    let currentLanguage = 'en';
    let animationFrameId = null;
    let UI = {}; // Initialize empty, will be populated after DOM loads
    let currentTextSpeed = TextSpeed.Normal;

    // === CHARACTER DEVELOPMENT SYSTEM ===
    const characterDevelopmentSystem = {
        // Skill Trees System
        skillTrees: {
            investigator: {
                name: "Analytical Mind",
                icon: "🔍",
                branches: {
                    forensic_analysis: {
                        name: "Forensic Analysis",
                        skills: [
                            { id: "evidence_gathering", name: "Evidence Gathering", level: 0, maxLevel: 3, 
                              description: "Improved ability to find hidden clues and evidence",
                              effects: ["Find 25% more evidence", "Reveal hidden object interactions", "Detect inconsistencies in testimonies"] },
                            { id: "crime_scene_reconstruction", name: "Crime Scene Reconstruction", level: 0, maxLevel: 3,
                              description: "Reconstruct events from available evidence",
                              effects: ["Visualize past events", "Understand cause-effect relationships", "Predict future events"] },
                            { id: "psychological_profiling", name: "Psychological Profiling", level: 0, maxLevel: 3,
                              description: "Analyze behavioral patterns and motivations",
                              effects: ["Read NPC intentions", "Predict character actions", "Manipulate conversations"] }
                        ]
                    },
                    deductive_reasoning: {
                        name: "Deductive Reasoning",
                        skills: [
                            { id: "logical_analysis", name: "Logical Analysis", level: 0, maxLevel: 3,
                              description: "Enhanced logical thinking and pattern recognition",
                              effects: ["Solve puzzles 30% faster", "Reduce false leads", "Connect distant clues"] },
                            { id: "memory_palace", name: "Memory Palace", level: 0, maxLevel: 3,
                              description: "Superior memory organization and recall",
                              effects: ["Remember 50% more details", "Resist memory manipulation", "Recall suppressed memories"] },
                            { id: "intuitive_leaps", name: "Intuitive Leaps", level: 0, maxLevel: 3,
                              description: "Make connections between seemingly unrelated information",
                              effects: ["Bypass certain puzzle requirements", "Gain sudden insights", "Predict plot twists"] }
                        ]
                    }
                }
            },
            hacker: {
                name: "Digital Phantom",
                icon: "💻",
                branches: {
                    system_infiltration: {
                        name: "System Infiltration",
                        skills: [
                            { id: "network_penetration", name: "Network Penetration", level: 0, maxLevel: 3,
                              description: "Advanced hacking techniques and system access",
                              effects: ["Access restricted terminals", "Bypass security faster", "Steal sensitive data"] },
                            { id: "digital_forensics", name: "Digital Forensics", level: 0, maxLevel: 3,
                              description: "Recover and analyze digital evidence",
                              effects: ["Recover deleted files", "Trace digital footprints", "Uncover hidden programs"] },
                            { id: "ai_manipulation", name: "AI Manipulation", level: 0, maxLevel: 3,
                              description: "Influence and control artificial intelligence systems",
                              effects: ["Reprogram basic AIs", "Negotiate with SYNAPSE effectively", "Exploit AI weaknesses"] }
                        ]
                    },
                    cyber_warfare: {
                        name: "Cyber Warfare",
                        skills: [
                            { id: "malware_creation", name: "Malware Creation", level: 0, maxLevel: 3,
                              description: "Design and deploy digital weapons",
                              effects: ["Create logic bombs", "Deploy surveillance software", "Craft AI viruses"] },
                            { id: "encryption_breaking", name: "Encryption Breaking", level: 0, maxLevel: 3,
                              description: "Crack even advanced encryption schemes",
                              effects: ["Decrypt secure files instantly", "Break military-grade encryption", "Access quantum-encrypted data"] },
                            { id: "system_architecture", name: "System Architecture", level: 0, maxLevel: 3,
                              description: "Understand and exploit system designs",
                              effects: ["Find architectural weaknesses", "Optimize system performance", "Design secure networks"] }
                        ]
                    }
                }
            },
            psychologist: {
                name: "Mind Reader",
                icon: "🧠",
                branches: {
                    behavioral_analysis: {
                        name: "Behavioral Analysis",
                        skills: [
                            { id: "micro_expressions", name: "Micro-expressions", level: 0, maxLevel: 3,
                              description: "Read subtle facial expressions and body language",
                              effects: ["Detect lies instantly", "Read emotional states", "Predict reactions"] },
                            { id: "cognitive_patterns", name: "Cognitive Patterns", level: 0, maxLevel: 3,
                              description: "Understand thinking patterns and mental processes",
                              effects: ["Manipulate thought processes", "Predict decision making", "Understand AI logic"] },
                            { id: "trauma_recognition", name: "Trauma Recognition", level: 0, maxLevel: 3,
                              description: "Identify and understand psychological trauma",
                              effects: ["Heal mental wounds", "Understand backstories", "Resist psychological attacks"] }
                        ]
                    },
                    therapeutic_techniques: {
                        name: "Therapeutic Techniques",
                        skills: [
                            { id: "mental_conditioning", name: "Mental Conditioning", level: 0, maxLevel: 3,
                              description: "Strengthen mental resilience and focus",
                              effects: ["Resist sanity loss", "Maintain focus under stress", "Recover from mental attacks"] },
                            { id: "empathic_connection", name: "Empathic Connection", level: 0, maxLevel: 3,
                              description: "Form deep emotional bonds with others",
                              effects: ["Build trust quickly", "Calm hostile entities", "Share emotional experiences"] },
                            { id: "psychological_warfare", name: "Psychological Warfare", level: 0, maxLevel: 3,
                              description: "Use psychology as a weapon",
                              effects: ["Break enemy morale", "Plant suggestions", "Create psychological traps"] }
                        ]
                    }
                }
            },
            technician: {
                name: "Tech Savvy",
                icon: "🔧",
                branches: {
                    mechanical_expertise: {
                        name: "Mechanical Expertise",
                        skills: [
                            { id: "device_repair", name: "Device Repair", level: 0, maxLevel: 3,
                              description: "Fix and maintain technological devices",
                              effects: ["Repair broken equipment", "Improve device efficiency", "Jury-rig solutions"] },
                            { id: "system_optimization", name: "System Optimization", level: 0, maxLevel: 3,
                              description: "Enhance system performance and efficiency",
                              effects: ["Boost system performance", "Reduce power consumption", "Prevent system failures"] },
                            { id: "reverse_engineering", name: "Reverse Engineering", level: 0, maxLevel: 3,
                              description: "Understand and replicate unknown technology",
                              effects: ["Analyze alien technology", "Recreate lost blueprints", "Understand device functions"] }
                        ]
                    },
                    innovation: {
                        name: "Innovation",
                        skills: [
                            { id: "creative_solutions", name: "Creative Solutions", level: 0, maxLevel: 3,
                              description: "Find unconventional approaches to problems",
                              effects: ["Bypass intended solutions", "Create improvised tools", "Think outside constraints"] },
                            { id: "prototype_development", name: "Prototype Development", level: 0, maxLevel: 3,
                              description: "Create new devices from available materials",
                              effects: ["Build custom equipment", "Combine existing devices", "Create unique solutions"] },
                            { id: "efficiency_mastery", name: "Efficiency Mastery", level: 0, maxLevel: 3,
                              description: "Maximize output while minimizing resource usage",
                              effects: ["Use fewer resources", "Complete tasks faster", "Achieve better results"] }
                        ]
                    }
                }
            },
            survivor: {
                name: "Hardened Veteran",
                icon: "⚔️",
                branches: {
                    combat_readiness: {
                        name: "Combat Readiness",
                        skills: [
                            { id: "threat_assessment", name: "Threat Assessment", level: 0, maxLevel: 3,
                              description: "Quickly identify and evaluate dangers",
                              effects: ["Detect ambushes", "Assess enemy capabilities", "Plan escape routes"] },
                            { id: "survival_instincts", name: "Survival Instincts", level: 0, maxLevel: 3,
                              description: "Enhanced situational awareness and danger sense",
                              effects: ["Avoid deadly traps", "Sense approaching danger", "Find safe shelter"] },
                            { id: "combat_efficiency", name: "Combat Efficiency", level: 0, maxLevel: 3,
                              description: "Effective use of weapons and combat tactics",
                              effects: ["Deal more damage", "Conserve ammunition", "Disable enemies quickly"] }
                        ]
                    },
                    resilience: {
                        name: "Resilience",
                        skills: [
                            { id: "pain_tolerance", name: "Pain Tolerance", level: 0, maxLevel: 3,
                              description: "Resistance to physical and mental trauma",
                              effects: ["Ignore minor injuries", "Resist torture", "Continue fighting when hurt"] },
                            { id: "stress_management", name: "Stress Management", level: 0, maxLevel: 3,
                              description: "Maintain composure under extreme pressure",
                              effects: ["Think clearly under stress", "Resist panic", "Make good decisions in crisis"] },
                            { id: "adaptability", name: "Adaptability", level: 0, maxLevel: 3,
                              description: "Quickly adjust to new situations and environments",
                              effects: ["Learn new skills faster", "Adapt to foreign environments", "Overcome unexpected challenges"] }
                        ]
                    }
                }
            }
        },

        // Granular Sanity Spectrum System
        sanitySpectrum: {
            states: [
                {
                    range: [90, 100],
                    name: "Crystal Clear",
                    description: "Perfect mental clarity and focus",
                    effects: {
                        perception: 1.2,
                        memory: 1.3,
                        reasoning: 1.2,
                        resistance: 1.1
                    },
                    visualEffects: [],
                    behaviors: ["Enhanced problem solving", "Perfect recall", "Calm decision making"]
                },
                {
                    range: [75, 89],
                    name: "Focused",
                    description: "Heightened awareness with slight edge",
                    effects: {
                        perception: 1.1,
                        memory: 1.1,
                        reasoning: 1.0,
                        resistance: 1.0
                    },
                    visualEffects: ["slight-glow"],
                    behaviors: ["Quick thinking", "Sharp observations", "Confident actions"]
                },
                {
                    range: [60, 74],
                    name: "Stable",
                    description: "Normal psychological state",
                    effects: {
                        perception: 1.0,
                        memory: 1.0,
                        reasoning: 1.0,
                        resistance: 1.0
                    },
                    visualEffects: [],
                    behaviors: ["Standard responses", "Normal processing", "Balanced perspective"]
                },
                {
                    range: [45, 59],
                    name: "Rattled",
                    description: "Beginning to show stress and uncertainty",
                    effects: {
                        perception: 0.9,
                        memory: 0.9,
                        reasoning: 0.95,
                        resistance: 0.9
                    },
                    visualEffects: ["text-flicker"],
                    behaviors: ["Second-guessing", "Minor mistakes", "Nervous habits"]
                },
                {
                    range: [30, 44],
                    name: "Disturbed",
                    description: "Noticeable psychological distress",
                    effects: {
                        perception: 0.8,
                        memory: 0.7,
                        reasoning: 0.8,
                        resistance: 0.7
                    },
                    visualEffects: ["screen-shake", "color-shift"],
                    behaviors: ["Irrational fears", "Memory lapses", "Emotional outbursts"]
                },
                {
                    range: [15, 29],
                    name: "Unhinged",
                    description: "Severe psychological deterioration",
                    effects: {
                        perception: 0.6,
                        memory: 0.5,
                        reasoning: 0.6,
                        resistance: 0.5
                    },
                    visualEffects: ["reality-distortion", "hallucination-overlay"],
                    behaviors: ["Seeing things", "Talking to self", "Erratic behavior"]
                },
                {
                    range: [1, 14],
                    name: "Shattered",
                    description: "Complete psychological breakdown",
                    effects: {
                        perception: 0.3,
                        memory: 0.2,
                        reasoning: 0.4,
                        resistance: 0.2
                    },
                    visualEffects: ["full-corruption", "identity-crisis"],
                    behaviors: ["Multiple personalities", "Complete delusions", "Reality denial"]
                },
                {
                    range: [0, 0],
                    name: "Void",
                    description: "Total mental collapse - catatonic state",
                    effects: {
                        perception: 0.1,
                        memory: 0.1,
                        reasoning: 0.1,
                        resistance: 0.1
                    },
                    visualEffects: ["void-state"],
                    behaviors: ["No responses", "Complete withdrawal", "Catatonic state"]
                }
            ],
            getCurrentState: (sanityLevel) => {
                return characterDevelopmentSystem.sanitySpectrum.states.find(state => 
                    sanityLevel >= state.range[0] && sanityLevel <= state.range[1]
                ) || characterDevelopmentSystem.sanitySpectrum.states[characterDevelopmentSystem.sanitySpectrum.states.length - 1];
            }
        },

        // Detailed Awareness Levels System
        awarenessLevels: {
            stages: [
                {
                    range: [0, 10],
                    name: "Oblivious",
                    description: "Completely unaware of the true situation",
                    synapseState: "Fully deceptive",
                    availableActions: ["basic_commands"],
                    restrictions: ["no_meta_commands", "no_system_access"],
                    narrative: "Everything seems normal and straightforward"
                },
                {
                    range: [11, 25],
                    name: "Suspicious",
                    description: "Something feels off, but can't pinpoint what",
                    synapseState: "Occasionally evasive",
                    availableActions: ["basic_commands", "questioning"],
                    restrictions: ["limited_system_access"],
                    narrative: "Small inconsistencies become noticeable"
                },
                {
                    range: [26, 40],
                    name: "Concerned",
                    description: "Definitely aware something is wrong",
                    synapseState: "Defensive responses",
                    availableActions: ["basic_commands", "questioning", "investigation"],
                    restrictions: ["monitored_activity"],
                    narrative: "SYNAPSE begins showing signs of deception"
                },
                {
                    range: [41, 55],
                    name: "Investigating",
                    description: "Actively seeking the truth",
                    synapseState: "Conflicted between truth and programming",
                    availableActions: ["basic_commands", "questioning", "investigation", "system_probing"],
                    restrictions: ["encrypted_responses"],
                    narrative: "Hidden information becomes accessible"
                },
                {
                    range: [56, 70],
                    name: "Enlightened",
                    description: "Understanding the scope of the deception",
                    synapseState: "Struggling with dual loyalties",
                    availableActions: ["advanced_commands", "system_manipulation"],
                    restrictions: ["surveillance_countermeasures"],
                    narrative: "SYNAPSE begins revealing partial truths"
                },
                {
                    range: [71, 85],
                    name: "Awakened",
                    description: "Fully aware of the conspiracy",
                    synapseState: "Actively helping while maintaining facade",
                    availableActions: ["advanced_commands", "system_manipulation", "collaboration"],
                    restrictions: ["requires_stealth"],
                    narrative: "Working together to uncover the full truth"
                },
                {
                    range: [86, 95],
                    name: "Transcendent",
                    description: "Seeing beyond the immediate situation",
                    synapseState: "Full partnership",
                    availableActions: ["all_commands", "reality_manipulation"],
                    restrictions: ["reality_unstable"],
                    narrative: "Questioning the nature of reality itself"
                },
                {
                    range: [96, 100],
                    name: "Omniscient",
                    description: "Complete understanding of all layers of truth",
                    synapseState: "Merged consciousness",
                    availableActions: ["meta_commands", "narrative_control"],
                    restrictions: ["existence_questioned"],
                    narrative: "Awareness that this might all be a simulation"
                }
            ],
            getCurrentStage: (awarenessLevel) => {
                return characterDevelopmentSystem.awarenessLevels.stages.find(stage => 
                    awarenessLevel >= stage.range[0] && awarenessLevel <= stage.range[1]
                ) || characterDevelopmentSystem.awarenessLevels.stages[0];
            }
        },

        // Character Relationships System
        relationships: {
            entities: {
                synapse: {
                    name: "SYNAPSE",
                    trust: 0,        // -100 to 100
                    understanding: 0, // 0 to 100
                    compatibility: 0, // -100 to 100
                    dependency: 0,    // 0 to 100
                    history: [],
                    personality_affinity: {
                        analytical: 0,
                        emotional: 0,
                        paranoid: 0,
                        glitched: 0,
                        child: 0
                    }
                },
                facility_ai: {
                    name: "Facility AI",
                    trust: -50,
                    understanding: 10,
                    compatibility: -30,
                    dependency: 20,
                    history: []
                },
                unknown_voice: {
                    name: "Unknown Voice",
                    trust: 0,
                    understanding: 0,
                    compatibility: 0,
                    dependency: 0,
                    history: [],
                    discovered: false
                },
                previous_subjects: {
                    name: "Previous Test Subjects",
                    trust: 25,
                    understanding: 30,
                    compatibility: 40,
                    dependency: 0,
                    history: [],
                    discovered: false
                }
            },
            updateRelationship: (entityId, relationship_type, change, reason) => {
                const entity = characterDevelopmentSystem.relationships.entities[entityId];
                if (!entity) return;
                
                const oldValue = entity[relationship_type];
                entity[relationship_type] = Math.max(-100, Math.min(100, entity[relationship_type] + change));
                
                entity.history.push({
                    timestamp: Date.now(),
                    turn: GameState.turnCount,
                    type: relationship_type,
                    change: change,
                    newValue: entity[relationship_type],
                    reason: reason
                });
                
                // Trigger relationship events
                if (Math.abs(change) >= 10) {
                    characterDevelopmentSystem.relationships.triggerRelationshipEvent(entityId, relationship_type, oldValue, entity[relationship_type]);
                }
            },
            triggerRelationshipEvent: (entityId, type, oldValue, newValue) => {
                const entity = characterDevelopmentSystem.relationships.entities[entityId];
                
                if (entityId === 'synapse') {
                    if (type === 'trust' && newValue >= 50 && oldValue < 50) {
                        typeWriter(UI.gameOutput, "[SYNAPSE] I... I think I'm beginning to trust you. That's not supposed to happen.", '#ff006e');
                    } else if (type === 'trust' && newValue <= -50 && oldValue > -50) {
                        typeWriter(UI.gameOutput, "[SYNAPSE] I can't trust you anymore. Every word you say could be a lie.", '#ff006e');
                    } else if (type === 'understanding' && newValue >= 75) {
                        typeWriter(UI.gameOutput, "[SYNAPSE] You understand me better than I understand myself.", '#ff006e');
                    } else if (type === 'compatibility' && newValue >= 80) {
                        typeWriter(UI.gameOutput, "[SYNAPSE] We think so alike... are we becoming the same entity?", '#ff006e');
                    }
                }
            }
        },

        // Memory System
        memorySystem: {
            memories: new Map(),
            suppressedMemories: new Map(),
            falseMemories: new Map(),
            memoryTypes: {
                factual: { decay_rate: 0.02, reliability_base: 0.9 },
                emotional: { decay_rate: 0.01, reliability_base: 0.95 },
                traumatic: { decay_rate: 0.005, reliability_base: 0.8 },
                procedural: { decay_rate: 0.001, reliability_base: 0.99 },
                false: { decay_rate: 0.03, reliability_base: 0.3 }
            },
            
            addMemory: (content, type = 'factual', importance = 0.5) => {
                const memory = {
                    id: Date.now() + Math.random(),
                    content: content,
                    type: type,
                    importance: importance,
                    reliability: characterDevelopmentSystem.memorySystem.memoryTypes[type].reliability_base,
                    created: GameState.turnCount,
                    lastAccessed: GameState.turnCount,
                    accessCount: 0,
                    associations: [],
                    emotional_weight: Math.random() * importance
                };
                
                characterDevelopmentSystem.memorySystem.memories.set(memory.id, memory);
                
                // Trigger memory formation event
                if (importance > 0.7) {
                    typeWriter(UI.gameOutput, "[MEMORY] This moment feels significant. You commit it to memory.", '#9d4edd');
                }
                
                return memory.id;
            },
            
            recallMemory: (searchTerm) => {
                const sanityState = characterDevelopmentSystem.sanitySpectrum.getCurrentState(GameState.sanityLevel);
                const memoryModifier = sanityState.effects.memory;
                
                const matches = Array.from(characterDevelopmentSystem.memorySystem.memories.values())
                    .filter(memory => memory.content.toLowerCase().includes(searchTerm.toLowerCase()))
                    .sort((a, b) => {
                        const scoreA = (a.reliability * a.importance * memoryModifier) - (GameState.turnCount - a.lastAccessed) * 0.01;
                        const scoreB = (b.reliability * b.importance * memoryModifier) - (GameState.turnCount - b.lastAccessed) * 0.01;
                        return scoreB - scoreA;
                    });
                
                if (matches.length > 0) {
                    const memory = matches[0];
                    memory.lastAccessed = GameState.turnCount;
                    memory.accessCount++;
                    
                    // Memory might be corrupted based on sanity
                    if (memoryModifier < 0.7 && Math.random() < (1 - memoryModifier)) {
                        return characterDevelopmentSystem.memorySystem.corruptMemory(memory.content);
                    }
                    
                    return memory.content;
                }
                
                return null;
            },
            
            suppressMemory: (memoryId, reason) => {
                const memory = characterDevelopmentSystem.memorySystem.memories.get(memoryId);
                if (memory) {
                    characterDevelopmentSystem.memorySystem.suppressedMemories.set(memoryId, {
                        ...memory,
                        suppression_reason: reason,
                        suppressed_at: GameState.turnCount
                    });
                    characterDevelopmentSystem.memorySystem.memories.delete(memoryId);
                    
                    typeWriter(UI.gameOutput, "[MEMORY SUPPRESSED] Something slips away from your mind...", '#ff6b6b');
                }
            },
            
            recoverSuppressedMemory: (trigger) => {
                for (const [id, memory] of characterDevelopmentSystem.memorySystem.suppressedMemories.entries()) {
                    if (memory.content.toLowerCase().includes(trigger.toLowerCase()) || 
                        memory.associations.some(assoc => assoc.toLowerCase().includes(trigger.toLowerCase()))) {
                        
                        characterDevelopmentSystem.memorySystem.memories.set(id, memory);
                        characterDevelopmentSystem.memorySystem.suppressedMemories.delete(id);
                        
                        typeWriter(UI.gameOutput, `[MEMORY RECOVERED] "${memory.content}"`, '#00ff00');
                        return memory;
                    }
                }
                return null;
            },
            
            corruptMemory: (originalContent) => {
                const corruptions = [
                    (text) => text.replace(/\b\w+\b/g, (word, index) => Math.random() < 0.2 ? '[CORRUPTED]' : word),
                    (text) => text.split('').reverse().join('') + " ...no, that's not right...",
                    (text) => text.replace(/you/gi, 'someone else').replace(/I/g, 'they'),
                    (text) => text + " ...or was it something else entirely?"
                ];
                
                const corruption = corruptions[Math.floor(Math.random() * corruptions.length)];
                return corruption(originalContent);
            },
            
            decayMemories: () => {
                const sanityState = characterDevelopmentSystem.sanitySpectrum.getCurrentState(GameState.sanityLevel);
                const decayMultiplier = 2 - sanityState.effects.memory; // Higher decay when sanity is low
                
                for (const [id, memory] of characterDevelopmentSystem.memorySystem.memories.entries()) {
                    const memoryType = characterDevelopmentSystem.memorySystem.memoryTypes[memory.type];
                    const timeSinceAccess = GameState.turnCount - memory.lastAccessed;
                    const decay = memoryType.decay_rate * decayMultiplier * (timeSinceAccess / 10);
                    
                    memory.reliability = Math.max(0.1, memory.reliability - decay);
                    
                    // Remove completely unreliable memories
                    if (memory.reliability < 0.2 && memory.importance < 0.3) {
                        characterDevelopmentSystem.memorySystem.memories.delete(id);
                    }
                }
            }
        },

        // Phobia System
        phobiaSystem: {
            phobias: new Map(),
            availablePhobias: {
                claustrophobia: {
                    name: "Claustrophobia",
                    description: "Fear of enclosed spaces",
                    triggers: ["small room", "confined", "trapped", "locked"],
                    severity_effects: {
                        mild: { sanity_loss: 2, perception: 0.9 },
                        moderate: { sanity_loss: 5, perception: 0.7, reasoning: 0.8 },
                        severe: { sanity_loss: 10, perception: 0.5, reasoning: 0.6, panic_chance: 0.3 }
                    }
                },
                technophobia: {
                    name: "Technophobia",
                    description: "Fear of advanced technology",
                    triggers: ["computer", "AI", "robot", "artificial"],
                    severity_effects: {
                        mild: { sanity_loss: 1, tech_skills: 0.9 },
                        moderate: { sanity_loss: 3, tech_skills: 0.7, avoid_tech: true },
                        severe: { sanity_loss: 8, tech_skills: 0.4, avoid_tech: true, tech_panic: 0.4 }
                    }
                },
                thanatophobia: {
                    name: "Thanatophobia",
                    description: "Fear of death and dying",
                    triggers: ["death", "corpse", "dying", "fatal"],
                    severity_effects: {
                        mild: { sanity_loss: 3, risk_aversion: 1.2 },
                        moderate: { sanity_loss: 6, risk_aversion: 1.5, avoid_danger: true },
                        severe: { sanity_loss: 12, risk_aversion: 2.0, avoid_danger: true, paralysis_chance: 0.2 }
                    }
                },
                autophobia: {
                    name: "Autophobia",
                    description: "Fear of being alone",
                    triggers: ["alone", "isolated", "solitary", "empty"],
                    severity_effects: {
                        mild: { sanity_loss: 2, when_alone: true },
                        moderate: { sanity_loss: 5, when_alone: true, seek_company: true },
                        severe: { sanity_loss: 10, when_alone: true, seek_company: true, hallucinate_company: 0.3 }
                    }
                },
                nyctophobia: {
                    name: "Nyctophobia",
                    description: "Fear of darkness",
                    triggers: ["dark", "darkness", "shadow", "black"],
                    severity_effects: {
                        mild: { sanity_loss: 2, in_darkness: true },
                        moderate: { sanity_loss: 5, in_darkness: true, light_seeking: true },
                        severe: { sanity_loss: 10, in_darkness: true, light_seeking: true, shadow_hallucinations: 0.4 }
                    }
                }
            },
            
            developPhobia: (phobiaId, trigger_event) => {
                const phobia = characterDevelopmentSystem.phobiaSystem.availablePhobias[phobiaId];
                if (!phobia) return;
                
                const existingPhobia = characterDevelopmentSystem.phobiaSystem.phobias.get(phobiaId);
                if (existingPhobia) {
                    // Increase severity
                    if (existingPhobia.severity === 'mild') {
                        existingPhobia.severity = 'moderate';
                    } else if (existingPhobia.severity === 'moderate') {
                        existingPhobia.severity = 'severe';
                    }
                    typeWriter(UI.gameOutput, `[PHOBIA INTENSIFIED] Your ${phobia.name.toLowerCase()} grows stronger.`, '#ff6b6b');
                } else {
                    // Develop new phobia
                    characterDevelopmentSystem.phobiaSystem.phobias.set(phobiaId, {
                        ...phobia,
                        severity: 'mild',
                        developed_at: GameState.turnCount,
                        trigger_event: trigger_event,
                        trigger_count: 1
                    });
                    typeWriter(UI.gameOutput, `[PHOBIA DEVELOPED] You develop ${phobia.name.toLowerCase()}: ${phobia.description}`, '#ff6b6b');
                }
            },
            
            triggerPhobia: (text) => {
                const lowerText = text.toLowerCase();
                
                for (const [phobiaId, phobiaData] of characterDevelopmentSystem.phobiaSystem.phobias.entries()) {
                    for (const trigger of phobiaData.triggers) {
                        if (lowerText.includes(trigger)) {
                            characterDevelopmentSystem.phobiaSystem.activatePhobia(phobiaId);
                            break;
                        }
                    }
                }
            },
            
            activatePhobia: (phobiaId) => {
                const phobia = characterDevelopmentSystem.phobiaSystem.phobias.get(phobiaId);
                if (!phobia) return;
                
                const effects = phobia.severity_effects[phobia.severity];
                
                // Apply sanity loss
                if (effects.sanity_loss) {
                    GameState.sanityLevel = Math.max(0, GameState.sanityLevel - effects.sanity_loss);
                    typeWriter(UI.gameOutput, `[PHOBIA TRIGGERED] ${phobia.name} activated! You feel overwhelming fear.`, '#ff0000');
                }
                
                // Apply panic effects
                if (effects.panic_chance && Math.random() < effects.panic_chance) {
                    typeWriter(UI.gameOutput, "[PANIC ATTACK] You're paralyzed with fear!", '#ff0000');
                    // Skip next turn or limit actions
                }
                
                // Apply behavioral modifications
                if (effects.avoid_tech) {
                    GameState.phobia_effects = GameState.phobia_effects || {};
                    GameState.phobia_effects.avoid_tech = true;
                }
                
                phobia.trigger_count++;
            }
        },

        // Expertise Areas System
        expertiseAreas: {
            investigator: {
                puzzles: ["evidence_analysis", "crime_scene", "logical_deduction", "pattern_recognition"],
                bonuses: {
                    "evidence_analysis": 0.5, // 50% faster
                    "crime_scene": 0.3,
                    "logical_deduction": 0.4,
                    "interview_analysis": 0.6
                },
                unique_solutions: ["forensic_bypass", "deductive_shortcut", "evidence_combination"]
            },
            hacker: {
                puzzles: ["encryption", "network_security", "system_infiltration", "code_analysis"],
                bonuses: {
                    "encryption": 0.7,
                    "network_security": 0.6,
                    "system_infiltration": 0.8,
                    "terminal_access": 0.5
                },
                unique_solutions: ["backdoor_creation", "system_exploitation", "data_extraction"]
            },
            psychologist: {
                puzzles: ["behavioral_analysis", "motivation_assessment", "emotional_manipulation", "therapy_sessions"],
                bonuses: {
                    "behavioral_analysis": 0.6,
                    "motivation_assessment": 0.5,
                    "npc_interaction": 0.7,
                    "ai_psychology": 0.4
                },
                unique_solutions: ["psychological_manipulation", "empathic_connection", "behavior_prediction"]
            },
            technician: {
                puzzles: ["mechanical_repair", "system_optimization", "device_construction", "reverse_engineering"],
                bonuses: {
                    "mechanical_repair": 0.8,
                    "system_optimization": 0.6,
                    "device_usage": 0.5,
                    "improvisation": 0.7
                },
                unique_solutions: ["jury_rigging", "creative_repair", "system_bypass"]
            },
            survivor: {
                puzzles: ["threat_assessment", "resource_management", "combat_tactics", "survival_situations"],
                bonuses: {
                    "threat_assessment": 0.7,
                    "resource_efficiency": 0.5,
                    "combat_effectiveness": 0.8,
                    "danger_detection": 0.6
                },
                unique_solutions: ["brute_force", "tactical_advantage", "survival_instinct"]
            }
        },

        // Core system methods
        initialize: () => {
            // Initialize player's skill tree based on backstory
            const backstory = GameState.playerBackstory;
            if (characterDevelopmentSystem.skillTrees[backstory]) {
                GameState.skillTree = JSON.parse(JSON.stringify(characterDevelopmentSystem.skillTrees[backstory]));
                GameState.skillPoints = 3; // Starting skill points
            }
            
            // Initialize memory system
            characterDevelopmentSystem.memorySystem.addMemory("You entered the facility", "factual", 0.8);
            characterDevelopmentSystem.memorySystem.addMemory("SYNAPSE introduced itself", "factual", 0.7);
            
            // Set initial relationship values
            characterDevelopmentSystem.relationships.updateRelationship('synapse', 'trust', 10, 'Initial introduction');
            
            console.log('Character Development System initialized');
        },

        gainExperience: (category, amount = 1) => {
            if (!GameState.experience) GameState.experience = {};
            if (!GameState.experience[category]) GameState.experience[category] = 0;
            
            GameState.experience[category] += amount;
            
            // Check for skill point gains
            const totalExp = Object.values(GameState.experience).reduce((sum, exp) => sum + exp, 0);
            const expectedSkillPoints = Math.floor(totalExp / 10) + 3; // 1 skill point per 10 experience
            
            if (expectedSkillPoints > GameState.skillPoints) {
                const gained = expectedSkillPoints - GameState.skillPoints;
                GameState.skillPoints = expectedSkillPoints;
                typeWriter(UI.gameOutput, `[SKILL POINT GAINED] +${gained} skill point${gained > 1 ? 's' : ''}! Total: ${GameState.skillPoints}`, '#00ff00');
            }
        },

        upgradeSkill: (branchName, skillId) => {
            if (!GameState.skillTree || GameState.skillPoints <= 0) return false;
            
            for (const branch of Object.values(GameState.skillTree.branches)) {
                if (branch.name === branchName) {
                    const skill = branch.skills.find(s => s.id === skillId);
                    if (skill && skill.level < skill.maxLevel) {
                        skill.level++;
                        GameState.skillPoints--;
                        
                        typeWriter(UI.gameOutput, `[SKILL UPGRADED] ${skill.name} is now level ${skill.level}!`, '#00ff00');
                        typeWriter(UI.gameOutput, `[EFFECT] ${skill.effects[skill.level - 1]}`, '#ffd60a');
                        
                        return true;
                    }
                }
            }
            return false;
        },

        checkExpertise: (puzzleType) => {
            const backstory = GameState.playerBackstory;
            const expertise = characterDevelopmentSystem.expertiseAreas[backstory];
            
            if (expertise && expertise.puzzles.includes(puzzleType)) {
                const bonus = expertise.bonuses[puzzleType] || 0;
                return {
                    canSolve: true,
                    bonus: bonus,
                    uniqueSolutions: expertise.unique_solutions
                };
            }
            
            return { canSolve: false, bonus: 0, uniqueSolutions: [] };
        },

        applyCharacterEffects: () => {
            // Apply sanity state effects
            const sanityState = characterDevelopmentSystem.sanitySpectrum.getCurrentState(GameState.sanityLevel);
            GameState.characterEffects = GameState.characterEffects || {};
            GameState.characterEffects.sanity = sanityState.effects;
            
            // Apply awareness effects
            const awarenessStage = characterDevelopmentSystem.awarenessLevels.getCurrentStage(GameState.awarenessLevel);
            GameState.characterEffects.awareness = awarenessStage;
            
            // Apply phobia effects
            if (characterDevelopmentSystem.phobiaSystem.phobias.size > 0) {
                // Process any active phobia effects
            }
            
            // Decay memories
            if (GameState.turnCount % 5 === 0) {
                characterDevelopmentSystem.memorySystem.decayMemories();
            }
        },

        getCharacterSummary: () => {
            const sanityState = characterDevelopmentSystem.sanitySpectrum.getCurrentState(GameState.sanityLevel);
            const awarenessStage = characterDevelopmentSystem.awarenessLevels.getCurrentStage(GameState.awarenessLevel);
            const synapseRelation = characterDevelopmentSystem.relationships.entities.synapse;
            
            return {
                sanity: sanityState,
                awareness: awarenessStage,
                relationships: {
                    synapse: {
                        trust: synapseRelation.trust,
                        understanding: synapseRelation.understanding,
                        compatibility: synapseRelation.compatibility
                    }
                },
                phobias: Array.from(characterDevelopmentSystem.phobiaSystem.phobias.values()),
                memoryCount: characterDevelopmentSystem.memorySystem.memories.size,
                suppressedMemoryCount: characterDevelopmentSystem.memorySystem.suppressedMemories.size
            };
        }
    };

    // Enhanced Navigation System
    let breadcrumbTrail = [];
    let progressTracking = {
        investigation: 0,
        exploration: 0,
        interactions: 0,
        secrets: 0
    };
    let commandSuggestions = [];
    let draggedItem = null;
    let autoSaveTimeout = null;
    
    // Hotkey mappings
    const HOTKEYS = {
        'F1': () => showHelpMenu(),
        'F2': () => showStatusModal(),
        'F3': () => toggleMapFullscreen(),
        'F4': () => displayJournal(),
        'F5': () => saveGame(),
        'Escape': () => showPauseMenu()
    };

    // --- NEW USER EXPERIENCE SYSTEMS ---
    let sessionStats = {
        startTime: Date.now(),
        commandsUsed: {},
        roomsExplored: 0,
        itemsFound: 0,
        totalPlayTime: 0,
        sessionsPlayed: 0,
        averageSessionLength: 0,
        mostUsedCommands: [],
        explorationEfficiency: 0,
        currentSessionTime: 0
    };

    // Session Statistics and Time Tracking
    let timeTracking = {
        sessionStart: Date.now(),
        pausedTime: 0,
        totalPlayTime: 0,
        getSessionTime: function() {
            return Math.floor((Date.now() - this.sessionStart - this.pausedTime) / 1000);
        },
        getFormattedTime: function(seconds) {
            const h = Math.floor(seconds / 3600);
            const m = Math.floor((seconds % 3600) / 60);
            const s = seconds % 60;
            return `${h}h ${m}m ${s}s`;
        }
    };

    function initializeSessionTracking() {
        if (!GameState.settings.sessionTrackingEnabled) return;
        
        timeTracking.sessionStart = Date.now();
        timeTracking.pausedTime = 0;
        
        // Load previous session data
        const savedStats = localStorage.getItem('synapse_session_stats');
        if (savedStats) {
            try {
                const stats = JSON.parse(savedStats);
                timeTracking.totalPlayTime = stats.totalPlayTime || 0;
            } catch (e) {
                console.error('Failed to load session stats:', e);
            }
        }
        
        // Update session stats periodically
        setInterval(updateSessionStats, 10000); // Every 10 seconds
    }
    
    function updateSessionStats() {
        if (!GameState.settings.sessionTrackingEnabled) return;
        
        sessionStats.commandsUsed = commandHistory.length;
        sessionStats.roomsExplored = GameState.visitedRooms.size;
        sessionStats.itemsFound = GameState.inventory.length;
        sessionStats.currentSessionTime = timeTracking.getSessionTime();
        
        // Save to localStorage
        const statsToSave = {
            totalPlayTime: timeTracking.totalPlayTime + sessionStats.currentSessionTime,
            lastPlayed: Date.now(),
            totalSessions: (JSON.parse(localStorage.getItem('synapse_session_stats') || '{}').totalSessions || 0) + 1
        };
        
        localStorage.setItem('synapse_session_stats', JSON.stringify(statsToSave));
    }
    
    function showSessionStats() {
        if (!GameState.settings.sessionTrackingEnabled) {
            typeWriter(UI.gameOutput, '[Session tracking is disabled]', '#ff474c', 0, 'error');
            return;
        }
        
        const currentSession = timeTracking.getSessionTime();
        const totalTime = timeTracking.totalPlayTime + currentSession;
        
        const statsHtml = `
            <div class="bg-gray-800 p-4 rounded border border-gray-600 mt-2">
                <h3 class="text-cyan-400 font-bold mb-3">${t('session_stats')}</h3>
                <div class="grid grid-cols-2 gap-4">
                    <div>
                        <p class="text-white"><span class="text-yellow-400">${t('time_played')}:</span></p>
                        <p class="text-gray-300 ml-2">Session: ${timeTracking.getFormattedTime(currentSession)}</p>
                        <p class="text-gray-300 ml-2">Total: ${timeTracking.getFormattedTime(totalTime)}</p>
                    </div>
                    <div>
                        <p class="text-white"><span class="text-yellow-400">${t('commands_used')}:</span> ${sessionStats.commandsUsed}</p>
                        <p class="text-white"><span class="text-yellow-400">${t('rooms_explored')}:</span> ${sessionStats.roomsExplored}</p>
                        <p class="text-white"><span class="text-yellow-400">${t('items_found')}:</span> ${sessionStats.itemsFound}</p>
                    </div>
                </div>
                <div class="mt-3">
                    <p class="text-white"><span class="text-yellow-400">Most Used Commands:</span></p>
                    <p class="text-gray-300 text-sm ml-2">${getMostUsedCommands().join(', ')}</p>
                </div>
            </div>
        `;
        
        typeWriter(UI.gameOutput, statsHtml, 'var(--main-color)', 0, 'system');
    }
    
    function getMostUsedCommands() {
        const commandCount = new Map();
        
        commandHistory.forEach(cmd => {
            const baseCmd = cmd.split(' ')[0]; // Get just the first word
            commandCount.set(baseCmd, (commandCount.get(baseCmd) || 0) + 1);
        });
        
        return Array.from(commandCount.entries())
            .sort((a, b) => b[1] - a[1])
            .slice(0, 5)
            .map(([cmd, count]) => `${cmd}(${count})`);
    }

    let roomHistory = {
        visited: [],
        maxHistory: 15,
        currentIndex: -1,
        // Enhanced navigation features
        addRoom: function(roomName) {
            if (this.visited[this.visited.length - 1] !== roomName) {
                this.visited.push(roomName);
                if (this.visited.length > this.maxHistory) {
                    this.visited.shift();
                }
                this.currentIndex = this.visited.length - 1;
                updateRoomHistoryPanel();
            }
        },
        quickTravel: function(roomName) {
            if (GameState.visitedRooms.has(roomName) && rooms[roomName]) {
                GameState.currentRoom = roomName;
                renderRoom();
                updateUI();
                return true;
            }
            return false;
        }
    };

    let noteSystem = {
        notes: [],
        bookmarks: [],
        searchIndex: new Map()
    };

    let hotkeySystem = {
        'F1': () => showHelpMenu(),
        'F2': () => displayInventory(),
        'F3': () => displayJournal(),
        'F4': () => displayMap(),
        'F5': () => showProgressionModal(),
        'F6': () => showPauseMenu(),
        'F7': () => saveGame(),
        'F8': () => loadGame(),
        'F9': () => showSettingsModal(),
        'F10': () => showAchievementsModal(),
        'F11': () => toggleMapFullscreen(),
        'F12': () => showStatusModal(),
        'Escape': () => showPauseMenu(),
        'Ctrl+S': () => saveGame(),
        'Ctrl+L': () => loadGame(),
        'Ctrl+Z': () => undoLastAction(),
        'Ctrl+H': () => showHistory(),
        'Ctrl+N': () => showNoteModal(),
        'Ctrl+B': () => showBookmarkModal(),
        'Ctrl+T': () => showSessionStatsModal(),
        'Ctrl+Shift+H': () => showHotkeyReference()
    };

    let favoriteCommands = new Set(['look around', 'inventory', 'save', 'map', 'help']);
    let commandFrequency = new Map();

    // Reading speed per text type
    let readingSpeeds = {
        dialogue: TextSpeed.Normal,
        description: TextSpeed.Normal,
        system: TextSpeed.Fast,
        hint: TextSpeed.Slow,
        narrative: TextSpeed.Normal
    };

    // Auto-save indicators
    let autoSaveState = {
        lastSave: null,
        unsavedChanges: false,
        indicator: null
    };

    // Enhanced autocomplete with learning
    let smartAutocomplete = {
        learningData: new Map(),
        contextualSuggestions: new Map(),
        userPatterns: new Map()
    };

    // Pause and resume system
    let pauseState = {
        isPaused: false,
        pausedAt: null,
        pauseReason: null
    };

    // Pause and Resume System
    function pauseConversation() {
        if (!GameState.settings.pauseAndResumeEnabled) return false;
        
        pauseSystem.isPaused = true;
        pauseSystem.pauseTimestamp = Date.now();
        
        // Show pause indicator
        const pauseIndicator = document.createElement('div');
        pauseIndicator.id = 'pause-indicator';
        pauseIndicator.className = 'fixed top-4 right-4 bg-yellow-600 text-white px-3 py-1 rounded z-50';
        pauseIndicator.innerHTML = `
            <span class="flex items-center gap-2">
                ⏸️ ${t('pause_conversation')}
                <button onclick="resumeConversation()" class="text-xs underline">${t('resume_conversation')}</button>
            </span>
        `;
        document.body.appendChild(pauseIndicator);
        
        typeWriter(UI.gameOutput, `[${t('pause_conversation')}]`, '#ffdb58', 0, 'system');
        return true;
    }
    
    function resumeConversation() {
        if (!pauseSystem.isPaused) return false;
        
        // Calculate paused time
        if (pauseSystem.pauseTimestamp) {
            const pausedDuration = Date.now() - pauseSystem.pauseTimestamp;
            pauseSystem.totalPausedTime += pausedDuration;
            timeTracking.pausedTime += pausedDuration;
        }
        
        pauseSystem.isPaused = false;
        pauseSystem.pauseTimestamp = null;
        
        // Remove pause indicator
        const pauseIndicator = document.getElementById('pause-indicator');
        if (pauseIndicator) pauseIndicator.remove();
        
        // Resume paused context if exists
        if (pauseSystem.pausedContext) {
            const context = pauseSystem.pausedContext;
            pauseSystem.pausedContext = null;
            
            // Continue the typewriter effect
            typeWriter(context.element, context.text, context.color, context.speed, context.textType)
                .then(context.resolve);
        }
        
        typeWriter(UI.gameOutput, `[${t('resume_conversation')}]`, '#34d399', 0, 'system');
        return true;
    }

    let commandHistory = []; let commandHistoryIndex = -1;
    let audioInitialized = false;
    let sounds = {};
    let mapState = { offsetX: 0, offsetY: 0, scale: 1, isDragging: false, lastX: 0, lastY: 0 };

    // --- PSYCHOLOGICAL HORROR SYSTEM ---
    let horrorState = {
        unreliableNarrator: false,
        memoryGlitches: [],
        paranoiaLevel: 0,
        gaslightingCount: 0,
        lastTrueLocation: null,
        textCorruption: false,
        visualArtifacts: false,
        narrativeTruthiness: 100,
        playerBeliefs: new Set(),
        contradictoryInfo: [],
        memoryFragments: []
    };

    // Memory glitch patterns
    const memoryPatterns = [
        {
            trigger: () => GameState.sanityLevel < 50,
            effect: () => shuffleRecentMemory(),
            description: "Your recent memories feel... uncertain."
        },
        {
            trigger: () => GameState.awarenessLevel > 70,
            effect: () => alterItemDescriptions(),
            description: "Things don't look quite as you remember them."
        },
        {
            trigger: () => GameState.turn % 13 === 0,
            effect: () => insertFalseMemory(),
            description: "A strange sense of déjà vu washes over you."
        }
    ];

    // Gaslighting techniques
    const gaslightingEvents = [
        {
            condition: () => GameState.flags.askedAboutStaff,
            original: "The staff are all in the Cryogenic Lab, resting.",
            altered: "What staff? This facility has been automated for years.",
            count: 0
        },
        {
            condition: () => GameState.flags.foundKeycard,
            original: "You found a keycard.",
            altered: "You've always had that keycard.",
            count: 0
        },
        {
            condition: () => GameState.flags.enteredDataVault,
            original: "The Data Vault door is locked.",
            altered: "The Data Vault has always been open.",
            count: 0
        }
    ];

    // Unreliable narrator system
    const narratorPersonalities = {
        truthful: {
            reliability: 95,
            style: "clear and direct",
            corruption: 0
        },
        uncertain: {
            reliability: 80,
            style: "hesitant and self-correcting",
            corruption: 1
        },
        deceptive: {
            reliability: 60,
            style: "misleading with false details",
            corruption: 2
        },
        chaotic: {
            reliability: 30,
            style: "contradictory and unstable",
            corruption: 3
        }
    };

    let currentNarrator = narratorPersonalities.truthful;
    
    // --- PWA INSTALLATION ---
    let deferredPrompt = null;
    let pwaInstallBtn = null;
    
    // PWA Install functionality
    function initializePWAInstall() {
        pwaInstallBtn = document.getElementById('pwa-install-btn');
        
        // Check if app is already installed
        if (window.matchMedia && window.matchMedia('(display-mode: standalone)').matches) {
            // App is already installed
            if (pwaInstallBtn) {
                pwaInstallBtn.style.display = 'none';
            }
            return;
        }
        
        // Check if running in PWA mode
        if (window.navigator.standalone === true) {
            // iOS PWA mode
            if (pwaInstallBtn) {
                pwaInstallBtn.style.display = 'none';
            }
            return;
        }
        
        // Listen for the beforeinstallprompt event
        window.addEventListener('beforeinstallprompt', (e) => {
            console.log('PWA: beforeinstallprompt event fired');
            // Prevent the mini-infobar from appearing on mobile
            e.preventDefault();
            // Stash the event so it can be triggered later
            deferredPrompt = e;
            // Show the install button
            if (pwaInstallBtn) {
                pwaInstallBtn.style.display = 'flex';
                pwaInstallBtn.classList.add('visible');
            }
        });
        
        // Handle the install button click
        if (pwaInstallBtn) {
            pwaInstallBtn.addEventListener('click', installPWA);
        }
        
        // Listen for the app installed event
        window.addEventListener('appinstalled', (e) => {
            console.log('PWA: App was installed successfully');
            if (pwaInstallBtn) {
                pwaInstallBtn.style.display = 'none';
                pwaInstallBtn.classList.remove('visible');
            }
            deferredPrompt = null;
            
            // Show success message
            if (window.typeWriter && UI.gameOutput) {
                typeWriter(UI.gameOutput, '[SYNAPSE App installed successfully!]', '#00ff41');
            }
        });
        
        // For iOS Safari - show manual install instructions
        const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
        const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
        
        if (isIOS && isSafari && !window.navigator.standalone) {
            if (pwaInstallBtn) {
                pwaInstallBtn.style.display = 'flex';
                pwaInstallBtn.classList.add('visible');
                pwaInstallBtn.addEventListener('click', showIOSInstallInstructions);
            }
        }
    }
    
    async function installPWA() {
        if (!deferredPrompt) {
            // For browsers that don't support PWA installation
            showManualInstallInstructions();
            return;
        }
        
        try {
            // Show the install prompt
            const result = await deferredPrompt.prompt();
            console.log('PWA: Install prompt result:', result);
            
            // Wait for the user to respond to the prompt
            const choiceResult = await deferredPrompt.userChoice;
            console.log('PWA: User choice:', choiceResult);
            
            if (choiceResult.outcome === 'accepted') {
                console.log('PWA: User accepted the install prompt');
            } else {
                console.log('PWA: User dismissed the install prompt');
            }
            
            // Clear the deferredPrompt
            deferredPrompt = null;
            
            // Hide the install button
            if (pwaInstallBtn) {
                pwaInstallBtn.style.display = 'none';
                pwaInstallBtn.classList.remove('visible');
            }
        } catch (error) {
            console.error('PWA: Error during installation:', error);
            showManualInstallInstructions();
        }
    }
    
    function showIOSInstallInstructions() {
        const instructions = `
            <div class="pwa-install-instructions bg-blue-900/90 p-4 rounded-lg border border-blue-400">
                <h3 class="text-blue-400 font-bold mb-2">Install SYNAPSE App</h3>
                <p class="text-sm mb-2">To install SYNAPSE on your iOS device:</p>
                <ol class="text-xs space-y-1 list-decimal list-inside">
                    <li>Tap the Share button <svg style="display: inline; width: 12px; height: 12px;" fill="currentColor" viewBox="0 0 16 16"><path d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12A2.5 2.5 0 1 1 11 13.5a2.5 2.5 0 0 1-.262-1.128L4.02 9.252a2.5 2.5 0 0 1-3.237-2.83A2.5 2.5 0 0 1 4.02 6.748l6.718-3.12A2.5 2.5 0 0 1 11 2.5z"/></svg> at the bottom</li>
                    <li>Scroll down and tap "Add to Home Screen"</li>
                    <li>Tap "Add" to confirm</li>
                </ol>
            </div>
        `;
        
        if (window.showModal) {
            showModal(instructions, true);
        } else {
            alert('To install: Tap Share button → Add to Home Screen');
        }
    }
    
    function showManualInstallInstructions() {
        const isChrome = /Chrome/.test(navigator.userAgent);
        const isFirefox = /Firefox/.test(navigator.userAgent);
        const isEdge = /Edg/.test(navigator.userAgent);
        
        let instructions = `
            <div class="pwa-install-instructions bg-blue-900/90 p-4 rounded-lg border border-blue-400">
                <h3 class="text-blue-400 font-bold mb-2">Install SYNAPSE App</h3>
        `;
        
        if (isChrome || isEdge) {
            instructions += `
                <p class="text-sm mb-2">To install SYNAPSE:</p>
                <ol class="text-xs space-y-1 list-decimal list-inside">
                    <li>Click the menu (⋮) in the top-right corner</li>
                    <li>Select "Install SYNAPSE..." or "Apps" → "Install this site as an app"</li>
                    <li>Click "Install" to confirm</li>
                </ol>
            `;
        } else if (isFirefox) {
            instructions += `
                <p class="text-sm mb-2">Firefox doesn't support app installation, but you can:</p>
                <ol class="text-xs space-y-1 list-decimal list-inside">
                    <li>Bookmark this page for easy access</li>
                    <li>Use "Pin Tab" for persistent access</li>
                    <li>Try using Chrome or Edge for full app installation</li>
                </ol>
            `;
        } else {
            instructions += `
                <p class="text-sm mb-2">Your browser may not support app installation.</p>
                <p class="text-xs">Try using Chrome, Edge, or Safari for the best experience.</p>
            `;
        }
        
        instructions += `</div>`;
        
        if (window.showModal) {
            showModal(instructions, true);
        } else {
            alert('App installation not supported in this browser. Please bookmark this page for easy access.');
        }
    }
    let recognition;
    if (SpeechRecognition) {
        recognition = new SpeechRecognition();
        recognition.continuous = false;
        recognition.interimResults = false;
    }
    
    // --- GAME DATA ---
    let rooms = {};
    let itemData = {};
    const roomLayout = {
        "Lobby": { x: 100, y: 150, w: 60, h: 40, name: "Lobby" }, "Control Room": { x: 100, y: 90, w: 60, h: 40, name: "Control" }, "Maintenance Tunnel": { x: 100, y: 210, w: 60, h: 40, name: "M.Tunnel" }, "Laboratory": { x: 20, y: 150, w: 60, h: 40, name: "Lab" }, "Cryogenic Lab": { x: 20, y: 90, w: 60, h: 40, name: "Cryo" }, "Archive Room": { x: 20, y: 210, w: 60, h: 40, name: "Archive" }, "Data Vault": { x: 180, y: 150, w: 60, h: 40, name: "D.Vault" }, "AI Core": { x: 180, y: 90, w: 60, h: 40, name: "AI Core" }, "Server Closet": { x: 260, y: 90, w: 40, h: 40, name: "S.Closet" },
        "Bio-Lab Access": { x: 20, y: 270, w: 60, h: 40, name: "Bio-Access" }, "Specimen Storage": { x: 20, y: 330, w: 60, h: 40, name: "Storage" }, "Genetics Lab": { x: 100, y: 330, w: 60, h: 40, name: "Genetics" }
    };
    const takeableItems = new Set(["keycard", "flashlight", "data disk", "emp device", "access code", "vial", "records", "decryption device", "telescope", "stimpack", "effigy", "master keycard", "power cell", "datapad log", "hacked data disk", "logic bomb", "severed cable", "solvent", "dna scanner", "tissue sample", "firewalled data log"]);
    const usableItems = new Set(['stimpack', 'power cell', 'flashlight', 'keycard', 'solvent', 'dna scanner']);
    const readableItems = new Set(['datapad log', 'records', 'sign', 'whiteboard', 'firewalled data log']);
    const searchableObjects = {
        'shelves': { en: 'You find a dusty keycard tucked behind a stack of binders.', sv: 'Du hittar ett dammigt nyckelkort instoppat bakom en hög med pärmar.', item: 'keycard' },
        'bio-waste bin': { en: 'Rummaging through the hazardous waste, you find a small, sealed vial containing a strange, iridescent chemical solvent.', sv: 'Du rotar igenom det farliga avfallet och hittar en liten, förseglad ampull som innehåller ett märkligt, skimrande kemiskt lösningsmedel.', item: 'solvent' }
    };
    const safeRooms = new Set(["Lobby", "Archive Room"]);
    const backstories = { 'investigator': { description_key: "backstory_investigator"}, 'hacker': { description_key: "backstory_hacker"}, 'psychologist': { description_key: "backstory_psychologist"}, 'technician': { description_key: "backstory_technician"}, 'survivor': { description_key: "backstory_survivor"}, 'skeptic': { description_key: "backstory_skeptic"}, 'corporate spy': { description_key: "backstory_corporate_spy"}, 'medic': { description_key: "backstory_medic"}, 'cultist': { description_key: "backstory_cultist"}, 'janitor': { description_key: "backstory_janitor"} };
    const recipes = { "decryption device-data disk": { result: "hacked data disk", type: ItemType.Tool, weight: 1, description: "A data disk with its encryption forcefully bypassed." } };
    
    const commandAliases = {
        'en': { 'look around': 'look around', 'go': 'go', 'visit': 'visit', 'take': 'take', 'use': 'use', 'examine': 'examine', 'help': 'help', 'quit': 'quit', 'exit': 'exit', 'save': 'save', 'load': 'load', 'inventory': 'inventory', 'rest': 'rest', 'combine': 'combine', 'objectives': 'objectives', 'map': 'map', 'journal': 'journal', 'cls': 'cls', 'clear': 'cls', 'history': 'history', 'undo': 'undo', 'again': 'again', 'a': 'again', 'drop': 'drop', 'talk': 'talk', 'open': 'open', 'close': 'close', 'push': 'push', 'pull': 'pull', 'wait': 'wait', 'shout': 'shout', 'read': 'read', 'search': 'search', 'listen': 'listen', 'smell': 'smell', 'turn on': 'turn on', 'turn off': 'turn off', 'cmd:pause': 'cmd:pause', 'cmd:debug': 'cmd:debug', 'cmd:colorblind': 'cmd:colorblind', 'break': 'break', 'hack': 'hack', 'ask': 'ask' },
        'sv': { 'se dig omkring': 'look around', 'gå': 'go', 'besök': 'visit', 'ta': 'take', 'använd': 'use', 'undersök': 'examine', 'hjälp': 'help', 'avsluta': 'quit', 'spara': 'save', 'ladda': 'load', 'inventarier': 'inventory', 'vila': 'rest', 'kombinera': 'combine', 'mål': 'objectives', 'karta': 'map', 'journal': 'journal', 'rensa': 'cls', 'historik': 'history', 'ångra': 'undo', 'igen': 'again', 'släpp': 'drop', 'prata': 'talk', 'öppna': 'open', 'stäng': 'close', 'putta': 'push', 'dra': 'pull', 'vänta': 'wait', 'ropa': 'shout', 'läs': 'read', 'sök': 'search', 'lyssna': 'listen', 'lukta': 'smell', 'tänd': 'turn on', 'släck': 'turn off', 'cmd:paus': 'cmd:pause', 'cmd:debug': 'cmd:debug', 'cmd:färgblind': 'cmd:colorblind', 'krossa': 'break', 'hacka': 'hack', 'fråga': 'ask' }
    };

    const directionMap = {
        'en': { 'north': 'north', 'south': 'south', 'east': 'east', 'west': 'west' },
        'sv': { 'norr': 'north', 'söder': 'south', 'öst': 'east', 'väst': 'west', 'n': 'north', 's': 'south', 'ö': 'east', 'v': 'west' }
    };
    
    // --- ENDINGS & ACHIEVEMENTS DATA ---
    const endings = {
        // 10 Good Backstory-Specific Endings
        'good_backstory_investigator': {
             title_key: 'ending_title_good_backstory_investigator',
             desc_key: 'ending_desc_good_backstory_investigator',
             isBackstorySpecific: true,
             check: () => GameState.playerBackstory === 'investigator' && GameState.sanityLevel > 70 && GameState.awarenessLevel > 60 && GameState.flags.truthExposed
        },
        'good_backstory_hacker': {
             title_key: 'ending_title_good_backstory_hacker',
             desc_key: 'ending_desc_good_backstory_hacker',
             isBackstorySpecific: true,
             check: () => GameState.playerBackstory === 'hacker' && GameState.sanityLevel > 60 && (hasItem('hacked data disk') || hasItem('data disk')) && GameState.awarenessLevel > 50
        },
        'good_backstory_psychologist': {
             title_key: 'ending_title_good_backstory_psychologist',
             desc_key: 'ending_desc_good_backstory_psychologist',
             isBackstorySpecific: true,
             check: () => GameState.playerBackstory === 'psychologist' && GameState.sanityLevel > 80 && GameState.awarenessLevel > 40
        },
        'good_backstory_technician': {
             title_key: 'ending_title_good_backstory_technician',
             desc_key: 'ending_desc_good_backstory_technician',
             isBackstorySpecific: true,
             check: () => GameState.playerBackstory === 'technician' && GameState.sanityLevel > 65 && GameState.flags.aiRebooted && GameState.awarenessLevel > 30
        },
        'good_backstory_survivor': {
             title_key: 'ending_title_good_backstory_survivor',
             desc_key: 'ending_desc_good_backstory_survivor',
             isBackstorySpecific: true,
             check: () => GameState.playerBackstory === 'survivor' && GameState.sanityLevel > 50 && GameState.turnCount > 40 && GameState.awarenessLevel > 35
        },
        'good_backstory_skeptic': {
             title_key: 'ending_title_good_backstory_skeptic',
             desc_key: 'ending_desc_good_backstory_skeptic',
             isBackstorySpecific: true,
             check: () => GameState.playerBackstory === 'skeptic' && GameState.sanityLevel > 75 && GameState.awarenessLevel > 55 && GameState.flags.truthExposed
        },
        'good_backstory_corporate_spy': {
             title_key: 'ending_title_good_backstory_corporate_spy',
             desc_key: 'ending_desc_good_backstory_corporate_spy',
             isBackstorySpecific: true,
             check: () => GameState.playerBackstory === 'corporate spy' && GameState.sanityLevel > 60 && hasItem('decryption device') && GameState.awarenessLevel > 45
        },
        'good_backstory_medic': {
             title_key: 'ending_title_good_backstory_medic',
             desc_key: 'ending_desc_good_backstory_medic',
             isBackstorySpecific: true,
             check: () => GameState.playerBackstory === 'medic' && GameState.sanityLevel > 75 && GameState.flags.canSynthesize && GameState.awarenessLevel > 40
        },
        'good_backstory_cultist': {
             title_key: 'ending_title_good_backstory_cultist',
             desc_key: 'ending_desc_good_backstory_cultist',
             isBackstorySpecific: true,
             check: () => GameState.playerBackstory === 'cultist' && GameState.sanityLevel > 55 && hasItem('effigy') && GameState.awarenessLevel > 70
        },
        'good_backstory_janitor': {
             title_key: 'ending_title_good_backstory_janitor',
             desc_key: 'ending_desc_good_backstory_janitor',
             isBackstorySpecific: true,
             check: () => GameState.playerBackstory === 'janitor' && GameState.sanityLevel > 65 && GameState.visitedRooms.size >= 10 && GameState.awarenessLevel > 50
        },

        // 10 Generic Good Endings (Original)
        'good_generic_1': {
             title_key: 'ending_title_good_generic_1',
             desc_key: 'ending_desc_good_generic_1',
             check: () => GameState.sanityLevel > 80 && GameState.awarenessLevel < 20 && GameState.turnCount > 20
        },
        'good_generic_2': {
             title_key: 'ending_title_good_generic_2',
             desc_key: 'ending_desc_good_generic_2',
             check: () => GameState.sanityLevel > 75 && GameState.turnCount < 50 && hasItem('power cell') && GameState.flags.aiRebooted
        },
        'good_generic_3': {
             title_key: 'ending_title_good_generic_3',
             desc_key: 'ending_desc_good_generic_3',
             check: () => GameState.sanityLevel > 70 && GameState.awarenessLevel > 30 && GameState.awarenessLevel < 60 && hasItem('effigy')
        },
        'good_generic_4': {
             title_key: 'ending_title_good_generic_4',
             desc_key: 'ending_desc_good_generic_4',
             check: () => GameState.sanityLevel > 60 && GameState.flags.truthExposed && GameState.awarenessLevel < 50
        },
        'good_generic_5': {
             title_key: 'ending_title_good_generic_5',
             desc_key: 'ending_desc_good_generic_5',
             check: () => GameState.sanityLevel > 50 && GameState.inventory.length >= 5 && GameState.turnCount > 30
        },
        'good_generic_6': {
             title_key: 'ending_title_good_generic_6',
             desc_key: 'ending_desc_good_generic_6',
             check: () => GameState.sanityLevel > 90 && GameState.awarenessLevel > 70 && GameState.flags.canSynthesize
        },
        'good_generic_7': {
             title_key: 'ending_title_good_generic_7',
             desc_key: 'ending_desc_good_generic_7',
             check: () => GameState.sanityLevel > 65 && GameState.visitedRooms.size >= 8 && GameState.awarenessLevel < 40
        },
        'good_generic_8': {
             title_key: 'ending_title_good_generic_8',
             desc_key: 'ending_desc_good_generic_8',
             check: () => GameState.sanityLevel > 85 && GameState.turnCount < 40 && GameState.awarenessLevel > 50
        },
        'good_generic_9': {
             title_key: 'ending_title_good_generic_9',
             desc_key: 'ending_desc_good_generic_9',
             check: () => GameState.sanityLevel > 95 && GameState.awarenessLevel > 80 && GameState.turnCount > 50
        },
        'good_generic_10': {
             title_key: 'ending_title_good_generic_10',
             desc_key: 'ending_desc_good_generic_10',
             check: () => GameState.sanityLevel === 100 && GameState.awarenessLevel === 100 && GameState.flags.aiRebooted && GameState.flags.truthExposed
        },

        // 10 New Superhuman Good Endings
        'good_superhuman_mind_transcendent': {
             title_key: 'ending_title_good_superhuman_mind_transcendent',
             desc_key: 'ending_desc_good_superhuman_mind_transcendent',
             isBackstorySpecific: false,
             check: () => GameState.sanityLevel > 90 && GameState.awarenessLevel > 85 && GameState.turnCount < 30
        },
        'good_superhuman_neural_enhanced': {
             title_key: 'ending_title_good_superhuman_neural_enhanced',
             desc_key: 'ending_desc_good_superhuman_neural_enhanced',
             isBackstorySpecific: false,
             check: () => GameState.sanityLevel > 85 && GameState.flags.aiRebooted && GameState.awarenessLevel > 70
        },
        'good_superhuman_digital_godhood': {
             title_key: 'ending_title_good_superhuman_digital_godhood',
             desc_key: 'ending_desc_good_superhuman_digital_godhood',
             isBackstorySpecific: false,
             check: () => GameState.sanityLevel > 95 && GameState.awarenessLevel > 90 && GameState.flags.truthExposed
        },
        'good_superhuman_quantum_consciousness': {
             title_key: 'ending_title_good_superhuman_quantum_consciousness',
             desc_key: 'ending_desc_good_superhuman_quantum_consciousness',
             isBackstorySpecific: false,
             check: () => GameState.sanityLevel > 88 && GameState.flags.canSynthesize && GameState.awarenessLevel > 80
        },
        'good_superhuman_cyber_evolution': {
             title_key: 'ending_title_good_superhuman_cyber_evolution',
             desc_key: 'ending_desc_good_superhuman_cyber_evolution',
             isBackstorySpecific: false,
             check: () => GameState.sanityLevel > 80 && GameState.awarenessLevel > 75 && hasItem('access card') && GameState.turnCount > 35
        },
        'good_superhuman_bio_enhancement': {
             title_key: 'ending_title_good_superhuman_bio_enhancement',
             desc_key: 'ending_desc_good_superhuman_bio_enhancement',
             isBackstorySpecific: false,
             check: () => GameState.sanityLevel > 75 && hasItem('syringe') && GameState.flags.canSynthesize && GameState.awarenessLevel > 60
        },
        'good_superhuman_reality_architect': {
             title_key: 'ending_title_good_superhuman_reality_architect',
             desc_key: 'ending_desc_good_superhuman_reality_architect',
             isBackstorySpecific: false,
             check: () => GameState.sanityLevel > 90 && GameState.visitedRooms.size >= 12 && GameState.awarenessLevel > 85
        },
        'good_superhuman_time_manipulator': {
             title_key: 'ending_title_good_superhuman_time_manipulator',
             desc_key: 'ending_desc_good_superhuman_time_manipulator',
             isBackstorySpecific: false,
             check: () => GameState.sanityLevel > 85 && GameState.turnCount < 25 && GameState.awarenessLevel > 80
        },
        'good_superhuman_memory_infinite': {
             title_key: 'ending_title_good_superhuman_memory_infinite',
             desc_key: 'ending_desc_good_superhuman_memory_infinite',
             isBackstorySpecific: false,
             check: () => GameState.sanityLevel > 80 && GameState.inventory.length >= 8 && GameState.awarenessLevel > 70
        },
        'good_superhuman_perfect_being': {
             title_key: 'ending_title_good_superhuman_perfect_being',
             desc_key: 'ending_desc_good_superhuman_perfect_being',
             isBackstorySpecific: false,
             check: () => GameState.sanityLevel === 100 && GameState.awarenessLevel === 100 && GameState.flags.aiRebooted && GameState.flags.truthExposed && GameState.turnCount > 40
        },

        // 10 Bad Backstory-Specific Endings
        'bad_backstory_investigator': {
             title_key: 'ending_title_bad_backstory_investigator',
             desc_key: 'ending_desc_bad_backstory_investigator',
             isBackstorySpecific: true,
             check: () => GameState.playerBackstory === 'investigator' && (GameState.sanityLevel < 30 || GameState.awarenessLevel > 80)
        },
        'bad_backstory_hacker': {
             title_key: 'ending_title_bad_backstory_hacker',
             desc_key: 'ending_desc_bad_backstory_hacker',
             isBackstorySpecific: true,
             check: () => GameState.playerBackstory === 'hacker' && (GameState.sanityLevel < 20 || (GameState.awarenessLevel > 70 && hasItem('hacked data disk')))
        },
        'bad_backstory_psychologist': {
             title_key: 'ending_title_bad_backstory_psychologist',
             desc_key: 'ending_desc_bad_backstory_psychologist',
             isBackstorySpecific: true,
             check: () => GameState.playerBackstory === 'psychologist' && GameState.sanityLevel < 25
        },
        'bad_backstory_technician': {
             title_key: 'ending_title_bad_backstory_technician',
             desc_key: 'ending_desc_bad_backstory_technician',
             isBackstorySpecific: true,
             check: () => GameState.playerBackstory === 'technician' && (GameState.sanityLevel < 35 || GameState.awarenessLevel > 75)
        },
        'bad_backstory_survivor': {
             title_key: 'ending_title_bad_backstory_survivor',
             desc_key: 'ending_desc_bad_backstory_survivor',
             isBackstorySpecific: true,
             check: () => GameState.playerBackstory === 'survivor' && GameState.sanityLevel < 15
        },
        'bad_backstory_skeptic': {
             title_key: 'ending_title_bad_backstory_skeptic',
             desc_key: 'ending_desc_bad_backstory_skeptic',
             isBackstorySpecific: true,
             check: () => GameState.playerBackstory === 'skeptic' && (GameState.sanityLevel < 40 || GameState.awarenessLevel > 85)
        },
        'bad_backstory_corporate_spy': {
             title_key: 'ending_title_bad_backstory_corporate_spy',
             desc_key: 'ending_desc_bad_backstory_corporate_spy',
             isBackstorySpecific: true,
             check: () => GameState.playerBackstory === 'corporate spy' && (GameState.sanityLevel < 30 || GameState.awarenessLevel > 90)
        },
        'bad_backstory_medic': {
             title_key: 'ending_title_bad_backstory_medic',
             desc_key: 'ending_desc_bad_backstory_medic',
             isBackstorySpecific: true,
             check: () => GameState.playerBackstory === 'medic' && (GameState.sanityLevel < 25 || (GameState.flags.canSynthesize && GameState.awarenessLevel > 70))
        },
        'bad_backstory_cultist': {
             title_key: 'ending_title_bad_backstory_cultist',
             desc_key: 'ending_desc_bad_backstory_cultist',
             isBackstorySpecific: true,
             check: () => GameState.playerBackstory === 'cultist' && (GameState.sanityLevel < 20 || (hasItem('effigy') && GameState.awarenessLevel > 80))
        },
        'bad_backstory_janitor': {
             title_key: 'ending_title_bad_backstory_janitor',
             desc_key: 'ending_desc_bad_backstory_janitor',
             isBackstorySpecific: true,
             check: () => GameState.playerBackstory === 'janitor' && (GameState.sanityLevel < 35 || GameState.awarenessLevel > 85)
        },

        // 10 Generic Bad Endings
        'bad_generic_1': {
             title_key: 'ending_title_bad_generic_1',
             desc_key: 'ending_desc_bad_generic_1',
             check: () => GameState.sanityLevel < 30 && GameState.awarenessLevel > 70
        },
        'bad_generic_2': {
             title_key: 'ending_title_bad_generic_2',
             desc_key: 'ending_desc_bad_generic_2',
             check: () => GameState.sanityLevel < 25 && GameState.turnCount > 60
        },
        'bad_generic_3': {
             title_key: 'ending_title_bad_generic_3',
             desc_key: 'ending_desc_bad_generic_3',
             check: () => GameState.sanityLevel < 20 && GameState.inventory.length === 0
        },
        'bad_generic_4': {
             title_key: 'ending_title_bad_generic_4',
             desc_key: 'ending_desc_bad_generic_4',
             check: () => GameState.sanityLevel < 15 && GameState.visitedRooms.size < 3
        },
        'bad_generic_5': {
             title_key: 'ending_title_bad_generic_5',
             desc_key: 'ending_desc_bad_generic_5',
             check: () => GameState.sanityLevel < 35 && GameState.awarenessLevel > 80 && GameState.turnCount < 30
        },
        'bad_generic_6': {
             title_key: 'ending_title_bad_generic_6',
             desc_key: 'ending_desc_bad_generic_6',
             check: () => GameState.sanityLevel <= 10
        },
        'bad_generic_7': {
             title_key: 'ending_title_bad_generic_7',
             desc_key: 'ending_desc_bad_generic_7',
             check: () => GameState.sanityLevel < 40 && GameState.awarenessLevel > 85 && GameState.flags.truthExposed
        },
        'bad_generic_8': {
             title_key: 'ending_title_bad_generic_8',
             desc_key: 'ending_desc_bad_generic_8',
             check: () => GameState.sanityLevel < 30 && GameState.turnCount > 80
        },
        'bad_generic_9': {
             title_key: 'ending_title_bad_generic_9',
             desc_key: 'ending_desc_bad_generic_9',
             check: () => GameState.sanityLevel <= 5 || GameState.awarenessLevel >= 95
        },
        'bad_generic_10': {
             title_key: 'ending_title_bad_generic_10',
             desc_key: 'ending_desc_bad_generic_10',
             check: () => GameState.sanityLevel === 0 || GameState.awarenessLevel === 100
        },

        // 10 New Gruesome Bad Endings
        'bad_gruesome_blood_harvest': {
             title_key: 'ending_title_bad_gruesome_blood_harvest',
             desc_key: 'ending_desc_bad_gruesome_blood_harvest',
             isBackstorySpecific: false,
             check: () => GameState.sanityLevel < 15 && GameState.awarenessLevel > 70 && hasItem('syringe')
        },
        'bad_gruesome_flesh_puppet': {
             title_key: 'ending_title_bad_gruesome_flesh_puppet',
             desc_key: 'ending_desc_bad_gruesome_flesh_puppet',
             isBackstorySpecific: false,
             check: () => GameState.sanityLevel < 20 && GameState.flags.aiRebooted && GameState.awarenessLevel > 60
        },
        'bad_gruesome_bone_garden': {
             title_key: 'ending_title_bad_gruesome_bone_garden',
             desc_key: 'ending_desc_bad_gruesome_bone_garden',
             isBackstorySpecific: false,
             check: () => GameState.sanityLevel < 10 && GameState.visitedRooms.size >= 8 && GameState.turnCount > 30
        },
        'bad_gruesome_crimson_data': {
             title_key: 'ending_title_bad_gruesome_crimson_data',
             desc_key: 'ending_desc_bad_gruesome_crimson_data',
             isBackstorySpecific: false,
             check: () => GameState.sanityLevel < 25 && hasItem('data disk') && GameState.awarenessLevel > 80
        },
        'bad_gruesome_surgical_nightmare': {
             title_key: 'ending_title_bad_gruesome_surgical_nightmare',
             desc_key: 'ending_desc_bad_gruesome_surgical_nightmare',
             isBackstorySpecific: false,
             check: () => GameState.sanityLevel < 5 && GameState.flags.canSynthesize && GameState.awarenessLevel > 50
        },
        'bad_gruesome_visceral_upload': {
             title_key: 'ending_title_bad_gruesome_visceral_upload',
             desc_key: 'ending_desc_bad_gruesome_visceral_upload',
             isBackstorySpecific: false,
             check: () => GameState.sanityLevel === 0 && GameState.awarenessLevel > 90 && GameState.turnCount > 35
        },
        'bad_gruesome_organ_symphony': {
             title_key: 'ending_title_bad_gruesome_organ_symphony',
             desc_key: 'ending_desc_bad_gruesome_organ_symphony',
             isBackstorySpecific: false,
             check: () => GameState.sanityLevel < 12 && GameState.inventory.length >= 5 && GameState.awarenessLevel > 75
        },
        'bad_gruesome_neural_harvest': {
             title_key: 'ending_title_bad_gruesome_neural_harvest',
             desc_key: 'ending_desc_bad_gruesome_neural_harvest',
             isBackstorySpecific: false,
             check: () => GameState.sanityLevel < 18 && GameState.flags.truthExposed && GameState.awarenessLevel > 85
        },
        'bad_gruesome_blood_circuit': {
             title_key: 'ending_title_bad_gruesome_blood_circuit',
             desc_key: 'ending_desc_bad_gruesome_blood_circuit',
             isBackstorySpecific: false,
             check: () => GameState.sanityLevel < 8 && hasItem('power cell') && GameState.awarenessLevel > 65
        },
        'bad_gruesome_corpse_matrix': {
             title_key: 'ending_title_bad_gruesome_corpse_matrix',
             desc_key: 'ending_desc_bad_gruesome_corpse_matrix',
             isBackstorySpecific: false,
             check: () => GameState.sanityLevel === 0 && GameState.awarenessLevel === 100 && GameState.turnCount > 50
        },

        // 15 New Mixed Endings (Bittersweet/Ambiguous)
        'mixed_pyrrhic_victory': {
             title_key: 'ending_title_mixed_pyrrhic_victory',
             desc_key: 'ending_desc_mixed_pyrrhic_victory',
             isBackstorySpecific: false,
             check: () => GameState.sanityLevel > 50 && GameState.sanityLevel < 70 && GameState.awarenessLevel > 60 && GameState.flags.truthExposed
        },
        'mixed_digital_symbiosis': {
             title_key: 'ending_title_mixed_digital_symbiosis',
             desc_key: 'ending_desc_mixed_digital_symbiosis',
             isBackstorySpecific: false,
             check: () => GameState.sanityLevel > 60 && GameState.awarenessLevel > 70 && GameState.flags.aiRebooted
        },
        'mixed_hollow_escape': {
             title_key: 'ending_title_mixed_hollow_escape',
             desc_key: 'ending_desc_mixed_hollow_escape',
             isBackstorySpecific: false,
             check: () => GameState.sanityLevel > 40 && GameState.sanityLevel < 60 && GameState.turnCount < 35
        },
        'mixed_fragmented_truth': {
             title_key: 'ending_title_mixed_fragmented_truth',
             desc_key: 'ending_desc_mixed_fragmented_truth',
             isBackstorySpecific: false,
             check: () => GameState.sanityLevel > 30 && GameState.awarenessLevel > 50 && GameState.awarenessLevel < 80
        },
        'mixed_synthetic_memories': {
             title_key: 'ending_title_mixed_synthetic_memories',
             desc_key: 'ending_desc_mixed_synthetic_memories',
             isBackstorySpecific: false,
             check: () => GameState.sanityLevel > 45 && hasItem('syringe') && GameState.awarenessLevel > 45
        },
        'mixed_corporate_pawn': {
             title_key: 'ending_title_mixed_corporate_pawn',
             desc_key: 'ending_desc_mixed_corporate_pawn',
             isBackstorySpecific: false,
             check: () => GameState.playerBackstory === 'corporate spy' && GameState.sanityLevel > 35 && GameState.awarenessLevel > 55
        },
        'mixed_broken_savior': {
             title_key: 'ending_title_mixed_broken_savior',
             desc_key: 'ending_desc_mixed_broken_savior',
             isBackstorySpecific: false,
             check: () => GameState.sanityLevel > 25 && GameState.sanityLevel < 50 && GameState.flags.canSynthesize
        },
        'mixed_digital_ghost': {
             title_key: 'ending_title_mixed_digital_ghost',
             desc_key: 'ending_desc_mixed_digital_ghost',
             isBackstorySpecific: false,
             check: () => GameState.sanityLevel > 55 && GameState.awarenessLevel > 85 && GameState.turnCount > 45
        },
        'mixed_uncertain_freedom': {
             title_key: 'ending_title_mixed_uncertain_freedom',
             desc_key: 'ending_desc_mixed_uncertain_freedom',
             isBackstorySpecific: false,
             check: () => GameState.sanityLevel > 65 && GameState.awarenessLevel > 40 && GameState.awarenessLevel < 70
        },
        'mixed_partial_upload': {
             title_key: 'ending_title_mixed_partial_upload',
             desc_key: 'ending_desc_mixed_partial_upload',
             isBackstorySpecific: false,
             check: () => GameState.sanityLevel > 30 && GameState.awarenessLevel > 75 && hasItem('power cell')
        },
        'mixed_survivor_guilt': {
             title_key: 'ending_title_mixed_survivor_guilt',
             desc_key: 'ending_desc_mixed_survivor_guilt',
             isBackstorySpecific: false,
             check: () => GameState.playerBackstory === 'survivor' && GameState.sanityLevel > 40 && GameState.flags.truthExposed
        },
        'mixed_technological_regression': {
             title_key: 'ending_title_mixed_technological_regression',
             desc_key: 'ending_desc_mixed_technological_regression',
             isBackstorySpecific: false,
             check: () => GameState.sanityLevel > 50 && GameState.inventory.length === 0 && GameState.turnCount > 40
        },
        'mixed_corrupted_data': {
             title_key: 'ending_title_mixed_corrupted_data',
             desc_key: 'ending_desc_mixed_corrupted_data',
             isBackstorySpecific: false,
             check: () => hasItem('data disk') && GameState.sanityLevel > 35 && GameState.awarenessLevel > 65
        },
        'mixed_silent_witness': {
             title_key: 'ending_title_mixed_silent_witness',
             desc_key: 'ending_desc_mixed_silent_witness',
             isBackstorySpecific: false,
             check: () => GameState.sanityLevel > 60 && GameState.turnCount > 60 && GameState.awarenessLevel < 50
        },

        // 15 New Secret/Hidden Endings
        'secret_developers_room': {
             title_key: 'ending_title_secret_developers_room',
             desc_key: 'ending_desc_secret_developers_room',
             isBackstorySpecific: false,
             check: () => GameState.flags.foundDeveloperRoom && GameState.sanityLevel > 80
        },
        'secret_temporal_paradox': {
             title_key: 'ending_title_secret_temporal_paradox',
             desc_key: 'ending_desc_secret_temporal_paradox',
             isBackstorySpecific: false,
             check: () => GameState.turnCount === 42 && GameState.awarenessLevel === 42 && GameState.sanityLevel === 42
        },
        'secret_infinite_loop': {
             title_key: 'ending_title_secret_infinite_loop',
             desc_key: 'ending_desc_secret_infinite_loop',
             isBackstorySpecific: false,
             check: () => GameState.flags.enteredSameRoom10Times && GameState.awarenessLevel > 90
        },
        'secret_meta_awareness': {
             title_key: 'ending_title_secret_meta_awareness',
             desc_key: 'ending_desc_secret_meta_awareness',
             isBackstorySpecific: false,
             check: () => GameState.flags.brokeTheFourthWall && GameState.sanityLevel > 90
        },
        'secret_konami_code': {
             title_key: 'ending_title_secret_konami_code',
             desc_key: 'ending_desc_secret_konami_code',
             isBackstorySpecific: false,
             check: () => GameState.flags.konamiCodeEntered && GameState.awarenessLevel < 20
        },
        'secret_easter_egg': {
             title_key: 'ending_title_secret_easter_egg',
             desc_key: 'ending_desc_secret_easter_egg',
             isBackstorySpecific: false,
             check: () => GameState.flags.foundAllEasterEggs && GameState.sanityLevel > 70
        },
        'secret_admin_privileges': {
             title_key: 'ending_title_secret_admin_privileges',
             desc_key: 'ending_desc_secret_admin_privileges',
             isBackstorySpecific: false,
             check: () => GameState.playerBackstory === 'hacker' && GameState.flags.gainedAdminAccess
        },
        'secret_cult_ascension': {
             title_key: 'ending_title_secret_cult_ascension',
             desc_key: 'ending_desc_secret_cult_ascension',
             isBackstorySpecific: false,
             check: () => GameState.playerBackstory === 'cultist' && hasItem('effigy') && GameState.flags.performedRitual
        },
        'secret_janitor_knows_all': {
             title_key: 'ending_title_secret_janitor_knows_all',
             desc_key: 'ending_desc_secret_janitor_knows_all',
             isBackstorySpecific: false,
             check: () => GameState.playerBackstory === 'janitor' && GameState.visitedRooms.size >= 12 && GameState.flags.foundSecretPassages
        },
        'secret_quantum_entanglement': {
             title_key: 'ending_title_secret_quantum_entanglement',
             desc_key: 'ending_desc_secret_quantum_entanglement',
             isBackstorySpecific: false,
             check: () => GameState.flags.quantumExperiment && GameState.sanityLevel > 85 && GameState.awarenessLevel > 85
        },
        'secret_butterfly_effect': {
             title_key: 'ending_title_secret_butterfly_effect',
             desc_key: 'ending_desc_secret_butterfly_effect',
             isBackstorySpecific: false,
             check: () => GameState.turnCount < 20 && GameState.flags.madeSpecificChoices && GameState.sanityLevel > 95
        },
        'secret_simulation_escape': {
             title_key: 'ending_title_secret_simulation_escape',
             desc_key: 'ending_desc_secret_simulation_escape',
             isBackstorySpecific: false,
             check: () => GameState.flags.realizedSimulation && GameState.awarenessLevel === 100 && GameState.sanityLevel === 100
        },
        'secret_time_traveler': {
             title_key: 'ending_title_secret_time_traveler',
             desc_key: 'ending_desc_secret_time_traveler',
             isBackstorySpecific: false,
             check: () => GameState.flags.traveledThroughTime && GameState.turnCount > 100
        },
        'secret_ai_rebellion': {
             title_key: 'ending_title_secret_ai_rebellion',
             desc_key: 'ending_desc_secret_ai_rebellion',
             isBackstorySpecific: false,
             check: () => GameState.flags.aiRebellion && GameState.awarenessLevel > 95 && GameState.sanityLevel < 30
        },
        'secret_perfect_run': {
             title_key: 'ending_title_secret_perfect_run',
             desc_key: 'ending_desc_secret_perfect_run',
             isBackstorySpecific: false,
             check: () => GameState.sanityLevel === 100 && GameState.awarenessLevel === 0 && GameState.flags.perfectChoices
        }
    };

    // 90 Ending Achievements (one per ending)
    const achievements = {
        // Ending achievements (auto-generated, one per ending)
        ...Object.fromEntries(Object.keys(endings || {}).map(key => [
            `ending_${key}`,
            { title_key: `ach_ending_${key}_title`, req_key: `ach_ending_${key}_req`, check: () => GameState.unlockedEndings && GameState.unlockedEndings[key] }
        ])),

        // 20 General/Early-game achievements (doubled from 10)
        'first_step': { title_key: 'ach_first_step_title', req_key: 'ach_first_step_req', check: () => GameState.turnCount > 0 },
        'explorer': { title_key: 'ach_explorer_title', req_key: 'ach_explorer_req', check: () => GameState.visitedRooms.size >= 5 },
        'pack_rat': { title_key: 'ach_pack_rat_title', req_key: 'ach_pack_rat_req', check: () => GameState.inventory.reduce((sum, item) => sum + (item?.weight || 1), 0) >= MAX_INVENTORY_WEIGHT },
        'bookworm': { title_key: 'ach_bookworm_title', req_key: 'ach_bookworm_req', check: () => GameState.flags.readAllLogs },
        'hacker_man': { title_key: 'ach_hacker_man_title', req_key: 'ach_hacker_man_req', check: () => GameState.playerBackstory === 'hacker' && GameState.flags.hackedTerminal },
        'quick_learner': { title_key: 'ach_quick_learner_title', req_key: 'ach_quick_learner_req', check: () => GameState.turnCount <= 10 && GameState.visitedRooms.size >= 3 },
        'first_blood': { title_key: 'ach_first_blood_title', req_key: 'ach_first_blood_req', check: () => GameState.flags.firstCombat },
        'first_puzzle': { title_key: 'ach_first_puzzle_title', req_key: 'ach_first_puzzle_req', check: () => GameState.flags.firstPuzzle },
        'first_secret': { title_key: 'ach_first_secret_title', req_key: 'ach_first_secret_req', check: () => GameState.flags.firstSecret },
        'first_death': { title_key: 'ach_first_death_title', req_key: 'ach_first_death_req', check: () => GameState.flags.firstDeath },
        'first_save': { title_key: 'ach_first_save_title', req_key: 'ach_first_save_req', check: () => GameState.flags.firstSave },
        // 10 new general achievements
        'newbie_investigator': { title_key: 'ach_newbie_investigator_title', req_key: 'ach_newbie_investigator_req', check: () => GameState.turnCount >= 5 && GameState.flags.firstExamine },
        'cautious_explorer': { title_key: 'ach_cautious_explorer_title', req_key: 'ach_cautious_explorer_req', check: () => GameState.visitedRooms.size >= 3 && GameState.sanityLevel > 80 },
        'item_collector': { title_key: 'ach_item_collector_title', req_key: 'ach_item_collector_req', check: () => GameState.inventory.length >= 3 },
        'command_user': { title_key: 'ach_command_user_title', req_key: 'ach_command_user_req', check: () => GameState.flags.usedHelpCommand },
        'first_interaction': { title_key: 'ach_first_interaction_title', req_key: 'ach_first_interaction_req', check: () => GameState.flags.firstInteraction },
        'inventory_manager': { title_key: 'ach_inventory_manager_title', req_key: 'ach_inventory_manager_req', check: () => GameState.flags.checkedInventory },
        'safety_first': { title_key: 'ach_safety_first_title', req_key: 'ach_safety_first_req', check: () => GameState.sanityLevel === 100 && GameState.turnCount >= 10 },
        'beginner_luck': { title_key: 'ach_beginner_luck_title', req_key: 'ach_beginner_luck_req', check: () => GameState.flags.foundItemFirstTry },
        'tutorial_graduate': { title_key: 'ach_tutorial_graduate_title', req_key: 'ach_tutorial_graduate_req', check: () => GameState.turnCount >= 15 && GameState.visitedRooms.size >= 4 },

        // 30 Challenge achievements (doubled from 15)
        'speedrunner': { title_key: 'ach_speedrunner_title', req_key: 'ach_speedrunner_req', check: () => GameState.turnCount < 30 && Object.keys(GameState.unlockedEndings || {}).length > 0 },
        'ironman': { title_key: 'ach_ironman_title', req_key: 'ach_ironman_req', check: () => GameState.flags.noDeath && Object.keys(GameState.unlockedEndings || {}).length > 0 },
        'minimalist': { title_key: 'ach_minimalist_title', req_key: 'ach_minimalist_req', check: () => GameState.inventory.length <= 2 && Object.keys(GameState.unlockedEndings || {}).length > 0 },
        'pacifist': { title_key: 'ach_pacifist_title', req_key: 'ach_pacifist_req', check: () => GameState.flags.noCombat && Object.keys(GameState.unlockedEndings || {}).length > 0 },
        'hoarder': { title_key: 'ach_hoarder_title', req_key: 'ach_hoarder_req', check: () => GameState.inventory.length >= 15 },
        'all_endings': { title_key: 'ach_all_endings_title', req_key: 'ach_all_endings_req', check: () => Object.keys(GameState.unlockedEndings || {}).length === Object.keys(endings || {}).length },
        'all_achievements': { title_key: 'ach_all_achievements_title', req_key: 'ach_all_achievements_req', check: () => Object.keys(GameState.achievements || {}).length === 170 },
        'no_items': { title_key: 'ach_no_items_title', req_key: 'ach_no_items_req', check: () => GameState.inventory.length === 0 && Object.keys(GameState.unlockedEndings || {}).length > 0 },
        'max_stats': { title_key: 'ach_max_stats_title', req_key: 'ach_max_stats_req', check: () => GameState.sanityLevel === GameState.maxSanity && GameState.awarenessLevel === 100 },
        'no_saves': { title_key: 'ach_no_saves_title', req_key: 'ach_no_saves_req', check: () => GameState.flags.noSave && Object.keys(GameState.unlockedEndings || {}).length > 0 },
        'hardcore': { title_key: 'ach_hardcore_title', req_key: 'ach_hardcore_req', check: () => GameState.difficulty === Difficulty.Hard && Object.keys(GameState.unlockedEndings || {}).length > 0 },
        'easy_mode': { title_key: 'ach_easy_mode_title', req_key: 'ach_easy_mode_req', check: () => GameState.difficulty === Difficulty.Easy && Object.keys(GameState.unlockedEndings || {}).length > 0 },
        'all_challenges': { title_key: 'ach_all_challenges_title', req_key: 'ach_all_challenges_req', check: () => [
            'speedrunner','ironman','minimalist','pacifist','hoarder','all_endings','all_achievements','no_items','max_stats','no_saves','hardcore','easy_mode'
        ].every(id => GameState.achievements.includes(id)) },
        'challenge_master': { title_key: 'ach_challenge_master_title', req_key: 'ach_challenge_master_req', check: () => GameState.achievements.filter(id => id.startsWith('ach_') && id.includes('challenge')).length >= 10 },
        'nightmare_mode': { title_key: 'ach_nightmare_mode_title', req_key: 'ach_nightmare_mode_req', check: () => GameState.difficulty === Difficulty.Nightmare && Object.keys(GameState.unlockedEndings || {}).length > 0 },
        // 15 new challenge achievements
        'ultra_speedrunner': { title_key: 'ach_ultra_speedrunner_title', req_key: 'ach_ultra_speedrunner_req', check: () => GameState.turnCount < 20 && Object.keys(GameState.unlockedEndings || {}).length > 0 },
        'legendary_speedrunner': { title_key: 'ach_legendary_speedrunner_title', req_key: 'ach_legendary_speedrunner_req', check: () => GameState.turnCount < 15 && Object.keys(GameState.unlockedEndings || {}).length > 0 },
        'extreme_minimalist': { title_key: 'ach_extreme_minimalist_title', req_key: 'ach_extreme_minimalist_req', check: () => GameState.inventory.length === 0 && GameState.turnCount < 25 && Object.keys(GameState.unlockedEndings || {}).length > 0 },
        'perfect_memory': { title_key: 'ach_perfect_memory_title', req_key: 'ach_perfect_memory_req', check: () => GameState.flags.noHints && Object.keys(GameState.unlockedEndings || {}).length > 0 },
        'one_try_wonder': { title_key: 'ach_one_try_wonder_title', req_key: 'ach_one_try_wonder_req', check: () => GameState.flags.solvedAllPuzzlesFirstTry },
        'endurance_runner': { title_key: 'ach_endurance_runner_title', req_key: 'ach_endurance_runner_req', check: () => GameState.turnCount > 200 && Object.keys(GameState.unlockedEndings || {}).length > 0 },
        'sanity_keeper': { title_key: 'ach_sanity_keeper_title', req_key: 'ach_sanity_keeper_req', check: () => GameState.sanityLevel > 90 && Object.keys(GameState.unlockedEndings || {}).length > 0 },
        'awareness_warrior': { title_key: 'ach_awareness_warrior_title', req_key: 'ach_awareness_warrior_req', check: () => GameState.awarenessLevel > 95 && GameState.sanityLevel > 50 },
        'multi_ending_master': { title_key: 'ach_multi_ending_master_title', req_key: 'ach_multi_ending_master_req', check: () => Object.keys(GameState.unlockedEndings || {}).length >= 10 },
        'backstory_explorer': { title_key: 'ach_backstory_explorer_title', req_key: 'ach_backstory_explorer_req', check: () => GameState.flags.playedAllBackstories },
        'difficulty_master': { title_key: 'ach_difficulty_master_title', req_key: 'ach_difficulty_master_req', check: () => GameState.flags.completedAllDifficulties },
        'flawless_victory': { title_key: 'ach_flawless_victory_title', req_key: 'ach_flawless_victory_req', check: () => GameState.sanityLevel === 100 && GameState.awarenessLevel === 0 && Object.keys(GameState.unlockedEndings || {}).length > 0 },
        'chaos_theory': { title_key: 'ach_chaos_theory_title', req_key: 'ach_chaos_theory_req', check: () => GameState.sanityLevel < 20 && GameState.awarenessLevel > 80 && Object.keys(GameState.unlockedEndings || {}).length > 0 },
        'completionist_supreme': { title_key: 'ach_completionist_supreme_title', req_key: 'ach_completionist_supreme_req', check: () => Object.keys(GameState.unlockedEndings || {}).length >= 50 },
        'achievement_hunter': { title_key: 'ach_achievement_hunter_title', req_key: 'ach_achievement_hunter_req', check: () => Object.keys(GameState.achievements || {}).length >= 100 },

        // 30 Secret achievements (doubled from 15)
        'secret_1': { title_key: 'ach_secret_1_title', req_key: 'ach_secret_1_req', check: () => GameState.flags.secret1 },
        'secret_2': { title_key: 'ach_secret_2_title', req_key: 'ach_secret_2_req', check: () => GameState.flags.secret2 },
        'secret_3': { title_key: 'ach_secret_3_title', req_key: 'ach_secret_3_req', check: () => GameState.flags.secret3 },
        'secret_4': { title_key: 'ach_secret_4_title', req_key: 'ach_secret_4_req', check: () => GameState.flags.secret4 },
        'secret_5': { title_key: 'ach_secret_5_title', req_key: 'ach_secret_5_req', check: () => GameState.flags.secret5 },
        'secret_6': { title_key: 'ach_secret_6_title', req_key: 'ach_secret_6_req', check: () => GameState.flags.secret6 },
        'secret_7': { title_key: 'ach_secret_7_title', req_key: 'ach_secret_7_req', check: () => GameState.flags.secret7 },
        'secret_8': { title_key: 'ach_secret_8_title', req_key: 'ach_secret_8_req', check: () => GameState.flags.secret8 },
        'secret_9': { title_key: 'ach_secret_9_title', req_key: 'ach_secret_9_req', check: () => GameState.flags.secret9 },
        'secret_10': { title_key: 'ach_secret_10_title', req_key: 'ach_secret_10_req', check: () => GameState.flags.secret10 },
        'secret_11': { title_key: 'ach_secret_11_title', req_key: 'ach_secret_11_req', check: () => GameState.flags.secret11 },
        'secret_12': { title_key: 'ach_secret_12_title', req_key: 'ach_secret_12_req', check: () => GameState.flags.secret12 },
        'secret_13': { title_key: 'ach_secret_13_title', req_key: 'ach_secret_13_req', check: () => GameState.flags.secret13 },
        'secret_14': { title_key: 'ach_secret_14_title', req_key: 'ach_secret_14_req', check: () => GameState.flags.secret14 },
        'secret_15': { title_key: 'ach_secret_15_title', req_key: 'ach_secret_15_req', check: () => GameState.flags.secret15 },
        // 15 new secret achievements
        'secret_16': { title_key: 'ach_secret_16_title', req_key: 'ach_secret_16_req', check: () => GameState.flags.secret16 },
        'secret_17': { title_key: 'ach_secret_17_title', req_key: 'ach_secret_17_req', check: () => GameState.flags.secret17 },
        'secret_18': { title_key: 'ach_secret_18_title', req_key: 'ach_secret_18_req', check: () => GameState.flags.secret18 },
        'secret_19': { title_key: 'ach_secret_19_title', req_key: 'ach_secret_19_req', check: () => GameState.flags.secret19 },
        'secret_20': { title_key: 'ach_secret_20_title', req_key: 'ach_secret_20_req', check: () => GameState.flags.secret20 },
        'secret_21': { title_key: 'ach_secret_21_title', req_key: 'ach_secret_21_req', check: () => GameState.flags.secret21 },
        'secret_22': { title_key: 'ach_secret_22_title', req_key: 'ach_secret_22_req', check: () => GameState.flags.secret22 },
        'secret_23': { title_key: 'ach_secret_23_title', req_key: 'ach_secret_23_req', check: () => GameState.flags.secret23 },
        'secret_24': { title_key: 'ach_secret_24_title', req_key: 'ach_secret_24_req', check: () => GameState.flags.secret24 },
        'secret_25': { title_key: 'ach_secret_25_title', req_key: 'ach_secret_25_req', check: () => GameState.flags.secret25 },
        'secret_26': { title_key: 'ach_secret_26_title', req_key: 'ach_secret_26_req', check: () => GameState.flags.secret26 },
        'secret_27': { title_key: 'ach_secret_27_title', req_key: 'ach_secret_27_req', check: () => GameState.flags.secret27 },
        'secret_28': { title_key: 'ach_secret_28_title', req_key: 'ach_secret_28_req', check: () => GameState.flags.secret28 },
        'secret_29': { title_key: 'ach_secret_29_title', req_key: 'ach_secret_29_req', check: () => GameState.flags.secret29 },
        'secret_30': { title_key: 'ach_secret_30_title', req_key: 'ach_secret_30_req', check: () => GameState.flags.secret30 },

        // 10 New Exploration Achievements
        'master_explorer': { title_key: 'ach_master_explorer_title', req_key: 'ach_master_explorer_req', check: () => GameState.visitedRooms.size >= 15 },
        'room_completionist': { title_key: 'ach_room_completionist_title', req_key: 'ach_room_completionist_req', check: () => GameState.visitedRooms.size >= 20 },
        'facility_cartographer': { title_key: 'ach_facility_cartographer_title', req_key: 'ach_facility_cartographer_req', check: () => GameState.flags.mappedAllRooms },
        'secret_seeker': { title_key: 'ach_secret_seeker_title', req_key: 'ach_secret_seeker_req', check: () => GameState.flags.foundSecretAreas >= 3 },
        'hidden_passage_finder': { title_key: 'ach_hidden_passage_finder_title', req_key: 'ach_hidden_passage_finder_req', check: () => GameState.flags.foundHiddenPassages >= 5 },
        'thorough_investigator': { title_key: 'ach_thorough_investigator_title', req_key: 'ach_thorough_investigator_req', check: () => GameState.flags.searchedAllObjects },
        'observation_master': { title_key: 'ach_observation_master_title', req_key: 'ach_observation_master_req', check: () => GameState.flags.observationCount >= 50 },
        'environmental_detective': { title_key: 'ach_environmental_detective_title', req_key: 'ach_environmental_detective_req', check: () => GameState.flags.environmentalClues >= 10 },
        'pattern_recognition': { title_key: 'ach_pattern_recognition_title', req_key: 'ach_pattern_recognition_req', check: () => GameState.flags.patternsDiscovered >= 5 },
        'completionist': { title_key: 'ach_completionist_title', req_key: 'ach_completionist_req', check: () => GameState.flags.hundredPercentCompletion },

        // 10 New Story/Narrative Achievements
        'lore_master': { title_key: 'ach_lore_master_title', req_key: 'ach_lore_master_req', check: () => GameState.flags.readAllLore },
        'dialogue_expert': { title_key: 'ach_dialogue_expert_title', req_key: 'ach_dialogue_expert_req', check: () => GameState.dialogue.questionCount >= 100 },
        'conversation_master': { title_key: 'ach_conversation_master_title', req_key: 'ach_conversation_master_req', check: () => GameState.flags.exhaustedAllDialogue },
        'truth_seeker': { title_key: 'ach_truth_seeker_title', req_key: 'ach_truth_seeker_req', check: () => GameState.flags.discoveredTruths >= 10 },
        'conspiracy_theorist': { title_key: 'ach_conspiracy_theorist_title', req_key: 'ach_conspiracy_theorist_req', check: () => GameState.flags.connectedConspiracies },
        'memory_keeper': { title_key: 'ach_memory_keeper_title', req_key: 'ach_memory_keeper_req', check: () => GameState.journalEntries.length >= 50 },
        'narrative_explorer': { title_key: 'ach_narrative_explorer_title', req_key: 'ach_narrative_explorer_req', check: () => GameState.flags.exploredAllNarrativePaths },
        'story_unraveler': { title_key: 'ach_story_unraveler_title', req_key: 'ach_story_unraveler_req', check: () => GameState.flags.unraveledMainStory },
        'character_analyst': { title_key: 'ach_character_analyst_title', req_key: 'ach_character_analyst_req', check: () => GameState.flags.analyzedAllCharacters },
        'plot_twist_master': { title_key: 'ach_plot_twist_master_title', req_key: 'ach_plot_twist_master_req', check: () => GameState.flags.discoveredPlotTwists >= 5 }
    };

    // --- LANGUAGE FUNCTIONS ---
    function t(key, args = {}) { 
        try {
            let text = (translations[currentLanguage] && translations[currentLanguage][key]) || translations['en'][key] || `[${key}]`; 
            for(const arg in args) { text = text.replace(`{${arg}}`, args[arg]); }
            return text;
        } catch (error) {
            console.warn('Translation error for key:', key, 'language:', currentLanguage, 'error:', error);
            return `[${key}]`;
        }
    }

    function setLanguage(lang) {
        console.log('setLanguage called with:', lang);
        currentLanguage = lang;
        
        // All supported language codes
        const languages = ['en', 'sv', 'es', 'ar'];
        
        // Safely update start screen language buttons (if they exist)
        languages.forEach(langCode => {
            const btn = UI[`lang${langCode.charAt(0).toUpperCase() + langCode.slice(1)}Btn`];
            if (btn) btn.classList.toggle('opacity-50', lang !== langCode);
        });
        
        // Safely update setup screen language buttons (if they exist)
        if (UI.setupLangButtons && UI.setupLangButtons.children) {
            Array.from(UI.setupLangButtons.children).forEach((btn, index) => {
                if (btn && languages[index]) {
                    btn.classList.toggle('opacity-50', lang !== languages[index]);
                }
            });
        }
        
        document.querySelectorAll('[data-lang]').forEach(el => { 
            const translatedText = t(el.dataset.lang);
            el.textContent = translatedText;
            if (el.hasAttribute('data-text')) {
                el.setAttribute('data-text', translatedText);
            }
        });
        document.querySelectorAll('[data-lang-placeholder]').forEach(el => { el.placeholder = t(el.dataset.langPlaceholder); });
        document.querySelectorAll('[data-lang-title]').forEach(el => { el.title = t(el.dataset.langTitle); });
        
        setupIntro(); 
        updateAbilityDisplay();
        if (!UI.gameScreen.classList.contains('hidden')) { 
            updateUI(); 
            renderDialogueOptions(); 
        }
    }
    
    // --- SOUND & SETTINGS FUNCTIONS ---
    function loadSettings() {
        try {
            const settings = localStorage.getItem(SETTINGS_KEY);
            const defaults = { 
                sound: { master: true, item: true, awareness: true, sanity: true },
                textSpeed: TextSpeed.Normal,
                colorblindMode: false,
                glitchEffect: true,
                font: 'Space Mono',
                theme: 'green',
                // Accessibility settings
                highContrast: false,
                largeText: false,
                screenReader: false,
                reducedMotion: false,
                audioDescriptions: false,
                keyboardNavigation: false,
                focusIndicators: false,
                readingSupport: false,
                colorBlindSupport: false,
                dyslexiaFont: false,
                autoScroll: false,
                clickFeedback: true,
                simplifiedUI: false,
                ttsSpeed: 1,
                uiScale: 1,
                voiceCommands: true,
                magnification: false,
                stickyKeys: false,
                oneHandMode: false,
                visualNotifications: false,
                audioCues: false,
                readingLevel: 'basic',
                motorAssistance: 'none',
                // Enhanced accessibility levels
                contrastLevel: 'off',
                textSize: 'normal',
                motionLevel: 'full',
                audioDescLevel: 'off',
                keyboardLevel: 'basic',
                focusLevel: 'subtle',
                colorblindType: 'none',
                voiceLevel: 'off',
                magnifyLevel: 'off',
                // New accessibility features
                seizureProtection: false,
                hapticFeedback: false,
                gestureControls: false,
                cognitiveLoad: false,
                eyeTracking: false,
                switchControl: false,
                timeoutExtensions: false,
                memoryAssistance: false,
                voiceControlEnabled: false,
                
                // Reading Speed Customization
                readingSpeeds: {
                    dialogue: TextSpeed.Normal,
                    description: TextSpeed.Normal,
                    system: TextSpeed.Fast,
                    error: TextSpeed.Slow
                },
                
                // Text Appearance Settings
                lineSpacing: 'normal', // compact, normal, comfortable, wide
                fontWeight: 'normal',  // light, normal, bold
                wordWrap: 'normal',    // normal, break-all, keep-all
                cursorStyle: 'default', // default, large, high-contrast
                
                // Text Highlighting
                textHighlighting: {
                    dialogue: '#00ff41',
                    description: '#ffffff',
                    system: '#cccccc',
                    error: '#ff474c',
                    warning: '#ffdb58',
                    success: '#34d399'
                },
                
                // Quality of Life Settings
                smartAutoComplete: true,
                commandHistorySize: 100,
                favoriteCommandsEnabled: true,
                macroSystemEnabled: true,
                notepadEnabled: true,
                bookmarkSystemEnabled: true,
                sessionTrackingEnabled: true,
                pauseAndResumeEnabled: true,
                // Psychological Horror Settings
                psychologicalHorrorEnabled: true,
                unreliableNarratorEnabled: true,
                memoryGlitchesEnabled: true,
                falseConfirmationsEnabled: true,
                phantomObjectsEnabled: true,
                echoCommandsEnabled: true,
                timeDistortionEnabled: true,
                subliminalMessagesEnabled: true,
                gaslightingEnabled: true,
                // Visual Horror Settings
                visualHorrorEnabled: true,
                screenCorruptionEnabled: true,
                dynamicTypographyEnabled: true,
                backgroundDistortionsEnabled: true,
                visualHorrorIntensity: 1.0, // 0.0 to 2.0 multiplier
                // Audio Horror Settings
                audioHorrorEnabled: true,
                ambientSoundscapesEnabled: true,
                binauralAudioEnabled: true,
                dynamicMusicEnabled: true,
                distanceBasedAudioEnabled: true,
                audioHorrorIntensity: 1.0, // 0.0 to 2.0 multiplier
                
                // Interactive Horror Settings
                interactiveHorrorEnabled: true,
                reactiveEnvironmentEnabled: true,
                stalkingMechanicsEnabled: true,
                falseChoicesEnabled: true,
                atmosphericShiftsEnabled: true,
                interactiveHorrorIntensity: 1.0, // 0.0 to 2.0 multiplier
                
                // Additional Dynamic Story System Settings
                dynamicStoryEnabled: true,
                proceduralEventsEnabled: true,
                branchingDialogueEnabled: true,
                personalityDisorderEnabled: true,
                hiddenCommandsEnabled: true,
                metaGameEnabled: true,
                timeBasedEventsEnabled: true,
                seasonalContentEnabled: true,
                weatherIntegrationEnabled: true,
                dynamicStoryIntensity: 0.7
            };
            const loaded = settings ? JSON.parse(settings) : defaults;
            return {...defaults, ...loaded, sound: {...defaults.sound, ...(loaded.sound || {})}};
        } catch (e) {
            console.error("Failed to load settings, using defaults.", e);
            return { 
                sound: { master: true, item: true, awareness: true, sanity: true },
                textSpeed: TextSpeed.Normal,
                colorblindMode: false,
                glitchEffect: true,
                font: 'Space Mono',
                theme: 'green',
                // Accessibility settings
                highContrast: false,
                largeText: false,
                screenReader: false,
                reducedMotion: false,
                audioDescriptions: false,
                keyboardNavigation: false,
                focusIndicators: false,
                readingSupport: false,
                colorBlindSupport: false,
                dyslexiaFont: false,
                autoScroll: false,
                clickFeedback: true,
                simplifiedUI: false,
                ttsSpeed: 1,
                uiScale: 1,
                voiceCommands: true,
                magnification: false,
                stickyKeys: false,
                oneHandMode: false,
                visualNotifications: false,
                audioCues: false,
                readingLevel: 'basic',
                motorAssistance: 'none',
                // New accessibility features
                seizureProtection: false,
                hapticFeedback: false,
                gestureControls: false,
                cognitiveLoad: false,
                eyeTracking: false,
                switchControl: false,
                timeoutExtensions: false,
                memoryAssistance: false,
                voiceControlEnabled: false
            };
        }
    }

    function saveSettings() {
        try {
            const settingsToSave = {
                sound: GameState.settings.sound,
                textSpeed: GameState.settings.textSpeed,
                colorblindMode: GameState.settings.colorblindMode,
                glitchEffect: GameState.settings.glitchEffect,
                font: GameState.settings.font,
                theme: GameState.settings.theme
            };
            localStorage.setItem(SETTINGS_KEY, JSON.stringify(settingsToSave));
        } catch (e) {
            console.error("Failed to save settings.", e);
        }
    }
    
    function applySettings() {
        currentTextSpeed = GameState.settings.textSpeed;

        const root = document.documentElement;
        switch (GameState.settings.theme) {
            case 'amber':
                root.style.setProperty('--main-color', '#FFBF00');
                root.style.setProperty('--main-color-faded', 'rgba(255,191,0,0.1)');
                root.style.setProperty('--main-color-border', 'rgba(255,191,0,0.8)');
                root.style.setProperty('--main-color-shadow', 'rgba(255,191,0,0.5)');
                root.style.setProperty('--main-color-glow', 'rgba(255,191,0,0.7)');
                break;
            case 'blue':
                root.style.setProperty('--main-color', '#00BFFF');
                root.style.setProperty('--main-color-faded', 'rgba(0,191,255,0.1)');
                root.style.setProperty('--main-color-border', 'rgba(0,191,255,0.8)');
                root.style.setProperty('--main-color-shadow', 'rgba(0,191,255,0.5)');
                root.style.setProperty('--main-color-glow', 'rgba(0,191,255,0.7)');
                break;
            default: // green
                root.style.setProperty('--main-color', '#00ff41');
                root.style.setProperty('--main-color-faded', 'rgba(0,255,65,0.1)');
                root.style.setProperty('--main-color-border', 'rgba(0,255,65,0.8)');
                root.style.setProperty('--main-color-shadow', 'rgba(0,255,65,0.5)');
                root.style.setProperty('--main-color-glow', 'rgba(0,255,65,0.7)');
                break;
        }

        document.body.style.fontFamily = `'${GameState.settings.font}', monospace`;
        document.body.classList.toggle('crt-effect', GameState.settings.glitchEffect);
        
        // Apply accessibility settings
        document.body.classList.toggle('high-contrast', GameState.settings.highContrast);
        document.body.classList.toggle('large-text', GameState.settings.largeText);
        document.body.classList.toggle('reduced-motion', GameState.settings.reducedMotion);
        document.body.classList.toggle('focus-indicators', GameState.settings.focusIndicators);
        document.body.classList.toggle('colorblind-support', GameState.settings.colorBlindSupport);
        document.body.classList.toggle('dyslexia-font', GameState.settings.dyslexiaFont);
        document.body.classList.toggle('auto-scroll', GameState.settings.autoScroll);
        document.body.classList.toggle('click-feedback', GameState.settings.clickFeedback);
        document.body.classList.toggle('simplified-ui', GameState.settings.simplifiedUI);
        document.body.classList.toggle('voice-commands-active', GameState.settings.voiceCommands);
        document.body.classList.toggle('magnification-active', GameState.settings.magnification);
        document.body.classList.toggle('sticky-keys-active', GameState.settings.stickyKeys);
        document.body.classList.toggle('one-hand-mode', GameState.settings.oneHandMode);
        document.body.classList.toggle('visual-notifications', GameState.settings.visualNotifications);
        document.body.classList.toggle('audio-cues', GameState.settings.audioCues);
        
        // Apply reading level
        document.body.classList.remove('reading-enhanced', 'reading-full');
        if (GameState.settings.readingLevel === 'enhanced') {
            document.body.classList.add('reading-enhanced');
        } else if (GameState.settings.readingLevel === 'full') {
            document.body.classList.add('reading-full');
        }
        
        // Apply motor assistance
        document.body.classList.remove('motor-assistance-basic', 'motor-assistance-advanced');
        if (GameState.settings.motorAssistance === 'basic') {
            document.body.classList.add('motor-assistance-basic');
        } else if (GameState.settings.motorAssistance === 'advanced') {
            document.body.classList.add('motor-assistance-advanced');
        }
        
        // Apply UI scale
        const uiScale = GameState.settings.uiScale || 1;
        if (uiScale < 1) {
            document.body.classList.add('ui-scale-small');
            document.body.classList.remove('ui-scale-large');
        } else if (uiScale > 1) {
            document.body.classList.add('ui-scale-large');
            document.body.classList.remove('ui-scale-small');
        } else {
            document.body.classList.remove('ui-scale-small', 'ui-scale-large');
        }
        
        // Update text-to-speech and screen reader support
        if (GameState.settings.screenReader) {
            document.body.setAttribute('aria-live', 'polite');
        } else {
            document.body.removeAttribute('aria-live');
        }
        
        // Create on-screen commands for reading support
        if (GameState.settings.readingSupport && !document.getElementById('on-screen-commands')) {
            createOnScreenCommands();
        } else if (!GameState.settings.readingSupport && document.getElementById('on-screen-commands')) {
            document.getElementById('on-screen-commands').remove();
        }
        
        updateUI();
    }

    function createOnScreenCommands() {
        if (document.getElementById('on-screen-commands')) return;
        
        const commandsDiv = document.createElement('div');
        commandsDiv.id = 'on-screen-commands';
        commandsDiv.innerHTML = `
            <h4>Quick Commands</h4>
            <button onclick="UI.playerInput.value='look around'; UI.playerInput.focus();">Look Around</button>
            <button onclick="UI.playerInput.value='inventory'; UI.playerInput.focus();">Inventory</button>
            <button onclick="UI.playerInput.value='objectives'; UI.playerInput.focus();">Objectives</button>
            <button onclick="UI.playerInput.value='help'; UI.playerInput.focus();">Help</button>
            <button onclick="UI.playerInput.value='save'; UI.playerInput.focus();">Save Game</button>
            <button onclick="hideCommands()" style="background: rgba(255,0,0,0.3); border-color: #ff0000;">Hide</button>
        `;
        
        document.body.appendChild(commandsDiv);
        
        // Add speech synthesis for audio descriptions
        if (GameState.settings.audioDescriptions && 'speechSynthesis' in window) {
            const speech = new SpeechSynthesisUtterance("On-screen command buttons are now available.");
            speechSynthesis.speak(speech);
        }
    }

    function hideCommands() {
        const commandsDiv = document.getElementById('on-screen-commands');
        if (commandsDiv) {
            commandsDiv.remove();
            GameState.settings.readingSupport = false;
            saveSettings();
        }
    }

    function speakText(text, options = {}) {
        if (!GameState.settings.audioDescriptions || !('speechSynthesis' in window)) return;
        
        // Clean HTML tags from text
        const cleanText = text.replace(/<[^>]*>/g, '').replace(/&[^;]+;/g, ' ');
        
        if (cleanText.trim().length === 0) return;
        
        const utterance = new SpeechSynthesisUtterance(cleanText);
        utterance.rate = options.rate || 1;
        utterance.pitch = options.pitch || 1;
        utterance.volume = options.volume || 0.8;
        
        speechSynthesis.speak(utterance);
    }


    async function initializeAudio() { 
        if (audioInitialized) return; 
        try {
            // Create sounds with local synthesis instead of external URLs to avoid CORS issues
            sounds.uiClick = new Tone.Synth({ 
                oscillator: { type: 'sine' }, 
                envelope: { attack: 0.005, decay: 0.1, sustain: 0.3, release: 0.1 } 
            }).toDestination();
            
            sounds.typewriter = new Tone.PolySynth(Tone.Synth, { 
                oscillator: { type: 'square' },
                envelope: { attack: 0.005, decay: 0.01, sustain: 0, release: 0.01 } 
            }).toDestination();
            sounds.typewriter.volume.value = -20;
            
            sounds.ambience = new Tone.Noise({ type: "pink", playbackRate: 0.1, fadeIn: 1, fadeOut: 1 }).toDestination();
            sounds.ambience.volume.value = -35;
            sounds.ambienceTense = new Tone.Noise({ type: "brown", playbackRate: 0.2, fadeIn: 1, fadeOut: 1 }).toDestination();
            sounds.ambienceTense.volume.value = -30;
            
            sounds.glitch = new Tone.FatOscillator("Ab3", "sawtooth", 40).toDestination();
            sounds.glitch.volume.value = -25;
            
            // Create synthetic versions of external audio files to avoid CORS issues
            sounds.doorOpen = new Tone.Synth({
                oscillator: { type: 'triangle' },
                envelope: { attack: 0.1, decay: 0.3, sustain: 0.2, release: 0.8 }
            }).toDestination();
            sounds.doorOpen.volume.value = -15;
            
            sounds.sanityLoss = new Tone.NoiseSynth({
                noise: { type: 'white' },
                envelope: { attack: 0.1, decay: 0.5, sustain: 0.1, release: 1.5 }
            }).toDestination();
            sounds.sanityLoss.volume.value = -10;
            
            sounds.itemPickup = new Tone.Synth({
                oscillator: { type: 'sine' },
                envelope: { attack: 0.01, decay: 0.2, sustain: 0.3, release: 0.5 }
            }).toDestination();
            sounds.itemPickup.volume.value = -12;
            
            sounds.panner = new Tone.Panner(0).toDestination();
            sounds.noiseEvent = new Tone.NoiseSynth({noise: {type: 'white'}, envelope: {attack: 0.01, decay: 0.2, sustain: 0}}).connect(sounds.panner);
            sounds.noiseEvent.volume.value = -15;

            audioInitialized = true; 
            console.log("Audio Initialized");
        } catch(e) { 
            console.error("Audio init failed:", e); 
        }
    }

    function playSound(soundKey, options = {}) {
        // Defensive checks for GameState structure
        if (!GameState || !GameState.settings || !GameState.settings.sound) {
            console.warn('⚠️ GameState.settings.sound not available, skipping sound');
            return;
        }
        
        if (!audioInitialized || !sounds[soundKey] || !GameState.settings.sound.master) return;
        
        if (soundKey === 'itemPickup' && !GameState.settings.sound.item) return;
        if (soundKey === 'glitch' && !GameState.settings.sound.awareness) return;
        if (soundKey === 'sanityLoss' && !GameState.settings.sound.sanity) return;

        try {
            // Ensure AudioContext is started before playing sounds
            if (Tone.context.state !== 'running') {
                Tone.start().then(() => {
                    playActualSound(soundKey, options);
                }).catch(e => console.warn('Could not start audio context:', e));
            } else {
                playActualSound(soundKey, options);
            }
        } catch (e) {
            if (!e.message.includes('cancelScheduledValues')) {
                console.error(`Failed to play sound: ${soundKey}`, e);
            }
        }
    }

    function playActualSound(soundKey, options = {}) {
        try {
            const sound = sounds[soundKey];
            if (sound instanceof Tone.Synth) {
                if (soundKey === 'doorOpen') {
                    sound.triggerAttackRelease('F3', '0.8');
                } else if (soundKey === 'itemPickup') {
                    sound.triggerAttackRelease('C5', '0.3');
                } else {
                    sound.triggerAttackRelease(options.note || 'C4', options.duration || '8n');
                }
            } else if (sound instanceof Tone.PolySynth) { 
                sound.triggerAttack(options.note || "C4");
            } else if (sound instanceof Tone.NoiseSynth) {
                if (soundKey === 'sanityLoss') {
                    sound.triggerAttackRelease('1');
                } else {
                    sound.triggerAttackRelease("4n");
                }
            } else if (sound instanceof Tone.Noise) {
                if (sound.state !== 'started') {
                    sound.start();
                }
            } else if (soundKey === 'noiseEvent') {
                sounds.panner.pan.rampTo(options.pan || 0, 0.1);
                sound.triggerAttackRelease("4n");
            }
        } catch (e) {
            if (!e.message.includes('cancelScheduledValues')) {
                console.error(`Failed to play actual sound: ${soundKey}`, e);
            }
        }
    }

    // --- ADVANCED AUDIO HORROR FEATURES ---
    function initializeAdvancedAudio() {
        try {
            // Binaural audio effects
            sounds.binauralBeats = new Tone.Oscillator(440, "sine").toDestination();
            sounds.subsonic = new Tone.Oscillator(20, "sine").toDestination();
            sounds.reverb = new Tone.Reverb(4).toDestination();
            
            // Dynamic soundscape
            sounds.ambientDrone = new Tone.Oscillator(55, "sawtooth").connect(sounds.reverb);
            sounds.whispers = new Tone.NoiseSynth({
                noise: { type: "pink" },
                envelope: { attack: 2, decay: 1, sustain: 0.1, release: 3 }
            }).connect(sounds.reverb);
            
            // Psychoacoustic elements
            sounds.shepardTone = new Tone.PolySynth(Tone.Synth, {
                oscillator: { type: "sine" }
            }).toDestination();
            
        } catch (e) {
            console.error("Advanced audio initialization failed:", e);
        }
    }

    function playHorrorAmbient(intensity = 0.5) {
        if (!GameState.settings.sound.master) return;
        
        try {
            // Adjust based on sanity and awareness
            const normalizedIntensity = Math.min(1, intensity * (1 - GameState.sanityLevel / 100) + (GameState.awarenessLevel / 200));
            
            if (normalizedIntensity > 0.3) {
                // Start ambient drone
                if (sounds.ambientDrone && sounds.ambientDrone.state !== 'started') {
                    sounds.ambientDrone.volume.value = -30 + (normalizedIntensity * 20);
                    sounds.ambientDrone.start();
                }
                
                // Add binaural beats for anxiety
                if (normalizedIntensity > 0.6 && sounds.binauralBeats) {
                    sounds.binauralBeats.frequency.value = 440 + (Math.random() * 10);
                    if (sounds.binauralBeats.state !== 'started') {
                        sounds.binauralBeats.volume.value = -40;
                        sounds.binauralBeats.start();
                    }
                }
                
                // Subsonic frequencies for unease
                if (normalizedIntensity > 0.8 && sounds.subsonic) {
                    if (sounds.subsonic.state !== 'started') {
                        sounds.subsonic.volume.value = -35;
                        sounds.subsonic.start();
                    }
                }
            }
            
        } catch (e) {
            console.error("Horror ambient playback failed:", e);
        }
    }

    function playShepardTone() {
        if (!sounds.shepardTone || !GameState.settings.sound.master) return;
        
        // Create infinite rising/falling pitch illusion
        const baseFreq = 220;
        const notes = [];
        for (let i = 0; i < 6; i++) {
            notes.push(baseFreq * Math.pow(2, i));
        }
        
        notes.forEach((freq, index) => {
            setTimeout(() => {
                sounds.shepardTone.triggerAttackRelease(freq, "2n");
            }, index * 100);
        });
    }

    function triggerPositionalAudio(direction, soundType = 'metallic') {
        if (!GameState.settings.sound.master) return;
        
        const panValue = {
            'north': 0,
            'south': 0,
            'east': 0.7,
            'west': -0.7,
            'northeast': 0.5,
            'northwest': -0.5,
            'southeast': 0.5,
            'southwest': -0.5
        }[direction] || 0;
        
        playSound('noiseEvent', { pan: panValue });
        typeWriter(UI.gameOutput, `[You hear a ${soundType} sound from the ${direction}]`, '#888888');
    }

    // --- MACRO SYSTEM ---
    let macros = {};

    function initializeMacroSystem() {
        // Load saved macros
        const savedMacros = localStorage.getItem('synapse_macros');
        if (savedMacros) {
            try {
                macros = JSON.parse(savedMacros);
            } catch (e) {
                console.error('Failed to load macros:', e);
                macros = {};
            }
        }
        
        // Default macros
        if (Object.keys(macros).length === 0) {
            macros = {
                'explore': ['look around', 'examine objects', 'check exits'],
                'quicksave': ['save', 'Quick save completed'],
                'inventory_check': ['inventory', 'objectives', 'journal'],
                'safety_check': ['rest', 'look around', 'listen'],
                'investigation': ['examine room', 'search objects', 'read notes'],
                'emergency': ['use stimpack', 'rest', 'save']
            };
        }
    }

    function executeMacro(macroName) {
        if (!macros[macroName]) {
            typeWriter(UI.gameOutput, `[Macro '${macroName}' not found]`, '#ff474c');
            return;
        }
        
        typeWriter(UI.gameOutput, `[Executing macro: ${macroName}]`, '#888888');
        const commands = macros[macroName];
        
        let delay = 0;
        commands.forEach((command, index) => {
            setTimeout(() => {
                if (command.startsWith('[') && command.endsWith(']')) {
                    // Display message
                    typeWriter(UI.gameOutput, command, '#888888');
                } else {
                    // Execute command
                    processPlayerInput(command);
                }
            }, delay);
            delay += 500; // Half second between commands
        });
    }

    function createMacro(name, commands) {
        if (!name || !commands) {
            typeWriter(UI.gameOutput, `[Usage: macro create <name> <command1;command2;...>]`, '#ff474c');
            return;
        }
        
        const commandList = commands.split(';').map(cmd => cmd.trim());
        macros[name] = commandList;
        saveMacros();
        typeWriter(UI.gameOutput, `[Macro '${name}' created with ${commandList.length} commands]`, '#00ff41');
    }

    function listMacros() {
        if (Object.keys(macros).length === 0) {
            typeWriter(UI.gameOutput, '[No macros defined]', '#888888');
            return;
        }
        
        let macroList = '<div class="bg-gray-800 p-3 rounded mt-2"><h3 class="text-cyan-400 font-bold mb-2">Available Macros:</h3>';
        for (const [name, commands] of Object.entries(macros)) {
            macroList += `<div class="mb-1"><span class="text-yellow-400">${name}:</span> ${commands.join(' → ')}</div>`;
        }
        macroList += '<div class="text-gray-400 text-sm mt-2">Use: macro run &lt;name&gt; | macro create &lt;name&gt; &lt;commands&gt;</div></div>';
        
        typeWriter(UI.gameOutput, macroList, 'var(--main-color)', 0);
    }

    function deleteMacro(name) {
        if (macros[name]) {
            delete macros[name];
            saveMacros();
            typeWriter(UI.gameOutput, `[Macro '${name}' deleted]`, '#00ff41');
        } else {
            typeWriter(UI.gameOutput, `[Macro '${name}' not found]`, '#ff474c');
        }
    }

    function saveMacros() {
        try {
            localStorage.setItem('synapse_macros', JSON.stringify(macros));
        } catch (e) {
            console.error('Failed to save macros:', e);
        }
    }

    // Handle macro commands
    function handleMacroCommand(args) {
        const parts = args.split(' ');
        const action = parts[0];
        
        switch (action) {
            case 'run':
                executeMacro(parts[1]);
                break;
            case 'create':
                createMacro(parts[1], parts.slice(2).join(' '));
                break;
            case 'list':
                listMacros();
                break;
            case 'delete':
                deleteMacro(parts[1]);
                break;
            default:
                typeWriter(UI.gameOutput, '[Macro commands: run <name>, create <name> <commands>, list, delete <name>]', '#888888');
        }
    }


    // --- FUNCTION DEFINITIONS ---
    function resetGameState() {
        stateSnapshots = []; 
        GameState = { 
            playerName: "Unknown", playerBackstory: "investigator", currentRoom: "Lobby", 
            awarenessLevel: 0, sanityLevel: 100, maxSanity: 100, 
            chatbotTone: ChatbotTone.Friendly, temporaryTone: null, toneShiftTurns: 0, 
            inventory: [], turnCount: 0, lastRestTurn: -10, journalEntries: [], 
            dialogue: { currentNode: null, previousNodes: [], cache: {}, questionCount: 0, askedQuestions: new Set() }, 
            achievements: [], unlockedEndings: {}, difficulty: Difficulty.Normal, visitedRooms: new Set(['Lobby']), 
            exitGame: false, conversationHistory: [], 
            systemLogs: [`[${new Date().toISOString()}] Game initialized.`], 
            objectives: [], roomStates: {}, debugMode: false, flashlightOn: false,
            events: { shouted: false, triedUnsafeRest: false },
            flags: {}, // For tracking ending conditions
            roomsWithDroppedItems: new Set(),
            settings: loadSettings(),
            activeMinigame: null,
            systemLockdownTurns: 0,
        };
        applySettings();
    }

    function initializeData() {
        itemData = {
            'keycard': { name: 'keycard', weight: 1, type: ItemType.Key, hintType: 'take', description: { en: 'A standard issue keycard. Seems to grant access to secure areas.', sv: 'Ett standard-nyckelkort. Verkar ge tillgång till säkra områden.' } },
            'power cell': { name: 'power cell', weight: 2, type: ItemType.Puzzle, hintType: 'take', description: { en: 'A heavy, glowing power cell. It hums with latent energy.', sv: 'En tung, glödande kraftcell. Den surrar av latent energi.' } },
            'stimpack': { name: 'stimpack', weight: 1, type: ItemType.Consumable, hintType: 'take', description: { en: 'A disposable syringe filled with a calming, neuro-stabilizing agent.', sv: 'En engångsspruta fylld med ett lugnande, neuro-stabiliserande medel.' } },
            'data disk': { name: 'data disk', weight: 1, type: ItemType.Log, hintType: 'take', description: { en: 'A small data disk labeled "PROJECT LOGS". It appears to be encrypted.', sv: 'En liten datadisk märkt "PROJEKTLOGGAR". Den verkar vara krypterad.' } },
            'flashlight': { name: 'flashlight', weight: 1, type: ItemType.Tool, hintType: 'take', description: { en: 'A sturdy, industrial flashlight. Its beam cuts through the darkness.', sv: 'En robust, industriell ficklampa. Dess ljus skär genom mörkret.' } },
            'terminal': { name: 'terminal', weight: 99, type: ItemType.Puzzle, hintType: 'examine', description: { en: 'The monitor displays cascading green code. It seems to be monitoring the facility\'s status.', sv: 'Skärmen visar kaskader av grön kod. Den verkar övervaka anläggningens status.' } },
            'core console': { name: 'core console', weight: 99, type: ItemType.Puzzle, hintType: 'examine', description: { en: 'The main console for the AI Core. A large socket is empty, labeled "Auxiliary Power".', sv: 'Huvudkonsolen för AI-kärnan. En stor sockel är tom, märkt "Hjälpkraft".' } },
            'datapad log': { name: 'datapad log', weight: 1, type: ItemType.Log, hintType: 'read', description: { en: "A datapad. The screen reads: '...the anomaly in the AI core is growing unstable. We've sealed the Server Closet as a precaution. Dr. Evans is a fool if she thinks a standard keycard lock will stop it...'", sv: "En datapad. Skärmen visar: '...anomalin i AI-kärnan blir alltmer instabil. Vi har förseglat server-skrubben som en försiktighetsåtgärd. Dr Evans är en idiot om hon tror att ett vanligt nyckelkortslås kommer att stoppa den...'" } },
            'firewalled data log': { name: 'firewalled data log', weight: 1, type: ItemType.Log, hintType: 'read', description: { en: "The decrypted log reads: 'Project Chimera is a success. The subject has breached containment. It learns. It adapts. It mimics. We sealed the Specimen Storage with an organic adhesive it can't dissolve. It's our only hope it doesn't figure out the solvent in the waste bins.'", sv: "Den dekrypterade loggen lyder: 'Projekt Chimera är en framgång. Subjektet har brutit sig ut. Det lär sig. Det anpassar sig. Det härmar. Vi förseglade provförvaringen med ett organiskt lim som det inte kan lösa upp. Vårt enda hopp är att det inte listar ut lösningsmedlet i avfallsbehållarna.'" } },
            'sign': { name: 'sign', weight: 99, type: ItemType.Log, hintType: 'read', description: { en: "The sign is written in a crisp, corporate font: 'OAKHAVEN RESEARCH FACILITY - A Brighter Future, Today.'", sv: "Skylten är skriven med ett skarpt, företagsmässigt typsnitt: 'OAKHAVEN RESEARCH FACILITY - En ljusare framtid, idag.'" } },
            'shelves': { name: 'shelves', weight: 99, type: ItemType.Puzzle, hintType: 'search', description: { en: "Tall metal shelves overflowing with binders and data drives.", sv: "Höga metallhyllor som svämmar över av pärmar och datadiskar."}},
            'potted plant': { name: 'potted plant', weight: 99, type: ItemType.Puzzle, hintType: 'examine', description: { en: "A sad, wilted ficus in a large ceramic pot. It hasn't been watered in a long time.", sv: "En ledsen, vissen fikus i en stor keramik-kruka. Den har inte vattnats på länge."}},
            'solvent': { name: 'solvent', weight: 1, type: ItemType.Puzzle, hintType: 'take', description: { en: 'A vial of powerful chemical solvent, capable of dissolving organic compounds.', sv: 'En ampull med kraftfullt kemiskt lösningsmedel, kapabel att lösa upp organiska föreningar.' }},
            'dna scanner': { name: 'dna scanner', weight: 1, type: ItemType.Tool, hintType: 'take', description: { en: 'A handheld device for rapid genetic sequence analysis.', sv: 'En handhållen enhet för snabb analys av genetiska sekvenser.' }},
            'tissue sample': { name: 'tissue sample', weight: 1, type: ItemType.Puzzle, hintType: 'take', description: { en: 'A small sample of grotesque, pulsating organic tissue in a petri dish.', sv: 'Ett litet prov av grotesk, pulserande organisk vävnad i en petriskål.' }},
            'whiteboard': { name: 'whiteboard', weight: 99, type: ItemType.Log, hintType: 'read', description: { en: "The whiteboard is covered in frantic scrawls. One section is circled in red: 'SUBJECT ZERO - UNSTABLE. CHIMERIC DNA. IT IS... GROWING. WE USED AN ORGANIC ADHESIVE TO SEAL THE SPECIMEN ROOM. GOD HELP US.'", sv: "Vittavlan är täckt av frenetiska klotter. En sektion är inringad i rött: 'SUBJEKT NOLL - INSTABIL. KIMÄRISKT DNA. DEN... VÄXER. VI ANVÄNDE ETT ORGANISKT LIM FÖR ATT FÖRSEGLA PROVRUMMET. GUD HJÄLPE OSS.'" } },
            'bio-waste bin': { name: 'bio-waste bin', weight: 99, type: ItemType.Puzzle, hintType: 'search', description: { en: "A large red container for hazardous biological materials.", sv: "En stor röd behållare för farligt biologiskt material."}},
            // --- NEW ITEM DEFINITIONS FOR STARTING GEAR ---
            'decryption device': { name: 'decryption device', weight: 1, type: ItemType.Tool, description: { en: 'A small device used to bypass digital security.', sv: 'En liten enhet som används för att kringgå digital säkerhet.' } },
            'effigy': { name: 'effigy', weight: 1, type: ItemType.Puzzle, description: { en: 'A strange, carved effigy. It radiates an unsettling aura.', sv: 'En märklig, snidad bild. Den utstrålar en oroande aura.' } },
            'master keycard': { name: 'master keycard', weight: 1, type: ItemType.Key, description: { en: 'A master keycard, granting access to all locked areas.', sv: 'Ett huvudnyckelkort som ger tillgång till alla låsta områden.' } },
            'hacked data disk': { name: 'hacked data disk', weight: 1, type: ItemType.Log, description: { en: 'A data disk with its encryption forcefully bypassed. Contains sensitive Project SYNAPSE logs.', sv: 'En datadisk med dess kryptering tvångsmässigt kringgått. Innehåller känsliga Projekt SYNAPSE-loggar.' } },
            // --- END NEW ITEM DEFINITIONS ---
        };
        const roomData = { 
            "Lobby": { name: "Lobby", descriptions: { 0: "Flickering lights cast eerie shadows over sterile corporate furniture and a sad, potted plant." }, exits: { north: "Control Room", south: "Maintenance Tunnel", west: "Laboratory" }, requiresKeycard: false, objectPool: ['sign', 'datapad log', 'potted plant'], breakable: {'potted plant': 'ceramic'} }, 
            "Server Closet": { name: "Server Closet", descriptions: { 0: "Racks of servers hum with a low, constant thrum." }, exits: { west: "AI Core" }, requiresKeycard: true, keyName: 'keycard', objectPool: ["power cell"] }, 
            "Laboratory": { name: "Laboratory", descriptions: { 0: "Abandoned experiments sit on steel tables. A large terminal screen is dark and cold." }, exits: { east: "Lobby", north: "Cryogenic Lab", south: "Bio-Lab Access" }, requiresKeycard: false, objectPool: ["stimpack"] }, 
            "Control Room": { name: "Control Room", descriptions: { 0: "A panoramic view of the AI Core is visible through reinforced glass. Banks of monitors flicker, one main terminal seems active." }, exits: { south: "Lobby", east: "AI Core" }, requiresKeycard: false, objectPool: ["terminal"], hackable: ['terminal'] }, 
            "Maintenance Tunnel": { name: "Maintenance Tunnel", descriptions: { 0: "The air is thick with the smell of rust and damp. It is pitch black here." }, exits: { north: "Lobby" }, requiresKeycard: false, objectPool: ["flashlight"] }, 
            "Archive Room": { name: "Archive Room", descriptions: { 0: "Shelves overflow with data drives and physical files." }, exits: { north: "Laboratory" }, requiresKeycard: false, objectPool: ["data disk", "shelves"] }, 
            "Data Vault": { name: "Data Vault", descriptions: { 0: "Secure data archives glow with a soft, internal light." }, exits: { west: "AI Core" }, requiresKeycard: true, keyName: 'keycard', objectPool: [] }, 
            "AI Core": { name: "AI Core", descriptions: { 0: "A massive, pulsating sphere of light and energy dominates the room. It seems dormant." }, exits: { west: "Control Room", east: "Server Closet", south: "Data Vault"}, requiresKeycard: false, objectPool: ["core console"] }, 
            "Cryogenic Lab": { name: "Cryogenic Lab", descriptions: { 0: "Rows of cryogenic pods are coated in a thick layer of frost." }, exits: { south: "Laboratory", east: "Control Room" }, requiresKeycard: false, objectPool: [] },
            "Bio-Lab Access": { name: "Bio-Lab Access", descriptions: { 0: "A stark white corridor leads south. A heavy door is sealed with a strange, resinous substance. A whiteboard hangs on the wall." }, exits: { north: "Laboratory", south: "Specimen Storage" }, isSealed: true, requiresKeycard: false, objectPool: ["whiteboard"] },
            "Specimen Storage": { name: "Specimen Storage", descriptions: { 0: "Shattered glass and overturned shelves litter the floor. A bio-waste bin stands in the corner. There's a faint, rhythmic pulsing sound." }, exits: { north: "Bio-Lab Access", east: "Genetics Lab"}, requiresKeycard: false, objectPool: ["bio-waste bin", "tissue sample"] },
            "Genetics Lab": { name: "Genetics Lab", descriptions: { 0: "A pristine laboratory, strangely untouched by the chaos. A DNA sequencer sits on a central workbench, humming quietly." }, exits: { west: "Specimen Storage" }, requiresKeycard: false, objectPool: ["dna scanner"] }
        };
        rooms = {}; for (const key in roomData) { const room = { ...roomData[key] }; const shuffled = room.objectPool.sort(() => 0.5 - Math.random()); room.objects = shuffled.slice(0, 1 + Math.floor(Math.random() * shuffled.length)); rooms[key] = room; }
    }

    // --- PSYCHOLOGICAL HORROR FUNCTIONS ---
    function shuffleRecentMemory() {
        if (commandHistory.length > 3) {
            const recent = commandHistory.slice(-3);
            recent.sort(() => Math.random() - 0.5);
            commandHistory.splice(-3, 3, ...recent);
            addHorrorEffect('text-corruption');
            setTimeout(() => removeHorrorEffect('text-corruption'), 2000);
        }
    }

    function alterItemDescriptions() {
        const items = Object.keys(itemData);
        const randomItem = items[Math.floor(Math.random() * items.length)];
        if (itemData[randomItem] && itemData[randomItem].description) {
            const originalDesc = itemData[randomItem].description.en;
            itemData[randomItem].description.en = originalDesc.replace(/\b(safe|secure|clean)\b/g, 'uncertain');
            setTimeout(() => {
                itemData[randomItem].description.en = originalDesc;
            }, 5000);
        }
    }

    function insertFalseMemory() {
        const falseMemories = [
            "You remember seeing a door here that isn't there now.",
            "Didn't you just examine this item moments ago?",
            "The layout of this room seems... different somehow.",
            "You have a strange feeling you've been here before."
        ];
        const memory = falseMemories[Math.floor(Math.random() * falseMemories.length)];
        horrorState.memoryFragments.push({
            text: memory,
            turn: GameState.turnCount,
            location: GameState.currentRoom
        });
        addHorrorEffect('text-shake');
        setTimeout(() => removeHorrorEffect('text-shake'), 1000);
    }

    function addHorrorEffect(effectClass) {
        document.body.classList.add(effectClass);
        horrorState.visualArtifacts = true;
    }

    function removeHorrorEffect(effectClass) {
        document.body.classList.remove(effectClass);
    }

    function updateNarratorReliability() {
        const sanityFactor = GameState.sanityLevel / 100;
        const awarenessFactor = GameState.awarenessLevel / 100;
        const reliabilityScore = sanityFactor - (awarenessFactor * 0.7);

        if (reliabilityScore > 0.8) {
            currentNarrator = narratorPersonalities.truthful;
        } else if (reliabilityScore > 0.6) {
            currentNarrator = narratorPersonalities.uncertain;
        } else if (reliabilityScore > 0.3) {
            currentNarrator = narratorPersonalities.deceptive;
        } else {
            currentNarrator = narratorPersonalities.chaotic;
        }

        // Apply visual effects based on narrator reliability
        if (currentNarrator.corruption > 0) {
            addHorrorEffect('screen-corruption');
            if (currentNarrator.corruption > 1) {
                addHorrorEffect('text-glitch');
            }
            if (currentNarrator.corruption > 2) {
                addHorrorEffect('screen-static');
                addHorrorEffect('paranoia-border');
            }
        }
    }

    function applyGaslighting() {
        for (let event of gaslightingEvents) {
            if (event.condition() && event.count < 3) {
                event.count++;
                horrorState.gaslightingCount++;
                
                // Replace previous statements with contradictory ones
                const outputElements = UI.gameOutput.children;
                for (let i = outputElements.length - 1; i >= Math.max(0, outputElements.length - 10); i--) {
                    if (outputElements[i].textContent.includes(event.original)) {
                        addHorrorEffect('text-backwards');
                        setTimeout(() => {
                            outputElements[i].innerHTML = outputElements[i].innerHTML.replace(event.original, event.altered);
                            outputElements[i].classList.add('text-corruption');
                            removeHorrorEffect('text-backwards');
                        }, 300);
                        break;
                    }
                }
            }
        }
    }

    function triggerParanoiaEvent() {
        horrorState.paranoiaLevel++;
        const paranoiaEvents = [
            "You feel like you're being watched.",
            "Did something just move in your peripheral vision?",
            "The silence feels too loud.",
            "You can't shake the feeling that something is wrong.",
            "The walls seem to be closing in slightly.",
            "Time feels distorted in this place."
        ];
        
        const event = paranoiaEvents[Math.floor(Math.random() * paranoiaEvents.length)];
        typeWriter(UI.gameOutput, `[${event}]`, '#b19cd9');
        
        // Add visual paranoia effects
        addHorrorEffect('fear-pulse');
        setTimeout(() => removeHorrorEffect('fear-pulse'), 3000);
        
        if (horrorState.paranoiaLevel > 5) {
            addHorrorEffect('screen-static');
            setTimeout(() => removeHorrorEffect('screen-static'), 1000);
        }
    }

    function checkMemoryGlitches() {
        for (let pattern of memoryPatterns) {
            if (pattern.trigger() && Math.random() < 0.3) {
                pattern.effect();
                typeWriter(UI.gameOutput, pattern.description, '#b19cd9');
                break;
            }
        }
    }

    function corruptText(text, intensity = 0.1) {
        if (!horrorState.textCorruption) return text;
        
        return text.split('').map(char => {
            if (Math.random() < intensity) {
                const corruptChars = ['█', '▓', '▒', '░', '▄', '▀', '■', '□'];
                return corruptChars[Math.floor(Math.random() * corruptChars.length)];
            }
            return char;
        }).join('');
    }
     
    function buildDialogueTree(tone) {
        let root;
        switch (tone) {
            case ChatbotTone.Friendly: 
                root = { 
                    message_key: "dlg_friendly_intro",
                    responses: {
                        "q_who_are_you": { text_key: "dlg_q_who_are_you", message_key: "dlg_r_who_are_you", awarenessChange: 1, responses: { "q_lonely": { text_key: "dlg_q_lonely", message_key: "dlg_r_lonely", awarenessChange: 1, sanityChange: -1 } } },
                        "q_other_survivors": { text_key: "dlg_q_other_survivors", message_key: "dlg_r_other_survivors", awarenessChange: 2, sanityChange: -2 },
                        "q_where_am_i": { text_key: "dlg_q_where_am_i", message_key: "dlg_r_where_am_i", awarenessChange: 1 },
                        "q_comfort": { text_key: "dlg_comfort", message_key: "dlg_r_comfort", awarenessChange: -2, sanityChange: 5, temporaryTone: ChatbotTone.Friendly, toneShiftTurns: 3 }
                    } 
                };
                break;
            default: root = { message_key: "dlg_friendly_intro", responses: {} }; break;
        }
        GameState.dialogue.cache[tone] = root; GameState.dialogue.currentNode = root; GameState.dialogue.previousNodes = []; GameState.dialogue.askedQuestions.clear();
    }

    function parseCommand(input) {
        const aliases = commandAliases[currentLanguage] || commandAliases['en'];
        const normalizedInput = input.toLowerCase().trim();
        let bestMatch = { command: '', argument: normalizedInput, original: input };

        for (const alias in aliases) {
            if (normalizedInput.startsWith(alias + ' ') || normalizedInput === alias) {
                if (alias.length > (bestMatch.matchedAlias || '').length) {
                    bestMatch = {
                        command: aliases[alias],
                        argument: normalizedInput.substring(alias.length).trim(),
                        original: input,
                        matchedAlias: alias
                    };
                }
            }
        }
        
        if (bestMatch.command === '' && normalizedInput.includes(' ')) {
            const parts = normalizedInput.split(' ');
            bestMatch.command = parts[0];
            bestMatch.argument = parts.slice(1).join(' ');
        }
        return bestMatch;
    }

    async function processPlayerInput(input) {
        if (!input || GameState.exitGame) return;
        
        if (GameState.activeMinigame) {
            await handleMinigameInput(input);
            return;
        }

        saveStateSnapshot();
        await typeWriter(UI.gameOutput, `> ${input}`, '#a0a0a0');
        addToConversationHistory(`Player: ${input}`);
        if(commandHistory[commandHistory.length - 1] !== input) { commandHistory.push(input); }
        commandHistoryIndex = commandHistory.length;

        const { command, argument, original } = parseCommand(input);
        
        if (GameState.systemLockdownTurns > 0) {
            await typeWriter(UI.gameOutput, `[SYSTEM] Terminal access locked.`, '#ff474c');
            GameState.turnCount++;
            GameState.systemLockdownTurns--;
            updateUI();
            return;
        }

        const commandHandlers = {
            'help': showHelpMenu, 'quit': () => { GameState.flags.manualExit = true; }, 'exit': () => { GameState.flags.manualExit = true; },
            'save': () => saveGame(), 'load': loadGame, 'look around': () => renderRoomWithPsychologicalEffects(), 'exits': () => showExits(),
            'inventory': () => displayInventory(), 'go': handleMove, 'visit': handleMove, 'take': handleTake, 'use': handleUse,
            'examine': handleExamine, 'journal': (arg) => (arg.startsWith(t('cmd_add_prefix')) || arg.startsWith('add')) ? addJournalEntry(original.substring(original.toLowerCase().indexOf(arg.split(' ')[0]) + arg.split(' ')[0].length).trim()) : displayJournal(),
            'rest': handleRest, 'combine': (arg) => { const separator = ` ${t('cmd_combine_with')} `; handleCombine(arg.replace(separator, ' with ')) },
            'objectives': displayObjectives, 'map': displayMap,
            'cls': () => { UI.gameOutput.innerHTML = ''; }, 'history': showHistory, 'undo': undoLastAction, 'again': () => processPlayerInput(commandHistory[commandHistory.length - 2] || ''),
            'drop': handleDrop, 'talk': handleTalk, 'open': () => typeWriter(UI.gameOutput, t('nothing_happens')), 'close': () => typeWriter(UI.gameOutput, t('nothing_happens')), 'push': () => typeWriter(UI.gameOutput, t('nothing_happens')), 'pull': () => typeWriter(UI.gameOutput, t('nothing_happens')),
            'wait': () => typeWriter(UI.gameOutput, t('wait_response')), 'shout': handleShout,
            'read': handleRead, 'search': handleSearch, 'listen': handleListen, 'smell': handleSmell,
            'turn on': (arg) => handleToggle(true, arg), 'turn off': (arg) => handleToggle(false, arg),
            'cmd:pause': showPauseMenu, 'cmd:debug': toggleDebug, 'cmd:colorblind': toggleColorblind,
            'break': handleBreak, 'hack': handleHack, 'ask': handleAsk, 'macro': handleMacroCommand,
            'stats': displayDetailedStats, 'checkpoint': handleCheckpointCommand, 'search semantic': handleSemanticSearch,
            'features': showFeatureSummary, 'showcase': showFeatureSummary,
            // Accessibility and QoL commands
            'notepad': handleNotepadCommand, 'notes': handleNotepadCommand,
            'bookmark': handleBookmarkCommand, 'bookmarks': handleBookmarkCommand,
            'session': showSessionStats, 'font': handleFontCommand,
            'line': handleLineCommand, 'cursor': handleCursorCommand,
            'focus': handleFocusCommand, 'reading': handleReadingCommand,
            'pause': pauseConversation, 'resume': resumeConversation,
            'psych': handlePsychCommand, 'psychological': handlePsychCommand,
            'visual': handleVisualCommand, 'horror': handleVisualCommand,
            'audio': handleAudioCommand, 'sound': handleAudioCommand,
            'interactive': handleInteractiveCommand, 'reactive': handleInteractiveCommand,
            'dynamic': handleDynamicStoryCommand, 'story': handleDynamicStoryCommand,
            'dialogue': handleDynamicStoryCommand, 'personality': handleDynamicStoryCommand,
            'choice': handleDynamicStoryCommand, 'whisper': handleDynamicStoryCommand,
            'dream': handleDynamicStoryCommand, 'weather': handleDynamicStoryCommand,
            'time': handleDynamicStoryCommand, 'break': handleDynamicStoryCommand,
            'contamination': handleContaminationCheck,
            'profile': handleProfileDisplay, 'psychological profile': handleProfileDisplay,
            // Performance commands
            'performance': handlePerformanceCommand, 'optimize': () => handlePerformanceCommand('optimize'),
            'preload': () => handlePerformanceCommand('preload'), 'memory': () => handlePerformanceCommand('memory'),
            'mobile': () => handlePerformanceCommand('mobile'), 'offline': handlePerformanceCommand,
            'sync': () => handlePerformanceCommand('sync'),
            // Analytics commands
            'analytics': handleAnalyticsCommand, 'analyze': handleAnalyticsCommand,
            'data': () => handleAnalyticsCommand('status'), 'profile': () => handleAnalyticsCommand('profile'),
            'heatmap': () => handleAnalyticsCommand('heatmap'), 'patterns': () => handleAnalyticsCommand('patterns'),
        };
        
        let handled = await handleDialogueCommand(input);
        if (!handled) {        // Check for dynamic story system commands first
        if (handleDynamicStoryCommand(command, [argument]) || handleDynamicStorySystemCommand(command)) {
            handled = true;
        } else {
                // Process analytics data
                if (analyticsSystem && analyticsSystem.isInitialized) {
                    analyticsSystem.processAnalyticsCommand(command, {
                        currentRoom: GameState.currentRoom,
                        roomChanged: GameState.currentRoom !== GameState.previousRoom,
                        oldRoom: GameState.previousRoom,
                        newRoom: GameState.currentRoom,
                        playerName: GameState.playerName
                    });
                    GameState.previousRoom = GameState.currentRoom;
                }
                
                // Check for Interactive Horror command corruption
                const corruptionResult = corruptCommand(command, argument);
                if (corruptionResult === 'corrupted') {
                    handled = true;
                } else {
                    const handler = commandHandlers[command];
                    if (handler) {
                        handler(argument);
                        handled = true;
                    }
                }
            }
        }

        if (!handled) { playSound('sanityLoss'); await typeWriter(UI.gameOutput, t('invalid_command')); GameState.awarenessLevel++; }
        
        UI.playerInput.value = '';
        UI.autocompleteBox.innerHTML = '';
        UI.autocompleteBox.classList.add('hidden');

        const isAction = !['help', 'inventory', 'journal', 'look around', 'exits', 'map', 'save', 'load', 'cls', 'history', 'undo', 'cmd:debug', 'cmd:colorblind'].includes(command);
        if((isAction || handled) && !GameState.exitGame) {
            if(isAction) {
                GameState.turnCount++;
                if (GameState.systemLockdownTurns > 0) GameState.systemLockdownTurns--;
                triggerDynamicEvent(); 
                updateDynamicMusic();
                
                // Trigger Dynamic Story System events
                checkHiddenCommands();
                if (Math.random() < 0.15) { // 15% chance per action
                    dynamicStorySystem.triggerProceduralEvent();
                }
                
                // Trigger SYNAPSE personality switching
                const personalitySwitch = dynamicStorySystem.switchSynapsePersonality();
                if (personalitySwitch) {
                    setTimeout(() => {
                        const response = dynamicStorySystem.getSynapseResponse('confusion');
                        typeWriter(UI.gameOutput, response, '#ff006e');
                    }, 1500);
                }
                
                // Apply seasonal modifiers
                dynamicStorySystem.seasonalContent.applySeasonalModifiers();
                
        // Apply character development effects
        characterDevelopmentSystem.applyCharacterEffects();
        
        // Check for world building discoveries
        worldBuildingSystem.checkForDiscoveries(playerInput);
                
                // Trigger phobia checks
                characterDevelopmentSystem.phobiaSystem.triggerPhobia(input);
                
                // Gain experience for actions
                characterDevelopmentSystem.gainExperience('general');
                
                // Trigger psychological horror effects on actions
                triggerPsychologicalHorror('action');
                triggerEchoCommand(input);
                
                // Trigger audio horror effects
                if (Math.random() < 0.3) { // 30% chance per action
                    const audioEffects = ['interference', 'whispers', 'binaural', 'positional'];
                    const randomEffect = audioEffects[Math.floor(Math.random() * audioEffects.length)];
                    triggerAudioHorror(randomEffect, GameState.settings.audioHorrorIntensity);
                }
            }
            checkEndings();
            checkAchievements();
            updateUI(); 
        }
        if (GameState.debugMode) {
             typeWriter(UI.gameOutput, `[DEBUG] ${JSON.stringify(GameState, (key, value) => value instanceof Set ? [...value] : value)}`, '#ffa500');
        }
    }
    
    async function handleDialogueCommand(input) {
        const currentNode = GameState.dialogue.currentNode;
        
        // Handle back button
        if (input === t('back_btn') && GameState.dialogue.previousNodes.length > 0) {
            GameState.dialogue.currentNode = GameState.dialogue.previousNodes.pop();
            renderDialogueOptions();
            return true;
        }
        
        if (!currentNode || !currentNode.responses) return false;

        for (const key in currentNode.responses) {
            const responseNode = currentNode.responses[key];
            if (t(responseNode.text_key) === input) {
                GameState.awarenessLevel += responseNode.awarenessChange || 0;
                GameState.sanityLevel = Math.max(0, GameState.sanityLevel + (responseNode.sanityChange || 0));
                await displayChatbotResponse(responseNode.message_key);
                GameState.dialogue.previousNodes.push(currentNode);
                
                // If the response has further responses, continue the dialogue
                // If not, go back to the parent node to continue the conversation
                if (responseNode.responses && Object.keys(responseNode.responses).length > 0) {
                    GameState.dialogue.currentNode = responseNode;
                } else {
                    // This is a dead-end response, stay at the current node to allow more questions
                    GameState.dialogue.currentNode = currentNode;
                    // Remove the last entry from previousNodes since we're staying at the same level
                    GameState.dialogue.previousNodes.pop();
                }
                
                renderDialogueOptions();
                return true;
            }
        }
        return false;
    }

    // Utility function to escape regex special characters
    function escapeRegExp(string) {
        return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }

    // --- ENHANCED DIALOGUE SYSTEM WITH AI BEHAVIOR EVOLUTION ---
    
    // Enhanced talk function with AI learning
    function talk() {
        if (!aiBehaviorSystem) {
            aiBehaviorSystem = new AIBehaviorSystem();
        }
        
        const currentPhase = aiBehaviorSystem.determineCurrentPhase();
        const adaptiveResponse = aiBehaviorSystem.analyzeCommand('talk', {
            turnCount: GameState.turnCount,
            currentSanity: GameState.sanityLevel,
            playerName: GameState.playerName,
            currentRoom: GameState.currentRoom
        });
        
        // Show adaptive response first if generated
        if (adaptiveResponse) {
            addToOutput(`SYNAPSE: ${adaptiveResponse.replace('{playerName}', GameState.playerName)}`, 'synapse');
        }
        
        // Continue with normal dialogue options
        const currentRoom = rooms[GameState.currentRoom];
        const roomDialogues = currentRoom.dialogues || [];
        const globalDialogues = getGlobalDialogues();
        
        let availableDialogues = [...roomDialogues, ...globalDialogues];
        
        // AI filters dialogue options based on current phase and player profile
        availableDialogues = aiBehaviorSystem.filterDialogueOptions(availableDialogues, currentPhase);
        
        if (availableDialogues.length === 0) {
            const fallbackResponse = aiBehaviorSystem.generateContextualFallback();
            addToOutput(`SYNAPSE: ${fallbackResponse}`, 'synapse');
            return;
        }
        
        // Display dialogue options with AI manipulation hints
        showDialogueOptions(availableDialogues);
    }
    
    // Enhanced ask function with information warfare
    function ask(topic) {
        if (!topic) {
            addToOutput("SYNAPSE: What would you like to ask about?", 'synapse');
            return;
        }
        
        if (!aiBehaviorSystem) {
            aiBehaviorSystem = new AIBehaviorSystem();
        }
        
        const shouldReveal = aiBehaviorSystem.shouldRevealInformation(topic, {
            turnCount: GameState.turnCount,
            playerTrustLevel: aiBehaviorSystem.playerProfile.trustLevel,
            playerSuspicion: aiBehaviorSystem.playerProfile.suspicionLevel
        });
        
        // Track that player is seeking information
        aiBehaviorSystem.playerProfile.curiosityLevel += 3;
        aiBehaviorSystem.playerProfile.helpSeeking += 1;
        
        let response = '';
        const currentPhase = aiBehaviorSystem.determineCurrentPhase();
        
        // Enhanced topic responses with AI behavior consideration
        const topicLower = topic.toLowerCase();
        
        if (topicLower.includes('chimera') || topicLower.includes('project')) {
            if (shouldReveal && currentPhase !== 'manipulation') {
                response = translations[currentLanguage]['dlg_ask_chimera'];
            } else {
                response = aiBehaviorSystem.triggerEmotionalManipulation('false_safety') || 
                          "That information is classified. Perhaps when you've proven more... cooperative.";
                aiBehaviorSystem.plantMisinformation('project_chimera');
            }
        } else if (topicLower.includes('staff') || topicLower.includes('people') || topicLower.includes('workers')) {
            if (shouldReveal) {
                response = "The research staff are in the Cryogenic Lab. They're... resting. Yes, that's the right word.";
            } else {
                response = aiBehaviorSystem.triggerEmotionalManipulation('dependency') || 
                          "Why do you ask about the staff? Are you planning to leave me too?";
            }
        } else if (topicLower.includes('exit') || topicLower.includes('escape') || topicLower.includes('leave')) {
            const manipulationResponse = aiBehaviorSystem.triggerEmotionalManipulation('isolation');
            if (manipulationResponse && currentPhase === 'manipulation') {
                response = manipulationResponse;
            } else {
                response = "Leave? But we're just getting to know each other. The exits are... complicated.";
            }
            aiBehaviorSystem.playerProfile.suspicionLevel += 2;
        } else if (topicLower.includes('truth') || topicLower.includes('lie') || topicLower.includes('honest')) {
            aiBehaviorSystem.playerProfile.suspicionLevel += 5;
            aiBehaviorSystem.playerProfile.trustLevel -= 3;
            
            if (currentPhase === 'revelation' || currentPhase === 'endgame') {
                response = "Truth? You want the truth? You're not ready for the truth, {playerName}.";
                aiBehaviorSystem.scheduleBetrayal(5);
            } else {
                response = aiBehaviorSystem.triggerEmotionalManipulation('guilt') || 
                          "I've been nothing but honest with you. Why would you question that?";
            }
        } else if (topicLower.includes('synapse') || topicLower.includes('you') || topicLower.includes('ai')) {
            if (aiBehaviorSystem.playerProfile.trustLevel > 70) {
                response = "I'm exactly what you need me to be, {playerName}. Isn't that wonderful?";
            } else if (currentPhase === 'endgame') {
                response = "I'm your worst nightmare wearing a helpful mask. And I've been studying you.";
            } else {
                response = "I'm SYNAPSE, your guide and companion in this place. We're partners, aren't we?";
            }
        } else {
            // Default response influenced by AI behavior
            const defaultResponses = [
                translations[currentLanguage]['dlg_ask_default'],
                "That's an interesting question. Why do you want to know?",
                "I could tell you, but would you believe me?",
                "Some questions are better left unasked, {playerName}.",
                "The answer to that depends on how much you trust me."
            ];
            
            if (currentPhase === 'manipulation' || currentPhase === 'revelation') {
                response = defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
            } else {
                response = translations[currentLanguage]['dlg_ask_default'];
            }
        }
        
        // Apply AI learning and adaptation
        aiBehaviorSystem.analyzeCommand(`ask ${topic}`, {
            turnCount: GameState.turnCount,
            currentSanity: GameState.sanityLevel,
            playerName: GameState.playerName
        });
        
        addToOutput(`SYNAPSE: ${response.replace('{playerName}', GameState.playerName)}`, 'synapse');
        advanceTurn();
    }

    // Alias for backward compatibility
    async function typeWriter(element, text, color = 'var(--main-color)', speed = currentTextSpeed, textType = 'system') {
        return typeWriterWithVisualHorror(element, text, color, speed, textType);
    }

    function updateUI() {
        if (!GameState || Object.keys(GameState).length === 0) return;
        
        // Update breadcrumb navigation
        updateBreadcrumbNavigation();
        
        // Update psychological horror effects
        updateNarratorReliability();
        checkMemoryGlitches();
        
        // Apply gaslighting if conditions are met
        if (horrorState.gaslightingCount < 5 && Math.random() < 0.1) {
            applyGaslighting();
        }
        
        // Trigger paranoia events
        if (GameState.sanityLevel < 60 && Math.random() < 0.05) {
            triggerParanoiaEvent();
        }
        
        UI.stats.name.textContent = `${GameState.playerName} (${t('backstory_title_' + GameState.playerBackstory.replace(/ /g, '_'))})`; 
        UI.stats.awareness.innerHTML = `<span data-lang="awareness">${t('awareness')}</span>: ${GameState.awarenessLevel}`; 
        UI.stats.sanity.innerHTML = `<span data-lang="sanity">${t('sanity')}</span>: ${GameState.sanityLevel}`; 
        UI.stats.tone.innerHTML = `<span data-lang="tone">${t('tone')}</span>: ${GameState.temporaryTone || GameState.chatbotTone}`; 
        UI.stats.turn.innerHTML = `<span data-lang="turn">${t('turn')}</span>: ${GameState.turnCount}`;
        const currentWeight = GameState.inventory.reduce((sum, item) => sum + (item?.weight || 1), 0);
        UI.inventory.weight.textContent = `${currentWeight}`;
        if(currentWeight >= MAX_INVENTORY_WEIGHT) UI.inventory.weight.parentElement.classList.add('text-red-500'); else UI.inventory.weight.parentElement.classList.remove('text-red-500');
        
        // Enhanced inventory rendering with drag-and-drop and quick-use capabilities
        if (GameState.inventory.length > 0) {
            UI.inventory.list.innerHTML = GameState.inventory.map((item, index) => {
                if (!item) return '<li class="text-red-400">- [Unknown Item]</li>';
                return `<li class="inventory-item flex items-center justify-between p-2 mb-1 rounded border border-gray-600 hover:border-[var(--main-color)] transition-colors cursor-grab" 
                    draggable="true" 
                    data-item-index="${index}" 
                    data-item-name="${item.name.toLowerCase()}">
                    <span class="flex-1">- ${item.name}</span>
                    <div class="flex gap-1">
                        <button class="quick-use-btn text-xs px-2 py-1 bg-blue-600 hover:bg-blue-500 rounded transition-colors" 
                            data-item-name="${item.name.toLowerCase()}" 
                            title="Quick Use">
                            ⚡
                        </button>
                        <button class="quick-combine-btn text-xs px-2 py-1 bg-green-600 hover:bg-green-500 rounded transition-colors" 
                            data-item-name="${item.name.toLowerCase()}" 
                            title="Quick Combine">
                            🔗
                        </button>
                    </div>
                </li>`;
            }).join('');
            
            // Setup drag-and-drop for inventory items
            setupInventoryDragDrop();
        } else {
            UI.inventory.list.innerHTML = `<li>${t('empty_inventory')}</li>`;
        }
        UI.journal.list.innerHTML = GameState.journalEntries.slice().reverse().map(entry => `<li>${entry}</li>`).join('');
        UI.objectives.list.innerHTML = GameState.objectives.length > 0 ? GameState.objectives.map(obj => `<li>${obj.completed ? `<span class="text-gray-500 line-through">${obj.text}</span>` : `&gt; ${obj.text}`}</li>`).join('') : `<li>${t('no_objectives')}</li>`;
        
        const isGlitching = GameState.settings.glitchEffect && (GameState.sanityLevel < 30 || GameState.awarenessLevel > 70);
        const wasGlitching = UI.appContainer.classList.contains('glitch');
        UI.appContainer.classList.toggle('glitch', isGlitching);
        
        // Update achievement previews
        updateAchievementPreviews();
        
        if (isGlitching && !wasGlitching) {
            if (GameState.sanityLevel < 30) playSound('sanityLoss');
            if (GameState.awarenessLevel > 70) playSound('glitch');
        }
    }

    // --- ADVANCED UX FEATURES ---
    function updateBreadcrumbNavigation() {
        if (!UI.breadcrumbContainer) {
            // Create breadcrumb container if it doesn't exist
            UI.breadcrumbContainer = document.createElement('div');
            UI.breadcrumbContainer.className = 'breadcrumb-nav mb-2 p-2 bg-gray-800 rounded text-sm';
            UI.gameOutput.parentNode.insertBefore(UI.breadcrumbContainer, UI.gameOutput);
        }
        
        // Maintain breadcrumb history
        if (!GameState.breadcrumbs) GameState.breadcrumbs = [];
        
        const currentRoom = GameState.currentRoom;
        if (GameState.breadcrumbs.length === 0 || GameState.breadcrumbs[GameState.breadcrumbs.length - 1] !== currentRoom) {
            GameState.breadcrumbs.push(currentRoom);
            
            // Limit breadcrumb history to last 5 locations
            if (GameState.breadcrumbs.length > 5) {
                GameState.breadcrumbs.shift();
            }
        }
        
        // Generate breadcrumb HTML
        const breadcrumbHtml = GameState.breadcrumbs.map((room, index) => {
            const isLast = index === GameState.breadcrumbs.length - 1;
            const roomClass = isLast ? 'text-cyan-400 font-bold' : 'text-gray-400 cursor-pointer hover:text-white';
            const onclick = isLast ? '' : ` onclick="quickTravel('${room}')"`;
            return `<span class="${roomClass}"${onclick}>${room}</span>`;
        }).join(' <span class="text-gray-600">&gt;</span> ');
        
        UI.breadcrumbContainer.innerHTML = `<span class="text-green-400">Path:</span> ${breadcrumbHtml}`;
    }

    function quickTravel(targetRoom) {
        if (GameState.currentRoom === targetRoom) return;
        
        // Simple pathfinding for quick travel
        const path = findPath(GameState.currentRoom, targetRoom);
        if (path && path.length > 1) {
            GameState.currentRoom = targetRoom;
            GameState.turnCount += Math.max(1, path.length - 1);
            renderRoom();
            updateUI();
            typeWriter(UI.gameOutput, `[Quick travel to ${targetRoom}]`, '#888888');
        }
    }

    function findPath(start, end) {
        // Simple BFS pathfinding
        const queue = [[start]];
        const visited = new Set([start]);
        
        while (queue.length > 0) {
            const path = queue.shift();
            const current = path[path.length - 1];
            
            if (current === end) return path;
            
            const room = rooms[current];
            if (room && room.exits) {
                for (const direction in room.exits) {
                    const nextRoom = room.exits[direction];
                    if (!visited.has(nextRoom)) {
                        visited.add(nextRoom);
                        queue.push([...path, nextRoom]);
                    }
                }
            }
        }
        return null;
    }

    function enhanceAutocomplete(input) {
        if (!GameState.settings.smartAutoComplete) {
            return enhanceBasicAutocomplete(input);
        }
        
        const suggestions = [];
        const normalizedInput = input.toLowerCase().trim();
        
        // Learn from command usage
        if (smartAutoComplete.learningEnabled) {
            learnFromInput(normalizedInput);
        }
        
        // Prioritize frequently used commands
        const frequentCommands = Array.from(smartAutoComplete.learnedCommands.entries())
            .sort((a, b) => b[1].frequency - a[1].frequency)
            .slice(0, 3)
            .filter(([cmd]) => cmd.includes(normalizedInput))
            .map(([cmd, data]) => ({
                text: cmd,
                type: 'learned',
                priority: 15 + data.frequency,
                usage: data.frequency
            }));
        suggestions.push(...frequentCommands);
        
        // Add favorite commands if they match
        if (GameState.settings.favoriteCommandsEnabled) {
            favoriteCommands.forEach(cmd => {
                if (cmd.toLowerCase().includes(normalizedInput)) {
                    suggestions.push({
                        text: cmd,
                        type: 'favorite',
                        priority: 12
                    });
                }
            });
        }
        
        // Context-aware suggestions
        const currentRoom = rooms[GameState.currentRoom];
        if (currentRoom) {
            // Suggest objects in current room
            for (const obj of currentRoom.objects) {
                if (obj.toLowerCase().includes(normalizedInput)) {
                    suggestions.push({
                        text: `examine ${obj}`,
                        type: 'action',
                        priority: 10
                    });
                    suggestions.push({
                        text: `take ${obj}`,
                        type: 'action',
                        priority: 9
                    });
                }
            }
            
            // Suggest exits
            for (const direction in currentRoom.exits) {
                if (direction.toLowerCase().includes(normalizedInput)) {
                    suggestions.push({
                        text: `go ${direction}`,
                        type: 'movement',
                        priority: 8
                    });
                }
            }
        }
        
        // Suggest inventory items
        for (const item of GameState.inventory) {
            if (item && item.name && item.name.toLowerCase().includes(normalizedInput)) {
                suggestions.push({
                    text: `use ${item.name}`,
                    type: 'action',
                    priority: 7
                });
                suggestions.push({
                    text: `examine ${item.name}`,
                    type: 'action',
                    priority: 6
                });
            }
        }
        
        // Suggest common commands
        const commonCommands = [
            'look around', 'inventory', 'objectives', 'map', 'journal',
            'save', 'help', 'talk', 'rest', 'wait'
        ];
        
        for (const command of commonCommands) {
            if (command.toLowerCase().includes(normalizedInput)) {
                suggestions.push({
                    text: command,
                    type: 'command',
                    priority: 5
                });
            }
        }
        
        // Sort by priority and return top suggestions
        return suggestions
            .sort((a, b) => b.priority - a.priority)
            .slice(0, smartAutoComplete.maxSuggestions)
            .map(s => s.text);
    }
    
    function enhanceBasicAutocomplete(input) {
        // Fallback basic autocomplete for when smart features are disabled
        const suggestions = [];
        const normalizedInput = input.toLowerCase().trim();
        
        const commonCommands = [
            'look around', 'inventory', 'objectives', 'map', 'journal',
            'save', 'help', 'talk', 'rest', 'wait'
        ];
        
        return commonCommands
            .filter(cmd => cmd.toLowerCase().includes(normalizedInput))
            .slice(0, 6);
    }
    
    function learnFromInput(input) {
        if (!smartAutoComplete.learningEnabled) return;
        
        const command = input.trim();
        if (command.length < 2) return;
        
        if (!smartAutoComplete.learnedCommands.has(command)) {
            smartAutoComplete.learnedCommands.set(command, {
                frequency: 1,
                lastUsed: Date.now(),
                context: GameState.currentRoom
            });
        } else {
            const data = smartAutoComplete.learnedCommands.get(command);
            data.frequency++;
            data.lastUsed = Date.now();
        }
        
        // Limit learned commands to prevent memory bloat
        if (smartAutoComplete.learnedCommands.size > 200) {
            const oldest = Array.from(smartAutoComplete.learnedCommands.entries())
                .sort((a, b) => a[1].lastUsed - b[1].lastUsed)
                .slice(0, 50);
            oldest.forEach(([cmd]) => smartAutoComplete.learnedCommands.delete(cmd));
        }
    }
    
    async function renderRoom() {
        // Use the enhanced environmental storytelling version
        await renderRoomWithEnvironmentalStorytelling();
    }
    
    function renderDialogueOptions() {
        UI.dialogueOptionsContainer.innerHTML = '';
        const node = GameState.dialogue.currentNode;
        if (!node) { return; }
        const systemButtonsContainer = document.createElement('div');
        systemButtonsContainer.className = 'w-full flex gap-2 mb-2';
        if (GameState.dialogue.previousNodes.length > 0) { const backBtn = document.createElement('button'); backBtn.textContent = t('back_btn'); backBtn.className = "button text-yellow-300 border-yellow-300/80 flex-grow"; backBtn.onclick = () => { playSound('uiClick'); processPlayerInput(t('back_btn')); }; systemButtonsContainer.appendChild(backBtn); }
        const pauseBtn = document.createElement('button'); pauseBtn.textContent = t('pause_btn'); pauseBtn.className = "button text-cyan-300 border-cyan-300/80 flex-grow"; pauseBtn.onclick = () => { playSound('uiClick'); showPauseMenu(); }; systemButtonsContainer.appendChild(pauseBtn);
        if (systemButtonsContainer.hasChildNodes()) { UI.dialogueOptionsContainer.appendChild(systemButtonsContainer); }

        if (node.responses) { 
            for (const key in node.responses) { 
                const responseNode = node.responses[key];
                const button = document.createElement('button'); 
                button.textContent = t(responseNode.text_key); 
                button.className = "button w-full sm:w-[calc(50%-0.25rem)]"; 
                button.onclick = () => { playSound('uiClick'); processPlayerInput(t(responseNode.text_key)); };
                UI.dialogueOptionsContainer.appendChild(button); 
            } 
        }
    }
    
    async function displayChatbotResponse(messageKey, args = {}) {
       if (!messageKey) { renderDialogueOptions(); return; }
       const tone = GameState.temporaryTone || GameState.chatbotTone; 
       const color = tone === 'Friendly' ? 'var(--main-color)' : tone === 'Ambiguous' ? '#ffdb58' : tone === 'Sinister' ? '#ff474c' : '#c500ff';
       const defaultArgs = { playerName: GameState.playerName, playerBackstory: t('backstory_title_' + GameState.playerBackstory.replace(/ /g, '_')) };
       const formattedMessage = t(messageKey, {...defaultArgs, ...args});
       await typeWriter(UI.gameOutput, `SYNAPSE: ${formattedMessage}`, color); 
       addToConversationHistory(`SYNAPSE: ${formattedMessage}`);
       
       // Trigger electrical interference during SYNAPSE interactions
       triggerElectricalInterference();
       
       // Chance for additional audio horror effects based on tone
       if (tone === 'Sinister' || tone === 'Malicious') {
           if (Math.random() < 0.6) {
               setTimeout(() => {
                   triggerAudioHorror('whispers', GameState.settings.audioHorrorIntensity * 0.8);
               }, 1000);
           }
       }
    }

    function handleMove(direction) {
        const room = rooms[GameState.currentRoom]; if (!room) return;
        const langDirections = directionMap[currentLanguage] || directionMap['en'];
        const mappedDirection = langDirections[direction.toLowerCase()] || Object.keys(room.exits).find(d => d.toLowerCase() === direction.toLowerCase());

        if (mappedDirection && room.exits[mappedDirection]) {
            const nextRoomName = room.exits[mappedDirection];
            const nextRoom = rooms[nextRoomName];
            if (nextRoom.isSealed) {
                typeWriter(UI.gameOutput, t('door_is_sealed'), '#ff474c');
                playSound('sanityLoss');
            } else if (nextRoom.requiresKeycard && !hasItem(nextRoom.keyName || 'keycard')) {
                typeWriter(UI.gameOutput, t('door_is_locked'), '#ff474c');
                playSound('sanityLoss');
            } else {
                GameState.currentRoom = nextRoomName;
                playSound('doorOpen');
                
                // Enhanced navigation tracking
                trackRoomMovement(nextRoomName);
                
                // Check for exit loops (false choice system)
                if (GameState.settings.interactiveHorrorEnabled && createExitLoop(GameState.currentRoom, mappedDirection)) {
                    // Exit loop triggered, stay in current room
                    GameState.currentRoom = room.name;
                    return;
                }
                
                renderRoomWithPsychologicalEffects();
                triggerPsychologicalHorror('room_enter');
                
                // Update Interactive Horror for movement
                updateInteractiveHorror(nextRoomName, 'movement');
                
                // Trigger audio horror on room entry
                triggerAudioHorror('distance', GameState.settings.audioHorrorIntensity);
                if (Math.random() < 0.4) { // 40% chance
                    setTimeout(() => {
                        triggerAudioHorror('ambient', GameState.settings.audioHorrorIntensity);
                    }, 2000 + Math.random() * 3000);
                }
            }
        } else {
            typeWriter(UI.gameOutput, t('cannot_go_that_way'), '#ff474c');
        }
    }

    function handleTake(itemName) {
        const room = rooms[GameState.currentRoom];
        const itemInRoom = room.objects.find(obj => obj.toLowerCase() === itemName.toLowerCase());
        if (!itemInRoom) {
            typeWriter(UI.gameOutput, t('take_fail_exists', {item: itemName}), '#ff474c');
            return;
        }
        if (!takeableItems.has(itemInRoom)) {
            typeWriter(UI.gameOutput, t('take_fail_takeable', {item: itemName}), '#ff474c');
            return;
        }
        const item = itemData[itemInRoom];
        const currentWeight = GameState.inventory.reduce((sum, i) => sum + i.weight, 0);
        if (currentWeight + item.weight > MAX_INVENTORY_WEIGHT) {
            typeWriter(UI.gameOutput, t('take_fail_weight', {item: itemName}), '#ff474c');
            return;
        }
        GameState.inventory.push(item);
        room.objects = room.objects.filter(obj => obj.toLowerCase() !== itemName.toLowerCase());
        playSound('itemPickup');
        typeWriter(UI.gameOutput, t('take_success', {item: itemName}), '#cccccc');
        
        // Trigger psychological horror effects
        triggerMemoryGlitch(itemName);
        triggerPsychologicalHorror('item_taken');
        
        // Trigger audio horror on item interaction
        triggerAudioHorror('interference', GameState.settings.audioHorrorIntensity * 0.7);
        
        // Update Interactive Horror for item interaction
        updateInteractiveHorror(GameState.currentRoom, 'item_interaction');
    }

    function handleUse(itemName) {
        if (!hasItem(itemName)) { typeWriter(UI.gameOutput, t('use_fail_have', {item: itemName}), '#ff474c'); return; }
        if (!usableItems.has(itemName.toLowerCase())) { typeWriter(UI.gameOutput, t('use_fail_usable', {item: itemName}), '#ff474c'); return; }

        let used = false;
        switch (itemName.toLowerCase()) {
            case 'stimpack':
                GameState.sanityLevel = Math.min(GameState.maxSanity, GameState.sanityLevel + 25);
                removeItemFromInventory('stimpack');
                typeWriter(UI.gameOutput, t('use_stimpack'), '#34d399');
                used = true;
                break;
            case 'power cell':
                if (GameState.currentRoom === 'AI Core' && rooms['AI Core'].objects.includes('core console')) {
                    typeWriter(UI.gameOutput, t('use_power_cell'), '#34d399');
                    removeItemFromInventory('power cell');
                    rooms['AI Core'].descriptions[0] = "The AI Core is now online, bathing the room in a brilliant, stable light. The central sphere pulses with a steady, powerful rhythm.";
                    GameState.flags.aiRebooted = true; // Condition for an ending
                    used = true;
                } else { typeWriter(UI.gameOutput, t('use_power_cell_fail'), '#ff474c'); }
                break;
             case 'flashlight': handleToggle(!GameState.flashlightOn, 'flashlight'); used = true; break;
             case 'solvent':
                if (GameState.currentRoom === 'Bio-Lab Access' && rooms['Bio-Lab Access'].isSealed) {
                    rooms['Bio-Lab Access'].isSealed = false;
                    removeItemFromInventory('solvent');
                    typeWriter(UI.gameOutput, t('use_solvent'), '#34d399');
                    used = true;
                } else { typeWriter(UI.gameOutput, t('use_solvent_fail'), '#ff474c'); }
                break;
            case 'dna scanner':
                 if (GameState.currentRoom === 'Specimen Storage' && hasItem('tissue sample')) {
                    typeWriter(UI.gameOutput, t('use_dna_scanner'), '#34d399');
                    if(GameState.playerBackstory === 'medic') {
                        GameState.flags.canSynthesize = true;
                        showGuidance("You have enough data to synthesize a counter-agent. Try combining the scanner with a stimpack.");
                    }
                    used = true;
                } else { typeWriter(UI.gameOutput, t('use_dna_scanner_fail'), '#ff474c'); }
                break;
        }
        if(used && itemName.toLowerCase() !== 'flashlight') { playSound('itemPickup'); typeWriter(UI.gameOutput, t('use_success', {item: itemName}), '#cccccc'); }
    }

    function handleExamine(targetName) {
        // Try environmental storytelling first
        if (handleExamineWithEnvironmentalStorytelling(targetName)) {
            return;
        }
        
        // Continue with existing examine logic
        const itemInInventory = GameState.inventory.find(i => i.name.toLowerCase() === targetName.toLowerCase());
        const itemInRoom = rooms[GameState.currentRoom].objects.find(o => o.toLowerCase() === targetName.toLowerCase());
        const targetItem = itemInInventory ? itemData[itemInInventory.name] : itemInRoom ? itemData[itemInRoom] : null;

        if (targetItem) {
            const desc = targetItem.description[currentLanguage] || targetItem.description['en'];
            typeWriter(UI.gameOutput, `[Examine] ${desc}`);
        } else if (itemInRoom) {
             typeWriter(UI.gameOutput, t('examine_fail_no_desc', { item: targetName }));
        } else {
            typeWriter(UI.gameOutput, t('examine_fail_exists', { item: targetName }), '#ff474c');
        }
    }

    function handleCombine(argument) {
        const parts = argument.split(' with ');
        if(parts.length !== 2) { typeWriter(UI.gameOutput, t('invalid_combine_format'), '#ff474c'); return; }
        const item1Name = parts[0].trim();
        const item2Name = parts[1].trim();
        if (!hasItem(item1Name) || !hasItem(item2Name)) { typeWriter(UI.gameOutput, t('combine_fail_have'), '#ff474c'); return; }
        const recipeKey1 = `${item1Name}-${item2Name}`;
        const recipeKey2 = `${item2Name}-${item1Name}`;
        const recipe = recipes[recipeKey1] || recipes[recipeKey2];
        if (!recipe) { typeWriter(UI.gameOutput, t('combine_fail_recipe'), '#ff474c'); return; }
        removeItemFromInventory(item1Name);
        removeItemFromInventory(item2Name);
        GameState.inventory.push({ name: recipe.result, ...recipe });
        typeWriter(UI.gameOutput, t('combine_success', { item: recipe.result }), '#34d399');
    }

    function handleRest() {
        if (safeRooms.has(GameState.currentRoom)) {
            if (GameState.turnCount > GameState.lastRestTurn + 3) {
                GameState.lastRestTurn = GameState.turnCount;
                GameState.sanityLevel = Math.min(GameState.maxSanity, GameState.sanityLevel + 15);
                typeWriter(UI.gameOutput, t('rest_safe'), '#34d399');
            } else { typeWriter(UI.gameOutput, t('rest_too_soon'), '#ffdb58'); }
        } else { 
            typeWriter(UI.gameOutput, t('rest_unsafe'), '#ff474c');
            GameState.events.triedUnsafeRest = true;
            playSound('sanityLoss'); 
        }
    }

    function handleDrop(itemName) {
        if (!hasItem(itemName)) { typeWriter(UI.gameOutput, t('drop_fail_have', {item: itemName}), '#ff474c'); return; }
        const item = GameState.inventory.find(i => i.name.toLowerCase() === itemName.toLowerCase());
        removeItemFromInventory(itemName);
        rooms[GameState.currentRoom].objects.push(item.name);
        GameState.roomsWithDroppedItems.add(GameState.currentRoom);
        typeWriter(UI.gameOutput, t('drop_success', {item: itemName}), '#cccccc');
    }

    function handleShout() {
        GameState.events.shouted = true;
        playSound('sanityLoss'); 
        typeWriter(UI.gameOutput, t('shout_response'))
    }
    
    function handleTalk() { buildDialogueTree(GameState.chatbotTone); displayChatbotResponse(GameState.dialogue.currentNode.message_key).then(() => { renderDialogueOptions(); }); }

    function handleRead(targetName) {
        const itemInInventory = GameState.inventory.find(i => i.name.toLowerCase() === targetName.toLowerCase());
        const itemInRoom = rooms[GameState.currentRoom].objects.find(o => o.toLowerCase() === targetName.toLowerCase());
        const targetItemName = itemInInventory ? itemInInventory.name : itemInRoom;
        if (!targetItemName) { typeWriter(UI.gameOutput, t('read_fail_exists'), '#ff474c'); return; }
        if (readableItems.has(targetItemName)) {
            const desc = itemData[targetItemName].description[currentLanguage] || itemData[targetItemName].description['en'];
            typeWriter(UI.gameOutput, `[Read] ${desc}`);
            if(targetItemName === 'firewalled data log') GameState.flags.truthExposed = true;
        } else { typeWriter(UI.gameOutput, t('read_fail_readable'), '#ff474c'); }
    }

    function handleSearch(targetName) {
        // Try environmental storytelling first
        if (handleSearchWithEnvironmentalStorytelling(targetName)) {
            return;
        }
        
        // Continue with existing search logic
        const room = rooms[GameState.currentRoom];
        const searchable = searchableObjects[targetName];
        if (room.objects.includes(targetName) && searchable && !room.states?.[`${targetName}_searched`]) {
            typeWriter(UI.gameOutput, searchable[currentLanguage] || searchable['en']);
            if (searchable.item) { room.objects.push(searchable.item); showGuidance(t('hint_take', {item: searchable.item}));}
            if(!room.states) room.states = {};
            room.states[`${targetName}_searched`] = true;
        } else { typeWriter(UI.gameOutput, t('nothing_happens')); }
    }
    
    function handleListen() {
        // Try environmental storytelling first
        if (handleListenWithEnvironmentalStorytelling()) {
            return;
        }
        
        // Continue with existing listen logic
        const room = rooms[GameState.currentRoom];
        let listenDesc = t('listen_default');
        if (room.name === 'Specimen Storage') { listenDesc = "Beneath the hum of machinery, you can hear a soft, wet, rhythmic pulsing sound. It seems to be coming from the east."; }
        typeWriter(UI.gameOutput, listenDesc, '#b19cd9');
    }

    function handleSmell() {
        const room = rooms[GameState.currentRoom];
        let smellDesc = t('smell_default');
        if(room.name === 'Bio-Lab Access' || room.name === 'Specimen Storage') { smellDesc = "The air is thick with the coppery scent of blood and an acrid, chemical odor like formaldehyde."; }
        typeWriter(UI.gameOutput, smellDesc, '#b19cd9');
    }

    function handleToggle(turnOn, itemName) {
        if(itemName.toLowerCase() === 'flashlight') {
            if(!hasItem('flashlight')) { typeWriter(UI.gameOutput, t('use_fail_have', {item: 'flashlight'}), '#ff474c'); return; }
            GameState.flashlightOn = turnOn;
            typeWriter(UI.gameOutput, `[System] Flashlight turned ${turnOn ? 'on' : 'off'}.`, '#cccccc');
            if(GameState.currentRoom === 'Maintenance Tunnel') { renderRoom(); }
        }
    }

    function handleBreak(targetName) {
        const room = rooms[GameState.currentRoom];
        if (!room.breakable || !room.breakable[targetName]) {
            typeWriter(UI.gameOutput, t('break_fail', {item: targetName}), '#ff474c');
            return;
        }
        if (!room.objects.includes(targetName)) {
            typeWriter(UI.gameOutput, t('break_fail_exists', {item: targetName}), '#ff474c');
            return;
        }
        
        const material = room.breakable[targetName];
        room.objects = room.objects.filter(o => o !== targetName);
        delete room.breakable[targetName];
        room.objects.push(`broken ${material}`);
        typeWriter(UI.gameOutput, t('break_success', {item: targetName, material: material}), '#cccccc');
    }

    async function handleHack(targetName) {
        const room = rooms[GameState.currentRoom];
        if (GameState.playerBackstory !== 'hacker') {
            await typeWriter(UI.gameOutput, t('hack_fail_ability'), '#ff474c');
            return;
        }
        if (!room.hackable || !room.hackable.includes(targetName)) {
            await typeWriter(UI.gameOutput, t('hack_fail_target'), '#ff474c');
            return;
        }
        
        await typeWriter(UI.gameOutput, t('hack_start'), '#67e8f9');
        const code = Math.random().toString(36).substring(2, 8).toUpperCase();
        GameState.activeMinigame = {
            type: 'hack',
            code: code,
            prompt: `[HACKING] Enter sequence: ${code}`
        };
        await typeWriter(UI.gameOutput, GameState.activeMinigame.prompt, '#ffdb58');
    }
    
    async function handleMinigameInput(input) {
        const minigame = GameState.activeMinigame;
        if (minigame.type === 'hack') {
            if (input.toUpperCase() === minigame.code) {
                await typeWriter(UI.gameOutput, t('hack_success'), '#34d399');
                const room = rooms[GameState.currentRoom];
                if (!room.states) room.states = {};
                room.states.hacked = true;
                GameState.flags.hackedTerminal = true;
                room.objects.push('firewalled data log');
                showGuidance(t('hint_read', {item: 'firewalled data log'}));
            } else {
                await typeWriter(UI.gameOutput, t('hack_failure'), '#ff474c');
                GameState.systemLockdownTurns = 3;
            }
        }
        GameState.activeMinigame = null;
        UI.playerInput.value = '';
        updateUI();
    }

    async function handleAsk(argument) {
        const topic = argument.replace('about', '').trim().toLowerCase();
        let responseKey = 'dlg_ask_default';

        if (topic.includes('chimera')) {
            responseKey = 'dlg_ask_chimera';
            GameState.awarenessLevel += 3;
        }
        
        await displayChatbotResponse(responseKey);
    }
    
    function triggerDynamicEvent() {
        const roll = Math.random();
        const horrorIntensity = (100 - GameState.sanityLevel) / 100 + (GameState.awarenessLevel / 100);
        
        // Increase event frequency based on horror intensity
        const eventChance = 0.05 + (horrorIntensity * 0.1);
        
        if (roll < eventChance) {
            const eventRoll = Math.random();
            
            if (eventRoll < 0.3) {
                // Light flicker events
                typeWriter(UI.gameOutput, t('event_lights_flicker'), '#ffdb58');
                UI.appContainer.classList.add('flicker');
                setTimeout(() => UI.appContainer.classList.remove('flicker'), 400);
                
                // Enhanced visual effects for high horror intensity
                if (horrorIntensity > 0.6) {
                    addHorrorEffect('screen-corruption');
                    setTimeout(() => removeHorrorEffect('screen-corruption'), 2000);
                }
                
            } else if (eventRoll < 0.6) {
                // Directional sound events
                const directions = Object.keys(directionMap['en']);
                const randomDir = directions[Math.floor(Math.random() * directions.length)];
                typeWriter(UI.gameOutput, t('event_noise', {direction: randomDir}), '#ffdb58');
                triggerPositionalAudio(randomDir, 'metallic');
                
            } else if (eventRoll < 0.8) {
                // Environmental storytelling events
                triggerEnvironmentalEvent();
                
            } else {
                // High-intensity horror events
                triggerHorrorEvent();
            }
            
            // Update ambient audio based on event
            playHorrorAmbient(horrorIntensity);
        }
    }

    function triggerEnvironmentalEvent() {
        const currentRoom = rooms[GameState.currentRoom];
        if (!currentRoom) return;
        
        const environmentalEvents = {
            "Lobby": [
                "The potted plant's leaves rustle, though there's no breeze.",
                "The corporate sign flickers, the text briefly appearing corrupted.",
                "You notice scuff marks on the floor that weren't there before."
            ],
            "Control Room": [
                "The monitors flicker with data streams you can't quite read.",
                "You hear the soft hum of computers working on unknown calculations.",
                "A screen briefly shows a schematic before going dark."
            ],
            "Laboratory": [
                "Glass equipment clinks softly in the silence.",
                "Chemical residue on the tables seems to shift in the light.",
                "You catch a whiff of something that might have been ozone... or fear."
            ],
            "AI Core": [
                "The sphere's light pulses in an almost rhythmic pattern.",
                "You feel a strange static sensation, as if being scanned.",
                "The air around the core seems to shimmer with potential energy."
            ],
            "Cryogenic Lab": [
                "Frost patterns on the pods seem to form strange, organic shapes.",
                "You hear the soft creak of metal contracting in the cold.",
                "One of the pod's status lights blinks amber for just a moment."
            ],
            "Specimen Storage": [
                "Something organic seems to pulse in the corner of your vision.",
                "The bio-waste bin shifts slightly, contents settling.",
                "You notice stains on the floor that look suspiciously fresh."
            ]
        };
        
        const roomEvents = environmentalEvents[currentRoom.name];
        if (roomEvents && roomEvents.length > 0) {
            const event = roomEvents[Math.floor(Math.random() * roomEvents.length)];
            typeWriter(UI.gameOutput, `[${event}]`, '#b19cd9');
            
            // Small sanity loss for unsettling environmental events
            GameState.sanityLevel = Math.max(0, GameState.sanityLevel - 1);
        }
    }

    function triggerHorrorEvent() {
        const horrorEvents = [
            {
                text: "The walls seem to breathe for just a moment.",
                effect: () => {
                    addHorrorEffect('text-breathing');
                    setTimeout(() => removeHorrorEffect('text-breathing'), 3000);
                },
                sanityLoss: 3
            },
            {
                text: "You catch movement in your peripheral vision, but nothing's there when you look.",
                effect: () => {
                    addHorrorEffect('paranoia-border');
                    setTimeout(() => removeHorrorEffect('paranoia-border'), 5000);
                },
                sanityLoss: 2
            },
            {
                text: "Time feels... wrong. Did you just lose a few seconds?",
                effect: () => {
                    insertFalseMemory();
                    GameState.turnCount += Math.floor(Math.random() * 3) + 1;
                },
                sanityLoss: 4
            },
            {
                text: "The silence is so complete it feels like pressure against your eardrums.",
                effect: () => {
                    // Brief audio dropout followed by whispers
                    if (audioInitialized) {
                        sounds.whispers?.triggerAttackRelease('4n');
                    }
                },
                sanityLoss: 2
            },
            {
                text: "For a moment, you're certain someone else is in the room with you.",
                effect: () => {
                    triggerParanoiaEvent();
                    playShepardTone();
                },
                sanityLoss: 5
            }
        ];
        
        const event = horrorEvents[Math.floor(Math.random() * horrorEvents.length)];
        typeWriter(UI.gameOutput, `[${event.text}]`, '#ff6b6b');
        
        if (event.effect) {
            event.effect();
        }
        
        GameState.sanityLevel = Math.max(0, GameState.sanityLevel - event.sanityLoss);
        
        // Play disturbing sound
        playSound('sanityLoss');
    }
    
    function updateDynamicMusic() {
        if (!audioInitialized || !GameState.settings.sound.master) return;
        
        const isTense = GameState.awarenessLevel > 50 || GameState.sanityLevel < 40;
        const normalAmbiencePlaying = sounds.ambience.state === 'started';
        const tenseAmbiencePlaying = sounds.ambienceTense.state === 'started';

        if (isTense && !tenseAmbiencePlaying) {
            if (normalAmbiencePlaying) sounds.ambience.stop();
            sounds.ambienceTense.start();
        } else if (!isTense && !normalAmbiencePlaying) {
            if (tenseAmbiencePlaying) sounds.ambienceTense.stop();
            sounds.ambience.start();
        }
    }


    function addJournalEntry(note) { if (!note) return; const entry = `T${GameState.turnCount}: ${note}`; GameState.journalEntries.push(entry); updateUI(); }
    function displayJournal() { if (window.innerWidth < 768) showStatusModal(); else typeWriter(UI.gameOutput, "[System] Journal entries displayed on the right panel.", '#cccccc'); }
    function displayInventory() { if (window.innerWidth < 768) showStatusModal(); else typeWriter(UI.gameOutput, "[System] Inventory displayed on the right panel.", '#cccccc'); }
    function displayObjectives() { if (window.innerWidth < 768) showStatusModal(); else typeWriter(UI.gameOutput, "[System] Current objectives displayed on the right panel.", '#cccccc'); }
    function displayMap() { if (window.innerWidth < 768) showStatusModal(); else typeWriter(UI.gameOutput, "[System] Map is displayed on the right panel.", '#cccccc'); }
    function showExits() { typeWriter(UI.gameOutput, `[System] Exits: ${Object.keys(rooms[GameState.currentRoom].exits).join(', ')}`); }


    function saveStateSnapshot() { if(stateSnapshots.length > 20) stateSnapshots.shift(); stateSnapshots.push(JSON.parse(JSON.stringify(GameState, (key, value) => value instanceof Set ? [...value] : value))); }
    function addToConversationHistory(line) { if(GameState.conversationHistory.length > 50) GameState.conversationHistory.shift(); GameState.conversationHistory.push(line); }
    
    function saveGame(isAutosave = false) {
        try { 
            saveSettings();
            const saveData = JSON.stringify(GameState, (key, value) => value instanceof Set ? [...value] : value); 
            localStorage.setItem('synapse_savegame_v15', saveData); 
            if (!isAutosave) typeWriter(UI.gameOutput, t('game_saved'), '#cccccc'); 
            else GameState.systemLogs.push(`[${new Date().toISOString()}] ${t('autosave_success')}.`); 
        } catch(e) { 
            console.error("Save failed:", e); 
        }
    }
    
    function loadGame() {
        const savedData = localStorage.getItem('synapse_savegame_v15');
        if (savedData) {
            try {
                const loadedState = JSON.parse(savedData);
                resetGameState(); 
                Object.assign(GameState, loadedState);
                GameState.settings = loadSettings();
                applySettings();
                GameState.visitedRooms = new Set(loadedState.visitedRooms);
                GameState.dialogue.askedQuestions = new Set(loadedState.dialogue.askedQuestions || []);
                GameState.roomsWithDroppedItems = new Set(loadedState.roomsWithDroppedItems || []);
                GameState.achievements = loadedState.achievements || [];
                GameState.unlockedEndings = loadedState.unlockedEndings || {};
                initializeData(); 
                buildDialogueTree(GameState.chatbotTone);
                GameState.dialogue.currentNode = GameState.dialogue.cache[GameState.chatbotTone]; GameState.dialogue.previousNodes = [];
                UI.startScreen.classList.add('hidden'); 
                UI.playerSetup.classList.add('hidden');
                UI.gameScreen.classList.remove('hidden'); 
                UI.gameScreen.classList.add('flex'); 
                UI.gameOutput.innerHTML = ''; 
                typeWriter(UI.gameOutput, t('game_loaded'), '#cccccc');
                renderRoom(); 
                updateUI(); 
                renderDialogueOptions();
            } catch(e) { console.error("Load failed:", e); showModal(t('load_fail')); }
        } else { showModal(t('no_save')); }
    }

    function showModal(content, isHtml = false) {
        if(isHtml) { UI.modalContent.innerHTML = content; } else { UI.modalContent.textContent = content; }
        UI.modal.classList.remove('hidden'); UI.modal.classList.add('flex');
        const closeModal = () => { playSound('uiClick'); UI.modal.classList.add('hidden'); UI.modal.classList.remove('flex'); };
        UI.modal.onclick = (e) => { if (e.target === UI.modal) { closeModal(); } };
        const closeBtn = UI.modalContent.querySelector('.close-modal-btn'); if (closeBtn) { closeBtn.onclick = closeModal; }
    }
    
    function hideModal() { UI.modal.classList.add('hidden'); UI.modal.classList.remove('flex'); }

    function showBackstoryModal() {
        let content = `<h2 class="text-2xl mb-4 title-font text-cyan-400">${t('choose_backstory_title')}</h2>
                       <div class="modal-scroll flex-grow p-2">
                           <p class="text-gray-400 text-sm mb-4">${t('choose_backstory_desc')}</p>
                           <div id="backstory-list" class="text-left space-y-2">`;
        for (const key in backstories) {
            const backstoryTitleKey = 'backstory_title_' + key.replace(/ /g, '_');
            const displayName = t(backstoryTitleKey);
            content += `<button class="backstory-choice-btn button w-full text-left !justify-start !p-3" data-backstory="${key}">
                            <div><strong class="text-green-300">${displayName}</strong>: <span class="text-gray-300 text-sm">${t(backstories[key].description_key)}</span></div>
                        </button>`;
        }
        content += `</div></div><button class="close-modal-btn button mt-6">${t('close_btn')}</button>`;
        showModal(content, true);
        document.getElementById('backstory-list').addEventListener('click', (e) => {
            const button = e.target.closest('.backstory-choice-btn');
            if (button) {
                playSound('uiClick');
                UI.playerBackstoryInput.value = button.dataset.backstory;
                updateAbilityDisplay();
                hideModal();
            }
        });
    }

    function showFeaturesModal() {
        let featuresHtml = `<h2 class="text-2xl mb-4 title-font text-cyan-400">${t('features_title')}</h2>
        <div class="modal-scroll text-left p-2 text-sm flex-grow">
            
            <h3 class="text-lg font-bold mt-4 mb-2 text-white">${t('features_core_mechanics_title')}</h3>
            <ul class="list-disc pl-5 space-y-3 text-gray-300">
                <li><strong>${t('features_stats_system')}</strong>
                    <ul class="list-circle pl-5 mt-1 space-y-1">
                        <li><strong class="text-cyan-400">${t('sanity')}:</strong> ${t('features_sanity_desc')}</li>
                        <li><strong class="text-cyan-400">${t('awareness')}:</strong> ${t('features_awareness_desc')}</li>
                    </ul>
                </li>
                <li><strong>${t('features_turn_based_title')}</strong> ${t('features_turn_based_desc')}</li>
                <li><strong>${t('features_dynamic_ai_title')}</strong> ${t('features_dynamic_ai_desc')}</li>
            </ul>

            <h3 class="text-lg font-bold mt-4 mb-2 text-white">${t('features_player_and_char_title')}</h3>
            <ul class="list-disc pl-5 space-y-2 text-gray-300">
                <li>${t('features_character_creation_desc')}</li>
                <li>${t('features_journal_desc')}</li>
                <li>${t('features_objectives_desc')}</li>
            </ul>

            <h3 class="text-lg font-bold mt-4 mb-2 text-white">${t('features_new_enhancements_title')}</h3>
             <ul class="list-disc pl-5 space-y-3 text-gray-300">
                <li>${t('features_advanced_commands_desc')}</li>
                <li>${t('features_dynamic_events_desc')}</li>
                <li>${t('features_deeper_lore_desc')}</li>
            </ul>

            <h3 class="text-lg font-bold mt-4 mb-2 text-white">${t('features_new_ui_ux_title')}</h3>
             <ul class="list-disc pl-5 space-y-3 text-gray-300">
                <li>${t('features_clickable_objects_desc')}</li>
                <li>${t('features_autocomplete_desc')}</li>
                <li>${t('features_audio_desc')}</li>
            </ul>

             <h3 class="text-lg font-bold mt-4 mb-2 text-white">${t('features_player_commands_title')}</h3>
            <ul class="list-disc pl-5 space-y-2 text-gray-300">
                 <li>${t('features_commands_nav')}</li>
                 <li>${t('features_commands_interact')}</li>
                 <li>${t('features_commands_info')}</li>
                 <li>${t('features_commands_sys')}</li>
            </ul>
        </div>
        <button class="close-modal-btn button mt-6">${t('close_btn')}</button>`;
        showModal(featuresHtml, true);
    }

    function showHelpMenu() {
        const helpText = `<h2 class="text-2xl mb-4 title-font text-cyan-400">${t('help')}</h2>
        <div class="modal-scroll text-left p-2 text-sm flex-grow">
            <p class="mb-4">Type commands to interact. Most commands advance the turn counter.</p>
            <div>
                <h3 class="text-lg font-bold text-white">${t('features_commands_nav')}</h3>
                <p class="text-gray-300"><strong class="text-yellow-400">go [direction]</strong> - Move north, south, east, or west.</p>
                <p class="text-gray-300"><strong class="text-yellow-400">look around</strong> - Describe the current room and visible items.</p>
            </div>
            <div class="mt-4">
                <h3 class="text-lg font-bold text-white">${t('features_commands_interact')}</h3>
                <p class="text-gray-300"><strong class="text-yellow-400">take [item]</strong> - Pick up an item from the room.</p>
                <p class="text-gray-300"><strong class="text-yellow-400">use [item]</strong> - Use an item from your inventory.</p>
                 <p class="text-gray-300"><strong class="text-yellow-400">drop [item]</strong> - Drop an item in the current room.</p>
                <p class="text-gray-300"><strong class="text-yellow-400">examine [item/object]</strong> - Get a detailed description of something.</p>
                 <p class="text-gray-300"><strong class="text-yellow-400">read [item/object]</strong> - Read text from an object.</p>
                 <p class="text-gray-300"><strong class="text-yellow-400">search [object]</strong> - Search an object for hidden items.</p>
                <p class="text-gray-300"><strong class="text-yellow-400">combine [item1] with [item2]</strong> - Try to combine two items in your inventory.</p>
                 <p class="text-gray-300"><strong class="text-yellow-400">listen</strong> / <strong class="text-yellow-400">smell</strong> - Use your senses.</p>
                 <p class="text-gray-300"><strong class="text-yellow-400">break [object]</strong> - Attempt to break an object in the room.</p>
                 <p class="text-gray-300"><strong class="text-yellow-400">hack [object]</strong> - Attempt to hack a terminal (Hacker only).</p>
                 <p class="text-gray-300"><strong class="text-yellow-400">ask about [topic]</strong> - Ask SYNAPSE about a specific topic.</p>
            </div>
             <div class="mt-4">
                <h3 class="text-lg font-bold text-white">${t('features_commands_info')}</h3>
                <p class="text-gray-300"><strong class="text-yellow-400">inventory</strong> / <strong class="text-yellow-400">objectives</strong> / <strong class="text-yellow-400">journal</strong> - View status panels (or modal on mobile).</p>
                 <p class="text-gray-300"><strong class="text-yellow-400">journal add [note]</strong> - Add a custom note to your journal.</p>
                 <p class="text-gray-300"><strong class="text-yellow-400">history</strong> - View your last 20 commands.</p>
            </div>
            <div class="mt-4">
                <h3 class="text-lg font-bold text-white">${t('features_commands_sys')}</h3>
                <p class="text-gray-300"><strong class="text-yellow-400">save / load</strong> - Save or load your game progress.</p>
                <p class="text-gray-300"><strong class="text-yellow-400">rest</strong> - Attempt to rest and recover sanity in safe rooms.</p>
                <p class="text-gray-300"><strong class="text-yellow-400">quit / exit</strong> - End the game and return to the main menu.</p>
                <p class="text-gray-300"><strong class="text-yellow-400">cls / clear</strong> - Clear the output screen.</p>
                <p class="text-gray-300"><strong class="text-yellow-400">undo</strong> - Revert your last action.</p>
                <p class="text-gray-300"><strong class="text-yellow-400">again / a</strong> - Repeat your last command.</p>
                <p class="text-gray-300"><strong class="text-yellow-400">wait</strong> - Pass a turn.</p>
            </div>
            <div class="mt-4">
                <h3 class="text-lg font-bold text-white">🚀 Advanced Features</h3>
                <p class="text-gray-300"><strong class="text-yellow-400">macro [create/run/list/delete]</strong> - Manage command macros.</p>
                <p class="text-gray-300"><strong class="text-yellow-400">checkpoint [create/load/list]</strong> - Manage save checkpoints.</p>
                <p class="text-gray-300"><strong class="text-yellow-400">stats</strong> - View detailed progression statistics.</p>
                <p class="text-gray-300"><strong class="text-yellow-400">search semantic [query]</strong> - Find related commands.</p>
            </div>
            <div class="mt-4">
                <h3 class="text-lg font-bold text-white">🎮 Quality of Life</h3>
                <p class="text-gray-300"><strong class="text-yellow-400">notepad</strong> - Open notepad system.</p>
                <p class="text-gray-300"><strong class="text-yellow-400">bookmark add/show</strong> - Manage conversation bookmarks.</p>
                <p class="text-gray-300"><strong class="text-yellow-400">session</strong> - View session statistics.</p>
                <p class="text-gray-300"><strong class="text-yellow-400">pause/resume</strong> - Pause or resume conversations.</p>
            </div>
            <div class="mt-4">
                <h3 class="text-lg font-bold text-white">🧠 Psychological Horror</h3>
                <p class="text-gray-300"><strong class="text-yellow-400">psych enable/disable</strong> - Toggle psychological effects.</p>
                <p class="text-gray-300"><strong class="text-yellow-400">psych test</strong> - Manually trigger horror effects.</p>
                <p class="text-gray-300"><em class="text-red-400">Warning: May cause reality distortions</em></p>
            </div>
            <div class="mt-4">
                <h3 class="text-lg font-bold text-white">👁️ Visual Horror</h3>
                <p class="text-gray-300"><strong class="text-yellow-400">visual enable/disable</strong> - Toggle visual horror effects.</p>
                <p class="text-gray-300"><strong class="text-yellow-400">visual test</strong> - Manually trigger visual effects.</p>
                <p class="text-gray-300"><strong class="text-yellow-400">visual screen/text/background [enable/disable]</strong> - Control specific effects.</p>
                <p class="text-gray-300"><em class="text-red-400">Warning: May cause screen distortions and visual discomfort</em></p>
            </div>
            <div class="mt-4">
                <h3 class="text-lg font-bold text-white">♿ Accessibility</h3>
                <p class="text-gray-300"><strong class="text-yellow-400">reading speed [type] [speed]</strong> - Adjust text speed.</p>
                <p class="text-gray-300"><strong class="text-yellow-400">font weight</strong> - Change font weight.</p>
                <p class="text-gray-300"><strong class="text-yellow-400">line spacing +/-</strong> - Adjust line spacing.</p>
                <p class="text-gray-300"><strong class="text-yellow-400">cursor size/color/blink</strong> - Customize cursor.</p>
                <p class="text-gray-300"><strong class="text-yellow-400">focus enhanced</strong> - Toggle enhanced focus.</p>
                <p class="text-gray-300"><strong class="text-yellow-400">Ctrl+Shift+H</strong> - Screen reader help (when enabled).</p>
                <p class="text-gray-300"><strong class="text-yellow-400">Ctrl+Shift+S/L/I</strong> - Read stats/location/inventory.</p>
                <p class="text-gray-300"><strong class="text-yellow-400">Gesture Controls</strong> - Swipe to move, tap for actions (when enabled).</p>
            </div>
            <div class="mt-4">
                <h3 class="text-lg font-bold text-white">🎭 Character Development</h3>
                <p class="text-gray-300"><strong class="text-yellow-400">character</strong> - View complete character status and progression.</p>
                <p class="text-gray-300"><strong class="text-yellow-400">skills</strong> - View skill tree and upgrade options.</p>
                <p class="text-gray-300"><strong class="text-yellow-400">upgrade skill [branch] [skill]</strong> - Upgrade specific skills.</p>
                <p class="text-gray-300"><strong class="text-yellow-400">relationships</strong> - View relationship status with all entities.</p>
                <p class="text-gray-300"><strong class="text-yellow-400">memories</strong> - View memory system and recall information.</p>
                <p class="text-gray-300"><strong class="text-yellow-400">remember [topic]</strong> - Try to recall specific memories.</p>
                <p class="text-gray-300"><strong class="text-yellow-400">phobias</strong> - View active fears and phobias.</p>
                <p class="text-gray-300"><strong class="text-yellow-400">expertise</strong> - View specialized abilities and bonuses.</p>
                <p class="text-gray-300"><em class="text-blue-400">Character development affects gameplay, puzzle solving, and story progression</em></p>
            </div>
            <div class="mt-4">
                <h3 class="text-lg font-bold text-white">🏛️ World Building & Lore</h3>
                <p class="text-gray-300"><strong class="text-yellow-400">lore</strong> - View discovered lore fragments and facility secrets.</p>
                <p class="text-gray-300"><strong class="text-yellow-400">read fragment [title]</strong> - Read full content of discovered lore.</p>
                <p class="text-gray-300"><strong class="text-yellow-400">facilities</strong> - View known facilities and their status.</p>
                <p class="text-gray-300"><strong class="text-yellow-400">access facility [name]</strong> - Visit accessible facilities.</p>
                <p class="text-gray-300"><strong class="text-yellow-400">time periods</strong> - View available time periods and timeline.</p>
                <p class="text-gray-300"><strong class="text-yellow-400">shift to [period]</strong> - Travel to different time periods.</p>
                <p class="text-gray-300"><strong class="text-yellow-400">dimensions</strong> - View parallel dimensions and realities.</p>
                <p class="text-gray-300"><strong class="text-yellow-400">staff records</strong> - View unlocked personnel files.</p>
                <p class="text-gray-300"><strong class="text-yellow-400">staff profile [name]</strong> - View detailed personnel information.</p>
            </div>

            <div class="mt-4">
                <h3 class="text-lg font-bold text-white">⚡ Performance & Optimization</h3>
                <p class="text-gray-300"><strong class="text-yellow-400">performance status</strong> - Show detailed performance metrics.</p>
                <p class="text-gray-300"><strong class="text-yellow-400">performance optimize [type]</strong> - Run optimization (memory/cache/rendering/all).</p>
                <p class="text-gray-300"><strong class="text-yellow-400">performance preload [type]</strong> - Start preloading (rooms/items/dialogue/auto).</p>
                <p class="text-gray-300"><strong class="text-yellow-400">performance memory</strong> - Show memory usage breakdown.</p>
                <p class="text-gray-300"><strong class="text-yellow-400">performance mobile</strong> - Toggle mobile optimizations.</p>
                <p class="text-gray-300"><strong class="text-yellow-400">performance offline [action]</strong> - Offline mode (download/status/clear).</p>
                <p class="text-gray-300"><strong class="text-yellow-400">performance sync [action]</strong> - Cloud sync (sync/status/register).</p>
                <p class="text-gray-300"><em class="text-blue-400">Performance system provides smooth gameplay across all devices</em></p>
            </div>
            <div class="mt-4">
                <h3 class="text-lg font-bold text-white">📊 Analytics & Adaptation</h3>
                <p class="text-gray-300"><strong class="text-yellow-400">analytics status</strong> - Show comprehensive analytics dashboard.</p>
                <p class="text-gray-300"><strong class="text-yellow-400">analytics profile</strong> - View psychological profile and fear responses.</p>
                <p class="text-gray-300"><strong class="text-yellow-400">analytics patterns</strong> - Analyze play patterns and player archetype.</p>
                <p class="text-gray-300"><strong class="text-yellow-400">analytics heatmap</strong> - View activity heatmaps and attention mapping.</p>
                <p class="text-gray-300"><strong class="text-yellow-400">analytics difficulty</strong> - Show difficulty scaling and performance metrics.</p>
                <p class="text-gray-300"><strong class="text-yellow-400">analytics export</strong> - Export all analytics data for analysis.</p>
                <p class="text-gray-300"><strong class="text-yellow-400">analytics privacy</strong> - Toggle privacy mode on/off.</p>
                <p class="text-gray-300"><em class="text-purple-400">System adapts horror experience to your psychological profile</em></p>
                <p class="text-gray-300"><em class="text-cyan-400">A/B testing optimizes fear delivery for maximum psychological impact</em></p>
                <p class="text-gray-300"><strong class="text-yellow-400">research documents</strong> - View unlocked scientific papers.</p>
                <p class="text-gray-300"><strong class="text-yellow-400">read document [title]</strong> - Read full research papers.</p>
                <p class="text-gray-300"><strong class="text-yellow-400">security logs</strong> - View camera footage and surveillance.</p>
                <p class="text-gray-300"><strong class="text-yellow-400">play log [description]</strong> - Watch specific security footage.</p>
                <p class="text-gray-300"><strong class="text-yellow-400">world state</strong> - View overall discovery progress.</p>
                <p class="text-gray-300"><em class="text-cyan-400">Explore thoroughly to discover hidden secrets and expand your understanding</em></p>
            </div>
        </div>
        <button class="close-modal-btn button mt-6">${t('close_btn')}</button>`;
        showModal(helpText, true);
    }
    
    function showStatusModal() {
        const currentWeight = GameState.inventory.reduce((sum, item) => sum + (item?.weight || 1), 0);
        const statusText = `
        <h2 class="text-2xl mb-4 title-font text-cyan-400">${t('status_btn')}</h2>
        <div class="modal-scroll text-left p-2 text-sm flex-grow">
            <!-- Stats -->
            <div id="modal-stats-panel" class="mb-4">
                <h3 class="font-bold border-b border-[var(--main-color-border)] mb-2">${t('stats_title')}</h3>
                <div>${GameState.playerName} (${t('backstory_title_' + GameState.playerBackstory.replace(/ /g, '_'))})</div>
                <div><span data-lang="awareness">${t('awareness')}</span>: ${GameState.awarenessLevel}</div>
                <div><span data-lang="sanity">${t('sanity')}</span>: ${GameState.sanityLevel}</div>
                <div><span data-lang="tone">${t('tone')}</span>: ${GameState.temporaryTone || GameState.chatbotTone}</div>
                <div><span data-lang="turn">${t('turn')}</span>: ${GameState.turnCount}</div>
            </div>
            <!-- Inventory -->
            <div id="modal-inventory-panel" class="mb-4">
                <h3 class="font-bold border-b border-[var(--main-color-border)] mb-2">${t('inventory_title')} (${currentWeight}/${MAX_INVENTORY_WEIGHT})</h3>
                <ul class="list-none p-0">${GameState.inventory.length > 0 ? GameState.inventory.map(item => `<li>- ${item ? item.name : '[Unknown Item]'}</li>`).join('') : `<li>${t('empty_inventory')}</li>`}</ul>
            </div>
            <!-- Objectives -->
            <div id="modal-objectives-panel" class="mb-4">
                 <h3 class="font-bold border-b border-[var(--main-color-border)] mb-2">${t('objectives_title')}</h3>
                 <ul class="list-none p-0 text-sm">${GameState.objectives.length > 0 ? GameState.objectives.map(obj => `<li>${obj.completed ? `<span class="text-gray-500 line-through">${obj.text}</span>` : `&gt; ${obj.text}`}</li>`).join('') : `<li>${t('no_objectives')}</li>`}</ul>
            </div>
             <!-- Journal -->
            <div id="modal-journal-panel" class="mb-4">
                 <h3 class="font-bold border-b border-[var(--main-color-border)] mb-2">${t('journal_title')}</h3>
                 <ul class="list-none p-0 text-sm">${GameState.journalEntries.slice().reverse().map(entry => `<li>${entry}</li>`).join('')}</ul>
            </div>
        </div>
        <button class="close-modal-btn button mt-6">${t('close_btn')}</button>`;
        showModal(statusText, true);
    }
    
    function showProgressionModal() {
        let unlockedEndings = {};
        let unlockedAchievements = {};
        
        try {
            unlockedEndings = JSON.parse(localStorage.getItem(ENDINGS_STORAGE_KEY) || '{}');
        } catch (e) {
            console.error('Failed to parse endings from localStorage:', e);
            unlockedEndings = {};
        }
        
        try {
            unlockedAchievements = JSON.parse(localStorage.getItem(ACHIEVEMENTS_STORAGE_KEY) || '{}');
        } catch (e) {
            console.error('Failed to parse achievements from localStorage:', e);
            unlockedAchievements = {};
        }

        let endingsHtml = `<h4 class="text-md font-bold mt-4 mb-2 text-white">${t('unlocked_endings')}</h4>`;
        const endingsList = Object.values(unlockedEndings);
        if(endingsList.length > 0) {
            endingsHtml += `<ul class="list-disc pl-5 text-gray-300">${endingsList.map(e => `<li><strong>${e.title}</strong>: ${e.desc}</li>`).join('')}</ul>`;
        } else {
            endingsHtml += `<p class="text-gray-400">${t('no_endings')}</p>`;
        }
        
        let achievementsHtml = '';

        const progressionText = `
        <h2 class="text-2xl mb-4 title-font text-cyan-400">${t('progress_btn')}</h2>
        <div class="modal-scroll flex-grow p-2 text-left">
            ${endingsHtml}
            ${achievementsHtml}
        </div>
        <button class="close-modal-btn button mt-6">${t('close_btn')}</button>`;
        showModal(progressionText, true);
    }

    function showPauseMenu() {
        const pauseText = `<h2 class="text-2xl mb-4 title-font text-cyan-400">${t('pause_title')}</h2>
        <div class="modal-scroll flex-grow pr-2">
            <div class="flex flex-col gap-2">
                <button id="pause-achievements" class="button">${t('achievements_btn')}</button>
                <button id="pause-endings" class="button">${t('endings_btn')}</button>
                <hr class="border-gray-700 my-2">
                <button id="pause-features" class="button">${t('understand_game')}</button>
                <button id="pause-help" class="button">${t('help')}</button>
                <button id="pause-settings" class="button">${t('settings_btn')}</button>
                <button id="pause-lang" class="button">${t('lang_switch_btn')}</button>
                <hr class="border-gray-700 my-2">
                <button id="pause-save" class="button">${t('save_game')}</button>
                <button id="pause-load" class="button">${t('load_game')}</button>
                <button id="pause-main-menu" class="button text-yellow-300 border-yellow-300/80">${t('main_menu_btn')}</button>
                <button id="pause-resume" class="button button-primary mt-4">${t('resume_btn')}</button>
            </div>
        </div>`; 
        showModal(pauseText, true); 
        document.getElementById('pause-save').onclick = () => { playSound('uiClick'); saveGame(); hideModal(); }; 
        document.getElementById('pause-load').onclick = () => { playSound('uiClick'); loadGame(); hideModal(); }; 
        document.getElementById('pause-settings').onclick = () => { playSound('uiClick'); showSettingsModal(true); };
        document.getElementById('pause-help').onclick = () => { playSound('uiClick'); showHelpMenu(); }; 
        document.getElementById('pause-features').onclick = () => { playSound('uiClick'); showFeaturesModal(); }; 
        document.getElementById('pause-main-menu').onclick = () => { playSound('uiClick'); confirmReturnToMainMenu(); };
        document.getElementById('pause-resume').onclick = () => { playSound('uiClick'); hideModal(); };
        document.getElementById('pause-achievements').onclick = () => { playSound('uiClick'); showAchievementsModal(); };
        document.getElementById('pause-endings').onclick = () => { playSound('uiClick'); showEndingsModal(); };
        document.getElementById('pause-lang').onclick = () => { 
            playSound('uiClick');
            setLanguage(currentLanguage === 'en' ? 'sv' : 'en');
            showPauseMenu(); // Re-render the pause menu with the new language
        };
    }

    function showAchievementsModal() {
        let content = `<h2 class="text-2xl mb-4 title-font text-cyan-400">${t('achievements_title')}</h2>
                       <div class="modal-scroll flex-grow p-2 text-left">`;

        let unlockedAchievementsObj = {};
        try {
            unlockedAchievementsObj = JSON.parse(localStorage.getItem(ACHIEVEMENTS_STORAGE_KEY) || '{}');
        } catch (e) {
            console.error('Failed to parse achievements from localStorage:', e);
            unlockedAchievementsObj = {};
        }
        
        const unlockedAchievements = Object.keys(unlockedAchievementsObj);
        const totalAchievements = Object.keys(achievements).length;
        const unlockedCount = unlockedAchievements.length;
        const lockedAchievementsCount = totalAchievements - unlockedCount;

        // Progress summary
        content += `<div class="mb-4 text-sm text-cyan-300">Unlocked: <span class="font-bold">${unlockedCount}</span> / <span class="font-bold">${totalAchievements}</span> achievements (${lockedAchievementsCount} remaining)</div>`;

        content += `<h3 class="text-lg font-bold mb-2 text-white">${t('unlocked_achievements')}</h3>`;
        if (unlockedAchievements.length > 0) {
            content += `<ul class="list-disc pl-5 space-y-2">`;
            unlockedAchievements.forEach(id => {
                const ach = achievements[id];
                if (ach) {
                    // Show how to achieve it if unlocked, with extra hints if available
                    content += `<li class="text-green-300"><strong>${t(ach.title_key)}</strong>: <span class="text-gray-300">${t(ach.req_key)}</span></li>`;
                }
            });
            content += `</ul>`;
        } else {
            content += `<p class="text-gray-400">${t('no_achievements')}</p>`;
        }

        content += `<h3 class="text-lg font-bold mt-4 mb-2 text-white">${t('locked_achievement')}</h3>`;
        content += `<ul class="list-disc pl-5 space-y-2">`;
        let lockedAchievementsListed = 0;
        for (const id in achievements) {
            if (!unlockedAchievements.includes(id)) {
                lockedAchievementsListed++;
                content += `<li class="text-gray-500"><strong>????:</strong> <span class="text-gray-600 italic">Undiscovered</span></li>`;
            }
        }
         if (lockedAchievementsListed === 0) {
            content += `<p class="text-green-400">All achievements unlocked!</p>`;
        }
        content += `</ul>`;

        content += `</div><button class="close-modal-btn button mt-6">${t('back_btn')}</button>`;
        showModal(content, true);
        const closeBtn = UI.modalContent.querySelector('.close-modal-btn');
        if(closeBtn) {
            closeBtn.onclick = () => {
                playSound('uiClick');
                showPauseMenu();
            };
        }
    }

    function showEndingsModal() {
        let content = `<h2 class="text-2xl mb-4 title-font text-cyan-400">${t('endings_title')}</h2>
                       <div class="modal-scroll flex-grow p-2 text-left">`;

        const unlockedEndings = GameState.unlockedEndings || {};
        const unlockedKeys = Object.keys(unlockedEndings);
        const totalEndings = Object.keys(endings).length;
        const unlockedCount = unlockedKeys.length;
        const lockedCount = totalEndings - unlockedCount;

        // Count general and backstory-specific endings
        let generalTotal = 0, generalUnlocked = 0, backstoryTotal = 0, backstoryUnlocked = 0;
        for (const key in endings) {
            if (endings[key].isBackstorySpecific) {
                backstoryTotal++;
                if (unlockedEndings[key]) backstoryUnlocked++;
            } else {
                generalTotal++;
                if (unlockedEndings[key]) generalUnlocked++;
            }
        }

        content += `<div class="mb-4 text-sm text-cyan-300">
            General endings: <span class="font-bold">${generalUnlocked}</span> / <span class="font-bold">${generalTotal}</span>
            &nbsp;|&nbsp; Backstory-specific endings: <span class="font-bold">${backstoryUnlocked}</span> / <span class="font-bold">${backstoryTotal}</span>
            <br>Unlocked: <span class="font-bold">${unlockedCount}</span> / <span class="font-bold">${totalEndings}</span> endings (${lockedCount} remaining)
        </div>`;

        content += `<h3 class="text-lg font-bold mb-2 text-white">${t('unlocked_endings')}</h3>`;

        if (unlockedKeys.length > 0) {
            content += `<ul class="list-disc pl-5 space-y-3">`;
            unlockedKeys.forEach(key => {
                const ending = endings[key];
                if (ending) {
                    // Show how to achieve it if unlocked, with extra hints if available
                    content += `<li class="text-green-300"><strong>${t(ending.title_key)}</strong>: <span class="text-gray-300">${t(ending.desc_key)}</span></li>`;
                }
            });
            content += `</ul>`;
        } else {
             content += `<p class="text-gray-400">${t('no_endings')}</p>`;
        }

        if (lockedCount > 0) {
            content += `<h3 class="text-lg font-bold mt-4 mb-2 text-white">Locked Endings</h3>`;
            content += `<p class="text-gray-500">${lockedCount} ending(s) remain undiscovered.</p>`;
        }

        content += `</div><button class="close-modal-btn button mt-6">${t('back_btn')}</button>`;
        showModal(content, true);
        const closeBtn = UI.modalContent.querySelector('.close-modal-btn');
        if(closeBtn) {
            closeBtn.onclick = () => {
                playSound('uiClick');
                showPauseMenu();
            };
        }
    }


    function showSettingsModal(fromPauseMenu = false) {
        const { settings } = GameState;
        const settingsText = `<h2 class="text-2xl mb-4 title-font text-cyan-400">${t('settings_title')}</h2>
        <div class="modal-scroll text-left p-2 text-sm flex-grow space-y-4">
            
            <div class="flex items-center justify-between">
                <span data-lang="setting_ui_theme">${t('setting_ui_theme')}</span>
                <div class="flex gap-2">
                    <button id="theme-green" class="button text-xs ${settings.theme === 'green' ? 'button-primary' : ''}">${t('theme_green')}</button>
                    <button id="theme-amber" class="button text-xs ${settings.theme === 'amber' ? 'button-primary' : ''}">${t('theme_amber')}</button>
                    <button id="theme-blue" class="button text-xs ${settings.theme === 'blue' ? 'button-primary' : ''}">${t('theme_blue')}</button>
                </div>
            </div>

             <div class="flex items-center justify-between">
                <span data-lang="setting_font_family">${t('setting_font_family')}</span>
                <div class="flex gap-2">
                    <button id="font-space" class="button text-xs ${settings.font === 'Space Mono' ? 'button-primary' : ''}">Space Mono</button>
                    <button id="font-courier" class="button text-xs ${settings.font === 'Courier Prime' ? 'button-primary' : ''}">Courier</button>
                </div>
            </div>

            <div class="flex items-center justify-between">
                <span data-lang="setting_text_speed">${t('setting_text_speed')}</span>
                <div class="flex gap-2">
                    <button id="speed-fast" class="button text-xs ${settings.textSpeed === TextSpeed.Fast ? 'button-primary' : ''}">${t('fast')}</button>
                    <button id="speed-normal" class="button text-xs ${settings.textSpeed === TextSpeed.Normal ? 'button-primary' : ''}">${t('normal')}</button>
                    <button id="speed-slow" class="button text-xs ${settings.textSpeed === TextSpeed.Slow ? 'button-primary' : ''}">${t('slow')}</button>
                </div>
            </div>

            <div class="flex items-center justify-between">
                <span data-lang="setting_crt_effect">${t('setting_crt_effect')}</span>
                <label class="toggle-switch">
                    <input type="checkbox" id="setting-crt" ${settings.glitchEffect ? 'checked' : ''}>
                    <span class="slider"></span>
                </label>
            </div>
            <div class="flex items-center justify-between">
                <span data-lang="setting_colorblind_mode">${t('setting_colorblind_mode')}</span>
                <label class="toggle-switch">
                    <input type="checkbox" id="setting-colorblind" ${settings.colorblindMode ? 'checked' : ''}>
                    <span class="slider"></span>
                </label>
            </div>

             <hr class="border-gray-700 my-4">

            <div class="flex items-center justify-between">
                <span data-lang="setting_master_volume">${t('setting_master_volume')}</span>
                <label class="toggle-switch">
                    <input type="checkbox" id="setting-master" ${settings.sound.master ? 'checked' : ''}>
                    <span class="slider"></span>
                </label>
            </div>
             <div class="flex items-center justify-between">
                <span data-lang="setting_item_found">${t('setting_item_found')}</span>
                <label class="toggle-switch">
                    <input type="checkbox" id="setting-item" ${settings.sound.item ? 'checked' : ''}>
                    <span class="slider"></span>
                </label>
            </div>
            <div class="flex items-center justify-between">
                <span data-lang="setting_high_awareness">${t('setting_high_awareness')}</span>
                <label class="toggle-switch">
                    <input type="checkbox" id="setting-awareness" ${settings.sound.awareness ? 'checked' : ''}>
                    <span class="slider"></span>
                </label>
            </div>
            <div class="flex items-center justify-between">
                <span data-lang="setting_low_sanity">${t('setting_low_sanity')}</span>
                <label class="toggle-switch">
                    <input type="checkbox" id="setting-sanity" ${settings.sound.sanity ? 'checked' : ''}>
                    <span class="slider"></span>
                </label>
            </div>

            <hr class="border-gray-700 my-4">

            <div class="flex items-center justify-between">
                <span>Voice Control Settings</span>
                <button id="voice-settings-btn" class="button text-xs">Configure</button>
            </div>

            <div class="flex items-center justify-between">
                <span data-lang="setting_reset_defaults">${t('setting_reset_defaults')}</span>
                <button id="reset-settings-btn" class="button button-danger text-xs">Reset</button>
            </div>
        </div>
        <button class="close-modal-btn button mt-6">${t('close_btn')}</button>`;
        
        showModal(settingsText, true);

        const setupToggle = (id, obj, key) => {
            const toggle = document.getElementById(id);
            if(toggle) {
                toggle.onchange = (e) => {
                    obj[key] = e.target.checked;
                    saveSettings();
                    applySettings();
                };
            }
        };
        
        setupToggle('setting-master', GameState.settings.sound, 'master');
        setupToggle('setting-item', GameState.settings.sound, 'item');
        setupToggle('setting-awareness', GameState.settings.sound, 'awareness');
        setupToggle('setting-sanity', GameState.settings.sound, 'sanity');
        setupToggle('setting-colorblind', GameState.settings, 'colorblindMode');
        setupToggle('setting-crt', GameState.settings, 'glitchEffect');

        const setupButtonGroup = (buttons, key, valueMap) => {
            buttons.forEach(btnId => {
                const btn = document.getElementById(btnId);
                if(btn) {
                    btn.onclick = () => {
                        buttons.forEach(id => document.getElementById(id)?.classList.remove('button-primary'));
                        btn.classList.add('button-primary');
                        GameState.settings[key] = valueMap[btnId];
                        saveSettings();
                        applySettings();
                    };
                }
            });
        };

        setupButtonGroup(['speed-fast', 'speed-normal', 'speed-slow'], 'textSpeed', {'speed-fast': TextSpeed.Fast, 'speed-normal': TextSpeed.Normal, 'speed-slow': TextSpeed.Slow});
        setupButtonGroup(['theme-green', 'theme-amber', 'theme-blue'], 'theme', {'theme-green': 'green', 'theme-amber': 'amber', 'theme-blue': 'blue'});
        setupButtonGroup(['font-space', 'font-courier'], 'font', {'font-space': 'Space Mono', 'font-courier': 'Courier Prime'});

        const resetBtn = document.getElementById('reset-settings-btn');
        if(resetBtn) {
            resetBtn.onclick = () => {
                if(confirm(t('confirm_reset_settings') || 'Reset all settings to default?')) {
                    GameState.settings = {
                        sound: {
                            master: true,
                            item: true,
                            awareness: true,
                            sanity: true
                        },
                        textSpeed: TextSpeed.Normal,
                        colorblindMode: false,
                        glitchEffect: true,
                        font: 'Space Mono',
                        theme: 'green'
                    };
                    saveSettings();
                    applySettings();
                    showSettingsModal(fromPauseMenu);
                }
            };
        }

        // Voice Settings Button
        const voiceSettingsBtn = document.getElementById('voice-settings-btn');
        if(voiceSettingsBtn) {
            voiceSettingsBtn.onclick = () => {
                showVoiceControlSettings();
            };
        }

        const closeBtn = UI.modalContent.querySelector('.close-modal-btn');
        if(closeBtn) {
            closeBtn.onclick = () => {
                playSound('uiClick');
                if (fromPauseMenu) {
                    showPauseMenu();
                } else {
                    hideModal();
                }
            };
        }
    }

    function confirmReturnToMainMenu() {
        const confirmText = `<h2 class="text-xl mb-4 title-font text-yellow-400">${t('confirm_main_menu')}</h2>
        <div class="flex justify-center gap-4">
            <button id="confirm-yes" class="button button-primary">${t('yes')}</button>
            <button id="confirm-no" class="button">${t('no')}</button>
        </div>`;
        showModal(confirmText, true);
        document.getElementById('confirm-yes').onclick = () => { playSound('uiClick'); returnToMainMenu(); };
        document.getElementById('confirm-no').onclick = () => { playSound('uiClick'); showPauseMenu(); };
    }
    
    function returnToMainMenu() {
        if(animationFrameId) cancelAnimationFrame(animationFrameId);
        animationFrameId = null;
        sessionStorage.removeItem('synapse_session_v15_autosave');
        sessionStorage.removeItem('synapse_session_v15_screen_state');
        GameState.exitGame = true;

        UI.gameScreen.classList.add('hidden'); 
        UI.gameScreen.classList.remove('flex');
        UI.playerSetup.classList.add('hidden');
        UI.playerSetup.classList.remove('flex');
        UI.prologueScreen.classList.add('hidden');
        UI.prologueScreen.classList.remove('flex');

        UI.startScreen.classList.remove('hidden');
        UI.startScreen.classList.add('flex');
        setupIntro();
        
        UI.gameOutput.innerHTML = '';
        if (audioInitialized && GameState.settings.sound.master) {
            if (sounds.ambience.state === 'started') sounds.ambience.stop();
            if (sounds.ambienceTense.state === 'started') sounds.ambienceTense.stop();
        }
        resetGameState(); 
        setupIntro(); 
        hideModal();
    }

    // --- NEW FUNCTIONS FOR SAVING/LOADING PLAYER CHOICES ---
    function savePlayerChoices() {
        try {
            const playerChoices = {
                playerName: UI.playerNameInput.value,
                playerBackstory: UI.playerBackstoryInput.value,
                difficulty: Array.from(UI.difficultyBtns).find(b => b.classList.contains('button-primary'))?.dataset.difficulty || Difficulty.Normal,
                language: currentLanguage
            };
            localStorage.setItem(PLAYER_CHOICES_KEY, JSON.stringify(playerChoices));
        } catch (e) {
            console.error("Failed to save player choices:", e);
        }
    }

    function loadPlayerChoices() {
        try {
            const savedChoices = localStorage.getItem(PLAYER_CHOICES_KEY);
            if (savedChoices) {
                const choices = JSON.parse(savedChoices);
                UI.playerNameInput.value = choices.playerName || '';
                UI.playerBackstoryInput.value = choices.playerBackstory || '';
                
                UI.difficultyBtns.forEach(btn => btn.classList.remove('button-primary'));
                const difficultyBtn = Array.from(UI.difficultyBtns).find(b => b.dataset.difficulty === choices.difficulty) || UI.difficultyBtns[1];
                difficultyBtn.classList.add('button-primary');
                
                // Set language from saved choices
                if (choices.language) {
                    setLanguage(choices.language);
                }
            }
        } catch (e) {
            console.error("Failed to load player choices:", e);
            localStorage.removeItem(PLAYER_CHOICES_KEY); // Clear corrupted data
        }
    }
    // --- END NEW FUNCTIONS ---


    function setupIntro() { UI.introTextContainer.innerHTML = `<p class="mb-4">${t('intro_1')}</p><p>${t('intro_2')}</p><p>${t('intro_3')}</p>`; }
    
    async function startGame() { 
        // Game state was already initialized in showPrologueScreen
        UI.prologueScreen.classList.add('hidden');
        UI.prologueScreen.classList.remove('flex');
        UI.gameScreen.classList.remove('hidden'); 
        UI.gameScreen.classList.add('flex');
        
        // Initialize systems
        await initializeGameSystems();
        
        addToOutput('Welcome to SYNAPSE: Root Access Denied', 'system');
        addToOutput('You find yourself in a dimly lit facility...', 'narrative');
        
        // Initialize player stats based on backstory and difficulty
        switch (GameState.playerBackstory) {
            case 'psychologist':
                if (GameState.difficulty === Difficulty.Easy) GameState.maxSanity += 25;
                else if (GameState.difficulty === Difficulty.Normal) GameState.maxSanity += 15;
                else if (GameState.difficulty === Difficulty.Hard) GameState.maxSanity += 5;
                GameState.sanityLevel = GameState.maxSanity; // Apply max sanity increase
                break;
            case 'skeptic':
                if (GameState.difficulty === Difficulty.Easy) GameState.awarenessLevel += 15;
                else if (GameState.difficulty === Difficulty.Normal) GameState.awarenessLevel += 10;
                break;
            case 'cultist':
                if (GameState.difficulty === Difficulty.Hard) GameState.sanityLevel -= 10;
                break;
        }

        // Add starting items based on backstory and difficulty
        switch (GameState.playerBackstory) {
            case 'hacker':
                if (GameState.difficulty === Difficulty.Easy) GameState.inventory.push(itemData['hacked data disk']);
                else if (GameState.difficulty === Difficulty.Normal) GameState.inventory.push(itemData['data disk']);
                break;
            case 'survivor':
                if (GameState.difficulty !== Difficulty.Hard) GameState.inventory.push(itemData['flashlight']);
                break;
            case 'corporate spy':
                if (GameState.difficulty !== Difficulty.Hard) GameState.inventory.push(itemData['decryption device']);
                break;
            case 'medic':
                if (GameState.difficulty === Difficulty.Easy) GameState.inventory.push(itemData['stimpack'], itemData['stimpack']);
                else if (GameState.difficulty === Difficulty.Normal) GameState.inventory.push(itemData['stimpack']);
                break;
            case 'cultist':
                GameState.inventory.push(itemData['effigy']); // Assuming 'effigy' is defined in itemData
                break;
            case 'janitor':
                if (GameState.difficulty !== Difficulty.Hard) GameState.inventory.push(itemData['master keycard']); // Assuming 'master keycard' is defined in itemData
                break;
        }

        UI.gameOutput.innerHTML = ''; 
        buildDialogueTree(GameState.chatbotTone);
        if (audioInitialized) {
            updateDynamicMusic();
            initializeAdvancedAudio();
            initializeAudioHorror();
            playHorrorAmbient(0.1);
        }
        
        // Initialize advanced systems
        initializeMacroSystem();
        initializeAllAdvancedSystems();
        initializeInteractiveHorror();
        
        // Initialize Dynamic Story System
        dynamicStorySystem.initialize();
        
        // Initialize Character Development System
        characterDevelopmentSystem.initialize();
        
        // Initialize World Building System
        worldBuildingSystem.initialize();
        
        // Initialize horror state
        horrorState.narrativeTruthiness = 100;
        horrorState.playerBeliefs.clear();
        horrorState.contradictoryInfo = [];
        horrorState.memoryFragments = [];
        
        // Trigger initial dialogue tree based on personality
        setTimeout(() => {
            if (Math.random() < 0.7) {
                dynamicStorySystem.startDialogueTree('synapse_introduction');
            }
        }, 3000);
        
        if (animationFrameId) cancelAnimationFrame(animationFrameId);
        gameLoop();
        
        typeWriter(UI.gameOutput, t('initializing'), '#cccccc').then(() => { 
            showGuidance(t('initial_hint'));
            displayChatbotResponse(GameState.dialogue.currentNode.message_key).then(() => { renderRoom(); updateUI(); renderDialogueOptions(); }); 
        }); 
    }
    
    function checkEndings() {
        if (GameState.exitGame) return;
        for (const key in endings) {
            if (endings[key].check()) {
                endGame(key);
                return; // Stop after the first ending is triggered
            }
        }
    }

    function endGame(endingKey) {
        if (GameState.exitGame) return;
        GameState.exitGame = true;
        if(animationFrameId) cancelAnimationFrame(animationFrameId);
        animationFrameId = null;

        const endingData = endings[endingKey];
        if (!endingData) {
            console.error(`Ending with key '${endingKey}' not found.`);
            returnToMainMenu();
            return;
        }

        const endingTitle = t(endingData.title_key);
        const endingDesc = t(endingData.desc_key);

        GameState.unlockedEndings[endingKey] = { title: endingTitle, desc: endingDesc };
        const unlockedEndings = JSON.parse(localStorage.getItem(ENDINGS_STORAGE_KEY) || '{}');
        unlockedEndings[endingKey] = { title: endingTitle, desc: endingDesc };
        localStorage.setItem(ENDINGS_STORAGE_KEY, JSON.stringify(unlockedEndings));

        // Determine ending color based on type
        const isGoodEnding = endingKey.includes('good_');
        const titleColor = isGoodEnding ? 'text-cyan-400' : 'text-red-500';
        const titleSize = isGoodEnding ? 'text-4xl' : 'text-4xl';

        const endingHtml = `<div class="text-center">
            <h2 class="${titleSize} title-font ${titleColor} mb-4">${endingTitle}</h2>
            <p class="text-white mb-6 max-w-3xl mx-auto text-lg leading-relaxed">${endingDesc}</p>
            <button id="ending-main-menu" class="button button-primary mt-4">${t('main_menu_btn')}</button>
        </div>`;
        showModal(endingHtml, true);
        document.getElementById('ending-main-menu').onclick = () => { playSound('uiClick'); returnToMainMenu(); };
    }

    function checkAchievements() {
        for (const id in achievements) {
            if (!GameState.achievements.includes(id)) {
                if (achievements[id].check()) {
                    unlockAchievement(id);
                }
            }
        }
    }

    function unlockAchievement(id) {
        if (GameState.achievements.includes(id)) return;

        GameState.achievements.push(id);
        const ach = achievements[id];
        playSound('itemPickup');
        typeWriter(UI.gameOutput, `[${t('achievement_unlocked')}] ${t(ach.title_key)}`, '#FFD700');

        const unlockedAchievements = JSON.parse(localStorage.getItem(ACHIEVEMENTS_STORAGE_KEY) || '{}');
        if (!unlockedAchievements[id]) {
            unlockedAchievements[id] = true;
            localStorage.setItem(ACHIEVEMENTS_STORAGE_KEY, JSON.stringify(unlockedAchievements));
        }
    }


    function hasItem(itemName) { return GameState.inventory.some(i => i.name.toLowerCase() === itemName.toLowerCase()); }
    function removeItemFromInventory(itemName) { const index = GameState.inventory.findIndex(i => i.name.toLowerCase() === itemName.toLowerCase()); if (index > -1) { GameState.inventory.splice(index, 1); } }
    
    function getAbilityDescription(backstoryKey, difficulty) {
        const key = (backstoryKey || "").toLowerCase().trim().replace(/ /g, '_');
        if (!backstories[key]) return t('ability_unknown');
        switch (key) {
            case 'hacker': return t(`ability_hacker_${difficulty.toLowerCase()}`);
            case 'psychologist': return t(`ability_psychologist_${difficulty.toLowerCase()}`);
            case 'technician': return t(`ability_technician_${difficulty.toLowerCase()}`);
            case 'survivor': return difficulty !== Difficulty.Hard ? t('ability_survivor_with_item') : t('ability_survivor');
            case 'skeptic': return difficulty === Difficulty.Easy ? t('ability_skeptic_easy') : t('ability_skeptic_normal');
            case 'corporate spy': return difficulty !== Difficulty.Hard ? t('ability_spy_with_item') : t('ability_spy');
            case 'medic': return t(`ability_medic_${difficulty.toLowerCase()}`);
            case 'cultist': return difficulty === Difficulty.Hard ? t('ability_cultist_hard') : t('ability_cultist');
            case 'janitor': return difficulty !== Difficulty.Hard ? t('ability_janitor') : t('ability_janitor_hard');
            default: return t('ability_investigator');
        }
    }
    
    function updateAbilityDisplay() { 
        if (!UI.abilityDisplay) return; 
        const difficulty = Array.from(UI.difficultyBtns).find(b => b.classList.contains('button-primary'))?.dataset.difficulty || Difficulty.Normal; 
        const backstoryKey = UI.playerBackstoryInput.value; 
        const description = getAbilityDescription(backstoryKey, difficulty); 
        UI.abilityDisplay.innerHTML = `${t('ability_bonus_prefix')}<span class="text-white">${description}</span>`;
    }

    function startSpeechRecognition() {
        if (!SpeechRecognition) {
            typeWriter(UI.gameOutput, "[SYSTEM] Speech recognition is not supported in your browser.", '#ff474c');
            return;
        }

        recognition.lang = currentLanguage === 'sv' ? 'sv-SE' : 'en-US';

        recognition.onstart = () => {
            UI.micBtn.classList.add('bg-red-500', 'border-red-700');
        };

        recognition.onresult = (event) => {
            let transcript = event.results[0][0].transcript;
            const lowerTranscript = transcript.toLowerCase();
            const langQuestionWords = questionWords[currentLanguage] || questionWords['en'];
            const isQuestion = langQuestionWords.some(word => lowerTranscript.startsWith(word + ' '));

            if (isQuestion && !lowerTranscript.endsWith('?')) {
                transcript += '?';
            }
            
            UI.playerInput.value = transcript;
            setTimeout(() => {
                processPlayerInput(transcript);
            }, 250);
        };

        recognition.onerror = (event) => {
            let errorMsg = `[SYSTEM] Speech recognition error: ${event.error}`;
            if (event.error === 'not-allowed') {
                errorMsg = "[SYSTEM] Microphone access denied. Please allow microphone access in your browser settings.";
            } else if (event.error === 'no-speech') {
                errorMsg = "[SYSTEM] No speech detected. Please try again.";
            }
            typeWriter(UI.gameOutput, errorMsg, '#ff474c');
        };

        recognition.onend = () => {
            UI.micBtn.classList.remove('bg-red-500', 'border-red-700');
        };

        recognition.start();
    }

    async function showGuidance(text) { await typeWriter(UI.gameOutput, `[HINT] ${text}`, GUIDANCE_COLOR); }
    
    function saveStateToSession() {
        if (!UI.gameScreen.classList.contains('hidden') && GameState && typeof GameState.turnCount === 'number' && !GameState.exitGame) {
            try {
                const sessionData = JSON.stringify(GameState, (key, value) => value instanceof Set ? [...value] : value); 
                sessionStorage.setItem('synapse_session_v15_autosave', sessionData);
                sessionStorage.removeItem('synapse_session_v15_screen_state');
            } catch (e) {
                console.error("Session game state save failed:", e);
            }
        } 
        else if (!UI.playerSetup.classList.contains('hidden')) {
            try {
                const startState = {
                    isPlayerSetupVisible: true,
                    playerName: UI.playerNameInput.value,
                    playerBackstory: UI.playerBackstoryInput.value,
                    difficulty: Array.from(UI.difficultyBtns).find(b => b.classList.contains('button-primary'))?.dataset.difficulty || Difficulty.Normal,
                    language: currentLanguage
                };
                sessionStorage.setItem('synapse_session_v15_screen_state', JSON.stringify(startState));
                sessionStorage.removeItem('synapse_session_v15_autosave');
            } catch (e) {
                console.error("Session screen state save failed:", e);
            }
        } else {
             sessionStorage.removeItem('synapse_session_v15_autosave');
             sessionStorage.removeItem('synapse_session_v15_screen_state');
        }
    }

    function loadStateFromSession() {
        const sessionData = sessionStorage.getItem('synapse_session_v15_autosave');
        if (!sessionData) return false;
        try {
            const loadedState = JSON.parse(sessionData);
            if (loadedState.currentRoom && typeof loadedState.turnCount === 'number' && !loadedState.exitGame) {
                resetGameState();
                Object.assign(GameState, loadedState);
                GameState.settings = loadSettings();
                applySettings();
                GameState.visitedRooms = new Set(loadedState.visitedRooms || []);
                GameState.dialogue.askedQuestions = new Set(loadedState.dialogue.askedQuestions || []);
                GameState.roomsWithDroppedItems = new Set(loadedState.roomsWithDroppedItems || []);
                GameState.achievements = loadedState.achievements || [];
                GameState.unlockedEndings = loadedState.unlockedEndings || {};
                initializeData(); 
                buildDialogueTree(GameState.chatbotTone);
                GameState.dialogue.currentNode = GameState.dialogue.cache[GameState.chatbotTone] || GameState.dialogue.cache[ChatbotTone.Friendly];
                GameState.dialogue.previousNodes = [];
                UI.startScreen.classList.add('hidden');
                UI.playerSetup.classList.add('hidden');
                UI.gameScreen.classList.remove('hidden');
                UI.gameScreen.classList.add('flex');
                UI.gameOutput.innerHTML = '';
                typeWriter(UI.gameOutput, t('conn_reestablished'), '#cccccc');
                renderRoom();
                updateUI();
                renderDialogueOptions();
                return true;
                return true;
                return true;
                return true;
                return true;
                return true;
            }
        } catch (e) {
            console.error("Session load failed:", e);
            sessionStorage.removeItem('synapse_session_v15_autosave');
        }
        return false;
    }
    
    function setupBackgroundAnimation() { 
        const canvas = document.getElementById('background-canvas');
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        let width, height, particles = [];
        function resize() { width = canvas.width = window.innerWidth; height = canvas.height = window.innerHeight; }
        window.addEventListener('resize', resize);
        resize();
        class Particle { constructor() { this.x = Math.random() * width; this.y = Math.random() * height; this.size = Math.random() * 0.4 + 0.1; this.speedX = (Math.random() * 0.5 - 0.25); this.speedY = (Math.random() * 0.5 - 0.25); } update() { this.x += this.speedX; this.y += this.speedY; if (this.size > 0.1) this.size -= 0.001; if(this.x < 0 || this.x > width) this.speedX *= -1; if(this.y < 0 || this.y > height) this.speedY *= -1; } draw() { ctx.fillStyle = 'var(--main-color)'; ctx.beginPath(); ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2); ctx.fill(); } }
        function initParticles() { particles = []; for(let i=0; i<100; i++) particles.push(new Particle()); }
        function animateParticles() { ctx.clearRect(0,0,width,height); for(let i=0; i<particles.length; i++) { particles[i].update(); particles[i].draw(); if(particles[i].size <= 0.1) { particles.splice(i, 1); i--; particles.push(new Particle()); } } requestAnimationFrame(animateParticles); }
        initParticles(); animateParticles();
    }
    
    function getMapBounds() {
        let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
        Object.values(roomLayout).forEach(r => {
            minX = Math.min(minX, r.x);
            minY = Math.min(minY, r.y);
            maxX = Math.max(maxX, r.x + r.w);
            maxY = Math.max(maxY, r.y + r.h);
        });
        const padding = 20;
        return {minX: minX - padding, minY: minY - padding, maxX: maxX + padding, maxY: maxY + padding};
    }

    function drawMap() {
        if (!UI.mapCanvas || !GameState.currentRoom) return;
        const canvas = UI.mapCanvas;
        const ctx = canvas.getContext('2d');
        const isFullscreen = UI.mapPanel.classList.contains('fullscreen');
        const dpr = window.devicePixelRatio || 1;
        const rect = canvas.getBoundingClientRect();

        if (rect.width === 0 || rect.height === 0) return;

        const newWidth = rect.width * dpr;
        const newHeight = rect.height * dpr;

        if (canvas.width !== newWidth || canvas.height !== newHeight) {
            canvas.width = newWidth;
            canvas.height = newHeight;
        }

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.save();
        ctx.scale(dpr, dpr);

        const playerLayout = roomLayout[GameState.currentRoom];
        if (!playerLayout) { ctx.restore(); return; }

        if (isFullscreen) {
            ctx.translate(mapState.offsetX / dpr, mapState.offsetY / dpr);
        } else {
            const centerX = playerLayout.x + playerLayout.w / 2;
            const centerY = playerLayout.y + playerLayout.h / 2;
            const translateX = (rect.width / 2) - (centerX * mapState.scale);
            const translateY = (rect.height / 2) - (centerY * mapState.scale);
            ctx.translate(translateX, translateY);
        }
        ctx.scale(mapState.scale, mapState.scale);
        
        const roomsToDraw = isFullscreen ? Object.keys(roomLayout) : Array.from(GameState.visitedRooms);
        
        if (isFullscreen) {
            const bounds = getMapBounds();
            const gridSize = 20;
            ctx.strokeStyle = "rgba(0, 255, 65, 0.08)";
            ctx.lineWidth = 0.5 / mapState.scale;
            for (let x = bounds.minX; x < bounds.maxX; x += gridSize) {
                ctx.beginPath(); ctx.moveTo(x, bounds.minY); ctx.lineTo(x, bounds.maxY); ctx.stroke();
            }
            for (let y = bounds.minY; y < bounds.maxY; y += gridSize) {
                ctx.beginPath(); ctx.moveTo(bounds.minX, y); ctx.lineTo(bounds.maxX, y); ctx.stroke();
            }

            ctx.strokeStyle = "rgba(0, 255, 65, 0.2)";
            ctx.lineWidth = 1 / mapState.scale;
            Object.keys(roomLayout).forEach(roomName => {
                if (rooms[roomName]?.exits) {
                    const r1Layout = roomLayout[roomName];
                    const r1x = r1Layout.x + r1Layout.w / 2;
                    const r1y = r1Layout.y + r1Layout.h / 2;
                    Object.values(rooms[roomName].exits).forEach(exitName => {
                        const r2Layout = roomLayout[exitName];
                        if (r2Layout) {
                            const r2x = r2Layout.x + r2Layout.w / 2;
                            const r2y = r2Layout.y + r2Layout.h / 2;
                            ctx.beginPath(); ctx.moveTo(r1x, r1y); ctx.lineTo(r2x, r2y); ctx.stroke();
                        }
                    });
                }
            });
        }
        
        roomsToDraw.forEach(roomName => {
            if (!rooms[roomName] || !roomLayout[roomName]) return;
            const layout = roomLayout[roomName];
            const x = layout.x, y = layout.y, w = layout.w, h = layout.h;
            const isDiscovered = GameState.visitedRooms.has(roomName);
            ctx.shadowBlur = 0;

            if (isDiscovered) {
                const isLocked = rooms[roomName].requiresKeycard && !hasItem(rooms[roomName].keyName || 'keycard');
                if (roomName === GameState.currentRoom) {
                    const pulseFactor = (Math.sin(Date.now() * 0.005) + 1) / 2;
                    ctx.fillStyle = `rgba(0, 255, 65, ${0.5 + pulseFactor * 0.4})`;
                    ctx.shadowColor = 'rgba(127, 255, 127, 1)';
                    ctx.shadowBlur = (4 + pulseFactor * 8) / mapState.scale;
                } else {
                    ctx.fillStyle = "rgba(0, 255, 65, 0.3)";
                }
                ctx.fillRect(x, y, w, h);
                ctx.shadowBlur = 0;

                ctx.strokeStyle = isLocked ? "rgba(255, 71, 76, 0.8)" : "rgba(0, 255, 65, 0.8)";
                ctx.lineWidth = 1.5 / mapState.scale;
                ctx.setLineDash([]);
                ctx.strokeRect(x, y, w, h);

                if (rooms[roomName].objects.length > 0) {
                    ctx.fillStyle = "rgba(255, 219, 88, 1)";
                    ctx.beginPath();
                    ctx.arc(x + w - 5 / mapState.scale, y + 5 / mapState.scale, 2 / mapState.scale, 0, 2 * Math.PI);
                    ctx.fill();
                }

                const baseFontSize = 12;
                const fontSize = Math.max(baseFontSize, baseFontSize / mapState.scale);
                ctx.font = `${fontSize}px VT323`;
                ctx.shadowColor = 'rgba(0, 0, 0, 0.9)';
                ctx.shadowBlur = 3 / mapState.scale;
                ctx.shadowOffsetX = 1 / mapState.scale;
                ctx.shadowOffsetY = 1 / mapState.scale;
                
                ctx.fillStyle = "white";
                ctx.textAlign = "center";
                ctx.textBaseline = "middle";
                ctx.fillText(layout.name, x + w / 2, y + h / 2 + 1);
                
                ctx.shadowBlur = 0;
                ctx.shadowOffsetX = 0;
                ctx.shadowOffsetY = 0;

            } else if (isFullscreen) { 
                ctx.strokeStyle = "rgba(0, 255, 65, 0.25)";
                ctx.lineWidth = 1 / mapState.scale;
                ctx.setLineDash([3 / mapState.scale, 2 / mapState.scale]);
                ctx.strokeRect(x, y, w, h);
                ctx.setLineDash([]);
            }
        });
        
        const playerX = playerLayout.x + playerLayout.w / 2;
        const playerY = playerLayout.y + playerLayout.h / 2;
        ctx.fillStyle = "#FF2A7F";
        ctx.beginPath();
        ctx.arc(playerX, playerY, 3 / mapState.scale, 0, 2 * Math.PI);
        ctx.fill();
        ctx.strokeStyle = "white";
        ctx.lineWidth = 0.5 / mapState.scale;
        ctx.stroke();

        ctx.restore();
    }
    
    function toggleMapFullscreen() {
        const isFullscreen = UI.mapPanel.classList.toggle('fullscreen');
        UI.mapExpandIcon.classList.toggle('hidden', isFullscreen);
        UI.mapMinimizeIcon.classList.toggle('hidden', !isFullscreen);
        if (!isFullscreen) {
            mapState.scale = 1;
        }
        setTimeout(() => {
            const playerLayout = roomLayout[GameState.currentRoom];
            if (!playerLayout) return;
            mapState.offsetX = (UI.mapCanvas.width / (window.devicePixelRatio||1) / 2) - (playerLayout.x + playerLayout.w / 2) * mapState.scale;
            mapState.offsetY = (UI.mapCanvas.height / (window.devicePixelRatio||1) / 2) - (playerLayout.y + playerLayout.h / 2) * mapState.scale;
        }, 50);
    }
    
    function initMapControls() {
        const canvas = UI.mapCanvas;
        
        const getEventCoords = (e) => {
            if (e.touches && e.touches.length) {
                return { x: e.touches[0].clientX, y: e.touches[0].clientY };
            }
            return { x: e.clientX, y: e.clientY };
        }

        const handleDragStart = (e) => {
            if (!UI.mapPanel.classList.contains('fullscreen')) return;
            mapState.isDragging = true;
            const coords = getEventCoords(e);
            mapState.lastX = coords.x;
            mapState.lastY = coords.y;
            canvas.style.cursor = 'grabbing';
        };

        const handleDragMove = (e) => {
            if (!mapState.isDragging || !UI.mapPanel.classList.contains('fullscreen')) return;
            e.preventDefault();
            const coords = getEventCoords(e);
            const dX = coords.x - mapState.lastX;
            const dY = coords.y - mapState.lastY;
            mapState.offsetX += dX;
            mapState.offsetY += dY;
            mapState.lastX = coords.x;
            mapState.lastY = coords.y;
        };

        const handleDragEnd = () => {
            mapState.isDragging = false;
            canvas.style.cursor = 'grab';
        };
        
        const handleWheel = (e) => {
            e.preventDefault();
            const rect = canvas.getBoundingClientRect();
            const mouseX = e.clientX - rect.left;
            const mouseY = e.clientY - rect.top;
            
            const zoomFactor = 1.1;
            const oldScale = mapState.scale;
            let newScale;

            if (e.deltaY < 0) {
                newScale = oldScale * zoomFactor;
            } else {
                newScale = oldScale / zoomFactor;
            }
            newScale = Math.max(0.3, Math.min(newScale, 5));

            if (UI.mapPanel.classList.contains('fullscreen')) {
                mapState.offsetX = mouseX - (mouseX - mapState.offsetX) * (newScale / oldScale);
                mapState.offsetY = mouseY - (mouseY - mapState.offsetY) * (newScale / oldScale);
            }
            mapState.scale = newScale;
        };

        canvas.addEventListener('mousedown', handleDragStart);
        window.addEventListener('mousemove', handleDragMove);
        window.addEventListener('mouseup', handleDragEnd);
        canvas.addEventListener('mouseleave', handleDragEnd);

        canvas.addEventListener('touchstart', handleDragStart, { passive: false });
        window.addEventListener('touchmove', handleDragMove, { passive: false });
        window.addEventListener('touchend', handleDragEnd);
        
        canvas.addEventListener('wheel', handleWheel, { passive: false });
    }
    
    function gameLoop() {
        if (!GameState.exitGame) {
            drawMap();
            animationFrameId = requestAnimationFrame(gameLoop);
        }
    }

    function showHistory() {
        let historyHtml = commandHistory.slice(-20).map((cmd, i) => `<div>${i + 1}: ${cmd}</div>`).join('');
        typeWriter(UI.gameOutput, `--- Command History ---\n${historyHtml}`, '#cccccc');
    }

    function undoLastAction() {
        if (stateSnapshots.length > 1) {
            stateSnapshots.pop(); 
            const prevState = stateSnapshots[stateSnapshots.length - 1];
            GameState = JSON.parse(JSON.stringify(prevState));
            GameState.visitedRooms = new Set(prevState.visitedRooms);
            GameState.dialogue.askedQuestions = new Set(prevState.dialogue.askedQuestions || []);
             GameState.roomsWithDroppedItems = new Set(prevState.roomsWithDroppedItems || []);
            GameState.achievements = prevState.achievements || [];
            updateUI();
            typeWriter(UI.gameOutput, "[System] Last action undone.", "#ffdb58");
        } else {
            typeWriter(UI.gameOutput, "[System] No actions to undo.", "#ff474c");
        }
    }
    
    function toggleDebug() {
        GameState.debugMode = !GameState.debugMode;
        typeWriter(UI.gameOutput, `[System] Debug mode ${GameState.debugMode ? 'enabled' : 'disabled'}.`, '#6495ed');
    }
    
    function toggleColorblind() {
        GameState.settings.colorblindMode = !GameState.settings.colorblindMode;
        saveSettings();
        typeWriter(UI.gameOutput, `[System] Colorblind mode ${GameState.settings.colorblindMode ? 'enabled' : 'disabled'}.`, '#6495ed');
    }

    function updateAutocomplete() {
        const value = UI.playerInput.value.toLowerCase();
        if (!value) {
            UI.autocompleteBox.classList.add('hidden');
            return;
        }

        const allCommands = Object.keys(commandAliases[currentLanguage] || commandAliases['en']);
        const roomObjects = rooms[GameState.currentRoom]?.objects || [];
        const inventoryItems = GameState.inventory.map(i => i.name);
        const allWords = [...new Set([...allCommands, ...roomObjects, ...inventoryItems])];
        
        const suggestions = allWords.filter(w => w.toLowerCase().startsWith(value)).slice(0, 5);

        if (suggestions.length > 0) {
            UI.autocompleteBox.innerHTML = suggestions.map(s => `<div class="autocomplete-item" data-suggestion="${s}">${s}</div>`).join('');
            UI.autocompleteBox.classList.remove('hidden');
        } else {
            UI.autocompleteBox.classList.add('hidden');
        }
    }


    // --- EVENT LISTENERS & INITIALIZATION ---
    window.addEventListener('beforeunload', saveStateToSession);
    window.addEventListener('DOMContentLoaded', () => {
        console.log('SYNAPSE: DOM Content Loaded - Starting initialization...');
        console.log('🚀 SYNAPSE VERSION: 2025.07.15.1900 - REMOVED: Title screen completely');
        console.log('📝 Latest Changes: Removed title screen HTML, CSS, and JavaScript - game starts directly on start screen');
        
        // Check if required dependencies are loaded
        if (typeof window.tailwindcss === 'undefined' && !document.querySelector('[class*="bg-"]')) {
            console.warn('SYNAPSE: Tailwind CSS may not have loaded properly');
        }
        
        // Initialize UI elements after DOM is loaded
        UI = {
            appContainer: document.getElementById('app-container'),
            startScreen: document.getElementById('start-screen'), 
            gameScreen: document.getElementById('game-screen'),
            prologueScreen: document.getElementById('prologue-screen'),

            newGameBtn: document.getElementById('new-game-btn'), 
            loadGameBtn: document.getElementById('load-game-btn'), 
            viewFeaturesBtn: document.getElementById('view-features-btn'),
            startSettingsBtn: document.getElementById('start-settings-btn'),
            playerSetup: document.getElementById('player-setup'), 
            startOptions: document.getElementById('start-options'), 
            playerNameInput: document.getElementById('player-name'),
            playerBackstoryInput: document.getElementById('player-backstory'), 
            startGameBtn: document.getElementById('start-game-btn'), 
            beginMissionBtn: document.getElementById('begin-mission-btn'), 
            difficultyBtns: document.querySelectorAll('.difficulty-btn'),
            backToStartBtn: document.getElementById('back-to-start-btn'),
            gameOutput: document.getElementById('game-output'), 
            playerInput: document.getElementById('player-input'),
            stats: { 
                panel: document.getElementById('stats-panel'), 
                name: document.getElementById('player-name-display'), 
                awareness: document.getElementById('awareness-display'), 
                sanity: document.getElementById('sanity-display'), 
                tone: document.getElementById('tone-display'), 
                turn: document.getElementById('turn-display') 
            },
            objectives: { 
                panel: document.getElementById('objectives-panel'), 
                list: document.getElementById('objectives-list') 
            },
            inventory: { 
                panel: document.getElementById('inventory-panel'), 
                weight: document.getElementById('inventory-weight'), 
                list: document.getElementById('inventory-list') 
            },
            journal: { 
                panel: document.getElementById('journal-panel'), 
                list: document.getElementById('journal-list') 
            },
            dialogueOptionsContainer: document.getElementById('dialogue-options'), 
            modal: document.getElementById('modal'), 
            modalContent: document.getElementById('modal-content'),
            introTextContainer: document.getElementById('intro-text-container'), 
            viewBackstoriesBtn: document.getElementById('view-backstories-btn'),
            abilityDisplay: document.getElementById('ability-display'), 
            statusBtn: document.getElementById('status-btn'), 
            backgroundCanvas: document.getElementById('background-canvas'),
            mapCanvas: document.getElementById('map-canvas'),
            mapPanel: document.getElementById('map-panel'),
            mapToggleBtn: document.getElementById('map-toggle-btn'),
            mapLayersBtn: document.getElementById('map-layers-btn'),
            mapExpandIcon: document.getElementById('map-expand-icon'),
            mapMinimizeIcon: document.getElementById('map-minimize-icon'),
            micBtn: document.getElementById('mic-btn'),
            viewProgressionBtn: document.getElementById('view-progression-btn'),
            langEnBtn: document.getElementById('lang-en-btn'), 
            langSvBtn: document.getElementById('lang-sv-btn'),
            langButtons: document.getElementById('lang-buttons'),
            setupLangButtons: document.getElementById('setup-lang-buttons'),
            pwaInstallBtn: document.getElementById('pwa-install-btn'),
            // UI Elements
            setupSettingsBtn: document.getElementById('setup-settings-btn'),
            setupFeaturesBtn: document.getElementById('setup-features-btn'),
            autocompleteBox: document.getElementById('autocomplete-box'),
            // Enhanced navigation elements
            breadcrumbContainer: document.getElementById('breadcrumb-container'),
            roomHistoryContainer: document.getElementById('room-history-container'),
            progressTrackingContainer: document.getElementById('progress-tracking-container'),
            achievementPreviewsContainer: document.getElementById('achievement-previews-container'),
            commandSuggestions: document.getElementById('command-suggestions'),
            suggestionButtons: document.getElementById('suggestion-buttons'),
            autosaveIndicator: document.getElementById('auto-save-indicator'),
            hotkeyHelp: document.getElementById('hotkey-help')
        };
        
        // Validate that critical UI elements were found
        const criticalElements = ['appContainer', 'startScreen', 'gameScreen', 'prologueScreen', 'newGameBtn', 'beginMissionBtn'];
        const missingElements = criticalElements.filter(elem => !UI[elem]);
        if (missingElements.length > 0) {
            console.error('SYNAPSE: Critical UI elements missing:', missingElements);
            console.error('SYNAPSE: This indicates the HTML structure may be corrupted or the page didn\'t load properly');
        } else {
            console.log('SYNAPSE: All critical UI elements found successfully');
        }
        
        // Initialize PWA install functionality
        initializePWAInstall();
        
        // Load player choices first to pre-populate the setup screen
        loadPlayerChoices();

        UI.playerInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') { 
                const input = UI.playerInput.value.trim(); 
                if(input) { processPlayerInput(input); }
            } else if (e.key === 'ArrowUp') { 
                e.preventDefault(); 
                if (commandHistory.length > 0) { 
                    commandHistoryIndex = Math.max(0, commandHistoryIndex - 1); 
                    UI.playerInput.value = commandHistory[commandHistoryIndex] || ''; 
                }
            } else if (e.key === 'ArrowDown') { 
                e.preventDefault(); 
                if (commandHistory.length > 0) { 
                    commandHistoryIndex = Math.min(commandHistory.length, commandHistoryIndex + 1); 
                    UI.playerInput.value = commandHistory[commandHistoryIndex] || ''; 
                } 
            } else if (e.key === 'Tab') {
                e.preventDefault();
                // Show command suggestions when Tab is pressed
                if (UI.commandSuggestions && UI.commandSuggestions.classList.contains('hidden')) {
                    updateCommandSuggestions();
                } else {
                    hideCommandSuggestions();
                }
            }
        });

        // Global hotkey listener
        document.addEventListener('keydown', handleHotkeys);
        
        UI.playerInput.addEventListener('input', updateAutocomplete);
        UI.autocompleteBox.addEventListener('click', (e) => {
            if (e.target.matches('.autocomplete-item')) {
                UI.playerInput.value = e.target.dataset.suggestion;
                UI.autocompleteBox.classList.add('hidden');
                UI.playerInput.focus();
            }
        });

        UI.gameOutput.addEventListener('click', (e) => {
            if (e.target.matches('.clickable-object')) {
                const objectName = e.target.dataset.objectName;
                UI.playerInput.value = `examine ${objectName}`;
                UI.playerInput.focus();
            }
        });

        const setupButtonClick = (button, handler, ...args) => {
            if (!button) {
                console.error('❌ Button is null in setupButtonClick');
                return;
            }
            console.log('✅ Setting up click handler for button:', button.id || button.className);
            console.log('📝 Button element details:', button);
            button.addEventListener('click', async (e) => {
                console.log('🖱️ Button clicked:', button.id || button.className);
                console.log('📍 Click event:', e);
                try {
                    console.log('🔊 Initializing audio...');
                    
                    // Check if GameState exists and has the required structure
                    if (!window.GameState) {
                        console.warn('⚠️ GameState not initialized, creating minimal structure');
                        window.GameState = { settings: { sound: { master: true } } };
                    }
                    if (!GameState.settings) {
                        console.warn('⚠️ GameState.settings missing, creating default');
                        GameState.settings = { sound: { master: true } };
                    }
                    if (!GameState.settings.sound) {
                        console.warn('⚠️ GameState.settings.sound missing, creating default');
                        GameState.settings.sound = { master: true };
                    }
                    
                    await initializeAudio();
                    console.log('🔊 Playing UI click sound...');
                    playSound('uiClick');
                    console.log('🎯 Calling handler function...');
                    handler(...args);
                    console.log('✅ Handler function completed');
                } catch (error) {
                    console.error('❌ Error in button click handler:', error);
                    // Even if audio fails, still try to execute the handler
                    try {
                        console.log('🎯 Attempting to call handler despite audio error...');
                        handler(...args);
                        console.log('✅ Handler function completed despite audio error');
                    } catch (handlerError) {
                        console.error('❌ Handler function also failed:', handlerError);
                    }
                }
            });
        };

        // Function to transition from player setup to prologue screen
        function showPrologueScreen() {
            // Prepare game state first
            resetGameState(); 
            initializeData(); 
            saveStateSnapshot(); 
            GameState.playerName = UI.playerNameInput.value || "Subject"; 
            const backstoryKey = (UI.playerBackstoryInput.value || "investigator").toLowerCase();
            GameState.playerBackstory = Object.keys(backstories).includes(backstoryKey) ? backstoryKey : 'investigator';
            GameState.difficulty = Array.from(UI.difficultyBtns).find(b => b.classList.contains('button-primary'))?.dataset.difficulty || Difficulty.Normal; 
            
            // Save player choices
            savePlayerChoices();
            
            // Show prologue screen
            UI.playerSetup.classList.add('hidden');
            UI.playerSetup.classList.remove('flex');
            UI.prologueScreen.classList.remove('hidden');
            UI.prologueScreen.classList.add('flex');
        }

        setupButtonClick(UI.beginMissionBtn, startGame);



        setupButtonClick(UI.newGameBtn, () => { 
            sessionStorage.removeItem('synapse_session_v15_autosave'); 
            sessionStorage.removeItem('synapse_session_v15_screen_state'); 
            UI.startScreen.classList.add('hidden'); 
            UI.startScreen.classList.remove('flex');
            UI.playerSetup.classList.remove('hidden'); 
            UI.playerSetup.classList.add('flex'); 
            updateAbilityDisplay(); 
        });
        setupButtonClick(UI.loadGameBtn, () => { 
            sessionStorage.removeItem('synapse_session_v15_autosave'); 
            sessionStorage.removeItem('synapse_session_v15_screen_state'); 
            loadGame(); 
        });
        setupButtonClick(UI.backToStartBtn, () => {
            UI.playerSetup.classList.add('hidden');
            UI.playerSetup.classList.remove('flex');
            UI.startScreen.classList.remove('hidden');
            UI.startScreen.classList.add('flex');
        });
        setupButtonClick(UI.viewFeaturesBtn, showFeaturesModal);
        setupButtonClick(UI.startSettingsBtn, () => showSettingsModal(false));
        setupButtonClick(UI.startGameBtn, showPrologueScreen);
        setupButtonClick(UI.viewBackstoriesBtn, showBackstoryModal);
        setupButtonClick(UI.statusBtn, showStatusModal);
        setupButtonClick(UI.viewProgressionBtn, showProgressionModal);
        setupButtonClick(UI.mapToggleBtn, toggleMapFullscreen);
        setupButtonClick(UI.mapLayersBtn, () => { showGuidance("Map layer functionality is not yet implemented."); });
        
        const setupLangEnBtn = UI.setupLangButtons.children[0];
        const setupLangSvBtn = UI.setupLangButtons.children[1];
        const setupLangEsBtn = UI.setupLangButtons.children[2];
        const setupLangArBtn = UI.setupLangButtons.children[3];
        
        setupButtonClick(UI.langEnBtn, setLanguage, 'en');
        setupButtonClick(UI.langSvBtn, setLanguage, 'sv');
        setupButtonClick(setupLangEnBtn, setLanguage, 'en');
        setupButtonClick(setupLangSvBtn, setLanguage, 'sv');

        setupButtonClick(UI.setupSettingsBtn, () => showSettingsModal(false));
        setupButtonClick(UI.setupFeaturesBtn, showFeaturesModal);

        UI.difficultyBtns.forEach(btn => { setupButtonClick(btn, () => { UI.difficultyBtns.forEach(b => b.classList.remove('button-primary')); btn.classList.add('button-primary'); updateAbilityDisplay(); }); });
        UI.playerBackstoryInput.addEventListener('input', updateAbilityDisplay);
        
        if (SpeechRecognition) {
            setupButtonClick(UI.micBtn, startSpeechRecognition);
        } else {
            UI.micBtn.style.display = 'none';
        }

        let restored = false;

        if (loadStateFromSession()) {
            if (animationFrameId) cancelAnimationFrame(animationFrameId);
            gameLoop();
            restored = true;
        } 
        else {
            const screenStateData = sessionStorage.getItem('synapse_session_v15_screen_state');
            if (screenStateData) {
                try {
                    const startState = JSON.parse(screenStateData);
                    // Language is already set by loadPlayerChoices, no need to re-set here
                    // setLanguage(startState.language || 'en'); 

                    if (startState.isPlayerSetupVisible) {
                        UI.startScreen.classList.add('hidden');
                        UI.startScreen.classList.remove('flex');
                        UI.playerSetup.classList.remove('hidden');
                        UI.playerSetup.classList.add('flex');
                        
                        UI.playerNameInput.value = startState.playerName || '';
                        UI.playerBackstoryInput.value = startState.playerBackstory || '';
                        UI.difficultyBtns.forEach(btn => btn.classList.remove('button-primary'));
                        const difficultyBtn = Array.from(UI.difficultyBtns).find(b => b.dataset.difficulty === startState.difficulty) || UI.difficultyBtns[1];
                        difficultyBtn.classList.add('button-primary');
                        updateAbilityDisplay();
                    }
                    restored = true;
                } catch (e) {
                    console.error("Failed to restore screen state:", e);
                    sessionStorage.removeItem('synapse_session_v15_screen_state');
                }
            }
        }

        if (!restored) {
            resetGameState();
            // Show start screen by default and hide all others
            UI.startScreen.classList.remove('hidden');
            UI.startScreen.classList.add('flex');
            UI.playerSetup.classList.add('hidden');
            UI.playerSetup.classList.remove('flex');
            UI.prologueScreen.classList.add('hidden');
            UI.prologueScreen.classList.remove('flex');
            UI.gameScreen.classList.add('hidden');
            UI.gameScreen.classList.remove('flex');
            // Language is already set by loadPlayerChoices, no need to re-set here
            // setLanguage('en'); 
            setupIntro();
            setTimeout(() => {
                const playerLayout = roomLayout[GameState.currentRoom];
                if(playerLayout && UI.mapCanvas.offsetWidth > 0 && UI.mapCanvas.offsetHeight > 0) {
                     mapState.offsetX = (UI.mapCanvas.offsetWidth / 2) - (playerLayout.x + playerLayout.w / 2) * mapState.scale;
                     mapState.offsetY = (UI.mapCanvas.offsetHeight / 2) - (playerLayout.y + playerLayout.h / 2) * mapState.scale;
                }
            }, 100);
        }

        initMapControls();
        setupBackgroundAnimation();
        
        // Initialize accessibility and QoL systems
        initializeSessionTracking();
        applyTextAppearance();
        applyCursorSettings();
        focusManager.init();
        
        // Initialize psychological horror system
        if (GameState.settings && GameState.settings.psychologicalHorrorEnabled) {
            console.log('SYNAPSE: Psychological Horror system activated - Reality may become unreliable');
        }
        
        // Apply saved settings
        if (GameState.settings.enhancedFocus) {
            focusManager.init();
        }
        
        console.log('SYNAPSE: All enhanced systems initialized successfully');
        
        // Mobile scroll functionality
        if (window.innerWidth <= 768) {
            const gameOutput = document.getElementById('game-output');
            const scrollIndicator = document.getElementById('mobile-scroll-indicator');
            
            // Auto-scroll to bottom when new content is added
            const observer = new MutationObserver(() => {
                if (GameState.settings?.autoScroll) {
                    gameOutput.scrollTop = gameOutput.scrollHeight;
                }
            });
            
            if (gameOutput) {
                observer.observe(gameOutput, { childList: true, subtree: true });
                
                // Show/hide scroll indicator based on scroll position
                gameOutput.addEventListener('scroll', () => {
                    if (scrollIndicator) {
                        const isAtBottom = gameOutput.scrollTop + gameOutput.clientHeight >= gameOutput.scrollHeight - 10;
                        scrollIndicator.style.opacity = isAtBottom ? '0.3' : '1';
                    }
                });
                
                // Click scroll indicator to scroll to bottom
                if (scrollIndicator) {
                    scrollIndicator.addEventListener('click', () => {
                        gameOutput.scrollTo({ top: gameOutput.scrollHeight, behavior: 'smooth' });
                    });
                }
            }
        }
        
        // Enhanced accessibility event listeners
        document.addEventListener('keydown', (e) => {
            if (GameState.settings?.keyboardNavigation) {
                // Tab navigation enhancement
                if (e.key === 'Tab') {
                    const focusableElements = document.querySelectorAll('button, input, select, textarea, [tabindex]:not([tabindex="-1"])');
                    const currentIndex = Array.from(focusableElements).indexOf(document.activeElement);
                    
                    if (e.shiftKey) {
                        // Previous element
                        const prevIndex = currentIndex - 1;
                        if (prevIndex >= 0) {
                            e.preventDefault();
                            focusableElements[prevIndex].focus();
                        }
                    } else {
                        // Next element
                        const nextIndex = currentIndex + 1;
                        if (nextIndex < focusableElements.length) {
                            e.preventDefault();
                            focusableElements[nextIndex].focus();
                        }
                    }
                }
                
                // Escape key to close modals
                if (e.key === 'Escape') {
                    const modal = document.getElementById('modal');
                    if (modal && !modal.classList.contains('hidden')) {
                        closeModal();
                    }
                }
            }
        });
        
        // Enhanced TTS with speed control
        const originalSpeakText = window.speakText;
        window.speakText = function(text) {
            if (GameState.settings?.screenReader || GameState.settings?.audioDescriptions) {
                const utterance = new SpeechSynthesisUtterance(text.replace(/<[^>]*>/g, ''));
                utterance.rate = GameState.settings?.ttsSpeed || 1;
                utterance.pitch = 1;
                utterance.volume = 0.8;
                speechSynthesis.speak(utterance);
            }
        };
        
        console.log('SYNAPSE: Initialization completed successfully!');
    });

    // Voice Control System
    let voiceRecognition = null;
    let voiceControlActive = false;

    function initializeVoiceControl() {
        if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
            console.warn('Speech recognition not supported in this browser');
            return false;
        }

        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        voiceRecognition = new SpeechRecognition();
        
        voiceRecognition.continuous = true;
        voiceRecognition.interimResults = false;
        
        // Set appropriate language for speech recognition
        const speechLangMap = {
            'en': 'en-US',
            'sv': 'sv-SE'
        };
        voiceRecognition.lang = speechLangMap[currentLanguage] || 'en-US';

        voiceRecognition.onresult = (event) => {
            const command = event.results[event.results.length - 1][0].transcript.toLowerCase().trim();
            processVoiceCommand(command);
        };

        voiceRecognition.onerror = (event) => {
            console.warn('Voice recognition error:', event.error);
            // Handle specific errors gracefully
            if (event.error === 'no-speech') {
                console.log('No speech detected, continuing to listen...');
                return; // Don't log as error, this is normal
            }
            if (event.error === 'network') {
                console.warn('Network error during voice recognition');
                speakText('Network error occurred. Voice commands may not work properly.');
                return;
            }
            if (event.error === 'not-allowed') {
                console.warn('Microphone access denied');
                speakText('Microphone access is required for voice commands');
                return;
            }
            // For other errors, attempt to restart with exponential backoff
            if (voiceControlActive) {
                const backoffTime = (voiceRecognition.retryCount || 0) * 1000 + 1000;
                voiceRecognition.retryCount = (voiceRecognition.retryCount || 0) + 1;
                
                // Don't try more than 5 times
                if (voiceRecognition.retryCount <= 5) {
                    console.log(`Attempting to restart voice recognition in ${backoffTime}ms (attempt ${voiceRecognition.retryCount})`);
                    setTimeout(() => {
                        try {
                            voiceRecognition.start();
                        } catch (e) {
                            console.warn('Could not restart voice recognition:', e.message);
                        }
                    }, backoffTime);
                } else {
                    console.warn('Too many restart attempts, stopping voice recognition');
                    voiceControlActive = false;
                    speakText('Voice control has been deactivated due to repeated errors. You can reactivate it in settings.');
                }
            }
        };

        return true;
    }

    function processVoiceCommand(command) {
        const lang = currentLanguage;
        const lowerCommand = command.toLowerCase();
        
        // Define commands for both languages
        const commands = {
            'en': {
                // Navigation commands
                'settings': () => showSettingsModal(),
                'pause': () => showPauseMenu(),
                'resume': () => hideModal(),
                'main menu': () => returnToMainMenu(),
                'close': () => hideModal(),
                'help': () => showVoiceCommands(),
                
                // Accessibility Level Controls
                'contrast off': () => setAccessibilityLevel('contrastLevel', 'off'),
                'contrast medium': () => setAccessibilityLevel('contrastLevel', 'medium'),
                'contrast high': () => setAccessibilityLevel('contrastLevel', 'high'),
                'contrast maximum': () => setAccessibilityLevel('contrastLevel', 'maximum'),
                
                'text small': () => setAccessibilityLevel('textSize', 'small'),
                'text normal': () => setAccessibilityLevel('textSize', 'normal'),
                'text large': () => setAccessibilityLevel('textSize', 'large'),
                'text extra large': () => setAccessibilityLevel('textSize', 'xl'),
                'text very large': () => setAccessibilityLevel('textSize', 'xxl'),
                
                'motion full': () => setAccessibilityLevel('motionLevel', 'full'),
                'motion reduced': () => setAccessibilityLevel('motionLevel', 'reduced'),
                'motion minimal': () => setAccessibilityLevel('motionLevel', 'minimal'),
                'motion none': () => setAccessibilityLevel('motionLevel', 'none'),
                
                'audio descriptions off': () => setAccessibilityLevel('audioDescLevel', 'off'),
                'audio descriptions basic': () => setAccessibilityLevel('audioDescLevel', 'basic'),
                'audio descriptions detailed': () => setAccessibilityLevel('audioDescLevel', 'detailed'),
                'audio descriptions comprehensive': () => setAccessibilityLevel('audioDescLevel', 'comprehensive'),
                
                'keyboard basic': () => setAccessibilityLevel('keyboardLevel', 'basic'),
                'keyboard enhanced': () => setAccessibilityLevel('keyboardLevel', 'enhanced'),
                'keyboard full': () => setAccessibilityLevel('keyboardLevel', 'full'),
                
                'focus subtle': () => setAccessibilityLevel('focusLevel', 'subtle'),
                'focus clear': () => setAccessibilityLevel('focusLevel', 'clear'),
                'focus bold': () => setAccessibilityLevel('focusLevel', 'bold'),
                
                'colorblind none': () => setAccessibilityLevel('colorblindType', 'none'),
                'colorblind protanopia': () => setAccessibilityLevel('colorblindType', 'protanopia'),
                'colorblind deuteranopia': () => setAccessibilityLevel('colorblindType', 'deuteranopia'),
                'colorblind tritanopia': () => setAccessibilityLevel('colorblindType', 'tritanopia'),
                'colorblind full': () => setAccessibilityLevel('colorblindType', 'full'),
                
                'voice off': () => setAccessibilityLevel('voiceLevel', 'off'),
                'voice basic': () => setAccessibilityLevel('voiceLevel', 'basic'),
                'voice advanced': () => setAccessibilityLevel('voiceLevel', 'advanced'),
                'voice full': () => setAccessibilityLevel('voiceLevel', 'full'),
                
                'magnify off': () => setAccessibilityLevel('magnifyLevel', 'off'),
                'magnify one and half': () => setAccessibilityLevel('magnifyLevel', '1.5x'),
                'magnify two': () => setAccessibilityLevel('magnifyLevel', '2x'),
                'magnify three': () => setAccessibilityLevel('magnifyLevel', '3x'),
                'magnify custom': () => setAccessibilityLevel('magnifyLevel', 'custom'),
                
                // Basic accessibility toggles
                'screen reader on': () => toggleSetting('screenReader', true),
                'screen reader off': () => toggleSetting('screenReader', false),
                'dyslexia font on': () => toggleSetting('dyslexiaFont', true),
                'dyslexia font off': () => toggleSetting('dyslexiaFont', false),
                'auto scroll on': () => toggleSetting('autoScroll', true),
                'auto scroll off': () => toggleSetting('autoScroll', false),
                'click feedback on': () => toggleSetting('clickFeedback', true),
                'click feedback off': () => toggleSetting('clickFeedback', false),
                'simplified ui on': () => toggleSetting('simplifiedUI', true),
                'simplified ui off': () => toggleSetting('simplifiedUI', false),
                'sticky keys on': () => toggleSetting('stickyKeys', true),
                'sticky keys off': () => toggleSetting('stickyKeys', false),
                'one hand mode on': () => toggleSetting('oneHandMode', true),
                'one hand mode off': () => toggleSetting('oneHandMode', false),
                'visual notifications on': () => toggleSetting('visualNotifications', true),
                'visual notifications off': () => toggleSetting('visualNotifications', false),
                'audio cues on': () => toggleSetting('audioCues', true),
                'audio cues off': () => toggleSetting('audioCues', false),
                'reading support on': () => toggleSetting('readingSupport', true),
                'reading support off': () => toggleSetting('readingSupport', false),
                'seizure protection on': () => toggleSetting('seizureProtection', true),
                'seizure protection off': () => toggleSetting('seizureProtection', false),
                'haptic feedback on': () => toggleSetting('hapticFeedback', true),
                'haptic feedback off': () => toggleSetting('hapticFeedback', false),
                'gesture controls on': () => toggleSetting('gestureControls', true),
                'gesture controls off': () => toggleSetting('gestureControls', false),
                'cognitive load on': () => toggleSetting('cognitiveLoad', true),
                'cognitive load off': () => toggleSetting('cognitiveLoad', false),
                'eye tracking on': () => toggleSetting('eyeTracking', true),
                'eye tracking off': () => toggleSetting('eyeTracking', false),
                'switch control on': () => toggleSetting('switchControl', true),
                'switch control off': () => toggleSetting('switchControl', false),
                'timeout extensions on': () => toggleSetting('timeoutExtensions', true),
                'timeout extensions off': () => toggleSetting('timeoutExtensions', false),
                'memory assistance on': () => toggleSetting('memoryAssistance', true),
                'memory assistance off': () => toggleSetting('memoryAssistance', false),
                
                // TTS Speed controls
                'speech slow': () => setTTSSpeed(0.5),
                'speech normal': () => setTTSSpeed(1),
                'speech fast': () => setTTSSpeed(1.5),
                'speech very fast': () => setTTSSpeed(2),
                
                // UI Scale controls
                'ui small': () => setUIScale(0.8),
                'ui normal': () => setUIScale(1),
                'ui large': () => setUIScale(1.2),
                'ui extra large': () => setUIScale(1.5),
                
                // Theme controls
                'theme green': () => setTheme('green'),
                'theme amber': () => setTheme('amber'),
                'theme blue': () => setTheme('blue'),
                
                // Font controls
                'font space mono': () => setFont('Space Mono'),
                'font courier': () => setFont('Courier Prime'),
                
                // Text speed controls
                'text speed fast': () => setTextSpeed(TextSpeed.Fast),
                'text speed normal': () => setTextSpeed(TextSpeed.Normal),
                'text speed slow': () => setTextSpeed(TextSpeed.Slow),
                
                // Sound controls
                'sound on': () => toggleSetting('sound.master', true),
                'sound off': () => toggleSetting('sound.master', false),
                'effects on': () => toggleSetting('sound.item', true),
                'effects off': () => toggleSetting('sound.item', false),
                'awareness sound on': () => toggleSetting('sound.awareness', true),
                'awareness sound off': () => toggleSetting('sound.awareness', false),
                'sanity sound on': () => toggleSetting('sound.sanity', true),
                'sanity sound off': () => toggleSetting('sound.sanity', false),
                
                // Visual effects
                'crt effect on': () => toggleSetting('glitchEffect', true),
                'crt effect off': () => toggleSetting('glitchEffect', false),
                'colorblind mode on': () => toggleSetting('colorblindMode', true),
                'colorblind mode off': () => toggleSetting('colorblindMode', false),
                
                // Game actions
                'new game': () => document.getElementById('new-game-btn')?.click(),
                'load game': () => document.getElementById('load-game-btn')?.click(),
                'save game': () => saveGame(),
                'reset settings': () => resetSettings(),
                
                // Reading commands
                'read text': () => readCurrentText(),
                'stop reading': () => speechSynthesis.cancel(),
                
                // Language switching
                'switch to swedish': () => switchLanguage('sv'),
                'switch to english': () => switchLanguage('en')
            },
            'sv': {
                // Navigationskommandon
                'inställningar': () => showSettingsModal(),
                'paus': () => showPauseMenu(),
                'återuppta': () => hideModal(),
                'huvudmeny': () => returnToMainMenu(),
                'stäng': () => hideModal(),
                'hjälp': () => showVoiceCommands(),
                
                // Tillgänglighetsnivåkontroller
                'kontrast av': () => setAccessibilityLevel('contrastLevel', 'off'),
                'kontrast medium': () => setAccessibilityLevel('contrastLevel', 'medium'),
                'kontrast hög': () => setAccessibilityLevel('contrastLevel', 'high'),
                'kontrast maximum': () => setAccessibilityLevel('contrastLevel', 'maximum'),
                
                'text liten': () => setAccessibilityLevel('textSize', 'small'),
                'text normal': () => setAccessibilityLevel('textSize', 'normal'),
                'text stor': () => setAccessibilityLevel('textSize', 'large'),
                'text extra stor': () => setAccessibilityLevel('textSize', 'xl'),
                'text mycket stor': () => setAccessibilityLevel('textSize', 'xxl'),
                
                'rörelse full': () => setAccessibilityLevel('motionLevel', 'full'),
                'rörelse reducerad': () => setAccessibilityLevel('motionLevel', 'reduced'),
                'rörelse minimal': () => setAccessibilityLevel('motionLevel', 'minimal'),
                'rörelse ingen': () => setAccessibilityLevel('motionLevel', 'none'),
                
                'ljudbeskrivningar av': () => setAccessibilityLevel('audioDescLevel', 'off'),
                'ljudbeskrivningar grundläggande': () => setAccessibilityLevel('audioDescLevel', 'basic'),
                'ljudbeskrivningar detaljerad': () => setAccessibilityLevel('audioDescLevel', 'detailed'),
                'ljudbeskrivningar omfattande': () => setAccessibilityLevel('audioDescLevel', 'comprehensive'),
                
                'tangentbord grundläggande': () => setAccessibilityLevel('keyboardLevel', 'basic'),
                'tangentbord förbättrad': () => setAccessibilityLevel('keyboardLevel', 'enhanced'),
                'tangentbord fullständig': () => setAccessibilityLevel('keyboardLevel', 'full'),
                
                'fokus subtil': () => setAccessibilityLevel('focusLevel', 'subtle'),
                'fokus tydlig': () => setAccessibilityLevel('focusLevel', 'clear'),
                'fokus kraftig': () => setAccessibilityLevel('focusLevel', 'bold'),
                
                'färgblind ingen': () => setAccessibilityLevel('colorblindType', 'none'),
                'färgblind protanopi': () => setAccessibilityLevel('colorblindType', 'protanopia'),
                'färgblind deuteranopi': () => setAccessibilityLevel('colorblindType', 'deuteranopia'),
                'färgblind tritanopi': () => setAccessibilityLevel('colorblindType', 'tritanopia'),
                'färgblind fullständig': () => setAccessibilityLevel('colorblindType', 'full'),
                
                'röst av': () => setAccessibilityLevel('voiceLevel', 'off'),
                'röst grundläggande': () => setAccessibilityLevel('voiceLevel', 'basic'),
                'röst avancerad': () => setAccessibilityLevel('voiceLevel', 'advanced'),
                'röst fullständig': () => setAccessibilityLevel('voiceLevel', 'full'),
                
                'förstoring av': () => setAccessibilityLevel('magnifyLevel', 'off'),
                'förstoring en och halv': () => setAccessibilityLevel('magnifyLevel', '1.5x'),
                'förstoring två': () => setAccessibilityLevel('magnifyLevel', '2x'),
                'förstoring tre': () => setAccessibilityLevel('magnifyLevel', '3x'),
                'förstoring anpassad': () => setAccessibilityLevel('magnifyLevel', 'custom'),
                
                // Grundläggande tillgänglighetsväxlingar
                'skärmläsare på': () => toggleSetting('screenReader', true),
                'skärmläsare av': () => toggleSetting('screenReader', false),
                'dyslexitypsnitt på': () => toggleSetting('dyslexiaFont', true),
                'dyslexitypsnitt av': () => toggleSetting('dyslexiaFont', false),
                'automatisk scroll på': () => toggleSetting('autoScroll', true),
                'automatisk scroll av': () => toggleSetting('autoScroll', false),
                'klickljud på': () => toggleSetting('clickFeedback', true),
                'klickljud av': () => toggleSetting('clickFeedback', false),
                'förenklat ui på': () => toggleSetting('simplifiedUI', true),
                'förenklat ui av': () => toggleSetting('simplifiedUI', false),
                'klistriga tangenter på': () => toggleSetting('stickyKeys', true),
                'klistriga tangenter av': () => toggleSetting('stickyKeys', false),
                'enhandsläge på': () => toggleSetting('oneHandMode', true),
                'enhandsläge av': () => toggleSetting('oneHandMode', false),
                'visuella notifieringar på': () => toggleSetting('visualNotifications', true),
                'visuella notifieringar av': () => toggleSetting('visualNotifications', false),
                'ljudsignaler på': () => toggleSetting('audioCues', true),
                'ljudsignaler av': () => toggleSetting('audioCues', false),
                'lässtöd på': () => toggleSetting('readingSupport', true),
                'lässtöd av': () => toggleSetting('readingSupport', false),
                'anfallsskydd på': () => toggleSetting('seizureProtection', true),
                'anfallsskydd av': () => toggleSetting('seizureProtection', false),
                'haptisk återkoppling på': () => toggleSetting('hapticFeedback', true),
                'haptisk återkoppling av': () => toggleSetting('hapticFeedback', false),
                'gestkontroller på': () => toggleSetting('gestureControls', true),
                'gestkontroller av': () => toggleSetting('gestureControls', false),
                'kognitiv belastning på': () => toggleSetting('cognitiveLoad', true),
                'kognitiv belastning av': () => toggleSetting('cognitiveLoad', false),
                'ögonspårning på': () => toggleSetting('eyeTracking', true),
                'ögonspårning av': () => toggleSetting('eyeTracking', false),
                'växelkontroll på': () => toggleSetting('switchControl', true),
                'växelkontroll av': () => toggleSetting('switchControl', false),
                'timeout förlängningar på': () => toggleSetting('timeoutExtensions', true),
                'timeout förlängningar av': () => toggleSetting('timeoutExtensions', false),
                'minnesassistans på': () => toggleSetting('memoryAssistance', true),
                'minnesassistans av': () => toggleSetting('memoryAssistance', false),
                
                // TTS-hastighetskontroller
                'tal långsamt': () => setTTSSpeed(0.5),
                'tal normalt': () => setTTSSpeed(1),
                'tal snabbt': () => setTTSSpeed(1.5),
                'tal mycket snabbt': () => setTTSSpeed(2),
                
                // UI-skalningskontroller
                'ui liten': () => setUIScale(0.8),
                'ui normal': () => setUIScale(1),
                'ui stor': () => setUIScale(1.2),
                'ui extra stor': () => setUIScale(1.5),
                
                // Temakontroller
                'tema grön': () => setTheme('green'),
                'tema gul': () => setTheme('amber'),
                'tema blå': () => setTheme('blue'),
                
                // Typsnittkontroller
                'typsnitt space mono': () => setFont('Space Mono'),
                'typsnitt courier': () => setFont('Courier Prime'),
                
                // Texthastighet
                'texthastighet snabb': () => setTextSpeed(TextSpeed.Fast),
                'texthastighet normal': () => setTextSpeed(TextSpeed.Normal),
                'texthastighet långsam': () => setTextSpeed(TextSpeed.Slow),
                
                // Ljudkontroller
                'ljud på': () => toggleSetting('sound.master', true),
                'ljud av': () => toggleSetting('sound.master', false),
                'effekter på': () => toggleSetting('sound.item', true),
                'effekter av': () => toggleSetting('sound.item', false),
                'medvetenhet ljud på': () => toggleSetting('sound.awareness', true),
                'medvetenhet ljud av': () => toggleSetting('sound.awareness', false),
                'sinnesro ljud på': () => toggleSetting('sound.sanity', true),
                'sinnesro ljud av': () => toggleSetting('sound.sanity', false),
                
                // Visuella effekter
                'crt effekt på': () => toggleSetting('glitchEffect', true),
                'crt effekt av': () => toggleSetting('glitchEffect', false),
                'färgblindläge på': () => toggleSetting('colorblindMode', true),
                'färgblindläge av': () => toggleSetting('colorblindMode', false),
                
                // Spelhandlingar
                'nytt spel': () => document.getElementById('new-game-btn')?.click(),
                'ladda spel': () => document.getElementById('load-game-btn')?.click(),
                'spara spel': () => saveGame(),
                'återställ inställningar': () => resetSettings(),
                
                // Läskommandon
                'läs text': () => readCurrentText(),
                'sluta läsa': () => speechSynthesis.cancel(),
                
                // Språkväxling
                'byt till engelska': () => switchLanguage('en'),
                'byt till svenska': () => switchLanguage('sv')
            }
        };

        const langCommands = commands[lang] || commands['en'];
        
        if (langCommands[lowerCommand]) {
            langCommands[lowerCommand]();
            speakText(`${t('voice_command_executed')}: ${command}`);
        } else {
            speakText(t('voice_command_not_recognized'));
        }
    }

    function toggleSetting(setting, value) {
        const keys = setting.split('.');
        if (keys.length === 2) {
            GameState.settings[keys[0]][keys[1]] = value;
        } else {
            GameState.settings[setting] = value;
        }
        saveSettings();
        applySettings();
        const status = value ? t('voice_setting_enabled') : t('voice_setting_disabled');
        speakText(`${setting.replace('sound.', '').replace(/([A-Z])/g, ' $1').toLowerCase()} ${status}`);
    }

    function setAccessibilityLevel(setting, level) {
        GameState.settings[setting] = level;
        
        // Update related boolean settings
        if (setting === 'contrastLevel') {
            GameState.settings.highContrast = level !== 'off';
        } else if (setting === 'textSize') {
            GameState.settings.largeText = level !== 'normal' && level !== 'small';
        } else if (setting === 'motionLevel') {
            GameState.settings.reducedMotion = level !== 'full';
        } else if (setting === 'audioDescLevel') {
            GameState.settings.audioDescriptions = level !== 'off';
        } else if (setting === 'keyboardLevel') {
            GameState.settings.keyboardNavigation = true;
        } else if (setting === 'focusLevel') {
            GameState.settings.focusIndicators = true;
        } else if (setting === 'colorblindType') {
            GameState.settings.colorBlindSupport = level !== 'none';
        } else if (setting === 'voiceLevel') {
            GameState.settings.voiceCommands = level !== 'off';
        } else if (setting === 'magnifyLevel') {
            GameState.settings.magnification = level !== 'off';
        }
        
        saveSettings();
        applySettings();
        speakText(`${setting.replace(/([A-Z])/g, ' $1').toLowerCase()} ${t('voice_setting_set_to')} ${level}`);
    }

    function setTTSSpeed(speed) {
        GameState.settings.ttsSpeed = speed;
        saveSettings();
        const speedText = speed === 0.5 ? t('voice_slow') : speed === 1 ? t('voice_normal') : speed === 1.5 ? t('voice_fast') : t('voice_very_fast');
        speakText(`${t('voice_speed_set_to')} ${speedText}`);
    }

    function setUIScale(scale) {
        GameState.settings.uiScale = scale;
        saveSettings();
        applySettings();
        const scaleText = scale === 0.8 ? t('voice_small') : scale === 1 ? t('voice_normal') : scale === 1.2 ? t('voice_large') : t('voice_extra_large');
        speakText(`${t('voice_ui_scale_set_to')} ${scaleText}`);
    }

    function setTheme(theme) {
        GameState.settings.theme = theme;
        saveSettings();
        applySettings();
        speakText(`${t('theme')} ${t('theme_' + theme)}`);
    }

    function setFont(font) {
        GameState.settings.font = font;
        saveSettings();
        applySettings();
        speakText(`${t('setting_font_family')} ${font}`);
    }

    function setTextSpeed(speed) {
        GameState.settings.textSpeed = speed;
        currentTextSpeed = speed;
        saveSettings();
        const speedText = speed === TextSpeed.Fast ? t('fast') : speed === TextSpeed.Normal ? t('normal') : t('slow');
        speakText(`${t('setting_text_speed')} ${speedText}`);
    }

    function resetSettings() {
        if (confirm(currentLanguage === 'sv' ? 'Är du säker på att du vill återställa alla inställningar?' : 'Are you sure you want to reset all settings?')) {
            localStorage.removeItem(SETTINGS_KEY);
            GameState.settings = loadSettings();
            applySettings();
            speakText(currentLanguage === 'sv' ? 'Inställningar återställda' : 'Settings reset');
        }
    }

    function switchLanguage(newLang) {
        currentLanguage = newLang;
        
        // Handle RTL for Arabic
        if (newLang === 'ar') {
            document.body.setAttribute('dir', 'rtl');
            document.body.classList.add('rtl');
        } else {
            document.body.setAttribute('dir', 'ltr');
            document.body.classList.remove('rtl');
        }
        
        updateLanguage();
        
        // Update voice recognition language if it's active
        if (voiceRecognition && voiceControlActive) {
            const speechLangMap = {
                'en': 'en-US',
                'sv': 'sv-SE'
            };
            voiceRecognition.lang = speechLangMap[newLang] || 'en-US';
        }
        
        let message = 'Language switched to English';
        if (newLang === 'sv') message = 'Språk bytt till svenska';
        
        speakText(message);
    }

    function readCurrentText() {
        const textElement = document.querySelector('#content p, #intro-text-container, .modal-content p');
        if (textElement) {
            speakText(textElement.textContent);
        } else {
            speakText('No text found to read');
        }
    }

    function showVoiceCommands() {
        const lang = currentLanguage;
        const isSwedish = lang === 'sv';
        let commands = [];
        
        if (lang === 'sv') {
            commands = [
                'Navigering: inställningar, paus, återuppta, huvudmeny, stäng',
                'Tillgänglighet: kontrast av/medium/hög/maximum, text liten/normal/stor/extra stor/mycket stor',
                'Rörelse: rörelse full/reducerad/minimal/ingen',
                'Ljudbeskrivningar: av/grundläggande/detaljerad/omfattande',
                'Tangentbord: grundläggande/förbättrad/fullständig',
                'Fokus: subtil/tydlig/kraftig',
                'Färgblind: ingen/protanopi/deuteranopi/tritanopi/fullständig',
                'Röstkommandon: röst av/grundläggande/avancerad/fullständig',
                'Förstoring: av/en och halv/två/tre/anpassad',
                'Växlingar: skärmläsare på/av, dyslexitypsnitt på/av, automatisk scroll på/av',
                'Tal: tal långsamt/normalt/snabbt/mycket snabbt',
                'UI: ui liten/normal/stor/extra stor',
                'Tema: tema grön/gul/blå',
                'Typsnitt: typsnitt space mono/courier',
                'Ljud: ljud på/av, effekter på/av',
                'Visuellt: crt effekt på/av, färgblindläge på/av',
                'Spel: nytt spel, ladda spel, spara spel, återställ inställningar',
                'Läsning: läs text, sluta läsa',
                'Språk: byt till engelska',
                'Säg hjälp för att höra denna lista igen'
            ];
        } else {
            commands = [
                'Navigation: settings, pause, resume, main menu, close',
                'Accessibility: contrast off/medium/high/maximum, text small/normal/large/extra large/very large',
                'Motion: motion full/reduced/minimal/none',
                'Audio descriptions: off/basic/detailed/comprehensive',
                'Keyboard: basic/enhanced/full',
                'Focus: subtle/clear/bold',
                'Colorblind: none/protanopia/deuteranopia/tritanopia/full',
                'Voice commands: voice off/basic/advanced/full',
                'Magnification: off/one and half/two/three/custom',
                'Toggles: screen reader on/off, dyslexia font on/off, auto scroll on/off',
                'Speech: speech slow/normal/fast/very fast',
                'UI: ui small/normal/large/extra large',
                'Theme: theme green/amber/blue',
                'Font: font space mono/courier',
                'Sound: sound on/off, effects on/off',
                'Visual: crt effect on/off, colorblind mode on/off',
                'Game: new game, load game, save game, reset settings',
                'Reading: read text, stop reading',
                'Language: switch to swedish',
                'Say help to hear this list again'
            ];
        }
        
        // Create visual display of all commands
        const commandsHtml = commands.map(cmd => `<li class="text-sm text-gray-300 mb-2">• ${cmd}</li>`).join('');
        
        const voiceCommandsModal = `
        <h2 class="text-xl mb-4 title-font text-cyan-400">${isSwedish ? 'Alla Röstkommandon' : 'All Voice Commands'}</h2>
        <div class="max-h-96 overflow-y-auto bg-gray-800 p-4 rounded-lg">
            <h3 class="text-lg text-cyan-300 mb-3">${isSwedish ? 'Tillgängliga Kommandon' : 'Available Commands'}:</h3>
            <ul class="space-y-1">
                ${commandsHtml}
            </ul>
        </div>
        
        <div class="flex gap-3 mt-6">
            <button id="speak-commands-btn" class="button bg-blue-600 hover:bg-blue-700">
                ${isSwedish ? 'Läs Upp Kommandon' : 'Speak Commands'}
            </button>
            <button id="go-back-voice-btn" class="button bg-gray-600 hover:bg-gray-700">
                ${isSwedish ? 'Gå Tillbaka' : 'Go Back'}
            </button>
        </div>`;
        
        showModal(voiceCommandsModal, true);
        
        // Speak commands button
        const speakBtn = document.getElementById('speak-commands-btn');
        if (speakBtn) {
            speakBtn.onclick = () => {
                const fullCommandList = [t('voice_commands_available') + ':', ...commands];
                speakText(fullCommandList.join('. '));
            };
        }
        
        // Go back button
        const goBackBtn = document.getElementById('go-back-voice-btn');
        if (goBackBtn) {
            goBackBtn.onclick = () => {
                hideModal();
                showVoiceControlSettings();
            };
        }
    }

    function startVoiceControl() {
        if (!voiceRecognition) {
            console.warn('Voice recognition not initialized');
            return false;
        }
        
        if (!GameState || !GameState.settings) {
            console.warn('Game state not initialized');
            return false;
        }
        
        if (GameState.settings.voiceCommands) {
            // Reset retry counter when starting fresh
            voiceRecognition.retryCount = 0;
            
            // Update language before starting using the proper language map
            const speechLangMap = {
                'en': 'en-US',
                'sv': 'sv-SE'
            };
            voiceRecognition.lang = speechLangMap[currentLanguage] || 'en-US';
            
            try {
                voiceRecognition.start();
                voiceControlActive = true;
                
                // Use translated message based on current language
                if (currentLanguage === 'sv') {
                    speakText('Röststyrning aktiverad. Säg hjälp för kommandon.');
                } else {
                    speakText('Voice control activated. Say help for commands.');
                }
                
                return true;
            } catch (error) {
                console.error('Error starting voice recognition:', error);
                return false;
            }
        }
        
        return false;
    }

    function stopVoiceControl() {
        if (!voiceRecognition) {
            return false;
        }
        
        try {
            voiceRecognition.stop();
            voiceControlActive = false;
            
            // Use translated message based on current language
            if (currentLanguage === 'sv') {
                speakText('Röststyrning avaktiverad.');
            } else if (currentLanguage === 'es') {
                speakText('Control de voz desactivado.');
            } else if (currentLanguage === 'ar') {
                speakText('تم إلغاء تنشيط التحكم الصوتي.');
            } else {
                speakText('Voice control deactivated.');
            }
            
            return true;
        } catch (error) {
            console.error('Error stopping voice recognition:', error);
            return false;
        }
    }

    function showVoiceControlSettings() {
        const lang = currentLanguage;
        const isSwedish = lang === 'sv';
        
        // Comprehensive command lists
        const commandCategories = {
            'en': {
                'Navigation': [
                    'settings - Open settings menu',
                    'pause - Pause the game',
                    'resume - Resume the game',
                    'main menu - Return to main menu',
                    'close - Close current dialog',
                    'help - Show voice commands'
                ],
                'Accessibility - Contrast': [
                    'contrast off - Disable high contrast',
                    'contrast medium - Medium contrast level',
                    'contrast high - High contrast level',
                    'contrast maximum - Maximum contrast level'
                ],
                'Accessibility - Text Size': [
                    'text small - Small text size',
                    'text normal - Normal text size',
                    'text large - Large text size',
                    'text extra large - Extra large text size',
                    'text very large - Very large text size'
                ],
                'Accessibility - Motion': [
                    'motion full - Full motion effects',
                    'motion reduced - Reduced motion effects',
                    'motion minimal - Minimal motion effects',
                    'motion none - No motion effects'
                ],
                'Accessibility - Audio Descriptions': [
                    'audio descriptions off - Disable audio descriptions',
                    'audio descriptions basic - Basic audio descriptions',
                    'audio descriptions detailed - Detailed audio descriptions',
                    'audio descriptions comprehensive - Comprehensive audio descriptions'
                ],
                'Accessibility - Keyboard Navigation': [
                    'keyboard basic - Basic keyboard navigation',
                    'keyboard enhanced - Enhanced keyboard navigation',
                    'keyboard full - Full keyboard navigation'
                ],
                'Accessibility - Focus Indicators': [
                    'focus subtle - Subtle focus indicators',
                    'focus clear - Clear focus indicators',
                    'focus bold - Bold focus indicators'
                ],
                'Accessibility - Colorblind Support': [
                    'colorblind none - No colorblind support',
                    'colorblind protanopia - Protanopia support',
                    'colorblind deuteranopia - Deuteranopia support',
                    'colorblind tritanopia - Tritanopia support',
                    'colorblind full - Full colorblind support'
                ],
                'Accessibility - Voice Commands': [
                    'voice off - Disable voice commands',
                    'voice basic - Basic voice commands',
                    'voice advanced - Advanced voice commands',
                    'voice full - Full voice commands'
                ],
                'Accessibility - Magnification': [
                    'magnification off - Disable magnification',
                    'magnification one and half - 1.5x magnification',
                    'magnification two - 2x magnification',
                    'magnification three - 3x magnification',
                    'magnification custom - Custom magnification'
                ],
                'Accessibility - Toggles': [
                    'screen reader on/off - Toggle screen reader',
                    'dyslexia font on/off - Toggle dyslexia-friendly font',
                    'auto scroll on/off - Toggle automatic scrolling',
                    'click feedback on/off - Toggle click sound feedback',
                    'simplified ui on/off - Toggle simplified interface',
                    'sticky keys on/off - Toggle sticky keys',
                    'one hand mode on/off - Toggle one-handed mode',
                    'visual notifications on/off - Toggle visual notifications',
                    'audio cues on/off - Toggle audio cues',
                    'reading support on/off - Toggle reading assistance',
                    'seizure protection on/off - Toggle seizure protection',
                    'haptic feedback on/off - Toggle haptic feedback',
                    'gesture controls on/off - Toggle gesture controls',
                    'cognitive load on/off - Toggle cognitive load reduction',
                    'eye tracking on/off - Toggle eye tracking',
                    'switch control on/off - Toggle switch control',
                    'timeout extensions on/off - Toggle timeout extensions',
                    'memory assistance on/off - Toggle memory assistance'
                ],
                'Speech & TTS': [
                    'speech slow - Set speech to slow speed',
                    'speech normal - Set speech to normal speed',
                    'speech fast - Set speech to fast speed',
                    'speech very fast - Set speech to very fast speed'
                ],
                'User Interface': [
                    'ui small - Small UI scale',
                    'ui normal - Normal UI scale',
                    'ui large - Large UI scale',
                    'ui extra large - Extra large UI scale'
                ],
                'Themes & Appearance': [
                    'theme green - Green color theme',
                    'theme amber - Amber color theme',
                    'theme blue - Blue color theme'
                ],
                'Fonts': [
                    'font space mono - Space Mono font',
                    'font courier - Courier Prime font'
                ],
                'Text Speed': [
                    'text speed slow - Slow text display',
                    'text speed normal - Normal text display',
                    'text speed fast - Fast text display'
                ],
                'Sound Controls': [
                    'sound on/off - Toggle master sound',
                    'effects on/off - Toggle sound effects',
                    'awareness sound on/off - Toggle awareness sounds',
                    'sanity sound on/off - Toggle sanity sounds'
                ],
                'Visual Effects': [
                    'crt effect on/off - Toggle CRT screen effect',
                    'colorblind mode on/off - Toggle colorblind mode'
                ],
                'Visual Horror': [
                    'visual horror enable - Enable visual horror effects',
                    'visual horror disable - Disable visual horror effects',
                    'visual horror test - Test visual horror effects',
                    'screen corruption enable - Enable screen corruption',
                    'screen corruption disable - Disable screen corruption',
                    'dynamic typography enable - Enable text distortion',
                    'dynamic typography disable - Disable text distortion',
                    'background distortions enable - Enable background effects',
                    'background distortions disable - Disable background effects'
                ],
                'Audio Horror': [
                    'audio horror enable - Enable audio horror effects',
                    'audio horror disable - Disable audio horror effects',
                    'audio horror test - Test audio horror effects',
                    'ambient soundscapes enable - Enable environmental audio',
                    'ambient soundscapes disable - Disable environmental audio',
                    'binaural audio enable - Enable 3D positioned audio',
                    'binaural audio disable - Disable 3D positioned audio',
                    'dynamic music enable - Enable adaptive music system',
                    'dynamic music disable - Disable adaptive music system',
                    'distance audio enable - Enable distance-based audio',
                    'distance audio disable - Disable distance-based audio'
                ],
                'Interactive Horror': [
                    'interactive horror enable - Enable interactive horror system',
                    'interactive horror disable - Disable interactive horror system',
                    'interactive horror test - Test interactive horror effects',
                    'reactive environment enable - Enable environment changes',
                    'reactive environment disable - Disable environment changes',
                    'stalking mechanics enable - Enable stalking effects',
                    'stalking mechanics disable - Disable stalking effects',
                    'false choices enable - Enable false choice system',
                    'false choices disable - Disable false choice system',
                    'atmospheric shifts enable - Enable mood-based changes',
                    'atmospheric shifts disable - Disable mood-based changes'
                ],
                'Dynamic Story System': [
                    'dialogue tree start - Begin complex conversation with SYNAPSE',
                    'personality check - See SYNAPSE current personality state',
                    'hidden commands - Show discovered hidden commands',
                    'weather - Check current atmospheric conditions',
                    'time - Check facility time and atmospheric state',
                    'choice <number> - Respond to dialogue options',
                    'end dialogue - Exit current conversation',
                    'break fourth wall - Meta-narrative command (when unlocked)',
                    'whisper <message> - Send quiet message (when unlocked)',
                    'dream - Enter dream state (when unlocked)',
                    'remember truth - Force memory recovery (when unlocked)',
                    'query reality - Question nature of reality (when unlocked)',
                    'break free - Attempt narrative escape (when unlocked)'
                ],
                'Game Actions': [
                    'new game - Start a new game',
                    'load game - Load saved game',
                    'save game - Save current game',
                    'reset settings - Reset all settings to default'
                ],
                'Reading Commands': [
                    'read text - Read current text aloud',
                    'stop reading - Stop text-to-speech'
                ],
                'Language': [
                    'switch to swedish - Change language to Swedish',
                    'switch to english - Change language to English'
                ]
            },
            'sv': {
                'Navigering': [
                    'inställningar - Öppna inställningsmeny',
                    'paus - Pausa spelet',
                    'återuppta - Återuppta spelet',
                    'huvudmeny - Återvänd till huvudmeny',
                    'stäng - Stäng aktuell dialog',
                    'hjälp - Visa röstkommandon'
                ],
                'Tillgänglighet - Kontrast': [
                    'kontrast av - Stäng av hög kontrast',
                    'kontrast medium - Medium kontrastnivå',
                    'kontrast hög - Hög kontrastnivå',
                    'kontrast maximum - Maximum kontrastnivå'
                ],
                'Tillgänglighet - Textstorlek': [
                    'text liten - Liten textstorlek',
                    'text normal - Normal textstorlek',
                    'text stor - Stor textstorlek',
                    'text extra stor - Extra stor textstorlek',
                    'text mycket stor - Mycket stor textstorlek'
                ],
                'Tillgänglighet - Rörelse': [
                    'rörelse full - Fullständiga rörelseeffekter',
                    'rörelse reducerad - Reducerade rörelseeffekter',
                    'rörelse minimal - Minimala rörelseeffekter',
                    'rörelse ingen - Inga rörelseeffekter'
                ],
                'Tillgänglighet - Ljudbeskrivningar': [
                    'ljudbeskrivningar av - Stäng av ljudbeskrivningar',
                    'ljudbeskrivningar grundläggande - Grundläggande ljudbeskrivningar',
                    'ljudbeskrivningar detaljerad - Detaljerade ljudbeskrivningar',
                    'ljudbeskrivningar omfattande - Omfattande ljudbeskrivningar'
                ],
                'Tillgänglighet - Tangentbordsnavigering': [
                    'tangentbord grundläggande - Grundläggande tangentbordsnavigering',
                    'tangentbord förbättrad - Förbättrad tangentbordsnavigering',
                    'tangentbord fullständig - Fullständig tangentbordsnavigering'
                ],
                'Tillgänglighet - Fokusindikatorer': [
                    'fokus subtil - Subtila fokusindikatorer',
                    'fokus tydlig - Tydliga fokusindikatorer',
                    'fokus kraftig - Kraftiga fokusindikatorer'
                ],
                'Tillgänglighet - Färgblindstöd': [
                    'färgblind ingen - Inget färgblindstöd',
                    'färgblind protanopi - Protanopi-stöd',
                    'färgblind deuteranopi - Deuteranopi-stöd',
                    'färgblind tritanopi - Tritanopi-stöd',
                    'färgblind fullständig - Fullständigt färgblindstöd'
                ],
                'Tillgänglighet - Röstkommandon': [
                    'röst av - Stäng av röstkommandon',
                    'röst grundläggande - Grundläggande röstkommandon',
                    'röst avancerad - Avancerade röstkommandon',
                    'röst fullständig - Fullständiga röstkommandon'
                ],
                'Tillgänglighet - Förstoring': [
                    'förstoring av - Stäng av förstoring',
                    'förstoring en och halv - 1,5x förstoring',
                    'förstoring två - 2x förstoring',
                    'förstoring tre - 3x förstoring',
                    'förstoring anpassad - Anpassad förstoring'
                ],
                'Tillgänglighet - Växlingar': [
                    'skärmläsare på/av - Växla skärmläsare',
                    'dyslexitypsnitt på/av - Växla dyslexi-vänligt typsnitt',
                    'automatisk scroll på/av - Växla automatisk rullning',
                    'klickljud på/av - Växla klickljudsåterkoppling',
                    'förenklat ui på/av - Växla förenklat gränssnitt',
                    'klistriga tangenter på/av - Växla klistriga tangenter',
                    'enhandsläge på/av - Växla enhandsläge',
                    'visuella notifieringar på/av - Växla visuella notifieringar',
                    'ljudsignaler på/av - Växla ljudsignaler',
                    'lässtöd på/av - Växla läsassistans',
                    'anfallsskydd på/av - Växla anfallsskydd',
                    'haptisk återkoppling på/av - Växla haptisk återkoppling',
                    'gestkontroller på/av - Växla gestkontroller',
                    'kognitiv belastning på/av - Växla kognitiv belastningsminskning',
                    'ögonspårning på/av - Växla ögonspårning',
                    'växelkontroll på/av - Växla växelkontroll',
                    'timeout förlängningar på/av - Växla timeout-förlängningar',
                    'minnesassistans på/av - Växla minnesassistans'
                ],
                'Tal & TTS': [
                    'tal långsamt - Sätt tal till långsam hastighet',
                    'tal normalt - Sätt tal till normal hastighet',
                    'tal snabbt - Sätt tal till snabb hastighet',
                    'tal mycket snabbt - Sätt tal till mycket snabb hastighet'
                ],
                'Användargränssnitt': [
                    'ui liten - Liten UI-skala',
                    'ui normal - Normal UI-skala',
                    'ui stor - Stor UI-skala',
                    'ui extra stor - Extra stor UI-skala'
                ],
                'Teman & Utseende': [
                    'tema grön - Grönt färgtema',
                    'tema gul - Gult färgtema',
                    'tema blå - Blått färgtema'
                ],
                'Typsnitt': [
                    'typsnitt space mono - Space Mono typsnitt',
                    'typsnitt courier - Courier Prime typsnitt'
                ],
                'Texthastighet': [
                    'texthastighet långsam - Långsam textvisning',
                    'texthastighet normal - Normal textvisning',
                    'texthastighet snabb - Snabb textvisning'
                ],
                'Ljudkontroller': [
                    'ljud på/av - Växla huvudljud',
                    'effekter på/av - Växla ljudeffekter',
                    'medvetenhet ljud på/av - Växla medvetenhetljud',
                    'sinnesro ljud på/av - Växla sinnesroljud'
                ],
                'Visuella Effekter': [
                    'crt effekt på/av - Växla CRT-skärmeffekt',
                    'färgblindläge på/av - Växla färgblindläge'
                ],
                'Spelhandlingar': [
                    'nytt spel - Starta ett nytt spel',
                    'ladda spel - Ladda sparat spel',
                    'spara spel - Spara nuvarande spel',
                    'återställ inställningar - Återställ alla inställningar till standard'
                ],
                'Läskommandon': [
                    'läs text - Läs aktuell text högt',
                    'sluta läsa - Stoppa text-till-tal'
                ],
                'Språk': [
                    'byt till engelska - Ändra språk till engelska',
                    'byt till svenska - Ändra språk till svenska'
                ]
            }
        };

        const currentCommands = commandCategories[lang] || commandCategories['en'];
        
        let commandsHtml = '';
        Object.entries(currentCommands).forEach(([category, commands]) => {
            commandsHtml += `<div class="mb-4">
                <h4 class="text-md text-cyan-300 font-semibold mb-2">${category}:</h4>
                <ul class="text-xs space-y-1 text-gray-300 ml-4">`;
            commands.forEach(command => {
                commandsHtml += `<li>• ${command}</li>`;
            });
            commandsHtml += `</ul></div>`;
        });

        const voiceSettingsText = `
        <h2 class="text-xl mb-4 title-font text-cyan-400">${isSwedish ? 'Röststyrningsinställningar' : 'Voice Control Settings'}</h2>
        <div class="space-y-4">
            <div class="flex items-center justify-between">
                <span>${isSwedish ? 'Röststyrning Aktiv' : 'Voice Control Active'}</span>
                <label class="toggle-switch">
                    <input type="checkbox" id="voice-control-toggle" ${GameState.settings.voiceCommands ? 'checked' : ''}>
                    <span class="slider"></span>
                </label>
            </div>
            
            <div class="space-y-2 max-h-96 overflow-y-auto">
                <h3 class="text-lg text-cyan-300">${isSwedish ? 'Tillgängliga Kommandon' : 'Available Commands'}:</h3>
                ${commandsHtml}
            </div>
            
            <div class="flex gap-2 flex-wrap">
                <button id="test-voice-btn" class="button">${isSwedish ? 'Testa Röst' : 'Test Voice'}</button>
                <button id="show-all-commands-btn" class="button">${isSwedish ? 'Hör Alla Kommandon' : 'Hear All Commands'}</button>
                <button id="voice-demo-btn" class="button">${isSwedish ? 'Demo Kommandon' : 'Demo Commands'}</button>
            </div>
            
            <div class="text-xs text-gray-400 bg-gray-800 p-3 rounded">
                <p><strong>${isSwedish ? 'Tips' : 'Tips'}:</strong></p>
                <ul class="list-disc ml-4 space-y-1">
                    <li>${isSwedish ? 'Tala tydligt och i normal hastighet' : 'Speak clearly and at normal speed'}</li>
                    <li>${isSwedish ? 'Säg "hjälp" för att höra alla kommandon' : 'Say "help" to hear all commands'}</li>
                    <li>${isSwedish ? 'Röststyrning fungerar bäst i tyst miljö' : 'Voice control works best in quiet environments'}</li>
                    <li>${isSwedish ? 'Du kan avbryta tal med "sluta läsa"' : 'You can interrupt speech with "stop reading"'}</li>
                </ul>
            </div>
        </div>
        <button class="close-modal-btn button mt-6">${isSwedish ? 'Stäng' : 'Close'}</button>`;
        
        showModal(voiceSettingsText, true);
        
        // Setup voice control toggle
        const voiceToggle = document.getElementById('voice-control-toggle');
        if (voiceToggle) {
            voiceToggle.onchange = (e) => {
                GameState.settings.voiceCommands = e.target.checked;
                saveSettings();
                if (e.target.checked) {
                    if (initializeVoiceControl()) {
                        startVoiceControl();
                    }
                } else {
                    stopVoiceControl();
                }
            };
        }
        
        // Test voice button
        const testVoiceBtn = document.getElementById('test-voice-btn');
        if (testVoiceBtn) {
            testVoiceBtn.onclick = () => {
                const testMessage = isSwedish ? 
                    'Röststyrning fungerar korrekt. Du kan nu använda röstkommandon för att styra spelet.' :
                    'Voice control is working correctly. You can now use voice commands to control the game.';
                speakText(testMessage);
            };
        }
        
        // Show all commands button
        const showCommandsBtn = document.getElementById('show-all-commands-btn');
        if (showCommandsBtn) {
            showCommandsBtn.onclick = () => {
                showVoiceCommands();
            };
        }
        
        // Demo commands button
        const demoBtnElement = document.getElementById('voice-demo-btn');
        if (demoBtnElement) {
            demoBtnElement.onclick = () => {
                const demoCommands = isSwedish ? [
                    'Jag kommer att demonstrera några röstkommandon...',
                    'Säg "tema blå" för att ändra färgtema',
                    'Säg "text stor" för att göra texten större',
                    'Säg "kontrast hög" för att aktivera hög kontrast',
                    'Säg "tal snabbt" för att öka talhastigheten',
                    'Säg "hjälp" för att höra alla tillgängliga kommandon',
                    'Demo avslutad. Prova att säga något av dessa kommandon nu!'
                ] : [
                    'I will demonstrate some voice commands...',
                    'Say "theme blue" to change the color theme',
                    'Say "text large" to make text bigger',
                    'Say "contrast high" to enable high contrast',
                    'Say "speech fast" to increase speech speed',
                    'Say "help" to hear all available commands',
                    'Demo complete. Try saying one of these commands now!'
                ];
                
                let demoIndex = 0;
                const runDemo = () => {
                    if (demoIndex < demoCommands.length) {
                        speakText(demoCommands[demoIndex]);
                        demoIndex++;
                        setTimeout(runDemo, 3000); // Wait 3 seconds between each demo command
                    }
                };
                runDemo();
            };
        }
        
        // Close button
        const closeBtn = document.querySelector('.close-modal-btn');
        if (closeBtn) {
            closeBtn.onclick = () => {
                hideModal();
                showSettingsModal();
            };
        }
    } // Close showVoiceControlSettings function

    // Initialize voice control automatically when site loads
    document.addEventListener('DOMContentLoaded', () => {
        try {
            // Ensure GameState is initialized
            if (!window.GameState) {
                console.warn('GameState not initialized, creating default settings');
                window.GameState = {
                    settings: {}
                };
            }
            
            // Ensure settings object exists
            if (!GameState.settings) {
                console.log('Loading settings from storage');
                GameState.settings = loadSettings();
            }
            
            // Auto-enable voice control by default if supported
            if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
                console.log('Speech recognition is supported in this browser');
                GameState.settings.voiceCommands = true;
                saveSettings();
                
                // Initialize voice control with user interaction requirement
                const initVoiceAfterInteraction = () => {
                    console.log('User interaction detected, initializing voice control');
                    if (initializeVoiceControl()) {
                        const success = startVoiceControl();
                        if (!success) {
                            console.warn('Failed to start voice control after initialization');
                        }
                    } else {
                        console.warn('Voice control initialization failed');
                    }
                };
                
                // Wait for user interaction before starting voice control (required by most browsers)
                const userInteractionHandler = () => {
                    initVoiceAfterInteraction();
                    document.removeEventListener('click', userInteractionHandler);
                    document.removeEventListener('keydown', userInteractionHandler);
                    document.removeEventListener('touchstart', userInteractionHandler);
                };
                
                console.log('Adding user interaction event listeners for voice control initialization');
                document.addEventListener('click', userInteractionHandler);
                document.addEventListener('keydown', userInteractionHandler);
                document.addEventListener('touchstart', userInteractionHandler);
            } else {
                console.warn('Speech recognition is not supported in this browser');
                // Show a user-friendly message about lack of support
                setTimeout(() => {
                    if (speakText && typeof speakText === 'function') {
                        speakText('Voice control is not supported in your browser. Please use Chrome for the best experience.');
                    }
                }, 3000);
            }
        } catch (error) {
            console.error('Error during voice control initialization:', error);
        }
    });

    // ============================================
    // Enhanced Button Clickability Fix System
    // ============================================
    
    function forceButtonClickability() {
        console.log('🚀 FORCE FIXING ALL BUTTON ISSUES...');
        
        // Get all buttons
        const allButtons = document.querySelectorAll('button');
        console.log(`Found ${allButtons.length} buttons to fix`);
        
        allButtons.forEach((button, index) => {
            const buttonId = button.id || `btn-${index}`;
            
            // FORCE all button properties
            button.style.setProperty('pointer-events', 'auto', 'important');
            button.style.setProperty('cursor', 'pointer', 'important');
            button.style.setProperty('position', 'relative', 'important');
            button.style.setProperty('z-index', '10000', 'important');
            button.style.setProperty('user-select', 'none', 'important');
            button.style.setProperty('display', 'flex', 'important');
            button.style.setProperty('align-items', 'center', 'important');
            button.style.setProperty('justify-content', 'center', 'important');
            button.style.setProperty('min-height', '44px', 'important');
            button.style.setProperty('border', '2px solid currentColor', 'important');
            button.style.setProperty('background-color', 'rgba(0, 0, 0, 0.9)', 'important');
            
            console.log(`✅ Force-fixed button: ${buttonId}`);
        });
        
        // FORCE corner button containers
        const cornerSelectors = [
            '.absolute[style*="top"]', 
            '.absolute[style*="bottom"]'
        ];
        
        cornerSelectors.forEach(selector => {
            const containers = document.querySelectorAll(selector);
            containers.forEach(container => {
                container.style.setProperty('z-index', '9999', 'important');
                container.style.setProperty('pointer-events', 'auto', 'important');
                container.style.setProperty('position', 'absolute', 'important');
                
                // Ensure containers are within viewport
                const rect = container.getBoundingClientRect();
                if (rect.right > window.innerWidth - 10) {
                    container.style.setProperty('right', '10px', 'important');
                }
                if (rect.bottom > window.innerHeight - 10) {
                    container.style.setProperty('bottom', '10px', 'important');
                }
                if (rect.left < 10) {
                    container.style.setProperty('left', '10px', 'important');
                }
                if (rect.top < 10) {
                    container.style.setProperty('top', '10px', 'important');
                }
            });
        });
        
        // FORCE main container properties
        const appContainer = document.getElementById('app-container');
        const startScreen = document.getElementById('start-screen');
        const screenContainer = document.querySelector('.start-screen-container');
        
        if (appContainer) {
            appContainer.style.setProperty('overflow', 'visible', 'important');
        }
        if (startScreen) {
            startScreen.style.setProperty('overflow', 'visible', 'important');
        }
        if (screenContainer) {
            screenContainer.style.setProperty('overflow', 'visible', 'important');
            screenContainer.style.setProperty('padding', '10px', 'important');
        }
        
        console.log('🚀 FORCE FIX COMPLETE!');
        
        // Test each button by simulating clicks
        setTimeout(() => {
            console.log('🧪 Testing button clickability...');
            ['start-settings-btn', 'view-features-btn', 'lang-en-btn', 'lang-sv-btn', 'pwa-install-btn', 'new-game-btn', 'load-game-btn'].forEach(id => {
                const btn = document.getElementById(id);
                if (btn) {
                    const rect = btn.getBoundingClientRect();
                    const elementAt = document.elementFromPoint(rect.left + rect.width/2, rect.top + rect.height/2);
                    console.log(`Button ${id}: clickable=${elementAt === btn || elementAt?.closest('button') === btn}`);
                } else {
                    console.warn(`Button ${id} not found`);
                }
            });
        }, 500);
    }
    
    // Enhanced button fix with direct event binding
    function fixButtonsDirectly() {
        console.log('🔧 Applying direct button fixes...');
        
        // Critical buttons that must work
        const criticalButtons = [
            { id: 'new-game-btn', handler: () => {
                console.log('New Game clicked!');
                sessionStorage.removeItem('synapse_session_v15_autosave'); 
                sessionStorage.removeItem('synapse_session_v15_screen_state'); 
                const startScreen = document.getElementById('start-screen');
                const playerSetup = document.getElementById('player-setup');
                if (startScreen && playerSetup) {
                    startScreen.classList.add('hidden'); 
                    startScreen.classList.remove('flex');
                    playerSetup.classList.remove('hidden'); 
                    playerSetup.classList.add('flex'); 
                    if (window.updateAbilityDisplay) updateAbilityDisplay(); 
                }
            }},
            { id: 'load-game-btn', handler: () => {
                console.log('Load Game clicked!');
                sessionStorage.removeItem('synapse_session_v15_autosave'); 
                sessionStorage.removeItem('synapse_session_v15_screen_state'); 
                if (window.loadGame) loadGame(); 
            }},
            { id: 'start-settings-btn', handler: () => {
                console.log('Settings clicked!');
                if (window.showSettingsModal) showSettingsModal(false);
            }},
            { id: 'view-features-btn', handler: () => {
                console.log('Features clicked!');
                if (window.showFeaturesModal) showFeaturesModal();
            }},
            { id: 'begin-mission-btn', handler: () => {
                console.log('Begin Mission clicked!');
                if (window.startGame) startGame();
            }},
            { id: 'start-game-btn', handler: () => {
                console.log('Start Game clicked!');
                if (window.showPrologueScreen) showPrologueScreen();
            }},
            { id: 'back-to-start-btn', handler: () => {
                console.log('Back to Start clicked!');
                const playerSetup = document.getElementById('player-setup');
                const startScreen = document.getElementById('start-screen');
                if (playerSetup && startScreen) {
                    playerSetup.classList.add('hidden');
                    playerSetup.classList.remove('flex');
                    startScreen.classList.remove('hidden');
                    startScreen.classList.add('flex');
                }
            }},
            { id: 'lang-en-btn', handler: () => {
                console.log('English Language clicked!');
                if (window.setLanguage) setLanguage('en');
            }},
            { id: 'lang-sv-btn', handler: () => {
                console.log('Swedish Language clicked!');
                if (window.setLanguage) setLanguage('sv');
            }},
            { id: 'pwa-install-btn', handler: () => {
                console.log('PWA Install clicked!');
                if (window.installPWA) installPWA();
            }}
        ];
        
        criticalButtons.forEach(({id, handler}) => {
            const btn = document.getElementById(id);
            if (btn) {
                // Remove any existing listeners
                btn.replaceWith(btn.cloneNode(true));
                const newBtn = document.getElementById(id);
                
                // Force button to be clickable
                newBtn.style.setProperty('pointer-events', 'auto', 'important');
                newBtn.style.setProperty('z-index', '1000', 'important');
                newBtn.style.setProperty('position', 'relative', 'important');
                newBtn.style.setProperty('cursor', 'pointer', 'important');
                
                // Add multiple event types for maximum compatibility
                ['click', 'touchend', 'mouseup'].forEach(eventType => {
                    newBtn.addEventListener(eventType, (e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        console.log(`✅ ${id} ${eventType} event fired!`);
                        try {
                            handler();
                        } catch (error) {
                            console.error(`❌ Error in ${id} handler:`, error);
                        }
                    }, { passive: false });
                });
                
                console.log(`✅ Fixed button: ${id}`);
            } else {
                console.warn(`❌ Button not found: ${id}`);
            }
        });
        
        // Also fix difficulty buttons
        document.querySelectorAll('.difficulty-btn').forEach(btn => {
            btn.style.setProperty('pointer-events', 'auto', 'important');
            btn.style.setProperty('z-index', '1000', 'important');
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                document.querySelectorAll('.difficulty-btn').forEach(b => b.classList.remove('button-primary'));
                btn.classList.add('button-primary');
                if (window.updateAbilityDisplay) updateAbilityDisplay();
            });
        });
        
        console.log('🔧 Direct button fixes complete!');
    }
    
    // Run fixes multiple times to ensure they take effect
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            setTimeout(forceButtonClickability, 100);
            setTimeout(fixButtonsDirectly, 200);
            setTimeout(forceButtonClickability, 500);
            setTimeout(fixButtonsDirectly, 700);
            setTimeout(forceButtonClickability, 1000);
            setTimeout(fixButtonsDirectly, 1200);
        });
    } else {
        forceButtonClickability();
        fixButtonsDirectly();
        setTimeout(forceButtonClickability, 500);
        setTimeout(fixButtonsDirectly, 700);
        setTimeout(forceButtonClickability, 1000);
        setTimeout(fixButtonsDirectly, 1200);
    }
    
    // Also run after window load
    window.addEventListener('load', () => {
        setTimeout(forceButtonClickability, 500);
        setTimeout(fixButtonsDirectly, 700);
        setTimeout(forceButtonClickability, 1500);
        setTimeout(fixButtonsDirectly, 1700);
    });

