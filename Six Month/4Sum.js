/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {

    const results = [];
    const n = nums.length;
    if (n < 4) return results;
    nums.sort((a, b) => a - b);

    for (let i = 0; i < n - 3; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue; // skip dupl.

        for (let j = i + 1; j < n - 2; j++) {
            if (j > i + 1 && nums[j] === nums[j - 1]) continue; // skip dupl.

            let left = j + 1;
            let right = n - 1;
            let sumAB = nums[i] + nums[j];

            while (left < right) {
                const sum = sumAB + nums[left] + nums[right];

                if (sum === target) {
                    results.push([nums[i], nums[j], nums[left], nums[right]]);

                    // Skip dupl.
                    while (left < right && nums[left] === nums[left + 1]) left++;
                    while (left < right && nums[right] === nums[right - 1]) right--;

                    left++;
                    right--;
                } else if (sum < target) {
                    left++;
                } else {
                    right--;
                }
            }
        }
    }

    return results;
};