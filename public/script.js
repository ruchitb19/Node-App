document.addEventListener('DOMContentLoaded', () => {
    const actionBtn = document.getElementById('action-btn');
    const statusMessage = document.getElementById('status-message');
    const card = document.getElementById('interactive-card');

    actionBtn.addEventListener('click', () => {
        // Toggle message visibility
        if (statusMessage.classList.contains('hidden')) {
            statusMessage.classList.remove('hidden');
            statusMessage.classList.add('visible');
            actionBtn.textContent = 'Hide Message';
            
            // Add a subtle animation to the card
            card.style.transform = 'scale(1.02)';
            setTimeout(() => {
                card.style.transform = '';
            }, 200);
        } else {
            statusMessage.classList.remove('visible');
            statusMessage.classList.add('hidden');
            actionBtn.textContent = 'Click Me!';
        }
    });

    // Optionally check our API
    fetch('/api/status')
        .then(res => res.json())
        .then(data => {
            console.log("API Status:", data.message);
        })
        .catch(err => console.error("Error fetching API:", err));
});
