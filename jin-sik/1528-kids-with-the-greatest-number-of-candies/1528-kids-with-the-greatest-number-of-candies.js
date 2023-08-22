/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let bigNum = 0
    const findBigNum = candies.forEach(item => {
        if(item > bigNum) {
           return bigNum = item
        }
    })

    return candies.map(item => {
        const sum = item + extraCandies
        if(sum >= bigNum) {
            return true
        } else {
            return false
        }
    })
};