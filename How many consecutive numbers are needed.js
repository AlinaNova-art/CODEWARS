function consecutive(arr) {
    var min = arr[0];
    var max = arr[0];


    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    if (arr.length == 0 || arr.length == 1) {
        return 0;
    }
    return (max - min + 1) - arr.length;;
}