/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    str = str.replace(/^ */, '');
    let result = '';
    let i = 0;
    while (i < str.length) {
        if (/\d/.test(str[i]) || str[i] === '-' || str[i] === '+') {
            result += str[i];
        } else {
            i = str.length;
        }
        i++;
    }

    if (result === '') {
        return 0;
    }
    result =  parseInt(result);

    if (result < -0x80000000) {
        return -0x80000000;
    }
    if (result > 0x7fffffff) {
        return 0x7fffffff;
    }
    if (result === result) {
        return result;
    }
    return 0;
};