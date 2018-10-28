const { checkArray, copyArray } = require('../../src/array/checkArray');

test('should return correct value', () => {
  expect(
    checkArray(
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      6,
    ),
  ).toEqual({
    greater: 4,
    less: 5,
    equal: 1,
  });
});

describe('test copyArray', () => {
  test('should return a new array', () => {
    const toTest = [1, 'a', { name: 'albert' }, true];
    const result = copyArray(toTest);

    expect(result).toEqual(toTest);
    expect(result).not.toBe(toTest);
  });
});


