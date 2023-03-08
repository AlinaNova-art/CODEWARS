var countSquares = function(cuts){
  var n = cuts;
  var result;
  if (n == 0) {
   return result = 1;
  }
  else return result = Math.pow(n+1,3) - Math.pow(n-1,3);
}
