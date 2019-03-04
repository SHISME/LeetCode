/*
 * @lc app=leetcode id=894 lang=javascript
 *
 * [894] All Possible Full Binary Trees
 *
 * https://leetcode.com/problems/all-possible-full-binary-trees/description/
 *
 * algorithms
 * Medium (68.89%)
 * Total Accepted:    13.1K
 * Total Submissions: 18.9K
 * Testcase Example:  '7'
 *
 * A full binary tree is a binary tree where each node has exactly 0 or 2
 * children.
 * 
 * Return a list of all possible full binary trees with N nodes.  Each element
 * of the answer is the root node of one possible tree.
 * 
 * Each node of each tree in the answer must have node.val = 0.
 * 
 * You may return the final list of trees in any order.
 * 
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: 7
 * Output:
 * [[0,0,0,null,null,0,0,null,null,0,0],[0,0,0,null,null,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,null,null,null,null,0,0],[0,0,0,0,0,null,null,0,0]]
 * Explanation:
 * 
 * 
 * 
 * 
 * 
 * Note:
 * 
 * 
 * 1 <= N <= 20
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
 * 思路：
 * 
 * N = 1 时结果为1个
 * N = 3 时结果为1个
 * N = 5 时结果为3个
 * N = 7 时结果为5个
 * N 为偶数的时候无法形成满二叉树，直接返回空数组
 * 1.对于每个节点我们可以选择有两个子节点或则没有子节点
 * 2.递归的进行求解
 * 3.左边
 * 
 * @param {number} N
 * @return {TreeNode[]}
 */
var allPossibleFBT = function(N) {
    if (N % 2 === 0) {
        return [];
    }
    if (N === 1) {
        return [new TreeNode(0)];
    }
    const result = [];
    for (let i = 1; i <= N - 2; i+=2) {
        const leftRoots = allPossibleFBT(i);
        const rightRoots = allPossibleFBT(N - i - 1);
        leftRoots.forEach((leftNode) => {
            rightRoots.forEach((rightNode) => {
                const root = new TreeNode(0);
                root.left = leftNode;
                root.right = rightNode;
                result.push(root);
            })
        })
    }
    return result;
};

module.exports = {
    id:'894',
    title:'All Possible Full Binary Trees',
    url:'https://leetcode.com/problems/all-possible-full-binary-trees/description/',
    difficulty:'Medium',
}