/*
 * @lc app=leetcode id=77 lang=javascript
 *
 * [77] Combinations
 *
 * https://leetcode.com/problems/combinations/description/
 *
 * algorithms
 * Medium (45.61%)
 * Total Accepted:    256.7K
 * Total Submissions: 493.5K
 * Testcase Example:  '4\n2'
 *
 * Given two integers n and k, return all possible combinations of k numbers
 * out of 1 ... n.
 * 
 * Example:
 * 
 * 
 * Input: n = 4, k = 2
 * Output:
 * [
 * ⁠ [2,4],
 * ⁠ [3,4],
 * ⁠ [2,3],
 * ⁠ [1,2],
 * ⁠ [1,3],
 * ⁠ [1,4],
 * ]
 * 
 * 
 */
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    const result = [];
    let curCombine = [];
    function combineHelp(start) {
        if (curCombine.length === k) {
            result.push([...curCombine]);
            return;
        }
        for (let i = start; i <= n; i++) {
            curCombine.push(i);
            combineHelp(i + 1);
            curCombine.pop();
        }

    }
    combineHelp(1);
    return result;
};
console.log(combine(4, 2))

module.exports = {
    id:'77',
    title:'Combinations',
    url:'https://leetcode.com/problems/combinations/description/',
    difficulty:'Medium',
}