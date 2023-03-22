function divCon(x){
  
let sumstr = 0;
let sumnum = 0;   

  
  for (let i = 0; i < x.length; i++){
    if(typeof(x[i]) == "number"){
     sumnum += x[i]; 
    } else sumstr += Number(x[i]);
    
  }

     return sumnum - sumstr;
    
  }
  
  