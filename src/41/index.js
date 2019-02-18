/*
 * @lc app=leetcode id=41 lang=javascript
 *
 * [41] First Missing Positive
 *
 * https://leetcode.com/problems/first-missing-positive/description/
 *
 * algorithms
 * Hard (28.05%)
 * Total Accepted:    188.5K
 * Total Submissions: 671K
 * Testcase Example:  '[1,2,0]'
 *
 * Given an unsorted integer array, find the smallest missing positive
 * integer.
 * 
 * Example 1:
 * 
 * 
 * Input: [1,2,0]
 * Output: 3
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: [3,4,-1,1]
 * Output: 2
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: [7,8,9,11,12]
 * Output: 1
 * 
 * 
 * Note:
 * 
 * Your algorithm should run in O(n) time and uses constant extra space.
 * 
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    let map = {};
    nums.forEach((num) => {
        if (num > 0) {
            map[num] = num;
        }
    });
    for (let i = 1; i <= nums.length; i ++) {
        if (map[i] === undefined) {
            return i;
        }
    }
    return nums.length + 1;
};
console.log(firstMissingPositive([1,2,0]));
console.log(firstMissingPositive([3,4,-1,1]));
console.log(firstMissingPositive([7,8,9,11,12]));

module.exports = {
    id:'41',
    title:'First Missing Positive',
    url:'https://leetcode.com/problems/first-missing-positive/description/',
    difficulty:'Hard',
}