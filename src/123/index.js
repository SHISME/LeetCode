/** 可以看做 188 的特殊情况
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if (prices.length < 2) {
        return 0;
    }
    const local = prices.map(() => []);
    const global = prices.map(() => []);
    for (let i = 0; i < prices.length; i++) {
        for (let j = 0; j <= 2; j++) {
            if (i > 0 && j > 0) {
                global[i][j] = Math.max(global[i-1][j], local[i-1][j]);
                local[i][j] = Math.max(global[i-1][j-1], local[i-1][j]) + prices[i] - prices[i-1];
            } else {
                global[i][j] = 0;
                local[i][j] = 0;
            }
        }
    }
    return Math.max(local.pop().pop(), global.pop().pop());
};

console.log(maxProfit([3,3,5,0,0,3,1,4]));
console.log(maxProfit([7,5,4,3,2,1]));

module.exports = {
    id:'123',
    url:'https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/submissions/',
    difficulty:'hard',
    title:'Best Time to Buy and Sell Stock III',
};