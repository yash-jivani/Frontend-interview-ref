// https://leetcode.com/problems/valid-anagram/

// solution 1:
var isAnagram = function (s, t) {
    if (s.length !== t.length) {
        return false;
    }

    let map = {};
    let map2 = {};
    for (let i = 0; i < s.length; i++) {
        if (map[s[i]]) {
            map[s[i]]++;
        } else {
            map[s[i]] = 1;
        }
    }

    for (let i = 0; i < t.length; i++) {
        if (map2[t[i]]) {
            map2[t[i]]++;
        } else {
            map2[t[i]] = 1;
        }
    }

    console.log(map, map2);
    for (let i = 0; i < s.length; i++) {
        if (map[s[i]] !== map2[s[i]]) {
            return false;
        }
    }
    return true;
};

// solution 2:
var isAnagram = function (s, t) {
    if (s.length !== t.length) {
        return false;
    }

    let sCharCount = {};

    for (let i = 0; i < s.length; i++) {
        sCharCount[s[i]] = sCharCount[s[i]] + 1 || 1;
    }

    for (let i = 0; i < t.length; i++) {
        if (!sCharCount[t[i]]) {
            return false;
        } else {
            sCharCount[t[i]]--;
        }
    }
    return true;
};
