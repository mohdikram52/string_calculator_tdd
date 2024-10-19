
function calculate(numbers) {
    if (numbers === "") {
      return 0;
    }
    
    return parseInt(numbers);
    
  }
  
calculate("2,3,2");

module.exports = calculate;
  