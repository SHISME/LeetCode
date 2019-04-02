/*
 * @lc app=leetcode id=632 lang=javascript
 *
 * [632] Smallest Range
 *
 * https://leetcode.com/problems/smallest-range/description/
 *
 * algorithms
 * Hard (45.79%)
 * Total Accepted:    20.8K
 * Total Submissions: 44.7K
 * Testcase Example:  '[[4,10,15,24,26],[0,9,12,20],[5,18,22,30]]'
 *
 * You have k lists of sorted integers in ascending order. Find the smallest
 * range that includes at least one number from each of the k lists. 
 * 
 * We define the range [a,b] is smaller than range [c,d] if b-a < d-c or a < c
 * if b-a == d-c.
 * 
 * Example 1:
 * 
 * Input:[[4,10,15,24,26], [0,9,12,20], [5,18,22,30]]
 * Output: [20,24]
 * Explanation: 
 * List 1: [4, 10, 15, 24,26], 24 is in range [20,24].
 * List 2: [0, 9, 12, 20], 20 is in range [20,24].
 * List 3: [5, 18, 22, 30], 22 is in range [20,24].
 * 
 * 
 * 
 * 
 * Note:
 * 
 * The given list may contain duplicates, so ascending order means >= here.
 * 1 k 
 * ⁠-105 value of elements 5.
 * For Java users, please note that the input type has been changed to
 * List<List<Integer>>. And after you reset the code template, you'll see this
 * point.
 * 
 * 
 * 
 */
/**
 * 思路：
 * 记录一个指针数组，用来记录每一个数组中的当前指向位置
 * 以 example 为例 假设三个数组的指针分别是i, j ,k
 * 
 * [4,10,15,24,26] i
 * [0,9,12,20] j 
 * [5,18,22,30]] k
 * 
 *   i   j   k    min   max   
 *   0   0   0    j:0   k:5 
 *   0   1   0    i:4   j:9
 *   1   1   0    k:5   i:10
 *   1   1   1    j:9   k:18
 *   1   2   1    i:10  k:18
 *   2   2   1    j:12  k:18
 *   ...
 *   一直遍历到某一个结束为止
 *   
 * @param {number[][]} nums
 * @return {number[]}
 */
var smallestRange = function(nums) {
    const points = nums.map((row, index) => ({point:0, index}));
    points.sort((a, b) => {
        return nums[a.index][a.point] - nums[b.index][b.point];
    });
    let maxPoint = getMaxPoint();
    let minPoint = getMinPoint();
    let over = false;

    const result = [nums[minPoint.index][minPoint.point], nums[maxPoint.index][maxPoint.point]];
    let minScope = result[1] - result[0];
    minPoint.point++;
    insertPoint(minPoint);
    while (!over) {
        maxPoint = getMaxPoint();
        minPoint = getMinPoint();
        const leftNum = nums[minPoint.index][minPoint.point];
        const rightNum = nums[maxPoint.index][maxPoint.point];
        if(leftNum === undefined || rightNum === undefined) {
            break;
        }
        const curScope = rightNum - leftNum;
        if (curScope < minScope) {
            result[0] = leftNum;
            result[1] =  rightNum;
            minScope = curScope;
        }
        minPoint.point++;
        insertPoint(minPoint);
        if (minPoint.point === nums[minPoint.index].length) {
            over = true;
        }
    }
    return result;
    function getMinPoint() {
        return points.shift();
    }
    function getMaxPoint() {
        return points[points.length - 1];
    }
    function insertPoint(point) {
        const pointNum = nums[point.index][point.point];
        let i = points.length - 1
        for (; i >=0; i--) {
            const curNum = nums[points[i].index][points[i].point];
            if (curNum < pointNum) {
                break;
            }
        }
        points.splice(i + 1, 0, point);
    }
};

console.log(smallestRange([[4,10,15,24,26], [0,9,12,20], [5,18,22,30]]));

module.exports = {
    id:'632',
    title:'Smallest Range',
    url:'https://leetcode.com/problems/smallest-range/description/',
    difficulty:'Hard',
}