// Please do not change the name of this function
function sentenceToCamelCase (sentence, boolean) {
  if(sentence.length === 0) {return sentence};

  const splitSentence = sentence.split(' ');
  const toLowerCase = splitSentence.map(string => string.toLowerCase());
  const newArray = [];
  if(boolean === true) {
    for(let string of toLowerCase) {
      const firstCharacter = string.substring(0, 1);
      const restOfString = string.substring(1);
      newArray.push(firstCharacter.toUpperCase() + restOfString);
      
    }
    return newArray.join('');
    
  }
  if (boolean === false) {
    for(let string of toLowerCase) {
      if(toLowerCase.indexOf(string) === 0) {
        newArray.push(string);
      } else if(toLowerCase.indexOf(string) !== 0){
      const firstCharacter = string.substring(0, 1);
      const restOfString = string.substring(1);
      newArray.push(firstCharacter.toUpperCase() + restOfString);
    }}
    }
  
    return newArray.join('');

  };
    
    
  

module.exports = sentenceToCamelCase;
