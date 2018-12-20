/**
 * 思路：
 * 
 * 首先我们要判断三个数能否组成三角形，三个数能组成三角形的条件是，任意两边之和要大于第三边
 * 假设有三个数 a <= b <= c
 * 那么显然 b + c > a, a + c >b
 * 那么我么只需要判断 a + b > c 是否成立就可以了，也就是只需要判断较小的两个数之和是否大于最大的数
 * 
 * 这题和 three sum的思路有点类似
 * 
 * 我们先固定一个最大的数，用两个指针一个指向剩下的最大的数left和最小的数right，如果 left + right > big ，则说明right 左边的数都可以，这是把left 向右收缩
 * 如果 left + right <= big 则说明right太小了，right 向左移
 * 
 * 
 * @param {number[]} nums
 * @return {number}
 */
var triangleNumber = function(nums) {
    let result = 0;
    nums.sort((a, b) => {
        return b - a;
    });
    for (let i = 0; i < nums.length - 2; i++) {
        const max = nums[i];
        let left = i + 1;
        let right = nums.length - 1;
        while (left < right) {
            if (nums[left] + nums[right] > max) {
                result += (right - left);
                left ++;
            } else {
                right--;
            }
        }
    }
    return result;
};

console.log(triangleNumber([2,2,3,4]));