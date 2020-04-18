const expect = require('chai').expect;
const checkNested = require('../').checkNested;

describe('checkNested', () => {
  it('returns true if an object has nested values', () => {
    const objOne = {
      name: {
        first: 'Pete',
        favorite: {
          color: 'blue',
        },
      },
    };
    expect(checkNested(objOne, 'name', 'favorite', 'color')).to.equal(true);
  });
  it('returns false if an object has nested values', () => {
    const objTwo = {
      name: {
        first: 'Pete',
        favorite: {
          color: 'blue',
        },
      },
    };
    expect(checkNested(objTwo, 'name', 'favorite', 'food')).to.equal(false);
  });
});
