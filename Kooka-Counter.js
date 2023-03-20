var kookaCounter = function(laughing) {
  var arr = laughing.split("a");
  
  var result = 0;
  for (let i = 1; i < arr.length; i++){
    if (arr[i] !=  arr[i - 1]) {
      result++;
    }
  }
  return result;
}