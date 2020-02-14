/*
 * @lc app=leetcode id=739 lang=javascript
 *
 * [739] Daily Temperatures
 *
 * https://leetcode.com/problems/daily-temperatures/description/
 *
 * algorithms
 * Medium (58.47%)
 * Total Accepted:    120K
 * Total Submissions: 193.8K
 * Testcase Example:  '[73,74,75,71,69,72,76,73]'
 *
 * 
 * Given a list of daily temperatures T, return a list such that, for each day
 * in the input, tells you how many days you would have to wait until a warmer
 * temperature.  If there is no future day for which this is possible, put 0
 * instead.
 * 
 * For example, given the list of temperatures T = [73, 74, 75, 71, 69, 72, 76,
 * 73], your output should be [1, 1, 4, 2, 1, 1, 0, 0].
 * 
 * 
 * Note:
 * The length of temperatures will be in the range [1, 30000].
 * Each temperature will be an integer in the range [30, 100].
 * 
 */
/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function(T) {
    const minStack = [];
    const result = [];
    T.forEach((temperature, index) => {
        result[index] = 0;
        if (!minStack.length) {
            minStack.push({temperature, index});
            return;
        }
        if (temperature < minStack[minStack.length - 1].temperature) {
            minStack.push({temperature, index});
            return;
        }
        while (minStack.length && temperature > minStack[minStack.length - 1].temperature) {
            const cur = minStack.pop();
            result[cur.index] = index - cur.index;
        }
        minStack.push({temperature, index});
    });
    console.log('minStack.length', minStack.length, minStack);
    return result;
};

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));

module.exports = {
    id:'739',
    title:'Daily Temperatures',
    url:'https://leetcode.com/problems/daily-temperatures/description/',
    difficulty:'Medium',
}