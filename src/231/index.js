/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    let num = 1;
    while (num <= n) {
        if (num === n) {
            return true;
        }
        num = num * 2;
    }
    return false;
}; 

console.log(isPowerOfTwo(1));
console.log(isPowerOfTwo(16));
console.log(isPowerOfTwo(218));

module.exports = {
    title:'Power of Two',
    url:'https://leetcode.com/problems/power-of-two/',
    id:'231',
    difficulty:'easy',
};