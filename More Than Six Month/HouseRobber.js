/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let robber1 = 0, robber2 = 0;
    for(let n of nums){
        let temp = Math.max(robber1 + n, robber2);
        robber1 = robber2;
        robber2 = temp;
    }
    return robber2;
};