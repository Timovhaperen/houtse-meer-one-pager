// Smooth scroll (optioneel, maar fijn voor een one-pager)
document.querySelectorAll('nav a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 90,
                behavior: 'smooth'
            });
        }
    });
});

// Accordion functionaliteit
const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
        header.classList.toggle('active');
        const body = header.nextElementSibling;

        if (body.style.maxHeight) {
            body.style.maxHeight = null;
        } else {
            body.style.maxHeight = body.scrollHeight + "px";
        }
    });
});

// Simpele lokale opslag voor jouw notitie bij "Waar loop ik tegenaan?"
const noteForm = document.getElementById('note-form');
const noteTextarea = document.getElementById('note');
const noteStatus = document.getElementById('note-status');
const NOTE_KEY = 'houtsemeer_note';

function loadNote() {
    const saved = localStorage.getItem(NOTE_KEY);
    if (saved) {
        noteTextarea.value = saved;
        noteStatus.textContent = "Eerder opgeslagen notitie geladen.";
    }
}

if (noteForm) {
    loadNote();

    noteForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const value = noteTextarea.value.trim();
        localStorage.setItem(NOTE_KEY, value);
        noteStatus.textContent = "Notitie lokaal opgeslagen in je browser.";
        setTimeout(() => {
            noteStatus.textContent = "";
        }, 3000);
    });
}
