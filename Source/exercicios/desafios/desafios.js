function reverseString(str) {
    var res = "";

    for (let i = str.length - 1; i >= 0; i--) {
        res += str[i]
    };
    return res;
}

function isPalindrome(str) {
    var newSTR = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newSTR += str[i];
    }
    if (newSTR == str) {
        console.log("É um palídromo!");
    } else {
        console.log("Não é um palídromo!");
    };

    return newSTR + " <-> " + str;
}