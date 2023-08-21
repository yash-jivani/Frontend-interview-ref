// Memoization | caching

// Before (withour using memoization)
const calc = function (num1, num2) {
    for (let i = 0; i < 100000000; i++) {}
    return num1 * num2;
};

console.log(calc(3, 2));
console.log(calc(3, 2));

// Memoize function
function myMemoize(func) {
    const mapp = {};
    return function (...args) {
        let key = JSON.stringify(args);
        if (key in mapp) {
            console.log(key, "Getting from cache");
        } else {
            console.log(key, "Calling function");
            mapp[key] = func(...args);
        }
        return mapp[key];
    };
}

// after (using memoization function)
const sumMemo = myMemoize(calc);
console.log(sumMemo(3, 2));
console.log(sumMemo(3, 2));

// ? with recursion | factorial
// ! NOTE => calling "factorialMemo" (memoized function)
const factorialMemo = myMemoize((num) => {
    if (num === 0) {
        return 1;
    }
    return num * factorialMemo(num - 1); // calling factorialMemo
});
console.log(factorialMemo(4));
console.log(factorialMemo(5));
