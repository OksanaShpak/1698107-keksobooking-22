export default function form() {

  const types = {
    flat: 1000,
    bungalow: 0,
    house: 5000,
    palace: 10000,
  }

  const element = document.getElementById('type');
  const input = document.getElementById('price');
  element.addEventListener('change', function () {
    input.setAttribute('min', types[this.value]);
    input.setAttribute('placeholder', types[this.value]);
  });

  const timeIn = document.getElementById('timein');
  const timeOut = document.getElementById('timeout');

  timeIn.addEventListener('change', function () {
    timeOut.selectedIndex = this.selectedIndex;
  });

  timeOut.addEventListener('change', function () {
    timeIn.selectedIndex = this.selectedIndex;
  });
}
