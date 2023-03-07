function past(h, m, s){
  var mill1Sec = 1000;
  var millSec = s * mill1Sec;
  var mill1Min = 60 * mill1Sec;
  var millMin = m * mill1Min;
  var mill1h = 60 * mill1Min;
  var millh = h * mill1h;
  var result = millSec + millMin + millh;
  return result;
  }