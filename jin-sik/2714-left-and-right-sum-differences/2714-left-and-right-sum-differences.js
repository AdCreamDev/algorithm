/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRightDifference = function(nums) {
    const leftArr = []
    const right = []

    // leftArr
    nums.reduce((acc, current, index, array) => {
        if(acc === 0) leftArr.push(0)
        if(array.length - 1 === index) return
        leftArr.push(acc + current)
        return acc + current
    }, 0)

    const reverseNums = [...nums].reverse()
    // rightArr
    reverseNums.reduce((acc, current, index, array) => {
        if(acc === 0) right.push(0)
        if(array.length - 1 === index) return
        right.push(acc + current)
        return acc + current
    }, 0)

    const rightArr = right.reverse()
    
    return leftArr.map((list, idx) => 
        Math.abs(list - rightArr[idx])
    )
};