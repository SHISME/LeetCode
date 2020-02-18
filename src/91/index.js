/*
 * @lc app=leetcode id=91 lang=javascript
 *
 * [91] Decode Ways
 *
 * https://leetcode.com/problems/decode-ways/description/
 *
 * algorithms
 * Medium (21.74%)
 * Total Accepted:    340.7K
 * Total Submissions: 1.4M
 * Testcase Example:  '"12"'
 *
 * A message containing letters from A-Z is being encoded to numbers using the
 * following mapping:
 * 
 * 
 * 'A' -> 1
 * 'B' -> 2
 * ...
 * 'Z' -> 26
 * 
 * 
 * Given a non-empty string containing only digits, determine the total number
 * of ways to decode it.
 * 
 * Example 1:
 * 
 * 
 * Input: "12"
 * Output: 2
 * Explanation: It could be decoded as "AB" (1 2) or "L" (12).
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: "226"
 * Output: 3
 * Explanation: It could be decoded as "BZ" (2 26), "VF" (22 6), or "BBF" (2 2
 * 6).
 * 
 */
/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    if (s[0] === '0') return 0
    const dp = [1];
    for (let i = 1; i < s.length; i++) {
        const curNum = parseInt(s[i]);
        const preNum = parseInt(s[i - 1]);
        const num = preNum * 10 + curNum;
        if (num === 0) {
            return 0;
        }
        if (curNum === 0) {
            if (num > 26) {
                return 0;
            }
            dp[i] = dp[i - 2] || 1;
        } else if (num <= 26 && num >= 11) {
            if (i >= 2) {
                dp[i] = dp[i - 1] + dp[i - 2];
            } else {
                dp[i] = dp[i - 1] + 1;
            }
        } else {
            dp[i] = dp[i - 1];
        }
    }
    return dp.pop();
};
console.log(numDecodings('10'))
console.log(numDecodings('100'))
console.log(numDecodings('110'))
console.log(numDecodings('230'))
console.log(numDecodings('0'))
console.log(numDecodings('12')) // |1 2| |12 1|
console.log(numDecodings('121')) // |1 2 1| |12 1| |1 21|
console.log(numDecodings('1212')) // |1 21 2| |12 1 2| |12 12| |12 1 2| |1 2 1 2|

module.exports = {
    id:'91',
    title:'Decode Ways',
    url:'https://leetcode.com/problems/decode-ways/description/',
    difficulty:'Medium',
}