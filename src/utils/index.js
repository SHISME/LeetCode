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

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
        0
     1     2
    3 4   5 6
   7 8 
/**
 * @param {number[]} arr 
 * @return {ListNode} 
 */
function make_tree(arrs) {
    const root = new TreeNode(arrs[0]);
    const result = [root];
    for (let i = 1; i< arrs.length; i++) {

    }
}


module.exports = {
    ListNode,
    make_node,
};