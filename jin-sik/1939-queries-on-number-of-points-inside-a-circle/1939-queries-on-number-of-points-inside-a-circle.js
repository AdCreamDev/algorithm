/**
 * @param {number[][]} points
 * @param {number[][]} queries
 * @return {number[]}
 */
var countPoints = function(points, queries) {
    const answer = []
    queries.map((querie, idx) => {
        let count = 0
        return points.forEach((point, index) => {
            const dist = Math.sqrt(Math.pow((querie[0]-point[0]),2) + Math.pow((querie[1]-point[1]),2))
            if(querie[2] >= dist) count++
            if(index === points.length - 1) answer.push(count)
        })
    })
    return answer
};