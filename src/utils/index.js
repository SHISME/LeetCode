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
function make_list_node(arr) {
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
        return make_list_node(arr);
    });
}

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

/**
 * @param {number[]} arr 
 * @param {number[]} node_indexs 
 * @return {ListNode[]} 
 */
function make_tree(arrs, node_indexs) {
    const root = new TreeNode(arrs[0]);
    const result = [root];
    for (let i = 1; i < arrs.length; i++) {
        if (arrs[i] !== null) {
            const node = new TreeNode(arrs[i]);
            result.push(node);
            if ((i + 1) % 2 === 0) {
                result[(i + 1) / 2 - 1].left = node;
                continue;
            }
            result[(i / 2) - 1].right = node;
        }
    }
    if (node_indexs !== undefined) {
        const nodes = [];
        node_indexs.forEach((index) => {
            nodes.push(result[index]);
        });
        return nodes;
    }
    return [];
}


module.exports = {
    ListNode,
    make_list_node,
    make_tree,
};