/**
 * @param {number} n
 * @return {number[]}
 */
var lexicalOrder = function(n) {
    const result = [];
    let cur = 1;
    for (let i = 1; i <= n ; i++) {
        result.push(cur);
        if (cur * 10 <= n) {
            cur *= 10;
        } else if (cur % 10 != 9 && cur + 1 <= n) {
            cur++;
        } else {
            while (parseInt(cur / 10) % 10 === 9) {
                cur = parseInt(cur / 10);
            }
            cur = parseInt(cur / 10) + 1;
        }
    }
    return result;
};

console.log(lexicalOrder(13));

module.exports = {
    id:'386',
    title:'Lexicographical Numbers',
    url:'https://leetcode.com/problems/lexicographical-numbers/',
    difficulty:'medium',
};