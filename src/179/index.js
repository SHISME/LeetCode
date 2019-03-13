/**
 * 思路：
 * 
 * 这道题的思路很简单，你只要需要搞懂一个事情就可以了
 * 假设有三个字符串A，B，C，他们三个分别两两组成一个字符串，分别比较他们的大小
 * 当AB > BA,BC > CB, AC > CA
 * 由AB > BA , AC > CA 可以推出当A在最前面的时候数字会比较大，
 * BC > CB 可以推出当B在C前面的时候数字会比较大
 * 由上面两条可以推出
 * ABC 是这三个数能组成的最大数
 * 
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
    const arr = nums.map((num) => num.toString());
    arr.sort((a, b) => {
        return parseInt(b + a) - parseInt(a + b);
    });
    if (parseInt(arr.join('')) === 0) {
        return '0';
    }

    return arr.join('');
};