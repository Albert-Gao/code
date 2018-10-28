/* eslint-disable implicit-arrow-linebreak */
const checkArray = (list, flag) => {
  let greater = 0;
  let less = 0;
  let equal = 0;

  list.forEach((item) => {
    if (item < flag) {
      less += 1;
    }
    if (item > flag) {
      greater += 1;
    }
    if (item === flag) {
      equal += 1;
    }
  });

  return { greater, less, equal };
};

const copyArray = array => [...array];

exports.checkArray = checkArray;
exports.copyArray = copyArray;
