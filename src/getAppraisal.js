const GRADE = {
  A: 'A',
  B: 'B',
  C: 'C',
  D: 'D',
  E: 'E',
};

const isValueInRange = (min, x, max) => x >= min && x <= max;

const getAppraisal = (value) => {
  if (value === 'nana') {
    return GRADE.A;
  }
  if (value < 0) {
    return 'why do you give a minus mark?';
  }
  if (typeof value === 'boolean') {
    return 'expect a number > 0';
  }
  if (isValueInRange(90, value, 100)) {
    return GRADE.A;
  }
  if (isValueInRange(75, value, 89)) {
    return GRADE.B;
  }
  if (isValueInRange(60, value, 74)) {
    return GRADE.C;
  }
  if (isValueInRange(40, value, 59)) {
    return GRADE.D;
  }
  if (isValueInRange(0, value, 39)) {
    return GRADE.E;
  }

  return 0;
};

exports.getAppraisal = getAppraisal;
exports.GRADE = GRADE;
