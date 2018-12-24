/**
 * 思路：
 * 
 * 设 f(n) 为第n层的走法
 * 
 * 当 n > 2 的时候,我们上一步可能选一步也可能选两步，所以
 * f(n) = f(n - 1) + f(n - 2); n > 2
 * 
 * f(0) = 0;
 * f(1) = 1;
 * f(2) = 2;
 * 
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if (n <= 2) {
        return n;
    }
    let result = [0, 1, 2];
    for (let i = 3; i <= n; i++) {
        result[i] = result[i - 1] + result[i - 2];
    }
    return result[result.length - 1];
};

console.log(climbStairs(0));
console.log(climbStairs(1));
console.log(climbStairs(2));
console.log(climbStairs(3));
console.log(climbStairs(4));
console.log(climbStairs(5));