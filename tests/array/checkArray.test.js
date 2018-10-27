const { checkArray } = require('../../src/array/checkArray');

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
