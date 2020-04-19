const expect = require('chai').expect;
const isEqual = require('../').isEqual;

describe('isEqual', () => {
  it('compares two objects and returns true if they have identical keys and values', () => {
    const objOne = { name: { first: 'John' } };
    const objTwo = { name: { first: 'John' } };
    expect(isEqual(objOne, objTwo)).to.equal(true);
  });
  it('compares two objects and returns false if they have non-identical keys and values', () => {
    const objOne = { name: { first: 'John' } };
    const objTwo = { name: { first: 'Pete' } };
    expect(isEqual(objOne, objTwo)).to.equal(false);
  });
  it('compares two arrays and returns true is they have identical values', () => {
    const arrOne = [1, [2, [3]]];
    const arrTwo = [1, [2, [3]]];
    expect(isEqual(arrOne, arrTwo)).to.equal(true);
  });
});
