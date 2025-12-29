class Solution {
    static {
        for (int i = 0; i < 500; i++)
            minSubArrayLen(1, new int[] { 0, 0, 0, 0 });
    }

    public static int minSubArrayLen(int target, int[] nums) {
        int sum = 0;
        int left = 0;
        int min = Integer.MAX_VALUE;
        for (int right = 0; right < nums.length; right++) {
            sum += nums[right];
            while (sum >= target) {
                min = Math.min(min, right - left + 1);
                sum -= nums[left];
                left++;
            }
        }
        return min == Integer.MAX_VALUE ? 0 : min;
    }

}