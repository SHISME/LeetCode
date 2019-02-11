/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.stack = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    if (this.stack.length === 0) {
        this.stack.push(x);
        return;
    }
    if (this.stack[0] < x) {
        this.stack.unshift(x);
        return;
    }
    for (let i = this.stack.length - 1; i >= 0; i--) {
        if (x < this.stack[i] || i === 0) {
            this.stack.splice(i + 1, 0, x);
            return;
        }
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    return this.stack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[0];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.stack[this.stack.length - 1];
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = Object.create(MinStack).createNew()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

module.exports = {
    id:'155',
    title:'Min Stack',
    url:'https://leetcode.com/problems/min-stack/#/description',
    difficulty:'easy',
};