// using recursion
function factorialRecursion(n) {
    if (n === 1) {
        return n;
    }
    return n * factorialRecursion(n - 1);
}
console.log(factorialRecursion(5));

// using loop
function factorialLoop(n) {
    let ans = 1;
    for (let i = 1; i <= n; i++) {
        ans *= i;
    }
    return ans;
}
console.log(factorialLoop(5));
