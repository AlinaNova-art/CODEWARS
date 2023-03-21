function bandNameGenerator(str) {

    if (str[0] == str[str.length - 1]) {
        var a = str[0].toUpperCase();
        var newstr = str.substring(1);
        return a + newstr + newstr;
    }

    var b = str[0].toUpperCase();
    var newstr2 = str.substring(1)
    return "The " + b + newstr2;

}




