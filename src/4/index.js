/**思路：
 * 
 * 1、使用归并排序的思想，把两个数组合成为一个，再提取数组的中间项，时间复杂度为 m + n
 * 
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
   let nums = [];
   const total = nums1.length + nums2.length;
   const medium = Math.floor(total/2);

   let i = 0, nums1_cursor = 0, nums2_cursor = 0;
   while( i <= total) {
        if (typeof nums1[nums1_cursor] === 'undefined') {
            nums = nums.concat(nums2.slice(nums2_cursor, nums2.length));
            i = total + 1;
            continue;
        }
        if (typeof nums2[nums2_cursor] === 'undefined') {
            nums = nums.concat(nums1.slice(nums1_cursor, nums1.length));
            i = total + 1;
            continue;
        }
       if (nums1[nums1_cursor] < nums2[nums2_cursor]) {
           nums.push(nums1[nums1_cursor]);
           nums1_cursor ++;
       } else {
           nums.push(nums2[nums2_cursor]);
           nums2_cursor++;
       }
       i++;
   }

   if (total % 2 === 0) {
       return (nums[medium] + nums[medium - 1]) / 2;
   } else {
       return nums[medium];
   }
};

console.log(findMedianSortedArrays([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22], [0, 6]));