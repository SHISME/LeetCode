/*
 * @lc app=leetcode id=92 lang=javascript
 *
 * [92] Reverse Linked List II
 *
 * https://leetcode.com/problems/reverse-linked-list-ii/description/
 *
 * algorithms
 * Medium (33.82%)
 * Total Accepted:    241.1K
 * Total Submissions: 647.6K
 * Testcase Example:  '[1,2,3,4,5]\n2\n4'
 *
 * Reverse a linked list from position m to n. Do it in one-pass.
 *
 * Note: 1 ≤ m ≤ n ≤ length of list.
 *
 * Example:
 *
 *
 * Input: 1->2->3->4->5->NULL, m = 2, n = 4
 * Output: 1->4->3->2->5->NULL
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
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween1 = function(head, m, n) {
    if (!head || !head.next) {
        return head;
    }
    const result = new ListNode();
    let resultTmp = result;
    let reverseNodeHead;
    while (head) {
        const curNode = new ListNode(head.val);
        if (m > 1) {
            resultTmp.next = curNode;
            resultTmp = curNode;
            m--;
            n--;
        }else if (n) {
            if (!reverseNodeHead) {
                reverseNodeHead = curNode;
                n--;
            } else {
                curNode.next = reverseNodeHead;
                reverseNodeHead = curNode;
                n--
            }
        } else {
            if (reverseNodeHead) {
                resultTmp.next = reverseNodeHead;
                while (reverseNodeHead.next) {
                    reverseNodeHead = reverseNodeHead.next
                }
                resultTmp = reverseNodeHead;
                reverseNodeHead = null;
            }
            resultTmp.next = curNode;
            resultTmp = curNode;
        }
        head = head.next;
    }

    if (reverseNodeHead) {
      resultTmp.next = reverseNodeHead;
    }
    return result.next;
};

/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = (head, m, n) => {
    if (!head || !head.next || m === n) {
        return head;
    }
    let headTmp = head;
    let i = 1;
    let reverseLastNode = head;
    while (i < m) {
        reverseLastNode = headTmp;
        headTmp = headTmp.next;
        i++;
    }
    let reverseTmp = null;
    const firstReverseNode = headTmp;
    while (i < n) {
        const next = headTmp.next;
        headTmp.next = reverseTmp;
        reverseTmp = headTmp;
        headTmp = next;
        i++;
    }
    reverseLastNode.next = headTmp;
    firstReverseNode.next = headTmp.next;
    headTmp.next = reverseTmp;

    if (m === 1) {
        return headTmp;
    }
    return head;
}

const { make_list_node, ListNode } = require('../utils');
const node = make_list_node([1, 2, 3, 4, 5])
let res = reverseBetween(node, 1, 1);
while (res) {
    console.log(res.val);
    res = res.next;
}
module.exports = {
    id:'92',
    title:'Reverse Linked List II',
    url:'https://leetcode.com/problems/reverse-linked-list-ii/description/',
    difficulty:'Medium',
}
