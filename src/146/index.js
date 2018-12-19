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
        var cache_node = this.map.get(key);
        if (cache_node) {
            if (this.tail === cache_node) {
                this.tail = cache_node.pre;
                this.insertToHead(cache_node);
                return cache_node.val;
            }
            if (this.head === cache_node) {
                return cache_node.val;
            }
            cache_node.pre.next = cache_node.next;
            cache_node.next.pre = cache_node.pre;
            this.insertToHead(cache_node);
            return cache_node.val;
        }
        return -1;
    };

    /**
     * @param {Node} node
     */
    LRUCache.prototype.insertToHead = function(node) {
        if (!this.head) {
            this.head = node;
            return;
        }
        if (!this.tail) {
            this.tail = this.head;
            this.head = node;
            this.head.next = this.tail;
            this.tail.pre = this.head;
            return;
        }
        if (node === this.head) {
            return;
        }
        if (node === this.tail) {
            this.tail = this.tail.pre;
            this.tail.next = null;
        }
        if (node.pre) {
            node.pre.next = node.next;
        }
        if (node.next) {
            node.next.pre = node.pre;
        }
        this.head.pre = node;
        node.next = this.head;
        this.head = node;
        node.pre = null;
    }

    /** 
     * @param {number} key 
     * @param {number} value
     * @return {void}
     */
    LRUCache.prototype.put = function(key, value) {
        var cache_node = this.map.get(key);
        if (!cache_node) {
            var new_node = new Node(value, key);
            if (this.count === this.capacity) {
                if (this.capacity === 1) {
                    this.map.delete(this.head.key);
                    this.head = null;
                } else {
                    this.map.delete(this.tail.key);
                    this.tail = this.tail.pre;
                    this.tail.next = null;
                }
                this.count--;
            }
            this.count ++;
            this.insertToHead(new_node);
            this.map.set(key, new_node);
        } else {
            cache_node.val = value;
            this.insertToHead(cache_node);
        }
    };

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = Object.create(LRUCache).createNew(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
cache = new LRUCache( 3 );

// console.log(cache.put(1, 1));
// console.log(cache.put(2, 2));
// console.log(cache.get(1) === 1);      
// console.log(cache.put(3, 3));   
// console.log(cache.get(2) === 2);      
// console.log(cache.put(4, 12));   
// console.log(cache.put(4, 4));   
// console.log(cache.get(1) === -1);      
// console.log(cache.get(3) === 3);      
// console.log(cache.get(4) === 4);      


console.log(cache.get(2) === -1);      
console.log(cache.put(2, 6));   
console.log(cache.get(1) === -1);      
console.log(cache.put(1, 5));   
console.log(cache.put(1, 2));   
console.log(cache.get(1) === 2);      
console.log(cache.get(2) === 6);      


// console.log(cache.put(2, 1));
// console.log(cache.put(1, 2));
// console.log(cache.put(2, 3));
// console.log(cache.put(4, 1));
// console.log(cache.get(1) === -1);        
// console.log(cache.get(2) === 3); 
