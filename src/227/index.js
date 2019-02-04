/**
 * 
 * 思路：
 * 1、从头到尾遍历字符串，如果是加法减法则入栈
 * 2、如果是乘除法则立马求值
 * 
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    s = s.replace(/\s+/g,"");
    const num_stack = [];
    const operator_stack = [];
    const priority_operator = {
        '*':(a, b) => a * b,
        '/':(a, b) => a / b,
    };
    const custom_operator = {
        '+':(a, b) => a + b,
        '-':(a, b) => a - b,
    };
    for (let i = 0; i < s.length; i++) {
        if (priority_operator[s[i]]) {
            const last_num = num_stack.pop();
            const result = priority_operator[s[i]](last_num, parseInt(s[i + 1]));
            num_stack.push(result);
            i++;
            continue;
        }
        if (custom_operator[s[i]]) {
            operator_stack.push(s[i]);
            continue;
        }
        num_stack.push(parseInt(s[i]));
    }
    operator_stack.forEach((operator) => {
        const num1 = num_stack.shift();
        const num2 = num_stack.shift();
        const result = custom_operator[operator](num1, num2);
        num_stack.unshift(result);
    });
    return Math.floor(num_stack.shift());
};

console.log(calculate('42 + 2'));
// console.log(calculate(" 3/2 "));
// console.log(calculate('3+5 / 2'));

module.exports = {
    id:'227',
    title:'Basic Calculator II',
    url:'https://leetcode.com/problems/basic-calculator-ii/',
    difficulty:'medium',
};