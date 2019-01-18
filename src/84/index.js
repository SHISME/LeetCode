/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    let left = 0;
    let right = heights.length - 1;
    let result = 0;
    function findMinHeight(left, right) {
        let minHeightIndex = left;
        let minHeight = heights[left];
        left ++;
        while (left <= right) {
            if (heights[left] < minHeight) {
                minHeight = heights[left];
                minHeightIndex = left;
            }
            left ++;
        }
        return minHeightIndex;
    }
    while (left <= right) {
        const minHeightIndex = findMinHeight(left, right);
        const minHeight = heights[minHeightIndex];
        const leftHeight = heights[left];
        const rightHeight = heights[right];
        const area = minHeight * (right - left + 1);
        result = Math.max(area, result);
        if (leftHeight <= rightHeight) {
            left = minHeightIndex + 1;
        } else {
            right = minHeightIndex - 1;
        }
    }
    
    return result;
};

console.log(largestRectangleArea([0, 2, 0]));

module.exports = {
    id:'84',
    title:'Largest Rectangle in Histogram',
    url:'https://leetcode.com/problems/largest-rectangle-in-histogram/',
    difficulty:'hard',
};