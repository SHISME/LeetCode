/*
 * @lc app=leetcode id=794 lang=javascript
 *
 * [794] Valid Tic-Tac-Toe State
 *
 * https://leetcode.com/problems/valid-tic-tac-toe-state/description/
 *
 * algorithms
 * Medium (28.73%)
 * Total Accepted:    9K
 * Total Submissions: 31.1K
 * Testcase Example:  '["O  ","   ","   "]'
 *
 * A Tic-Tac-Toe board is given as a string array board. Return True if and
 * only if it is possible to reach this board position during the course of a
 * valid tic-tac-toe game.
 * 
 * The board is a 3 x 3 array, and consists of characters " ", "X", and "O".
 * The " " character represents an empty square.
 * 
 * Here are the rules of Tic-Tac-Toe:
 * 
 * 
 * Players take turns placing characters into empty squares (" ").
 * The first player always places "X" characters, while the second player
 * always places "O" characters.
 * "X" and "O" characters are always placed into empty squares, never filled
 * ones.
 * The game ends when there are 3 of the same (non-empty) character filling any
 * row, column, or diagonal.
 * The game also ends if all squares are non-empty.
 * No more moves can be played if the game is over.
 * 
 * 
 * 
 * Example 1:
 * Input: board = ["O  ", "   ", "   "]
 * Output: false
 * Explanation: The first player always plays "X".
 * 
 * Example 2:
 * Input: board = ["XOX", " X ", "   "]
 * Output: false
 * Explanation: Players take turns making moves.
 * 
 * Example 3:
 * Input: board = ["XXX", "   ", "OOO"]
 * Output: false
 * 
 * Example 4:
 * Input: board = ["XOX", "O O", "XOX"]
 * Output: true
 * 
 * 
 * Note:
 * 
 * 
 * board is a length-3 array of strings, where each string board[i] has length
 * 3.
 * Each board[i][j] is a character in the set {" ", "X", "O"}.
 * 
 * 
 */
/**
 * 1. x 数量一定大于等于 o 的数量，并且最多比o的数量多1
 * 2. 斜方向最多只能有一个连线
 * 3. 竖方向最多只能有一个连线，横方向上最多也只能有一个连线
 * 4. x完成连线时，o的数量必须比x少1
 * 5. o完成连线时，x的数量必须和o一样多
 * 
 * @param {string[]} board
 * @return {boolean}
 */
var validTicTacToe = function(board) {
    const xCount = getCountOfChar(board, 'X');
    const oCount = getCountOfChar(board, 'O');
    if (
        oCount > xCount ||
        xCount - oCount > 1
        ) {
        return false;
    }
    const x_XLine = getLineCountOfX(board, 'X');
    const o_XLine = getLineCountOfX(board, 'O');
    if (x_XLine + o_XLine >= 2) {
        return false;
    }
    if (
        x_XLine === 1 &&
        xCount - oCount !== 1
    ) {
        return false;
    }
    if (
        o_XLine === 1 &&
        xCount !== oCount
    ) {
        return false;
    }
    const x_YLine = getLineCountOfY(board, 'X');
    const o_YLine = getLineCountOfY(board, 'O');
    if (
        x_YLine === 1 &&
        xCount - oCount !== 1
    ) {
        return false;
    }
    if (
        o_YLine === 1 &&
        xCount !== oCount
    ) {
        return false;
    }
    const x_AcrossLine = getAcrossLine(board, 'X');
    const o_AcrossLine = getAcrossLine(board, 'O');
    if (
        x_AcrossLine === 1 &&
        xCount - oCount !== 1        
    ) {
        return false;
    }
    if (
        o_AcrossLine === 1 &&
        xCount !== oCount   
    ) {
        return false;
    }
    return true;
    function getAcrossLine(arr, char) {
        let result = 0;
        if (
            arr[0][0] === char &&
            arr[0][0] === arr[1][1] &&
            arr[1][1] === arr[2][2]
        ) {
            result++;
        }
        if (
            arr[0][2] === char &&
            arr[0][2] === arr[1][1] &&
            arr[1][1] === arr[2][0]
        ) {
            result++;
        }
        return result;
    }
    function getLineCountOfY(arr, char) {
        let result = 0;
        for (let i = 0; i <arr[0].length; i++) {
            if (arr.every((row) => {return row[i] === arr[0][i] && row[i] === char})) {
                result ++;
            }
        }
        return result;
    }
    function getLineCountOfX(arr, char) {
        return arr.reduce((result, row) => {
            for (let i = 0; i < row.length; i++) {
                if (row[i] !== char) {
                    return result;
                }
            }
            return result + 1;
        }, 0);
    }
    function getCountOfChar(arr, char) {
        return arr.reduce((result, row) => {
            for (let i = 0; i < row.length; i++) {
                if (row[i] === char) {
                    result ++;
                }
            }
            return result;
        }, 0);
    }
};
// console.log(validTicTacToe(["O  ", "   ", "   "]));
// console.log(validTicTacToe(["XOX", " X ", "   "]));
// console.log(validTicTacToe(["XXX", "   ", "OOO"]));
// console.log(validTicTacToe(["XOX", "O O", "XOX"]));
// console.log(validTicTacToe(["   ","   ","   "]));
// console.log(validTicTacToe(["XXX","XOO","OO "]));
// console.log(validTicTacToe(["XO ","XO ","XO "]));
console.log(validTicTacToe(["XXX","OOX","OOX"]));

module.exports = {
    id:'794',
    title:'Valid Tic-Tac-Toe State',
    url:'https://leetcode.com/problems/valid-tic-tac-toe-state/description/',
    difficulty:'Medium',
}