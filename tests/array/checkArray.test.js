const { checkArray, isAlbertHere, findAllBoys } = require('../../src/array/checkArray');

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

describe('test find albert', () => {
  test('should return true', () => {
    const array = [1, 2, 3, 4, 'albert', 6, 7, 8, 9, 10];
    expect(isAlbertHere(array)).toEqual(true);
  });

  test('should return false', () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    expect(isAlbertHere(array)).toEqual(false);
  });
});

describe('test find all boys', () => {
  test('should return array with boy names', () => {
    const array = [
      { name: 'tom', gender: 'M' },
      { name: 'lily', gender: 'F' },
      { name: 'jim', gender: 'M' },
      { name: 'lucy', gender: 'F' },
    ];
    expect(findAllBoys(array)).toEqual(['tom', 'jim']);
  });

  test('should return empty array', () => {
    const array = [
      { name: 'lily', gender: 'F' },
      { name: 'lucy', gender: 'F' },
    ];
    expect(findAllBoys(array)).toEqual([]);
  });
});
