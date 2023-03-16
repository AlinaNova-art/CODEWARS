function countPositivesSumNegatives(input) {
    var result = [];
    var sum = 0;
    var count = 0;
    var positive = [];
    
    if (input == null || input.length == 0){
      return [];
    }
    
    for (let i = 0; i < input.length; i++) {
        if (input[i] > 0) {
          positive.push(i);
        }
      count = positive.length;  
      }
    
    for (let i = 0; i < input.length; i++){
  
      if(input[i] < 0){
        sum += input[i];
    }
      var result = [count, sum];
      }
      return result;
      
  }