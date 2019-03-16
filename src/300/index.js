/*
 * @lc app=leetcode id=300 lang=javascript
 *
 * [300] Longest Increasing Subsequence
 *
 * https://leetcode.com/problems/longest-increasing-subsequence/description/
 *
 * algorithms
 * Medium (40.08%)
 * Total Accepted:    200.7K
 * Total Submissions: 498K
 * Testcase Example:  '[10,9,2,5,3,7,101,18]'
 *
 * Given an unsorted array of integers, find the length of longest increasing
 * subsequence.
 * 
 * Example:
 * 
 * 
 * Input: [10,9,2,5,3,7,101,18]
 * Output: 4 
 * Explanation: The longest increasing subsequence is [2,3,7,101], therefore
 * the length is 4. 
 * 
 * Note: 
 * 
 * 
 * There may be more than one LIS combination, it is only necessary for you to
 * return the length.
 * Your algorithm should run in O(n2) complexity.
 * 
 * 
 * Follow up: Could you improve it to O(n log n) time complexity?
 * 
 */
/**
 * 思路：
 * 
 * 用 dp[i] 记录index 为 i 时的最优情况和最优情况时的最大值
 * 对于[10,9,2,5,3,7,101,18]
 * dp[0] = 1;
 * dp[1] = 1
 * dp[2] = 1
 * 我们dp[i]时，i可能强上到任何一个位置，我们向后遍历找到最优的位置
 * 
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    const dp = [1];
    let result = 1;
    for (let i = 1; i < nums.length; i++) {
        dp[i] = 1;
        for (let j = i - 1; j>=0; j--) {
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[j] + 1, dp[i]);
            }
        }
        result = Math.max(result, dp[i]);
    }
    return result;
};

console.log(lengthOfLIS([10,9,2,5,3,7,101,18]));

module.exports = {
    id:'300',
    title:'Longest Increasing Subsequence',
    url:'https://leetcode.com/problems/longest-increasing-subsequence/description/',
    difficulty:'Medium',
}