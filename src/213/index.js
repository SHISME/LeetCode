/*
 * @lc app=leetcode id=213 lang=javascript
 *
 * [213] House Robber II
 *
 * https://leetcode.com/problems/house-robber-ii/description/
 *
 * algorithms
 * Medium (35.02%)
 * Total Accepted:    108.1K
 * Total Submissions: 307.8K
 * Testcase Example:  '[2,3,2]'
 *
 * You are a professional robber planning to rob houses along a street. Each
 * house has a certain amount of money stashed. All houses at this place are
 * arranged in a circle. That means the first house is the neighbor of the last
 * one. Meanwhile, adjacent houses have security system connected and it will
 * automatically contact the police if two adjacent houses were broken into on
 * the same night.
 * 
 * Given a list of non-negative integers representing the amount of money of
 * each house, determine the maximum amount of money you can rob tonight
 * without alerting the police.
 * 
 * Example 1:
 * 
 * 
 * Input: [2,3,2]
 * Output: 3
 * Explanation: You cannot rob house 1 (money = 2) and then rob house 3 (money
 * = 2),
 * because they are adjacent houses.
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: [1,2,3,1]
 * Output: 4
 * Explanation: Rob house 1 (money = 1) and then rob house 3 (money =
 * 3).
 * Total amount you can rob = 1 + 3 = 4.
 * 
 */
/**思路：
 * 用动态规划的思路，但是这里有个问题是第一家和最后一家不能同时偷，这对我们找动态方程式有影响的
 * 我们可以设置两个动态数组，dp1[i]为偷第一家，dp2[i]为不偷第一家
 * dp1[i] = 我们可以在2 ~ nums.length - 2家偷
 * dp2[i] = 我们可以在1 ~ nums.length - 1偷
 * 
 * 在dp1[i]中，我们在2 ~ nums.length - 2家可以选择偷和不偷
 * 如果对i我们选择偷 dp[i] = dp[i - 2] + nums[i]
 * 如果不偷 dp[i] = dp[i - 1]
 * dp2[i]同理
 * 
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if (!nums || nums.length === 0) {
        return 0;
    }
    if (nums.length === 1) {
        return nums[0];
    }
    const dp1 = [nums[0], nums[0]];
    for (let i = 2; i <= nums.length - 2; i++) {
        dp1[i] = Math.max(dp1[i - 1], dp1[i - 2] + nums[i]);
    }
    const dp2 = [0, nums[1]];
    for (let i = 2; i <= nums.length - 1; i++) {
        dp2[i] = Math.max(dp2[i - 1], dp2[i - 2] + nums[i]);
    }
    return Math.max(dp1.pop(), dp2.pop());
};

console.log(rob([1,2,3,1]));
console.log(rob([1,2,3,1,1]));
console.log(rob([2, 3]));

module.exports = {
    id:'213',
    title:'House Robber II',
    url:'https://leetcode.com/problems/house-robber-ii/description/',
    difficulty:'Medium',
}