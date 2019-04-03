/*
 * @lc app=leetcode id=828 lang=javascript
 *
 * [828] Unique Letter String
 *
 * https://leetcode.com/problems/unique-letter-string/description/
 *
 * algorithms
 * Hard (37.99%)
 * Total Accepted:    4.6K
 * Total Submissions: 11.9K
 * Testcase Example:  '"ABC"'
 *
 * A character is unique in string S if it occurs exactly once in it.
 * 
 * For example, in string S = "LETTER", the only unique characters are "L" and
 * "R".
 * 
 * Let's define UNIQ(S) as the number of unique characters in string S.
 * 
 * For example, UNIQ("LETTER") =  2.
 * 
 * Given a string S with only uppercases, calculate the sum of UNIQ(substring)
 * over all non-empty substrings of S.
 * 
 * If there are two or more equal substrings at different positions in S, we
 * consider them different.
 * 
 * Since the answer can be very large, return the answer modulo 10 ^ 9 + 7.
 * 
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: "ABC"
 * Output: 10
 * Explanation: All possible substrings are: "A","B","C","AB","BC" and "ABC".
 * Evey substring is composed with only unique letters.
 * Sum of lengths of all substring is 1 + 1 + 1 + 2 + 2 + 3 = 10
 * 
 * Example 2:
 * 
 * 
 * Input: "ABA"
 * Output: 8
 * Explanation: The same as example 1, except uni("ABA") = 1.
 * 
 * 
 * 
 * 
 * Note: 0 <= S.length <= 10000.
 * 
 */
/**
 * @param {string} S
 * @return {number}
 */
var uniqueLetterString = function(S) {
    const map = {};
     for (let i = 0; i < S.length; i++) {
         const char = S[i];
         if (map[char]) {
             map[char].push(i);
         } else {
             map[char] = [i];
         }
     }
     let res = 0;
     for (let key in map) {
         const indexs = [-1,...map[key], S.length];
         for (let x = 1; x < indexs.length - 1; x++) {
             res += (indexs[x] - indexs[x - 1]) * (indexs[x+1] - indexs[x]);
         } 
     }
     return res;
 };

module.exports = {
    id:'828',
    title:'Unique Letter String',
    url:'https://leetcode.com/problems/unique-letter-string/description/',
    difficulty:'Hard',
}