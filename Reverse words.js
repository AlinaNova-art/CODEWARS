function reverseWords(str) {

    var arrayOfStr = str.split(" ");
    var newstr = "";

    for (let i = 0; i < arrayOfStr.length; i++) {

        var reverse = arrayOfStr[i].split("").reverse().join("");
        newstr += reverse + " ";

    }
    var newstr2 = newstr.slice(0, -1);
    return newstr2;
}