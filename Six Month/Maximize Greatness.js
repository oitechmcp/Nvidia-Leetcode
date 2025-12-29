/**
 * @param {number[]} nums
 * @return {number}
 */
var maximizeGreatness = function(nums) {
    nums.sort((a, b) => a - b);
    let i = 0, j = 0;
    while (j < nums.length) {
        if (nums[i] < nums[j]) {
            i++;
        }
        j++;
    }
    return i;
};