function primeNumber(num) {
    if (num === 1) {
        return `Not prime number`;
    } else if (num > 1) {
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                return `Not prime number`;
            }
        }
        return `Prime number`;
    }
}

console.log(primeNumber(23));
console.log(primeNumber(16));
