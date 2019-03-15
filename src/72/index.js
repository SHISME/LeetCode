/*
 * @lc app=leetcode id=72 lang=javascript
 *
 * [72] Edit Distance
 *
 * https://leetcode.com/problems/edit-distance/description/
 *
 * algorithms
 * Hard (36.15%)
 * Total Accepted:    160.4K
 * Total Submissions: 438.3K
 * Testcase Example:  '"horse"\n"ros"'
 *
 * Given two words word1 and word2, find the minimum number of operations
 * required to convert word1 to word2.
 * 
 * You have the following 3 operations permitted on a word:
 * 
 * 
 * Insert a character
 * Delete a character
 * Replace a character
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: word1 = "horse", word2 = "ros"
 * Output: 3
 * Explanation: 
 * horse -> rorse (replace 'h' with 'r')
 * rorse -> rose (remove 'r')
 * rose -> ros (remove 'e')
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: word1 = "intention", word2 = "execution"
 * Output: 5
 * Explanation: 
 * intention -> inention (remove 't')
 * inention -> enention (replace 'i' with 'e')
 * enention -> exention (replace 'n' with 'x')
 * exention -> exection (replace 'n' with 'c')
 * exection -> execution (insert 'u')
 * 
 * 
 */
/**
 * 思路：
 * 设dp[i][j] 为 word1前i个字转化为word2前j个字的最优解
 * 显然 dp[0][j] = j dp[i][0] = i
 * 
 * 对于dp[i][j] 
 * 对于word1 最后一字符的操作可能是增加，删除、替换，或者什么都不做
 * 
 * 删除：dp[i][j] = dp[i-1][j] + 1
 * 增加：dp[i][j] = dp[i][j - 1] + 1
 * 替换：此时 word1[i]!==word2[j], dp[i][j] = dp[i-1][j-1] + 1
 * 什么都不做：此时word1[i] === word2[j], dp[i][j] = dp[i-1][j-1]
 * 
 * dp[i][j] 为上面四种情况的最小值
 * 
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    if (word1 === word2) {
        return 0;
    }
    const dp = Array.from({length:word1.length + 1}, (item, row) => {
        if (row === 0) {
            return Array.from({length:word2.length + 1}, (item, column) => column);
        }
        return [row];
    });
    for (let i = 1; i <= word1.length; i++) {
        for (let j = 1; j <= word2.length; j++) {
            dp[i][j] = dp[i - 1][j - 1] + (word1[i - 1] === word2[j - 1] ? 0 : 1);
            dp[i][j] = Math.min(dp[i][j-1] + 1, dp[i-1][j] + 1, dp[i][j]);
        }
    }
    return dp[word1.length][word2.length];
};

console.log(minDistance('intention', 'execution'))

module.exports = {
    id:'72',
    title:'Edit Distance',
    url:'https://leetcode.com/problems/edit-distance/description/',
    difficulty:'Hard',
}