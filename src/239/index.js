/**
 * 思路：
 * 维护一个单调递减栈
 * 
 * 从栈底往站顶找到第一个距离当前元素小于k的元素
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    const stack = [];
    const result = [];
    nums.forEach((num, index) => {
        while (stack.length > 0 && nums[stack[stack.length - 1]] < num) {
            stack.pop();
        }
        stack.push(index);
        if (index >= k - 1) {
            for (let i = 0; i < stack.length; i++) {
                if (index - stack[i] <= k - 1) {
                    result.push(nums[stack[i]]);
                    i = stack.length;
                }
            }
        }
    });
    return result;
};

console.log(maxSlidingWindow([1,3,-1,-3,5,3,6,7], 3)); //[3,3,5,5,6,7] 
console.log(maxSlidingWindow([1,3,1,2,0,5], 3)); //[3, 3, 2, 5] 

module.exports = {
    title:'Sliding Window Maximum',
    url:'https://leetcode.com/problems/sliding-window-maximum/',
    id:'239',
    difficulty:'hard',
};