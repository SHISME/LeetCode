/*
 * @lc app=leetcode id=35 lang=javascript
 *
 * [35] Search Insert Position
 *
 * https://leetcode.com/problems/search-insert-position/description/
 *
 * algorithms
 * Easy (40.37%)
 * Total Accepted:    354.3K
 * Total Submissions: 877.7K
 * Testcase Example:  '[1,3,5,6]\n5'
 *
 * Given a sorted array and a target value, return the index if the target is
 * found. If not, return the index where it would be if it were inserted in
 * order.
 * 
 * You may assume no duplicates in the array.
 * 
 * Example 1:
 * 
 * 
 * Input: [1,3,5,6], 5
 * Output: 2
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: [1,3,5,6], 2
 * Output: 1
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: [1,3,5,6], 7
 * Output: 4
 * 
 * 
 * Example 4:
 * 
 * 
 * Input: [1,3,5,6], 0
 * Output: 0
 * 
 * 
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    let cur;
    while (left < right) {
        cur = Math.ceil((left + right)/2)
        if (nums[cur] === target) {
            return cur;
        }
        if (nums[cur] > target) {
            right = cur - 1;
            continue;
        }
        left = cur + 1;
    }
    if (nums[left] === target) {
        return left;
    }
    if (nums[left] > target) {
        return left;
    }
    return right + 1;
};

console.log(searchInsert([1,3,5,6], 0), searchInsert([1,3,5,6], 0) === 0);
console.log(searchInsert([1,3,5,6], 5) === 2);
console.log(searchInsert([1,3,5,6], 2) === 1);
console.log(searchInsert([1,3,5,6], 7) === 4);
console.log(searchInsert([1,3,5,6], 0) === 0);
console.log(searchInsert([1,3], 0) === 0);
console.log(searchInsert([1,3], 4) === 2);

module.exports = {
    id:'35',
    title:'Search Insert Position',
    url:'https://leetcode.com/problems/search-insert-position/description/',
    difficulty:'Easy',
}