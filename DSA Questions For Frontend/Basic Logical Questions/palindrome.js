const str1 = "madam";
const str2 = "yash";

function checkPalindrome(str) {
    let i = 0;
    let j = str.length - 1;
    while (i < j) {
        if (str[i] !== str[j]) {
            return false;
        }
        i++;
        j--;
    }
    return true;
}

console.log(checkPalindrome(str1));
console.log(checkPalindrome(str2));
