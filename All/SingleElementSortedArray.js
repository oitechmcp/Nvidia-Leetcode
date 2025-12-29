/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
    const n = nums.length;
    let left = 0, right = n - 1;

    while (left < right) {
        let mid = Math.floor((left + right) / 2);

        // we ensure mid is even for comparison with next element
        if (mid % 2 === 1) mid--;

        if (nums[mid] === nums[mid + 1]) {
            // if pair is valid, we move rightward
            left = mid + 2;
        } else {
            // if pair is broken, we move leftward
            right = mid;
        }
    }

    return nums[left];  
};
