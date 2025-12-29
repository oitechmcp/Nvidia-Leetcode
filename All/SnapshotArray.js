/**
 * @param {number} length
 */
var SnapshotArray = function(length) {
    this.snaps = Array.from({ length }, () => []);
    this.currSnapId = 0;
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
SnapshotArray.prototype.set = function(index, val) {
    const snapList = this.snaps[index];
    if (snapList.length && snapList[snapList.length - 1][0] === this.currSnapId) {
        snapList[snapList.length - 1][1] = val; // overwrite if same snap_id
    } else {
        snapList.push([this.currSnapId, val]);
    }
    
};

/**
 * @return {number}
 */
SnapshotArray.prototype.snap = function() {
    return this.currSnapId++;
    
};

/** 
 * @param {number} index 
 * @param {number} snap_id
 * @return {number}
 */
SnapshotArray.prototype.get = function(index, snap_id) {
    const snapList = this.snaps[index];
    let left = 0, right = snapList.length - 1;
    let res = 0;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (snapList[mid][0] <= snap_id) {
            res = snapList[mid][1];
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return res;
};

/** 
 * Your SnapshotArray object will be instantiated and called as such:
 * var obj = new SnapshotArray(length)
 * obj.set(index,val)
 * var param_2 = obj.snap()
 * var param_3 = obj.get(index,snap_id)
 */