function alphabetWar(fight)
{
  
  var countL = 0;
  var countR = 0;
  
  for (let i = 0; i < fight.length; i++){
    if (fight[i]== "w"){
      countL += 4;
    }else if(fight[i]== "p"){
      countL +=3;
    }else if(fight[i]== "b"){
      countL +=2;
    }else if(fight[i]== "s"){
      countL +=1;
    }else if(fight[i]== "m"){
      countR +=4;
    }else if(fight[i]== "q"){
      countR +=3;
    }else if(fight[i]== "d"){
      countR +=2;
    }else if(fight[i]== "z"){
      countR +=1; 
    
  }
  }
    if (countR > countL){
      return "Right side wins!";
    }
    else if(countL > countR){
      return "Left side wins!"
    }
    return "Let's fight again!";
}