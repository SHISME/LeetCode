const { ListNode } = require('../utils');

const head = new ListNode(1);
head.next = new ListNode(2);
// head.next.next = head;

/**
 * 思路一
 * 
 * 用哈希表记录遍历过的节点，如果新的节点在哈希表中则说明存在环
 * 
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    const hashMap = new Map();
    while (head) {
        if (hashMap.has(head)) {
            return true;
        }
        hashMap.set(head, head);
        head = head.next;
    }
    return false;

};


/**
 * 思路二
 * 
 * 用两个指针，一个快指针一个慢指针，快指针一次移动两个，慢指针一次一个，如果快指针能够追上了慢指针则说明存在环
 * 如果快指针走完则说明不存在环
 * 
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let quick = head;
    let slow = head;
    while (quick) {
        quick = quick.next ? quick.next.next : null;
        slow = slow.next;
        if (quick === slow && quick !== null) {
            return true;
        }
    }
    return false;
};
console.log(hasCycle(head));