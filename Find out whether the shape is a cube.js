var cubeChecker = function(volume, side){
    if (side <= 0){
      return false;
    }
    return volume==side*side*side;
    }
  
   