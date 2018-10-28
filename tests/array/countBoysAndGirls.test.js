const { countBoysAndGirls } = require('../../src/array/countBoysAndGirls');

test('count boys and girls should return 2 2 ', () => {
  const array = [
    { name: 'tom', gender: 'M' },
    { name: 'lily', gender: 'F' },
    { name: 'jim', gender: 'M' },
    { name: 'lucy', gender: 'F' },
  ];
  expect(countBoysAndGirls(array)).toEqual({ boys: 2, girls: 2 });
});
