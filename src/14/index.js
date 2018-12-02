/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length < 0) {
        return '';
    }
    let result = '';
    let i = 0;
    let not_over = true;
    while (not_over) {
        const char = strs[0][i];
        if (char === undefined) {
            not_over = false;
        } else {
            not_over = strs.reduce((the_same, str) => the_same && str[i] === char, true);
        }
        if (not_over) {
            result += char;
            i++;
        }
    }
    return result;
};
