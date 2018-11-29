
var reverse = function(x) { 
    const is_negative = x < 0;
    x = Math.abs(x);
    x = parseInt(x.toString().split('').reverse().join(''));
    if (is_negative) {
        x = -x;
    }
    if (x > 0x7fffffff || x < -0x80000000) {
        return 0;
    }
    return x;
};