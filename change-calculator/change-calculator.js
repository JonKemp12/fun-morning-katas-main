// Please do not change the name of this function
function changeCalculator (num) {
  let change = num;
  const changeObject = {};

  while(change > 0){

    if(change / 20 >= 1){
      change -= 20;
      if(changeObject.hasOwnProperty('20p')){
        changeObject['20p']++;
      } else
      changeObject['20p'] = 1;
    }

    if(change / 10 >= 1){
      change -= 10;
      if(changeObject.hasOwnProperty('10p')){
        changeObject['10p']++;
      } else
      changeObject['10p'] = 1;
    }
    
    if(change / 5 >= 1){
      change -= 5;
      if(changeObject.hasOwnProperty('5p')){
        changeObject['5p']++;
      } else
      changeObject['5p'] = 1;
    }
    
    if(change / 2 >= 1){
      change -= 2;
      if(changeObject.hasOwnProperty('2p')){
        changeObject['2p']++;
      } else
      changeObject['2p'] = 1;
    };
  
    if(change / 1 >= 1){
    change -= 1;
    if(changeObject.hasOwnProperty('1p')){
      changeObject['1p']++;
    } else
    changeObject['1p'] = 1;
  };


  };
  console.log(changeObject)
  return changeObject;
};

module.exports = changeCalculator;
