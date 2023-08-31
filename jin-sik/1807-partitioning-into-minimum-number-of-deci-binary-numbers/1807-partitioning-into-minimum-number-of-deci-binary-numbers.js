/**
 * @param {string} n
 * @return {number}
 */
var minPartitions = function(n) {
    const arr = n.split('')
    return Math.max(...arr)
};