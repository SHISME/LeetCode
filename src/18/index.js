/**
 * 思路：
 * 
 * 基本思路和3sum一样
 * 1、先对数组进行排序
 * 2、然后对先固定两个数，剩下两个数和3sum的思路一样，用两个指针向内收缩
 * 
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    if (nums.length < 4) {
        return [];
    }
    nums.sort((a, b) => a - b);
    const result = [];
    const result_map = {};
    nums.forEach((first_num, first_index) => {
        if (first_index > 0 && first_num === nums[first_index - 1]) {
            return;
        }
        
        for (let i = first_index + 1; i < nums.length; i ++) {
            if (i > first_index + 1 && nums[i] === nums[i-1]) {
                continue;
            }
            const target_res = target - first_num - nums[i]
            let left = i + 1;
            let right = nums.length - 1;
            while(left < right) {
                const offset = target_res - nums[left] - nums[right];
                if (offset === 0) {
                    if (!result_map[[first_num, nums[i], nums[left], nums[right]].join('')]) {
                        result.push([first_num, nums[i], nums[left], nums[right]]);
                        result_map[[first_num, nums[i], nums[left], nums[right]].join('')] = true;             
                    }
                    left++;
                    right--;
                    continue;
                }
                if (offset > 0) {
                    left++;
                    continue
                }
                right--;
            }
        }
    });
    return result;
};

console.log('res', fourSum([-1,0,-5,-2,-2,-4,0,1,-2], -9));