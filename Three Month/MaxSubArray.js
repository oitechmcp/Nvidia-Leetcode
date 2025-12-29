/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let maxSum = nums[0];
    let currSum= nums[0];

    for(let i=1; i<nums.length; i++){
        if(currSum+nums[i]>nums[i]){
            currSum= currSum+nums[i]
        }else{
            currSum=nums[i]
        }

        if(currSum>maxSum){
            maxSum=currSum
        }
    }

    return maxSum;
};
