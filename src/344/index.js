/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let left = 0;
    let right = s.length - 1;
    while (left < right) {
        [s[left], s[right]] = [s[right], s[left]];
        left++;
        right--;
    }
};
const s1 = ["h","e","l","l","o"];
reverseString(s1);
console.log(s1);
const s2 = ["H","a","n","n","a","h"];
reverseString(s2);
console.log(s2);

module.exports = {
    id:'344',
    title:'Reverse String',
    url:'https://leetcode.com/problems/reverse-string/',
    difficulty:'easy',
};