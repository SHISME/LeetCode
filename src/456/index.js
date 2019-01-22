/**
 * 思路：
 * 
 * 1.维护一个单调递增栈，用于找到比前面大比后面小的数，
 * 2.找到之后，查找这个数之后的元素是否纯在比栈中最小元素大并且比这个数小的数
 * 3.如果存在则返回true，不存在则继续找下一个数
 * 
 * @param {number[]} nums
 * @return {boolean}
 */
var find132pattern = function(nums) {
    if (nums.length < 3) {
        return false;
    }
    const stack = [];
    for (let i = 0; i < nums.length; i++) {
        const current_num = nums[i];
        const stack_head_num = stack[stack.length - 1];
        if (stack.length === 0 || stack_head_num < current_num) {
            stack.push(current_num);
        } else {
            const max_num = stack.pop();
            if (stack.length > 0) {
                const stack_min_num = stack[0];
                let j = i;
                while (j < nums.length) {
                    if (stack_min_num < nums[j] && nums[j] < max_num) {
                        return true;
                    }
                    j++;
                }
            }
            i--;
        }
    }
    return false;
};

console.log(find132pattern([3,5,0,3,4]));
console.log(find132pattern([1,0,1,-4,-3]));
console.log(find132pattern([3,1,4,2]));


module.exports = {
    id:'456',
    title:'132 Pattern',
    url:'https://leetcode.com/problems/132-pattern/',
    difficulty:'medium',
};