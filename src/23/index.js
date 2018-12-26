const { ListNode, make_list_node, make_lists } = require('../utils/');

const list_1 = make_list_node([-8,-7,-6,-3,-2,-2,0,3]);
const list_2 = make_list_node([-10,-6,-4,-4,-4,-2,-1,4]);
const list_3 = make_list_node([-10,-9,-8,-8,-6]);
const list_4 = make_list_node([-10,0,4]);


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    function insert_to_list(node, lists, left, right) {
        if (right - left <= 2) {
            if (node.val > lists[right].val) {
                lists = lists.splice(right + 1, 0, node);
                return;
            }
            if (node.val < lists[left].val) {
                lists = lists.splice(left, 0, node);
                return;
            }
            if (right - left === 2) {
                if (lists[left + 1].val >= node.val) {
                    lists.splice(left + 1, 0, node);
                } else {
                    lists.splice(right, 0, node);                    
                }
                return;
            }
            lists.splice(left + 1, 0, node);
            return;
        }
        let i = Math.ceil((right - left) / 2);

        if (i < left) {
            i = left;
        }
        if (node.val < lists[i].val) {
            return insert_to_list(node, lists, 0, i - 1);
        } 
        if (node.val > lists[i].val) {
            return insert_to_list(node, lists, i + 1, right);
        }
        lists.splice(i, 0, node);
    }
    const result = new ListNode(0);
    let node = result;
    lists = lists.filter(list => list !== null);
    if (lists.length === 0) {
        return null;
    }
    lists.sort((a, b) => a.val - b.val);
    while (lists.length > 1) {
        node.next = new ListNode(lists[0].val);
        
        node = node.next;
        lists[0] = lists[0].next;
        const go_to_next_node = lists.shift();

        if (go_to_next_node) {
            insert_to_list(go_to_next_node, lists, 0, lists.length - 1);
        }
        
    }
    node.next = lists[0];
    return result.next;
};
let temp_node = mergeKLists([list_1,  list_2, list_3, list_4]);

while(temp_node) {
    console.log(temp_node.val);
    temp_node = temp_node.next;
}