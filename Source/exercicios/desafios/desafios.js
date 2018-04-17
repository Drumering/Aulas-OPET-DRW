function reverseString(str) {
    var res = "";

    for (let i = str.length - 1; i >= 0; i--) {
        res += str[i]
    };
    return res;
}

/*function isPalindrome(str) {
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
}*/

function isPalindrome(str) {
    if (reverseString(str) === str) {
    console.log(reverseString(str) + "<->" + str)
    console.log ("É um palíndromo");
    } else {
        console.log("Não é um palíndromo");
    }
}

function fizzBuzz() {
    for (var i = 1; i <= 100; i++) {
        var valor = "";

        if (i % 3 === 0) valor += "fizz";
        if (i % 5 === 0) valor += "buzz";
        console.log(valor || i);
    }
}

function maxCharacters(str) {
    var guardarValor = {};

    for (var i = 0; i < str.length; i++) {
        if (!guardarValor[str[i]])
            guardarValor[str[i]] = 1;
        else
            guardarValor[str[i]]++;
    }

    var charRecorrente = "",
        numeroVezes = 0;

    for (var key in guardarValor) {
        if (guardarValor[key] >= numeroVezes) {
            charRecorrente = key;
            numeroVezes = guardarValor[key];
        }

    }
    console.log(charRecorrente + " aparece " + numeroVezes);
}