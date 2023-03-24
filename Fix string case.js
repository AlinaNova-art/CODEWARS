function solve(s){
    var countU = 0;
    var countL = 0;
    var newstr;
    
    for (let i = 0; i < s.length; i++){
      if (s[i] == s[i].toUpperCase()){
        countU += 1;
      }
      else countL += 1;
     
    }
    
    
    if (countU > countL){
      newstr = s.toUpperCase();
    }
    else newstr = s.toLowerCase();  
    
  return newstr;
  }