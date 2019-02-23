/*
 * @lc app=leetcode id=518 lang=javascript
 *
 * [518] Coin Change 2
 *
 * https://leetcode.com/problems/coin-change-2/description/
 *
 * algorithms
 * Medium (40.98%)
 * Total Accepted:    35.6K
 * Total Submissions: 86.3K
 * Testcase Example:  '5\n[1,2,5]'
 *
 * You are given coins of different denominations and a total amount of money.
 * Write a function to compute the number of combinations that make up that
 * amount. You may assume that you have infinite number of each kind of
 * coin.
 * 
 * 
 * 
 * 
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: amount = 5, coins = [1, 2, 5]
 * Output: 4
 * Explanation: there are four ways to make up the amount:
 * 5=5
 * 5=2+2+1
 * 5=2+1+1+1
 * 5=1+1+1+1+1
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: amount = 3, coins = [2]
 * Output: 0
 * Explanation: the amount of 3 cannot be made up just with coins of 2.
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: amount = 10, coins = [10] 
 * Output: 1
 * 
 * 
 * 
 * 
 * Note:
 * 
 * You can assume that
 * 
 * 
 * 0 <= amount <= 5000
 * 1 <= coin <= 5000
 * the number of coins is less than 500
 * the answer is guaranteed to fit into signed 32-bit integer
 * 
 * 
 */
/**
 * 思路：
 * 
 * 我们设dp[i][j] 为用前 i 种coin 达到 j 的最大组合数
 * 
 * dp[0][0] = 1
 * 
 * 对于 dp[i][j]
 * 
 * 我们上一个状态可能是两种状态使用第i种 coin或者不使用第i种coin
 * 
 * dp[i][j] 等于这两种状态之和
 * 
 * 不使用第 i 种coin的次数是 dp[i-1][j]
 * 使用第 i 种coin的次数是 dp[i][j - coin[i]] 此时 j >= coin[i]
 * 
 * dp[i][j] = dp[i-1][j] + j >= coin[i] ? dp[i][j - coin[i]] : 0
 * 
 * 
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function(amount, coins) {
    const dp = coins.map((item, index) => {
        if (index === 0) {
            return Array.from({length:amount + 1}).map(() => 0);
        }
        return [1];
    });
    dp.push([1]);
    dp[0][0] = 1;
    for (let i = 1; i <= coins.length; i++) {
        for (let j = 1; j <= amount; j++) {
            dp[i][j] = dp[i - 1][j] + (j >= coins[i - 1] ? dp[i][j - coins[i - 1]] : 0);
        }
    }
    console.log(dp);
};
/**
 * 
 * 优化：
 * 
 * 其实我们并不需要记录所有的状态，
 * 我们只需要记录每增加一枚硬币带来的改变
 * 
 * 以 amount = 5，coins = [1,2,5] 为例
 * 我们一种类型的coin都不用的时候，价格从0~5的次数依次为
 * 1 0 0 0 0 0
 * 当我们使用 coin 1 的时候，所有amout >= 1 的结果都会被改变
 * 1 1 1 1 1 1
 * 当我们使用 coin 2 的时候，所有 amount >= 2 的结果都会被改变
 * 1 1 2 2 3 3
 * 当我们使用 coin 5 的时候，所有 amount >= 5 的结果都会被改变
 * 1 1 2 2 3 4
 * 
 * 我们可以用 dp[n] 来记录每用一种类型带来的改变
 * dp[0] = 1
 * 
 * 假设当前我们要确定使用第j种coin带来的影响，
 * 我们已经知道了不使用第j种coin的次数为dp[n],此时dp[n]之前的结果都为使用第j种coin的结果
 * 根据上面的公式我们知道，当前的dp[n]只需加上使用第j中coin的次数即为结果，即加上dp[n -coin[j]]
 * 
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function(amount, coins) {
    const dp = Array.from({length:amount + 1}).map(() => 0);
    dp[0] = 1;
    for (let i = 0; i < coins.length; i++) {
        for (let j = coins[i]; j <= amount; j++) {
            dp[j] += dp[j - coins[i]];
        }
    }
    return dp[amount];
};
console.log(change(4, [1,2,5]));

module.exports = {
    id:'518',
    title:'Coin Change 2',
    url:'https://leetcode.com/problems/coin-change-2/description/',
    difficulty:'Medium',
}