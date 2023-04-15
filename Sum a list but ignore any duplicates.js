function sumNoDuplicates(numList) {
    var sum = 0;
    var arr = [];

    for (let i = 0; i < numList.length; i++) {
        let a = numList[i];
        let aIsInArray = false;
        
        for (let j = 0; j < numList.length; j++) {
            if (a == numList[j] && j != i) {
                aIsInArray = true;
                break;
            }
        }
        if (!aIsInArray) {
            arr.push(a)
        }

    }

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}