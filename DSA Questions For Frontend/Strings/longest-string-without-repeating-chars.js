// https://leetcode.com/problems/longest-substring-without-repeating-characters/

var lengthOfLongestSubstring = function (s) {
    let ans = 0;
    let left = 0;
    let right = 0;
    let uniqueChars = new Set();
    while (right < s.length) {
        if (!uniqueChars.has(s[right])) {
            uniqueChars.add(s[right]);
            right++;
            ans = Math.max(uniqueChars.size, ans);
        } else {
            uniqueChars.delete(s[left]);
            left++;
        }
    }
    return ans;
};
