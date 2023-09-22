/**
 * @param {number[][]} edges
 * @return {number}
 */
var findCenter = function(edges) {
    const [firstArr, ...otherArr] = edges
    let answer = 0
    
    otherArr.find(list => {
        return firstArr.find(item => {
            if(list.includes(item)) {
                return answer = item
            } 
        })
    })
    return answer
};