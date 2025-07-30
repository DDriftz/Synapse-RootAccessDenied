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
    // Fallback backstory data in case BACKSTORIES is not available
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
        }
    };
    
    // Use game's BACKSTORIES if available, otherwise use fallback
    const backstories = (typeof BACKSTORIES !== 'undefined') ? BACKSTORIES : fallbackBackstories;
    
    let html = '<div class="grid grid-cols-1 md:grid-cols-2 gap-4">';
    
    Object.entries(backstories).forEach(([key, backstory]) => {
        html += `
            <div class="border border-cyan-400/30 rounded-lg p-4 bg-black/50 hover:bg-cyan-400/10 transition-colors">
                <h3 class="text-lg font-bold text-cyan-400 mb-2">${backstory.name}</h3>
                <p class="text-sm text-gray-300 mb-3">${backstory.description}</p>
                <div class="text-xs text-yellow-400">
                    <strong>Abilities:</strong>
                    <ul class="list-disc list-inside mt-1">
                        ${backstory.abilities.map(ability => `<li>${ability}</li>`).join('')}
                    </ul>
                </div>
            </div>
        `;
    });
    
    html += '</div>';
    container.innerHTML = html;
}

function populatePhobiaContent(container) {
    // Phobia data with detailed information
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
            <div class="border border-red-400/30 rounded-lg p-4 bg-black/50 hover:bg-red-400/10 transition-colors">
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
            </div>
        `;
    });
    
    html += '</div>';
    container.innerHTML = html;
}
