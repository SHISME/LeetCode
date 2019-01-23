/**
 * 思路：
 * [
 *   [1,2,3],
 *   [4,5,6],
 *   [7,8,9]
 * ]
 * 
 * 先将矩形上下颠倒
 * 
 * [
 *   [7,8,9],
 *   [4,5,6],
 *   [1,2,3],
 * ]
 * 
 * 然后沿着对角线交换
 * 
 * [
 *   [7,4,1],
 *   [8,5,2],
 *   [9,6,3]
 * ]
 * 
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    const result = matrix.reverse();
    result.forEach((row, index) => {
        for (let j = index + 1; j < row.length; j++) {
            const tmp = result[index][j];
            result[index][j] = result[j][index];
            result[j][index] = tmp;
        }
    });
    return result;
};

console.log(rotate([
    [1,2,3],
    [4,5,6],
    [7,8,9]
  ]));
console.log(rotate([
  [ 5, 1, 9,11],
  [ 2, 4, 8,10],
  [13, 3, 6, 7],
  [15,14,12,16]
]));

module.exports = {
    id:'48',
    title:'Rotate Image',
    url:'https://leetcode.com/problems/rotate-image/',
    difficulty:'medium'
};