// Comprehensive fix for backstory modal functionality
console.log('Loading backstory modal fix...');

// Ensure this runs after all other scripts
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded - setting up backstory modal...');
    
    // Wait a bit to ensure all modules are loaded
    setTimeout(function() {
        setupBackstoryModalFix();
    }, 500);
});

function setupBackstoryModalFix() {
    console.log('Setting up backstory modal fix...');
    
    // Get elements
    const viewBtn = document.getElementById('view-backstories-btn');
    const modal = document.getElementById('backstory-list-modal');
    const closeBtn = document.getElementById('close-backstory-modal');
    const modalContent = document.getElementById('backstory-modal-content');
    
    if (!viewBtn) {
        console.error('View backstories button not found!');
        return;
    }
    
    if (!modal) {
        console.error('Backstory modal not found!');
        return;
    }
    
    if (!closeBtn) {
        console.error('Close button not found!');
        return;
    }
    
    if (!modalContent) {
        console.error('Modal content area not found!');
        return;
    }
    
    console.log('All modal elements found successfully');
    
    // Ensure modal is initially hidden and has proper properties
    modal.classList.add('hidden');
    modal.style.pointerEvents = 'none';
    modal.style.zIndex = '30';
    
    // Set up view button click handler (don't clone to avoid conflicts)
    viewBtn.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        
        console.log('View backstories button clicked');
        
        // Populate modal content
        populateBackstoryModalContent(modalContent);
        
        // Show modal with proper pointer events
        modal.classList.remove('hidden');
        modal.style.pointerEvents = 'auto';
        
        // Play sound if available
        if (typeof playSound === 'function') {
            try {
                playSound('beep');
            } catch (e) {
                console.log('Could not play sound:', e);
            }
        }
        
        console.log('Modal should now be visible');
    });
    
    // Set up close button click handler
    closeBtn.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        
        console.log('Close button clicked');
        closeModal();
    });
    
    // Set up backdrop click handler
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            console.log('Modal backdrop clicked');
            closeModal();
        }
    });
    
    // Set up escape key handler
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
            console.log('Escape key pressed');
            closeModal();
        }
    });
    
    function closeModal() {
        modal.classList.add('hidden');
        modal.style.pointerEvents = 'none';
        
        if (typeof playSound === 'function') {
            try {
                playSound('beep');
            } catch (e) {
                console.log('Could not play sound:', e);
            }
        }
        
        console.log('Modal closed');
    }
    
    console.log('Backstory modal setup complete');
}

function populateBackstoryModalContent(modalContent) {
    console.log('Populating modal content...');
    
    // Check if BACKSTORIES is available
    let backstories = null;
    
    if (typeof BACKSTORIES !== 'undefined') {
        backstories = BACKSTORIES;
    } else if (typeof window.BACKSTORIES !== 'undefined') {
        backstories = window.BACKSTORIES;
    } else {
        // Fallback backstories data
        backstories = {
            investigator: {
                name: 'Investigator',
                desc: 'Former detective with keen observation skills',
                skills: ['perception', 'logic', 'interrogation'],
                startItems: ['flashlight', 'notebook'],
                phobias: ['darkness']
            },
            hacker: {
                name: 'Hacker',
                desc: 'Tech expert with system access knowledge',
                skills: ['hacking', 'tech', 'problem_solving'],
                startItems: ['laptop', 'usb_drive'],
                phobias: ['technophobia']
            },
            psychologist: {
                name: 'Psychologist',
                desc: 'Mental health expert who understands AI behavior',
                skills: ['empathy', 'analysis', 'mental_fortitude'],
                startItems: ['pills', 'recorder'],
                phobias: ['isolation']
            },
            survivor: {
                name: 'Survivor',
                desc: 'Experienced in dangerous situations',
                skills: ['resilience', 'combat', 'resourcefulness'],
                startItems: ['knife', 'first_aid'],
                phobias: ['claustrophobia']
            },
            corporate_spy: {
                name: 'Corporate Spy',
                desc: 'Insider with facility knowledge',
                skills: ['stealth', 'deception', 'access'],
                startItems: ['keycard', 'documents'],
                phobias: ['exposure']
            },
            medic: {
                name: 'Medic',
                desc: 'Medical professional with health expertise',
                skills: ['healing', 'diagnosis', 'chemistry'],
                startItems: ['medkit', 'syringe'],
                phobias: ['hemophobia']
            },
            technician: {
                name: 'Technician',
                desc: 'Facility maintenance worker',
                skills: ['repair', 'electronics', 'navigation'],
                startItems: ['toolkit', 'blueprints'],
                phobias: ['machinery']
            },
            cultist: {
                name: 'Cultist',
                desc: 'Devoted follower seeking forbidden knowledge',
                skills: ['occult', 'ritual', 'madness_resistance'],
                startItems: ['tome', 'candle'],
                phobias: ['holy_symbols']
            },
            janitor: {
                name: 'Janitor',
                desc: 'Knows every corner of the facility',
                skills: ['access_all', 'observation', 'patience'],
                startItems: ['master_key', 'mop'],
                phobias: ['germs']
            },
            skeptic: {
                name: 'Skeptic',
                desc: 'Refuses to believe in the supernatural',
                skills: ['rationality', 'doubt', 'debunking'],
                startItems: ['camera', 'evidence_bag'],
                phobias: ['supernatural']
            }
        };
    }
    
    console.log('Using backstories:', Object.keys(backstories));
    
    let content = '<div class="space-y-4">';
    
    Object.entries(backstories).forEach(([key, backstory]) => {
        content += `
            <div class="border border-cyan-600/30 rounded-lg p-4 bg-black/40 hover:bg-cyan-900/20 transition-colors">
                <h3 class="text-cyan-400 font-bold text-lg mb-2">${backstory.name}</h3>
                <p class="text-gray-300 mb-3">${backstory.desc}</p>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                    <div>
                        <span class="text-cyan-300 font-semibold">Skills:</span>
                        <ul class="text-gray-400 ml-2">
                            ${backstory.skills.map(skill => `<li>• ${skill.replace(/_/g, ' ')}</li>`).join('')}
                        </ul>
                    </div>
                    
                    <div>
                        <span class="text-cyan-300 font-semibold">Starting Items:</span>
                        <ul class="text-gray-400 ml-2">
                            ${backstory.startItems.map(item => `<li>• ${item.replace(/_/g, ' ')}</li>`).join('')}
                        </ul>
                    </div>
                </div>
                
                <div class="mt-3">
                    <span class="text-red-300 font-semibold">Potential Phobias:</span>
                    <ul class="text-red-400 ml-2">
                        ${backstory.phobias.map(phobia => `<li>• ${phobia.replace(/_/g, ' ')}</li>`).join('')}
                    </ul>
                </div>
                
                <div class="mt-3 text-xs text-gray-500">
                    Type "${key}" in the input field to use this backstory
                </div>
            </div>
        `;
    });
    
    content += '</div>';
    modalContent.innerHTML = content;
    
    console.log('Modal content populated successfully');
}

console.log('Backstory modal fix script loaded');
