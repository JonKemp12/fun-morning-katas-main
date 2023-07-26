const { expect } = require("@jest/globals");
const dnaPairs = require("./dna-pairs.js");

describe("dnaPairs()", () => {
  test("If passed \"G\" should return [ [G, C] ]", () => {
    let expected = [ ['G', 'C'] ];
    let actual = dnaPairs('G');
    expect(actual).toEqual(expected);
  });

  test("If passed \"C\" should return [ [C, G] ]", () => {
    let expected = [ ['C', 'G'] ];
    let actual = dnaPairs('C');
    expect(actual).toEqual(expected);
  });

  test("If passed \"AG\" should return [ [A, T], [G, C] ]", () => {
    let expected = [ ['A', 'T'], ['G', 'C'] ];
    let actual = dnaPairs('AG');
    expect(actual).toEqual(expected);
  });

  test("If passed \"ATAG\" should return [ [A, T], [T, A], [A, T], [G, C] ]", () => {
    let expected = [ ['A', 'T'], ['T', 'A'], ['A', 'T'], ['G', 'C'] ];
    let actual = dnaPairs('ATAG');
    expect(actual).toEqual(expected);
  });
});
