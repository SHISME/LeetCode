const { ListNode } = require('../utils');

const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = head;
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
detectCycle = function(head) {
  let quick = head;
  let slow = head;
  while (quick) {
      quick = quick.next ? quick.next.next : null;
      slow = slow.next;
      if (quick === slow && quick !== null) {
          break;
      }
  }
  if (!quick) {
      return null
  }
  quick = head;
  while (quick !== slow) {
      quick = quick.next;
      slow = slow.next;
  }
  return quick;
};

console.log(detectCycle(head));

module.exports = {
    id:'142',
    title:'Linked List Cycle II',
    url:'https://leetcode.com/problems/linked-list-cycle-ii/',
    difficulty:'medium',
};
