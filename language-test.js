// language-test.js - Quick test for language system

document.addEventListener('DOMContentLoaded', function() {
    console.log('Language test script loaded');
    
    // Test language system availability
    setTimeout(() => {
        if (window.translations) {
            console.log('✅ Translation system loaded');
            console.log('Available languages:', Object.keys(window.translations));
            
            // Test translation function
            if (window.t) {
                console.log('✅ Translation function available');
                console.log('English test:', window.t('new_game', 'en'));
                console.log('Swedish test:', window.t('new_game', 'sv'));
            } else {
                console.log('❌ Translation function not available');
            }
            
            // Test language switching
            if (window.setLanguage) {
                console.log('✅ Language switching function available');
            } else {
                console.log('❌ Language switching function not available');
            }
        } else {
            console.log('❌ Translation system not loaded');
        }
    }, 1000);
});

// Add a global test function for manual testing
window.testLanguageSwitch = function() {
    console.log('Testing language switch...');
    
    // Switch to Swedish
    console.log('Switching to Swedish...');
    if (window.setLanguage) {
        window.setLanguage('sv');
        setTimeout(() => {
            console.log('Current language:', window.currentLanguage);
            console.log('Test translation:', window.t('new_game'));
            
            // Switch back to English
            setTimeout(() => {
                console.log('Switching back to English...');
                window.setLanguage('en');
                setTimeout(() => {
                    console.log('Current language:', window.currentLanguage);
                    console.log('Test translation:', window.t('new_game'));
                }, 500);
            }, 2000);
        }, 500);
    } else {
        console.log('❌ Language switching not available');
    }
};
