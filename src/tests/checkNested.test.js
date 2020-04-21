const expect = require('chai').expect;
const checkNested = require('../').checkNested;

describe('checkNested', () => {
  it('returns true if object contains search key', () => {
    const object = {
      name: {
        first: 'Pete',
        favorite: {
          color: 'blue',
        },
      },
    };
    expect(checkNested(object, 'favorite')).to.equal(true);
  });
  it('returns false if object does not contain search key', () => {
    const object = {
      name: {
        first: 'Pete',
        favorite: {
          color: 'blue',
        },
      },
    };
    expect(checkNested(object, 'movie')).to.equal(false);
  });
});
