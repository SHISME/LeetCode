/*
 * @lc app=leetcode id=779 lang=javascript
 *
 * [779] K-th Symbol in Grammar
 *
 * https://leetcode.com/problems/k-th-symbol-in-grammar/description/
 *
 * algorithms
 * Medium (38.16%)
 * Total Accepted:    10.4K
 * Total Submissions: 27.4K
 * Testcase Example:  '1\n1'
 *
 * On the first row, we write a 0. Now in every subsequent row, we look at the
 * previous row and replace each occurrence of 0 with 01, and each occurrence
 * of 1 with 10.
 * 
 * Given row N and index K, return the K-th indexed symbol in row N. (The
 * values of K are 1-indexed.) (1 indexed).
 * 
 * 
 * Examples:
 * Input: N = 1, K = 1
 * Output: 0
 * 
 * Input: N = 2, K = 1
 * Output: 0
 * 
 * Input: N = 2, K = 2
 * Output: 1
 * 
 * Input: N = 4, K = 5
 * Output: 1
 * 
 * Explanation:
 * row 1: 0
 * row 2: 01
 * row 3: 0110
 * row 4: 01101001
 * 
 * 
 * Note:
 * 
 * 
 * N will be an integer in the range [1, 30].
 * K will be an integer in the range [1, 2^(N-1)].
 * 
 * 
 */
/**
 * dp[1][1] = 0
 * dp[2][1] = 0 
 * dp[2][2] = 1
 * dp[3][1] = 0
 * dp[3][2] = 1
 * dp[3][3] = 1
 * dp[3][4] = 0
 * 
 * 0
 * 0 1
 * 0 1 1 0
 * 0 1 1 0 1 0 0 1
 * 0 1 1 0 1 0 0 1 1 0 0 1 0 1 1 0
 * 
 * 假设要求 N = 5， K = 10时
 * 第五行共有 2 ^ (5 - 1) = 16 位
 * 要求第 10 个，10 在后八位，每一行的后一半其实就是前一半的取反，第十个其实求的就是第二个的这一行第二个取反
 * 就相当于要求第5行第二个，我们最快可以从第二行就知道第二位的值了，
 * 
 * @param {number} N
 * @param {number} K
 * @return {number}
 */
var kthGrammar = function(N, K) {
    if (K === 1) {
        return 0;
    }
    const curHalf = Math.pow(2, N - 2);
    if (K > curHalf) {
        return (kthGrammar(N - 1, K - curHalf) === 1) ? 0 : 1;
    }
    return kthGrammar(N - 1, K);
};

console.log(kthGrammar(4, 5));
// let a = 0;
console.log(1>>1);


module.exports = {
    id:'779',
    title:'K-th Symbol in Grammar',
    url:'https://leetcode.com/problems/k-th-symbol-in-grammar/description/',
    difficulty:'Medium',
}