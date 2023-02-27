function countSheeps(arrayOfSheep) {
    var trueSheeps = 0;
    for (let i = 0; i < arrayOfSheep.length; i++) {
      if (arrayOfSheep[i] == true){
        //console.log(arrayOfSheep[i]);
        trueSheeps = trueSheeps+1; 
      }
     
    }
     return trueSheeps;
    
    
    
    // TODO May the force be with you
  }