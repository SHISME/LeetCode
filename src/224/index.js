/**
 * 思路：
 * 
 * 1、用一个栈记录括号外层的加减情况，遇到(则入栈，遇到)则出栈
 * 2、再用一个 sign 记录当前数字的前一个符号
 * 3、可以先入一个1在栈中，可以看做是最外层有一个括号
 * 4、因为只有加减法，我们可以对结果进行操作
 * 
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    s = s.replace(/\s+/g, '');
    const stack = [1];
    let sign = 1;
    let i = 0;
    let res = 0;
    while (i < s.length) {
        const char = s[i];
        switch(char) {
            case '+':sign = 1; i++; break;
            case '-':sign = -1; i++; break;
            case '(':stack.push(sign * stack[stack.length - 1]);sign = 1;i++;break;
            case ')':stack.pop();i++;break;
            default:
            let num = 0;
            while (i < s.length && /\d/.test(s[i])) {
                num = num * 10 + parseInt(s[i]);
                i++;
            }
            res += sign * stack[stack.length - 1] * num;
        }
    }
    return res;
};
console.log(calculate("(1+(4+5+2)-3)+(6+8)") === 23);

module.exports = {
    id:'224',
    title:'Basic Calculator',
    url:'https://leetcode.com/problems/basic-calculator/',
    difficulty:'hard',
};