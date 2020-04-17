const expect = require("chai").expect;
const flatten = require("../flatten");

describe("flatten", () => {
  it("flattens multiply nested arrays", () => {
    const myArr = [0, [1, [2, [3]]]];
    const flat = flatten(myArr);
    console.log(flat[3]);
    expect(flat.length).to.equal(4);
    expect(flat[3]).to.equal(3);
  });
  it("does not mutate the array", () => {
    const myArr = [0, [1, [2, [3]]]];
    const flat = flatten(myArr);
    expect(myArr.length).to.equal(2);
  });
});
