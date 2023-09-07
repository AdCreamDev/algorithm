/**
 * @param {number[]} encoded
 * @param {number} first
 * @return {number[]}
 */
var decode = function(encoded, first) {
  const arr = [first]

  // const a = first ^ encoded[0]
  // const b = a ^ encoded[1]
  // const c = b ^ encoded[2]
  // console.log(a,b,c)
  
  let xor = first
  encoded.forEach(item => {
    xor = xor ^ item
    arr.push(xor)
  })
  return arr
};