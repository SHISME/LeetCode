// 基本思想：通过一个 hash 表记录 nums 中的数字
// 然后遍历数组，target - current_num 可以得到需要的数字，查看hash表中是否有该数字，有则返回对应的index
var twoSum = function(nums, target) {
    const nums_map = {};
    nums.forEach((num, index) => {
        nums_map[num] = index;
    });
    for (let i = 0; i< nums.length; i++) {
        const other_num = target - nums[i];
        if (typeof nums_map[other_num] === 'number' && i !=nums_map[other_num] ) {
            return [i, nums_map[other_num]];
        }
    }
};