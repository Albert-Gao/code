const { compute } = require('../src/compute');

describe('Test the compute method with addition', () => {
  test('compute(0, 0) should return 0 ', () => {
    expect(compute(0, 0)).toEqual(0);
  });

  test('compute(0, 1) should return 1 ', () => {
    expect(compute(0, 1)).toEqual(1);
  });

  test('compute(-5, 9) should return 4 ', () => {
    expect(compute(-5, 9)).toEqual(4);
  });

  test('compute(419, 1026) should return 1445 ', () => {
    expect(compute(419, 1026)).toEqual(1445);
  });
});
