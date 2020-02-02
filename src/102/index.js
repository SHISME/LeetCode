/*
 * @lc app=leetcode id=102 lang=javascript
 *
 * [102] Binary Tree Level Order Traversal
 *
 * https://leetcode.com/problems/binary-tree-level-order-traversal/description/
 *
 * algorithms
 * Medium (46.66%)
 * Total Accepted:    503.4K
 * Total Submissions: 970.5K
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * Given a binary tree, return the level order traversal of its nodes' values.
 * (ie, from left to right, level by level).
 * 
 * 
 * For example:
 * Given binary tree [3,9,20,null,null,15,7],
 * 
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
 * 
 * 
 * 
 * return its level order traversal as:
 * 
 * [
 * ⁠ [3],
 * ⁠ [9,20],
 * ⁠ [15,7]
 * ]
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
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  if (!root) {
    return [];
  }
  const res = [];
  function levelOrderHelper(nodes) {
    if (!nodes.length) return
    const curRes = [];
    const nextDepthNodes = [];
    nodes.forEach((node) => {
      curRes.push(node.val);
      node.left && nextDepthNodes.push(node.left);
      node.right && nextDepthNodes.push(node.right);
    });
    res.push(curRes);
    levelOrderHelper(nextDepthNodes);
  }
  levelOrderHelper([root]);
  return res;
};

module.exports = {
    id:'102',
    title:'Binary Tree Level Order Traversal',
    url:'https://leetcode.com/problems/binary-tree-level-order-traversal/description/',
    difficulty:'Medium',
}