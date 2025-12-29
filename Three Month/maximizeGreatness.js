/**
 * @param {number[]} nums
 * @return {number}
 */
var maximizeGreatness = function(nums) {
    nums.sort((a,b) => a - b)
    let i = 0
    let j = 0
    let count = 0

    while (i < nums.length && j < nums.length) {
        if (nums[j] > nums[i]) {
            i++
            j++
            count++
        }else {
            j++
        }
    }

    return count
};
 