function computerToPhone(numbers) {
    var newstr = "";
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] == "7") {
            newstr = newstr + '1'
        } else if (numbers[i] == "8") {
            newstr = newstr + '2';
        } else if (numbers[i] == "9") {
            newstr = newstr + '3';
        } else if (numbers[i] == "4") {
            newstr = newstr + '4';
        } else if (numbers[i] == "5") {
            newstr = newstr + '5';
        } else if (numbers[i] == "6") {
            newstr = newstr + '6';
        } else if (numbers[i] == "1") {
            newstr = newstr + '7';
        } else if (numbers[i] == "2") {
            newstr = newstr + '8';
        } else if (numbers[i] == "3") {
            newstr = newstr + '9';
        } else if (numbers[i] == "0") {
            newstr = newstr + '0';

        }
    }
    return newstr;
}

/*function computerToPhone(numbers) {
    var newstr = "";
    var map = {
        7: 1,
        8: 2,
        9: 3,
        4: 4,
        5: 5,
        6: 6,
        1: 7,
        2: 8,
        3: 9,
        0: 0,
    }

    for (let i = 0; i < numbers.length; i++) {
        newstr = newstr + map[numbers[i]];
    }
    return newstr;
}
*/

