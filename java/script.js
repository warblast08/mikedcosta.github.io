document.addEventListener('DOMContentLoaded', function() {
    // Initialize Bootstrap tooltips
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });

    // Handle poll form submission
    const catPollForm = document.getElementById('catPoll');
    if (catPollForm) {
        catPollForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const userName = document.getElementById('userName').value.trim();
            const favoriteCat = document.getElementById('favoriteCat').value;
            
            if (!userName || !favoriteCat) {
                alert('Please fill in all fields');
                return;
            }
            
            // Update vote count
            const voteElement = document.getElementById(`${favoriteCat.toLowerCase()}Votes`);
            if (voteElement) {
                const currentVotes = parseInt(voteElement.textContent);
                voteElement.textContent = currentVotes + 1;
                
                // Store in localStorage
                localStorage.setItem(`${favoriteCat}Votes`, currentVotes + 1);
            }
            
            // Show thank you message
            alert(`Thank you for voting, ${userName}! ${favoriteCat} appreciates your support.`);
            
            // Reset form
            catPollForm.reset();
        });
    }
    
    // Load saved votes from localStorage
    ['Maxwell', 'Mona', 'Tenley', 'Rocky'].forEach(cat => {
        const savedVotes = localStorage.getItem(`${cat}Votes`);
        const voteElement = document.getElementById(`${cat.toLowerCase()}Votes`);
        if (savedVotes && voteElement) {
            voteElement.textContent = savedVotes;
        }
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});