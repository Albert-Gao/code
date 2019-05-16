//  check value is not number return true
//  if value is number return false

const expect = 'expect: number, but received: ';

function compute(a, b) {
  if (typeof a !== 'number' && typeof b !== 'number') {
    return `${expect}${a} (${typeof a}) and "${b}" (${typeof b})`;
  }

  if (typeof a !== 'number') {
    return `${expect}"${a}" (string)`;
  }

  if (typeof b !== 'number') {
    return `${expect}"${b}" (string)`;
  }

  return a + b;
}

exports.compute = compute;
