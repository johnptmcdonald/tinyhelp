const expect = require('chai').expect;
const sort = require('../sort');

describe('sort', () => {
  it('sorts numbers in ascending order', () => {
    const myArr = [6, 4, 5, 2, 3, 1];
    const myArr2 = [-90, 67, 1, 56, -100, 1, 0];
    const myArr3 = [-45, 7, 24, 49, 3, -12];
    const sortedArr = sort(myArr);
    const sortedArr2 = sort(myArr2);
    const sortedArr3 = sort(myArr3);
    expect(sortedArr).to.deep.equal([1, 2, 3, 4, 5, 6]);
    expect(sortedArr2).to.deep.equal([-100, -90, 0, 1, 1, 56, 67]);
    expect(sortedArr3).to.deep.equal([-45, -12, 3, 7, 24, 49]);
  });
  it('sorts numbers in descending order', () => {
    const myArr = [6, 4, 5, 2, 3, 1];
    const myArr2 = [-90, 67, 1, 56, -100, 1, 0];
    const myArr3 = [-45, 7, 24, 49, 3, -12];
    const sortedArr = sort(myArr, false);
    const sortedArr2 = sort(myArr2, false);
    const sortedArr3 = sort(myArr3, false);
    expect(sortedArr).to.deep.equal([6, 5, 4, 3, 2, 1]);
    expect(sortedArr2).to.deep.equal([67, 56, 1, 1, 0, -90, -100]);
    expect(sortedArr3).to.deep.equal([49, 24, 7, 3, -12, -45]);
  });
  it('handles an array of strings', () => {
    const myArr = [
      'apples',
      'oranges',
      'fullstack',
      'cody',
      'javascript',
      'armageddon',
    ];
    const myArr2 = ['react', 'redux', 'zebra', 'axios', 'xian', 'express'];
    const sortedArr = sort(myArr);
    const sortedArr2 = sort(myArr2, false);
    expect(sortedArr).to.deep.equal([
      'apples',
      'armageddon',
      'cody',
      'fullstack',
      'javascript',
      'oranges',
    ]);
    expect(sortedArr2).to.deep.equal([
      'zebra',
      'xian',
      'redux',
      'react',
      'express',
      'axios',
    ]);
  });
  it('does not mutate the array', () => {
    const myArr = [6, 4, 5, 2, 3, 1];
    const sortedArr = sort(myArr);
    expect(myArr).to.deep.equal([6, 4, 5, 2, 3, 1]);
  });
});
