function noOdds(values) {
    var arr = [];

    for (let i = 0; i < values.length; i++) {
        if (values[i] % 2 == 0) {
            arr.push(values[i]);
        }
    }
    return arr;
}