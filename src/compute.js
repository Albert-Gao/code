//  check value is not number return true
//  if value is number return false

function compute(a, b) {
  if (typeof b !== 'number' && typeof a !== 'number') {
    const s1 = 'expect: number, but received: ';
    const and = ' and ';
    const s2 = '"';
    const s3 = ' (';
    const s4 = ')';
    return s1 + a + s3 + typeof a + s4 + and + s2 + b + s2 + s3 + typeof b + s4;
  }
  if (typeof a !== 'number') {
    const s1 = 'expect: number, but received: ';
    const s2 = ' (string)';
    const s3 = '"';
    return s1 + s3 + a + s3 + s2;
  }
  if (typeof b !== 'number') {
    const s1 = 'expect: number, but received: ';
    const s2 = ' (string)';
    const s3 = '"';
    return s1 + s3 + b + s3 + s2;
  }
  return a + b;
}

exports.compute = compute;
