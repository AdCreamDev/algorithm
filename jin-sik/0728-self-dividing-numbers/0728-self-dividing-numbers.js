/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
    const arr = []
    for(let i = left; right >= i; i++) {
        const divide = [...String(i)]

        if(divide.includes('0') === false) {
            for(let j = 0; divide.length > j; j++) {
                if(i % Number(divide[j]) !== 0) break;
                if(divide.length - 1 === j) {
                    arr.push(i)
                }
            }
        }
    }
    return arr
};  