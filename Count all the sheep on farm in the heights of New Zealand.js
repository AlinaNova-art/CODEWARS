function lostSheep(friday,saturday,total){
  var sum1 = 0;
  var sum2 = 0;
  var sum;
  
  for (let i = 0; i < friday.length; i++){
    sum1+= friday[i];
  }
   for (let i = 0; i < saturday.length; i++){
    sum2+= saturday[i];
  }
  sum = sum1+sum2;
  return total - sum;  
}