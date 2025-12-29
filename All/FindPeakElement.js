/**
 * @param {number[]} nums
 * @return {number}
 */

var findPeakElement = function(nums) {

    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        const mid = Math.floor((left + right) / 2);

        // we compare middle with its next element
        if (nums[mid] > nums[mid + 1]) {
            // Peak is on the left side (including mid)
            right = mid;
        } else {
            // Peak is on the right side (excluding mid)
            left = mid + 1;
        }
    }

    // Left and right converge at peak
    return left;
};