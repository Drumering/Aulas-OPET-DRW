function reverseString(str) {
    var res = "";

    for (let i = str.length-1; i >= 0; i--) {
        res += str[i]
    };
    return res;
}

function isPalindrome(str) {
    var res = reverseString(str);
    for (let i = 0; i < str.length; i++) {
        res += ":" + str[i]
    }
    return res;
}