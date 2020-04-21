const expect = require("chai").expect;
const randomInteger = require("../").randomInteger;

describe("randomInteger", () => {
  it("return not a number (NaN) if it is invoked with less than 2 arguments", () => {
    expect(randomInteger(2)).to.be.NaN;
    expect(randomInteger()).to.be.NaN;
  });
  it("return a random integer between 2 integers", () => {
    const min = 2;
    const max = 10;
    const randomInt = randomInteger(min, max);
    const test = randomInt >= min && randomInt <= max ? true : false;
    expect(test).to.be.true;
    const min2 = 45;
    const max2 = 200;
    const randomInt2 = randomInteger(min2, max2);
    const test2 = randomInt2 >= min2 && randomInt2 <= max2 ? true : false;
    expect(test2).to.be.true;
  });
  it("return a random integer between 2 integers even if the first argument is bigger than the second argument", () => {
    const min3 = 10;
    const max3 = 2;
    const randomInt3 = randomInteger(min3, max3);
    const test3 = randomInt3 <= min3 && randomInt3 >= max3 ? true : false;
    expect(test3).to.be.true;
    const min4 = 500;
    const max4 = 200;
    const randomInt4 = randomInteger(min4, max4);
    const test4 = randomInt4 <= min4 && randomInt4 >= max4 ? true : false;
    expect(test4).to.be.true;
  });
});
