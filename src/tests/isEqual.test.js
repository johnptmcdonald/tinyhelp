const expect = require("chai").expect;
const isEqual = require("../isEqual");

describe("isEqual", () => {
  xit("compares two objects and returns true if they have identical keys and values", () => {
    const objOne = { name: { first: "John" } };
    const objTwo = { name: { first: "John" } };
    expect(isEqual(objOne, objTwo)).to.equal(true);
  });
  xit("compares two arrays and returns true is they have identical values", () => {
    const arrOne = [1, [2, [3]]];
    const arrTwo = [1, [2, [3]]];
    expect(isEqual(objOne, objTwo)).to.equal(true);
  });
});
