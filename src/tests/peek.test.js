const expect = require("chai").expect;
const peek = require("../").peek;

describe("peek", () => {
  it("returns the last item of an array", () => {
    const myArr = [1, 2];
    const lastItem = peek(myArr);
    expect(lastItem).to.equal(2);
  });
  it("does not mutate the array", () => {
    const myArr = [1, 2];
    const lastItem = peek(myArr);
    expect(myArr.length).to.equal(2);
  });
});
