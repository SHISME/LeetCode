/**思路：
 * 思路和三数之和基本一致，只是需要把与0的对比，改为与target的对比
 * 
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    if (nums.length < 3) {
        return [];
    }
    let result = [nums[0], nums[1], nums[2]];
    let result_num_distance = Math.abs(nums[0] + nums[1] + nums[2] - target);
    nums.sort((a, b) => a - b);
    nums.forEach((item, index) => {
        let left = index + 1;
        let right = nums.length - 1;
        while (left < right) {
            const current_distance = item + nums[left] + nums[right] - target;
            if (Math.abs(current_distance) < result_num_distance) {
                result = [item, nums[left], nums[right]];
                result_num_distance = Math.abs(current_distance);
            }
            if (current_distance > 0) {
                right --;
                continue;
            }
            if (current_distance < 0) {
                left ++;
                continue;
            }
            result_num_distance = 0;
            left = right + 1;
        }
    });
    return result[0] + result[1] + result[2];
};