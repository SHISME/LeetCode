/*
 * @lc app=leetcode id=347 lang=javascript
 *
 * [347] Top K Frequent Elements
 *
 * https://leetcode.com/problems/top-k-frequent-elements/description/
 *
 * algorithms
 * Medium (53.05%)
 * Total Accepted:    181K
 * Total Submissions: 337.4K
 * Testcase Example:  '[1,1,1,2,2,3]\n2'
 *
 * Given a non-empty array of integers, return the k most frequent elements.
 * 
 * Example 1:
 * 
 * 
 * Input: nums = [1,1,1,2,2,3], k = 2
 * Output: [1,2]
 * 
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: nums = [1], k = 1
 * Output: [1]
 * 
 * 
 * Note: 
 * 
 * 
 * You may assume k is always valid, 1 ≤ k ≤ number of unique elements.
 * Your algorithm's time complexity must be better than O(n log n), where n is
 * the array's size.
 * 
 * 
 */
/**
 * 思路:
 * 
 * 用map记录每个数字的出现次数
 * 维护一个长度为k的数组，这个数组单调递减
 * 
 * 维护这个数组可能出现的情况：
 * 1、数字已经使用过，可能需要更新他在数组中的位置
 * 2、数组需要去掉一个个值才能插入
 * 3、可以直接插入
 * 
 * 
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const map = {};
    nums.forEach((num) => {
        if (map[num]) {
            map[num]++;
        } else {
           map[num] = 1;
        }
    });
    const arr = Object.keys(map).map((item) => ({num:item, count:map[item]}));
    for (let j = 0; j < k; j++) {
        for (let i = 0; i < arr.length - j - 1; i++) {
            if (arr[i].count > arr[i + 1].count) {
                [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
            }
        }
    }
    return arr.slice(arr.length - k, arr.length).map((item) => parseInt(item.num));
};

console.log(topKFrequent([1,1,1,2,4,6,2,3,7], 2));

module.exports = {
    id:'347',
    title:'Top K Frequent Elements',
    url:'https://leetcode.com/problems/top-k-frequent-elements/description/',
    difficulty:'Medium',
}