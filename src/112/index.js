/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    if (!root) return false
    if (!root.left && !root.right) {
      return root.val === targetSum
    }
    return hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val)
};

const { make_tree } = require('../utils')

const [ tree1 ] = make_tree([5,4,8,11,null,13,4,7,2,null,null,null,1], [0])

const [ tree2 ] = make_tree([1, 2, 3], [0])

const [ tree3 ] = make_tree([], [0])

console.log(hasPathSum(tree1, 22))
console.log(hasPathSum(tree2, 5))
console.log(hasPathSum(tree3, 0))

module.exports = {
  id:'112',
  title:'Path Sum',
  url:'https://leetcode.com/problems/path-sum/',
  difficulty:'Easy',
}
