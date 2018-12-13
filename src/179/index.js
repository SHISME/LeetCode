/**
 * 思路：
 * 
 * 这道题的思路很简单，你只要需要搞懂一个事情就可以了
 * 
 * 当 AB > BA, 并且 BC > CB 的时候 ，我们可以得出 AC > CA, 所以我们只需要两两组合中较大的那一个尽量往前排就可以了
 * 
 * 要证明这个也比较简单，设A是n位数，B是m位数，C是x位数
 * (1) AB = A * 10^m + B, BA = B * 10^n + A
 * (2) BC = B * 10^x + C, CB = C * 10^m + B
 * (3) AC = A * 10^x + C, CA = C * 10^n + A
 * 
 * 已知 A * 10^m + B > B * 10^n + A, B * 10^x + C > C * 10^m + B
 * 因为 B < 1 * 10^m,A < 1 * 10 ^ n可以推出 A * 10^m > B * 10^n
 * 同理 B * 10^x > C * 10^m
 * 
 * 因为两边都是正整数，可以得到 A * 10^m * B * 10^x > B * 10^n * C *10^m
 * 约分的得到A * 10^x > C * 10^n
 * 
 * 同理要证 A * 10^x + C > C * 10^n + A 需要证 A * 10^x > C * 10 ^n
 * 所以 得到 当 AB > BA, 并且 BC > CB 的时候 ，我们可以得出 AC > CA,
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