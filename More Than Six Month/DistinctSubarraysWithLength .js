/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumSubarraySum = function (nums, k) {
    let windowSum = 0;
    let set = new Set()
    let maxSum = 0;
    let left = 0;

    for (let right = 0; right < nums.length; right++) {
        windowSum += nums[right];
        while (set.has(nums[right]) && left < right) {
            windowSum -= nums[left]
            set.delete(nums[left])
            left++
        }
        set.add(nums[right])
        if (set.size === k) {
            maxSum = Math.max(maxSum, windowSum)
            set.delete(nums[left])
            windowSum -= nums[left]
            left++
        }
    }
    return maxSum;
};