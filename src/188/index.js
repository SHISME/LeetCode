/**
 * 思路：
 * 
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(k, prices) {
    if (prices.length <= 1 || k < 1) {
        return 0;
    }
    if (k >= prices.length / 2) {
        return quickProfit(prices);
    }
    const local = prices.map(() => []);
    const global = prices.map(() => []);
    for (let i = 0; i < prices.length; i++) {
        for (let j = 0; j <= k; j++) {
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
    function quickProfit(prices) {
        let result = 0;
        for (let i = 1; i< prices.length; i++) {
            if (prices[i] > prices[i - 1]) {
                result += prices[i] - prices[i - 1];
            }
        }
        return result;
    }
};

// console.log(maxProfit(5, [1,2,4,2,5,7,2,4,9,0]));
console.log(maxProfit(2, [3,2,6,5,0,3,]));

module.exports = {
    title:'Best Time to Buy and Sell Stock IV',
    id:'188',
    difficulty:'hard',
    url:'https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/',
    have_md:true,
};