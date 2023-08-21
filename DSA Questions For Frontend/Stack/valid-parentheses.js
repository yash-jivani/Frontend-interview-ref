// https://leetcode.com/problems/valid-parentheses/
// https://practice.geeksforgeeks.org/problems/parenthesis-checker2744/1

var isValid = function (s) {
    let stack = [];
    for (let i in s) {
        if (stack.length === 0) {
            stack.push(s[i]);
        } else if (
            (stack[stack.length - 1] === "(" && s[i] == ")") ||
            (stack[stack.length - 1] === "{" && s[i] == "}") ||
            (stack[stack.length - 1] === "[" && s[i] == "]")
        ) {
            stack.pop();
        } else {
            stack.push(s[i]);
        }
    }
    return stack.length > 0 ? false : true;
};
