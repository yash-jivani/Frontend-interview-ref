/**
 * NULL => actual value
 * undefined => not yet init.
 * not defined => not declare
 */

console.log("NULL:: ", typeof null); // object
console.log("Undefined:: ", typeof undefined); // undefined
console.log(null == undefined); // true
console.log(null === undefined); // false

// Example:

let a = null;
let b;

console.log(a); // value => null
console.log(b); // not init yet => undefined
console.log(c); // not declare => not defined
