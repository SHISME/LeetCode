/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if (prices.length <= 1) {
        return 0;
    }
    let result = 0;
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] > prices[i - 1]) {
            result += prices[i] - prices[i - 1];
        }
    }
    return result;
};
console.log(maxProfit([7,1,5,3,6,4]));
console.log(maxProfit([1,2,3,4,5]));
module.exports = {
    id:'122',
    title:'Best Time to Buy and Sell Stock II',
    url:'https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/',
    difficulty:'easy',
};