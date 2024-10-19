
function calculate(numbers) {
    if (numbers === "") {
      return 0;
    }
    
    let delimiter = ',';
    
    if (numbers.startsWith('//')) {
        const parts = numbers.split('\n');
        delimiter = parts[0].substring(2); 
        numbers = parts.slice(1).join('\n'); 
    }

    const numArray = numbers.split(new RegExp(`[${delimiter}\n]`));
    

    
    const sum = numArray.reduce((total, num) => total + parseInt(num), 0);
    console.log(sum)
    return sum;
    

  }
  
calculate("1\n2,3");

module.exports = calculate;
  