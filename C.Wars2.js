function initials(n) {
    let arr = n.split(' ');
    let str = "";


    for (let i = 0; i < arr.length; i++) {
        str += arr[i][0].toUpperCase();
    }

    var b = arr[arr.length - 1];

    var d = b.substring(1, b.length);

    var newstr = str.split('').join(".");

    var result = newstr + d;

    return result;
}