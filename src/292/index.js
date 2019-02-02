/**
 * 
 * 我们只需要拿的时候保证剩下的是4的倍数的个数就行
 * 
 * 如果一开始就是 4 的倍数则是必输局
 * 
 * @param {number} n
 * @return {boolean}
 */
var canWinNim = function(n) {
    return n % 4 !== 0;
};

module.exports = {
    id:'292',
    title:'Nim Game',
    url:'https://leetcode.com/problems/nim-game/',
    difficulty:'easy'
};