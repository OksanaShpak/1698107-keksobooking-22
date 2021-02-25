export default function generateCard({
  userAvatar,
  title,
  type,
  checkInOutSet,
  featuresSet,
  description,
  photos,
  location,
}, counter = 10) {

  const result = new Array(counter);

  for (let index = 0; index < result.length; index++) {
    const address = {
      x: generateRandomNumber(location.xMax, location.xMin, 5),
      y: generateRandomNumber(location.yMax, location.yMin, 5),
    };
    result[index] = {
      autor: {
        avatar: `img/avatars/user0${generateRandomNumber(userAvatar, 1)}.png`,
      },
      offer: {
        title: title,
        address: address,
        price: generateRandomNumber(100, 15),
        type: type[generateRandomNumber(type.length - 1)],
        rooms: generateRandomNumber(4, 1),
        guests: generateRandomNumber(8, 1),
        checkin: checkInOutSet[generateRandomNumber(checkInOutSet.length - 1)],
        checkout: checkInOutSet[generateRandomNumber(checkInOutSet.length - 1)],
        features: getRandomArray([...featuresSet]),
        description: description,
        photos: getRandomArray([...photos]),
      },
      location: address,
    };
  }

  // console.log(
  //   result,
  //   result.map(value => value.offer.features),
  //   result.map(value => value.offer.photos),
  //   result.map(value => value.offer.address),
  // );

  return result

}

function generateRandomNumber(max, min = 0, floatingPoint = 0) {
  const highlightedNumber = Math.random() * (max - min) + min;

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
