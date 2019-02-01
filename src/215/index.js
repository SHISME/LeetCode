/**
 * 思路：
 * 
 * 一、排序后直接取第k个数
 * 二、维护一个单调递增队列，队列长度小k的时候，下一个数使用插入排序的方式来插入，
 * 
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    const list = [];
    nums.forEach((num) => {
        if (list.length < k || list[k - 1] < num) {
            insertToList(num);
        }
    });
    return list.pop();

    function insertToList(num) {
        if (list.length === k) {
            list.pop();
        }
        list.push(num);
        for (let i = list.length - 1; i > 0; i--) {
            if (list[i - 1] < list[i]) {
                const tmp = list[i];
                list[i] = list[i-1]
                list[i - 1] = tmp;
                continue;
            }
            return;
        }
    }
};

console.log(findKthLargest([3,2,1,5,6,4], 2));
console.log(findKthLargest([3,2,3,1,2,4,5,5,6], 4));


module.exports = {
    id:'215',
    title:'Kth Largest Element in an Array',
    url:'https://leetcode.com/problems/kth-largest-element-in-an-array/',
    difficulty:'medium',
};