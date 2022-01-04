/* eslint-disable no-undef */
const searchCandies = require("../main/candy");

// describe("searchCandies", () => {
// 	it("starts with a search string", () => {
// 		expect(searchCandies('Ma', 10)).toEqual(expect.arrayContaining([ 'Mars', 'Maltesers' ]))
// 	})
// })

describe("searchCandies", () => {
  it("starts with a search string", () => {
    expect(searchCandies("Ma", 10)).toEqual(["Maltesers", "Mars"]);
  });

  it("filters out any candy which exceeds the maxPrice", () => {
    expect(searchCandies("Ma", 2)).toEqual(["Mars"]);
  });

  it("works with lowercase string", () => {
    expect(searchCandies("ma", 10)).toEqual(["Maltesers", "Mars"]);
  });

  it("filters out candies with S with a max price of 4", () => {
    expect(searchCandies("S", 4)).toEqual(["Skitties", "Skittles"]);
  });
});
