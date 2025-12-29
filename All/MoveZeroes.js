/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
// let zeros=[],numbers=[]
// for(let i=0;i<nums.length;i++){
//     if(nums[i]==0){
//         zeros.push(nums[i])
//     }else{
//         numbers.push(nums[i])
//     }
// }
//     let res=[...numbers,...zeros]
//     nums.splice(0,nums.length,...res)

     let j=0
    for(let i=0;i<nums.length;i++){
     if(nums[i]!=0){
        nums[j]=nums[i]
        j++
     }
    }
    while(j<nums.length){
        nums[j]=0
        j++
    }
};