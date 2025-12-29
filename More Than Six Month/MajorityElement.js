/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let obj = [];
    for(let i = 0; i < nums.length; i++) {
        let elem = obj.find(item => item.val == nums[i]);
        if(elem) {
            elem.count++;
        } else {
            obj.push({ val: nums[i], count: 1 });
        }
    }

    obj.sort((a, b) => b.count - a.count);

    return obj[0].count > nums.length / 2 ? obj[0].val : 0;
};
