/*
 * @lc app=leetcode id=56 lang=javascript
 *
 * [56] Merge Intervals
 *
 * https://leetcode.com/problems/merge-intervals/description/
 *
 * algorithms
 * Medium (34.58%)
 * Total Accepted:    310.9K
 * Total Submissions: 890.7K
 * Testcase Example:  '[[1,3],[2,6],[8,10],[15,18]]'
 *
 * Given a collection of intervals, merge all overlapping intervals.
 * 
 * Example 1:
 * 
 * 
 * Input: [[1,3],[2,6],[8,10],[15,18]]
 * Output: [[1,6],[8,10],[15,18]]
 * Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into
 * [1,6].
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: [[1,4],[4,5]]
 * Output: [[1,5]]
 * Explanation: Intervals [1,4] and [4,5] are considered overlapping.
 * 
 */
/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */

 function Interval (start, end) {
     this.start = start;
     this.end = end;
 }

/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */
var merge = function(intervals) {
    const result = [];
    intervals.forEach((item) => {
        let mergeItem = new Interval(item.start, item.end);
        for (let i = result.length - 1; i >=0 ; i--) {
            const curItem = result[i];
            const mergeResult = needMerge(mergeItem, curItem);
            if (mergeResult) {
                result.splice(i, 1);
                mergeItem.start = mergeResult.start;
                mergeItem.end = mergeResult.end;
            }
        }
        result.push(mergeItem);
    });
    return result;

    function needMerge(first, second) {
        const firstLength = first.end - first.start;
        const secondLenght = second.end - second.start;
        const maxEnd = Math.max(second.end, first.end);
        const minStart = Math.min(second.start, first.start);
        if (firstLength + secondLenght >= maxEnd - minStart) {
            return {
                end:maxEnd,
                start:minStart,
            };
        }
        return false;
    }
};

// const test = [[2,3],[4,5],[6,7],[8,9],[1,10]].map((arr) => new Interval(arr[0], arr[1]));
// const test = [[1,4],[0,1]].map((arr) => new Interval(arr[0], arr[1]));
const test = [[2,3],[4,6],[5,7],[3,4]].map((arr) => new Interval(arr[0], arr[1]));
console.log(merge(test));

module.exports = {
    id:'56',
    title:'Merge Intervals',
    url:'https://leetcode.com/problems/merge-intervals/description/',
    difficulty:'Medium',
}