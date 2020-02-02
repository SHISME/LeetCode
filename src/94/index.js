/*
 * @lc app=leetcode id=94 lang=javascript
 *
 * [94] Binary Tree Inorder Traversal
 *
 * https://leetcode.com/problems/binary-tree-inorder-traversal/description/
 *
 * algorithms
 * Medium (54.62%)
 * Total Accepted:    417.2K
 * Total Submissions: 755.2K
 * Testcase Example:  '[1,null,2,3]'
 *
 * Given a binary tree, return the inorder traversal of its nodes' values.
 * 
 * Example:
 * 
 * 
 * Input: [1,null,2,3]
 * ⁠  1
 * ⁠   \
 * ⁠    2
 * ⁠   /
 * ⁠  3
 * 
 * Output: [1,3,2]
 * 
 * Follow up: Recursive solution is trivial, could you do it iteratively?
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
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    if (!root) {
        return [];
    }
    const result = [];
    inorderDfs(root);
    return result;
    
    function inorderDfs(root) {
        if (root.left) {
            inorderDfs(root.left);
        }
        result.push(root.val);
        if (root.right) {
            inorderDfs(root.right);
        }
    }
};

const { make_tree } = require('../utils');
const [ root ] = make_tree([1,null,2,3], [0]);
inorderTraversal = function (root) {
    if (!root) {
        return []
    }
    let node = root;
    const res = [];
    const stack = [];
    while (node || stack.length) {
        while (node) {
            stack.push(node);
            node = node.left;
        }
        node = stack.pop();
        res.push(node.val);
        node = node.right;
    }
    return res;
}
console.log(inorderTraversal(root));
module.exports = {
    id:'94',
    title:'Binary Tree Inorder Traversal',
    url:'https://leetcode.com/problems/binary-tree-inorder-traversal/description/',
    difficulty:'Medium',
}