/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let answer = []
    nums.reduce((accumulator, current) => {
        answer.push(accumulator + current)
        return accumulator + current;
    }, 0)
    return answer
};