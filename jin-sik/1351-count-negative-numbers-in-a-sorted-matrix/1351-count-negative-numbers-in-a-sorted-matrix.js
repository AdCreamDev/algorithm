/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
    let result = 0;

    grid.forEach(item => {
        item.forEach(obj => {
            0 > obj &&  result++;
        })
    })
    return result;
};