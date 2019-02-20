
## 思路：

由于需要将字符添加到s的前面，我们需要找到s前n个字符串中包含第一个字符的最长子回文字符串，再把剩下的字符翻转插入到s前面

以 aacecaaa 为例

### 一、如何找到最长子回文字符串

将字符串翻转，并接到字符串后面，得到 aacecaaa#aaacecaa，
根据 KMP 的算法得到该字符串的 next数组，
我们可以直接从衔接的节点开始计算，找到最后一个的next值就是前面最长子回文字符串的长度

获取 next 的算法 可以参考这个 [next](https://github.com/SHISME/LeetCode/blob/master/src/28/index.md)


