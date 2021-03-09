export default function validation() {
  // for price per night
  const maxPrice = 1000000;
  const priceInput = document.getElementById('price');
  priceInput.addEventListener('input', () => {
    if (priceInput.value.length < 1) {
      priceInput.setCustomValidity('Введите цену');
    } else if (priceInput.value > maxPrice) {
      priceInput.setCustomValidity('Слишком дорого');
    } else {
      priceInput.setCustomValidity('');
    }
    priceInput.reportValidity();
  });

  // for rooms and guests
  const roomNumber = document.getElementById('room_number');
  const capacity = document.getElementById('capacity');

  roomNumber.addEventListener('change', function () {
    if (this.value === '100') {
      capacity.value = '0';
    } else if (this.value < capacity.value) {
      capacity.value = this.value
    }
  });

  capacity.addEventListener('change', function () {
    if (this.value === '0') {
      roomNumber.value = '100';
    } else if (this.value > roomNumber.value) {
      roomNumber.value = this.value
    }
  });
};
