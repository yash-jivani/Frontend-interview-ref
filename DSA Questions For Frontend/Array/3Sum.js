// https://leetcode.com/problems/3sum/

var threeSum = function (nums) {
    let ans = [];
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length; i++) {
        if (i == 0 || (i > 0 && nums[i] !== nums[i - 1])) {
            let sum = 0 - nums[i];
            let low = i + 1;
            let high = nums.length - 1;
            while (low < high) {
                if (nums[low] + nums[high] === sum) {
                    ans.push([nums[i], nums[low], nums[high]]);
                    while (low < high && nums[low] === nums[low + 1]) {
                        low++;
                    }
                    while (low < high && nums[high] === nums[high - 1]) {
                        high++;
                    }
                    low++;
                    high--;
                } else if (nums[low] + nums[high] < sum) {
                    low++;
                } else {
                    high--;
                }
            }
        }
    }
    return ans;
};
