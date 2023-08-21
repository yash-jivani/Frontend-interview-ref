// https://leetcode.com/problems/rotate-array

function reverse(arr, start, end) {
    while (start < end) {
        let tmp = arr[start];
        arr[start] = arr[end];
        arr[end] = tmp;
        start++;
        end--;
    }
    return arr;
}

var rotate = function(nums, k) {
    k = k % nums.length;
    reverse(nums, 0, nums.length-1);
    reverse(nums, 0, k-1);
    reverse(nums, k, nums.length-1);
};