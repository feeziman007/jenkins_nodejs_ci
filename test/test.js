var test = require('tape')
  , mod = require('../index')
  , summer = mod.summer
  , val1 = mod.val1
  , val2 = mod.val2
  , result = mod.result
  , winter = summer(val2)
test('summer', function (t) {
    t.equal(winter(val1), result, 'should be equal')
    t.end()
})