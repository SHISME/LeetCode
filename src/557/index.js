/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    return s.split(' ').map((word) => word.split('').reverse().join('')).join(' ');
};

console.log(reverseWords("Let's take LeetCode contest"))

module.exports = {
    id:'557',
    title:'Reverse Words in a String III',
    url:'https://leetcode.com/problems/reverse-words-in-a-string-iii/',
    difficulty:'easy',
};