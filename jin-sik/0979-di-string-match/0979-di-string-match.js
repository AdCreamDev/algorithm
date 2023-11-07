/**
 * @param {string} s
 * @return {number[]}
 */
var diStringMatch = function(s) {
    const result = []
    let i = 0
    let d = s.length

    for(let k = 0; s.length > k; k++) {
        if(s[k] === "I") {
            result.push(i)
            i++
        }
        if(s[k] === "D") {
            result.push(d)
            d--
        }
        if(i === d) {
            result.push(i)
        }
    }
    return result
};