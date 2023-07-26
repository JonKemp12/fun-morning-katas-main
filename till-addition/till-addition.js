// Please do not change the name of this function
function tillAddition (cash) {
  if(Object.entries(cash).length === 0) return `£0.00`;
  
  let total = 0;
  if(cash.hasOwnProperty('1p') === true){
  total += cash['1p'] * 0.01};

  if(cash.hasOwnProperty('2p') === true){
  total += cash['2p'] * 0.02};

  if(cash.hasOwnProperty('5p') === true){
  total += cash['5p'] * 0.05};

  if(cash.hasOwnProperty('10p') === true){
  total += cash['10p'] * 0.10};

  if(cash.hasOwnProperty('20p') === true){
  total += cash['20p'] * 0.20};

  if(cash.hasOwnProperty('50p') === true){
  total += cash['50p'] * 0.50};

  if(cash.hasOwnProperty('£1') === true){
  total += cash['£1'] * 1.00};

  if(cash.hasOwnProperty('£2') === true){
  total += cash['£2'] * 2.00};

  if(cash.hasOwnProperty('£5') === true){
  total += cash['£5'] * 5.00};

  if(cash.hasOwnProperty('£10') === true){
  total += cash['£10'] * 10.00};

  if(cash.hasOwnProperty('£20') === true){
  total += cash['£20'] * 20.00};

  if(cash.hasOwnProperty('£50') === true){
  total += cash['£50'] * 50.00};

  
  return `£${total}`
};

module.exports = tillAddition;
