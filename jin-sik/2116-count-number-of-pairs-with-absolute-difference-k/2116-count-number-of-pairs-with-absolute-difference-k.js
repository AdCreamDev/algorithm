/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countKDifference = function(nums, k) {
    let answer = 0

    nums.forEach((item, idx) => {
        nums.forEach((item2, idx2) => {
            if(idx === idx2) return
            if((item - item2) === k) answer++
        })
    })

    return answer
};