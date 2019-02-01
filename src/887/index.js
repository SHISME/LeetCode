/**
 * @param {number} K
 * @param {number} N
 * @return {number}
 */
var superEggDrop = function(K, N) {
    const dp = [];
    if (K === 1) {
        return N;
    }
    if (K === 2) {
        return Math.ceil((Math.sqrt(1 + 8 * N) - 1) / 2);
    }
    for (let i = 0; i <= K; i++) {
        dp.push([]);
    }
    for (let i = 1; i <= K; i++) {
        for (let j = 1; j <= N; j++) {
            if (i === 1) {
                dp[i][j] = j;
                continue;
            }
            if (i === 2) {
                dp[i][j] = Math.ceil((Math.sqrt(1 + 8 * j) - 1) / 2);
                continue;
            }
            if (j <= 2) {
                dp[i][j] = j;
                continue;
            }
            const t = Math.ceil(getBaseLog(2, j + 1));
            if (i >= t) {
                dp[i][j] = t;
                continue;
            }
            let y = 1;
            dp[i][j] = Math.max(1, dp[i][j - y]) + 1;
            y ++;
            while (y < j) {
                dp[i][j] = Math.min(dp[i][j], Math.max(dp[i - 1][y - 1], dp[i][j - y]) + 1);
                y ++;
            }
        }
    }
    return dp[K][N];
    function getBaseLog(x, y) {
        return Math.log(y) / Math.log(x);
    }
    console.log(dp);
};

// console.log(superEggDrop(1, 2) === 2);
// console.log(superEggDrop(2, 6) === 3);
console.log(superEggDrop(10, 10000));
module.exports = {
    id:'887',
    title:'Super Egg Drop',
    url:'https://leetcode.com/problems/super-egg-drop/',
    difficulty:'hard',
};