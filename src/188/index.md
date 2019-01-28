这题和 309 Best Time to Buy and Sell Stock with Cooldown  有点类似，
但是限制条件变成了交易次数，这题我们也是需要找到关键状态才能求解

## 完全交易

当交易次数超过 prices.length / 2 的时候以为着我们每次可以盈利的交易都可以使用。

## 不完全交易

我们不能把所有盈利都用上的时候，需要找到一种合适交易方案

这里我们引入局部最优的思想来找最优解，我们每天会处于买入，卖出，不买不卖三种状态，要保证最后一天的利益最大，我们最后一天肯定不能买入

我们可以设 
- local[i][j] 为 i 天最多交易 j 次，并且最后一天卖出的最优解
- global[i][j] 为 i 天最多交易 j 次，并且最后一天没有交易的最优解

我们可以列出对应的动态方程

global[i][j] = Max(global[i - 1][j], local[i - 1][j]);

local[i][j]的情况复杂一点需要我们具体分析一下

local[i][j] = Max(global[i - 1][j - 1] + prices[i] - prices[i-1], local[i-1][j] + prices[i] - prices[i-1]);

 下面分析一下这个动态方程为什么成立

首先 global，和local记录的都是交易完了的最优解，即这个状态是不持股的，这个状态后的第一天是无法做卖出操作的。

> global[i - 1][j - 1] + prices[i] - prices[i-1]

这个式子表示的是，前 i-1 天完成了 j - 1 次交易,global表示的是不持股的状态， 由于我们第i天需要卖出，所以第i-1天是需要买入才能卖出的

> local[i-1][j] + prices[i] - prices[i-1]

这个式子表示的是，前 i-1 天完成了j次交易，并且第i-1天卖出，我们可以把卖出的时间往后延迟一天，
假设local[i-1][j]最后一次买入的价格是 x, 之前的盈利为 y,则local[i-1][j] = y + prices[i-1] - x,
我们把卖出时间往后延一天，则公式会转化为local[i][j] = y + prices[i] - x = y + prices[i-1] - prices[i-1] - x + prices[i] = local[i-1][j] + prices[i] - prices[i-1]

local[i][0] = 0,global[i][0]=0,
local[0][j] = 0,global[0][j] = 0