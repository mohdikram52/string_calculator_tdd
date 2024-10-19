const calculate = require('../src/script'); 

test('For an empty string, it returns 0', () => {
  expect(calculate("")).toBe(0);
});

test('For a single number, it returns the number', () => {
    expect(calculate("1")).toBe(1);
  });
    
test('It returns sum of two comma-separated numbers', () => {
    expect(calculate("1,3")).toBe(4);
  });

test('It returns sum of multiple numbers', () => {
    expect(calculate("1,2,3,4,5")).toBe(15);
  });

test('It handle newlines between numbers', () => {
    expect(calculate("1\n2,3")).toBe(6);
  });