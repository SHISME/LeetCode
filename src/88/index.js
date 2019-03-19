/*
 * @lc app=leetcode id=88 lang=javascript
 *
 * [88] Merge Sorted Array
 *
 * https://leetcode.com/problems/merge-sorted-array/description/
 *
 * algorithms
 * Easy (34.63%)
 * Total Accepted:    337.5K
 * Total Submissions: 963.4K
 * Testcase Example:  '[1,2,3,0,0,0]\n3\n[2,5,6]\n3'
 *
 * Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as
 * one sorted array.
 * 
 * Note:
 * 
 * 
 * The number of elements initialized in nums1 and nums2 are m and n
 * respectively.
 * You may assume that nums1 has enough space (size that is greater or equal to
 * m + n) to hold additional elements from nums2.
 * 
 * 
 * Example:
 * 
 * 
 * Input:
 * nums1 = [1,2,3,0,0,0], m = 3
 * nums2 = [2,5,6],       n = 3
 * 
 * Output: [1,2,2,3,5,6]
 * 
 * 
 */
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    const copyNums1 = nums1.slice(0, m);
    let nums1Index = 0;
    let nums2Index = 0;
    let curIndex = 0;
    while (
        nums1Index < m &&
        nums2Index < n
    ) {
        if (copyNums1[nums1Index] > nums2[nums2Index]) {
            nums1[curIndex] = nums2[nums2Index];
            nums2Index++;
        } else {
            nums1[curIndex] = copyNums1[nums1Index];
            nums1Index++;
        }
        curIndex++;
    }
    while (nums1Index < m) {
        nums1[curIndex] = copyNums1[nums1Index];
        curIndex++;
        nums1Index++;
    }
    while (nums2Index < n) {
        nums1[curIndex] = nums2[nums2Index];
        curIndex++;
        nums2Index++;
    }
    console.log(nums1);
};
merge([1,2,3,0,0,0], 3, [2, 5, 6], 3);

module.exports = {
    id:'88',
    title:'Merge Sorted Array',
    url:'https://leetcode.com/problems/merge-sorted-array/description/',
    difficulty:'Easy',
}