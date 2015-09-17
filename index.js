var toAdd = 23
  , val1 = 40
  , val2 = -40
  , result = val1 + val2
  , winter = summer(val2)
function summer (sumVal) {
    return function (toAdd) {
        if (!toAdd) throw new Error('trying to pull a fast one?')
        return sumVal + toAdd
    }
}
module.exports = {
    summer: summer,
    val1: val1,
    val2: val2,
    result: result,
    winter: winter
}