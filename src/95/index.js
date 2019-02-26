/*
 * @lc app=leetcode id=95 lang=javascript
 *
 * [95] Unique Binary Search Trees II
 *
 * https://leetcode.com/problems/unique-binary-search-trees-ii/description/
 *
 * algorithms
 * Medium (34.56%)
 * Total Accepted:    127.7K
 * Total Submissions: 367.9K
 * Testcase Example:  '3'
 *
 * Given an integer n, generate all structurally unique BST's (binary search
 * trees) that store values 1 ... n.
 * 
 * Example:
 * 
 * 
 * Input: 3
 * Output:
 * [
 * [1,null,3,2],
 * [3,2,null,1],
 * [3,1,null,null,2],
 * [2,1,3],
 * [1,null,2,null,3]
 * ]
 * Explanation:
 * The above output corresponds to the 5 unique BST's shown below:
 * 
 * ⁠  1         3     3      2      1
 * ⁠   \       /     /      / \      \
 * ⁠    3     2     1      1   3      2
 * ⁠   /     /       \                 \
 * ⁠  2     1         2                 3
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
const { TreeNode } = require('../utils');
/**
 * 思路：
 * 
 * 1.以每一个节点做根节点向下伸展
 * 2.伸展时，如果左节点为空，右节点补位空，则左节点需要补充一个null
 * 
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function(n) {
    if (n === 0) {
        return [];
    }
    return getBSTs(1, n);
    function getBSTs(min, max) {
        const res = [];
        if (min > max) {
            return [null];
        }
        if (min === max) {
            return [new TreeNode(min)];
        }
        for (let i = min; i <= max; i++) {
            const leftRoots = getBSTs(min, i - 1);
            const rightRoots = getBSTs(i + 1, max);
            for (let j = 0; j < leftRoots.length; j++) {
                for (let k = 0; k < rightRoots.length; k++) {
                    const root = new TreeNode(i);
                    root.left = leftRoots[j];
                    root.right = rightRoots[k];
                    res.push(root);
                }
            }
        }
        return res;
    }
    console.log(nums)
};

console.log(generateTrees(1));

module.exports = {
    id:'95',
    title:'Unique Binary Search Trees II',
    url:'https://leetcode.com/problems/unique-binary-search-trees-ii/description/',
    difficulty:'Medium',
}