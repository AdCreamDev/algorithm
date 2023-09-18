/**
 * @param {number} n
 * @return {number}
 */
var sumOfMultiples = function(n) {
    let answer = 0

    let count = 1
    while(count <= n) {
        count % 3 === 0 || count % 5 === 0 || count % 7 === 0 ? answer += count : null
        count++
    }
    return answer
};