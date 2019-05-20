//  check value is not number return true
//  if value is number return false

const expect = 'expect: number, but received: ';

function isnumber(n) {
  if (typeof n !== 'number') {
    return true;
  }
  return false;
}

function compute(a, b) {
  if (isnumber(a) && isnumber(b)) {
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
