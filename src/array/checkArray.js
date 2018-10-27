/* eslint-disable implicit-arrow-linebreak */
const checkArray = (list, flag) => {
  let greater = 0;
  let less = 0;
  let equal = 0;

  list.forEach((item) => {
    if (item < flag) {
      less += 1;
    } else if (item > flag) {
      greater += 1;
    } else {
      equal += 1;
    }
  });

  return { greater, less, equal };
};

const isAlbertHere = array =>
  array.some(item => item === 'albert');

const findAllBoys = (array) => {
  const boyArray = [];
  array.forEach((value) => {
    if (value.gender === 'M'){
      boyArray.push(value.name);
    }
  });
  return boyArray;
};

const copyArray = array => [...array];

const countBoysAndGirls = (array) => {
  let boys = 0;
  let girls = 0;
  array.forEach((value) => {
    if (value.gender === 'M') {
      boys += 1;
    }
    else if (value.gender === 'F') {
      girls += 1;
    }
  });
  return { boys, girls };
}

exports.checkArray = checkArray;
exports.isAlbertHere = isAlbertHere;
exports.findAllBoys = findAllBoys;
exports.copyArray = copyArray;
exports.countBoysAndGirls = countBoysAndGirls;