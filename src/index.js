//  check value is not number return true
//  if value is number return false
const isNotNumber = value => typeof value !== 'number';

const compute = (x, y) => {
  const bothNotNumber = isNotNumber(x) && isNotNumber(y);

  if (bothNotNumber) {
    return `expect: number, but received: ${x} (${typeof x}) and "${y}" (${typeof y})`;
  }
  if (isNotNumber(x)) {
    return `expect: number, but received: "${x}" (${typeof x})`;
  }
  if (isNotNumber(y)) {
    return `expect: number, but received: "${y}" (${typeof y})`;
  }

  return x + y;
};

exports.compute = compute;
