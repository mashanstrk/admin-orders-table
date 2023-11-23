const allButton = document.getElementById('all');
const processingButton = document.getElementById('processing');
const readyButton = document.getElementById('ready');
const intransitButton = document.getElementById('intransit');
const deliveredButton = document.getElementById('delivered');
const cancelledButton = document.getElementById('cancelled');

const cards = document.querySelectorAll('tr');

allButton.addEventListener('click', () => filterCards('all'));
processingButton.addEventListener('click', () => filterCards('processing'));
readyButton.addEventListener('click', () => filterCards('ready'));
intransitButton.addEventListener('click', () => filterCards('intransit'));
deliveredButton.addEventListener('click', () => filterCards('delivered'));
cancelledButton.addEventListener('click', () => filterCards('cancelled'));


function filterCards(category) {
    cards.forEach((card) => {
        const cardCategory = card.getAttribute('data-category');
        if (category === 'all' || cardCategory === category) {
          card.style.display = 'table-row'; // Показати картку
        } else {
          card.style.display = 'none'; // Приховати картку
        }
      });
}

