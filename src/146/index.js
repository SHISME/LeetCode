/**
 * 
 * @param {number} val 
 * @param {number} key 
 */
var Node = function(val, key) {
    this.pre = null;
    this.next = null;
    this.val = val;
    this.key = key;
}

/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.count = 0;
    this.capacity = capacity;
    this.map = new Map();
    this.head = null;
    this.tail = null;
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if (this.map.has(key)) {
        var current_node = this.map.get(key);
        current_node.pre.next = current_node.next;
        current_node.next.pre = current_node.pre;
        current_node.pre = null;
        this.insertToHead(current_node);
        return current_node.val;
    }
    return -1;
};

/**
 * @param {Node} node
 */
LRUCache.prototype.insertToHead = function(node) {
    this.head.pre = node;
    node.next = this.head;
    this.head = node;
}

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    var new_node = new Node(value, key);
    if (this.count === this.capacity) {
        this.map.delete(this.tail.key);
        this.tail = this.tail.pre;
        this.tail.next = null;
        this.count--;
    } 
    this.count ++;
    if (this.count === 2) {
        this.tail = this.head;
        this.head = new_node;
        this.head.next = this.tail;
        this.tail.pre = this.head;
    }
    this.insertToHead(new_node);
    this.map.set(key, new_node);
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = Object.create(LRUCache).createNew(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
cache = new LRUCache( 2 );

console.log(cache.put(1, 1));
console.log(cache.put(2, 2));
console.log(cache.get(1));       // returns 1
console.log(cache.put(3, 3));    // evicts key 2
console.log(cache.get(2));       // returns -1 (not found)
// console.log(cache.put(4, 4));    // evicts key 1
// console.log(cache.get(1));       // returns -1 (not found)
// console.log(cache.get(3));      // returns 3
// console.log(cache.get(4));       // returns 4