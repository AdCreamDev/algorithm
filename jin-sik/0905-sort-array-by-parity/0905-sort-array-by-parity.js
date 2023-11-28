/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    let even = [];
    let odd = [];

    nums.forEach(item => {
        if(item % 2 === 0) {
           return even.push(item);
        } else {
            odd.push(item);
        }
    })

    return [...even, ...odd];
};