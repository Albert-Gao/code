const { add } = require('./index');

describe('Test the add() with addition', () => {
  test('compute(0, 0) should return 0 ', () => {
    expect(add(0, 0)).toEqual(0);
  });

  test('compute(0, 1) should return 1 ', () => {
    expect(add(0, 1)).toEqual(1);
  });

  test('compute(-5, 9) should return 4 ', () => {
    expect(add(-5, 9)).toEqual(4);
  });

  test('compute(419, 1026) should return 1445 ', () => {
    expect(add(419, 1026)).toEqual(1445);
  });
});

describe('Test the error handling for add() - addition', () => {
  test('compute(`a`, 0) should return `expect: number, but received: a (string)', () => {
    expect(add('a', 0)).toEqual('expect: number, but received: "a" (string)');
  });

  test('compute(1, `xinyinxmm`) should return `expect: number, but received: xinyinxmm (string)', () => {
    expect(add(1, 'xinyinxmm')).toEqual(
      'expect: number, but received: "xinyinxmm" (string)'
    );
  });

  test('compute(true, `albert`) should return `expect: number, but received: true (string)', () => {
    expect(add(true, 'albert')).toEqual(
      'expect: number, but received: true (boolean) and "albert" (string)'
    );
  });
});
