  /**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let start = 0;
    let end = nums.length - 1;
    let mid;

    while (start <= end) {
        mid = Math.floor(start + (end - start) / 2);

        //Is the number at 'mid' exactly what we're looking for?

        if (nums[mid] == target) {
            return mid; // Yes! We found it, return its index.
        }
        //Figure out which half of our current search range is sorted.
        // We compare the number at 'mid' with the number at 'end'.
        // If nums[mid] is less than or equal to nums[end], it means the right half (from mid to end) is sorted.
        // Example: [6, 7, 0, 1, 2, 3, 4]  If mid is 1 (value 7) and end is 6 (value 4), then 7 > 4, so this condition is false.
        // Example: [0, 1, 2, 3, 4, 5, 6]  If mid is 3 (value 3) and end is 6 (value 6), then 3 <= 6, so this condition is true.
        // Example: [4, 5, 6, 7, 0, 1, 2]  If mid is 5 (value 1) and end is 6 (value 2), then 1 <= 2, so this condition is true.
        if (nums[mid] <= nums[end]) {
            // This means the right part of the array (from 'mid' to 'end') is perfectly sorted.
            // Now, we check if our 'target' *could* be in this sorted right half.
            // It needs to be greater than the number at 'mid' AND less than or equal to the number at 'end'.
            if (target > nums[mid] && target <= nums[end]) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        } else
        // This 'else' means (nums[mid] > nums[end])
        // This means the left part of the array (from 'start' to 'mid') is perfectly sorted.
        // (Because if the right part isn't sorted, the left must be, due to the rotation).
        // Example: [4, 5, 6, 7, 0, 1, 2] If start is 0 (value 4) and mid is 3 (value 7), then nums[start] <= nums[mid]
        // Now, we check if our 'target' *could* be in this sorted left half.
        // It needs to be less than the number at 'mid' AND greater than or equal to the number at 'start'.
        {
            if (target < nums[mid] && target >= nums[start]) {
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        }
    }
    // If the loop finishes, it means 'start' has become greater than 'end',
    // which means our search range has become empty without finding the target.
    return -1; // So, we return -1 to indicate the target was not found.
};