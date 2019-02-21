/*
 * @lc app=leetcode id=279 lang=javascript
 *
 * [279] Perfect Squares
 *
 * https://leetcode.com/problems/perfect-squares/description/
 *
 * algorithms
 * Medium (40.39%)
 * Total Accepted:    160.5K
 * Total Submissions: 395.2K
 * Testcase Example:  '12'
 *
 * Given a positive integer n, find the least number of perfect square numbers
 * (for example, 1, 4, 9, 16, ...) which sum to n.
 * 
 * Example 1:
 * 
 * 
 * Input: n = 12
 * Output: 3 
 * Explanation: 12 = 4 + 4 + 4.
 * 
 * Example 2:
 * 
 * 
 * Input: n = 13
 * Output: 2
 * Explanation: 13 = 4 + 9.
 */
/**
 * 思路：
 * 
 * 动态规划
 * 
 * 我们设dp[n] 为n的最优解
 * 
 * dp[1] = 1
 * dp[2] = dp[1] + dp[1]
 * dp[3] = dp[2] + dp[1]
 * dp[4] = 1
 * dp[5] = Min(dp[4] + dp[1], dp[3] + dp[2]) = 2
 * 
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
    const dp = [0, 1];
    let i = 2;
    while (i <= n) {
        const sqr = Math.floor(Math.sqrt(i));
        if (sqr * sqr === i) {
            dp[i] = 1;
            i++;
            continue;
        }
        let cur_result = dp[1] + dp[i - 1];
        for (let j = 2; j <= i / 2; j++) { 
            cur_result = Math.min(cur_result, dp[j] + dp[i - j]);
        }
        dp[i] = cur_result;
        i++;
    }
    return dp.pop();
};

console.log(numSquares(12));

module.exports = {
    id:'279',
    title:'Perfect Squares',
    url:'https://leetcode.com/problems/perfect-squares/description/',
    difficulty:'Medium',
}