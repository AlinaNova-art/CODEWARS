function nbDig(n, d) {
    var arr = [];
    for (let i = 0; i <= n; i++) {
        arr.push(i)
    }

    var arr2 = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 0) {
            arr2.push(0);
        }
        else arr2.push(Math.pow(arr[i], 2));
    }

    var str = arr2.join('');

    var count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] == d) {
            count++;
        }
    }
    return count;
}


function nbDig(n, d) {

    var count = 0;

    for (let i = 0; i <= n; i++) {
        let number = "0";
        if (i > 0) {
            number = Math.pow(i, 2).toString();
        }

        for (let j = 0; j < number.length; j++) {
            if (number[j] == d) {
                count++;
            }
        }
    }

    return count;
}


function numberOfDigits(number, d) {
    var count = 0;
    if (number == 0 && d == 0) {
        return 1;
    }
    while (number > 0) {
        var lastD = number % 10;
        if (lastD == d) {
            count++;
        }
        number = (number - lastD) / 10;

    }

    return count;
}

function nbDig(n, d) {

    var count = 0;

    for (let i = 0; i <= n; i++) {
        let number = 0;
        if (i > 0) {
            number = Math.pow(i, 2);
        }

        count += numberOfDigits(number, d);

    }

    return count;
}

function numberOfDigits(number, d) {
    var c = 0;
    if (number == 0 && d == 0) {
        return 1;
    }
    while (number > 0) {
        var lastD = number % 10;
        if (lastD == d) {
            c++;
        }
        number = (number - lastD) / 10;

    }

    return c;
}