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

        if (nameInput === "" || emailInput === "" || messageInput === "") {
            feedbackContainer.classList.remove('d-none');
            feedbackContainer.classList.add('alert-danger');
            feedbackContainer.textContent = "Error: All validation metrics must be satisfied. Fields cannot be empty.";
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput)) {
            feedbackContainer.classList.remove('d-none');
            feedbackContainer.classList.add('alert-danger');
            feedbackContainer.textContent = "Error: Please input a valid standard formatting syntax email address.";
            return;
        }

        const providerRegex = /@(gmail|outlook|hotmail|icloud|apple)\./i;
        if (!providerRegex.test(emailInput)) {
            feedbackContainer.classList.remove('d-none');
            feedbackContainer.classList.add('alert-danger');
            feedbackContainer.textContent = "Error: Enterprise routing only accepts Gmail, Outlook, Hotmail, or Apple mail domains.";
            return;
        }
    });
}
}
