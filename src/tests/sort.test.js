const expect = require("chai").expect;
const sort = require("../sort");

describe("sort", () => {
  it("sorts numbers in ascending order", () => {
    const myArr = [6, 4, 5, 2, 3, 1];
    const sortedArr = sort(myArr);
    expect(sortedArr).to.deep.equal([1, 2, 3, 4, 5, 6]);
  });
  it("does not mutate the array", () => {
    const myArr = [6, 4, 5, 2, 3, 1];
    const sortedArr = sort(myArr);
    expect(myArr).to.deep.equal([6, 4, 5, 2, 3, 1]);
  });
});
