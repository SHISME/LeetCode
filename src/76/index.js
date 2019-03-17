/*
 * @lc app=leetcode id=76 lang=javascript
 *
 * [76] Minimum Window Substring
 *
 * https://leetcode.com/problems/minimum-window-substring/description/
 *
 * algorithms
 * Hard (29.62%)
 * Total Accepted:    216.3K
 * Total Submissions: 720.7K
 * Testcase Example:  '"ADOBECODEBANC"\n"ABC"'
 *
 * Given a string S and a string T, find the minimum window in S which will
 * contain all the characters in T in complexity O(n).
 * 
 * Example:
 * 
 * 
 * Input: S = "ADOBECODEBANC", T = "ABC"
 * Output: "BANC"
 * 
 * 
 * Note:
 * 
 * 
 * If there is no such window in S that covers all characters in T, return the
 * empty string "".
 * If there is such window, you are guaranteed that there will always be only
 * one unique minimum window in S.
 * 
 */
/**
 * 思路：
 * 
 * 1、用两个指针记录子串的起始位置和结束位置
 * 2、再用一个hash表记录这中间字符出现的次数
 * 3、如果出现的次数能够构成t，记录此时的结果，并保存每次最小的结果
 * 4、则将left向右缩小到不能再缩为止
 * 5、返回上面遍历的最小结果
 * 
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    const tMap = t.split('').reduce((res, char) => {
        if (res[char]) {
            res[char] ++;
        } else {
            res[char] = 1;
        }
        return res;
    }, {});
    const sMap = {};
    let curResCount = 0;
    let result = '';
    let left = 0;
    for (let i = 0; i < s.length; i++) {
        const curChar = s[i];
        sMap[curChar] = sMap[curChar] === undefined ? 1 : sMap[curChar] + 1;
        if (
            tMap[curChar] && 
            sMap[curChar] <= tMap[curChar]
        ) {
            curResCount++;
        }
        while (curResCount === t.length) {
            if (result === '' || result.length > i - left + 1) {
                result = s.slice(left, i + 1);
            }
            const leftChar = s[left];
            sMap[leftChar]--;
            if (tMap[leftChar] && sMap[leftChar] < tMap[leftChar]) {
                curResCount--;
            }
            left++;
        }
    }
    return result
};

console.log(minWindow('ADOBECODEBANC', 'ABC'));
console.log(minWindow('bba', 'ab'));
console.log(minWindow('abba', 'aba'));

module.exports = {
    id:'76',
    title:'Minimum Window Substring',
    url:'https://leetcode.com/problems/minimum-window-substring/description/',
    difficulty:'Hard',
}