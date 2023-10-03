/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function(arr) {
    let answer = 0

    const sum = (first, last) => {
        for(let i=first; i <= last; i++) {
            // console.log(`arr[${i}] :`, arr[i])
            answer += arr[i]
        }
    }

    for(let i=0; i < arr.length; i++) { // first num
        for(let j=0; i+j < arr.length; j += 2) { // last num
            // console.log(i, i+j)
            sum(i, i+j)
        }
    }

    return answer
};