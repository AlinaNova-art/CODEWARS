function bitMarch(n) {
    var shift = 0;
    var result = [];
    for (let j = 0; j < 8 + 1 - n; j++) {
        var arr = [];


        for (let i = 0; i < 8; i++) {
            if (i >= shift && i < n + shift) {
                arr.push(1);
            }
            else arr.push(0);
        }
        shift++;

        arr.reverse();
        result.push(arr);
    }


    return result;
}