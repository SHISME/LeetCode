const { ListNode, make_list_node } = require('../utils/');

/**
 * 思路：
 *
 * 1.将分成 k 个一组装进一个数组中
 * 2.从后往前遍历数组
 * 3.再把组数组reverse
 * 4.返回第一组的最后一项
 *
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup1 = function (head, k) {
    if (k === 1) {
        return head;
    }
    const arr = [];
    let chunk = [];
    let node = head;
    while (node) {
        chunk.push(node);
        if (chunk.length === k) {
            arr.push(chunk);
            chunk = [];
        }
        node = node.next;
    }
    if (chunk.length < k && chunk.length > 0) {
        arr.push(chunk);
    }
    if (arr.length === 1 && arr[0].length < k) {
        return head;
    }
    for (let i = arr.length - 2; i >= 0; i--) {
        chunk = arr[i];
        for (let j = chunk.length - 1; j > 0; j--) {
            chunk[j].next = chunk[j - 1];
        }
        const arr_temp = arr[i + 1];
        chunk[0].next = arr[i + 1][arr[i + 1].length - 1];
    }
    chunk = arr[arr.length - 1];
    if (chunk.length === k) {
        for (let j = chunk.length - 1; j > 0; j--) {
            chunk[j].next = chunk[j - 1];
        }
        chunk[0].next = null;
    } else {
        if (arr[arr.length - 2]) arr[arr.length - 2][0].next = chunk[0];
    }
    return arr[0][arr[0].length - 1];
};

/**
 * 思路：
 *
 * 参考了一些别人的答案，感觉思路更清晰简单一些，这里试着自己实现一遍
 *
 * 这里用了递归的思想，我们当前的最后最后一项需要知道下一个reverse的第一项，
 *
 * 每k个我们自己做一次reverse
 *
 * 1.现获取后面的第一项 temp_node
 * 2.缓存head 的 下一项 next_node
 * 3.head.next 指向 temp_node
 * 4.temp_node = head
 * 5.head = next_node
 *
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup2 = function (head, k) {
    if (k === 1) {
        return head;
    }
   let tempNode = head;
   let i = 1;
   while (i < k && tempNode) {
       tempNode = tempNode.next;
       i++;
   }
   if (i === k && tempNode) {
       tempNode = reverseKGroup(tempNode.next, k);
       while (i > 0) {
           const next= head.next;
           head.next = tempNode;
           tempNode = head;
           head = next;
           i--;
       }
       return tempNode;
   }
   return head;
}

/**
 *
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
    if (k === 1) {
        return head;
    }
    let tmpNode = head;
    let length = 0;
    while (tmpNode) {
        length++;
        tmpNode = tmpNode.next;
    }
    let groupCount = Math.floor(length / k);
    if (groupCount === 0) {
        return head;
    }
    let preLastNode = head;
    let cur = head;
    let j = 0;
    while (j < groupCount) {
        let i = 1;
        let pre = null;
        const firstNode = cur;
        while (i < k) {
            const next = cur.next;
            cur.next = pre;
            pre = cur;
            cur = next;
            i++;
        }
        j++;
        if (j === 1) {
            head = cur;
        } else {
            preLastNode.next = cur;
            preLastNode = firstNode;
        }
        const next = cur.next;
        cur.next = pre;
        cur = next;
    }
    preLastNode.next = cur;
    return head;
}

let test = make_list_node([1, 2, 3, 4,5]);
test = reverseKGroup(test, 5);
while (test) {
    console.log(test.val);
    test = test.next;
}
