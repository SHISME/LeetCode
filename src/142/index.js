const { ListNode } = require('../utils');

const head = new ListNode(1);
head.next = new ListNode(2);
// head.next.next = head;
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
var detectCycle = function(head) {
    const hashMap = new Map();
    while(head) {
        hashMap.set(head, head);
        head = head.next;
        if (hashMap.has(head)) {
            return head;
        }
    }
    return null;
};

console.log(detectCycle(head));