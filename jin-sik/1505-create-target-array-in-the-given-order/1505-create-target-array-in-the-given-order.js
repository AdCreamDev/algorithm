/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function(nums, index) {
    const answer = []

    nums.forEach((num, idx) => answer.splice(index[idx], 0, num))
    
    return answer
};