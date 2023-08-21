const arr = [1, 2, 3, 4];

const sum = arr.reduce((acc, curr) => {
    return (acc += curr);
}, 0);
console.log(sum);

// custom reduce polyfill
Array.prototype.myReduce = function (callback, initValue) {
    let acc = initValue;
    let arr = this;
    for (let i = 0; i < arr.length; i++) {
        acc = acc ? callback(acc, arr[i]) : arr[i];
    }
    return acc;
};
const sum2 = arr.myReduce((acc, curr) => {
    return (acc += curr);
}, 0);
console.log(sum2);
