/*
 * @lc app=leetcode id=44 lang=javascript
 *
 * [44] Wildcard Matching
 *
 * https://leetcode.com/problems/wildcard-matching/description/
 *
 * algorithms
 * Hard (22.28%)
 * Total Accepted:    164.6K
 * Total Submissions: 734.1K
 * Testcase Example:  '"aa"\n"a"'
 *
 * Given an input string (s) and a pattern (p), implement wildcard pattern
 * matching with support for '?' and '*'.
 * 
 * 
 * '?' Matches any single character.
 * '*' Matches any sequence of characters (including the empty sequence).
 * 
 * 
 * The matching should cover the entire input string (not partial).
 * 
 * Note:
 * 
 * 
 * s could be empty and contains only lowercase letters a-z.
 * p could be empty and contains only lowercase letters a-z, and characters
 * like ? or *.
 * 
 * 
 * Example 1:
 * 
 * 
 * Input:
 * s = "aa"
 * p = "a"
 * Output: false
 * Explanation: "a" does not match the entire string "aa".
 * 
 * 
 * Example 2:
 * 
 * 
 * Input:
 * s = "aa"
 * p = "*"
 * Output: true
 * Explanation: '*' matches any sequence.
 * 
 * 
 * Example 3:
 * 
 * 
 * Input:
 * s = "cb"
 * p = "?a"
 * Output: false
 * Explanation: '?' matches 'c', but the second letter is 'a', which does not
 * match 'b'.
 * 
 * 
 * Example 4:
 * 
 * 
 * Input:
 * s = "adceb"
 * p = "*a*b"
 * Output: true
 * Explanation: The first '*' matches the empty sequence, while the second '*'
 * matches the substring "dce".
 * 
 * 
 * Example 5:
 * 
 * 
 * Input:
 * s = "acdcb"
 * p = "a*c?b"
 * Output: false
 * 
 * 
 */
/**
 * 思路:
 * 
 * 使用动态规划的思路
 * 
 * 设dp[i][j]为s前i个字符和p前j个字符是否匹配
 * 
 * dp[0][0] = true
 * dp[0][1] = p[1] === '*'
 * dp[0][2] = dp[0][1] && p[2] === '*'
 * dp[n][0] = false n > 1
 * 
 * dp[i][j]，i >=1, j >= 1,
 * 当p[j]= ‘*’时，我们可以选择匹配或者不匹配s[i],此时dp[i][j] = dp[i-1][j] || dp[i][j-1],前面是匹配，后面是不匹配
 * 当p[j]= '?'时，我们需要强制匹配一位dp[i][j] = dp[i-1][j-1]
 * 当p[j]为正常字符时,dp[i][j] = s[i] === p[j] && dp[i-1][j-1]
 * 其他情况dp[i][j]= false
 * 
 * 
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    if(s === p) {
        return true;
    }
    if (p === '*') {
        return true;
    }
    const dp = Array.from({length:s.length + 1}, () => [false]);
    dp[0][0] = true;
    for (let i = 0; i < p.length; i++) {
        dp[0][i + 1] = dp[0][i] && p[i] === '*';
    }
    for (let i = 1; i <= s.length; i++) {
        for (let j = 1; j <= p.length; j++) {
            if (p[j - 1] === '*') {
                dp[i][j] = dp[i - 1][j] || dp[i][j - 1];
                continue;
            }
            if (p[j - 1] === '?' || p[j-1] === s[i-1]) {
                dp[i][j] = dp[i-1][j-1];
                continue;
            }
           dp[i][j] = false;
        }
    }
    return dp.pop().pop();
};

console.log(isMatch('bcadegfghi', 'bc*g?i'));
console.log(isMatch('a', 'a*'));

module.exports = {
    id:'44',
    title:'Wildcard Matching',
    url:'https://leetcode.com/problems/wildcard-matching/description/',
    difficulty:'Hard',
}