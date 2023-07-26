// Please do not change the name of this function
function dnaPairs(dna) {
  
  let dnaPairs = [];
  for(let letter of dna) {
  if(letter === 'G') {
    dnaPairs.push(['G', 'C']); 
  }
  else if(letter === 'A') {
    dnaPairs.push(['A', 'T']);
  }
  else if(letter === 'T') {
    dnaPairs.push(['T', 'A']);
  }
  else if(letter === 'C') {
    dnaPairs.push(['C', 'G']);
  }
}
  return dnaPairs;
}

module.exports = dnaPairs;
