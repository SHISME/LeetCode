/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
const { ListNode, make_node } = require('../utils/');

/** 
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    if (!head) {
        return null;
    }
    function switch_two_node(left, right) {
        if (right) {
            left.next = right.next ? (right.next.next?right.next.next:right.next) : null;
            right.next = left?left:null;
        }

    }
    const result = head.next;
    if (!result) {
        return head;
    }
    let node = head;
    while (node) {
        const next = node.next ? node.next.next : null;
        switch_two_node(node, node.next);
        node = next;
    }
    return result;
};


const test = make_node([1]);
let temp_node = swapPairs(test);

while(temp_node) {
    console.log(temp_node.val);
    temp_node = temp_node.next;
}