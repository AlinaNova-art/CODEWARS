function getAverage(marks){
  var sum = 0;
  for (var i = 0; i < marks.length; i++) {
    sum += marks[i];
  }
  var res = Math.floor(sum / marks.length);
  return res;
               
}