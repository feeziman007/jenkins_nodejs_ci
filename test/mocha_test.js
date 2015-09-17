var test = require('tape')
  , expect = require('chai').expect
  , mod = require('../index')
  , summer = mod.summer
  , val1 = mod.val1
  , val2 = mod.val2
  , result = mod.result
  , winter = summer(val2)
describe('Summer', function() {
  it('Value of "Winter" in "Summer" should be equal', function() {
    expect(winter(val1)).to.equal(result)
  })
})
