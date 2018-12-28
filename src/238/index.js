/**
 * 思路：
 * 
 * 设数组为[x1,x2,...,xn]
 * 
 * 1.用一个数，从右往左，累乘，并将结果不断的放入到结果数组中，注意第一项要忽略不乘
 * 此时得到结果
 * [xn*xn-1*...x2,...,xn,1]
 * 
 * 2.用一个数字从左往右累乘，注意第一项忽略不乘
 * 此时得到结果
 * [1,x1,x1*x2, ..., x1*x2...xn-1]
 * 
 * 3.这是我们可以注意到上下两个数组的每一项相乘就是最终的结果
 * 
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const result = [];
    let left = 1;
    let right = 1;
    for (let i = nums.length - 1; i >=0; i--) {
        result[i] = right;
        right *= nums[i];
    }
    nums.forEach((num, index) => {
        result[index] *= left;
        left *= num;
    });
    return result;
};
console.log(productExceptSelf([1,2,3,4]));