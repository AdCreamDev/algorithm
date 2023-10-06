/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    const splitArr = s.split(" ")

    let answer = ""
    splitArr.forEach((item, idx) => {
        const word = [...item].reverse().join("")
        splitArr.length - 1 !== idx ? answer += word + " " : answer += word
    })
    return answer
};