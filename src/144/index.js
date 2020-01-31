/*
 * @lc app=leetcode id=144 lang=javascript
 *
 * [144] Binary Tree Preorder Traversal
 *
 * https://leetcode.com/problems/binary-tree-preorder-traversal/description/
 *
 * algorithms
 * Medium (49.98%)
 * Total Accepted:    422.9K
 * Total Submissions: 786.9K
 * Testcase Example:  '[1,null,2,3]'
 *
 * Given a binary tree, return the preorder traversal of its nodes' values.
 * 
 * Example:
 * 
 * 
 * Input: [1,null,2,3]
 * ⁠  1
 * ⁠   \
 * ⁠    2
 * ⁠   /
 * ⁠  3
 * 
 * Output: [1,2,3]
 * 
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
var preorderTraversal = function(root) {
    if (!root) return []
    let node = root;
    const stack = [node];
    const res = [];
    while (stack.length) {
        node = stack.pop();
        res.push(node.val);
        node.right && stack.push(node.right);
        node.left && stack.push(node.left);
    }
    return res;
};

preorderTraversal = function(root) {
  let node = root;
  const stack = [];
  const res = [];
  while (node || stack.length > 0) {
    while (node) {
      res.push(node.val);
      stack.push(node);
      node = node.left;
    }
    node = stack.pop()
    node = node.right;
  }
  return res;
}

module.exports = {
    id:'144',
    title:'Binary Tree Preorder Traversal',
    url:'https://leetcode.com/problems/binary-tree-preorder-traversal/description/',
    difficulty:'Medium',
}

const { make_tree } = require('../utils');

const [ root ] = make_tree([0, 1, 2, 3, 4, 5], [0]);

console.log(preorderTraversal(root));