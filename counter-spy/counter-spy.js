// Please do not change the name of this function
function counterSpy (names) {
  const regex = /[s|p|y]/gi;
  const notSpy = names.filter(name => regex.test(name) === false);
  return notSpy.sort();
};

module.exports = counterSpy;
