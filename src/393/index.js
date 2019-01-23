/**
 * 这道题主要是要读懂 utf-8怎么编码的就行了
 * 
 * 1.如果字节以0开头则说明该字节以自成一个字节
 * 2.如果字节以10开头，则这个字节为多字节字符的组成部分，即这个字节是不能在开头的
 * 3.如果字节以110开头，则这个字节是以两个字节组成的字符的第一个字节，后面两一字节都得以10开头
 * 4.如果字节以1110开头，则这个字节是以三个字节组成的字符的第一个字节，后面两个字节都得以10开头
 * 5.如果字节以11110开头，则这个字节是以四个字节组成的字符的第一个字节，后面三个字节都得以10开头
 * 6.其他情况都是不合法的
 * @param {number[]} data
 * @return {boolean}
 */
var validUtf8 = function(data) {
    function to_binary_code(number) {
        let res = number.toString(2);
        while (res.length < 8) {
            res = '0' + res;
        }
        return res;
    }
    let cnt = 0;
    for(let i = 0; i < data.length; i++) {
        const num = data[i];
        if (num > 255) {
            return false;
        }
        const binary_code = to_binary_code(num);
        if (cnt > 0) {
            if (binary_code.startsWith('10')) {
                cnt--;
                continue;
            }
            return false;
        } else {
            if (binary_code.startsWith('0')) {
                continue;
            }
            if (binary_code.startsWith('10')) {
                return false;
            }
            if (binary_code.startsWith('110')) {
                cnt = 1;
                continue;
            }
            if (binary_code.startsWith('1110')) {
                cnt = 2;
                continue;
            }
            if (binary_code.startsWith('11110')) {
                cnt = 3;
                continue;
            }
            return false;
        }
    }
    if (cnt > 0) {
        return false;
    }
    return true;
};

// console.log(validUtf8([197, 130, 1]));
// console.log(validUtf8([235, 140, 4]));
// console.log(validUtf8([235, 140, 4]));
// console.log(validUtf8([145]));
console.log(validUtf8([255]));
// console.log(validUtf8([240,162,138,147]));

module.exports = {
    id:'393',
    title:'UTF-8 Validation',
    url:'https://leetcode.com/problems/utf-8-validation/',
    difficulty:'medium',
};