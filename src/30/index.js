/*
 * @lc app=leetcode id=30 lang=javascript
 *
 * [30] Substring with Concatenation of All Words
 *
 * https://leetcode.com/problems/substring-with-concatenation-of-all-words/description/
 *
 * algorithms
 * Hard (22.98%)
 * Total Accepted:    120.8K
 * Total Submissions: 525.7K
 * Testcase Example:  '"barfoothefoobarman"\n["foo","bar"]'
 *
 * You are given a string, s, and a list of words, words, that are all of the
 * same length. Find all starting indices of substring(s) in s that is a
 * concatenation of each word in words exactly once and without any intervening
 * characters.
 * 
 * Example 1:
 * 
 * 
 * Input:
 * ⁠ s = "barfoothefoobarman",
 * ⁠ words = ["foo","bar"]
 * Output: [0,9]
 * Explanation: Substrings starting at index 0 and 9 are "barfoor" and "foobar"
 * respectively.
 * The output order does not matter, returning [9,0] is fine too.
 * 
 * 
 * Example 2:
 * 
 * 
 * Input:
 * ⁠ s = "wordgoodgoodgoodbestword",
 * ⁠ words = ["word","good","best","word"]
 * Output: []
 * 
 * 
 */
/**
 * 思路：
 * 
 * 这题有一个隐含的非常有用的条件，words的长度都相同，这样我们可以假设以words 中每个为开头的字符串
 * 
 * 用一个 hashmap记录每个单词的数量，
 * 遍历hashmap找到每个单词，然后找到单词在字符串的每个位置
 * 从每个位置向后找到word.length 位个字符，看看这个字符是否存在在hashmap中，如果存在则消耗一个word的数量
 * 如果不存在直接返回false
 * 
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
    if (s === '') {
        return [];
    }
    if (words.length === 0) {
        return [];
    }
    const map = {};
    words.forEach((word) => {
        if (map[word]) {
            map[word]++;
        } else {
            map[word] = 1;
        }
    });
    const result = [];
    const wordLength = words[0].length;
    for (let word in map) {
        const matchIndexs = findAllMatchIndex(s, word);
        if (matchIndexs.length > 0) {
            const currentMap = {
                ...map,
            };
            currentMap[word]--;
            matchIndexs.forEach((index) => {
                if (couldMakeSubString(s, index, {...currentMap})) {
                    result.push(index);
                }
            });
        }
    }
    return result;
    function findAllMatchIndex(s, word) {
        const result = [];
        let index = s.indexOf(word);
        while (index !== -1) {
            result.push(index);
            index = s.indexOf(word, index + 1);
        }
        return result;
    }
    function couldMakeSubString(s, startIndex, wordMap) {
        let wordCount = words.length - 1;
        startIndex += wordLength
        while (wordCount > 0) {
            const nextWord = s.substring(startIndex, startIndex + wordLength);
            if (wordMap[nextWord] > 0) {
                startIndex = startIndex + wordLength;
                wordMap[nextWord]--;
                wordCount--;
                continue;
            }
            return false;
        }
        return true;
    }
};

// console.log(findSubstring("wordgoodgoodgoodbestword", ["word","good","best","word"]));
// findSubstring("barfoothefoobarman", ["foo","bar"]);
console.log(findSubstring("barfoofoobarthefoobarman", ["bar","foo","the"]));

module.exports = {
    id:'30',
    title:'Substring with Concatenation of All Words',
    url:'https://leetcode.com/problems/substring-with-concatenation-of-all-words/description/',
    difficulty:'Hard',
}