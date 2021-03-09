function escape(str) {
  const s = document.createElement('div');
  s.innerText = str;
  return s.innerHTML;
}

export default function generateHTMLCard(card) {
  const types = {
    flat: 'Квартира',
    bungalow: 'Бунгало',
    house: 'Дом',
    palace: 'Дворец',
  }
  const {
    author,
    offer
  } = card;
  console.log(card);

  const tmpl = document.getElementById('card').content.querySelector('.popup').cloneNode(true);
  tmpl.querySelector('img.popup__avatar').setAttribute('src', author.avatar);
  tmpl.querySelector('.popup__title').innerText = offer.title;
  tmpl.querySelector('.popup__text--address').innerText = offer.address;
  tmpl.querySelector('.popup__text--price').innerHTML = `${offer.price} <span>₽/ночь</span>`;
  tmpl.querySelector('.popup__type').innerText = types[offer.type];
  tmpl.querySelector('.popup__text--capacity').innerHTML = `${offer.rooms} комнаты для ${offer.guests} гостей`;
  tmpl.querySelector('.popup__features').innerHTML = offer.features.map(function (feature) {
    return `<li class="popup__feature popup__feature--${feature}"></li>`
  }).join('');
  tmpl.querySelector('.popup__description').innerText = offer.description;
  tmpl.querySelector('.popup__photos').innerHTML = offer.photos.map(function (photoSrc) {
    return `<img src="${photoSrc}" class="popup__photo" width="45" height="40" alt="Фотография жилья">`
  }).join('');




  return tmpl;


  // return `
  //   <article class="popup">
  //     <img src="${autor.avatar}" class="popup__avatar" width="70" height="70" alt="Аватар пользователя">
  //     <h3 class="popup__title">${escape(offer.title)}</h3>
  //     <p class="popup__text popup__text--address">${+offer.address.x}; ${+offer.address.y}</p>
  //     <p class="popup__text popup__text--price">${offer.price}<span>₽/ночь</span></p>
  //     <h4 class="popup__type">${types[offer.type]}</h4>
  //     <p class="popup__text popup__text--capacity">${offer.rooms} комнаты для ${offer.guests} гостей</p>
  //     <p class="popup__text popup__text--time">Заезд после ${offer.checkin}, выезд до ${offer.checkout}</p>
  //     <ul class="popup__features">
  //       ${offer.features.map(function (feature) {return `<li class="popup__feature popup__feature--${feature}"></li>`}).join('')}
  //     </ul>
  //     <p class="popup__description">${offer.description}</p>
  //     <div class="popup__photos">
  //       ${offer.photos.map(function (photoSrc) {return `<img src="${photoSrc}" class="popup__photo" width="45" height="40" alt="Фотография жилья">`}).join('')}
  //     </div>
  //    </article>
  // `
}
