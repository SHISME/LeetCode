/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        const mid_num = nums[mid];
        if (mid_num === target) {
            return mid;
        }
        if (mid_num > target) {
            right = mid - 1;
            continue;
        }
        left = mid + 1;
    }
    return -1;
};
let nums = [-1,0,3,5,9,12],target = 9;
console.log(search(nums, target));
nums = [-1,0,3,5,9,12], target = 2;
console.log(search(nums, target));

module.exports = {
    id:'704',
    title:'Binary Search',
    url:'https://leetcode.com/problems/binary-search/',
    difficulty:'easy',
};