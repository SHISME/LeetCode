/*
 * @lc app=leetcode id=173 lang=javascript
 *
 * [173] Binary Search Tree Iterator
 *
 * https://leetcode.com/problems/binary-search-tree-iterator/description/
 *
 * algorithms
 * Medium (46.68%)
 * Total Accepted:    261.3K
 * Total Submissions: 493.4K
 * Testcase Example:  '["BSTIterator","next","next","hasNext","next","hasNext","next","hasNext","next","hasNext"]\n' +
  '[[[7,3,15,null,null,9,20]],[null],[null],[null],[null],[null],[null],[null],[null],[null]]'
 *
 * Implement an iterator over a binary search tree (BST). Your iterator will be
 * initialized with the root node of a BST.
 * 
 * Calling next() will return the next smallest number in the BST.
 * 
 * 
 * 
 * 
 * 
 * 
 * Example:
 * 
 * 
 * 
 * 
 * BSTIterator iterator = new BSTIterator(root);
 * iterator.next();    // return 3
 * iterator.next();    // return 7
 * iterator.hasNext(); // return true
 * iterator.next();    // return 9
 * iterator.hasNext(); // return true
 * iterator.next();    // return 15
 * iterator.hasNext(); // return true
 * iterator.next();    // return 20
 * iterator.hasNext(); // return false
 * 
 * 
 * 
 * 
 * Note:
 * 
 * 
 * next() and hasNext() should run in average O(1) time and uses O(h) memory,
 * where h is the height of the tree.
 * You may assume that next() call will always be valid, that is, there will be
 * at least a next smallest number in the BST when next() is called.
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
 */
var BSTIterator = function(root) {
    this.stack = [];
    let node = root;
    while (node) {
        this.stack.push(node);
        node = node.left;
    }
    this.nextNode = this.stack.pop();
};

/**
 * @return the next smallest number
 * @return {number}
 */
BSTIterator.prototype.next = function() {
    const nextVal = this.nextNode.val;
    let node = this.nextNode;
    if (node.right) {
        node = node.right;
        while (node) {
            this.stack.push(node);
            node = node.left;
        }
        this.nextNode = this.stack.pop();
    } else {
        this.nextNode = this.stack.pop();
    }
    return nextVal;

};

/**
 * @return whether we have a next smallest number
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
    return !!this.nextNode || this.stack.length !==0;
};

const { make_tree } = require('../utils');
const [ root ] = make_tree([7,3,15,null,null,9,20], [0]);
const iterator = new BSTIterator(root);

console.log(iterator.next());    // return 3
console.log(iterator.next());    // return 7
console.log(iterator.hasNext()); // return true
console.log(iterator.next());    // return 9
console.log(iterator.hasNext()); // return true
console.log(iterator.next());    // return 15
console.log(iterator.hasNext()); // return true
console.log(iterator.next());    // return 20
console.log(iterator.hasNext()); // return false

/** 
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */

module.exports = {
    id:'173',
    title:'Binary Search Tree Iterator',
    url:'https://leetcode.com/problems/binary-search-tree-iterator/description/',
    difficulty:'Medium',
}