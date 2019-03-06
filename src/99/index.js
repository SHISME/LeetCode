/*
 * @lc app=leetcode id=99 lang=javascript
 *
 * [99] Recover Binary Search Tree
 *
 * https://leetcode.com/problems/recover-binary-search-tree/description/
 *
 * algorithms
 * Hard (33.68%)
 * Total Accepted:    111.4K
 * Total Submissions: 328.7K
 * Testcase Example:  '[1,3,null,null,2]'
 *
 * Two elements of a binary search tree (BST) are swapped by mistake.
 * 
 * Recover the tree without changing its structure.
 * 
 * Example 1:
 * 
 * 
 * Input: [1,3,null,null,2]
 * 
 * 1
 * /
 * 3
 * \
 * 2
 * 
 * Output: [3,1,null,null,2]
 * 
 * 3
 * /
 * 1
 * \
 * 2
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: [3,1,4,null,null,2]
 * 
 * ⁠ 3
 * ⁠/ \
 * 1   4
 * /
 * 2
 * 
 * Output: [2,1,4,null,null,3]
 * 
 * ⁠ 2
 * ⁠/ \
 * 1   4
 * /
 * ⁠ 3
 * 
 * 
 * Follow up:
 * 
 * 
 * A solution using O(n) space is pretty straight forward.
 * Could you devise a constant space solution?
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
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 思路：
 * 遍历出所有值，给所有值排序，然后用中序遍历树，并重新给树赋值
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function(root) {
    const res = [];
    preOrderDfs(root);
    res.sort((a, b) => a - b);
    preOrderResetTree(root);
    function preOrderResetTree(node) {
        if (node.left) {
            preOrderResetTree(node.left);
        }
        node.val = res.shift();
        if (node.right) {
            preOrderResetTree(node.right);
        }
    }
    function preOrderDfs(node) {
        if (node.left) {
            preOrderDfs(node.left);
        }
        res.push(node.val);
        if (node.right) {
            preOrderDfs(node.right);
        }
    }
};

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 思路：
 * 题目的意思是有两个字典顺序调换了，那么我们只需要找到这两个节点就可以了
 * 用中序遍历的方式，如果不是单调递增的话，则说明上一个节点的位置错了，后一个几点可能错了
 * 然后继续遍历剩下所有的，如果都是正常的单调递增则说明上一次记录的第二节点就是错误的
 * 
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function(root) {
    let first;
    let second;
    let pre;
    middleDfs(root);
    [first.val, second.val] = [second.val, first.val];
    function middleDfs(node) {
        if (node.left) {
            middleDfs(node.left);
        }
        if (pre) {
            if (node.val < pre.val) {
                if (!first) {
                    first = pre;
                }
                second = node;
            }
        }
        pre = node;
        if (node.right) {
            middleDfs(node.right);
        }
    }
}
const {make_tree} = require('../utils');
const test1 = make_tree([1,3,null,null,2], [0])[0];
const test2 = make_tree([3,1,4,null,null,2], [0])[0];

recoverTree(test1);
console.log(test1)

module.exports = {
    id:'99',
    title:'Recover Binary Search Tree',
    url:'https://leetcode.com/problems/recover-binary-search-tree/description/',
    difficulty:'Hard',
}