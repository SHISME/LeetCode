/*
 * @lc app=leetcode id=61 lang=javascript
 *
 * [61] Rotate List
 *
 * https://leetcode.com/problems/rotate-list/description/
 *
 * algorithms
 * Medium (26.33%)
 * Total Accepted:    176.9K
 * Total Submissions: 669.1K
 * Testcase Example:  '[1,2,3,4,5]\n2'
 *
 * Given a linked list, rotate the list to the right by k places, where k is
 * non-negative.
 * 
 * Example 1:
 * 
 * 
 * Input: 1->2->3->4->5->NULL, k = 2
 * Output: 4->5->1->2->3->NULL
 * Explanation:
 * rotate 1 steps to the right: 5->1->2->3->4->NULL
 * rotate 2 steps to the right: 4->5->1->2->3->NULL
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: 0->1->2->NULL, k = 4
 * Output: 2->0->1->NULL
 * Explanation:
 * rotate 1 steps to the right: 2->0->1->NULL
 * rotate 2 steps to the right: 1->2->0->NULL
 * rotate 3 steps to the right: 0->1->2->NULL
 * rotate 4 steps to the right: 2->0->1->NULL
 * 
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
const { make_list_node } = require('../utils');
const test1 = make_list_node([0,1,2]);
/**思路一：
 * 1.先调转整个链表
 * 2.调转前链表前k个
 * 3.调转链表后面所有选项
 * 
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    const length = getListLength(head);
    k = k % length;
    if (k === 0 || !head) {
        return head;
    }
    const reverseHead = reverse(head);
    const {head:result, lastNode, nextNode} = reverseK(reverseHead, k);
    lastNode.next = reverse(nextNode);
    return result;
    function reverse(head) {
        let cur = head;
        let lastNode = null;
        while (cur) {
            const currentNext = cur.next;
            cur.next = lastNode;
            lastNode = cur;
            cur = currentNext;
        }
        return lastNode;
    }
    function reverseK(head, k) {
        let cur = head;
        let lastNode = null;
        while (k > 0) {
            const currentNext = cur.next;
            cur.next = lastNode;
            lastNode = cur;
            cur = currentNext;
            k--;
        }
        return {
            head:lastNode,
            nextNode:cur,
            lastNode:head,
        };
    }
    function getListLength(node) {
        let length = 0;
        while (node) {
            length ++;
            node = node.next;
        }
        return length;
    }
};

/**
 * 思路2：
 * 将链表最后k个插入到链表的前面
 * @param {*} head 
 * @param {*} k 
 */
var rotateRight = function(head, k) {
    const length = getListLength(head);
    k = k % length;
    if (k === 0 || !head) {
        return head;
    }
    let lastKNode = head;
    let i = length - k;
    while (i > 1) {
        lastKNode = lastKNode.next;
        i--;
    }
    const result = lastKNode.next;
    getLastNode(lastKNode).next = head;
    lastKNode.next = null;
    return result;

    function getLastNode(head) {
        let cur = head;
        while (cur.next) {
            cur = cur.next;
        }
        return cur;
    }

    function getListLength(node) {
        let length = 0;
        while (node) {
            length ++;
            node = node.next;
        }
        return length;
    }
};
let testNode = rotateRight(test1, 2);
while(testNode) {
    console.log(testNode.val);
    testNode = testNode.next;
}

module.exports = {
    id:'61',
    title:'Rotate List',
    url:'https://leetcode.com/problems/rotate-list/description/',
    difficulty:'Medium',
}