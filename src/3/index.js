/***
 * 思路：
 * 1、遍历字符串，用hash表记录已记录字母的位置
 * 2、如果存在重复跳出循环,则可以根据记录的位置接着循环, 例如 abdcfce, 第一轮循环 得到结果 abdcf, 第二轮循环就会直接跳到f后面开始，因为我们已经可以确认
 * 这a-f直接是不可能存在比abdcf长的结果了。
 * 3. 如果剩下的字符串小于第一轮的长度，则可以直接跳出循环
 */
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    if (!s.length) return 0;
    if (s.length === 1) return 1;
    let result = [0, 0];
    let index = 0;
    while (index < s.length) {
        let num_map = {};
        let start = index;
        let i = index;
        let end = undefined;
        while (i < s.length && end === undefined) {
            if (typeof num_map[s[i]] !== 'number') {
                num_map[s[i]] = i;
                i++;
            } else {
                end = i;
                index = num_map[s[i]];
            }
        }
        if (end === undefined) {
            end = i;
            index = i;
        }
        if (end - start > result[1] - result[0]) {
            result[0] = start;
            result[1] = end;
        }
        if (s.length - index < result[1] - result[0]) {
            index = s.length;
        }
        index++;
    }
    return result[1] - result[0];
};