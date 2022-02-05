const assert = require('chai').assert;
const { tileLabel, xyFromIndex } = require('../public/scripts/tileHelpers');


describe('#tileLabel', () => {
  it('returns letter and number index for given xy coordinates', () => {
    assert.equal(tileLabel(4, 5), 'F5');
  });
});

describe('#xyFromIndex', () => {
  it('returns (1, 1) from 5 in 3x3 grid', () => {
    assert.deepEqual(xyFromIndex(5, 3), [1, 1]);
  });

  it('returns (4, 3) from 28 in 7x7 grid', () => {
    assert.deepEqual(xyFromIndex(28, 7), [4, 3]);
  });
});

describe('#xyFromIndex => #tileLabel', () => {
  it('chaining of functions', () => {
    const dim = 7;
    const result = tileLabel(...xyFromIndex(28, dim), dim);
    assert.equal(result, 'D5');
  });
});