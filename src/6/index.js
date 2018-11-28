/**
 * 思路1：
 * 
 * 把字符串转化为一个二维数组，例如
 * a   y
 * c z c
 * d
 * 转化为数组就是 [[a,c,d],[z],[y,c]]
 * 然后按顺序输出每一行的字母
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (numRows <= 1) {
        return s;
    }
     const arr = [[]];
    let column = 0;
    s.split('').forEach((char, index) => {
        if (column % (numRows - 1) === 0) {
            arr[column].push(char);
            if (arr[column].length === numRows) {
                column++;
                arr[column] = [];
            }
        } else {
            arr[column] = [char];
            column++;
            arr[column] = [];
        }
    });
    if (arr[arr.length - 1].length === 0) {
        arr.pop();
    }
    let res = '';
    for (let i = 0; i < numRows; i++) {
        arr.forEach((items, column_index) => {
            if (column_index % (numRows - 1) === 0) {
                if (items[i]) {
                    res += items[i];
                }
            } else {
                if (((i + column_index) % (numRows - 1)) === 0) {
                    res += items[0];
                }
            }
        });
    }
    return res;
};

/**
 * 思路2：
 * 
 * 1、遍历字符串，讲字符串分别存在对应的那一行
 * 2、根据行数来判断是要想上一行存还是下一行存
 */
convert = function(s, numRows) {
    if (numRows === 1) {
        return s;
    }
    const rows = [];
    for (let i = 0; i < numRows; i++) {
        rows[i] = '';
    }
    let current_row = 0;
    let go_down = true;
    for (let char of s) {
        rows[current_row] += char;
        if (current_row === 0) {
            go_down = true;
        } else if (current_row === numRows - 1) {
            go_down = false;
        }
        if (go_down) {
            current_row++;
        } else {
            current_row--;
        }
    }
    return rows.reduce((res, item) => res+=item, '');
}