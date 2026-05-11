// Debug script to test backstory modal functionality
console.log('Debug: Testing backstory modal functionality');

// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', function() {
    console.log('Debug: DOM loaded, checking modal elements...');
    
    // Check if all elements exist
    const viewBtn = document.getElementById('view-backstories-btn');
    const modal = document.getElementById('backstory-list-modal');
    const closeBtn = document.getElementById('close-backstory-modal');
    const modalContent = document.getElementById('backstory-modal-content');
    
    console.log('Debug: View button:', viewBtn);
    console.log('Debug: Modal:', modal);
    console.log('Debug: Close button:', closeBtn);
    console.log('Debug: Modal content:', modalContent);
    
    // Check if BACKSTORIES is available
    if (typeof BACKSTORIES !== 'undefined') {
        console.log('Debug: BACKSTORIES available:', Object.keys(BACKSTORIES));
    } else {
        console.log('Debug: BACKSTORIES not available yet');
    }
    
    // Test modal functionality manually
    if (viewBtn) {
        viewBtn.addEventListener('click', function() {
            console.log('Debug: View button clicked');
            if (modal) {
                modal.classList.remove('hidden');
                console.log('Debug: Modal should now be visible');
                
                // Test populating content
                if (modalContent && typeof BACKSTORIES !== 'undefined') {
                    let content = '<div class="space-y-4">';
                    Object.entries(BACKSTORIES).forEach(([key, backstory]) => {
                        content += `<div class="border border-cyan-600/30 rounded-lg p-4 bg-black/40">
                            <h3 class="text-cyan-400 font-bold text-lg">${backstory.name}</h3>
                            <p class="text-gray-300">${backstory.desc}</p>
                            <p class="text-xs text-gray-500 mt-2">Type "${key}" in the input field</p>
                        </div>`;
                    });
                    content += '</div>';
                    modalContent.innerHTML = content;
                    console.log('Debug: Modal content populated');
                } else {
                    console.log('Debug: Could not populate modal content');
                }
            }
        });
    }
    
    if (closeBtn && modal) {
        closeBtn.addEventListener('click', function() {
            console.log('Debug: Close button clicked');
            modal.classList.add('hidden');
        });
    }
    
    // Close modal when clicking backdrop
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                console.log('Debug: Backdrop clicked');
                modal.classList.add('hidden');
            }
        });
    }
});
