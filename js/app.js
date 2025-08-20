// Courts of Heaven Prayer App
// Main application functionality

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
    
    // Add form submit event listener for Enter key
    prayerForm.addEventListener('submit', function(event) {
        // Prevent the default form submission
        event.preventDefault();
        
        // Call the generatePrayer function
        generatePrayer();
    });
    
    // Generate Prayer Function
    function generatePrayer() {
        const topic = topicInput.value.trim();
        
        if (!topic) {
            alert('Please enter a prayer topic');
            return;
        }
        
        // Generate prayer based on Courts of Heaven structure
        const prayer = createCourtsPrayer(topic);
        
        // Display the prayer
        prayerText.innerHTML = prayer;
        prayerOutput.classList.remove('hidden');
        
        // Scroll to prayer
        prayerOutput.scrollIntoView({ behavior: 'smooth' });
    }
    
    // Create Courts of Heaven Prayer
    function createCourtsPrayer(topic) {
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
        
        // Build prayer with all 8 components
        let prayer = `<p class="prayer-intro">${intro}</p>`;
        
        // 1. Approaching God's throne
        prayer += `<p class="prayer-section">I stand before Your throne of grace with confidence, knowing that You welcome me into Your courts. As Your Word says, "<em>${approachVerse.verse}</em>" <strong>(${approachVerse.reference})</strong>.</p>`;
        
        // 2. Honoring Him
        prayer += `<p class="prayer-section">I honor You as the righteous Judge of all the earth, the King of Kings and Lord of Lords. "<em>${honorVerse.verse}</em>" <strong>(${honorVerse.reference})</strong>. You alone are worthy of all praise and glory.</p>`;
        
        // 3. Confession and repentance
        prayer += `<p class="prayer-section">Before presenting my case, I confess any sin or iniquity in my life. I repent and turn away from anything that separates me from Your presence. Your Word promises, "<em>${confessionVerse.verse}</em>" <strong>(${confessionVerse.reference})</strong>.</p>`;
        
        // 4. Presenting your case
        prayer += `<p class="prayer-section">Lord, I bring before Your court my petition regarding <strong>${topic}</strong>. I present this matter to You, knowing that "<em>${presentingVerse.verse}</em>" <strong>(${presentingVerse.reference})</strong>. I ask for Your divine intervention and wisdom in this situation.</p>`;
        
        // 5. Silencing the accuser
        prayer += `<p class="prayer-section">I silence every voice of the accuser that speaks against me in this matter. By the authority of Jesus Christ, I declare, "<em>${silencingVerse.verse}</em>" <strong>(${silencingVerse.reference})</strong>. No weapon formed against me shall prosper.</p>`;
        
        // 6. Asking for judgment
        prayer += `<p class="prayer-section">Righteous Judge, I ask for Your divine judgment regarding <strong>${topic}</strong>. Render Your verdict according to Your perfect will and justice. "<em>${judgmentVerse.verse}</em>" <strong>(${judgmentVerse.reference})</strong>.</p>`;
        
        // 7. Receiving the verdict
        prayer += `<p class="prayer-section">By faith, I receive Your verdict and decree over this situation. I trust in Your goodness and mercy, for "<em>${verdictVerse.verse}</em>" <strong>(${verdictVerse.reference})</strong>. I accept Your decision with gratitude.</p>`;
        
        // 8. Dispatching angels
        prayer += `<p class="prayer-section">Lord, I ask that You dispatch Your angels to carry out Your verdict concerning <strong>${topic}</strong>. Your Word declares, "<em>${angelsVerse.verse}</em>" <strong>(${angelsVerse.reference})</strong>. Send them now to minister on my behalf.</p>`;
        
        // Closing
        prayer += `<p class="prayer-closing">${closing}</p>`;
        
        return prayer;
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
});
