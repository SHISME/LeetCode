
var MyCalendarThree = function() {
    this.cache = [];
};

/** 
 * @param {number} start 
 * @param {number} end
 * @return {number}
 */
MyCalendarThree.prototype.book = function(start, end) {
    if (this.cache[start]) {
        this.cache[start] = this.cache[start] + 1;
    } else {
        this.cache[start] = 1;
    }
    if (this.cache[end]) {
        this.cache[end] = this.cache[end] - 1;
    } else {
        this.cache[end] = -1;
    }
    let count = 0;
    let result = 0;
    for (let key in this.cache) {
        count += this.cache[key];
        result = Math.max(count, result);
    }
    return result;
};

const test_arr = [[10,20],[50,60],[10,40],[5,15],[5,10],[25,55]];
const test = new MyCalendarThree();
test_arr.forEach((item, index) => {
    console.log(index, test.book(item[0], item[1]));
})

/** 
 * Your MyCalendarThree object will be instantiated and called as such:
 * var obj = Object.create(MyCalendarThree).createNew()
 * var param_1 = obj.book(start,end)
 */

 module.exports = {
     id:'732',
     title:'My Calendar III',
     url:'https://leetcode.com/problems/my-calendar-iii/',
     difficulty:'hard',
 }