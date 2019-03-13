/*
 * @lc app=leetcode id=47 lang=javascript
 *
 * [47] Permutations II
 *
 * https://leetcode.com/problems/permutations-ii/description/
 *
 * algorithms
 * Medium (38.84%)
 * Total Accepted:    224.4K
 * Total Submissions: 570.5K
 * Testcase Example:  '[1,1,2]'
 *
 * Given a collection of numbers that might contain duplicates, return all
 * possible unique permutations.
 * 
 * Example:
 * 
 * 
 * Input: [1,1,2]
 * Output:
 * [
 * ⁠ [1,1,2],
 * ⁠ [1,2,1],
 * ⁠ [2,1,1]
 * ]
 * 
 * 
 */
/**
 * 思路：
 * 
 * 1. 我们用一个字典记录我们使用过的数字，主要记录nuns的index
 * 2. 对于第一位我们可以选择任意一位nums来作为第一位
 * 3. 当数组长度和nums一样的时候，说明所有的nums都做了选择
 * 4. 因为数组的数字可能有重复的，我们需要对重复进行排重
 * 5. 因为重复的数字谁先选第一位都是一样的，所以我们就让重复的数字的第一位选择第一位
 * 6. 如果当前数字和前一位数字相等则说明这个情况已经出现过了，可以跳过
 * 
 * 
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    const result = [];
    nums.sort((a, b) => a - b);
    permuteUniqueHelp([], {});
    return result;
    function permuteUniqueHelp(tmp, used) {
        if (tmp.length === nums.length) {
            result.push(tmp);
            return;
        }
        for (let i = 0; i < nums.length; i++) {
            if (used[i] || i > 0 && !used[i - 1] && nums[i - 1] === nums[i]) {
                continue;
            }
            used[i] = true;
            tmp.push(nums[i]);
            permuteUniqueHelp([...tmp], {...used});
            used[i] = false;
            tmp.pop();
        }
    }
};

console.log(permuteUnique([1,1,2]));

module.exports = {
    id:'47',
    title:'Permutations II',
    url:'https://leetcode.com/problems/permutations-ii/description/',
    difficulty:'Medium',
}