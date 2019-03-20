/*
 * @lc app=leetcode id=121 lang=javascript
 *
 * [121] Best Time to Buy and Sell Stock
 *
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/
 *
 * algorithms
 * Easy (45.94%)
 * Total Accepted:    451K
 * Total Submissions: 970.8K
 * Testcase Example:  '[7,1,5,3,6,4]'
 *
 * Say you have an array for which the i^th element is the price of a given
 * stock on day i.
 * 
 * If you were only permitted to complete at most one transaction (i.e., buy
 * one and sell one share of the stock), design an algorithm to find the
 * maximum profit.
 * 
 * Note that you cannot sell a stock before you buy one.
 * 
 * Example 1:
 * 
 * 
 * Input: [7,1,5,3,6,4]
 * Output: 5
 * Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit
 * = 6-1 = 5.
 * Not 7-1 = 6, as selling price needs to be larger than buying price.
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: [7,6,4,3,1]
 * Output: 0
 * Explanation: In this case, no transaction is done, i.e. max profit = 0.
 * 
 * 
 */
/**
 * 此题只需要一个单调递增栈即可
 * 
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    const stack = [];
    let max = 0;
    prices.push(0);
    prices.forEach((price) => {
        if (stack.length === 0) {
            stack.push(price);
            return;
        }
        if (stack[stack.length - 1] > price) {
            const maxPrice = stack[stack.length - 1];
            max = Math.max(max, maxPrice - stack[0]);
            stack.pop();
            while (stack.length > 0 && stack[stack.length - 1] > price) {
                stack.pop();
            }
        }
        stack.push(price);
    });
    return max;
};

console.log(maxProfit([7,1,5,3,6,4]));

module.exports = {
    id:'121',
    title:'Best Time to Buy and Sell Stock',
    url:'https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/',
    difficulty:'Easy',
}