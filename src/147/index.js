/*
 * @lc app=leetcode id=147 lang=javascript
 *
 * [147] Insertion Sort List
 *
 * https://leetcode.com/problems/insertion-sort-list/description/
 *
 * algorithms
 * Medium (36.20%)
 * Total Accepted:    167.4K
 * Total Submissions: 426.8K
 * Testcase Example:  '[4,2,1,3]'
 *
 * Sort a linked list using insertion sort.
 * 
 * 
 * 
 * 
 * 
 * A graphical example of insertion sort. The partial sorted list (black)
 * initially contains only the first element in the list.
 * With each iteration one element (red) is removed from the input data and
 * inserted in-place into the sorted list
 * 
 * 
 * 
 * 
 * 
 * Algorithm of Insertion Sort:
 * 
 * 
 * Insertion sort iterates, consuming one input element each repetition, and
 * growing a sorted output list.
 * At each iteration, insertion sort removes one element from the input data,
 * finds the location it belongs within the sorted list, and inserts it
 * there.
 * It repeats until no input elements remain.
 * 
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: 4->2->1->3
 * Output: 1->2->3->4
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: -1->5->3->4->0
 * Output: -1->0->3->4->5
 * 
 * 
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var insertionSortList = function(head) {
  function getListNodeLength(head) {
    let length = 0;
    let cur = head;
    while (cur) {
      length++;
      cur = cur.next;
    }
    return length
  }
  let length = getListNodeLength(head);
  let curHead = head;

  let insertedTmp = head.next;
  let insertedIndex = 1;
  function insertHelp(insertedIndex, insertedNode, insertedNodePre) {
    let curIndex = 0;
    let cur = curHead;
    let curPreNode = null;
    while (curIndex < insertedIndex) {
      if (insertedNode.val < cur.val) {
        if (insertedNodePre) {
          insertedNodePre.next = insertedNode.next;
        }
        insertedNode.next = cur;
        curIndex = insertedIndex;
        if (curPreNode) {
          curPreNode.next = insertedNode;
        } else {
          curHead = insertedNode;
        }
        curIndex = insertedIndex;
      }
      curPreNode =  cur;
      cur = cur.next;
      curIndex++;
    }
  }
  function getPreNode(index) {
    let pre = null;
    let curIndex = 0;
    let cur = curHead;
    while (curIndex < index) {
      pre = cur;
      cur = cur.next;
      curIndex++;
    }
    return pre;
  }
  while (insertedIndex < length) {
    const insertedPreNode = getPreNode(insertedIndex);
    const next = insertedTmp.next;
    insertHelp(insertedIndex, insertedTmp, insertedPreNode);
    insertedTmp = next;
    insertedIndex ++;
  }
  return curHead;
};

const { make_list_node, ListNode } = require('../utils');

const test1 = make_list_node([0, 1]);
// insertionSortList = function(head) {
//     if (!head || !head.next) return head;
//     const headTmp = new ListNode(null);
//     headTmp.next = head;
//     while (head) {
//
//     }
//
// }
printNodeList(insertionSortList(test1));
function printNodeList(head) {
  let cur = head;
  while(cur) {
    console.log(cur.val);
    cur = cur.next;
  }
}

module.exports = {
    id:'147',
    title:'Insertion Sort List',
    url:'https://leetcode.com/problems/insertion-sort-list/description/',
    difficulty:'Medium',
}