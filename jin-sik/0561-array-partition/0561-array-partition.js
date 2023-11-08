/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    let result = 0;
    const numsSort = nums.sort((a, b) => a - b);

    numsSort.forEach((item, idx) => {
        if(idx % 2 === 0) return result += item;
    })
    return result;
};