/**
 * 思路:
 * 
 * 从终点看，上一步我们只能是上面或者左边
 * 
 * 假设 S(m,n) 为第 m,n格的走法总数
 * 
 * 则 S(m, n) = S(m - 1, n) + S(m, n - 1)
 * S(1,1) = 1, S(1,2) = 1, ... S(1,n) = 1
 * S(1,1) = 1, S(2, 1) = 1, ... S(n, 1) = 1
 * 
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    const result = [];
    for (let i = 0; i < n; i++) {
        result.push([1]);
    }
    for (let i = 0; i < m; i++) {
        result[0][i] = 1;
    }
    for (let i = 1; i < n; i++) {
        for (let j = 1; j < m; j++) {
            result[i][j] = result[i - 1][j] + result[i][j-1];
        }
    }
    return result[n - 1][m-1];
};
console.log(uniquePaths(7,3));