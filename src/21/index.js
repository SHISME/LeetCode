/**就是用了一个归并排序的合并算法
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    let result = new ListNode(0);
    let tmp_node = result;
    while(l1 && l2) {
        if (l1.val > l2.val) {
            tmp_node.next = new ListNode(l2.val);
            l2 = l2.next;
        } else {
            tmp_node.next = new ListNode(l1.val);
            l1 = l1.next;
        }
        tmp_node = tmp_node.next;
    }
    if (l1) {
        tmp_node.next = l1;
    }
    if (l2) {
        tmp_node.next = l2;
    }
    return result.next;
};