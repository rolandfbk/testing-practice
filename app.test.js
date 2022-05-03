const strLenght = require('./task1');
const reverseStr = require('./task2');
const calculator = require('./task3');
const capitalize = require('./task4');

test('String length', () => {
  expect(strLenght('Joelle')).toMatch(/The string is less than 10/);
});

test('Reverse string', () => {
  expect(reverseStr('Joelle')).toMatch(/elleoJ/);
});

describe('Calculation', () => {
  test('Addition', () => {
    expect(calculator.add(6, 3)).toBe(9);
  });

  test('Subtraction', () => {
    expect(calculator.subtract(6, 3)).toBe(3);
  });

  test('Division', () => {
    expect(calculator.divide(6, 3)).toBe(2);
  });

  test('Multiplication', () => {
    expect(calculator.multiply(6, 3)).toBe(18);
  });
});

test('Capitalise first letter', () => {
  expect(capitalize('joelle')).toMatch(/Joelle/);
});
