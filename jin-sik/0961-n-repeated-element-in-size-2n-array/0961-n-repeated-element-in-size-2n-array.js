/**
 * @param {number[]} nums
 * @return {number}
 */
var repeatedNTimes = function(nums) {
    const obj = {};
    const divide = nums.length / 2;

    nums.forEach(item => {
        obj[item] = (obj[item] || 0) + 1;
    })

    function getKeyByValue(obj, value) {
        return Object.keys(obj).find(key => obj[key] === value);
    }

    return getKeyByValue(obj, divide);
};