/*
 * @lc app=leetcode id=174 lang=javascript
 *
 * [174] Dungeon Game
 *
 * https://leetcode.com/problems/dungeon-game/description/
 *
 * algorithms
 * Hard (26.30%)
 * Total Accepted:    62.9K
 * Total Submissions: 236.4K
 * Testcase Example:  '[[-2,-3,3],[-5,-10,1],[10,30,-5]]'
 *
 * table.dungeon, .dungeon th, .dungeon td {
 * ⁠ border:3px solid black;
 * }
 * 
 * ⁠.dungeon th, .dungeon td {
 * ⁠   text-align: center;
 * ⁠   height: 70px;
 * ⁠   width: 70px;
 * }
 * 
 * The demons had captured the princess (P) and imprisoned her in the
 * bottom-right corner of a dungeon. The dungeon consists of M x N rooms laid
 * out in a 2D grid. Our valiant knight (K) was initially positioned in the
 * top-left room and must fight his way through the dungeon to rescue the
 * princess.
 * 
 * The knight has an initial health point represented by a positive integer. If
 * at any point his health point drops to 0 or below, he dies immediately.
 * 
 * Some of the rooms are guarded by demons, so the knight loses health
 * (negative integers) upon entering these rooms; other rooms are either empty
 * (0's) or contain magic orbs that increase the knight's health (positive
 * integers).
 * 
 * In order to reach the princess as quickly as possible, the knight decides to
 * move only rightward or downward in each step.
 * 
 * 
 * 
 * Write a function to determine the knight's minimum initial health so that he
 * is able to rescue the princess.
 * 
 * For example, given the dungeon below, the initial health of the knight must
 * be at least 7 if he follows the optimal path RIGHT-> RIGHT -> DOWN ->
 * DOWN.
 * 
 * 
 * 
 * 
 * -2 (K)
 * -3
 * 3
 * 
 * 
 * -5
 * -10
 * 1
 * 
 * 
 * 10
 * 30
 * -5 (P)
 * 
 * 
 * 
 * 
 * 
 * 
 * Note:
 * 
 * 
 * The knight's health has no upper bound.
 * Any room can contain threats or power-ups, even the first room the knight
 * enters and the bottom-right room where the princess is imprisoned.
 * 
 * 
 */
/**
 * 思路
 * 我们设dp[i][j]为，从坐标i,j出发，到右下角所需要的最优血量
 * 
 * 对于dp[i][j]我们只能选择往右边或者往下边走，
 * 
 * 往右时 dp[i][j] = dp[i][j + 1] - dungeon[i][j]
 * 往下时 dp[i][j] = dp[i+1][j] - dungeon[i][j]
 * 我们需要选两者中需要血最少的那个，并且还要保证血量不少于1
 * 
 * dp[i][j] = Max(Min(dp[i][j+1], dp[i+1][j]) - dungeon[i][j], 1)
 * 
 * 根据题目最右下时的血量为1
 * 
 * @param {number[][]} dungeon
 * @return {number}
 */
var calculateMinimumHP = function(dungeon) {
   const dp = dungeon.map((item) => []);
   let lastI = dungeon.length - 1;
   let lastJ = dungeon[lastI].length - 1;
   dp[lastI][lastJ] = Math.max(1 - dungeon[lastI][lastJ], 1);
   for (let j = lastJ - 1; j >=0; j--) {
       dp[lastI][j] = Math.max(dp[lastI][j + 1] - dungeon[lastI][j], 1);
   }
   for (let i = lastI - 1; i >=0; i--) {
       dp[i][lastJ] = Math.max(dp[i + 1][lastJ] - dungeon[i][lastJ], 1);
   }
   for (let i = lastI - 1; i >=0; i--) {
       for (let j = lastJ - 1; j >=0; j--) {
           dp[i][j] = Math.max(Math.min(dp[i + 1][j], dp[i][j + 1]) - dungeon[i][j], 1);
       }
   }
   return dp[0][0];
};

// const test = [[-2,-3,3],[-5,-10,1],[10,30,-5]];
const test = [[1,-3,3],[0,-2,0],[-3,-3,-3]];
console.log(calculateMinimumHP(test));

module.exports = {
    id:'174',
    title:'Dungeon Game',
    url:'https://leetcode.com/problems/dungeon-game/description/',
    difficulty:'Hard',
}