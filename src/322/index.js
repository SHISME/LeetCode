/*
 * @lc app=leetcode id=322 lang=javascript
 *
 * [322] Coin Change
 *
 * https://leetcode.com/problems/coin-change/description/
 *
 * algorithms
 * Medium (28.75%)
 * Total Accepted:    161.9K
 * Total Submissions: 558.9K
 * Testcase Example:  '[1,2,5]\n11'
 *
 * You are given coins of different denominations and a total amount of money
 * amount. Write a function to compute the fewest number of coins that you need
 * to make up that amount. If that amount of money cannot be made up by any
 * combination of the coins, return -1.
 * 
 * Example 1:
 * 
 * 
 * Input: coins = [1, 2, 5], amount = 11
 * Output: 3 
 * Explanation: 11 = 5 + 5 + 1
 * 
 * Example 2:
 * 
 * 
 * Input: coins = [2], amount = 3
 * Output: -1
 * 
 * 
 * Note:
 * You may assume that you have an infinite number of each kind of coin.
 * 
 */
/**
 * 思路：
 * 
 * 这是一道动态规划的题目
 * 设 dp[n] 为第价格为 n 的最优组合
 * dp[0] = 0
 * 
 * dp[1] = conins.have(1)? 1 : -1;
 * dp[2] = conins.have(2)? 1 : (conins.have(1) ? 1 + dp[1] : -1)
 * 
 * dp[n] = conins.have(n)? 1 : 
 * 遍历 coins ,dp[n] = Min( 1 + dp[n - conin]),此时dp[n - conin]必须有解才能用无解则不能用
 * n - conin如果 小于0则可以直接判断无解
 * 
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    const dp = [0];
    coins.sort((a, b) => a - b);
    for (let i = 1; i <= amount; i++) {
        for (let j = coins.length - 1; j >=0; j--) {
            const num = i - coins[j];
            if (num === 0) {
                dp[i] = 1;
                j = -1;
                continue;
            }
            if (num > 0 && dp[num] > 0) {
                dp[i] = dp[i] === undefined ? 1 + dp[num] : Math.min(1 + dp[num], dp[i]);
                continue;
            }
        }
        if (dp[i] === undefined) {
            dp[i] = -1;
        }
    }
    return dp[amount];
};

console.log(coinChange([186,419,83,408], 6249));

module.exports = {
    id:'322',
    title:'Coin Change',
    url:'https://leetcode.com/problems/coin-change/description/',
    difficulty:'Medium',
}