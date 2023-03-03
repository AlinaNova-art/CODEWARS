function powersOfTwo(n){
  var result = 1;
  var arr = [];
  
  for (i = 0; i <= n; i++){
    arr.push(result);
    result = result * 2;  
  }
  
  return arr;
}