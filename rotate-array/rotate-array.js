// Please do not change the name of this function
function rotateArray (arr, num) {
  
  if(num >= 0) {
    for(let i = 0; i < num; i++){
      const endOfArray = arr.pop();
      arr.unshift(endOfArray); 
    }
    return arr;
  } 
  if(num < 0){
    for(let i = 0; i > num; i--){
      const beginningOfArray = arr.shift();
      arr.push(beginningOfArray);
    }
    return arr;
  }
};

module.exports =  rotateArray;
