/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */

const map = new Map();

var encode = function(longUrl) {
    // console.log(longUrl.split('https://leetcode.com/')) 
    // const split = longUrl.split('https://leetcode.com/')
    // const encode = encodeURIComponent(split[1])
    // const encode = escape(split[1])
    // console.log("encode", encodeURIComponent(split[1]))
    // console.log("encode", escape(split[1]))

    
    const code = Math.random().toString(32).slice(5)
    const shortUrl = `http://tinyurl.com/${code}`
    map.set(shortUrl, longUrl)
    return shortUrl
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function(shortUrl) {
    // console.log(shortUrl)
    // const obj = new Solution()
    // console.log(obj)

    return map.get(shortUrl)
};

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */