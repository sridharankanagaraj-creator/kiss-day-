document.addEventListener('DOMContentLoaded', function() {
    const nameForm = document.getElementById('nameForm');
    if (nameForm) {
        nameForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('nameInput').value.trim();
            if (name) {
                // Store name in localStorage or URL params
                localStorage.setItem('kissDayName', name);
                window.location.href = 'wish.html';
            }
        });
    }

    // On wish page, display name
    const wishTitle = document.getElementById('wishTitle');
    if (wishTitle) {
        const name = localStorage.getItem('kissDayName') || 'Friend';
        wishTitle.textContent = wishTitle.textContent.replace('[Name]', name);
    }
});
