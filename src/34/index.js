/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    const targetIndex = foundTargetIndex(nums, target);
    if (targetIndex === -1) {
        return [-1, -1];
    }
    let left = targetIndex;
    let right = targetIndex;
    while (nums[left - 1] === target) {
        left--;
    }
    while (nums[right + 1] === target) {
        right++;
    }
    return [left, right];
    function foundTargetIndex(nums, target) {
        let left = 0;
        let right = nums.length - 1;
        while (left <= right) {
            const middle = Math.floor((left + right) / 2);
            if (nums[middle] > target) {
                right = middle - 1;
                continue;
            }
            if (nums[middle] < target) {
                left = middle + 1;
                continue;
            }
            return middle;
        }
        return -1;
    }
};

console.log(searchRange([5,7,7,8,8,10], 8));//[3,4]
console.log(searchRange([5,7,7,8,8,10], 6));//[-1,-1]