/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * 
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let headA_p = headA;
    let headB_p = headB;
    while (headA_p !== headB_p) {
       headA_p = headA_p ? headA_p.next : headA;
       headB_p = headB_p ? headB_p.next : headB;
    } 
    return headA_p;
};

/**
 * 
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let headA_length = 0;
    let headB_length = 0;
    let headA_p = headA;
    let headB_p = headB;
    while (headA_p) {
        headA_length ++;
        headA_p = headA_p.next;
    }
    while (headB_p) {
        headB_length ++;
        headB_p = headB_p.next;
    }
    headA_p = headA;
    headB_p = headB;
    if (headA_length > headB_length) {
        while (headA_length - headB_length > 0) {
            headA_length --;
            headA_p = headA_p.next;
        }
    }
    if (headB_length > headA_length) {
        while (headB_length - headA_length > 0) {
            headB_length --;
            headB_p = headB_p.next;
        }
    }
    while (headA_p !== headB_p) {
        headA_p = headA_p.next;
        headB_p = headB_p.next;
    }
    return headB_p;
};

module.exports = {
    id:'160',
    title:'Intersection of Two Linked Lists',
    url:'https://leetcode.com/problems/intersection-of-two-linked-lists/',
    difficulty:'easy',
};