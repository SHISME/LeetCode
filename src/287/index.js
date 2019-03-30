/*
 * @lc app=leetcode id=287 lang=javascript
 *
 * [287] Find the Duplicate Number
 *
 * https://leetcode.com/problems/find-the-duplicate-number/description/
 *
 * algorithms
 * Medium (47.97%)
 * Total Accepted:    174.1K
 * Total Submissions: 357.1K
 * Testcase Example:  '[1,3,4,2,2]'
 *
 * Given an array nums containing n + 1 integers where each integer is between
 * 1 and n (inclusive), prove that at least one duplicate number must exist.
 * Assume that there is only one duplicate number, find the duplicate one.
 * 
 * Example 1:
 * 
 * 
 * Input: [1,3,4,2,2]
 * Output: 2
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: [3,1,3,4,2]
 * Output: 3
 * 
 * Note:
 * 
 * 
 * You must not modify the array (assume the array is read only).
 * You must use only constant, O(1) extra space.
 * Your runtime complexity should be less than O(n2).
 * There is only one duplicate number in the array, but it could be repeated
 * more than once.
 * 
 * 
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let fast = nums[nums[0]];
    let slow = nums[0];
    while (fast != slow) {
        fast = nums[nums[fast]];
        slow = nums[slow];
    }
    fast = 0;
    while (fast != slow) {
        fast = nums[fast];
        slow = nums[slow];
    }
    return fast;
};

console.log(findDuplicate([3,1,3,4,2]));
console.log(findDuplicate([1,3,4,2,2]));

module.exports = {
    id:'287',
    title:'Find the Duplicate Number',
    url:'https://leetcode.com/problems/find-the-duplicate-number/description/',
    difficulty:'Medium',
}