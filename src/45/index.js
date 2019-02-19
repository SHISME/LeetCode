/*
 * @lc app=leetcode id=45 lang=javascript
 *
 * [45] Jump Game II
 *
 * https://leetcode.com/problems/jump-game-ii/description/
 *
 * algorithms
 * Hard (27.21%)
 * Total Accepted:    152.2K
 * Total Submissions: 557.5K
 * Testcase Example:  '[2,3,1,1,4]'
 *
 * Given an array of non-negative integers, you are initially positioned at the
 * first index of the array.
 * 
 * Each element in the array represents your maximum jump length at that
 * position.
 * 
 * Your goal is to reach the last index in the minimum number of jumps.
 * 
 * Example:
 * 
 * 
 * Input: [2,3,1,1,4]
 * Output: 2
 * Explanation: The minimum number of jumps to reach the last index is 2.
 * ⁠   Jump 1 step from index 0 to 1, then 3 steps to the last index.
 * 
 * Note:
 * 
 * You can assume that you can always reach the last index.
 * 
 */
/**
 * 思路：
 * 
 * 这题可以用动态规划的思想,设 dp[n] 为跳到第n格的最优解, 0<= n < nums.length
 * 根据题目，我们可以知道dp[n] >= dp[n-1]
 * 显然 dp[0] = 0
 * dp[1] = 1
 * dp[2] = nums[0] >= 2 ? 1 : (dp[1] + 1)
 * dp[3] = nums[0] >= 3 ? 1 : (nums[1] >= 2 ? dp[1] + 1 : dp[2] + 1)
 * ...
 * dp[n] = nums[0] >= n ? 1 : (nums[1] >= n - 1 ? dp[1] + 1 : (nums[2] >= n - 2 ? dp[2] + 1 ....) )
 * 
 * =>
 * 
 * dp[n] = min(nums[i] >= n - i ? 1 + dp[i]), 0<= i < n,
 * 
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    const dp = [0, 1];
    for (let i = 2; i < nums.length; i++) {
        dp[i] = dfs(i);
    }
    function dfs(n) {
        for (let j = 0; j < n; j++) {
            if (nums[j] >= n - j) {
               return dp[j] + 1;
            }
        }
    }
    return dp[nums.length - 1];
};

console.log(jump([2,3,1,1,4]));

module.exports = {
    id:'45',
    title:'Jump Game II',
    url:'https://leetcode.com/problems/jump-game-ii/description/',
    difficulty:'Hard',
}