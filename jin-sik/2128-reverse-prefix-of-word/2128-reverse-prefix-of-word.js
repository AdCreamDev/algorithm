/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function(word, ch) {
    const sameIdx = [...word].findIndex(item => item === ch)
    if(sameIdx === -1) return word
    const reversePart = word.slice(0, sameIdx + 1)
    const otherWord = word.slice(sameIdx + 1)
    
    return [...reversePart].reverse().join("") + otherWord
};