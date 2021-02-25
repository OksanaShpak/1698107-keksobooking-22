export default function generateHTMLCard({
  autor,
  offer,
}) {
  const types = {
    flat: 'Квартира',
    bungalow: 'Бунгало',
    house: 'Дом',
    palace: 'Дворец',
  }

  return `
    <article class="popup">
      <img src="${autor.avatar}" class="popup__avatar" width="70" height="70" alt="Аватар пользователя">
      <h3 class="popup__title">${offer.title}</h3>
      <p class="popup__text popup__text--address">${offer.address.x}; ${offer.address.y}</p>
      <p class="popup__text popup__text--price">${offer.price}<span>₽/ночь</span></p>
      <h4 class="popup__type">${types[offer.type]}</h4>
      <p class="popup__text popup__text--capacity">${offer.rooms} комнаты для ${offer.guests} гостей</p>
      <p class="popup__text popup__text--time">Заезд после ${offer.checkin}, выезд до ${offer.checkout}</p>
      <ul class="popup__features">
        ${offer.features.map(function (feature) {return `<li class="popup__feature popup__feature--${feature}"></li>`}).join('')}
      </ul>
      <p class="popup__description">${offer.description}</p>
      <div class="popup__photos">
        ${offer.photos.map(function (photoSrc) {return `<img src="${photoSrc}" class="popup__photo" width="45" height="40" alt="Фотография жилья">`}).join('')}
      </div>
     </article>
  `
}
