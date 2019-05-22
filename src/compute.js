//  check value is not number return true
//  if value is number return false

const expect = 'expect: number, but received: ';

function isNotNumber(n) {
  return (typeof n !== 'number');
}

function compute(a, b) {
  if (isNotNumber(a) && isNotNumber(b)) {
    return `${expect}${a} (${typeof a}) and "${b}" (${typeof b})`;
  }

  if (isNotNumber(a)) {
    return `${expect}"${a}" (string)`;
  }

  if (isNotNumber(b)) {
    return `${expect}"${b}" (string)`;
  }

  return a + b;
}

exports.compute = compute;
