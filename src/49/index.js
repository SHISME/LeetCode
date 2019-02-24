/*
 * @lc app=leetcode id=49 lang=javascript
 *
 * [49] Group Anagrams
 *
 * https://leetcode.com/problems/group-anagrams/description/
 *
 * algorithms
 * Medium (44.27%)
 * Total Accepted:    294.4K
 * Total Submissions: 660.1K
 * Testcase Example:  '["eat","tea","tan","ate","nat","bat"]'
 *
 * Given an array of strings, group anagrams together.
 * 
 * Example:
 * 
 * 
 * Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
 * Output:
 * [
 * ⁠ ["ate","eat","tea"],
 * ⁠ ["nat","tan"],
 * ⁠ ["bat"]
 * ]
 * 
 * Note:
 * 
 * 
 * All inputs will be in lowercase.
 * The order of your output does not matter.
 * 
 * 
 */
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const charsMap = {};
    strs.forEach((str) => {
        const key = str.split('').sort((a, b) => {
            if (a > b) {
                return -1;
            }
            if (a === b) {
                return 0;
            }
            return 1;
        }).join('');
        if (charsMap[key]) {
            charsMap[key].push(str);
        } else {
            charsMap[key] = [str];
        }
    });
    const result = [];
    for (let key in charsMap) {
        result.push(charsMap[key]);
    }
    return result;
};
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));

module.exports = {
    id:'49',
    title:'Group Anagrams',
    url:'https://leetcode.com/problems/group-anagrams/description/',
    difficulty:'Medium',
}