export {result, generateRandomNumber, getRandomArray} from './util.js';

const result = new Array(counter);
  for (let index = 0; index < result.length; index++) {
    const checkInIndex = generateRandomNumber(checkInOutSet.length);
    const checkOutIndex = generateRandomNumber(checkInOutSet.length);

    result[index] = {
      autor: {
        avatar: `img/avatars/user0${generateRandomNumber(userAvatar)}.png`,
      },
      offer: {
        title: title,
        address: {
          x: generateRandomNumber(location.xMax, location.xMin, 5),
          y: generateRandomNumber(location.yMax, location.yMin, 5),
        },
        price: generateRandomNumber(100, 15),
        type: type[generateRandomNumber(type.length) ? generateRandomNumber(type.length) - 1 : generateRandomNumber(type.length)],
        rooms: generateRandomNumber(4, 1),
        guests: generateRandomNumber(8, 1),
        checkin: checkInOutSet[checkInIndex === checkInOutSet.length ? checkInIndex - 1 : checkInIndex],
        checkout: checkInOutSet[checkOutIndex === checkInOutSet.length ? checkOutIndex - 1 : checkOutIndex],
        features: getRandomArray([...featuresSet]),
        description: description,
        photos: getRandomArray([...photos]),
      },
    };
  }

  return result
}

function generateRandomNumber(max, min = 0, floatingPoint = 0) {
  var highlightedNumber = Math.random() * (max - min) + min;

  return highlightedNumber.toFixed(floatingPoint)
}

function getRandomArray(arr, endFind = null) {
  const toRemove = generateRandomNumber(arr.length);
  let recursionCollision;
  if (endFind === null) {
    recursionCollision = toRemove;
  } else if (endFind > 0) {
    recursionCollision = endFind - 1;
  }
  let result = [...arr];
  result.splice(toRemove, 1);
  if (recursionCollision) {
    result = getRandomArray([...result], recursionCollision);
  }
  return result
}

const result = getOrder();

console.log(
  result,
  result.map(value => value.offer.features),
  result.map(value => value.offer.photos),
  result.map(value => value.offer.address),
);
