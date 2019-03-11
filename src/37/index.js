/*
 * @lc app=leetcode id=37 lang=javascript
 *
 * [37] Sudoku Solver
 *
 * https://leetcode.com/problems/sudoku-solver/description/
 *
 * algorithms
 * Hard (35.27%)
 * Total Accepted:    119K
 * Total Submissions: 333.4K
 * Testcase Example:  '[["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]'
 *
 * Write a program to solve a Sudoku puzzle by filling the empty cells.
 * 
 * A sudoku solution must satisfy all of the following rules:
 * 
 * 
 * Each of the digits 1-9 must occur exactly once in each row.
 * Each of the digits 1-9 must occur exactly once in each column.
 * Each of the the digits 1-9 must occur exactly once in each of the 9 3x3
 * sub-boxes of the grid.
 * 
 * 
 * Empty cells are indicated by the character '.'.
 * 
 * 
 * A sudoku puzzle...
 * 
 * 
 * ...and its solution numbers marked in red.
 * 
 * Note:
 * 
 * 
 * The given board contain only digits 1-9 and the character '.'.
 * You may assume that the given Sudoku puzzle will have a single unique
 * solution.
 * The given board size is always 9x9.
 * 
 * 
 */
/**
 * 
 * 思路：
 * 
 * dfs + 回溯
 * 
 * 一个数字一个数字的尝试，如果不可行对结果进行返回直到最上层，再继续进行尝试
 * 
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
    solve(board);
    function solve(board) {
        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                const char = board[i][j];
                if (char === '.') {
                    for (let k = 1; k <= 9; k++) {
                       board[i][j] = k.toString();
                       if (isValidSudoku(board, i, j) && solve(board)) {
                           return true;
                       } else {
                           board[i][j] = '.'
                       }
                    }
                    return false;
                }
            }
        }
        return true;
    }
    function isValidSudoku(board, i, j) {
        for (let k = 0; k < 9; k++) {
            if ((k!==j && board[i][k] === board[i][j]) || (k !== i && board[k][j] === board[i][j])) {
                return false;
            }
        }
        for (let x = 0; x < 3; x++) {
            for (let y = 0; y < 3; y++) {
                let posX = i - i % 3 + x;
                let posY = j - j % 3 + y;
                if (
                    (
                        posX !== i &&
                        posY !== j
                    ) &&
                    board[i][j] === board[posX][posY]
                ) {
                    return false;
                }
            }
        }
        return true;
    };
};

const test1 = [
    ["5","3",".",".","7",".",".",".","."],
    ["6",".",".","1","9","5",".",".","."],
    [".","9","8",".",".",".",".","6","."],
    ["8",".",".",".","6",".",".",".","3"],
    ["4",".",".","8",".","3",".",".","1"],
    ["7",".",".",".","2",".",".",".","6"],
    [".","6",".",".",".",".","2","8","."],
    [".",".",".","4","1","9",".",".","5"],
    [".",".",".",".","8",".",".","7","9"]
];

solveSudoku(test1);
console.log(test1);

module.exports = {
    id:'37',
    title:'Sudoku Solver',
    url:'https://leetcode.com/problems/sudoku-solver/description/',
    difficulty:'Hard',
}