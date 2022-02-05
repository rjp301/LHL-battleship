const assert = require('chai');
const { tileLabel, xyFromIndex } = require('../public/scripts/tileHelpers');


describe('#tileLabel', () => {
  it('returns letter and number index for given xy coordinates', () => {
    assert.equal(tileLabel((4, 5)), 'E4');
  });
});