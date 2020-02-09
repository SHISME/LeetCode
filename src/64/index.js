/*
 * @lc app=leetcode id=64 lang=javascript
 *
 * [64] Minimum Path Sum
 *
 * https://leetcode.com/problems/minimum-path-sum/description/
 *
 * algorithms
 * Medium (45.20%)
 * Total Accepted:    305.4K
 * Total Submissions: 602.5K
 * Testcase Example:  '[[1,3,1],[1,5,1],[4,2,1]]'
 *
 * Given a m x n grid filled with non-negative numbers, find a path from top
 * left to bottom right which minimizes the sum of all numbers along its path.
 * 
 * Note: You can only move either down or right at any point in time.
 * 
 * Example:
 * 
 * 
 * Input:
 * [
 * [1,3,1],
 * ⁠ [1,5,1],
 * ⁠ [4,2,1]
 * ]
 * Output: 7
 * Explanation: Because the path 1→3→1→1→1 minimizes the sum.
 * 
 * 
 */
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    const dp = [];
    grid.forEach((row, index) => {
        if (index === 0) {
            row.forEach((item, index) => {
                if (index === 0) {
                    dp[0] = [item];
                } else {
                    dp[0][index] = dp[0][index - 1] + item;
                }
            })
        } else {
            dp[index] = [dp[index - 1][0] + row[0]];
        }
    });
    for (let i = 1; i < grid.length; i++) {
        for (let j = 1; j < grid[i].length; j++) {
            dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j];
        }
    }
    return dp.pop().pop();
};

console.log(minPathSum([
  [1,3,1],
  [1,5,1],
  [4,2,1]
]))

module.exports = {
    id:'64',
    title:'Minimum Path Sum',
    url:'https://leetcode.com/problems/minimum-path-sum/description/',
    difficulty:'Medium',
}