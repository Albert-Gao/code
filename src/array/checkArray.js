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

exports.checkArray = checkArray;
