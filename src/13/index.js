/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const strs = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    const nums = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    let result = 0;
    strs.forEach((str, index) => {
        const regx = new RegExp('^' + str);
        while(regx.test(s)) {
            s = s.replace(regx, '');
            result += nums[index];
        }
    });
    return result;
};