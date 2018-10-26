//  check value is not number return true
//  if value is number return false

const isNotNumber = value => typeof value !== 'number';

const compute = (x, y) => {
  const bothNotNumber = isNotNumber(x) && isNotNumber(y);

  if (bothNotNumber) {
    return `expect: number, but received: ${x.toString()} (${typeof (x)}) and "${y.toString()}" (${typeof (y)})`;
  }

  if (isNotNumber(x)) {
    return `expect: number, but received: "${x.toString()}" (${typeof (x)})`;
  }

  if (isNotNumber(y)) {
    return `expect: number, but received: "${y.toString()}" (${typeof (y)})`;
  }

  return x + y;
};

exports.compute = compute;
