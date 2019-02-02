/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const result_map = {};
    let result = {
        num:nums[0],
        count:1,
    };
    nums.forEach((num) => {
        if (result_map[num]) {
            result_map[num] += 1;
        } else {
            result_map[num] = 1;
        }
        if (result_map[num] > result.count) {
            result = {
                num,
                count:result_map[num],
            };
        }
    });
    return result.num;
};

console.log(majorityElement([3,2,3]));
console.log(majorityElement([2,2,1,1,1,2,2]));

module.exports = {
    id:'169',
    title:'Majority Element',
    url:'https://leetcode.com/problems/majority-element/',
    difficulty:'easy',
};