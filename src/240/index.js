/*
 * @lc app=leetcode id=240 lang=javascript
 *
 * [240] Search a 2D Matrix II
 *
 * https://leetcode.com/problems/search-a-2d-matrix-ii/description/
 *
 * algorithms
 * Medium (40.11%)
 * Total Accepted:    159.1K
 * Total Submissions: 396.1K
 * Testcase Example:  '[[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]]\n5'
 *
 * Write an efficient algorithm that searches for a value in an m x n matrix.
 * This matrix has the following properties:
 * 
 * 
 * Integers in each row are sorted in ascending from left to right.
 * Integers in each column are sorted in ascending from top to bottom.
 * 
 * 
 * Example:
 * 
 * Consider the following matrix:
 * 
 * 
 * [
 * ⁠ [1,   4,  7, 11, 15],
 * ⁠ [2,   5,  8, 12, 19],
 * ⁠ [3,   6,  9, 16, 22],
 * ⁠ [10, 13, 14, 17, 24],
 * ⁠ [18, 21, 23, 26, 30]
 * ]
 * 
 * 
 * Given target = 5, return true.
 * 
 * Given target = 20, return false.
 * 
 */
/**
 * 思路：
 * 
 * 遍历每一行，看看最大值和最小值是否能包含target，如果能包含则对其用二分查找
 * 不能则略过
 * 
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let i = 0;
    while (i < matrix.length) {
        const row = matrix[i];
        if (row[0] === target || row[row.length - 1] === target) {
            return true;
        }
        if (row[0] < target && row[row.length - 1] > target) {
            if (foundTarget(row, target)) {
                return true;
            }
        }
        i++;
    }
    return false;
    
    function foundTarget(arr, target) {
        let left = 0;
        let right = arr.length - 1;
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            const midNum = arr[mid];
            if (midNum > target) {
                right = mid - 1;
                continue;
            }
            if (midNum < target) {
                left = mid + 1;
                continue;
            }
            return true;
        }
        return false;
    }
};
/**
 * 
 * 思路二：
 * 由于数组的特性，我们可以从二维数组的右上角出发，如果目标小于该数，
 * 则向左移动（左边的数字肯定更小，而当前列中所有数字都比该数字大）。
 * 如果该数比目标小，则向下移动（下边的数字肯定更大，而当前行的所有数字逗比该数字小）。
 * 这样反复重复该过程就能找到目标数。如果直到左下角都没有该数，说明找不到该数。同样的，这题也可以从左下角向右上角寻找。
 */
/**
 * 
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
searchMatrix = function(matrix, target) {
    if (matrix.length === 0 || matrix[0].length === 0) {
        return false;
    }
    let startX = matrix[0].length - 1;
    let startY = 0;
    while (startY < matrix.length && startX >= 0) {
        const curNum = matrix[startY][startX];
        if (target < curNum) {
            startX --;
            continue;
        }
        if (target > curNum) {
            startY++;
            continue;
        }
        return true;
    }
    return false;
}
const test = 
  [  [1,   4,  7, 11, 15],
    [2,   5,  8, 12, 19],
    [3,   6,  9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30]];
console.log(searchMatrix(test, 20));
console.log(searchMatrix([[-5]], -10));

module.exports = {
    id:'240',
    title:'Search a 2D Matrix II',
    url:'https://leetcode.com/problems/search-a-2d-matrix-ii/description/',
    difficulty:'Medium',
}