// https://practice.geeksforgeeks.org/problems/max-sum-subarray-of-size-k5313/1

function maximumSumSubarray(k, arr, n) {
    //code here
    let currSum = 0;
    let ans = -Infinity;
    for (let i = 0; i < k; i++) {
        currSum += arr[i];
        ans = Math.max(ans, currSum);
    }
    let left = 0;
    for (let i = k; i < n; i++) {
        currSum -= arr[left];
        currSum += arr[i];
        ans = Math.max(ans, currSum);
        left++;
    }
    return ans;
}
