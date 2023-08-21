let arr = [1, 2, 3, 5];
const brr = [...arr]; // shallow copy | work only if we not have nested arrays
brr.push(4);
console.log("Arr: ", arr);
console.log("Brr: ", brr);

let crr = [1, 2, [10, [11]], 5];
const drr = JSON.parse(JSON.stringify(crr)); // deep copy | also work with nested arrays
drr[2][1].push(4);
console.log("Crr: ", crr);
console.log("Drr: ", drr);
