/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
    // let res=[]
    // for(let i=0;i<nums1.length;i++){
    //     if(nums2.includes(nums1[i])){
    //         if(!res.includes(nums1[i]))
    //         res.push(nums1[i])
    //     }
    // }
    // return res

    let s = [...new Set(nums1)], res = []
    for (let i = 0; i < s.length; i++) {
        if (nums2.includes(s[i])) {
            res.push(s[i])
        }
    }
    return res
};