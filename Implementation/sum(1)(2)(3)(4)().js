// Infinite currying
// asked in: uber, cars24

function sum(a) {
    return function (b) {
        if (b) {
            return sum(a + b);
        }
        return a;
    };
}

console.log(sum(1)(2)(3)(4)());
