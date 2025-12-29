class MyHashMap {
    constructor () {
        this.indexArr = [];
        this.valueArr = [];
    }
    put(key, value) {
        if(this.indexArr[key] === undefined) {
            this.valueArr.push(value);
            this.indexArr[key] = this.valueArr.length - 1;
        } else {
            this.valueArr[this.indexArr[key]] = value;
        }
    }
    get(key) {
        if(this.indexArr[key] === undefined) return -1;
        return this.valueArr[this.indexArr[key]];
    }
    remove(key) {
        if(this.indexArr[key] !== undefined) {
            this.valueArr[this.indexArr[key]] = undefined;
            this.indexArr[key] = undefined;
        }
    }
}
