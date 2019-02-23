/*
 * @lc app=leetcode id=416 lang=javascript
 *
 * [416] Partition Equal Subset Sum
 *
 * https://leetcode.com/problems/partition-equal-subset-sum/description/
 *
 * algorithms
 * Medium (39.65%)
 * Total Accepted:    73.3K
 * Total Submissions: 184.3K
 * Testcase Example:  '[1,5,11,5]'
 *
 * Given a non-empty array containing only positive integers, find if the array
 * can be partitioned into two subsets such that the sum of elements in both
 * subsets is equal.
 * 
 * 
 * Note:
 * 
 * Each of the array element will not exceed 100.
 * The array size will not exceed 200.
 * 
 * 
 * 
 * Example 1:
 * 
 * Input: [1, 5, 11, 5]
 * 
 * Output: true
 * 
 * Explanation: The array can be partitioned as [1, 5, 5] and [11].
 * 
 * 
 * 
 * Example 2:
 * 
 * Input: [1, 2, 3, 5]
 * 
 * Output: false
 * 
 * Explanation: The array cannot be partitioned into equal sum subsets.
 * 
 * 
 */
/**
 * 思路：
 * 
 * 1. 如果给的数组不是偶数则可以直接确定无法分组
 * 2. 从微观上来看这个问题，每个数我们只能选择用或者不用
 * 
 * 设dp[i][j]为前i个数能否组成大小为j的数
 * dp[0][0] = true
 * j > 0, dp[0][j] = false
 * dp[i][0] = true
 * 
 * i > 0 && j > 0 时
 * 面对 dp[i][j] 我们可以这样思考，第 i 个数我们可以选择用或者不用
 * 如果我们选择用则 dp[i][j] = dp[i - 1][j - nums[i]];
 * 如果我们选择不用则 dp[i][j] = dp[i - 1][j]
 * 只要两个条件满足一个的时候我们就可以确定dp[i][j]为 true 了
 * 
 * 
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    const total = nums.reduce((res, cur) => res + cur);
    const half_num = Math.floor(total / 2);
    if (half_num * 2 !== total) {
        return false;
    }
    const dp = nums.map((item, index) => {
        if (index === 0) {
            return Array.from({length:half_num}).map(() => false);
        }
        return [true];
    });
    dp[0][0] = true;
    for (let i = 1; i < nums.length; i++) {
        for (let j = 1; j <= half_num; j++) {
            dp[i][j] = dp[i - 1][j] || ((j - nums[i]) >= 0 && dp[i - 1][j - nums[i]]);
        }
    }
    return dp.pop().pop();
};
console.log(canPartition([1,5,11,5]));
console.log(canPartition([1, 2, 3, 5]));

module.exports = {
    id:'416',
    title:'Partition Equal Subset Sum',
    url:'https://leetcode.com/problems/partition-equal-subset-sum/description/',
    difficulty:'Medium',
}