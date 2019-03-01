/*
 * @lc app=leetcode id=698 lang=javascript
 *
 * [698] Partition to K Equal Sum Subsets
 *
 * https://leetcode.com/problems/partition-to-k-equal-sum-subsets/description/
 *
 * algorithms
 * Medium (40.77%)
 * Total Accepted:    35.2K
 * Total Submissions: 85.5K
 * Testcase Example:  '[4,3,2,3,5,2,1]\n4'
 *
 * Given an array of integers nums and a positive integer k, find whether it's
 * possible to divide this array into k non-empty subsets whose sums are all
 * equal.
 * 
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: nums = [4, 3, 2, 3, 5, 2, 1], k = 4
 * Output: True
 * Explanation: It's possible to divide it into 4 subsets (5), (1, 4), (2,3),
 * (2,3) with equal sums.
 * 
 * 
 * 
 * 
 * Note:
 * 
 * 
 * 1 <= k <= len(nums) <= 16.
 * 0 < nums[i] < 10000.
 * 
 * 
 */
/**
 * k个分组，我们可以选择每这个元素分配某一个分组当中，每个分组的值必须小于等于 total / k
 * 递归的找到所有分配方法，只要有一个能够分配完所有元素，则返回true
 * 
 * 在此基础上我们还可以做优化，我们可以先排序，如果最大的元素大于平均值则可以直接返回false
 * 
 * 
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var canPartitionKSubsets = function(nums, k) {
    const total = nums.reduce((res, cur) => res + cur, 0);
    const targetNum = Math.floor(total / k);
    if (targetNum * k !== total) {
        return false;
    }
    nums.sort((a, b) => a - b);
    let row = nums.length - 1;
    if (nums[row] > targetNum) {
        return false;
    }
    while ( row >= 0 && nums[row] === targetNum) {
        k--;
        row--;
    }
    return search(Array.from({length:k}).map(() => 0), row, nums, targetNum);

    function search(groups, row, nums, target) {
        if (row < 0) return true;
        let v = nums[row--];
        for (let i = 0; i < groups.length; i++) {
            if (groups[i] + v <= target) {
                groups[i] += v;
                // 这里计算出
                if (search(groups, row, nums, target)) return true;
                groups[i] -= v;
            }
            if (groups[i] == 0) break;
        }
        return false;
    }
    

};

console.log(canPartitionKSubsets([10, 10, 10, 7, 7, 7, 7, 7, 7, 6,6,6], 3));



module.exports = {
    id:'698',
    title:'Partition to K Equal Sum Subsets',
    url:'https://leetcode.com/problems/partition-to-k-equal-sum-subsets/description/',
    difficulty:'Medium',
}