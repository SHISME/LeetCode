/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
   let stack = [];
   let result = 0;
   heights.push(0);
   for (let i = 0; i < heights.length; i++) {
       const top_index = stack[stack.length - 1];
       if (stack.length === 0 || heights[i] > heights[top_index]) {
           stack.push(i);
       } else {
           const top_index = stack.pop();
           result = Math.max(result, heights[top_index] * (stack.length === 0 ? i : (i - stack[stack.length - 1] - 1)));
           i--;
       }
   }
    
    return result;
};

console.log(largestRectangleArea([0,1,0,2,0,3,0]));

module.exports = {
    id:'84',
    title:'Largest Rectangle in Histogram',
    url:'https://leetcode.com/problems/largest-rectangle-in-histogram/',
    difficulty:'hard',
};