const expect = require("chai").expect;
const isPrime = require("../").isPrime;

describe("isPrime", () => {
  it("returns a boolean denoting whether a number is a prime number", () => {
    const num = 7;
    const num2 = 24;
    expect(isPrime(num)).to.be.true;
    expect(isPrime(num2)).to.be.false;
  });
  it("returns false if a number is less than or equal to 1", () => {
    const num = -7;
    const num2 = 0;
    expect(isPrime(num)).to.be.false;
    expect(isPrime(num2)).to.be.false;
  });
  it("returns false if a number is not an integer", () => {
    const num = 7.3;
    const num2 = 31.5;
    const num3 = 5.0;
    expect(isPrime(num)).to.be.false;
    expect(isPrime(num2)).to.be.false;
    expect(isPrime(num3)).to.be.true;
  });
});
