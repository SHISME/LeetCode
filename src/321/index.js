/*
 * @lc app=leetcode id=321 lang=javascript
 *
 * [321] Create Maximum Number
 *
 * https://leetcode.com/problems/create-maximum-number/description/
 *
 * algorithms
 * Hard (25.11%)
 * Total Accepted:    29.1K
 * Total Submissions: 115.5K
 * Testcase Example:  '[3,4,6,5]\n[9,1,2,5,8,3]\n5'
 *
 * Given two arrays of length m and n with digits 0-9 representing two numbers.
 * Create the maximum number of length k <= m + n from digits of the two. The
 * relative order of the digits from the same array must be preserved. Return
 * an array of the k digits.
 * 
 * Note: You should try to optimize your time and space complexity.
 * 
 * Example 1:
 * 
 * 
 * Input:
 * nums1 = [3, 4, 6, 5]
 * nums2 = [9, 1, 2, 5, 8, 3]
 * k = 5
 * Output:
 * [9, 8, 6, 5, 3]
 * 
 * Example 2:
 * 
 * 
 * Input:
 * nums1 = [6, 7]
 * nums2 = [6, 0, 4]
 * k = 5
 * Output:
 * [6, 7, 6, 0, 4]
 * 
 * Example 3:
 * 
 * 
 * Input:
 * nums1 = [3, 9]
 * nums2 = [8, 9]
 * k = 3
 * Output:
 * [9, 8, 9]
 * 
 */
/**
 * 思路：
 * 
 * 设dp[i][j] 为nums1取i个num，nums2取j个num的最优解,i + j = k;
 * 
 * 我们再单独对nums1分析，如果我们要取i个数字要怎么取
 * 如果i=== nums1.length 我们直接全取就行了
 * 如果 i < nums1.length 我们就只能取一部分
 * 这里有个子问题是我们要找到nums1的取n个，保持排序的时候的最大值
 * 
 * 
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[]}
 */
var maxNumber = function (nums1, nums2, k) {
    function findMax(nums, k) {
        if (k === nums.length) {
            return nums.join('');
        }
        let res = '';
        while (k) {
            let num = Math.max.apply(null, nums.slice(0, nums.length - k + 1));
            res += num;
            nums = nums.slice(nums.indexOf(num) + 1);
            k--;
        }
        return res;
    }
    function merge(nums1, nums2) {
        let res = '';
        let i = 0, j=0, l1 = nums1.length, l2 = nums2.length;
        while (i < l1 && j < l2) {
            if (nums1[i] > nums2[j]) {
                res += nums1[i];
                i++;
            } else if (nums1[i] < nums2[j]) {
                res += nums2[j];
                j++;
            } else {
                if (nums1.slice(i) > nums2.slice(j)) {
                    res += nums1[i];
                    i++;
                } else {
                    res += nums2[j];
                    j++;
                }
            }
        }
        while (i < l1) {
            res += nums1[i];
            i++;
        }
        while (j < l2) {
            res += nums2[j];
            j++;
        }
        return res;
    }
    let max = '';
    let n = Math.min(nums1.length, k);
    let i = 0;
    while (i <= n) {
        const j = k - i;
        if (j > nums2.length) {
            i++;
            continue;
        }
        const curRes = merge(findMax(nums1, i), findMax(nums2, j));
        max = curRes > max ? curRes : max;
        i++;
    }
    return max.split('').map(x => parseInt(x));
}

// [9, 8, 6, 5, 3]
// console.log(maxNumber([3, 4, 6, 5],[9, 1, 2, 5, 8, 3], 5));

// [6, 7, 6, 0, 4]
// console.log(maxNumber([6, 7],[6, 0, 4], 5));

// // [9,7,5]
console.log(maxNumber([8, 6, 9],[1,7, 5], 3));

// [9,6,5,5,3,6,2]
// console.log(maxNumber([2,2,0,6,8,9,6],[5,2,4,5,3,6,2], 7));

module.exports = {
    id:'321',
    title:'Create Maximum Number',
    url:'https://leetcode.com/problems/create-maximum-number/description/',
    difficulty:'Hard',
}