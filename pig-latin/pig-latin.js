// Please do not change the name of this function
function pigLatin(str) {
  if(str.length === 0) {return ""};

  const regex = /[^aeiou]{1,}/i
  const beginsWithVowel = /^[aeiou]{1,}/i
  const splitString = str.split(' ');
  const newStringArray = [];

  for(let string of splitString) {

  if(beginsWithVowel.test(string) === true) {
    newStringArray.push(`${string}way`);
  } 
  else if (beginsWithVowel.test(string) === false) {
  const firstConstantGroup = string.match(regex);
  const filteredString = string.replace(regex, "");
  
  newStringArray.push(`${filteredString}${firstConstantGroup}ay`);
}
}
return newStringArray.join(' ');
};

module.exports = pigLatin
