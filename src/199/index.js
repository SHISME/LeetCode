/*
 * @lc app=leetcode id=199 lang=javascript
 *
 * [199] Binary Tree Right Side View
 *
 * https://leetcode.com/problems/binary-tree-right-side-view/description/
 *
 * algorithms
 * Medium (46.29%)
 * Total Accepted:    226.8K
 * Total Submissions: 442.4K
 * Testcase Example:  '[1,2,3,null,5,null,4]'
 *
 * Given a binary tree, imagine yourself standing on the right side of it,
 * return the values of the nodes you can see ordered from top to bottom.
 * 
 * Example:
 * 
 * 
 * Input: [1,2,3,null,5,null,4]
 * Output: [1, 3, 4]
 * Explanation:
 * 
 * ⁠  1            <---
 * ⁠/   \
 * 2     3         <---
 * ⁠\     \
 * ⁠ 5     4       <---
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
var rightSideView = function(root) {
   if (!root) return[]
   const res = [];
   const nodes = [root];
   const rightSideViewHelper = function (nodes) {
       const nextDepthNodes = [];
       if (nodes.length > 0) {
           res.push(nodes[nodes.length - 1].val);
       } else {
           return
       }
       nodes.forEach((node) => {
           node.left && nextDepthNodes.push(node.left);
           node.right && nextDepthNodes.push(node.right);
       });
       rightSideViewHelper(nextDepthNodes);
   }
   rightSideViewHelper(nodes);
   return res;
    
};

const { make_tree } = require('../utils');
const [ root ] = make_tree([4], [0]);
console.log(rightSideView(root));

module.exports = {
    id:'199',
    title:'Binary Tree Right Side View',
    url:'https://leetcode.com/problems/binary-tree-right-side-view/description/',
    difficulty:'Medium',
}