var intersection = function(nums1, nums2) {
  const num1Set = new Set(nums1);
  const num2Set = new Set(nums2);
  
  const result = [];
  
  for (var value of num1Set) {
    if (num2Set.has(value)) {
      result.push(value);
    }
  }
  
  return result;
};