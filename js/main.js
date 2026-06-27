function filterSchedule(material) {
    const rows = document.querySelectorAll('.schedule-row');
    const buttons = document.querySelectorAll('.filter-btn');

    buttons.forEach(btn => {
        if (btn.textContent.includes(material) || (material === 'all' && btn.textContent === 'Show All')) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    rows.forEach(row => {
        const rowMaterial = row.getAttribute('data-material');
        if (material === 'all' || rowMaterial === material) {
            row.style.display = ''; 
        } else {
            row.style.display = 'none'; 
        }
    });

window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('navbar-shrink');
    } else {
        navbar.classList.remove('navbar-shrink');
    }
});
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); 
        
        const nameInput = document.getElementById('clientName').value.trim();
        const emailInput = document.getElementById('clientEmail').value.trim();
        const messageInput = document.getElementById('clientMessage').value.trim();
        const feedbackContainer = document.getElementById('validationFeedback');
        
        feedbackContainer.className = "alert d-none";
    });
}
}
