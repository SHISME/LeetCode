const { make_list_node, ListNode } = require('../utils');
const head = make_list_node([1,2,3,4,5]);

/** 
 * 迭代
 * 
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if (!head){
        return head;
    }
    let result = new ListNode(head.val);
    head = head.next;
    while(head) {
        const current_node = new ListNode(head.val);
        current_node.next = result;
        result = current_node;
        head = head.next;
    }
    return result;
};

/**
 * 递归
 * 
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if (!head || !head.next){
        return head;
    }
    const p = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    return p;
};

let test = reverseList(head);
while (test) {
    console.log(test.val);
    test = test.next;
}
console.log(head);