/*
 * @lc app=leetcode id=59 lang=javascript
 *
 * [59] Spiral Matrix II
 *
 * https://leetcode.com/problems/spiral-matrix-ii/description/
 *
 * algorithms
 * Medium (45.03%)
 * Total Accepted:    129.3K
 * Total Submissions: 283.7K
 * Testcase Example:  '3'
 *
 * Given a positive integer n, generate a square matrix filled with elements
 * from 1 to n2 in spiral order.
 * 
 * Example:
 * 
 * 
 * Input: 3
 * Output:
 * [
 * ⁠[ 1, 2, 3 ],
 * ⁠[ 8, 9, 4 ],
 * ⁠[ 7, 6, 5 ]
 * ]
 * 
 * 
 */
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    const result = Array.from({length:n}, () => []);
    let d = n - 1;
    let x = 0;
    let y = 0;
    let curValue = 1
    while (d > 0) {
        for (let i = 0; i < d; i++) {
            result[x][y + i] = curValue++;
        }
        y += d;
        for (let i = 0; i < d; i++) {
            result[x + i][y] = curValue++;
        }
        x += d;
        for (let i = 0; i < d; i++) {
            result[x][y - i] = curValue++;
        }
        y = y - d;
        for (let i = 0; i < d; i++) {
            result[x - i][y] = curValue++;
        }
        x = x - d;
        x++;
        y++;
        d -= 2;
    }
    if (n % 2 !== 0) {
        const centerIndex = Math.floor(n / 2);
        result[centerIndex][centerIndex] = n * n;
    }

    return result;
};

console.log(generateMatrix(5));

module.exports = {
    id:'59',
    title:'Spiral Matrix II',
    url:'https://leetcode.com/problems/spiral-matrix-ii/description/',
    difficulty:'Medium',
    have_md:true,
}