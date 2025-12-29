/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    nums=nums.sort((a,b)=> b-a)
   if(nums.length===0){
    return 0
   }
   let output=0
   for(let i=0;i<nums.length;i++){
    if(i===k-1){
        output=nums[i]
    }
   }
return output
};