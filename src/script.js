
function calculate(numbers) {
    if (numbers === "") {
      return 0;
    }
    
    const numArray = numbers.replace(/\n/gs, ',').split(','); 
    const sum = numArray.reduce((total, num) => total + parseInt(num), 0); 
    console.log(sum);
    return sum;

  }
  
calculate("4\n2,3");

module.exports = calculate;
  