function findDifference(a, b) {
  var volume1 = a[0] * a[1] * a[2];
  var volume2 = b[0] * b[1] * b[2];
  var result;
  
  if (volume1 > volume2) {
    return result = volume1 - volume2;
}
  else 
    return result = volume2 - volume1;
  }
