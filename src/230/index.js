const { make_tree } = require('../utils');

const test = make_tree([5,3,6,2,4,null,null,1], [0])[0];

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    return kthSmallestHelp(root);
    function kthSmallestHelp(root) {
        if (root.left) {
            const in_left = kthSmallestHelp(root.left);
            if (in_left !== undefined) {
                return in_left;
            }
        }
        k--;
        if (k === 0) {
            return root.val;
        }
        if (root.right && k > 0) {
            const in_right = kthSmallestHelp(root.right);
            if (in_right !== undefined) {
                return in_right;
            }
        }
    }
};

console.log(kthSmallest(test, 3));


module.exports = {
    title:'Kth Smallest Element in a BST',
    id:'230',
    difficulty:'medium',
    url:'https://leetcode.com/problems/kth-smallest-element-in-a-bst/',
};