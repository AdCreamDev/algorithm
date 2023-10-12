/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
    const size = mat[0].length

    let sum = 0
    mat.forEach((item, idx) => {
        if(size%2 === 0) {
            // 크기가 짝수일 때
            sum += item[idx] + item[size-1-idx]
        } else {
            // 크기가 홀수일 때
            const harf = Math.floor(size/2)
            if(Math.floor(size/2) === idx) {
                sum += item[harf]
            }else{
                sum += item[idx] + item[size-1-idx]
            }
        }
    })
    return sum
};