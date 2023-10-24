/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let wordSum = ""
    let extraWord = ""

    if(word1.length - word2.length > 0) {
        extraWord = word1.slice(word2.length)
    } 
    if(word1.length - word2.length < 0) {
        extraWord = word2.slice(word1.length)
    }

    [...word1].forEach((word, idx) => {
        if(idx > word2.length -1) return
        wordSum += word + word2[idx]
    })

    return wordSum + extraWord
};