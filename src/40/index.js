/*
 * @lc app=leetcode id=40 lang=javascript
 *
 * [40] Combination Sum II
 *
 * https://leetcode.com/problems/combination-sum-ii/description/
 *
 * algorithms
 * Medium (39.77%)
 * Total Accepted:    197.3K
 * Total Submissions: 495.3K
 * Testcase Example:  '[10,1,2,7,6,1,5]\n8'
 *
 * Given a collection of candidate numbers (candidates) and a target number
 * (target), find all unique combinations in candidates where the candidate
 * numbers sums to target.
 * 
 * Each number in candidates may only be used once in the combination.
 * 
 * Note:
 * 
 * 
 * All numbers (including target) will be positive integers.
 * The solution set must not contain duplicate combinations.
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: candidates = [10,1,2,7,6,1,5], target = 8,
 * A solution set is:
 * [
 * ⁠ [1, 7],
 * ⁠ [1, 2, 5],
 * ⁠ [2, 6],
 * ⁠ [1, 1, 6]
 * ]
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: candidates = [2,5,2,1,2], target = 5,
 * A solution set is:
 * [
 * [1,2,2],
 * [5]
 * ]
 * 
 * 
 */
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    const result = [];
    candidates.sort((a, b) => a - b);
    const result_map = {};
    foundResult(candidates.length - 1, target, []);
    function foundResult(index, target, cur_res) {
        for (let i = index; i >= 0; i--) {
            if (candidates[i] > target) {
                continue;
            }
            if (candidates[i] === target) {
                const res = ([target]).concat(cur_res);
                const key = res.join('_');
                if (!result_map[key]) {
                    result.push(res);
                    result_map[key] = true;
                }
                continue;
            }
            foundResult(i - 1, target - candidates[i], [candidates[i]].concat(cur_res));
        }
    }
    return result;
};

console.log(combinationSum2([2,5,2,1,2], 5));
console.log(combinationSum2([10,1,2,7,6,1,5], 8));

module.exports = {
    id:'40',
    title:'Combination Sum II',
    url:'https://leetcode.com/problems/combination-sum-ii/description/',
    difficulty:'Medium',
}