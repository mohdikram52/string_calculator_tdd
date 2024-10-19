const calculate = require('../src/script'); 

test('For an empty string, it returns 0', () => {
  expect(calculate("")).toBe(0);
});

test('For a single number, it returns the number', () => {
    expect(calculate("1")).toBe(1);
  });
    
  
