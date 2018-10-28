const { findAllBoys } = require('../../src/array/findAllBoys');

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
