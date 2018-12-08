/**
 * 思路：
 * 
 * n表示要有多少格括号, n 个括号就会有 n 个 (, 和 n 个 )。
 * 
 * 每个结果第一个 一定是 (
 * 
 * 所以我们看一下一步, 可以选择( 或者 ),
 * 再一下部，如果之前的是)我们就只能选择 (了,
 * 
 * 可以用递归的方式把所有结果列出来
 * 
 * 第一步：选择 ( 开头， 然后剩下 n - 1 个 ( 和 n 个 )
 * 
 * 如果 n - 1 = 0， 则剩下的全是 )
 * 
 * 如果 n - 1 > 0, 则有两种情况
 * 
 * 选择 (， 则剩下 n - 2 个 ( 和 n 个 )， 检测 n -2 > 0 继续查找
 * 
 * 选择 ), 要选择 ）的话有一个前提条件，就是前面的（ 符号没有被全部匹配完
 * 
 * 
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const result = [];
    function find_arr(left, right, current_str) {
        if (right === 0) {
            result.push(current_str);
            return;
        }
        if (left === 0) {
            while (right > 0) {
                right --;
                current_str += ')';
            }
            result.push(current_str);
            return;
        }
       
        if (right > left) {
            find_arr(left, right - 1, current_str + ')');
        }
        find_arr(left - 1, right, current_str + '(');
    }
    find_arr(n - 1, n, '(');
    return result;
};

console.log(generateParenthesis(3));