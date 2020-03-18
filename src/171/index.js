/*
 * @lc app=leetcode id=171 lang=javascript
 *
 * [171] Excel Sheet Column Number
 *
 * https://leetcode.com/problems/excel-sheet-column-number/description/
 *
 * algorithms
 * Easy (50.71%)
 * Total Accepted:    265.2K
 * Total Submissions: 496.7K
 * Testcase Example:  '"A"'
 *
 * Given a column title as appear in an Excel sheet, return its corresponding
 * column number.
 * 
 * For example:
 * 
 * 
 * ⁠   A -> 1
 * ⁠   B -> 2
 * ⁠   C -> 3
 * ⁠   ...
 * ⁠   Z -> 26
 * ⁠   AA -> 27
 * ⁠   AB -> 28 
 * ⁠   ...
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: "A"
 * Output: 1
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: "AB"
 * Output: 28
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: "ZY"
 * Output: 701
 * 
 */
/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
    let res = 0;
    let cur = 1;
    for (let i = s.length - 1; i >= 0; i--) {
        res += (s.charCodeAt(i) - 64) * cur;
        cur *= 26;
    }
    return res;
};

console.log(titleToNumber('ZY'));

module.exports = {
    id:'171',
    title:'Excel Sheet Column Number',
    url:'https://leetcode.com/problems/excel-sheet-column-number/description/',
    difficulty:'Easy',
}