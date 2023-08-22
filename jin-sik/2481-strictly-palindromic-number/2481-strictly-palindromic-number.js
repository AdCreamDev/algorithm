/**
 * @param {number} n
 * @return {boolean}
 */
var isStrictlyPalindromic = function(n) {
    let answer
    for(let i=2; i <= n-2; i++) {
        const bin = n.toString(i);
        if(bin.split('').reverse().join('') === bin) {
            answer = true
        } else {
            answer = false
        }
        if(answer === false) return answer
    }
};