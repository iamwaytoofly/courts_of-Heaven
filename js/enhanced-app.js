// Enhanced Courts of Heaven Prayer App
// Main application functionality with expanded prayer generation capabilities

document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const prayerForm = document.getElementById('prayer-form');
    const topicInput = document.getElementById('prayer-topic');
    const generateBtn = document.getElementById('generate-prayer');
    const prayerOutput = document.getElementById('prayer-output');
    const prayerText = document.getElementById('prayer-text');
    const saveBtn = document.getElementById('save-prayer');
    const savedPrayersList = document.getElementById('saved-prayers-list');
    const clearSavedBtn = document.getElementById('clear-saved');
    
    // Load saved prayers from localStorage
    loadSavedPrayers();
    
    // Event Listeners
    generateBtn.addEventListener('click', generatePrayer);
    saveBtn.addEventListener('click', savePrayer);
    clearSavedBtn.addEventListener('click', clearSavedPrayers);
    
    // Generate Prayer Function
    function generatePrayer() {
        const topic = topicInput.value.trim();
        
        if (!topic) {
            alert('Please enter a prayer topic');
            return;
        }
        
        // Generate prayer based on Courts of Heaven structure
        const prayer = createEnhancedCourtsPrayer(topic);
        
        // Display the prayer
        prayerText.innerHTML = prayer;
        prayerOutput.classList.remove('hidden');
        
        // Scroll to prayer
        prayerOutput.scrollIntoView({ behavior: 'smooth' });
    }
    
    // Enhanced Create Courts of Heaven Prayer
    function createEnhancedCourtsPrayer(topic) {
        // Select random scripture for each section
        const approachVerse = getRandomItem(scriptures.approaching);
        const honorVerse = getRandomItem(scriptures.honoring);
        const confessionVerse = getRandomItem(scriptures.confession);
        const presentingVerse = getRandomItem(scriptures.presenting);
        const silencingVerse = getRandomItem(scriptures.silencing);
        const judgmentVerse = getRandomItem(scriptures.judgment);
        const verdictVerse = getRandomItem(scriptures.verdict);
        const angelsVerse = getRandomItem(scriptures.angels);
        
        // Select random intro and closing
        const intro = getRandomItem(prayerIntros);
        const closing = getRandomItem(prayerClosings);
        
        // Select random templates for each section
        const approachingTemplate = getRandomItem(approachingTemplates || ["I stand before Your throne of grace with confidence, knowing that You welcome me into Your courts. As Your Word says, &quot;[VERSE]&quot; [REFERENCE]."]);
        const honoringTemplate = getRandomItem(honoringTemplates || ["I honor You as the righteous Judge of all the earth, the King of Kings and Lord of Lords. &quot;[VERSE]&quot; [REFERENCE]. You alone are worthy of all praise and glory."]);
        const confessionTemplate = getRandomItem(confessionTemplates || ["Before presenting my case, I confess any sin or iniquity in my life. I repent and turn away from anything that separates me from Your presence. Your Word promises, &quot;[VERSE]&quot; [REFERENCE]."]);
        const presentingTemplate = getRandomItem(presentingTemplates || ["Lord, I bring before Your court my petition regarding [TOPIC]. I present this matter to You, knowing that &quot;[VERSE]&quot; [REFERENCE]. I ask for Your divine intervention and wisdom in this situation."]);
        const silencingTemplate = getRandomItem(silencingTemplates || ["I silence every voice of the accuser that speaks against me in this matter. By the authority of Jesus Christ, I declare, &quot;[VERSE]&quot; [REFERENCE]. No weapon formed against me shall prosper."]);
        const judgmentTemplate = getRandomItem(judgmentTemplates || ["Righteous Judge, I ask for Your divine judgment regarding [TOPIC]. Render Your verdict according to Your perfect will and justice. &quot;[VERSE]&quot; [REFERENCE]."]);
        const verdictTemplate = getRandomItem(verdictTemplates || ["By faith, I receive Your verdict and decree over this situation. I trust in Your goodness and mercy, for &quot;[VERSE]&quot; [REFERENCE]. I accept Your decision with gratitude."]);
        const angelsTemplate = getRandomItem(angelsTemplates || ["Lord, I ask that You dispatch Your angels to carry out Your verdict concerning [TOPIC]. Your Word declares, &quot;[VERSE]&quot; [REFERENCE]. Send them now to minister on my behalf."]);
        
        // Build prayer with all 8 components
        let prayer = `<p class="prayer-intro">${intro}</p>`;
        
        // 1. Approaching God's throne
        prayer += `<p class="prayer-section">${processTemplate(approachingTemplate, approachVerse.verse, approachVerse.reference)}</p>`;
        
        // 2. Honoring Him
        prayer += `<p class="prayer-section">${processTemplate(honoringTemplate, honorVerse.verse, honorVerse.reference)}</p>`;
        
        // 3. Confession and repentance
        prayer += `<p class="prayer-section">${processTemplate(confessionTemplate, confessionVerse.verse, confessionVerse.reference)}</p>`;
        
        // 4. Presenting your case
        prayer += `<p class="prayer-section">${processTemplate(presentingTemplate, presentingVerse.verse, presentingVerse.reference, topic)}</p>`;
        
        // 5. Silencing the accuser
        prayer += `<p class="prayer-section">${processTemplate(silencingTemplate, silencingVerse.verse, silencingVerse.reference)}</p>`;
        
        // 6. Asking for judgment
        prayer += `<p class="prayer-section">${processTemplate(judgmentTemplate, judgmentVerse.verse, judgmentVerse.reference, topic)}</p>`;
        
        // 7. Receiving the verdict
        prayer += `<p class="prayer-section">${processTemplate(verdictTemplate, verdictVerse.verse, verdictVerse.reference)}</p>`;
        
        // 8. Dispatching angels
        prayer += `<p class="prayer-section">${processTemplate(angelsTemplate, angelsVerse.verse, angelsVerse.reference, topic)}</p>`;
        
        // Closing
        prayer += `<p class="prayer-closing">${closing}</p>`;
        
        return prayer;
    }
    
    // Helper function to process templates
    function processTemplate(template, verse, reference, topic = null) {
        let processed = template;
        
        // Replace verse and reference placeholders
        processed = processed.replace('[VERSE]', `<em>${verse}</em>`);
        processed = processed.replace('[REFERENCE]', `<strong>(${reference})</strong>`);
        
        // Replace topic placeholder if provided
        if (topic) {
            processed = processed.replace('[TOPIC]', `<strong>${topic}</strong>`);
        }
        
        return processed;
    }
    
    // Save Prayer Function
    function savePrayer() {
        const prayerContent = prayerText.innerHTML;
        const topic = topicInput.value.trim();
        
        if (!prayerContent) {
            alert('No prayer to save');
            return;
        }
        
        // Get saved prayers or initialize empty array
        let savedPrayers = JSON.parse(localStorage.getItem('courtsPrayers')) || [];
        
        // Add new prayer with timestamp
        savedPrayers.push({
            topic: topic,
            content: prayerContent,
            date: new Date().toLocaleDateString()
        });
        
        // Save to localStorage
        localStorage.setItem('courtsPrayers', JSON.stringify(savedPrayers));
        
        // Update saved prayers list
        loadSavedPrayers();
        
        // Confirm to user
        alert('Prayer saved successfully');
    }
    
    // Load Saved Prayers
    function loadSavedPrayers() {
        const savedPrayers = JSON.parse(localStorage.getItem('courtsPrayers')) || [];
        
        // Clear current list
        savedPrayersList.innerHTML = '';
        
        if (savedPrayers.length === 0) {
            savedPrayersList.innerHTML = '<p class="empty-message">No saved prayers yet. Generate and save prayers to see them here.</p>';
            return;
        }
        
        // Add each prayer to the list
        savedPrayers.forEach((prayer, index) => {
            const prayerCard = document.createElement('div');
            prayerCard.className = 'saved-prayer-card';
            
            prayerCard.innerHTML = `
                <h3>${prayer.topic}</h3>
                <p class="saved-date">Saved on: ${prayer.date}</p>
                <button class="btn view-btn" data-index="${index}">View Prayer</button>
                <button class="btn delete-btn" data-index="${index}">Delete</button>
            `;
            
            savedPrayersList.appendChild(prayerCard);
        });
        
        // Add event listeners to view buttons
        document.querySelectorAll('.view-btn').forEach(button => {
            button.addEventListener('click', function() {
                const index = this.getAttribute('data-index');
                const prayer = savedPrayers[index];
                
                // Display the prayer
                prayerText.innerHTML = prayer.content;
                prayerOutput.classList.remove('hidden');
                topicInput.value = prayer.topic;
                
                // Scroll to prayer
                prayerOutput.scrollIntoView({ behavior: 'smooth' });
            });
        });
        
        // Add event listeners to delete buttons
        document.querySelectorAll('.delete-btn').forEach(button => {
            button.addEventListener('click', function() {
                const index = this.getAttribute('data-index');
                
                if (confirm('Are you sure you want to delete this saved prayer?')) {
                    savedPrayers.splice(index, 1);
                    localStorage.setItem('courtsPrayers', JSON.stringify(savedPrayers));
                    loadSavedPrayers();
                }
            });
        });
    }
    
    // Clear All Saved Prayers
    function clearSavedPrayers() {
        if (confirm('Are you sure you want to clear all saved prayers? This cannot be undone.')) {
            localStorage.removeItem('courtsPrayers');
            loadSavedPrayers();
        }
    }
    
    // Helper function to get random item from array
    function getRandomItem(array) {
        return array[Math.floor(Math.random() * array.length)];
    }

    // Calculate potential prayer variations
    function calculatePrayerVariations() {
        // Count the number of variations for each component
        const approachingCount = scriptures.approaching.length;
        const honoringCount = scriptures.honoring.length;
        const confessionCount = scriptures.confession.length;
        const presentingCount = scriptures.presenting.length;
        const silencingCount = scriptures.silencing.length;
        const judgmentCount = scriptures.judgment.length;
        const verdictCount = scriptures.verdict.length;
        const angelsCount = scriptures.angels.length;
        const introsCount = prayerIntros.length;
        const closingsCount = prayerClosings.length;
        
        // Count the number of templates for each section (if available)
        const approachingTemplateCount = approachingTemplates ? approachingTemplates.length : 1;
        const honoringTemplateCount = honoringTemplates ? honoringTemplates.length : 1;
        const confessionTemplateCount = confessionTemplates ? confessionTemplates.length : 1;
        const presentingTemplateCount = presentingTemplates ? presentingTemplates.length : 1;
        const silencingTemplateCount = silencingTemplates ? silencingTemplates.length : 1;
        const judgmentTemplateCount = judgmentTemplates ? judgmentTemplates.length : 1;
        const verdictTemplateCount = verdictTemplates ? verdictTemplates.length : 1;
        const angelsTemplateCount = angelsTemplates ? angelsTemplates.length : 1;
        
        // Calculate total possible combinations
        const totalVariations = 
            approachingCount * approachingTemplateCount *
            honoringCount * honoringTemplateCount *
            confessionCount * confessionTemplateCount *
            presentingCount * presentingTemplateCount *
            silencingCount * silencingTemplateCount *
            judgmentCount * judgmentTemplateCount *
            verdictCount * verdictTemplateCount *
            angelsCount * angelsTemplateCount *
            introsCount * closingsCount;
        
        console.log(`This prayer generator can create approximately ${totalVariations.toLocaleString()} unique prayer variations.`);
        return totalVariations;
    }
    
    // Calculate and log the number of possible prayer variations
    calculatePrayerVariations();
});