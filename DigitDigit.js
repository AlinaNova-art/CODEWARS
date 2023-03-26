function squareDigits(num){
  var arr = Array.from(num.toString(), Number);
  var arr2 = [];
  for (let i = 0; i < arr.length; i++){
    arr2.push(Math.pow(arr[i], 2));
  }
  return +arr2.join('');;
}