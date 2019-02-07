/**
 * 思路：
 * 1、缓存订阅过得start end
 * 2、任意两个 start，end 如果 如果两个的max_end - min_start < 两个的长度和则说明这两个有相交的部分。
 * 
 */
var MyCalendar = function() {
    this.cache = [];
}

/** 
 * @param {number} start 
 * @param {number} end
 * @return {boolean}
 */
MyCalendar.prototype.book = function(start, end) {
    if (this.cache .length > 0) {
        for (let i = 0; i < this.cache.length; i++) {
            const old = this.cache[i];
            const old_range = old.end - old.start;
            const new_range = end - start;
            const min_start = Math.min(old.start, start);
            const max_end = Math.max(old.end, end);
            if ((max_end - min_start) < (old_range + new_range)) {
                return false;
            }
        }
    }
    this.cache.push({
        start,
        end,
    });
    return true;
};

/** 
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = Object.create(MyCalendar).createNew()
 * var param_1 = obj.book(start,end)
 */


const test = new MyCalendar();
console.log(test.book(10, 20) === true); // returns true
console.log(test.book(15, 25) === false); // returns false
console.log(test.book(20, 30) === true); // returns true

module.exports = {
    title:'My Calendar I',
    id:'729',
    url:'https://leetcode.com/problems/my-calendar-i/',
    difficulty:'medium',
};