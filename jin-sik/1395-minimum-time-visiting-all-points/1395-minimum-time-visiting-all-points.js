/**
 * @param {number[][]} points
 * @return {number}
 */
var minTimeToVisitAllPoints = function(points) {
    let time = 0;
    for( let i=0; i < points.length -1; i++) {
        const p0 = points[i]
        const p1 = points[i+1]
        time += Math.max(Math.abs(p0[0] - p1[0]), Math.abs(p0[1] - p1[1]))
    }
    return time
};