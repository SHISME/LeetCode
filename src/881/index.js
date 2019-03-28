/*
 * @lc app=leetcode id=881 lang=javascript
 *
 * [881] Boats to Save People
 *
 * https://leetcode.com/problems/boats-to-save-people/description/
 *
 * algorithms
 * Medium (42.63%)
 * Total Accepted:    12.9K
 * Total Submissions: 29.8K
 * Testcase Example:  '[1,2]\n3'
 *
 * The i-th person has weight people[i], and each boat can carry a maximum
 * weight of limit.
 * 
 * Each boat carries at most 2 people at the same time, provided the sum of the
 * weight of those people is at most limit.
 * 
 * Return the minimum number of boats to carry every given person.  (It is
 * guaranteed each person can be carried by a boat.)
 * 
 * 
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: people = [1,2], limit = 3
 * Output: 1
 * Explanation: 1 boat (1, 2)
 * 
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: people = [3,2,2,1], limit = 3
 * Output: 3
 * Explanation: 3 boats (1, 2), (2) and (3)
 * 
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: people = [3,5,3,4], limit = 5
 * Output: 4
 * Explanation: 4 boats (3), (3), (4), (5)
 * 
 * Note:
 * 
 * 
 * 1 <= people.length <= 50000
 * 1 <= people[i] <= limit <= 30000
 * 
 * 
 * 
 * 
 * 
 */
/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function(people, limit) {
    let result = 0;
    let left = 0;
    let right = people.length - 1;
    people.sort((a, b) => b - a);
    while (left <= right) {
        let cur = 0;
        if (people[left] + people[right] <= limit) {
            left++;
            right--;
        } else {
            left++;
        }
        result++;
    }
    return result;
};

// console.log(numRescueBoats([1,2], 3));

// console.log(numRescueBoats([3,2,3,2,2], 6));
console.log(numRescueBoats([2,49,10,7,11,41,47,2,22,6,13,12,33,18,10,26,2,6,50,10], 50));

module.exports = {
    id:'881',
    title:'Boats to Save People',
    url:'https://leetcode.com/problems/boats-to-save-people/description/',
    difficulty:'Medium',
}