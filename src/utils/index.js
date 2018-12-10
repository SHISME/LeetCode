 /**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
function ListNode(val) {
    this.val = val;
    this.next = null;
}
/**
 * @param {number[]} arr 
 * @return {ListNode} 
 */
function make_node(arr) {
    const head = new ListNode(0);
    let temp_node = head;
    arr.forEach((num) => {
        temp_node.next = new ListNode(num);
        temp_node = temp_node.next;
    });
    return head.next;
}

/**
 * @param {number[][]} arrs 
 * @return {ListNode[]} 
 */
function make_lists(arrs) {
    return arrs.map((arr) => {
        return make_node(arr);
    });
}


module.exports = {
    ListNode,
    make_node,
};