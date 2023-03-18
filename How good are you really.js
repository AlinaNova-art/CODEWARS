function betterThanAverage(classPoints, yourPoints) {
    classPoints.push(yourPoints);
    
    var sum = 0;
    var average;
    for (let i = 0; i < classPoints.length;i++){
      sum += classPoints[i];
    }
    average = sum / classPoints.length;
    
    if (yourPoints > average){
      return true;
    }
    return false;
    }
  
  