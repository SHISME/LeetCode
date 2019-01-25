/**
 * 
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if (prices.length <= 1) {
        return 0;
    }
    let dp1 = Math.max(-prices[0], -prices[1]);
    let dp2 = prices[1] - prices[0];
    let dp3 = Math.max(0, dp2);
    for (let i = 2; i < prices.length; i++) {
        // 只需要记录上一次的状态，可以不用存储每一次的状态
        const last_dp3 = dp3;
        const last_dp2 = dp2;
        dp2 = dp1 + prices[i];
        dp3 = Math.max(last_dp2, dp3);
        dp1 = Math.max(dp1, last_dp3 - prices[i]);
    }
    return Math.max(dp3, dp2);
};

console.log(maxProfit([1,2,3,0,2]));
console.log(maxProfit([1,2,3,4]));

module.exports = {
    id:'309',
    title:'Best Time to Buy and Sell Stock with Cooldown',
    url:'https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/',
    difficulty:'medium',
    have_md:true,
};