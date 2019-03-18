/*
 * @lc app=leetcode id=97 lang=javascript
 *
 * [97] Interleaving String
 *
 * https://leetcode.com/problems/interleaving-string/description/
 *
 * algorithms
 * Hard (27.10%)
 * Total Accepted:    105.7K
 * Total Submissions: 385.2K
 * Testcase Example:  '"aabcc"\n"dbbca"\n"aadbbcbcac"'
 *
 * Given s1, s2, s3, find whether s3 is formed by the interleaving of s1 and
 * s2.
 * 
 * Example 1:
 * 
 * 
 * Input: s1 = "aabcc", s2 = "dbbca", s3 = "aadbbcbcac"
 * Output: true
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: s1 = "aabcc", s2 = "dbbca", s3 = "aadbbbaccc"
 * Output: false
 * 
 * 
 */
/**
 * 思路:
 * 设 dp[i][j] 为s1前i个和能s2前j个字符能否交替形成s3的前i+j
 * dp[0][0] = true
 * dp[0][1] = s2[0] === s3[0] ? true : false
 * dp[0][2] = s2[1] === s3[1] ? dp[0][1] : false
 * dp[0][j] = s2[j-1] === s3[j-1] ? dp[0][j-1] : false
 * 
 * 同理 dp[i][0] = s1[i - 1] === s3[i - 1] ? dp[i - 1][0] : false
 * 
 * dp[i][j] = 此时可以有s1或s2最后一项匹配s3的最后一项，只要有一项符合条件即可
 * 
 * 既 s1[i - 1] === s3[i + j - 1] && dp[i - 1][j] || 
 *    s2[j - 1] === s3[i + j - 1] && dp[i][j - 1]
 * 
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function(s1, s2, s3) {
    if (s1.length + s2.length !== s3.length) {
        return false;
    }
   const dp = [[true]]
   for (let j = 1; j <= s2.length; j++) {
       dp[0][j] = s2[j - 1] === s3[j - 1] && dp[0][j - 1];
   }
   for (let i = 1; i <= s1.length; i++) {
       dp[i] = (s1[i - 1] === s3[i - 1] && dp[i - 1][0]) ? [true] : [false];
   }
   for (let i = 1; i <= s1.length; i++) {
       for (let j = 1; j <= s2.length; j++) {
           const s3Index = i + j - 1;
           dp[i][j] = (s1[i - 1] === s3[s3Index] && dp[i - 1][j]) ||
                      (s2[j - 1] === s3[s3Index] && dp[i][j - 1]);
       }
   }
   return dp[s1.length][s2.length];
};

console.log(isInterleave('aabcc', 'dbbca', 'aadbbcbcac'));
console.log(isInterleave('aabcc', 'dbbca', 'aadbbbaccc'));

module.exports = {
    id:'97',
    title:'Interleaving String',
    url:'https://leetcode.com/problems/interleaving-string/description/',
    difficulty:'Hard',
}