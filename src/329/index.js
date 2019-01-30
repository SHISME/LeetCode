/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function(matrix) {
  const dp = matrix.map(row => row.map(() => 0));
  const directions = [{x:0,y:-1},{x:-1,y:0},{x:1,y:0},{x:0,y:1}];
  let result = 0;
  matrix.forEach((row, i) => {
      row.forEach((item, j) => {
          result = Math.max(result, dfs(i,j));
      })
  });
  return result;
  function dfs(i, j) {
      if (dp[i][j] !== 0) {
          return dp[i][j];
      }
      let max = 1;
      directions.forEach((direction) => {
          const x = direction.x + i;
          const y = direction.y + j;
          if (matrix[x] !== undefined && matrix[x][y] !== undefined && matrix[x][y] > matrix[i][j]) {
              max = Math.max(max, dfs(x, y) + 1);
          }
      });
      dp[i][j] = max;
      return max;
  }
};

const arr_1 = [
    [9,9,4],
    [6,6,8],
    [2,1,1]
];

const arr_2 = [
    [3,4,5],
    [3,2,6],
    [2,2,1]
];
console.log(longestIncreasingPath(arr_2));

module.exports = {
    id:'329',
    title:'Longest Increasing Path in a Matrix',
    url:'https://leetcode.com/problems/longest-increasing-path-in-a-matrix/',
    difficulty:'hard',
    have_md:true,
};