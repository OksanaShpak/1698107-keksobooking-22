// Функция 1.
// Функция, возвращающая случайное целое число из переданного диапазона включительно.Пример использования функции:
//   имя_функции(от, до); // Результат: целое число из диапазона "от...до"
// Учтите, что диапазон может быть только положительный, включая ноль.А также придумайте, как функция должна вести себя, если передать значение« до» меньшее, чем значение« от», или равное ему.


// function getUserData() {
//   let min = +prompt('Введите минимальное число из диапазона', '');
//   if (isNaN(min)) {
//     +prompt('Попробуй ввести минимальное число из диапазона еще раз', '');
//   }
//   let max = +prompt('Введите максимальное число из диапазона', '');
//   if (isNaN(max)) {
//     +prompt('Попробуй ввести максимальное число из диапазона еще раз', '')
//   }
//   if (checkData(min, max)) {
//     return getRandomInt(min, max)
//   } else {
//     getUserData();
//   }
// }

// function checkData(min, max) {
//   if (Math.sign(min) < 0 && Math.sign(max) < 0) {
//     alert('Числа для диапазона не должны быть отрицательными! ', '');
//     return false;
//   } else
//   if (max === min) {
//     alert('Максимальное число не может быть равно минимальному! ', '');
//     return false;
//   } else if (max < min) {
//     alert('Максимальное число не может быть меньше минимального! ', '');
//     return false;
//   }
//   return true;
// }

// function getRandomInt(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// alert(getUserData());


// Функция 2.
// Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно.
// Будет использоваться для генерации временных географических координат в следующем задании.Пример использования функции:

//   имя_функции(от, до, количество_знаков_после_запятой); // Результат: число с плавающей точкой из диапазона "от...до" с указанным "количеством знаков после запятой"
// Учтите, что диапазон может быть только положительный, включая ноль.А также придумайте, как функция должна вести себя,
// если передать значение« до» меньшее, чем значение« от», или равное ему.Не забудьте, что в случае с дробными числами диапазон может быть в десятых, сотых, тысячных и т.д.долях.Например, 1.1, 1.2— корректный диапазон.


function getUserData() {
  let min = +prompt('Введите минимальное число из диапазона', '');
  if (isNaN(min)) {
    +prompt('Попробуй ввести минимальное число из диапазона еще раз', '');
  }
  let max = +prompt('Введите максимальное число из диапазона', '');
  if (isNaN(max)) {
    +prompt('Попробуй ввести максимальное число из диапазона еще раз', '')
  }
  if (checkData(min, max)) {
    return getRandomInt(min, max)
  } else {
    getUserData();
  }
}

function checkData(min, max) {
  if (Math.sign(min) < 0 && Math.sign(max) < 0) {
    alert('Числа для диапазона не должны быть отрицательными! ', '');
    return false;
  } else
  if (max === min) {
    alert('Максимальное число не может быть равно минимальному! ', '');
    return false;
  } else if (max < min) {
    alert('Максимальное число не может быть меньше минимального! ', '');
    return false;
  }
  return true;
}

function getRandomInt(min, max) {
  return min + Math.random() * (max - min);
}

alert(getUserData());
