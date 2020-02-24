/*
 * @lc app=leetcode id=473 lang=javascript
 *
 * [473] Matchsticks to Square
 *
 * https://leetcode.com/problems/matchsticks-to-square/description/
 *
 * algorithms
 * Medium (35.53%)
 * Total Accepted:    31.2K
 * Total Submissions: 84.5K
 * Testcase Example:  '[1,1,2,2,2]'
 *
 * Remember the story of Little Match Girl? By now, you know exactly what
 * matchsticks the little match girl has, please find out a way you can make
 * one square by using up all those matchsticks. You should not break any
 * stick, but you can link them up, and each matchstick must be used exactly
 * one time.
 * 
 * ⁠Your input will be several matchsticks the girl has, represented with their
 * stick length. Your output will either be true or false, to represent whether
 * you could make one square using all the matchsticks the little match girl
 * has.
 * 
 * Example 1:
 * 
 * Input: [1,1,2,2,2]
 * Output: true
 * 
 * Explanation: You can form a square with length 2, one side of the square
 * came two sticks with length 1.
 * 
 * 
 * 
 * Example 2:
 * 
 * Input: [3,3,3,3,4]
 * Output: false
 * 
 * Explanation: You cannot find a way to form a square with all the
 * matchsticks.
 * 
 * 
 * 
 * Note:
 * 
 * The length sum of the given matchsticks is in the range of 0 to 10^9.
 * The length of the given matchstick array will not exceed 15.
 * 
 * 
 */
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var makesquare = function(nums) {
    if (nums.length < 4) {
        return false;
    }
    const total = nums.reduce((res, cur) => res + cur);
    const width = total / 4;
    if (nums[nums.length - 1] > width || total % 4 !== 0) {
        return false;
    }
    const sides = Array.from({length: 4}, () => 0);
    function makeSquareHelp(j) {
        if (j === nums.length) {
            return sides.every(side => side === width);
        }
        const num = nums[j];
        for (let i = 0; i < 4; i++) {
            if (sides[i] + num <= width) {
                sides[i] += num;
                if (makeSquareHelp(j + 1)) {
                    return true
                }
                sides[i] -= num;
            }
        }
        return false;
    }
    return makeSquareHelp(0);
};

console.log(makesquare([1,1,2,2,3,3]))
console.log(makesquare([3,3,3,3,4]))

module.exports = {
    id:'473',
    title:'Matchsticks to Square',
    url:'https://leetcode.com/problems/matchsticks-to-square/description/',
    difficulty:'Medium',
}