/*
 * @lc app=leetcode id=189 lang=javascript
 *
 * [189] Rotate Array
 *
 * https://leetcode.com/problems/rotate-array/description/
 *
 * algorithms
 * Easy (28.63%)
 * Total Accepted:    264.2K
 * Total Submissions: 917K
 * Testcase Example:  '[1,2,3,4,5,6,7]\n3'
 *
 * Given an array, rotate the array to the right by k steps, where k is
 * non-negative.
 * 
 * Example 1:
 * 
 * 
 * Input: [1,2,3,4,5,6,7] and k = 3
 * Output: [5,6,7,1,2,3,4]
 * Explanation:
 * rotate 1 steps to the right: [7,1,2,3,4,5,6]
 * rotate 2 steps to the right: [6,7,1,2,3,4,5]
 * rotate 3 steps to the right: [5,6,7,1,2,3,4]
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: [-1,-100,3,99] and k = 2
 * Output: [3,99,-1,-100]
 * Explanation: 
 * rotate 1 steps to the right: [99,-1,-100,3]
 * rotate 2 steps to the right: [3,99,-1,-100]
 * 
 * 
 * Note:
 * 
 * 
 * Try to come up as many solutions as you can, there are at least 3 different
 * ways to solve this problem.
 * Could you do it in-place with O(1) extra space?
 * 
 */
/**思路1：
 * 1. 将整个数组调转
 * 2. 现将数组前k个调转
 * 3. 将数组k 之后的调转
 * 
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    k = k % nums.length;
    reverse(0, nums.length - 1);
    reverse(0, k - 1);
    reverse(k, nums.length - 1);
    function reverse(start, end) {
        let left = start;
        let right = end;
        while (left < right) {
            const leftNum = nums[left];
            nums[left] = nums[right];
            nums[right] = leftNum;
            left++;
            right--;
        }
    }
    console.log(nums);
};

console.log(rotate([1,2], 3));
console.log(rotate([1,2,3,4,5,6,7], 3));

/**
 * 思路2：
 * 把最后k个数移除然后插入到数组的前面
 * 
 * @param {*} nums 
 * @param {*} k 
 */
var rotate = function(nums, k) {
    const i = k % nums.length;
    const rightArr = nums.splice(nums.length - i, i);
    for (let j = rightArr.length - 1; j >= 0; j--) {
        nums.unshift(rightArr[j]);
    }
};


module.exports = {
    id:'189',
    title:'Rotate Array',
    url:'https://leetcode.com/problems/rotate-array/description/',
    difficulty:'Easy',
}