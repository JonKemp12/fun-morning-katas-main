// Please do not change the name of this function
function getTweetData (tweet) {
  const tweetData = {};

  tweetData['length'] = tweet.length;
  tweetData['tagCount'] = ((tweet || '').match(/#/g) || []).length
  tweetData['mentionCount'] = ((tweet || '').match(/@/g) || []).length
  tweetData['tags'] = ((tweet || '').match(/#\w*/gi) || [])
  tweetData['mentions'] = ((tweet || '').match(/@\w*/gi) || [])
  
  console.log(tweetData);

  return tweetData;
};

module.exports = getTweetData;
