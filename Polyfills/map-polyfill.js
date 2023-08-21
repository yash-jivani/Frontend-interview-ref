const arr = [1, 2, 3, 4, 5];
const x2 = arr.map((ele) => {
    return ele * 2;
});
console.log(x2);

// custom Array.map polyfill
Array.prototype.myMap = function (callback) {
    const result = [];
    const arr = this;
    for (let i = 0; i < this.length; i++) {
        result.push(callback(arr[i], i, arr));
    }
    return result;
};

const x3 = arr.myMap((ele) => {
    return ele * 3;
});
console.log(x3);
