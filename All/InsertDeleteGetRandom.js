
var RandomizedSet = function() {
    this.valToIndex = new Map();  // Maps value → index in array
    this.values = [];             // Array of current values
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if (this.valToIndex.has(val)) return false;

    this.valToIndex.set(val, this.values.length);
    this.values.push(val);
    return true;
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    if (!this.valToIndex.has(val)) return false;

    const index = this.valToIndex.get(val);
    const lastElement = this.values[this.values.length - 1];

    // we swap with last element
    this.values[index] = lastElement;
    this.valToIndex.set(lastElement, index);

    // we remove last element
    this.values.pop();
    this.valToIndex.delete(val);

    return true;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {

    const randIndex = Math.floor(Math.random() * this.values.length);
    return this.values[randIndex]; 
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */