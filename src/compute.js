//  check value is not number return true
//  if value is number return false

const expect = 'expect: number, but received: ';

function type(value) {
  return typeof value;
}

function compute(a, b) {
  if (type(a) !== 'number' && type(b) !== 'number') {
    return `${expect}${a} (${typeof a}) and "${b}" (${typeof b})`;
  }

  if (type(a) !== 'number') {
    return `${expect}"${a}" (string)`;
  }

  if (type(b) !== 'number') {
    return `${expect}"${b}" (string)`;
  }

  return a + b;
}

exports.compute = compute;
