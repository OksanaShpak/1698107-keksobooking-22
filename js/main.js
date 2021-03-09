import getOrder from './data.js';
import generateCard from './util.js';
import generateHTMLCard from './card.js';
import form from './form.js';
import disableForm from './disableForm.js';
import leafletMap from './leafletMap.js';
import validation from './validation';

const cards = generateCard(getOrder());
const wrapperCards = document.querySelector('.map__canvas');

const formControls = disableForm();
formControls.disable();
leafletMap(
  formControls.enable,
  cards,
  generateHTMLCard,
);

form(getOrder());
validation();

// for (const card of cards) {
//   wrapperCards.insertAdjacentHTML('beforeend', generateHTMLCard(card));
//   break;
// }
// for (const card of cards) {
// }
// wrapperCards.appendChild(generateHTMLCard(cards[0]));
