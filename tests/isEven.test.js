const {isEven} = require('../src/isEven');

test('2 should return true', () => {
  expect(isEven(2)).toBe(true);
});

test('1024 should return true', () => {
  expect(isEven(1024)).toBe(true);
});

test('3 should return false', () => {
  expect(isEven(3)).toBe(false);
});

test('8891 should return false', () => {
  expect(isEven(8891)).toBe(false);
});

test('should return error', () => {
  expect(isEven()).toBe('expect number but received undefined');
});

test('should return error', () => {
  expect(isEven(true)).toBe('expect number but received true (boolean)');
});

test('should return error', () => {
  expect(isEven('hello')).toBe('expect number but received hello (string)');
});