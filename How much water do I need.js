function howMuchWater(water, load, clothes){
    if (clothes > load * 2) return 'Too much clothes';
    else if (load > clothes) return 'Not enough clothes';
    //
    //else return +(water * 1.1 ** (clothes - load)).toFixed(2)
    else return Math.round(100 * water * Math.pow(1.1, clothes - load)) / 100
  }