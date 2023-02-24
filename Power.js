function numberToPower(number, power){
  console.info(Math.log2(1024));
  var result=1;
  for (var i = 1; i != power; i++)
  {
  result = result*number;
  }
  
  return result;
}