/**
 * 思路：
 * 
 * 数组中每个数我们可以选择用和不用，缓存一个结果，对结果分别做用很不用的交集
 * 
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let result = [];
    nums.forEach((num) => {
        subsetsHelp(num);
    });
    return result;
    function subsetsHelp(num) {
        const new_result = [];
        if (result.length === 0) {
            result.push([]);
            result.push([num]);
        } else {
            result.forEach((item) => {
                new_result.push(item.concat([num]));
                new_result.push(item);
            });
            result = new_result;
        }
    }
};

console.log(subsets([1,2,3]));

module.exports = {
    id:'78',
    title:'Subsets',
    url:'https://leetcode.com/problems/subsets/',
    difficulty:'medium',
};