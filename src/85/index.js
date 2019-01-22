/**
 * 思路：
 * 
 * 这题的思路可以建立在84题之上
 * [
 * ["1","0","1","0","0"],
 * ["1","0","1","1","1"],
 * ["1","1","1","1","1"],
 * ["1","0","0","1","0"]]
 * 
 * 我们可以把每一列看做式一个矩形，竖着下来没有被0阻断则高度有效，如果被阻断，则高度看做是0，
 * 
 * 计算每一行形成的矩形的最大值，然后返回当中的最大值
 * 
 * 以上面的为例子
 * 
 * 第一列矩形高度为[1,0,1,0,0] =》 求出最大值为 1
 * 第二列矩形高度为[2,0,2,1,1] =》 求出最大值为 3
 * 第三列矩形高度为[3,1,3,2,2] =》 求出最大值为 6
 * 第四列矩形高度为[4,0,0,3,0] =》 求出最大值为 4
 * 
 * 最后得到最大值为 6
 * 
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function(matrix) {
    function findMaxArea(heights) {
        const heights_copy = [...heights];
        heights_copy.push(0);
        const stack = [];
        let result = 0;
        for (let i = 0; i < heights_copy.length; i++) {
            const top_index = stack[stack.length - 1];
            if (stack.length === 0 || heights_copy[i] > heights_copy[top_index]) {
                stack.push(i);
            } else {
                const top_index = stack.pop();
                result = Math.max(result, heights[top_index] * (stack.length === 0 ? i : (i - stack[stack.length - 1] - 1)));
                i--;
            }
        }
        return result;
    }
    if (matrix.length === 0) {
        return 0;
    }
    const heights = matrix[0].map(() => 0);
    let result = 0;
    matrix.forEach((row) => {
        row.forEach((item, index) => {
            if (item === '1') {
                heights[index] = heights[index] + 1;
            } else {
                heights[index] = 0;
            }
        });
        result = Math.max(result, findMaxArea(heights));
    })
    return result;
};

// const test = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]];
const test = [];
console.log(maximalRectangle(test));

module.exports = {
    id:'85',
    title:'Maximal Rectangle',
    url:'https://leetcode.com/problems/maximal-rectangle/',
    difficulty:'hard',
};