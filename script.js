document.addEventListener('DOMContentLoaded', function() {
    const calendarEl = document.getElementById('calendar');
    const calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        events: [
            { title: 'Doação de Sangue - Local A', start: '2024-08-10' },
            { title: 'Doação de Sangue - Local B', start: '2024-08-20' },
            { title: 'Doação de Sangue - Local C', start: '2024-09-05' }
        ]
    });
    calendar.render();
});

// Galeria de locais
const galleryItems = document.querySelectorAll('.gallery-item');
const infoPopup = document.getElementById('info-popup');

galleryItems.forEach(item => {
    item.addEventListener('mouseover', (event) => {
        const info = event.currentTarget.getAttribute('data-info');
        infoPopup.textContent = info;
        infoPopup.style.display = 'block';
        infoPopup.style.top = `${event.clientY + 10}px`;
        infoPopup.style.left = `${event.clientX + 10}px`;
    });

    item.addEventListener('mousemove', (event) => {
        infoPopup.style.top = `${event.clientY + 10}px`;
        infoPopup.style.left = `${event.clientX + 10}px`;
    });

    item.addEventListener('mouseout', () => {
        infoPopup.style.display = 'none';
    });
});
