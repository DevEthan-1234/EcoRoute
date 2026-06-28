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
} 

window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (navbar) { 
        if (window.scrollY > 50) {
            navbar.classList.add('navbar-shrink');
        } else {
            navbar.classList.remove('navbar-shrink');
        }
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
        
        if (!feedbackContainer) return;
        feedbackContainer.className = "alert d-none";

        if (nameInput === "" || emailInput === "" || messageInput === "") {
            feedbackContainer.classList.remove('d-none');
            feedbackContainer.classList.add('alert-danger');
            feedbackContainer.textContent = "Please fill out all fields.";
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput)) {
            feedbackContainer.classList.remove('d-none');
            feedbackContainer.classList.add('alert-danger');
            feedbackContainer.textContent = "Please enter a valid email address.";
            return;
        }

        const providerRegex = /@(gmail|outlook|hotmail|icloud|apple)\./i;
        if (!providerRegex.test(emailInput)) {
            feedbackContainer.classList.remove('d-none');
            feedbackContainer.classList.add('alert-danger');
            feedbackContainer.textContent = "Please use a standard email provider (Gmail, Outlook, Hotmail, or iCloud).";
            return;
        }

        const extensionRegex = /\.(com|edu|go|ke)$/i;
        if (!extensionRegex.test(emailInput)) {
            feedbackContainer.classList.remove('d-none');
            feedbackContainer.classList.add('alert-danger');
            feedbackContainer.textContent = "Error: Unauthorized domain extension. System handles only .com, .edu, .go, or .ke loops.";
            return;
        }

        feedbackContainer.classList.remove('d-none');
        feedbackContainer.classList.add('alert-success');
        feedbackContainer.textContent = "Success: Dispatch registry log transmission processed successfully.";
        
        contactForm.reset();
    });
}

const track = document.getElementById('teamSliderTrack');
if (track) {
    const cards = Array.from(track.children);
    const isDesktop = window.matchMedia("(min-width: 768px)").matches;
    const visibleCards = isDesktop ? 3 : 1;
    
    for (let i = 0; i < visibleCards; i++) {
        let clone = cards[i].cloneNode(true);
        track.appendChild(clone);
    }

    let currentIndex = 0;
    const cardWidthPercentage = isDesktop ? 33.333 : 100;

    function slideTeam() {
        currentIndex++;
        track.style.transition = "transform 0.5s ease-in-out";
        track.style.transform = `translateX(-${currentIndex * cardWidthPercentage}%)`;

        if (currentIndex === cards.length) {
            setTimeout(() => {
                track.style.transition = "none";
                currentIndex = 0;
                track.style.transform = `translateX(0%)`;
            }, 500); 
        }
    }

    setInterval(slideTeam, 3500);
}