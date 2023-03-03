const quarterOf = (month) => {
  
    var quater;
    if (month <= 3){
      quater = 1;
    }
    else if(month > 3 && month <= 6){
      quater = 2;
    }
    else if(month > 6 && month <= 9){
      quater = 3;
    }
    else quater = 4;   
  return quater;
  }