// https://practice.geeksforgeeks.org/problems/leaders-in-an-array-1587115620/1

function leaders(arr, n) {
    let ans = [];
    arr.reverse();
    let maxi = -Infinity;
    for (let i = 0; i < n; i++) {
        if (maxi <= arr[i]) {
            maxi = arr[i];
            ans.push(arr[i]);
        }
    }
    return ans.reverse();
}
