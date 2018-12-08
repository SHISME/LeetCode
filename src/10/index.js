/**
 * @param {string} str
 * @param {string} pattern
 * @return {boolean}
 */
var isMatch = function (str, pattern) {
    const opt = [[true]];
    for (let i = 0; i < str.length; i++) {
        opt.push([false]);
    }

    for (let i = 1; i < pattern.length; i++) {
        opt[0].push(false);
    }
    opt[0][0] = true;

    for (let i = 0; i < opt.length; i++) {
        for (let j = 1; j <= pattern.length; j++) {
            const current_pattern = pattern[j - 1];
            if (current_pattern !== '*') {
                opt[i][j] = i > 0 && opt[i - 1][j - 1] && (current_pattern === '.' || current_pattern === str[i - 1]);
            } else {
                opt[i][j] = (
                    (j > 1 && opt[i][j - 2]) ||
                    (i > 0 && opt[i - 1][j] && (pattern[j - 2] === '.' || pattern[j - 2] === str[i - 1]))
                );

            }
        }
    }

    return opt[opt.length - 1].pop();
};


console.log(isMatch('aab', 'c*a*b') === true);
console.log(isMatch('aaa', 'a*a') === true);
console.log(isMatch('ab', '.*c') === false);
console.log(isMatch('aaa', 'aaaa') === false);
console.log(isMatch('aaa', 'ab*a*c*a') === true);
console.log(isMatch('mississippi', 'mis*is*pattern*.') === false);
console.log(isMatch('', '.*') === true);