/**
 * 思路：
 * 
 * 1、遍历两个链表，直到两个链表都为空位置
 * 2、如果其中一个链提前遍历完了，则默认后面的数字全部为0
 * 3、最后需要记住，可能还需要进1的情况，还有需要把初始的节点忽略掉
 */

/**
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
var addTwoNumbers = function(l1, l2) {
    var result = new ListNode(0);
    var add_one = false;
    var current_node = result;
    while (l1 || l2) {
        var l1_num = l1 ? l1.val : 0;
        var l2_num = l2 ? l2.val : 0;
        var total = l1_num + l2_num;
        if (add_one) {
            total += 1;
        }
        var next_node = new ListNode(total % 10);
        add_one = total >= 10;
        l1 = l1 ? l1.next : null;
        l2 = l2 ? l2.next : null;
        current_node.next = next_node;
        current_node = next_node;
        
    }
    
    if (add_one) {
        current_node.next = new ListNode(1);
    }
    return result.next;
};