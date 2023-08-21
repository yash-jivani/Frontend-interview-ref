// 1. find nth fibonacci number

// using recursion
function fibRecursion(n) {
    if (n < 2) {
        return n;
    }
    return fibRecursion(n - 1) + fibRecursion(n - 2);
}
console.log(fibRecursion(15));

// using loop
function fibLoop(n) {
    let n1 = 0;
    let n2 = 1;
    let n3;
    for (let i = 2; i <= n; i++) {
        n3 = n1 + n2;
        n1 = n2;
        n2 = n3;
    }
    return n3;
}
console.log(fibLoop(15));

// 2. print fibonacci series

// using loop
function printFibo(n) {
    let a = 0;
    let b = 1;
    let c;
    process.stdout.write(`${a} ${b} `);
    for (let i = 2; i <= n; i++) {
        c = a + b;
        process.stdout.write(`${c} `);
        a = b;
        b = c;
    }
}
printFibo(15);

// using recursion
function printFiboRecursion(n) {
    for (let i = 0; i <= n; i++) {
        let num = fibRecursion(i);
        process.stdout.write(`${num} `);
    }
}
console.log();
printFiboRecursion(15);
