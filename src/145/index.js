/*
 * @lc app=leetcode id=145 lang=javascript
 *
 * [145] Binary Tree Postorder Traversal
 *
 * https://leetcode.com/problems/binary-tree-postorder-traversal/description/
 *
 * algorithms
 * Hard (46.48%)
 * Total Accepted:    323.4K
 * Total Submissions: 621.9K
 * Testcase Example:  '[1,null,2,3]'
 *
 * Given a binary tree, return the postorder traversal of its nodes' values.
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
 * Output: [3,2,1]
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
var postorderTraversal = function(root) {
    if (!root) return [];
    let node = root;
    const stack = [node];
    const res = [];
    while (stack.length) {
        node = stack.pop();
        res.unshift(node.val);

        node.left && stack.push(node.left);
        node.right && stack.push(node.right);
    }
    return res;
};
postorderTraversal = function(root) {
  if (!root) return [];
  let node = root;
  const stack = [];
  const res = [];
  let lastRightNode = null;
  while (node || stack.length) {
     if (node) {
         stack.push(node);
         node = node.left;
     } else {
         node = stack[stack.length - 1];
         if (node.right && node.right !== lastRightNode) {
             node = node.right;
         } else {
             node = stack.pop();
             res.push(node.val);
             lastRightNode = node;
             node = null;
         }
     }
  }
  return res;
};

const { make_tree } = require('../utils');

const [ root ] = make_tree([0, 1, 2, 3, 4, 5], [0]);

console.log(postorderTraversal(root));

module.exports = {
    id:'145',
    title:'Binary Tree Postorder Traversal',
    url:'https://leetcode.com/problems/binary-tree-postorder-traversal/description/',
    difficulty:'Hard',
}