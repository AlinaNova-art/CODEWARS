/*function insertDash(num) {
    var str = String(num);
    var newstr = "";

    for (let i = 0; i < str.length; i++) {
        let num = Number(str[i]);
        if (str[i] % 2 == 1 && str[i + 1] % 2 == 1) {
            newstr += str[i] + "-";
        } else newstr += str[i];
    }
    return newstr;

}
*/


function insertDash(num) {
    var str = String(num);
    var newstr = "";

    for (let i = 0; i < str.length; i++) {
    
        if (Number(str[i]) % 2 == 1 && Number(str[i + 1]) % 2 == 1) {
            newstr += str[i] + "-";
        } else newstr += str[i];
    }
    return newstr;

}

