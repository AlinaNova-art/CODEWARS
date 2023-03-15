function realNumbers(n) {
    var arr = [];
  
    for (let i = 1; i <= n; i++) {
      if (i % 2 != 0 && i % 3 != 0 && i % 5 != 0) {
        arr.push(i);
      }
    }
  
  var result = arr.length;
  return result;
  
  }
  