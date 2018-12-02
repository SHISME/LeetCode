
/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    const nums = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    const strs = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    let result = '';
    nums.forEach((item, index) => {
        while (num >= item) {
            num -= item;
            result += strs[index];
        }
    });
    return result;

};
console.log(intToRoman(9));