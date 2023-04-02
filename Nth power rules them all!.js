function modifiedSum(a, n) {
  var sumPowers  = 0;
  var sum = 0;
  
  for (let i = 0; i < a.length; i++){
    sumPowers += Math.pow(a[i], n);
  }
  
   
  for (let i = 0; i < a.length; i++){
    sum += a[i];
  }
  
  return sumPowers - sum;
}