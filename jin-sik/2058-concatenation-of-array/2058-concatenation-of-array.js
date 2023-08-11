/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    // let ans = nums.push(nums)
    // const ans = nums.map((num) => nums.push(num))
    var ans = nums.concat(nums)
    return ans
};