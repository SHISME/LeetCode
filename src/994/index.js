/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {

  const orangeMaps = getOrangePositionsByType(1);
  let orange1Count = orangeMaps[1].length;
  if(orange1Count === 0) {
    return 0;
  }

  const res = bfs(orangeMaps[2], 0);
  return orange1Count === 0 ? res : -1;

  function getOrangePositionsByType() {
    const res = {
      0: [],
      1: [],
      2: []
    };
    grid.forEach((row, i) => {
      row.forEach((orange, j) => {
        res[orange].push({i, j});
      })
    });
    return res;
  }

  function bfs(nodes, depth) {
    if (nodes.length === 0) {
      return depth - 1;
    }
    const nextNodes = [];
    nodes.forEach(({i, j}) => {
      nextNodes.push(...spread(i, j));
    });
    orange1Count -= nextNodes.length;
    return bfs(nextNodes, depth + 1);
  }
  function spread(i, j) {
    const spreadNodes = [];
    if (i - 1 >= 0) {
      if (grid[i - 1][j] === 1) {
        grid[i - 1][j] = 2;
        spreadNodes.push({i: i - 1, j});
      }
    }
    if (i + 1 < grid.length) {
      if (grid[i + 1][j] === 1) {
        grid[i + 1][j] = 2;
        spreadNodes.push({i: i + 1, j});
      }
    }
    if (j - 1 >= 0) {
      if (grid[i][j - 1] === 1) {
        grid[i][j - 1] = 2;
        spreadNodes.push({i, j: j - 1});
      }
    }
    if (j + 1 < grid[0].length) {
      if (grid[i][j + 1] === 1) {
        grid[i][j + 1] = 2;
        spreadNodes.push({i, j: j + 1});
      }
    }
    return spreadNodes;
  }
};

const test1 = [[2,1,1],[1,1,0],[0,1,1]];
const test2 = [[2,1,1],[0,1,1],[1,0,1]];
const test3 = [[0,2]];

console.log(orangesRotting(test1));
console.log(orangesRotting(test2));
console.log(orangesRotting(test3));

module.exports = {
  id:'994',
  title:'Rotting Oranges',
  url:'https://leetcode.com/problems/rotting-oranges/',
  difficulty:'easy',
}