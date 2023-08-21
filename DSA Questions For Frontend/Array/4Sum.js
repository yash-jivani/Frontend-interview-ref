// https://leetcode.com/problems/4sum/

var fourSum = function (nums, target) {
    let ans = [];
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            let sum = target - nums[i] - nums[j];
            let low = j + 1;
            let high = nums.length - 1;
            while (low < high) {
                if (nums[low] + nums[high] === sum) {
                    ans.push([nums[i], nums[j], nums[low], nums[high]]);
                    while (low < high && nums[low] === nums[low + 1]) {
                        low++;
                    }
                    while (low < high && nums[high] === nums[high - 1]) {
                        high--;
                    }
                    low++;
                    high--;
                } else if (nums[low] + nums[high] < sum) {
                    low++;
                } else {
                    high--;
                }
            }
            while (j < nums.length && nums[j] == nums[j + 1]) {
                j++;
            }
        }
        while (i < nums.length && nums[i] == nums[i + 1]) {
            i++;
        }
    }
    return ans;
};
