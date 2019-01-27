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
    // const dp_sell = [];
    // const dp_clear = [];
    // const dp_empty = [];
    // dp_sell[1][k] = Math.max(-prices[0], -prices[1]);
    // dp_clear[1][k] = Math.max(0, prices[1] - prices[0]);
    // dp_empty[1][k] = 0;
    // for (let i = 2; i < prices.length; i++) {
    //     dp_sell[i][k] = Math.max(dp_sell[i - 1][k], );
    // }
    const dp = prices.map(() => 0);
    for (let i = 1; i < prices.length; i++) {
        for (let x = 1; x < k; x++) {
            
        }
    }
    

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

console.log(maxProfit(5, [1,2,4,2,5,7,2,4,9,0]));
// console.log(maxProfit(2, [3,2,6,5,0,3,]));

module.exports = {
    title:'Best Time to Buy and Sell Stock IV',
    id:'188',
    difficulty:'hard',
    url:'https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/',
    have_md:true,
};