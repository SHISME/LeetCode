/**
 * 思路：
 * 1、这里我们其实只用遍历有限的几个面积就可以了
 * 2、将指针从两边往内收，面积等于min_height * width，指针向内收的时候，width一定会减小，所以只有 min_height 增大才有可能让面积增大
 * 3、max_height 和 min_height 如果 max_height 改变是无法让面积变大的，所以只能让min_height 改变
 * 4、指针朝较小的那一边去移动，直到指针指向同一个地方
 */

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0;
    let right = height.length - 1;
    let result = 0;
    while (left < right) {
        const width = right - left;
        let min_height = 0;
        let area = 0;
        if (height[left] > height[right]) {
            min_height = height[right];
            right --;
        } else {
            min_height = height[left];
            left ++;
        }
        area = min_height * width;
        if (area > result) {
            result = area;
        }
    }
    return result;
};