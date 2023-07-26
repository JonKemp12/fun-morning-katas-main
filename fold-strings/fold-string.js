// Please do not change the name of this function
function foldString (str) {
  
  if(str.length % 2 === 0) {
    const startOfReverse = [];
    const endOfReverse = [];
    const beginningOfString = str.substring(0, str.length / 2).split('');
    const endOfString = str.substring(str.length / 2).split('');

    for(let character of beginningOfString) {
      startOfReverse.unshift(character);
    }
    for(let character of endOfString) {
      endOfReverse.unshift(character);
    }
   const newString = startOfReverse.join('') + endOfReverse.join('');
   return newString;
  }
  else if(str.length % 2 !== 0){
    const start = [];
    const end = [];
    const startOfReverse = str.slice(0,str.length /2).split('');
    const middleCharacter = str.substr(str.length /2, 1);
    const endOfReverse = str.slice(str.length /2 + 1).split('');

    for(let character of startOfReverse) {
      start.unshift(character);
    }
    for(let character of endOfReverse) {
      end.unshift(character);
    }
    
    return `${start.join('')}${middleCharacter}${end.join('')}`;
    

  }


};

module.exports = foldString
