// Please do not change the name of this function
function herdTheBabies (str) {
  const newArray = [];
  const A = str.match(/A/g);
  newArray.push(A);
  const a = str.match(/a/g);
  newArray.push(a);
  const B = str.match(/B/g);
  newArray.push(B);
  const b = str.match(/b/g);
  newArray.push(b);
  const C = str.match(/C/g);
  newArray.push(C);
  const c = str.match(/c/g);
  newArray.push(c);

  const regex = /,/gi;

  return newArray.join('').replace(regex,'');
  

};

module.exports = herdTheBabies;
