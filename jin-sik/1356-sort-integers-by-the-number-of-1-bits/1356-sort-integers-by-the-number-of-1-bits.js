/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function(arr) {
    return arr.sort((a, b) => bitCount(a) - bitCount(b) || a - b);
};

const bitCount = num => {
  let sum = 0;
  while (num) {
    sum += num & 1;
    num = num >> 1;
  }
  return sum;
};


// Runtime 147ms
// var sortByBits = function(arr) {
//     // const toBinary = arr.map(obj => obj.toString(2));
//     // const binarySort = toBinary.sort((a,b) => a.replace(/0/g, '') - b.replace(/0/g, '') || a - b );
//     // return binarySort.map(obj => parseInt(obj, 2))
// };