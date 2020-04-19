const expect = require('chai').expect;
const inPlaceShuffle = require('../').inPlaceShuffle;

const numsArray = [1, 2, 3];
const stringArray = ['construct', 'additional', 'pylons'];
const mixedArray = [21, 'Deion', 2, 'Sanders'];

describe('inPlaceShuffle', () => {
  it('returns an array', () => {
    expect(inPlaceShuffle(numsArray)).to.be.an('array');
    expect(inPlaceShuffle(stringArray)).to.be.an('array');
    expect(inPlaceShuffle(mixedArray)).to.be.an('array');
  });
  it('takes an array and returns the same array with values shuffled', () => {
    expect(inPlaceShuffle(numsArray).length).to.equal(3);
    expect(inPlaceShuffle(stringArray).length).to.equal(3);
    expect(inPlaceShuffle(mixedArray).length).to.equal(4);
    expect(inPlaceShuffle(numsArray)).to.have.all.members([1, 2, 3]);
    expect(inPlaceShuffle(stringArray)).to.have.all.members([
      'construct',
      'additional',
      'pylons',
    ]);
    expect(inPlaceShuffle(mixedArray)).to.have.all.members([
      21,
      'Deion',
      2,
      'Sanders',
    ]);
  });
});
