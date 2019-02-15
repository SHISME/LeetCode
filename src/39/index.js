/*
 * @lc app=leetcode id=39 lang=javascript
 *
 * [39] Combination Sum
 *
 * https://leetcode.com/problems/combination-sum/description/
 *
 * algorithms
 * Medium (46.23%)
 * Total Accepted:    298.1K
 * Total Submissions: 644.4K
 * Testcase Example:  '[2,3,6,7]\n7'
 *
 * Given a set of candidate numbers (candidates) (without duplicates) and a
 * target number (target), find all unique combinations in candidates where the
 * candidate numbers sums to target.
 * 
 * The same repeated number may be chosen from candidates unlimited number of
 * times.
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
 * Input: candidates = [2,3,6,7], target = 7,
 * A solution set is:
 * [
 * ⁠ [7],
 * ⁠ [2,2,3]
 * ]
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: candidates = [2,3,5], target = 8,
 * A solution set is:
 * [
 * [2,2,2,2],
 * [2,3,3],
 * [3,5]
 * ]
 * 
 * 
 */
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const result = [];
    foundResult(candidates.length - 1, target, []);
    function foundResult(index, target, cur_res) {
        for (let i = index; i >= 0; i--) {
            if (candidates[i] > target) {
                continue;
            }
            if (candidates[i] === target) {
                result.push(([target]).concat(cur_res));
                continue;
            }
            foundResult(i, target - candidates[i], [candidates[i]].concat(cur_res));
        }
    }
    return result;
};
combinationSum([2,3,6,7], 7);
combinationSum([2,3,5], 8);

module.exports = {
    id:'39',
    title:'Combination Sum',
    url:'https://leetcode.com/problems/combination-sum/description/',
    difficulty:'Medium',
}