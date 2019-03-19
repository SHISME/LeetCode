/*
 * @lc app=leetcode id=53 lang=javascript
 *
 * [53] Maximum Subarray
 *
 * https://leetcode.com/problems/maximum-subarray/description/
 *
 * algorithms
 * Easy (42.56%)
 * Total Accepted:    479.7K
 * Total Submissions: 1.1M
 * Testcase Example:  '[-2,1,-3,4,-1,2,1,-5,4]'
 *
 * Given an integer array nums, find the contiguous subarray (containing at
 * least one number) which has the largest sum and return its sum.
 * 
 * Example:
 * 
 * 
 * Input: [-2,1,-3,4,-1,2,1,-5,4],
 * Output: 6
 * Explanation: [4,-1,2,1] has the largest sum = 6.
 * 
 * 
 * Follow up:
 * 
 * If you have figured out the O(n) solution, try coding another solution using
 * the divide and conquer approach, which is more subtle.
 * 
 */
/**
 * 思路：
 * 
 * 设dp[n] 为包含第n个的最优解
 * dp[0] = 0
 * dp[1] = nums[0] > 0 ? nums[0] : 0
 * 
 * 对于每个数我们可以选择加或者不加前一项
 * 当我们选择添加的时候
 * dp[i] = dp[i - 1] + nums[i - 1]
 * 当我们选择不添加的时候
 * dp[i] = nums[i - 1]
 * 
 * dp[i] 为两种情况最优的情况
 * 
 * 最终的结果为所有dp中最优的情况
 * 
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    const dp = [0];
    dp[1] = nums[0];
    let result = dp[1];
    for (let i = 1; i < nums.length; i++) {
        dp[i + 1] = Math.max(dp[i], 0) + nums[i];
        result = Math.max(result, dp[i + 1]) ;
    }
    return result;
};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));
console.log(maxSubArray([-2, 1]));

module.exports = {
    id:'53',
    title:'Maximum Subarray',
    url:'https://leetcode.com/problems/maximum-subarray/description/',
    difficulty:'Easy',
}