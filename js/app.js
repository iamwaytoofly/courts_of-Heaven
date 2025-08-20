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
    const printBtn = document.getElementById('print-prayer');
    
    // Load saved prayers from localStorage
    loadSavedPrayers();
    
    // Event Listeners
    generateBtn.addEventListener('click', generatePrayer);
    saveBtn.addEventListener('click', savePrayer);
    clearSavedBtn.addEventListener('click', clearSavedPrayers);
    printBtn.addEventListener('click', printPrayer);
    
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
    
    // Create array of scripture transitions
    const transitions = [
        "As Your Word says, ",
        "Your Word declares, ",
        "Scripture reminds us, ",
        "As it is written, ",
        "Your Word tells us, ",
        "As the Bible states, ",
        "In Your Word I read, ",
        "Your Scripture assures me, ",
        "As You have revealed in Your Word, ",
        "The Bible promises, "
    ];
    
    // Build prayer with all 8 components
    let prayer = `<p class="prayer-intro">${intro}</p>`;
    
    // 1. Approaching God's throne
    const approachTransition = getRandomItem(transitions);
    prayer += `<p class="prayer-section">I stand before Your throne of grace with confidence, knowing that You welcome me into Your courts. ${approachTransition}"<em>${approachVerse.verse}</em>" <strong>(${approachVerse.reference})</strong>.</p>`;
    
    // 2. Honoring Him
    const honorTransition = getRandomItem(transitions);
    prayer += `<p class="prayer-section">I honor You as the righteous Judge of all the earth, the King of Kings and Lord of Lords. ${honorTransition}"<em>${honorVerse.verse}</em>" <strong>(${honorVerse.reference})</strong>. You alone are worthy of all praise and glory.</p>`;
    
    // 3. Confession and repentance
    const confessionTransition = getRandomItem(transitions);
    prayer += `<p class="prayer-section">Before presenting my case, I confess any sin or iniquity in my life. I repent and turn away from anything that separates me from Your presence. ${confessionTransition}"<em>${confessionVerse.verse}</em>" <strong>(${confessionVerse.reference})</strong>.</p>`;
    
    // 4. Presenting your case
    const presentingTransition = getRandomItem(transitions);
    prayer += `<p class="prayer-section">Lord, I bring before Your court my petition regarding <strong>${topic}</strong>. I present this matter to You, knowing that ${presentingTransition}"<em>${presentingVerse.verse}</em>" <strong>(${presentingVerse.reference})</strong>. I ask for Your divine intervention and wisdom in this situation.</p>`;
    
    // 5. Silencing the accuser
    const silencingTransition = getRandomItem(transitions);
    prayer += `<p class="prayer-section">I silence every voice of the accuser that speaks against me in this matter. By the authority of Jesus Christ, I declare, ${silencingTransition}"<em>${silencingVerse.verse}</em>" <strong>(${silencingVerse.reference})</strong>. No weapon formed against me shall prosper.</p>`;
    
    // 6. Asking for judgment
    const judgmentTransition = getRandomItem(transitions);
    prayer += `<p class="prayer-section">Righteous Judge, I ask for Your divine judgment regarding <strong>${topic}</strong>. Render Your verdict according to Your perfect will and justice. ${judgmentTransition}"<em>${judgmentVerse.verse}</em>" <strong>(${judgmentVerse.reference})</strong>.</p>`;
    
    // 7. Receiving the verdict
    const verdictTransition = getRandomItem(transitions);
    prayer += `<p class="prayer-section">By faith, I receive Your verdict and decree over this situation. I trust in Your goodness and mercy, for ${verdictTransition}"<em>${verdictVerse.verse}</em>" <strong>(${verdictVerse.reference})</strong>. I accept Your decision with gratitude.</p>`;
    
    // 8. Dispatching angels
    const angelsTransition = getRandomItem(transitions);
    prayer += `<p class="prayer-section">Lord, I ask that You dispatch Your angels to carry out Your verdict concerning <strong>${topic}</strong>. ${angelsTransition}"<em>${angelsVerse.verse}</em>" <strong>(${angelsVerse.reference})</strong>. Send them now to minister on my behalf.</p>`;
    
    // Closing
    prayer += `<p class="prayer-closing">${closing}</p>`;
    
    return prayer;
}
    
    // Print Prayer Function
    function printPrayer() {
        console.log("Print button clicked!"); // Debug message
        const topic = topicInput.value.trim();
        const prayerContent = prayerText.innerHTML;
        
        if (!prayerContent) {
            alert('No prayer to print');
            return;
        }
        
        try {
            // Create a new window for printing
            const printWindow = window.open('', '_blank');
            if (!printWindow) {
                alert("Popup blocker may be preventing the print window. Please allow popups for this site.");
                return;
            }
            
            // Create clean HTML for printing
            printWindow.document.write(`
                <!DOCTYPE html>
                <html>
                <head>
                    <title>Courts of Heaven Prayer: ${topic}</title>
                    <style>
                        body {
                            font-family: 'Georgia', serif;
                            line-height: 1.6;
                            margin: 40px;
                            color: #333;
                        }
                        h1 {
                            text-align: center;
                            margin-bottom: 30px;
                            color: #3a5a7d;
                        }
                        h2 {
                            text-align: center;
                            font-style: italic;
                            margin-bottom: 30px;
                        }
                        .prayer-section {
                            margin-bottom: 20px;
                        }
                        .prayer-intro, .prayer-closing {
                            font-style: italic;
                            text-align: center;
                            margin: 30px 0;
                        }
                        .prayer-footer {
                            text-align: center;
                            margin-top: 40px;
                            font-size: 0.9em;
                            color: #666;
                        }
                        @media print {
                            body {
                                margin: 0.5in;
                            }
                        }
                    </style>
                </head>
                <body>
                    <h1>Courts of Heaven Prayer</h1>
                    <h2>${topic}</h2>
                    <div class="prayer-content">
                        ${prayerContent}
                    </div>
                    <p class="prayer-footer">Generated on ${new Date().toLocaleDateString()}</p>
                </body>
                </html>
            `);
            
            // Close the document for writing
            printWindow.document.close();
            
            // Wait for the content to load before printing
            printWindow.onload = function() {
                console.log("Print window loaded, triggering print..."); // Debug message
                printWindow.print();
                // Uncomment the next line if you want the window to close after printing
                // printWindow.close();
            };
        } catch (error) {
            console.error("Error in print function:", error);
            alert("There was an error preparing the print. Please try again.");
        }
    }
    
    // Save Prayer Function
    function savePrayer() {
        const prayerContent = prayerText.innerHTML;
        const topic = topicInput.value.trim();
        
        if (!prayerContent) {
            alert('No prayer to save');
            return;
        }
        
        // Create a clean version of the prayer for saving
        const cleanPrayer = `
            <div class="saved-prayer">
                <h2>Courts of Heaven Prayer</h2>
                <h3>${topic}</h3>
                <div class="prayer-content">
                    ${prayerContent}
                </div>
                <p class="prayer-footer">Generated on ${new Date().toLocaleDateString()}</p>
            </div>
        `;
        
        // Get saved prayers or initialize empty array
        let savedPrayers = JSON.parse(localStorage.getItem('courtsPrayers')) || [];
        
        // Add new prayer with timestamp
        savedPrayers.push({
            topic: topic,
            content: cleanPrayer,
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
