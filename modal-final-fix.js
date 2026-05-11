// Final modal fix - override all existing modal functionality
console.log('Loading final modal fix...');

// Wait for everything to load
window.addEventListener('load', function() {
    setTimeout(initializeFinalModalFix, 1000);
});

function initializeFinalModalFix() {
    console.log('Initializing final modal fix...');
    
    // Initialize backstory modal
    initializeModal('backstory');
    
    // Initialize phobia modal
    initializeModal('phobia');
    
    console.log('All modals initialized successfully');
}

function initializeModal(type) {
    const modalId = `${type}-list-modal`;
    const viewBtnId = `view-${type === 'backstory' ? 'backstories' : 'phobias'}-btn`;
    const closeBtnId = `close-${type}-modal`;
    const contentId = `${type}-modal-content`;
    
    const modal = document.getElementById(modalId);
    const viewBtn = document.getElementById(viewBtnId);
    const closeBtn = document.getElementById(closeBtnId);
    const modalContent = document.getElementById(contentId);
    
    if (!modal || !viewBtn || !closeBtn || !modalContent) {
        console.error(`${type} modal elements missing:`, { 
            modal: !!modal, 
            viewBtn: !!viewBtn, 
            closeBtn: !!closeBtn, 
            modalContent: !!modalContent 
        });
        return;
    }
    
    // Reset modal state completely
    modal.style.cssText = 'position: fixed; inset: 0; z-index: 30; display: none; align-items: center; justify-content: center; background-color: rgba(0, 0, 0, 0.8); backdrop-filter: blur(4px);';
    
    // Remove all existing event listeners by cloning elements
    const newViewBtn = viewBtn.cloneNode(true);
    const newCloseBtn = closeBtn.cloneNode(true);
    viewBtn.parentNode.replaceChild(newViewBtn, viewBtn);
    closeBtn.parentNode.replaceChild(newCloseBtn, closeBtn);
    
    // Set up open modal function
    newViewBtn.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        
        console.log(`Opening ${type} modal...`);
        
        // Populate content
        if (type === 'backstory') {
            populateBackstoryContent(modalContent);
        } else {
            populatePhobiaContent(modalContent);
        }
        
        // Show modal
        modal.style.display = 'flex';
        
        // Sound effect
        if (typeof playSound === 'function') {
            try {
                playSound('beep');
            } catch (e) {
                console.log('Sound error:', e);
            }
        }
    });
    
    // Set up close modal function
    function closeModal() {
        console.log(`Closing ${type} modal...`);
        modal.style.display = 'none';
        
        if (typeof playSound === 'function') {
            try {
                playSound('beep');
            } catch (e) {
                console.log('Sound error:', e);
            }
        }
    }
    
    // Close button
    newCloseBtn.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        closeModal();
    });
    
    // Backdrop click
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // Escape key (only for the last registered modal to avoid conflicts)
    if (type === 'phobia') {
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                const backstoryModal = document.getElementById('backstory-list-modal');
                const phobiaModal = document.getElementById('phobia-list-modal');
                
                if (backstoryModal.style.display === 'flex') {
                    backstoryModal.style.display = 'none';
                } else if (phobiaModal.style.display === 'flex') {
                    phobiaModal.style.display = 'none';
                }
            }
        });
    }
    
    console.log(`${type} modal initialized successfully`);
}

function populateBackstoryContent(container) {
    // Expanded backstory data with 20 options
    const fallbackBackstories = {
        'investigator': {
            name: 'Investigator',
            description: 'A determined seeker of truth with enhanced observation skills.',
            abilities: ['Enhanced perception checks', 'Better clue discovery', 'Improved interrogation']
        },
        'hacker': {
            name: 'Hacker',
            description: 'A tech-savvy individual with expertise in digital systems.',
            abilities: ['Bypass electronic locks', 'Access restricted data', 'Disable security systems']
        },
        'doctor': {
            name: 'Doctor',
            description: 'A medical professional with knowledge of anatomy and healing.',
            abilities: ['Identify cause of death', 'Treat injuries', 'Understand biological anomalies']
        },
        'soldier': {
            name: 'Soldier',
            description: 'A trained combatant with tactical expertise.',
            abilities: ['Combat proficiency', 'Weapon expertise', 'Tactical awareness']
        },
        'scientist': {
            name: 'Scientist',
            description: 'A researcher with analytical thinking and experimental knowledge.',
            abilities: ['Analyze samples', 'Understand experiments', 'Scientific deduction']
        },
        'engineer': {
            name: 'Engineer',
            description: 'A technical expert skilled in mechanical and electrical systems.',
            abilities: ['Repair machinery', 'Understand blueprints', 'Improvise solutions']
        },
        'psychologist': {
            name: 'Psychologist',
            description: 'A mental health expert with insight into human behavior.',
            abilities: ['Read people', 'Resist mental effects', 'Understand motivations']
        },
        'journalist': {
            name: 'Journalist',
            description: 'An information gatherer with strong research and communication skills.',
            abilities: ['Gather information', 'Social connections', 'Research expertise']
        },
        'detective': {
            name: 'Detective',
            description: 'A law enforcement professional specializing in solving crimes.',
            abilities: ['Crime scene analysis', 'Interview techniques', 'Evidence collection']
        },
        'occultist': {
            name: 'Occultist',
            description: 'A student of supernatural and esoteric knowledge.',
            abilities: ['Recognize supernatural', 'Ritual knowledge', 'Mystical resistance']
        },
        'mercenary': {
            name: 'Mercenary',
            description: 'A professional fighter for hire with combat experience.',
            abilities: ['Advanced combat', 'Survival skills', 'Weapon improvisation']
        },
        'archaeologist': {
            name: 'Archaeologist',
            description: 'A scholar of ancient civilizations and historical artifacts.',
            abilities: ['Historical knowledge', 'Artifact identification', 'Ancient languages']
        },
        'pilot': {
            name: 'Pilot',
            description: 'An experienced aviator with knowledge of aircraft and navigation.',
            abilities: ['Vehicle operation', 'Navigation skills', 'Emergency procedures']
        },
        'librarian': {
            name: 'Librarian',
            description: 'A keeper of knowledge with exceptional research abilities.',
            abilities: ['Information retrieval', 'Pattern recognition', 'Speed reading']
        },
        'paramedic': {
            name: 'Paramedic',
            description: 'An emergency medical responder trained in crisis situations.',
            abilities: ['Emergency medicine', 'Crisis management', 'Rapid assessment']
        },
        'musician': {
            name: 'Musician',
            description: 'An artist with acute auditory perception and emotional sensitivity.',
            abilities: ['Enhanced hearing', 'Emotional insight', 'Sound analysis']
        },
        'mechanic': {
            name: 'Mechanic',
            description: 'A hands-on expert in repairing and maintaining machinery.',
            abilities: ['Mechanical repair', 'Tool improvisation', 'System diagnostics']
        },
        'photographer': {
            name: 'Photographer',
            description: 'A visual artist with keen observation and documentation skills.',
            abilities: ['Visual memory', 'Detail observation', 'Evidence documentation']
        },
        'chef': {
            name: 'Chef',
            description: 'A culinary expert with knowledge of ingredients and chemistry.',
            abilities: ['Chemical knowledge', 'Improvisation', 'Taste/smell analysis']
        },
        'athlete': {
            name: 'Athlete',
            description: 'A physically conditioned individual with exceptional stamina and agility.',
            abilities: ['Physical endurance', 'Quick reflexes', 'Pain tolerance']
        }
    };
    
    // Use game's BACKSTORIES if available, otherwise use fallback
    const backstories = (typeof BACKSTORIES !== 'undefined') ? BACKSTORIES : fallbackBackstories;
    
    let html = '<div class="grid grid-cols-1 md:grid-cols-2 gap-4">';
    
    Object.entries(backstories).forEach(([key, backstory]) => {
        html += `
            <div class="border border-cyan-400/30 rounded-lg p-4 bg-black/50 hover:bg-cyan-400/10 transition-colors cursor-pointer backstory-option" data-backstory="${key}">
                <h3 class="text-lg font-bold text-cyan-400 mb-2">${backstory.name}</h3>
                <p class="text-sm text-gray-300 mb-3">${backstory.description}</p>
                <div class="text-xs text-yellow-400">
                    <strong>Abilities:</strong>
                    <ul class="list-disc list-inside mt-1">
                        ${backstory.abilities.map(ability => `<li>${ability}</li>`).join('')}
                    </ul>
                </div>
                <div class="mt-3 text-center">
                    <span class="text-xs text-cyan-300 font-semibold">Click to select</span>
                </div>
            </div>
        `;
    });
    
    html += '</div>';
    container.innerHTML = html;
    
    // Add click event listeners to backstory options
    const backstoryOptions = container.querySelectorAll('.backstory-option');
    backstoryOptions.forEach(option => {
        option.addEventListener('click', function() {
            const backstoryKey = this.getAttribute('data-backstory');
            selectBackstory(backstoryKey);
        });
    });
}

function populatePhobiaContent(container) {
    // Expanded phobia data with 20 options
    const phobias = {
        'random': {
            name: 'Random',
            description: 'Let the game choose a phobia for you.',
            scientificName: 'Randomophobia',
            effects: ['Unknown effects until revealed', 'Adds mystery to gameplay', 'Could be any phobia type'],
            severity: 'Variable'
        },
        'darkness': {
            name: 'Darkness',
            description: 'Extreme fear of dark places and lack of light.',
            scientificName: 'Nyctophobia',
            effects: ['Increased stress in dark areas', 'Better performance in well-lit spaces', 'Panic in complete darkness'],
            severity: 'High'
        },
        'isolation': {
            name: 'Isolation',
            description: 'Fear of being alone or separated from others.',
            scientificName: 'Monophobia',
            effects: ['Stress when alone', 'Better performance in groups', 'Panic when isolated'],
            severity: 'Medium'
        },
        'blood': {
            name: 'Blood',
            description: 'Intense fear of blood and gore.',
            scientificName: 'Hemophobia',
            effects: ['Stress when encountering blood', 'Difficulty with medical situations', 'Fainting at severe gore'],
            severity: 'High'
        },
        'machinery': {
            name: 'Machinery',
            description: 'Fear of complex mechanical devices.',
            scientificName: 'Mechanophobia',
            effects: ['Stress around machines', 'Difficulty with technology', 'Panic near heavy machinery'],
            severity: 'Medium'
        },
        'mirrors': {
            name: 'Mirrors',
            description: 'Fear of mirrors and reflective surfaces.',
            scientificName: 'Eisoptrophobia',
            effects: ['Stress near mirrors', 'Avoidance of reflections', 'Panic in mirror mazes'],
            severity: 'Medium'
        },
        'silence': {
            name: 'Silence',
            description: 'Fear of complete silence and quiet environments.',
            scientificName: 'Sedatephobia',
            effects: ['Stress in quiet areas', 'Need for ambient sound', 'Panic in absolute silence'],
            severity: 'Low'
        },
        'crowds': {
            name: 'Crowds',
            description: 'Fear of crowded spaces and large groups.',
            scientificName: 'Agoraphobia',
            effects: ['Stress in crowded areas', 'Prefer small spaces', 'Panic in large gatherings'],
            severity: 'Medium'
        },
        'heights': {
            name: 'Heights',
            description: 'Fear of high places and falling.',
            scientificName: 'Acrophobia',
            effects: ['Stress at heights', 'Difficulty climbing', 'Panic on high platforms'],
            severity: 'High'
        },
        'spiders': {
            name: 'Spiders',
            description: 'Intense fear of spiders and arachnids.',
            scientificName: 'Arachnophobia',
            effects: ['Stress around spiders', 'Enhanced spider detection', 'Panic when encountering arachnids'],
            severity: 'Medium'
        },
        'death': {
            name: 'Death',
            description: 'Fear of death and dying.',
            scientificName: 'Thanatophobia',
            effects: ['Stress around death', 'Avoidance of corpses', 'Existential anxiety'],
            severity: 'High'
        },
        'confinement': {
            name: 'Confinement',
            description: 'Fear of enclosed or confined spaces.',
            scientificName: 'Claustrophobia',
            effects: ['Panic in small spaces', 'Stress in tight areas', 'Difficulty in tunnels/elevators'],
            severity: 'High'
        },
        'water': {
            name: 'Water',
            description: 'Fear of water and drowning.',
            scientificName: 'Aquaphobia',
            effects: ['Stress near water', 'Swimming difficulties', 'Panic in floods'],
            severity: 'Medium'
        },
        'fire': {
            name: 'Fire',
            description: 'Intense fear of fire and burning.',
            scientificName: 'Pyrophobia',
            effects: ['Stress near flames', 'Avoidance of heat sources', 'Panic during fires'],
            severity: 'High'
        },
        'clowns': {
            name: 'Clowns',
            description: 'Fear of clowns and masked figures.',
            scientificName: 'Coulrophobia',
            effects: ['Stress around masked people', 'Distrust of entertainers', 'Panic at circuses'],
            severity: 'Medium'
        },
        'dolls': {
            name: 'Dolls',
            description: 'Fear of dolls and mannequins.',
            scientificName: 'Pediophobia',
            effects: ['Stress around dolls', 'Unease with mannequins', 'Panic in toy stores'],
            severity: 'Medium'
        },
        'needles': {
            name: 'Needles',
            description: 'Fear of injections and sharp medical instruments.',
            scientificName: 'Trypanophobia',
            effects: ['Stress during medical procedures', 'Avoidance of syringes', 'Fainting at injections'],
            severity: 'Medium'
        },
        'germs': {
            name: 'Germs',
            description: 'Fear of contamination and disease.',
            scientificName: 'Mysophobia',
            effects: ['Excessive cleaning behavior', 'Stress in dirty environments', 'Avoidance of contact'],
            severity: 'Low'
        },
        'storms': {
            name: 'Storms',
            description: 'Fear of thunder, lightning, and severe weather.',
            scientificName: 'Astraphobia',
            effects: ['Stress during storms', 'Weather anxiety', 'Hiding during thunder'],
            severity: 'Medium'
        },
        'flying': {
            name: 'Flying',
            description: 'Fear of being in aircraft or flying.',
            scientificName: 'Aviophobia',
            effects: ['Stress in aircraft', 'Travel limitations', 'Panic during turbulence'],
            severity: 'Medium'
        }
    };
    
    let html = '<div class="grid grid-cols-1 md:grid-cols-2 gap-4">';
    
    Object.entries(phobias).forEach(([key, phobia]) => {
        const severityColor = {
            'Variable': 'text-purple-400',
            'Low': 'text-green-400',
            'Medium': 'text-yellow-400',
            'High': 'text-red-400'
        }[phobia.severity] || 'text-gray-400';
        
        html += `
            <div class="border border-red-400/30 rounded-lg p-4 bg-black/50 hover:bg-red-400/10 transition-colors cursor-pointer phobia-option" data-phobia="${key}">
                <h3 class="text-lg font-bold text-red-400 mb-2">${phobia.name}</h3>
                <p class="text-xs text-gray-400 mb-1">${phobia.scientificName}</p>
                <p class="text-sm text-gray-300 mb-3">${phobia.description}</p>
                <div class="text-xs mb-2">
                    <span class="text-white">Severity: </span>
                    <span class="${severityColor} font-bold">${phobia.severity}</span>
                </div>
                <div class="text-xs text-orange-400">
                    <strong>Effects:</strong>
                    <ul class="list-disc list-inside mt-1">
                        ${phobia.effects.map(effect => `<li>${effect}</li>`).join('')}
                    </ul>
                </div>
                <div class="mt-3 text-center">
                    <span class="text-xs text-red-300 font-semibold">Click to select</span>
                </div>
            </div>
        `;
    });
    
    html += '</div>';
    container.innerHTML = html;
    
    // Add click event listeners to phobia options
    const phobiaOptions = container.querySelectorAll('.phobia-option');
    phobiaOptions.forEach(option => {
        option.addEventListener('click', function() {
            const phobiaKey = this.getAttribute('data-phobia');
            selectPhobia(phobiaKey);
        });
    });
}

// Selection functions for backstories and phobias
function selectBackstory(backstoryKey) {
    console.log('Backstory selected:', backstoryKey);
    
    // Update the input field
    const backstoryInput = document.getElementById('player-backstory-input');
    if (backstoryInput) {
        backstoryInput.value = backstoryKey;
    }
    
    // Close the modal
    const modal = document.getElementById('backstory-list-modal');
    if (modal) {
        modal.style.display = 'none';
    }
    
    // Store in GameState if available
    if (typeof GameState !== 'undefined') {
        GameState.player.backstory = backstoryKey;
    }
    
    // Play sound if available
    if (typeof playSound === 'function') {
        try {
            playSound('beep');
        } catch (e) {
            console.log('Sound error:', e);
        }
    }
    
    // Show notification
    showSelectionNotification(`Backstory selected: ${backstoryKey}`, 'success');
}

function selectPhobia(phobiaKey) {
    console.log('Phobia selected:', phobiaKey);
    
    // Update the input field
    const phobiaInput = document.getElementById('player-phobia-input');
    if (phobiaInput) {
        phobiaInput.value = phobiaKey;
    }
    
    // Close the modal
    const modal = document.getElementById('phobia-list-modal');
    if (modal) {
        modal.style.display = 'none';
    }
    
    // Store in GameState if available
    if (typeof GameState !== 'undefined') {
        GameState.player.phobia = phobiaKey;
    }
    
    // Play sound if available
    if (typeof playSound === 'function') {
        try {
            playSound('beep');
        } catch (e) {
            console.log('Sound error:', e);
        }
    }
    
    // Show notification
    showSelectionNotification(`Phobia selected: ${phobiaKey}`, 'warning');
}

// Helper function to show selection notifications
function showSelectionNotification(message, type = 'info') {
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
        background: ${type === 'warning' ? '#ff6b35' : type === 'success' ? '#00ff41' : '#00aaff'};
        color: black;
        padding: 10px 20px;
        border-radius: 5px;
        font-family: monospace;
        font-size: 14px;
        z-index: 1000;
        opacity: 0.9;
        font-weight: bold;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Remove after 2 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.parentNode.removeChild(notification);
        }
    }, 2000);
}
