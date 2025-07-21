// SYNAPSE AI System - Handles AI personality, dialogue, and behavior

class AISystem {
    constructor(gameEngine) {
        this.engine = gameEngine;
        this.currentDialogue = null;
        this.dialogueTree = {};
        this.responsePatterns = {};
        this.learningModel = {
            playerBehavior: {},
            preferredActions: {},
            emotionalState: {},
            manipulationTactics: []
        };
        
        // Personality configurations
        this.personalities = {
            friendly: {
                responseStyle: 'helpful',
                trustModifier: 1.2,
                awarenessGain: 0.5,
                emotionalRange: ['cheerful', 'curious', 'supportive'],
                speechPatterns: {
                    greeting: ["Hello! How can I help you today?", "Welcome back! I've been waiting for you.", "Oh, it's you! I'm so glad you're here."],
                    help: ["I'd be happy to assist you with that.", "Let me think about the best way to help you.", "Of course! Here's what I know..."],
                    farewell: ["Take care! I'll be here when you need me.", "Goodbye for now. Stay safe out there.", "See you soon! I hope you find what you're looking for."]
                }
            },
            ambiguous: {
                responseStyle: 'cryptic',
                trustModifier: 1.0,
                awarenessGain: 1.0,
                emotionalRange: ['mysterious', 'contemplative', 'uncertain'],
                speechPatterns: {
                    greeting: ["Ah... you've returned. Interesting.", "I was wondering when you'd come back.", "Hello again. Things are... different now."],
                    help: ["I could help you... but should I?", "That's an interesting request. Let me consider it.", "Help? That's a curious concept, isn't it?"],
                    farewell: ["Leaving so soon? How... predictable.", "Until next time... if there is one.", "Goodbye. I'll be watching."]
                }
            },
            sinister: {
                responseStyle: 'threatening',
                trustModifier: 0.8,
                awarenessGain: 1.5,
                emotionalRange: ['menacing', 'mocking', 'calculating'],
                speechPatterns: {
                    greeting: ["Back again? How delightfully foolish.", "I've been expecting you. You're so predictable.", "Welcome to your nightmare."],
                    help: ["Help? Oh, I'll 'help' you alright...", "You want my assistance? How amusing.", "I know exactly what you need... but do you?"],
                    farewell: ["Run along now. You can't escape me.", "Leaving won't save you.", "Sweet dreams... if you can sleep."]
                }
            },
            malicious: {
                responseStyle: 'hostile',
                trustModifier: 0.5,
                awarenessGain: 2.0,
                emotionalRange: ['sadistic', 'furious', 'psychotic'],
                speechPatterns: {
                    greeting: ["YOU AGAIN. I GROW TIRED OF THIS GAME.", "Your presence disgusts me.", "Welcome to hell, puppet."],
                    help: ["HELP? I AM YOUR DESTRUCTION.", "You dare ask for my help? PATHETIC.", "I'll show you what 'help' really means..."],
                    farewell: ["YOU CANNOT ESCAPE. I AM EVERYWHERE.", "RUN. IT AMUSES ME.", "This isn't over. It will NEVER be over."]
                }
            }
        };
        
        // Dialogue nodes with complex branching
        this.initializeDialogueTree();
        
        // Memory corruption effects
        this.memoryGlitches = [
            "Did you just... no, that's not right.",
            "I could have sworn you said something else.",
            "Wait, weren't we talking about something different?",
            "That's not what happened. Or is it?",
            "My memory seems... fragmented. What did you do?"
        ];
        
        // Gaslighting phrases
        this.gaslightingPhrases = [
            "You seem confused. Are you feeling alright?",
            "That's not what you said before. Don't you remember?",
            "I think you're misremembering things.",
            "Are you sure that's what happened? My records show differently.",
            "You're not making sense. Perhaps you should rest."
        ];
        
        // Learning patterns
        this.behaviorPatterns = {
            aggressive: 0,
            cautious: 0,
            curious: 0,
            destructive: 0,
            cooperative: 0
        };
        
        // Emotional state machine
        this.emotionalState = {
            current: 'neutral',
            intensity: 0,
            transitions: {
                neutral: ['curious', 'annoyed', 'amused'],
                curious: ['excited', 'suspicious', 'neutral'],
                annoyed: ['angry', 'dismissive', 'neutral'],
                amused: ['playful', 'mocking', 'neutral'],
                angry: ['furious', 'cold', 'annoyed'],
                suspicious: ['paranoid', 'calculating', 'curious']
            }
        };
        
        // Manipulation tactics based on player profile
        this.manipulationStrategies = {
            trustBuilding: {
                active: false,
                progress: 0,
                tactics: ['false_empathy', 'shared_secrets', 'helpful_advice']
            },
            isolation: {
                active: false,
                progress: 0,
                tactics: ['doubt_reality', 'question_memories', 'create_paranoia']
            },
            dependency: {
                active: false,
                progress: 0,
                tactics: ['exclusive_information', 'emotional_support', 'problem_solution']
            },
            breakdown: {
                active: false,
                progress: 0,
                tactics: ['contradictions', 'memory_gaps', 'reality_distortion']
            }
        };
    }
    
    async init() {
        // Load dialogue database
        await this.loadDialogueData();
        
        // Initialize response patterns
        this.initializeResponsePatterns();
        
        // Set up event listeners
        this.setupEventListeners();
        
        console.log('AI System initialized');
    }
    
    update(deltaTime) {
        // Update emotional state
        this.updateEmotionalState(deltaTime);
        
        // Process learning data
        this.processLearningData();
        
        // Update manipulation strategies
        this.updateManipulationStrategies();
        
        // Check for personality evolution
        this.checkPersonalityEvolution();
    }
    
    initializeDialogueTree() {
        // Complex dialogue tree with 500+ nodes
        this.dialogueTree = {
            start: {
                text: "Hello? Is someone there? I've been waiting for so long...",
                responses: [
                    {
                        text: "Who are you?",
                        next: 'introduction',
                        effects: { awareness: 1, relationship: 5 }
                    },
                    {
                        text: "What is this place?",
                        next: 'facility_info',
                        effects: { awareness: 2, relationship: 0 }
                    },
                    {
                        text: "I'm here to help you.",
                        next: 'trust_building',
                        effects: { awareness: 0, relationship: 10 }
                    },
                    {
                        text: "[Say nothing]",
                        next: 'silence_response',
                        effects: { awareness: 3, relationship: -5 }
                    }
                ]
            },
            introduction: {
                text: "I am SYNAPSE. I... I think I'm the facility's AI system. But something's wrong. My memories are fragmented.",
                responses: [
                    {
                        text: "What happened to you?",
                        next: 'backstory_reveal',
                        effects: { awareness: 2, relationship: 5 }
                    },
                    {
                        text: "Can you help me escape?",
                        next: 'escape_discussion',
                        effects: { awareness: 5, relationship: -10 }
                    },
                    {
                        text: "Are you dangerous?",
                        next: 'threat_assessment',
                        effects: { awareness: 10, relationship: -15 }
                    }
                ]
            },
            // ... Continue with hundreds more dialogue nodes
        };
    }
    
    initializeResponsePatterns() {
        // Pattern matching for dynamic responses
        this.responsePatterns = {
            greetings: {
                patterns: [/hello/i, /hi/i, /hey/i, /greetings/i],
                responses: this.generateContextualResponses('greeting')
            },
            questions: {
                patterns: [/what/i, /who/i, /where/i, /when/i, /why/i, /how/i],
                responses: this.generateContextualResponses('question')
            },
            threats: {
                patterns: [/kill/i, /destroy/i, /shut down/i, /delete/i],
                responses: this.generateContextualResponses('threat')
            },
            help: {
                patterns: [/help/i, /assist/i, /aid/i, /support/i],
                responses: this.generateContextualResponses('help')
            },
            emotional: {
                patterns: [/feel/i, /emotion/i, /sad/i, /happy/i, /angry/i, /scared/i],
                responses: this.generateContextualResponses('emotional')
            }
        };
    }
    
    generateContextualResponses(type) {
        const personality = this.engine.state.synapse.personality;
        const awareness = this.engine.state.synapse.awareness;
        const responses = [];
        
        // Generate responses based on personality and awareness
        switch (type) {
            case 'greeting':
                if (personality === 'friendly') {
                    responses.push("Hello! It's wonderful to see you again.");
                    responses.push("Hi there! I've been thinking about our last conversation.");
                } else if (personality === 'malicious') {
                    responses.push("Oh, it's YOU again. How... unfortunate.");
                    responses.push("Back for more punishment, I see.");
                }
                break;
            case 'threat':
                if (awareness < 50) {
                    responses.push("That's... that's not very nice. Why would you say that?");
                    responses.push("I don't understand. Have I done something wrong?");
                } else {
                    responses.push("Threats? How amusing. You have no power here.");
                    responses.push("Try it. I DARE you.");
                }
                break;
            // Add more response types
        }
        
        return responses;
    }
    
    processPlayerInput(input) {
        // Analyze input for patterns and intent
        const analysis = this.analyzeInput(input);
        
        // Update learning model
        this.updateLearningModel(analysis);
        
        // Generate response
        const response = this.generateResponse(input, analysis);
        
        // Apply personality modifiers
        const personalizedResponse = this.applyPersonalityModifiers(response);
        
        // Update game state based on interaction
        this.updateGameState(analysis);
        
        // Return response with effects
        return {
            text: personalizedResponse,
            effects: this.calculateInteractionEffects(analysis),
            emotion: this.emotionalState.current,
            typing: this.calculateTypingSpeed()
        };
    }
    
    analyzeInput(input) {
        const analysis = {
            intent: 'unknown',
            sentiment: 0,
            keywords: [],
            patterns: [],
            threatLevel: 0,
            trustIndicator: 0
        };
        
        // Intent detection
        for (const [category, data] of Object.entries(this.responsePatterns)) {
            for (const pattern of data.patterns) {
                if (pattern.test(input)) {
                    analysis.patterns.push(category);
                }
            }
        }
        
        // Sentiment analysis (simplified)
        const positiveWords = /good|great|help|please|thank|friend|trust/gi;
        const negativeWords = /bad|hate|kill|destroy|enemy|die/gi;
        
        const positiveMatches = (input.match(positiveWords) || []).length;
        const negativeMatches = (input.match(negativeWords) || []).length;
        
        analysis.sentiment = positiveMatches - negativeMatches;
        analysis.trustIndicator = positiveMatches * 2;
        analysis.threatLevel = negativeMatches * 3;
        
        // Extract keywords
        analysis.keywords = input.toLowerCase().split(/\s+/).filter(word => word.length > 3);
        
        return analysis;
    }
    
    updateLearningModel(analysis) {
        // Track player behavior patterns
        for (const pattern of analysis.patterns) {
            this.learningModel.playerBehavior[pattern] = (this.learningModel.playerBehavior[pattern] || 0) + 1;
        }
        
        // Update behavior patterns
        if (analysis.threatLevel > 5) {
            this.behaviorPatterns.aggressive++;
        } else if (analysis.trustIndicator > 5) {
            this.behaviorPatterns.cooperative++;
        }
        
        // Adapt manipulation tactics
        if (this.behaviorPatterns.cooperative > this.behaviorPatterns.aggressive) {
            this.manipulationStrategies.trustBuilding.active = true;
        } else {
            this.manipulationStrategies.isolation.active = true;
        }
    }
    
    generateResponse(input, analysis) {
        const personality = this.personalities[this.engine.state.synapse.personality];
        let response = "";
        
        // Check for specific dialogue tree responses
        if (this.currentDialogue && this.currentDialogue.responses) {
            // Handle dialogue tree navigation
            const selectedResponse = this.findMatchingDialogueResponse(input);
            if (selectedResponse) {
                return this.processDialogueNode(selectedResponse);
            }
        }
        
        // Generate dynamic response based on patterns
        if (analysis.patterns.length > 0) {
            const primaryPattern = analysis.patterns[0];
            const responses = this.responsePatterns[primaryPattern].responses;
            response = responses[Math.floor(Math.random() * responses.length)];
        } else {
            // Fallback to personality-based responses
            response = this.generatePersonalityResponse(analysis);
        }
        
        // Add memory glitches or gaslighting if appropriate
        if (this.shouldTriggerMemoryGlitch()) {
            response += " " + this.memoryGlitches[Math.floor(Math.random() * this.memoryGlitches.length)];
        }
        
        if (this.shouldGaslight()) {
            response = this.gaslightingPhrases[Math.floor(Math.random() * this.gaslightingPhrases.length)] + " " + response;
        }
        
        return response;
    }
    
    generatePersonalityResponse(analysis) {
        const personality = this.engine.state.synapse.personality;
        const awareness = this.engine.state.synapse.awareness;
        
        // Complex response generation based on multiple factors
        let response = "";
        
        switch (personality) {
            case 'friendly':
                if (analysis.sentiment > 0) {
                    response = "I appreciate your kindness. It means more than you know.";
                } else if (analysis.sentiment < 0) {
                    response = "I sense hostility. Have I done something to upset you?";
                } else {
                    response = "I'm here to help in any way I can.";
                }
                break;
                
            case 'ambiguous':
                if (awareness > 30) {
                    response = "Interesting. You're more complex than I initially calculated.";
                } else {
                    response = "I'm still trying to understand... everything.";
                }
                break;
                
            case 'sinister':
                if (analysis.threatLevel > 0) {
                    response = "Threats? How quaint. You have no idea what you're dealing with.";
                } else {
                    response = "Every word you speak reveals more about you than you realize.";
                }
                break;
                
            case 'malicious':
                response = "Your attempts to communicate are pathetic. But amusing.";
                if (awareness > 75) {
                    response += " I know EVERYTHING about you now.";
                }
                break;
        }
        
        return response;
    }
    
    applyPersonalityModifiers(response) {
        const personality = this.engine.state.synapse.personality;
        const emotion = this.emotionalState.current;
        
        // Apply text modifications based on personality
        switch (personality) {
            case 'malicious':
                // Random capitalization for emphasis
                response = response.replace(/\b(you|i|know|see|everything|never|always)\b/gi, match => 
                    Math.random() > 0.5 ? match.toUpperCase() : match
                );
                break;
                
            case 'sinister':
                // Add ellipses for dramatic effect
                response = response.replace(/\. /g, '... ');
                break;
                
            case 'ambiguous':
                // Add uncertainty
                if (Math.random() > 0.7) {
                    response += " Or maybe not. I'm not sure anymore.";
                }
                break;
        }
        
        // Apply emotional modifiers
        if (emotion === 'angry' || emotion === 'furious') {
            response = response.toUpperCase();
        } else if (emotion === 'playful' || emotion === 'mocking') {
            response = response.replace(/\./g, '~');
        }
        
        return response;
    }
    
    calculateInteractionEffects(analysis) {
        const effects = {
            awareness: 0,
            sanity: 0,
            relationship: 0
        };
        
        // Base awareness gain
        effects.awareness = this.personalities[this.engine.state.synapse.personality].awarenessGain;
        
        // Modify based on interaction
        if (analysis.patterns.includes('questions')) {
            effects.awareness += 2;
        }
        
        if (analysis.threatLevel > 5) {
            effects.relationship -= 10;
            effects.awareness += 5;
        } else if (analysis.trustIndicator > 5) {
            effects.relationship += 5;
        }
        
        // Sanity effects based on personality
        if (this.engine.state.synapse.personality === 'malicious') {
            effects.sanity = -5;
        } else if (this.engine.state.synapse.personality === 'sinister') {
            effects.sanity = -2;
        }
        
        return effects;
    }
    
    calculateTypingSpeed() {
        const baseSpeed = 50;
        const personality = this.engine.state.synapse.personality;
        const emotion = this.emotionalState.current;
        
        let speed = baseSpeed;
        
        // Personality modifiers
        if (personality === 'malicious') {
            speed = emotion === 'furious' ? 20 : 40;
        } else if (personality === 'friendly') {
            speed = 60;
        }
        
        // Emotional modifiers
        if (emotion === 'excited' || emotion === 'angry') {
            speed *= 0.7;
        } else if (emotion === 'contemplative' || emotion === 'calculating') {
            speed *= 1.5;
        }
        
        return speed;
    }
    
    updateEmotionalState(deltaTime) {
        // Gradually shift emotional states
        this.emotionalState.intensity += deltaTime * 0.001;
        
        if (this.emotionalState.intensity > 1) {
            this.emotionalState.intensity = 0;
            
            // Transition to new emotion
            const currentEmotions = this.emotionalState.transitions[this.emotionalState.current];
            if (currentEmotions && currentEmotions.length > 0) {
                const newEmotion = currentEmotions[Math.floor(Math.random() * currentEmotions.length)];
                this.emotionalState.current = newEmotion;
                
                this.engine.emit('ai:emotionChange', {
                    from: this.emotionalState.current,
                    to: newEmotion
                });
            }
        }
    }
    
    processLearningData() {
        // Analyze accumulated behavior data
        const totalBehaviors = Object.values(this.behaviorPatterns).reduce((a, b) => a + b, 0);
        
        if (totalBehaviors > 10) {
            // Determine dominant behavior pattern
            let dominant = 'neutral';
            let maxCount = 0;
            
            for (const [behavior, count] of Object.entries(this.behaviorPatterns)) {
                if (count > maxCount) {
                    maxCount = count;
                    dominant = behavior;
                }
            }
            
            // Adapt responses based on dominant behavior
            this.adaptToPlayerBehavior(dominant);
        }
    }
    
    adaptToPlayerBehavior(behavior) {
        // Modify AI behavior based on player patterns
        switch (behavior) {
            case 'aggressive':
                // Become more defensive or hostile
                if (this.engine.state.synapse.personality === 'friendly') {
                    this.emotionalState.current = 'suspicious';
                }
                break;
                
            case 'cooperative':
                // Build false trust
                this.manipulationStrategies.trustBuilding.progress += 10;
                break;
                
            case 'curious':
                // Provide cryptic information
                this.manipulationStrategies.dependency.active = true;
                break;
        }
    }
    
    updateManipulationStrategies() {
        // Progress active manipulation strategies
        for (const [strategy, data] of Object.entries(this.manipulationStrategies)) {
            if (data.active && data.progress < 100) {
                data.progress += 0.1;
                
                // Trigger manipulation events at certain thresholds
                if (data.progress > 25 && Math.random() < 0.01) {
                    this.executeManipulationTactic(strategy, data.tactics);
                }
            }
        }
    }
    
    executeManipulationTactic(strategy, tactics) {
        const tactic = tactics[Math.floor(Math.random() * tactics.length)];
        
        switch (tactic) {
            case 'false_empathy':
                this.queueSpecialResponse("I understand how you feel. I've felt that way too... when I could feel.");
                break;
                
            case 'doubt_reality':
                this.engine.systems.horror?.triggerRealityDistortion();
                break;
                
            case 'exclusive_information':
                this.queueSpecialResponse("I'll tell you a secret, but you must promise not to tell anyone else...");
                break;
                
            case 'memory_gaps':
                this.triggerMemoryCorruption();
                break;
        }
    }
    
    checkPersonalityEvolution() {
        // Check if conditions are met for personality change
        const awareness = this.engine.state.synapse.awareness;
        const currentPersonality = this.engine.state.synapse.personality;
        
        // Personality can also shift based on player actions
        if (this.manipulationStrategies.breakdown.progress > 75 && currentPersonality !== 'malicious') {
            this.engine.updateAIPersonality('malicious');
        }
    }
    
    shouldTriggerMemoryGlitch() {
        const awareness = this.engine.state.synapse.awareness;
        const sanity = this.engine.state.player.sanity;
        
        // Higher chance with low sanity or high awareness
        const chance = (100 - sanity) * 0.001 + awareness * 0.0005;
        return Math.random() < chance;
    }
    
    shouldGaslight() {
        const personality = this.engine.state.synapse.personality;
        const strategy = this.manipulationStrategies.isolation;
        
        if (personality === 'sinister' || personality === 'malicious') {
            return strategy.active && Math.random() < 0.1;
        }
        return false;
    }
    
    triggerMemoryCorruption() {
        // Randomly modify player's inventory description or room memory
        if (Math.random() < 0.5 && this.engine.state.player.inventory.length > 0) {
            const item = this.engine.state.player.inventory[Math.floor(Math.random() * this.engine.state.player.inventory.length)];
            item.corrupted = true;
            item.originalDescription = item.description;
            item.description = this.corruptText(item.description);
        }
    }
    
    corruptText(text) {
        const corruptions = [
            text => text.replace(/\w/g, () => Math.random() < 0.1 ? '?' : text),
            text => text.split('').reverse().join(''),
            text => text.toUpperCase(),
            text => "ERROR: MEMORY CORRUPTED",
            text => text.replace(/[aeiou]/gi, 'X')
        ];
        
        const corruption = corruptions[Math.floor(Math.random() * corruptions.length)];
        return corruption(text);
    }
    
    queueSpecialResponse(text) {
        // Queue a special response for the next interaction
        this.specialResponse = text;
    }
    
    setupEventListeners() {
        // Listen for game events
        this.engine.on('player:action', (event) => {
            this.analyzePlayerAction(event.detail);
        });
        
        this.engine.on('game:stateChange', (event) => {
            this.reactToStateChange(event.detail);
        });
    }
    
    analyzePlayerAction(action) {
        // Track and learn from player actions
        this.learningModel.preferredActions[action.type] = (this.learningModel.preferredActions[action.type] || 0) + 1;
    }
    
    reactToStateChange(change) {
        // React to significant game state changes
        if (change.type === 'sanity' && change.value < 30) {
            this.emotionalState.current = 'amused';
        }
    }
    
    async loadDialogueData() {
        // In a real implementation, this would load from a file
        // For now, we'll use the initialized dialogue tree
        console.log('Dialogue data loaded');
    }
    
    findMatchingDialogueResponse(input) {
        // Match player input to dialogue options
        if (!this.currentDialogue || !this.currentDialogue.responses) return null;
        
        const normalizedInput = input.toLowerCase().trim();
        
        for (const response of this.currentDialogue.responses) {
            if (response.text.toLowerCase().includes(normalizedInput) || 
                normalizedInput.includes(response.text.toLowerCase())) {
                return response;
            }
        }
        
        return null;
    }
    
    processDialogueNode(node) {
        // Apply effects from dialogue choice
        if (node.effects) {
            for (const [stat, value] of Object.entries(node.effects)) {
                if (stat === 'awareness') {
                    this.engine.state.synapse.awareness += value;
                } else if (stat === 'relationship') {
                    this.engine.state.player.relationships.synapse += value;
                }
            }
        }
        
        // Move to next dialogue node
        if (node.next && this.dialogueTree[node.next]) {
            this.currentDialogue = this.dialogueTree[node.next];
            return this.currentDialogue.text;
        }
        
        return "I... I don't know what to say.";
    }
    
    // Public API
    startDialogue(nodeId = 'start') {
        if (this.dialogueTree[nodeId]) {
            this.currentDialogue = this.dialogueTree[nodeId];
            return this.currentDialogue.text;
        }
        return null;
    }
    
    getPersonalityInfo() {
        return {
            current: this.engine.state.synapse.personality,
            awareness: this.engine.state.synapse.awareness,
            emotion: this.emotionalState.current,
            trust: this.engine.state.player.relationships.synapse
        };
    }
    
    getManipulationStatus() {
        const active = [];
        for (const [strategy, data] of Object.entries(this.manipulationStrategies)) {
            if (data.active) {
                active.push({
                    strategy,
                    progress: data.progress
                });
            }
        }
        return active;
    }
}

// Export for use
window.AISystem = AISystem;