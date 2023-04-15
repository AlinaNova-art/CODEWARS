function geometricSequenceElements(a, r, n) {
    var arr = [];

    var b = a;

    for (let i = 0; i < n; i++) {
        arr.push(b);//arr.push(a*Math.pow(r, i));
        b = b * r;
    }
    var str = arr.join(", ");

    return str;
}