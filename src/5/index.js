/**
 * 思路：
 * 
 * 1、每个回文可以看做是从中心向外扩散
 * 2、我们可以枚举每个中心，这里需要注意中心可能是两个元素也可能是一个元素，需要对此做区分
 * 3、循环遍历找到最长的
 */

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  if (s.length < 2) {
    return s;
  }
  let res = '';
  function longestPalindromeHelper(left, right) {
    while (s[left] && s[left] === s[right]) {
      left--;
      right++;
    }
    if (res.length < right - left - 1) {
      res = s.slice(left + 1, right)
    }
  }
  for (let i = 1; i < s.length; i++) {
    longestPalindromeHelper(i - 1, i);
    longestPalindromeHelper(i - 1, i + 1)
  }
  return res;
};

/**
 * 解法二：
 *
 * 动态规划
 *
 * 1. 我们设dp[l][r]为字符串str[l~r]是否为回文
 * 2. 如果str[l~r]是回文，则其左右向内向内收缩一位必是回文
 * 3. str[(l+1) ~ (r-1)]必是回文
 * 4. 反向推到可知，str[(l+1) ~ (r-1)]是回文，且str[l] === str[r]则 dp[l][r] = true
 * 5. 或者 str[l] === str[r],且str[(l+1) ~ (r-1)]长度小于等于1的时候，dp[l][r]也是回文，即 r-1 - (l+1) + 1 <= 1 =>  r - l <= 2
 *
 *
 * @param s
 */
longestPalindrome = (s) => {
    if (!s || s.length <= 1) return s;
    let result = [0, 0];
    const dp = Array.from({length: s.length}, () => []);
    for (let r = 0; r < s.length; r++) {
        for (let l = 0; l < r; l++) {
            if (s[l] === s[r] && (r - l <= 2 || dp[l+1][r-1])) {
                dp[l][r] = true;
                if (r - l > result[1] - result[0]) {
                    result[0] = l;
                    result[1] = r;
                }
            }
        }
    }
    return s.substring(result[0], result[1] + 1);
}
