/*
 * @lc app=leetcode id=628 lang=javascript
 *
 * [628] Maximum Product of Three Numbers
 *
 * https://leetcode.com/problems/maximum-product-of-three-numbers/description/
 *
 * algorithms
 * Easy (45.44%)
 * Total Accepted:    178.8K
 * Total Submissions: 382.9K
 * Testcase Example:  '[1,2,3]'
 *
 * Given an integer array nums, find three numbers whose product is maximum and
 * return the maximum product.
 *
 *
 * Example 1:
 * Input: nums = [1,2,3]
 * Output: 6
 * Example 2:
 * Input: nums = [1,2,3,4]
 * Output: 24
 * Example 3:
 * Input: nums = [-1,-2,-3]
 * Output: -6
 *
 *
 * Constraints:
 *
 *
 * 3 <= nums.length <= 104
 * -1000 <= nums[i] <= 1000
 *
 *
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct1 = function(nums) {
    const length = nums.length;
    if (length === 3) {
        return nums.reduce((res, cur) => cur * res);
    }
    nums.sort((a,b) => a - b);
    return Math.max(nums[length - 3] * nums[length - 2] * nums[length - 1], nums[length - 1] * nums[0] * nums[1]);
};
var maximumProduct = function(nums) {
    let max1 = Number.MIN_SAFE_INTEGER;
    let max2 = Number.MIN_SAFE_INTEGER;
    let max3 = Number.MIN_SAFE_INTEGER;
    let min1 = Number.MAX_SAFE_INTEGER;
    let min2 = Number.MAX_SAFE_INTEGER;
    nums.forEach((num) => {
        if (num > max1) {
            [max2, max3] = [max1, max2]
            max1 = num;
        } else if (num > max2) {
            max3 = max2;
            max2 = num;
        } else if (num > max3) {
            max3 = num;
        }
        if (num < min1) {
            min2 = min1;
            min1 = num;
        } else if (num < min2) {
            min2 = num;
        }
    })
    return Math.max(max3 * max2 * max1, min2 * min1 * max1)
}

console.log('[1,2,3]:', maximumProduct([1, 2, 3]) === 6);
console.log('[1,2,3,4]:', maximumProduct([1, 2, 3,4]) === 24);
console.log('[-1,-2,-3]:', maximumProduct([-1,-2,-3]) === - 6);

module.exports = {
    id:'628',
    title:'Maximum Product of Three Numbers',
    url:'https://leetcode.com/problems/maximum-product-of-three-numbers/description/',
    difficulty:'Easy',
}
