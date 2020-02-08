/*
 * @lc app=leetcode id=63 lang=javascript
 *
 * [63] Unique Paths II
 *
 * https://leetcode.com/problems/unique-paths-ii/description/
 *
 * algorithms
 * Medium (33.22%)
 * Total Accepted:    254.5K
 * Total Submissions: 750.7K
 * Testcase Example:  '[[0,0,0],[0,1,0],[0,0,0]]'
 *
 * A robot is located at the top-left corner of a m x n grid (marked 'Start' in
 * the diagram below).
 * 
 * The robot can only move either down or right at any point in time. The robot
 * is trying to reach the bottom-right corner of the grid (marked 'Finish' in
 * the diagram below).
 * 
 * Now consider if some obstacles are added to the grids. How many unique paths
 * would there be?
 * 
 * 
 * 
 * An obstacle and empty space is marked as 1 and 0 respectively in the grid.
 * 
 * Note: m and n will be at most 100.
 * 
 * Example 1:
 * 
 * 
 * Input:
 * [
 * [0,0,0],
 * [0,1,0],
 * [0,0,0]
 * ]
 * Output: 2
 * Explanation:
 * There is one obstacle in the middle of the 3x3 grid above.
 * There are two ways to reach the bottom-right corner:
 * 1. Right -> Right -> Down -> Down
 * 2. Down -> Down -> Right -> Right
 * 
 * 
 */
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    if (obstacleGrid[0][0]) {
        return 0;
    }
    const dp = [];
    obstacleGrid.forEach((row, index) => {
        if (index === 0) {
            dp[index] = [1]
            return;
        }
        if (row[0] || dp[index - 1][0] === 0) {
            dp[index] = [0];
            return;
        }
        dp[index] = [1];
    });
    obstacleGrid[0].forEach((item, index) => {
        if (index === 0) {
            return;
        }
        if (item === 1 || dp[0][index - 1] === 0) {
            dp[0][index] = 0;
            return;
        }
        dp[0][index] = 1;
    });
    for (let i = 1; i < obstacleGrid.length; i++) {
        for (let j = 1; j < obstacleGrid[i].length; j++) {
            if (obstacleGrid[i][j] === 1) {
                dp[i][j] = 0;
            } else {
                dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
            }
        }
    }
    return dp.pop().pop();
};

console.log(uniquePathsWithObstacles([[0,0],[1,1],[0,0]]))

module.exports = {
    id:'63',
    title:'Unique Paths II',
    url:'https://leetcode.com/problems/unique-paths-ii/description/',
    difficulty:'Medium',
}