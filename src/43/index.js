/**
 * 
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
    const result_arr = [];
    if (num1 === '0' || num2 === '0') {
        return '0';
    }
    for (let i = 0; i < num1.length; i++) {
        for (let j = 0; j < num2.length; j++) {
            if (result_arr[i + j]) {
                result_arr[i + j].push(num1[i] * num2[j]);
            } else {
                result_arr[i + j] = [num1[i] * num2[j]];
            }
        }
    }
    let result = '';
    let carry_num = 0;

    for (let i = result_arr.length - 1; i>=0 ;i--) {
        const current_result = result_arr[i].reduce((result, current_num) => result + current_num, 0) + carry_num;
        carry_num = Math.floor(current_result / 10);
        result = current_result % 10 + result;
    }
    if (carry_num > 0) {
        result = carry_num + result;
    }
    return result;
};
console.log(multiply('123 ', '123'));