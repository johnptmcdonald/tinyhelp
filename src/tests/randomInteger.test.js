const expect = require("chai").expect;
const randomInteger = require("../").randomInteger;

describe("randomInteger", () => {
  it("return not a number (NaN) if it is invoked with less than 2 arguments", () => {
    // expect(randomInteger(2)).to.equal(NaN);
    // expect(randomInteger()).to.equal(NaN);
  });
  it("does not mutate the array", () => {
    const myArr = [0, [1, [2, [3]]]];
    const flat = flatten(myArr);
    expect(myArr.length).to.equal(2);
  });
});
