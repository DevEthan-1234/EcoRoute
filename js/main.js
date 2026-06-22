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