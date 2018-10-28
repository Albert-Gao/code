const findAllBoys = (array) => {
  const boyArray = [];

  array.forEach((value) => {
    if (value.gender === 'M') {
      boyArray.push(value.name);
    }
  });
  return boyArray;
};

exports.findAllBoys = findAllBoys;
