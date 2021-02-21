import getOrder from './data.js';
import generateCard from './util.js';
import generateHTMLCard from './card.js';

const cards = generateCard(getOrder());
const wrapperCards = document.querySelector('.map__canvas');

for (const card of cards) {
  wrapperCards.insertAdjacentHTML('beforeend', generateHTMLCard(card));
  break;
}
