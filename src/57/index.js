/*
 * @lc app=leetcode id=57 lang=javascript
 *
 * [57] Insert Interval
 *
 * https://leetcode.com/problems/insert-interval/description/
 *
 * algorithms
 * Hard (30.61%)
 * Total Accepted:    166.3K
 * Total Submissions: 539.5K
 * Testcase Example:  '[[1,3],[6,9]]\n[2,5]'
 *
 * Given a set of non-overlapping intervals, insert a new interval into the
 * intervals (merge if necessary).
 * 
 * You may assume that the intervals were initially sorted according to their
 * start times.
 * 
 * Example 1:
 * 
 * 
 * Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
 * Output: [[1,5],[6,9]]
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
 * Output: [[1,2],[3,10],[12,16]]
 * Explanation: Because the new interval [4,8] overlaps with
 * [3,5],[6,7],[8,10].
 * 
 */
/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**思路：
 * 
 * 不断的融合，如果需要融合时就把当前项去掉，最后把融合的项插入到指定位置
 * 
 * @param {Interval[]} intervals
 * @param {Interval} newInterval
 * @return {Interval[]}
 */
var insert = function(intervals, newInterval) {
    for (let i = intervals.length - 1; i >=0; i--) {
        const mergeResult = needMerge(intervals[i], newInterval);
        if (mergeResult) {
            newInterval.start = mergeResult.start;
            newInterval.end = mergeResult.end;
            intervals.splice(i, 1);
        }
    }
    let insertIndex = 0;
    for (;insertIndex < intervals.length; insertIndex++) {
        if (intervals[insertIndex].start > newInterval.start) {
            break;
        }
    }
    intervals.splice(insertIndex, 0, newInterval);
    return intervals;
    function needMerge(first, second) {
        const minStart = Math.min(first.start, second.start);
        const maxEnd = Math.max(first.end, second.end);
        if ((maxEnd - minStart) <= (first.end - first.start + second.end - second.start)) {
            return {
                start:minStart,
                end:maxEnd,
            };
        }
        return false;
    }
};

module.exports = {
    id:'57',
    title:'Insert Interval',
    url:'https://leetcode.com/problems/insert-interval/description/',
    difficulty:'Hard',
}