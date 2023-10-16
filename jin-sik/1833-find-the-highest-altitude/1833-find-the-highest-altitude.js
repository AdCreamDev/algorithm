/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    const altitudes = [0]
    gain.forEach((point, idx) => {
        altitudes.push(altitudes[idx] + point)
    })
    return Math.max(...altitudes)
};