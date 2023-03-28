function removeSmallest(numbers) {
    var min = numbers[0];
    var newarr = [];
  
    for (let i = 0; i < numbers.length; i++) {
          if (numbers[i] < min) {
              min = numbers[i];
          }
       }
    var a = numbers.indexOf(min);
    
    for (let i = 0; i < numbers.length; i ++){
      if(a != i){
        newarr.push(numbers[i]);
      }
    }
    
    return newarr;
    
    
  }