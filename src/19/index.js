/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
function ListNode(val) {
    this.val = val;
    this.next = null;
}

const head_node = new ListNode(1);
head_node.next = new ListNode(2);
head_node.next.next = new ListNode(3);
head_node.next.next.next = new ListNode(4);
head_node.next.next.next.next = new ListNode(5);
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let current_node = head;
   const node = [];
   while (current_node.next) {
       node.push(current_node);
       current_node = current_node.next;
   }
   node.push(current_node);
   if (n > node.length) {
       return null;
   }
   if (n === node.length) {
       return node[0].next;
   }
   node[node.length - n - 1].next = node[node.length - n +1];

   return head;
};
let temp_node = removeNthFromEnd(head_node, 2);
while(temp_node.next) {
    console.log(temp_node.val);
    temp_node = temp_node.next;
}
console.log(temp_node.val);