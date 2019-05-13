const { compute } = require('../src/compute');

describe('Test the error handling for compute() - addition', () => {
  test('compute(`a`, 0) should return `expect: number, but received: a (string)', () => {
    expect(compute('a', 0)).toEqual(
      'expect: number, but received: "a" (string)',
    );
  });

  test('compute(1, `xinyinxmm`) should return `expect: number, but received: xinyinxmm (string)', () => {
    expect(compute(1, 'xinyinxmm')).toEqual(
      'expect: number, but received: "xinyinxmm" (string)',
    );
  });

  test('compute(true, `albert`) should return `expect: number, but received: true (string)', () => {
    expect(compute(true, 'albert')).toEqual(
      'expect: number, but received: true (boolean) and "albert" (string)',
    );
  });
});
