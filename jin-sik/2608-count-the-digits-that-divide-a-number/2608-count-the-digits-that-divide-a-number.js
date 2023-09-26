/**
 * @param {number} num
 * @return {number}
 */
var countDigits = function(num) {
    const stringNum = String(num);
    let answer = 0

    for(let i=0; String(num).length > i; i++) {
        num % stringNum[i] === 0 ? answer += 1 : null 
    }
    return answer
};