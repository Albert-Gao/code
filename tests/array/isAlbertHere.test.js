const { isAlbertHere } = require('../../src/array/isAlbertHere');

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
