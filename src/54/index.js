/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let result = [];
    const rules = {
        right:{
            next:'bottom',
            action(arr){
                const first_row = arr.shift();
                result = result.concat(first_row);
                total_count -= first_row.length;
            },
        },
        bottom:{
            next:'left',
            action(arr){
                arr.forEach((row) => {
                    result.push(row.pop());
                });
                total_count -= arr.length;
            }
        },
        left:{
            next:'top',
            action(arr){
                const last_row = arr.pop();
                result = result.concat(last_row.reverse());
                total_count -= last_row.length;
            }
        },
        top:{
            next:'right',
            action(arr){
                for (let i = arr.length - 1; i >=0; i--) {
                    result.push(arr[i].shift())
                }
                total_count -= arr.length;
            }
        },
    };
    let total_count = matrix.reduce((res, cur) => cur.length + res, 0);
    let current_direction = 'right';
    while (total_count > 0) {
        rules[current_direction].action(matrix);
        current_direction = rules[current_direction].next;
    }
    return result;
};

const test1 = [
    [ 1, 2, 3 ],
    [ 4, 5, 6 ],
    [ 7, 8, 9 ]
];
const test2 = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9,10,11,12]
  ];

// console.log(spiralOrder(test2));
module.exports = {
    id:'54',
    title:'Spiral Matrix',
    url:'https://leetcode.com/problems/spiral-matrix/',
    difficulty:'medium',
};