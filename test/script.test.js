const calculate = require('../src/script'); 

test('For an empty string, it returns 0', () => {
  expect(calculate("")).toBe(0);
});

test('For a single number, it returns the number', () => {
    expect(calculate("1")).toBe(1);
  });
    
test('For sum of two comma-separated numbers', () => {
    expect(calculate("1,3")).toBe(4);
  });

test('For sum of multiple numbers', () => {
    expect(calculate("1,2,3,4,5")).toBe(15);
  });

test('For newlines between numbers', () => {
    expect(calculate("1\n2,3")).toBe(6);
  });

test('For different delimiters at the start of the string', () => {
    expect(calculate("//;\n1;2")).toBe(3);
  });

test('For throw an exception when a negative number is passed', () => {
    expect(() => calculate("-2")).toThrow('Negative numbers not allowed: -2');
  });
  
test('For throw an exception for multiple negative numbers', () => {
    expect(() => calculate("1,-2,-3")).toThrow('Negative numbers not allowed: -2,-3');
  });