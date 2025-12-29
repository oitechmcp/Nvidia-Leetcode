const pivotIndex = (nums) => {
	// We have not started our program yet, so values are at 0
    let rightSum = 0;
    let leftSum = 0;

	// Calculate the sum of the entire array
    // O(n)
    nums.forEach((v) => (rightSum += v));

    // O(n)
    for (var i = 0; i <= nums.length - 1; i++) {
        let curr = nums[i];
		
		// The right sum no longer contains the curr number
        rightSum -= curr;
		
		// if left sum equals right sum, we return index
        if (leftSum === rightSum) return i;
		
		// We did not find a match
		// Left sum now contains our curr number
        leftSum += curr;
    }

    return -1;
};