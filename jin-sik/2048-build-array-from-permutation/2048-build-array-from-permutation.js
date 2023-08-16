/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function(nums) {
    // const ans = [nums[nums[0]], nums[nums[1]], nums[nums[2]], nums[nums[3]], nums[nums[4]], nums[nums[5]]]
    const ans = nums.map((num, idx) => nums[nums[idx]])
    return ans
};