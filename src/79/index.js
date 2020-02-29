/*
 * @lc app=leetcode id=79 lang=javascript
 *
 * [79] Word Search
 *
 * https://leetcode.com/problems/word-search/description/
 *
 * algorithms
 * Medium (30.15%)
 * Total Accepted:    395.6K
 * Total Submissions: 1.2M
 * Testcase Example:  '[["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]]\n"ABCCED"'
 *
 * Given a 2D board and a word, find if the word exists in the grid.
 * 
 * The word can be constructed from letters of sequentially adjacent cell,
 * where "adjacent" cells are those horizontally or vertically neighboring. The
 * same letter cell may not be used more than once.
 * 
 * Example:
 * 
 * 
 * board =
 * [
 * ⁠ ['A','B','C','E'],
 * ⁠ ['S','F','C','S'],
 * ⁠ ['A','D','E','E']
 * ]
 * 
 * Given word = "ABCCED", return true.
 * Given word = "SEE", return true.
 * Given word = "ABCB", return false.
 * 
 * 
 */
/**
 * @param {string[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    if (board.length === 0) {
      return false;
    }
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (search(i, j, 0)) {
                return true;
            }
        }
    }
    return false;
    function search(i, j, d) {
        if (
          i >= board.length ||
          i < 0 ||
          j < 0 ||
          j >= board[0].length ||
          word[d] !== board[i][j]
        ) {
            return false;
        }
        if (d + 1 === word.length) {
            return true;
        }
        const cur = board[i][j];
        board[i][j] = '';
        if (
            search(i - 1, j, d + 1) ||
            search(i, j - 1, d + 1) ||
            search(i + 1, j, d + 1) ||
            search(i, j + 1, d + 1)
        ) {
          board[i][j] = cur;
          return true;
        }
        board[i][j] = cur;
        return false;
    }
};

const board = [
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
];
console.log(exist(board, 'ABCCED'));
console.log(exist(board, 'SEE'));
console.log(exist(board, 'ABCB'));
module.exports = {
    id:'79',
    title:'Word Search',
    url:'https://leetcode.com/problems/word-search/description/',
    difficulty:'Medium',
}