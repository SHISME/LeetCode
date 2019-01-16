/**
 * 思路：
 * 
 * 我们设 P[n] 为包含第 n 位的有效长度
 * 
 * 如果S[n] = '('则 dp[n] = 0 
 * 如果S[n] = ')' 则我们需要查看前一位的有效长度的再前一位是否为'('
 * 前一位是 n - 1， 有效长度是 dp[n - 1], 有效长度的第一位是, n - dp[n - 1], 他的前一位是 S[n - 1 - dp[n - 1]]
 * n - 2 - dp[n - 1] < 0 或者 S[n - 2 - dp[n - 1]] = ')' 都无法匹配 S[n], 则此时 dp[n] = 0;
 * 
 * 如果 S[n - 2 - dp[n - 1]] = ')', 则 dp[n] = dp[n-1] + 2 + d[n - 3 - dp[n - 1]]
 * 
 * 
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    const dp = [0];
    let result = 0;
    for (let i = 1; i < s.length; i++) {
        const j = i-1-dp[i-1];

        if (s[i] === '(' || j < 0 || s[j] === ')') {
            dp[i] = 0;
        } else {
           dp[i] = dp[i - 1] + 2 + (j - 1 > 0 ? dp[j - 1]:0);
           if (dp[i] > result) {
               result = dp[i];
           }
        }
    }
    return result;
};

console.log(longestValidParentheses('()(())'));
console.log(longestValidParentheses('(()'));
console.log(longestValidParentheses(')()())'));

module.exports = {
    id:'32',
    title:'Longest Valid Parentheses',
    url:'https://leetcode.com/problems/longest-valid-parentheses/',
    difficulty:'hard',
};