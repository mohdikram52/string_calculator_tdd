
function calculate(numbers) {
    if (numbers === "") {
      return 0;
    }
    
    const numArray = numbers.split(','); 
    const sum = numArray.reduce((total, num) => total + parseInt(num), 0); 
    console.log(sum);
    return sum;

  }
  
calculate("2,3,2");

module.exports = calculate;
  