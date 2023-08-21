// https://leetcode.com/problems/move-zeroes/

var moveZeroes = function (nums) {
    let right = 0;
    let left = 0;
    while (right < nums.length) {
        if (nums[right] === 0) {
            right++;
        } else {
            [nums[left], nums[right]] = [nums[right], nums[left]];
            left++;
            right++;
        }
    }
    return nums;
};
