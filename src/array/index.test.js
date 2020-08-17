const {
  checkArray,
  isAlbertHere,
  findAllBoys,
  copyArray,
  countBoysAndGirls,
  editItemInArray,
} = require('./index');

test('should return correct value', () => {
  expect(checkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 6)).toEqual({
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

describe('test copyArray', () => {
  test('should return a new array', () => {
    const toTest = [1, 'a', { name: 'albert' }, true];
    const result = copyArray(toTest);

    expect(result).toEqual(toTest);
    expect(result).not.toBe(toTest);
  });
});

test('count boys and girls should return 2 2 ', () => {
  const array = [
    { name: 'tom', gender: 'M' },
    { name: 'lily', gender: 'F' },
    { name: 'jim', gender: 'M' },
    { name: 'lucy', gender: 'F' },
  ];
  expect(countBoysAndGirls(array)).toEqual({ boys: 2, girls: 2 });
});

describe('editItemInArray', () => {
  test('it should be able to update item with new value', () => {
    const array = [
      { id: 1, name: 'albert', gender: 'M' },
      { id: 2, name: 'jim', gender: 'F' },
      { id: 3, name: 'lucy', gender: 'F' },
      { id: 4, name: 'lily', gender: 'F' },
    ];

    expect(editItemInArray(array, 3, { name: 'taylor' })).toEqual([
      { id: 1, name: 'albert', gender: 'M' },
      { id: 2, name: 'jim', gender: 'F' },
      { id: 3, name: 'taylor', gender: 'F' },
      { id: 4, name: 'lily', gender: 'F' },
    ]);
  });

  test('it should be able to update item with new value', () => {
    const array = [
      { id: 1, name: 'albert', gender: 'M' },
      { id: 2, name: 'jim', gender: 'F' },
      { id: 3, name: 'lucy', gender: 'F' },
      { id: 4, name: 'lily', gender: 'F' },
    ];

    expect(
      editItemInArray(array, 3, { id: 5, name: 'wong', gender: 'M' }),
    ).toEqual([
      { id: 1, name: 'albert', gender: 'M' },
      { id: 2, name: 'jim', gender: 'F' },
      { id: 5, name: 'wong', gender: 'M' },
      { id: 4, name: 'lily', gender: 'F' },
    ]);
  });

  test('it should not mutate the original value in terms of updating the new value', () => {
    const array = [
      { id: 1, name: 'albert', gender: 'M' },
      { id: 2, name: 'jim', gender: 'F' },
      { id: 3, name: 'lucy', gender: 'F' },
      { id: 4, name: 'lily', gender: 'F' },
    ];

    const oldItem = array[2];

    const newArray = editItemInArray(array, 3, { name: 'taylor' });
    const newItem = newArray[2];

    expect(Array.isArray(newArray)).toBe(true);
    expect(Object.is(oldItem, newItem)).toEqual(false);
  });
});
