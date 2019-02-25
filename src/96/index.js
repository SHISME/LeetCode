/*
 * @lc app=leetcode id=96 lang=javascript
 *
 * [96] Unique Binary Search Trees
 *
 * https://leetcode.com/problems/unique-binary-search-trees/description/
 *
 * algorithms
 * Medium (44.79%)
 * Total Accepted:    184.2K
 * Total Submissions: 409.4K
 * Testcase Example:  '3'
 *
 * Given n, how many structurally unique BST's (binary search trees) that store
 * values 1 ... n?
 * 
 * Example:
 * 
 * 
 * Input: 3
 * Output: 5
 * Explanation:
 * Given n = 3, there are a total of 5 unique BST's:
 * 
 * ⁠  1         3     3      2      1
 * ⁠   \       /     /      / \      \
 * ⁠    3     2     1      1   3      2
 * ⁠   /     /       \                 \
 * ⁠  2     1         2                 3
 * 
 * 
 */
/**
 * 思路：
 * 
 * 设 dp[n] 为 n 个数时的BST的个数
 * 
 * dp[0] = 0;
 * dp[1] = 1;
 * dp[2] = 2;
 * 
 * dp[n]
 * 
 * 我们求1到n每一项作为根节点时的个数，他们的总数即为dp[n]
 * 
 * dp[n] = dp[n - 1] + dp[n - 2] * dp[2] + ... dp[2] * dp[n - 2] + dp[n - 1]
 * 
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
    const dp = [0, 1, 2];
    for (let i = 3; i <= n; i++) {
        let j = 2;
        dp[i] = 2 * dp[i - 1];
        while (j < i) {
            dp[i] += dp[j - 1] * dp[i - j];
            j++;
        }
    }
    return dp[n];
};

module.exports = {
    id:'96',
    title:'Unique Binary Search Trees',
    url:'https://leetcode.com/problems/unique-binary-search-trees/description/',
    difficulty:'Medium',
}