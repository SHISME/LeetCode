/*
 * @lc app=leetcode id=103 lang=javascript
 *
 * [103] Binary Tree Zigzag Level Order Traversal
 *
 * https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/description/
 *
 * algorithms
 * Medium (40.15%)
 * Total Accepted:    299.3K
 * Total Submissions: 664.2K
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * Given a binary tree, return the zigzag level order traversal of its nodes'
 * values. (ie, from left to right, then right to left for the next level and
 * alternate between).
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
 * return its zigzag level order traversal as:
 * 
 * [
 * ⁠ [3],
 * ⁠ [20,9],
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
var zigzagLevelOrder = function(root) {
    if (!root) {
        return [];
    }
    const res = [];
    let direction = true;
    bfs([root]);
    function bfs(nodes) {
        if (!nodes.length) {
            return
        }
        if (direction) {
            res.push(nodes.map((node) => node.val));
        } else {
            res.push(nodes.map((node) => node.val).reverse());
        }
        direction = !direction;
        const nextRows = [];
        nodes.forEach((node) => {
            node.left && nextRows.push(node.left);
            node.right && nextRows.push(node.right);
        });
        bfs(nextRows);
    }
    return res;
};

const { make_tree } = require('../utils');
const [ root ] = make_tree([3,9,20,null,null,15,7], [0]);
console.log(zigzagLevelOrder(root));

module.exports = {
    id:'103',
    title:'Binary Tree Zigzag Level Order Traversal',
    url:'https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/description/',
    difficulty:'Medium',
}