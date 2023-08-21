const arr = [1, 2, 3, 4, 5];
const evn = arr.filter((ele) => {
    return ele % 2 == 0;
});
console.log(evn);

// custom filter polyfill
Array.prototype.myFilter = function (callback) {
    const result = [];
    let arr = this;
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i], i, arr)) {
            result.push(arr[i]);
        }
    }
    return result;
};

const odd = arr.myFilter((ele) => {
    return ele % 2 !== 0;
});
console.log(odd);
