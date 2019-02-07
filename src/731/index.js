
var MyCalendarTwo = function() {
    this.cache = [];
};

/** 
 * @param {number} start 
 * @param {number} end
 * @return {boolean}
 */
MyCalendarTwo.prototype.book = function(start, end) {
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
    for (let key in this.cache) {
        count += this.cache[key];
        if (count === 3) {
            this.cache[start]--;
            this.cache[end]++;
            return false;
        } 
    }
    return true;
};
const test_arr = [[47,50],[1,10],[27,36],[40,47],[20,27],[15,23],[10,18],[27,36],[17,25],[8,17],[24,33],[23,28],[21,27]];
const test = new MyCalendarTwo();
test_arr.forEach((item, index) => {
    console.log(index + 1, test.book(item[0], item[1]));
})


// const test = new MyCalendarTwo();

// console.log(test.book(10, 20) === true); // returns true
// console.log(test.book(50, 60) === true); // returns true
// console.log(test.book(10, 40) === true); // returns true
// console.log(test.book(5, 15) === false);// returns false
// console.log(test.book(5, 10) === true); // returns true
// console.log(test.book(25, 55) === true); // returns true


/** 
 * Your MyCalendarTwo object will be instantiated and called as such:
 * var obj = Object.create(MyCalendarTwo).createNew()
 * var param_1 = obj.book(start,end)
 */

 module.exports = {
     title:'My Calendar II',
     id:'731',
     url:'https://leetcode.com/problems/my-calendar-ii/',
     difficulty:'medium',
 };