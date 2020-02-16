/*
 * @lc app=leetcode id=82 lang=javascript
 *
 * [82] Remove Duplicates from Sorted List II
 *
 * https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/description/
 *
 * algorithms
 * Medium (32.01%)
 * Total Accepted:    222.2K
 * Total Submissions: 630.6K
 * Testcase Example:  '[1,2,3,3,4,4,5]'
 *
 * Given a sorted linked list, delete all nodes that have duplicate numbers,
 * leaving only distinct numbers from the original list.
 * 
 * Example 1:
 * 
 * 
 * Input: 1->2->3->3->4->4->5
 * Output: 1->2->5
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: 1->1->1->2->3
 * Output: 2->3
 * 
 * 
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    if (!head || !head.next) {
        return head;
    }
    const result = new ListNode(null);
    let tmp = result;
    let leftPoint = head;
    let rightPoint = head.next;
    while (rightPoint) {
        if (leftPoint.val === rightPoint.val) {
            rightPoint = rightPoint.next;
            continue;
        }
        if (leftPoint.next === rightPoint) {
            tmp.next = new ListNode(leftPoint.val);
            tmp = tmp.next;
        }
        leftPoint = rightPoint;
        rightPoint = rightPoint.next;
    }
    if (leftPoint.next === null) {
        tmp.next = leftPoint;
    }
    return result.next;
};

const { make_list_node, ListNode } = require('../utils');
const example1 = make_list_node([1, 2, 3, 3, 4, 4, 5]);
const example2 = make_list_node([1, 1, 1, 2, 3]);

console.log(deleteDuplicates(example1));
console.log(deleteDuplicates(example2));
module.exports = {
    id:'82',
    title:'Remove Duplicates from Sorted List II',
    url:'https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/description/',
    difficulty:'Medium',
}