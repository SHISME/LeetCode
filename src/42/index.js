/*
 * @lc app=leetcode id=42 lang=javascript
 *
 * [42] Trapping Rain Water
 *
 * https://leetcode.com/problems/trapping-rain-water/description/
 *
 * algorithms
 * Hard (41.49%)
 * Total Accepted:    252.3K
 * Total Submissions: 605.7K
 * Testcase Example:  '[0,1,0,2,1,0,1,3,2,1,2,1]'
 *
 * Given n non-negative integers representing an elevation map where the width
 * of each bar is 1, compute how much water it is able to trap after raining.
 * 
 * 
 * The above elevation map is represented by array [0,1,0,2,1,0,1,3,2,1,2,1].
 * In this case, 6 units of rain water (blue section) are being trapped. Thanks
 * Marcos for contributing this image!
 * 
 * Example:
 * 
 * 
 * Input: [0,1,0,2,1,0,1,3,2,1,2,1]
 * Output: 6
 * 
 */
/**
 * 
 * 每一个点位要想能够积水就需要找到其左右两边的最大值，取左右两边的最大值的较小值为高度，如果这个高度比当前点位要高则可以积水
 * 如果比当前点位要低则不能积水
 * 
 * 分别从左到右和从右到左来找到每个点位的左右最大值
 * 
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    const right = [];
    const left = [0];
    let maxLeft = 0;
    for (let i = 1;i < height.length; i++) {
        maxLeft = Math.max(height[i - 1], maxLeft);
        left[i] = maxLeft;
    }
    let maxRight = height[height.length - 1];
    for (let i = height.length - 1; i > 0; i--) {
        maxRight = Math.max(maxRight, height[i]);
        right[i] = maxRight;
    }
    let result = 0;
    for (let i = 1; i < height.length - 1; i++) {
        const curHeight = height[i];
        const minHeight = Math.min(left[i], right[i]);
        if (minHeight > curHeight) {
            result += minHeight - curHeight;
        }
    }
    return result;
};

// console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]));
console.log(trap([2,0,2]));

module.exports = {
    id:'42',
    title:'Trapping Rain Water',
    url:'https://leetcode.com/problems/trapping-rain-water/description/',
    difficulty:'Hard',
}