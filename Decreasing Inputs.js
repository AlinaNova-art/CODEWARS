function add() {
  const args = Array.from(arguments);
  
  var sum = 0;
  for (let i = 0; i < arguments.length; i++){
  sum += arguments[i] / (i + 1); 
  }
  return Math.round(sum);
}