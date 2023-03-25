function solution(start, finish) {
    var result;
    var a = finish - start;
    var remainder = a % 3;
   /* if (a % 3 == 0){
      result = a / 3;
    }
    else if (remainder == 1){
      result = Math.floor(a/3) + 1;
    }
    else result = Math.floor(a/3) + 2;
      return result;
    }
    
  
  
  if (a % 3 == 0){
      result = a / 3;
    }
    else if (remainder == 1){
      result = (a - remainder) / 3 + 1;
    }
    else result = (a - remainder) / 3 + 2;
    return result;
    } 
  */
  
  return Math.floor(a/3)+a%3;
  //return (a-remainder) / 3 + remainder;
    }