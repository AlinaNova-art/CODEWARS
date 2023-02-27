var cubeChecker = function(volume, side){
    if (side <= 0 || volume <= 0){
      return false;
    }
    var width = Math.pow(volume, 1/3);
    if (Math.abs(width-side) < 0.00001){
      return true;
    }
  
    return false;
  };