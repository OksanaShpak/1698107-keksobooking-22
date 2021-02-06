function getOrder(counter = 10) {
  const userAvatar = 8;
  const title = 'Another journey chamber way yet females man.';
  const type = ['palace', 'flat', 'house', 'bungalow'];
  const checkInOutSet = ['12:00', '13:00', '14:00'];
  const featuresSet = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
  const description = 'Folly words widow one downs few age every seven. If miss part by fact he park just shew. Discovered had get considered projection who favourable. Necessary up knowledge it tolerably. Unwilling departure education is be dashwoods or an. Use off agreeable law unwilling sir deficient curiosity instantly. Easy mind life fact with see has bore ten. Parish any chatty can elinor direct for former. Up as meant widow equal an share least.';
  const photos = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];
  const location = {
    xMin: 35.65000,
    xMax: 35.70000,
    yMin: 139.70000,
    yMax: 139.80000,
  };

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
