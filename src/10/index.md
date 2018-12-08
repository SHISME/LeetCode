由于这一题比较复杂，这里详细记录一下解题的思路，这道题需要用到动态规划的思想.
如果不知道动态规划的话，最好先去学一下动态规划的基础再来做这道题。

这道题的主要的难点在于 * 的匹配我们不能全匹配完，我们需要根据 pattern 后面的部分来动态的调整 * 需要匹配的数量.

这里我们设定这几个变量,

- 待匹配字符 str
- 匹配符 pattern
- opt[i][j]的值为 true 或 false， 含义是str[0, i] 能否和 pattern[0, j]匹配

显然 opt[0, 0] = true, 当 j > 0 , opt[0, j] = false, 当 i > 0, opt[i, 0] = false

我们需要知道 opt[i][j] 的值,需要这样考虑, pattern[j - 1] == '*' 和 pattern[j - 1] != '*'这两种情况

> 这里有个细节需要注意下，因为opt是包含了空字符串的情况的, 而我们的字符串是从0开始索引第一位的,所以当我们在求opt[i][j]的时候，实际上当前指向的字符串末尾是 pattern[j-1]和str[i-1]

#### pattern[j] != '*' 的情况

如果 opt[i][j] = true 的话， 那么 opt[i - 1, j - 1] = true 并且 (pattern[j - 1] === '.' || pattern[j - 1] === str[i - 1])

#### pattern[j] == '*' 的情况

如果 opt[i][j] = true 的话，这里可能会出现两种情况

##### pattern[j - 1] 匹配了 0 个

这时候 opt[i][j - 2] = true

##### pattern[j - 1] 匹配了 1 个以上

这时候opt[i - 1][j] =true, 并且需要pattern倒数第二项也要能和str最后一项匹配 即  (pattern[j - 2] === '.' || pattern[j - 2] === str[i - 1])

我们再反向看这个问题的，

求解过程这里是有一个隐含的条件的：
> 当我们求opt[i][j]的时候,前面的值我们是已知的，比如opt[i-1][j], opt[i][j-1],opt[i-1][j-1]的值都是已知的.

###### 当 pattern[j] != '* 的时候
` opt[i][j] = opt[i - 1][j - 1] && (pattern[j - 1] === '.' || pattern[j - 1] === str[i - 1]) `

###### 当 pattern[j] === '* 的时候

此时匹配0个，1个以上的情况只要有一个为true opt[i][j] 就为true

0个的情况 `opt[i][j - 2] = true`
1个以上的的情况 `opt[i - 1][j] && (pattern[j - 2] === '.' || pattern[j - 2] === str[i - 1])`

[答案源码](/src/10/index.js)