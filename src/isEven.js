/* eslint-disable no-confusing-arrow */
const getTypeName = value => (value == null)
  ? ''
  : ` (${typeof value})`;

const isEven = n => (typeof n === 'number')
  ? n % 2 === 0
  : `expect number but received ${n}${getTypeName(n)}`;

exports.isEven = isEven;
