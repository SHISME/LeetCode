这道题，最简单的方法就是直接暴力循环，不过算法的效率比较低。

对于子串匹配最经典的方法就是 kmp 了。

这里记录一下 kmp 算法的整个流程。

比方说我们有一个待匹配的 字符串 str = 'ababababca', 和待匹配子串 pattern  = 'abababca'

第一次匹配的时候，我们可以看到str[0 - 5] = 'ababab' 和 pattern[0 - 5] 是匹配的，这里 pattern [0 - 3] = pattern[ 2 -5] 匹配到的前四个字母和后四个字母是相匹配的
这里我们就可以推断下一次最少要从str[2]开始做匹配

可以看做是

| 0   | 1   | 2   | 3   | 4   | 5   | 6   | 7   | 8   | 9   |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| a   | b   | a   | b   | a   | b   | a   | b   | c   | a   |
| a   | b   | a   | b   | a   | b   | c   | a   |     |     |

下一次匹配就变成


| 0   | 1   | 2   | 3   | 4   | 5   | 6   | 7   | 8   | 9   |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| a   | b   | a   | b   | a   | b   | a   | b   | c   | a   |
|     |     | a   | b   | a   | b   | a   | b   | c   | a   |


此时我们只用检查 str[8-9] 和 pattern[6-7] 是否匹配就行了

根据kmp 算法，我们需要在一开始计算出pattern前后最长前后后缀公共长度

比如 abababca

ab的后缀是b，前缀是a，没有公共的部分

aba的后缀有a，ba，前缀有a，ab ，最长公共部分是a

abab的后缀有b，ab，bab，前缀有a, ab, aba ，最长公共部分是ab

最后可以得到一张表

| 0   | 1   | 2   | 3   | 4   | 5   | 6   | 7   |
| --- | --- | --- | --- | --- | --- | --- | --- |
| a   | b   | a   | b   | a   | b   | c   | a   |
| 0   | 0   | 1   | 2   | 3   | 4   | 0   | 1   |

kmp 算法主要就是两个步骤，求出匹配表，然后使用匹配表进行匹配

如何生成匹配表,设 patternTable[n] 表示第n项的最长前后缀公共部分 patternTable[0] = 0

我们可以这样来看

abababca  用一个suffix = 1指针指向 pattern[1]
 abababca 用一个prefix = 0指针指向 pattern[0]
此时pattern[1] != pattern[0], 则patternTable[suffix] = 0

下一步，把后面字符串往后移一个，则suffix += 1 变成了

abababca  
  abababca
此时 pattern[suffix] = pattern[prefix]，此时 patternTable[suffix] = prefix + 1
两个指针同时往后走， 此时 pattern[suffix] = pattern[prefix] 任然成立，此时 patternTable[suffix] = prefix + 1 = 2
以此循环
直到 suffix = 6, prefix = 4 才不等,这里我们知道前缀增长肯定是无法匹配的，我们需要把前缀缩短一点，
到这时我们可以利用一下 kmp 后面需要用到的算法, 通过patternTable[3]我们可以知道pattern[0 - 3]是匹配的,我们把就prefix变为3发现还是不能匹配，
依次往内收缩，直到 prefix 变为0为止，此时 pattern[suffix] = 0; suffix += 1；
变成了
abababca  
       abababca
pattern[0] === pattern[1] 得到 patternTable[7] = 1

轮到搜索str了，算法和这里的生成patternTable是一样的

i指向str，j指向pattern

当i < str.length 或者 j === pattern.length 的时候匹配结束

str[i] === pattern[j]时，i 和 j 同时往后走，
当 str[i] != pattern[j]时, 查表得知 patternTable[j - 1], j 移到 patternTable[j - 1],
继续匹配，如果 j === 0,则i向后移以为

[源码](./index.js)





