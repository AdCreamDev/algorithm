/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    const result = []

    for(let i = 0; n >= i; i++) {
        let k = i
        let sum = 0 
        while(k) {
            sum += k & 1
            k = k >> 1
        } 
        result.push(sum)
    }

    return result
};