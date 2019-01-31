/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    return nums.reduce((res, cur) => res ^ cur);
};

console.log(singleNumber([1,2,2]))

module.exports = {
    id:'136',
    title:'Single Number',
    url:'https://leetcode.com/problems/single-number/',
    difficulty:'easy',
};
