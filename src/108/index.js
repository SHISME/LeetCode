const { TreeNode } = require('../utils');
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    if (nums.length === 0) {
        return null;
    }
    return dfs(0, nums.length - 1);
    function dfs(left, right) {
        if (left > right) {
            return null;
        }
        const middle = Math.floor(left + (right - left) / 2);
        const node = new TreeNode(nums[middle]);
        node.left = dfs(left, middle - 1);
        node.right = dfs(middle + 1, right);
        return node;
    }
};

const result = sortedArrayToBST([-10,-3,0,5,9]);


module.exports = {
    title:'Convert Sorted Array to Binary Search Tree',
    url:'https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/',
    id:'108',
    difficulty:'easy',
};