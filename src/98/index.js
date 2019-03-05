/*
 * @lc app=leetcode id=98 lang=javascript
 *
 * [98] Validate Binary Search Tree
 *
 * https://leetcode.com/problems/validate-binary-search-tree/description/
 *
 * algorithms
 * Medium (25.14%)
 * Total Accepted:    360.6K
 * Total Submissions: 1.4M
 * Testcase Example:  '[2,1,3]'
 *
 * Given a binary tree, determine if it is a valid binary search tree (BST).
 * 
 * Assume a BST is defined as follows:
 * 
 * 
 * The left subtree of a node contains only nodes with keys less than the
 * node's key.
 * The right subtree of a node contains only nodes with keys greater than the
 * node's key.
 * Both the left and right subtrees must also be binary search trees.
 * 
 * 
 * Example 1:
 * 
 * 
 * Input:
 * ⁠   2
 * ⁠  / \
 * ⁠ 1   3
 * Output: true
 * 
 * 
 * Example 2:
 * 
 * 
 * ⁠   5
 * ⁠  / \
 * ⁠ 1   4
 * / \
 * 3   6
 * Output: false
 * Explanation: The input is: [5,1,4,null,null,3,6]. The root node's
 * value
 * is 5 but its right child's value is 4.
 * 
 * 
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 思路：
 * 
 * 中序遍历二叉树，如果值没有单调递增则说明不是有效的二叉搜索树
 * 
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
    if (!root) {
        return true;
    }
    let maxVal = Number.MIN_SAFE_INTEGER;
    return dfs(root);
    function dfs(node) {
        if (node.left) {
            if (!dfs(node.left)) {
                return false;
            }
        }
        if (node.val <= maxVal) {
            return false;
        }
        maxVal = node.val;
        if (node.right) {
            if (!dfs(node.right)) {
                return false;
            }
        }
        return true;
    }
};

module.exports = {
    id:'98',
    title:'Validate Binary Search Tree',
    url:'https://leetcode.com/problems/validate-binary-search-tree/description/',
    difficulty:'Medium',
}