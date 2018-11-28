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
    var s_arr = s.split('');

    if (s_arr.length < 2) {
        return s;
    }
    let i = 0;
    let result = [0, 0];
    while (i < s_arr.length) {
        let left = i - 1;
        let right = i + 1;
        while (s_arr[left] === s_arr[right] && s_arr[left] != undefined) {
            left--;
            right++;
        }
    
        if (right - left - 2 > result[1] - result[0]) {
            result[0] = left + 1;
            result[1] = right - 1;
        }
        if (s_arr[i] === s_arr[i +1]) {
            let left = i - 1;
            let right = i + 2;
            while (s_arr[left] === s_arr[right] && s_arr[left] != undefined) {
                left--;
                right++;
            }
            if (right-left - 2 > result[1] - result[0]) {
                result[0] = left + 1;
                result[1] = right - 1;
            }
        }
        i++;
    }
    return s.slice(result[0], result[1] + 1);
};