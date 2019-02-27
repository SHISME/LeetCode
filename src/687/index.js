/*
 * @lc app=leetcode id=687 lang=javascript
 *
 * [687] Longest Univalue Path
 *
 * https://leetcode.com/problems/longest-univalue-path/description/
 *
 * algorithms
 * Easy (33.21%)
 * Total Accepted:    51.4K
 * Total Submissions: 154.1K
 * Testcase Example:  '[5,4,5,1,1,5]'
 *
 * Given a binary tree, find the length of the longest path where each node in
 * the path has the same value. This path may or may not pass through the
 * root.
 * 
 * Note: The length of path between two nodes is represented by the number of
 * edges between them.
 * 
 * 
 * Example 1:
 * 
 * 
 * 
 * 
 * Input:
 * 
 * ⁠             5
 * ⁠            / \
 * ⁠           4   5
 * ⁠          / \   \
 * ⁠         1   1   5
 * 
 * 
 * 
 * 
 * Output:
 * 
 * 2
 * 
 * 
 * 
 * 
 * Example 2:
 * 
 * 
 * 
 * 
 * Input:
 * 
 * ⁠             1
 * ⁠            / \
 * ⁠           4   5
 * ⁠          / \   \
 * ⁠         4   4   5
 * 
 * 
 * 
 * 
 * Output:
 * 
 * 2
 * 
 * 
 * 
 * Note:
 * The given binary tree has not more than 10000 nodes.  The height of the tree
 * is not more than 1000.
 * 
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
const { make_tree } = require('../utils/');
const root = make_tree([5,4,5,1,1,null, 5], [0])[0];
/**
 * 思路：
 * 1.递归的找经过每个节点的最大路径
 * 2.返回当前节点的最大路径，如果left的值和root一样则leftDepth + 1否则为零,如果right的值和root一样则rightDepth + 1否则为零,
 * 3.返回的时候只能返回左或者右的最大值
 * 
 * @param {TreeNode} root
 * @return {number}
 */
var longestUnivaluePath = function(root) {
    let maxLength = 0;
    dfs(root);
    return maxLength;
    function dfs(node) {
        if (!node) {
            return 0;
        }
        let leftMaxDepth = dfs(node.left);
        let rightMaxDepth = dfs(node.right);
        if (
            node.left &&
            node.left.val === node.val
        ) {
            leftMaxDepth++;
        } else {
            leftMaxDepth = 0;
        }
        if (
            node.right &&
            node.right.val === node.val
        ) {
            rightMaxDepth++;
        } else {
            rightMaxDepth = 0;
        }
        const maxSubDepth = Math.max(leftMaxDepth, rightMaxDepth);
        maxLength = Math.max(maxLength, leftMaxDepth + rightMaxDepth);
        return maxSubDepth;
    }
};
longestUnivaluePath(root);

module.exports = {
    id:'687',
    title:'Longest Univalue Path',
    url:'https://leetcode.com/problems/longest-univalue-path/description/',
    difficulty:'Easy',
}