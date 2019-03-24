/*
 * @lc app=leetcode id=312 lang=javascript
 *
 * [312] Burst Balloons
 *
 * https://leetcode.com/problems/burst-balloons/description/
 *
 * algorithms
 * Hard (46.02%)
 * Total Accepted:    58.7K
 * Total Submissions: 126.1K
 * Testcase Example:  '[3,1,5,8]'
 *
 * Given n balloons, indexed from 0 to n-1. Each balloon is painted with a
 * number on it represented by array nums. You are asked to burst all the
 * balloons. If the you burst balloon i you will get nums[left] * nums[i] *
 * nums[right] coins. Here left and right are adjacent indices of i. After the
 * burst, the left and right then becomes adjacent.
 * 
 * Find the maximum coins you can collect by bursting the balloons wisely.
 * 
 * Note:
 * 
 * 
 * You may imagine nums[-1] = nums[n] = 1. They are not real therefore you can
 * not burst them.
 * 0 ≤ n ≤ 500, 0 ≤ nums[i] ≤ 100
 * 
 * 
 * Example:
 * 
 * 
 * Input: [3,1,5,8]
 * Output: 167 
 * Explanation: nums = [3,1,5,8] --> [3,5,8] -->   [3,8]   -->  [8]  -->
 * []
 * coins =  3*1*5      +  3*5*8    +  1*3*8      + 1*8*1   = 167
 * 
 */
/**
 * 思路：
 * 设dp[i][j]为我们从i到j打破气球能得到的最大值
 * 对于dp[i][j] 我们要选择找到最后一个打破气球的位置，假设为k
 * dp[i][j] = Max(dp[i][k - 1] + dp[k+1][j] + nums[k] * nums[i-1] * nums[j + 1]), i<=k<=j
 * 比方我们要求dp[1][3]
 * k = 1,dp[1][3] = dp[1][0] + dp[2][3] + nums[1] * nums[0] * nums[4]
 * k = 2,dp[1][3] = dp[1][1] + dp[3][3] + nums[2] * nums[0] * nums[4]
 * k = 3,dp[1][3] = dp[1][2] + dp[4][3] + nums[3] * nums[0] * nums[4]
 * 我们要求dp[1][3] 就必须先知道dp[1][1],dp[1][2],dp[2][2],dp[2][3]
 * 我们从0道j-i长度打破的值才能知道dp[i][j]的值
 * 
 * 
 * @param {number[]} nums
 * @return {number}
 */
var maxCoins = function(nums) {
    const length = nums.length;
    nums.push(1);
    nums.unshift(1);
    const dp = nums.map((item, index) => {
        return nums.map(() => 0);
    });
    for (let l = 1; l <= length; l++) {
        for (let i = 1; i <= (length - l + 1); i++) {
            let j = i + l - 1;
            for (let k = i; k <= j; k++) {
                dp[i][j] = Math.max(dp[i][j], dp[i][k - 1] + nums[i-1] * nums[k] * nums[j+1] + dp[k+1][j]);
            }

        }
    }
    return dp[1][length];
};

console.log(maxCoins([3,1,5,8]));

module.exports = {
    id:'312',
    title:'Burst Balloons',
    url:'https://leetcode.com/problems/burst-balloons/description/',
    difficulty:'Hard',
}