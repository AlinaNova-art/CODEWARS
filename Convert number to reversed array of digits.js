function digitize(n) {
    var arr = String(n).split('').map(Number);
    var arr2 =[];
    
    for (let i = 0; i < arr.length; i++){
      arr2.unshift(arr[i]);
    }
  return arr2;
  }