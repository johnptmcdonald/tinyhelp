const expect = require('chai').expect;
const regularShuffle = require('../').regularShuffle;

const numsArray = [21, 32, 0, -50];
const stringArray = ['not', 'enough', 'minerals'];
const mixedArray = [21, 'Deion', 2, 'Sanders'];

const numsOutput = regularShuffle(numsArray);
const stringOutput = regularShuffle(stringArray);
const mixedOutput = regularShuffle(mixedArray);

describe('regularShuffle', () => {
  it('returns an array', () => {
    expect(numsOutput).to.be.an('array');
    expect(stringOutput).to.be.an('array');
    expect(mixedOutput).to.be.an('array');
  });
  it('takes an array and returns a new array with values shuffled', () => {
    expect(numsOutput).to.have.all.members([21, 32, 0, -50]);
    expect(regularShuffle(numsArray).length).to.equal(0);
    expect(numsOutput.length).to.equal(4);
    expect(stringOutput).to.have.all.members(['not', 'enough', 'minerals']);
    expect(regularShuffle(stringArray).length).to.equal(0);
    expect(stringOutput.length).to.equal(3);
    expect(mixedOutput).to.have.all.members([21, 'Deion', 2, 'Sanders']);
    expect(regularShuffle(mixedArray).length).to.equal(0);
    expect(mixedOutput.length).to.equal(4);
  });
});
