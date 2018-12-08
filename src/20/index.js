/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const rules = {
        '{':'}',
        '[':']',
        '(':')',
    };
    const stack = [];
    let i = 0;
    while (i < s.length) {
        if (rules[s[i]] === undefined) {
            if (s[i] !== stack.pop()) {
                return false;
            }
        } else {
            stack.push(rules[s[i]]);
        }
        i++;
    }
    return stack.length === 0;
};