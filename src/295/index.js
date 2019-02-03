/**
 * initialize your data structure here.
 */
var MedianFinder = function() {
    this.nums = [];
    this.median = 0;
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    this.insertSort(num);
    if (this.nums.length % 2 === 0) {
        const i = this.nums.length / 2;
        const j = i - 1;
        this.median = (this.nums[i] + this.nums[j]) / 2;
    } else {
        const i = Math.floor(this.nums.length / 2);
        this.median = this.nums[i];
    }
};


/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.insertSort = function(num) {
    for (let i = this.nums.length - 1; i >= 0; i --) {
        if (this.nums[i] < num) {
           this.nums.splice(i + 1, 0, num);
           return;
        }
    }
    this.nums.unshift(num);
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    return this.median;
};
//     []              -1      []         -2        []            -3       []           -4       []           -5      []
//     [null,null,-1.0,null,-1.5,null,-2.0,null,-2.5,null,-3.0]
//     null             null     -1         0         null         -1       5          null       -2
// ["MedianFinder","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian"]
// [,[-1],[],[-2],[],[-3],[],[-4],[],[-5],[]]

const test = new MedianFinder();
test.addNum(-1);
test.addNum(-2);
console.log(test.findMedian());
test.addNum(-3);
test.addNum(-4);
test.addNum(-5);
console.log(test.findMedian());

/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = Object.create(MedianFinder).createNew()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */

 module.exports = {
     id:'295',
     title:' Find Median from Data Stream',
     url:'https://leetcode.com/problems/find-median-from-data-stream/',
     difficulty:'hard',
 }