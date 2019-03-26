/*
 * @lc app=leetcode id=55 lang=javascript
 *
 * [55] Jump Game
 *
 * https://leetcode.com/problems/jump-game/description/
 *
 * algorithms
 * Medium (31.12%)
 * Total Accepted:    244.4K
 * Total Submissions: 776.2K
 * Testcase Example:  '[2,3,1,1,4]'
 *
 * Given an array of non-negative integers, you are initially positioned at the
 * first index of the array.
 * 
 * Each element in the array represents your maximum jump length at that
 * position.
 * 
 * Determine if you are able to reach the last index.
 * 
 * Example 1:
 * 
 * 
 * Input: [2,3,1,1,4]
 * Output: true
 * Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last
 * index.
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: [3,2,1,0,4]
 * Output: false
 * Explanation: You will always arrive at index 3 no matter what. Its
 * maximum
 * jump length is 0, which makes it impossible to reach the last index.
 * 
 * 
 */
/**
 * 思路：
 * 反过来分析这道题
 * 我们只需要判断每个位置，前面能不能有人跳到这里，如果有则继续往下找下一个能跳到这里的点，直到找到最后一个
 * 如果最后一个不是第0个则返回false
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let cur = nums.length - 1;
    while (cur > 0) {
        let i = cur - 1;
        for (; i >= 0; i--) {
            if (nums[i] + i >= cur) {
                cur = i;
                break;
            }
        }
        if (i === -1) {
            return false;
        }
    }
    return true;
};

// console.log(canJump([2,3,1,1,4]));
console.log(canJump([3,2,1,0,4]));

module.exports = {
    id:'55',
    title:'Jump Game',
    url:'https://leetcode.com/problems/jump-game/description/',
    difficulty:'Medium',
}