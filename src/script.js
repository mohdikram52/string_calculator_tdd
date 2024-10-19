
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
    
    
    const negativeNum = numArray.filter(num => parseInt(num) < 0);

    
    if (negativeNum.length > 0) {
        throw new Error(`Negative numbers not allowed: ${negativeNum.join(',')}`);
    }
    

    const sum = numArray.reduce((total, num) => total + parseInt(num), 0);
    console.log(sum)
    return sum;
    

  }
  


module.exports = calculate;
  