/* eslint-disable no-trailing-spaces */
const { getAppraisal } = require('../src/getAppraisal');

const GRADE = {
  A: 'A',
  B: 'B',
  C: 'C',
  D: 'D',
  E: 'E',
};

// 90-100 A
// 75-89  B
// 60-74  C
// 40-59  D
// 0-39   E

describe('for grade A', () => {
  test('100 should return A', () => {
    expect(getAppraisal(100)).toBe(GRADE.A);
  });

  test('90 should return A', () => {
    expect(getAppraisal(90)).toBe(GRADE.A);
  });

  test('92 should return A', () => {
    expect(getAppraisal(92)).toBe(GRADE.A);
  });
});

describe('for grade B', () => {
  test('75 should return B', () => {
    expect(getAppraisal(75)).toBe(GRADE.B);
  });

  test('89 should return B', () => {
    expect(getAppraisal(89)).toBe(GRADE.B);
  });

  test('80 should return B', () => {
    expect(getAppraisal(80)).toBe(GRADE.B);
  });
});

describe('for grade C', () => {
  test('60 should return C', () => {
    expect(getAppraisal(60)).toBe(GRADE.C);
  });

  test('74 should return C', () => {
    expect(getAppraisal(74)).toBe(GRADE.C);
  });

  test('61 should return C', () => {
    expect(getAppraisal(61)).toBe(GRADE.C);
  });
});

describe('for grade D', () => {
  test('40 should return D', () => {
    expect(getAppraisal(40)).toBe(GRADE.D);
  });

  test('59 should return D', () => {
    expect(getAppraisal(59)).toBe(GRADE.D);
  });

  test('45 should return D', () => {
    expect(getAppraisal(45)).toBe(GRADE.D);
  });
});

describe('for grade E', () => {
  test('0 should return E', () => {
    expect(getAppraisal(0)).toBe(GRADE.E);
  });

  test('39 should return E', () => {
    expect(getAppraisal(39)).toBe(GRADE.E);
  });

  test('20 should return E', () => {
    expect(getAppraisal(20)).toBe(GRADE.E);
  });
});

describe('error cases', () => {
  test('-2 should return error', () => {
    expect(getAppraisal(-2)).toBe('why do you give a minus mark?');
  });

  test('true should return error', () => {
    expect(getAppraisal(true)).toBe('expect a number > 0');
  });

  test('nana should return A', () => {
    expect(getAppraisal('nana')).toBe(GRADE.A);
  });

  test('default should return 0', () => {
    expect(getAppraisal()).toBe(0);
  });
});
