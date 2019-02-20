/*
 * @lc app=leetcode id=214 lang=javascript
 *
 * [214] Shortest Palindrome
 *
 * https://leetcode.com/problems/shortest-palindrome/description/
 *
 * algorithms
 * Hard (26.84%)
 * Total Accepted:    69.2K
 * Total Submissions: 256.9K
 * Testcase Example:  '"aacecaaa"'
 *
 * Given a string s, you are allowed to convert it to a palindrome by adding
 * characters in front of it. Find and return the shortest palindrome you can
 * find by performing this transformation.
 * 
 * Example 1:
 * 
 * 
 * Input: "aacecaaa"
 * Output: "aaacecaaa"
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: "abcd"
 * Output: "dcbabcd"
 */
/**
 * 
 * @param {string} s
 * @return {string}
 */
var shortestPalindrome = function (s) {
    const reverse_str = s.split('').reverse().join('');
    if (s === reverse_str) {
        return s;
    }
    const merge_str = s + '#'+ s.split('').reverse().join('');
    return s.substring(kmp(merge_str).pop(), s.length).split('').reverse().join('') + s;
    function kmp(str) {
        const next = [0];
        let prefix = 0;
        let suffix = 1;
        while (suffix < str.length) {
            if (str[prefix] === str[suffix]) {
                next[suffix] = prefix + 1;
                suffix++;
                prefix++;
            } else if(prefix === 0) {
                next[suffix] = 0;
                suffix++;
            } else {
                prefix = next[prefix - 1];
            }
        }
        return next;
    }
};
console.log(shortestPalindrome("abcd"));

module.exports = {
    id: '214',
    title: 'Shortest Palindrome',
    url: 'https://leetcode.com/problems/shortest-palindrome/description/',
    difficulty: 'Hard',
    have_md:true,
}