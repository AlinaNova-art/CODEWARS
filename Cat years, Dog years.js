
 
var humanYearsCatYearsDogYears = function(humanYears) {
   var catYears = 0;
   var dogYears = 0;
 
  
  if (humanYears >= 1){
   catYears = 15;
  }
 if (humanYears >= 2){
    catYears += 9;
 } 
  for (let i = 0; i < humanYears - 2; i++) {
     catYears += 4;
  } 
 

if (humanYears >= 1){
   dogYears = 15;
  }
 if (humanYears >= 2){
    dogYears += 9;
 } 
  for (let i = 0; i < humanYears - 2; i++) {
     dogYears += 5;
  } 
  
return [humanYears,catYears,dogYears];
}



var humanYearsCatYearsDogYears = function(humanYears) {
   var catYears = 0;
   var dogYears = 0;
 
  
  if (humanYears >= 1){
   catYears = 15;
  }
 if (humanYears >= 2){
    catYears += 9;
   }
  if (humanYears >= 3){
    catYears += 4 * (humanYears-2);
  }
   
  if (humanYears >= 1){
   dogYears = 15;
  }
 if (humanYears >= 2){
    dogYears += 9;
   }
  if (humanYears >= 3){
    dogYears += 5 * (humanYears-2);
  }
   
  return [humanYears, catYears, dogYears];
}




  
  