const expect = require("chai").expect;
const sieveOfE = require("../sieveOfE");

describe("sieveOfE", () => {
  it("returns an array of primes up to and including the number argument passed", () => {
    const num = 5;
    const primes = sieveOfE(num)
    expect(primes).to.deep.equal([2,3,5]);
  });
  it("returns an array of primes up to and including the number argument passed", () => {
    const num = 50;
    const primes = sieveOfE(num)
    expect(primes).to.deep.equal([2,3,5,7,11,13,17,19,23,29,31,37,41,43,47]);
  });
});
