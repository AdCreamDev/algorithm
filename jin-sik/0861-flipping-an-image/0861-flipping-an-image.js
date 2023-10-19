/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function(image) {
    return image.map((item) => {
        return item.reverse().map(elmt => elmt === 0 ? 1:0)
    })
};