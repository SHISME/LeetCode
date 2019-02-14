/*
 * @lc app=leetcode id=34 lang=javascript
 *
 * [34] Find First and Last Position of Element in Sorted Array
 *
 * https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/description/
 *
 * algorithms
 * Medium (32.84%)
 * Total Accepted:    261.6K
 * Total Submissions: 796.5K
 * Testcase Example:  '[5,7,7,8,8,10]\n8'
 *
 * Given an array of integers nums sorted in ascending order, find the starting
 * and ending position of a given target value.
 * 
 * Your algorithm's runtime complexity must be in the order of O(log n).
 * 
 * If the target is not found in the array, return [-1, -1].
 * 
 * Example 1:
 * 
 * 
 * Input: nums = [5,7,7,8,8,10], target = 8
 * Output: [3,4]
 * 
 * Example 2:
 * 
 * 
 * Input: nums = [5,7,7,8,8,10], target = 6
 * Output: [-1,-1]
 * 
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    const right = foundRightIndex(nums, 0, nums.length - 1, target);
    if (nums[right] !== target) {
        return [-1, -1];
    }
    const left = foundLeftIndex(nums, 0, right, target);
    return [left, right];
    function foundLeftIndex(nums, left, right, target) {
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            if (nums[mid] < target) {
                left = mid + 1;
                continue;
            }
            right = mid - 1;
        }
        return left;
    }

   function foundRightIndex(nums, left, right, target) {
       while (left <= right) {
           const mid = Math.floor((left + right) / 2);
           if (nums[mid] > target) {
               right = mid - 1;
               continue;
           }
           left = mid + 1;
        }
        return left;
    }
};

module.exports = {
    id:'34',
    title:'Find First and Last Position of Element in Sorted Array',
    url:'https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/description/',
    difficulty:'Medium',
}