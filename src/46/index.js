/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const result = [];
    permuteHelp(nums, []);
    return result;
    function permuteHelp(arrs, permute_arr) {
        if (arrs.length === 0) {
            result.push(permute_arr);
            return;
        }
        for (let i = 0; i < arrs.length; i++) {
            permute_arr.push(arrs[i]);
            permuteHelp(arrs.filter((item) => permute_arr.indexOf(item) === -1), [...permute_arr]);
            permute_arr.pop();
        }
    }

};

console.log(permute([1,2,3]))

module.exports = {
    id:'46',
    title:'Permutations',
    url:'https://leetcode.com/problems/permutations/',
    difficulty:'medium',
};