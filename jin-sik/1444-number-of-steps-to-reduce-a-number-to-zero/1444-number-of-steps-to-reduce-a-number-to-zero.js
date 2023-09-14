/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function(num) {
    let obtain = num
    let count = 0

    while (obtain > 0) {
        if(obtain % 2 !== 0) {
            obtain -= 1
        } else {
            obtain /= 2
        }
        count ++
    }
    return count
};