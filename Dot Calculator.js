function dotCalculator(equation) {
    var arr = equation.split(' ');
    var a = arr[0].length;
    var b = arr[2].length;
    var c;
    var str = "";

    if (arr[1] == "+") {
        c = a + b;
    }

    else if (arr[1] == "*") {
        c = a * b;
    }
    else if (arr[1] == "-") {
        c = a - b;
    }

    else if (arr[1] == "//") {
        c = Math.floor(a / b);
    }

    for (let i = 0; i < c; i++) {
        str += ".";
    }

    return str;
}