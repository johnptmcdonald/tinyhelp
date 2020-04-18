const expect = require("chai").expect;
const isPrime = require("../isPrime");

describe("isPrime", () => {
  it("returns a boolean denoting whether a number is a prime number", () => {
    const num = 7;
    const num2 = 24;
    expect(isPrime(num)).to.be.true;
    expect(isPrime(num2)).to.be.false;
  });
});
