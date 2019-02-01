/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    if (root === p || root === q) {
        return root;
    }
    let p_path = [];
    found_path(root,p_path,p);
    return p_path.find((node) => {
        return in_parent_path(node, q);
    });

    function in_parent_path(root, node) {
        if (root === node) {
            return true;
        }
        let result = root.left && in_parent_path(root.left, node);
        if (result) {
            return true;
        }
        return root.right && in_parent_path(root.right, node);
    }
    
    function found_path(root, paths, target) {
        if (root === target) {
            paths.push(root);
            return true;
        }
        let result = root.left && found_path(root.left, paths, target);
        if (result) {
            paths.push(root);
            return result;
        }
        result = root.right && found_path(root.right, paths, target);
        if (result) {
            paths.push(root);
        }
        return result;
    }
};

const arr = [3,5,1,6,2,0,8,null,null,7,4];
const { make_tree } = require('../utils');
const test = make_tree(arr, [0,1,8]);
const root = test[0];
const p = test[1];
const q = test[2];
const result = lowestCommonAncestor(root, p, q);


module.exports = {
    id:'236',
    title:'Lowest Common Ancestor of a Binary Tree',
    url:'https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/',
    difficulty:'medium',
};