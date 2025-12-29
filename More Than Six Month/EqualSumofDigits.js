var maximumSum = (nums) => {
    var m = new Array(82).fill(0);
    var max = -1;
    nums.forEach(num => {
        var sum = 0, e = num;
        while (e > 0) {
            sum += e % 10;
            e = (e / 10) | 0;
        }
        if (m[sum]>0) {
            max = Math.max(max, m[sum] + num);
        }
        m[sum] = Math.max(m[sum], num);
    });
    return max;
};