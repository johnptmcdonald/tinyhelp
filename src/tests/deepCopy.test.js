const expect = require("chai").expect;
const deepCopy = require("../").deepCopy;

describe("deepCopy", () => {
  it("returns a deep copy of an array", () => {
    const myArr = [1, [2]];
    const newArr = deepCopy(myArr);
    newArr[1][0] = 3;

    expect(newArr[1][0]).to.equal(3);
    expect(myArr[1][0]).to.equal(2);
  });
  it("returns a deep copy of an object", () => {
    const myObj = { name: { first: "Alpha" } };
    const newObj = deepCopy(myObj);
    myObj.name.first = "Bravo";

    expect(newObj.name.first).to.equal("Alpha");
    expect(myObj.name.first).to.equal("Bravo");
  });
  it("can copy an object that has arrays as values", () => {
    const myObj = {
      a: [1],
      }
    const newObj = deepCopy(myObj);
    expect(newObj.a).to.deep.equal(myObj.a);
  });
});
