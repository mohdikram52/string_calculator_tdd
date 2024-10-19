const calculate = require('../src/script'); 

test('For an empty string, it returns 0', () => {
  expect(calculate("")).toBe(0);
});



