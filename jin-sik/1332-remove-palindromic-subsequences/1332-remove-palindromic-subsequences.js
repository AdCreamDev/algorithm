/**
 * @param {string} s
 * @return {number}
 */
var removePalindromeSub = function(s) {
    return s === [...s].reverse().join("") ? 1 : 2;
};