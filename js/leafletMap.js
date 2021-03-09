export default function leafletMap(enableForm, cards, createPopupCard) {
  const map = L.map('map-canvas')
    .on('load', () => {
      enableForm();
    })
    .setView({
      lat: 35.6804,
      lng: 139.7690,
    }, 16);

  L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors | Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>',
    },
  ).addTo(map);

  const mainPinIcon = L.icon({
    iconUrl: './img/main-pin.svg',
    iconSize: [52, 52],
    iconAnchor: [26, 52],
  });

  const mainPinMarker = L.marker({
    lat: 35.6812,
    lng: 139.7671,
  }, {
    draggable: true,
    icon: mainPinIcon,
  }, );

  mainPinMarker.addTo(map);

  const inputCoords = document.getElementById('address');
  let textCoords = '';
  inputCoords.addEventListener('input', function () {
    this.value = textCoords;
  });

  mainPinMarker.on('moveend', (evt) => {
    const coords = evt.target.getLatLng();
    textCoords = coords.lat + '; ' + coords.lng;
    inputCoords.value = textCoords;
  });

  cards.forEach(card => {
    const icon = L.icon({
      iconUrl: './img/pin.svg',
      iconSize: [40, 40],
      iconAnchor: [20, 40],
    });

    const marker = L.marker({
      lat: card.location.lat,
      lng: card.location.lng,
    }, {
      icon,
    }, );
    marker
      .addTo(map)
      .bindPopup(createPopupCard(card));
  });
}
