/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    const is_negative = (dividend > 0 && divisor < 0) || (dividend < 0 && divisor > 0);
    const min_value = - Math.pow(2, 31);
    const max_value = - min_value - 1;
    let result = 0;
    dividend = Math.abs(dividend);
    divisor = Math.abs(divisor);
    if (divisor === 1) {
        result = dividend;
    } else {
        while (dividend >= divisor) {
            result += 1;
            dividend -= divisor;
        }
    }
    if (is_negative) {
        result = -result;
        if (result < min_value) {
            return min_value;
        }
        return result;
    }
    if (result > max_value) {
        return max_value;
    }
    return result;
};

console.log(divide(7, -3));
console.log(divide(-2147483648, -1));

module.exports = {
    id:'29',
    title:'Divide Two Integers',
    url:'https://leetcode.com/problems/divide-two-integers/',
    difficulty:'medium',
};