// https://leetcode.com/problems/maximum-subarray/

var maxSubArray = function (nums) {
    let ans = -Infinity;
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        ans = Math.max(ans, sum);
        if (sum < 0) {
            sum = 0;
        }
    }
    return ans;
};
