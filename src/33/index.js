/**
 * 思路
 * 
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let low = 0;
    let high = nums.length - 1;
    const rotated_index = nums.findIndex((num, index) => {
        return index > 1 && num < nums[index - 1];
    });
    if (nums[rotated_inde] === target) {
        return rotated_index;
    }
    if (nums[rotated_index] > target) {
        return -1;
    }
    

    // while (low < high) {
    //     const middle = Math.floor((high + low) / 2);
    //     if (target === nums[middle]) {
    //         return middle;
    //     }
    // }
    return rotated_index;
};

console.log(search([4,5,6,7,0,1,2], 0));
console.log(search([4,5,6,7,0,1,2], 3));

module.exports = {
    id:'33',
    title:'Search in Rotated Sorted Array',
    url:'https://leetcode.com/problems/search-in-rotated-sorted-array/',
    difficulty:'medium',
};