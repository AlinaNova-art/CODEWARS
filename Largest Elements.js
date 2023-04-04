function largest(n, array) {

    var arr = [];
    array.sort((a, b) => b - a);

    for (let i = 0; i < n; i++) {
        arr.push(array[i]);
    }
    arr.sort((a, b) => a - b);
    return arr;
}


/*
function largest(n, array) {
 
    var arr = [];
    array.sort((a, b) => b - a);

    for (let i = 0; i < n; i++) {
        arr.push(array[i]);
    }
    arr.reverse();
    return arr;
}


*/

