// flatten array
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let arr = [[1, 2], [3, 4, 5], [6], [7, [8, [9]], 10]];

// built-in method
console.log(arr.flat(3)); // 3 lev. flatten

// custom function | recursion
function flattenArray(arr, depth = 1) {
    let result = [];
    arr.forEach((ele) => {
        if (Array.isArray(ele) && depth > 0) {
            result.push(...flattenArray(ele, depth - 1));
        } else {
            result.push(ele);
        }
    });
    return result;
}

console.log(flattenArray(arr, 3));

// M2:
const arr2 = [1, 2, [3, [4], 5], [6, [7, [8], 9]], 10];
const ans = [];

function flattenArray2(arr, depth, ans) {
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i]) && depth != 0) {
            flattenArray2(arr[i], depth - 1, ans);
        } else {
            ans.push(arr[i]);
        }
    }
}

flattenArray2(arr2, 3, ans);
console.log(ans);
