/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * 直接把当前节点的值指向下一个节点，然后再把节点的next指向next的next
 * 
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node) {
   node.val = node.next.val;
   node.next = node.next.next;
};

module.exports = {
    url:'https://leetcode.com/problems/delete-node-in-a-linked-list/',
    id:'237',
    title:'Delete Node in a Linked List',
    difficulty:'easy',
};