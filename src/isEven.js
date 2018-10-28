/* eslint-disable no-confusing-arrow,implicit-arrow-linebreak */
const isEven = (x) => {
  if (x == null) {
    return 'expect number but received undefined';
  }
  if (typeof x === 'boolean') {
    return `expect number but received ${x} (${typeof x})`;
  }
  if (typeof x === 'string') {
    return `expect number but received ${x} (${typeof x})`;
  }

  return x % 2 === 0;
};

exports.isEven = isEven;
