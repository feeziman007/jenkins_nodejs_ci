var test = require('tape')
  , expect = require('chai').expect
  , summer = require('../index')
  , val1 = 40
  , val2 = -40
  , result = val1 + val2
  , winter = summer(val2)
test('summer', function (t) {
    t.equal(winter(val1), result, 'should be equal')
    t.end()
})

describe('Summer: ', function() {
    it('Value of "Winter" in "Summer" should be equal', function() {
        expect(winter(val1)).to.equal(result)
    })
})
