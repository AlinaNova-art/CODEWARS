function mergeStrings(first, second) {


    for (let i = 0; i < first.length; i++) {
      var a = first.substring(i, first.length);
      var b = second.substring(0, a.length);
      //console.log(i+' ' + a + ' ' + b);
  
      if (a == b) {
        return first.substring(0, i) + second;
      }
    }
  
    return first+second;
  }