/**
 * @param {number[]} nums
 * @return {number}
 */
var waysToMakeFair = function (nums) {
    let odds = 0;
    let evens = 0;

    for (let i = 0; i < nums.length; i++) {
        if (i % 2) odds += nums[i];
        else evens += nums[i];
    }

    let preOdds = 0;
    let preEvens = 0;
    let postOdds = odds;
    let postEvens = evens;
    let totInd = 0;

    for (let i = 0; i < nums.length; i++) {
        if (i % 2) postOdds -= nums[i];
        else postEvens -= nums[i];

        if (preEvens + postOdds === preOdds + postEvens) {
            totInd++;
        }

        if (i % 2) preOdds += nums[i];
        else preEvens += nums[i];
    }

    return totInd;
};