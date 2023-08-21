// https://practice.geeksforgeeks.org/problems/trapping-rain-water-1587115621/1
// https://leetcode.com/problems/trapping-rain-water/

// brute force
function trappingWater(arr, n) {
    let water = 0;
    for (let i = 1; i < n - 1; i++) {
        let lmax = arr[i];
        let rmax = arr[i];
        for (let j = 0; j < i; j++) {
            lmax = Math.max(lmax, arr[j]);
        }
        for (let j = i + 1; j < n; j++) {
            rmax = Math.max(rmax, arr[j]);
        }
        water += Math.min(lmax, rmax) - arr[i];
    }
    return water;
}

// optimized
function trappingWater(arr) {
    let n = arr.length;

    let leftMaxArr = new Array(n);
    leftMaxArr[0] = arr[0];
    for (let i = 1; i < n - 1; i++) {
        let tmp = Math.max(leftMaxArr[i - 1], arr[i]);
        leftMaxArr[i] = tmp;
    }

    let rightMaxArr = new Array(n);
    rightMaxArr[n - 1] = arr[n - 1];
    for (let i = n - 2; i >= 0; i--) {
        let tmp = Math.max(rightMaxArr[i + 1], arr[i]);
        rightMaxArr[i] = tmp;
    }

    let water = 0;
    for (let i = 1; i < n - 1; i++) {
        water += Math.min(leftMaxArr[i], rightMaxArr[i]) - arr[i];
    }
    return water;
}
