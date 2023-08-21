/**
 * 1. Object constructor
 * 2. Object litral
 * 3. Function constructor
 * 4. Object.create() method
 * 5. ES6 class syntax
 */

const a = new Object();
const b = Object.create(null);
const c = { name: "yash1" };
function func(str) {
    this.name = str;
}
const d = new func("yash2");

class Person {
    constructor(str) {
        this.name = str;
    }
}
const e = new Person("yash3");
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
