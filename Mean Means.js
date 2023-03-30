function geo_mean(nums, arith_mean) {
    var n = nums.length + 1;
    var sum = 0;

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
    }

    var missedNumber = arith_mean * n - sum;

    nums.push(missedNumber);


    var a = 1;

    for (let i = 0; i < nums.length; i++) {
        a *= nums[i];
    }

    return Math.pow(a, 1 / n);
}