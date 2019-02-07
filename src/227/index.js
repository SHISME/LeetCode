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
     let num = 0;
     let sign = '+';
     for (let i = 0; i < s.length; i++) {
         if (/\d/.test(s[i])) {
             num = num * 10 + parseInt(s[i]);
         }
         if (i === s.length - 1 || !/\d/.test(s[i])) {
             switch (sign) {
                 case '+': num_stack.push(num);break;
                 case '-':num_stack.push(-num);break;
                 case '/':num_stack.push(parseInt(num_stack.pop() / num));break;
                 case '*':num_stack.push(parseInt(num_stack.pop() * num));break;
             }
             num = 0;
             sign = s[i];
         }
     }
 
     return num_stack.reduce((res, cur) => res + cur, 0);
 
};

console.log(calculate('14/3*2'));
// console.log(calculate(" 3/2 "));
// console.log(calculate('3+5 / 2'));
// console.log(calculate('2*3+4'));

module.exports = {
    id:'227',
    title:'Basic Calculator II',
    url:'https://leetcode.com/problems/basic-calculator-ii/',
    difficulty:'medium',
};