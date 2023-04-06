function isItANum(str) {

    var newstr = "";


    for (let i = 0; i < str.length; i++) {
        if (str[i] >= '0' && str[i] <= '9') {
            newstr += str[i];
        }
    }

    if (newstr[0] != "0" || newstr.length != 11) {
        return "Not a phone number";
    }

    return newstr;

}