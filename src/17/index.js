/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    const rules = {
        '2':['a', 'b', 'c'],
        '3':['d', 'e', 'f'],
        '4':['g', 'h', 'i'],
        '5':['j', 'k', 'l'],
        '6':['m', 'n', 'o'],
        '7':['p', 'q', 'r', 's'],
        '8':['t', 'u', 'v'],
        '9':['w', 'x', 'y', 'z'],
    };  
    let result = [];

    for (let i = 0; i < digits.length; i++) {
        if (rules[digits[i]] !== undefined) {
            let new_result = [];
            rules[digits[i]].forEach((char) => {
                if (i === 0) {
                    new_result.push(char);
                } else {
                    new_result = new_result.concat(result.map((str) => {
                        return str + char;
                    }));
                }
            });
            result = new_result;
        }
    }
    return result;
};

console.log(letterCombinations('3'));