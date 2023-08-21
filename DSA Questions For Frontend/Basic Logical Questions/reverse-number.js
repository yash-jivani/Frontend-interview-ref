/**
 * input: 123
 * output: 321
 *
 */

// method 1: (using built-in methods)
function reverseNum(num) {
    num = num.toString().split("");
    num.reverse();
    let ans = num.join("");
    return parseInt(ans);
}
console.log(reverseNum(123));
console.log(reverseNum(456789));

// method 2:
function reverseNumber(num) {
    let ans = 0;
    while (num > 0) {
        ans = ans * 10;
        ans += num % 10;
        num = parseInt(num / 10);
    }
    return ans;
}
console.log(reverseNumber(123));
console.log(reverseNumber(456789));
