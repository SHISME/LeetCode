/*
 * @lc app=leetcode id=75 lang=javascript
 *
 * [75] Sort Colors
 *
 * https://leetcode.com/problems/sort-colors/description/
 *
 * algorithms
 * Medium (41.11%)
 * Total Accepted:    298.9K
 * Total Submissions: 719.6K
 * Testcase Example:  '[2,0,2,1,1,0]'
 *
 * Given an array with n objects colored red, white or blue, sort them in-place
 * so that objects of the same color are adjacent, with the colors in the order
 * red, white and blue.
 * 
 * Here, we will use the integers 0, 1, and 2 to represent the color red,
 * white, and blue respectively.
 * 
 * Note: You are not suppose to use the library's sort function for this
 * problem.
 * 
 * Example:
 * 
 * 
 * Input: [2,0,2,1,1,0]
 * Output: [0,0,1,1,2,2]
 * 
 * Follow up:
 * 
 * 
 * A rather straight forward solution is a two-pass algorithm using counting
 * sort.
 * First, iterate the array counting number of 0's, 1's, and 2's, then
 * overwrite array with total number of 0's, then 1's and followed by 2's.
 * Could you come up with a one-pass algorithm using only constant space?
 * 
 * 
 */
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let index0 = 0;
    let index1 = 0;
    let index2 = 0;
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if (num === 0) {
            nums.splice(index0, 0, nums.splice(i, 1)[0]);
            index0++;
            index1++;
            index2++;
            continue;
        }
        if (num === 1) {
            nums.splice(index1, 0, nums.splice(i, 1)[0]);
            index1++;
            index2++;
            continue;
        }
        nums.splice(index2, 0, nums.splice(i, 1)[0]);
        index2++;
    }
};

sortColors([2,0,2,1,1,0]);

module.exports = {
    id:'75',
    title:'Sort Colors',
    url:'https://leetcode.com/problems/sort-colors/description/',
    difficulty:'Medium',
}