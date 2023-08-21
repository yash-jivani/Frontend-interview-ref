let a = 10;
let b = 20;

// method 1:
[a, b] = [b, a];
console.log(a, b);

// method 2:
a = a + b;
b = a - b;
a = a - b;
console.log(a, b);
