// https://leetcode.com/problems/two-sum/

var twoSum = function (nums, target) {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        let remaining = target - nums[i];
        if (map.has(remaining)) {
            return [map.get(remaining), i];
        } else {
            map.set(nums[i], i);
        }
    }
};
