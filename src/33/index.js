/**
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    function binarySearch(left, right) {
        while (left <= right) {
            mid = Math.floor((left + right) / 2);
            if (nums[mid] === target) {
                return mid;
            }
            if (nums[mid] > target) {
                right = mid - 1;
                continue;
            }
            left = mid + 1;
        }
        return -1;
    }
    let rotated_index = nums.findIndex((num, index) => {
        return index >= 1 && num < nums[index - 1];
    });
    if (rotated_index === -1) {
        rotated_index = 0;
    }
    let result = binarySearch(0, rotated_index - 1);
    if (result === -1) {
        result = binarySearch(rotated_index, nums.length - 1);
    }
    return result;
};

var search2 = function(nums, target) {
    let left = 0;
    let right = nums.length - 1
    while (left <= right) {
        const midIndex = Math.floor((left + right) / 2)
        const mid = nums[midIndex]
        if (mid === target) return midIndex
        if (mid >= nums[left]) {
            if (nums[left] <= target && target < mid) {
                right = midIndex - 1
            } else {
                left = midIndex + 1
            }
        } else {
            if (nums[right] >= target && mid < target) {
                left = midIndex + 1
            } else {
                right = midIndex - 1
            }
        }
    }
    return -1
}

console.log(search([1,3,5], 5));
console.log(search([4,5,6,7,0,1,2], 0));
console.log(search([3,1], 1));
console.log(search([1,3], 1));
console.log(search([4,5,6,7,0,1,2], 3));

module.exports = {
    id:'33',
    title:'Search in Rotated Sorted Array',
    url:'https://leetcode.com/problems/search-in-rotated-sorted-array/',
    difficulty:'medium',
};
