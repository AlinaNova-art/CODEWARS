function keepOrder(ary, val) {
    var result = -1;
    for (let i = 0; i < ary.length; i++){
      if (val > ary[i]){
        result = i;
      }
   } 
    return result+1;
  }
  