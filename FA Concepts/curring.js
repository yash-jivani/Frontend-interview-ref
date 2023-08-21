/*
 * curring in javascript
 *   - 2 method
 *        1 -> using bind method
 *        2 -> using closures
 */

//? 1. using bind method
function multiply1(x, y) {
    return x * y;
}

const multiplyBy3 = multiply1.bind(this, 3); // this points to (window/global) object
console.log(multiplyBy3(5));

//? 2. using closures
function multiply(x) {
    return function (y) {
        return x * y;
    };
}

const multiplyBy2 = multiply(2);
console.log(multiplyBy2(10));
