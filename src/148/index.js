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
var sortList = function(head) {
    if (!head || !head.next) {
        return head;
    }
    let fast = head;
    let slow = head;
    let pre = head;
    while (fast && fast.next) {
        pre = slow;
        fast = fast.next.next;
        slow = slow.next;
    }
    pre.next = null;
    const left = sortList(head);
    const right = sortList(slow);
    return merge(left, right);
};

function merge(left, right) {
    let result = new ListNode(-1);
    let cur = result;
    while (left && right) {
        if (left.val > right.val) {
            cur.next = right;
            right = right.next;
        } else {
            cur.next = left;
            left = left.next;         
        }
        cur = cur.next;
    }
    while (left) {
        cur.next = left;
        cur = cur.next;
        left = left.next;
    }
    while (right) {
        cur.next = right;
        cur = cur.next;
        right = right.next;
    }
    return result.next;
}

module.exports = {
    id:'148',
    url:'https://leetcode.com/problems/sort-list/',
    difficulty:'medium',
    title:'Sort List',
    have_md:true,
};