// Please do not change the name of this function
function calculateDivisors(num) {
  // Your code here

  numberArray = [];

  for(let i = 0; i < num; i += 3) {
    numberArray.push(i);
  }
  for(let j = 0; j < num; j += 5) {
    numberArray.push(j);
  }

  return numberArray.reduce((a, b) => a + b);
  
}

module.exports = calculateDivisors;
