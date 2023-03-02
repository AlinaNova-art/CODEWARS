function solution(str){
    //Array.from(str);
    
    var str1 = "";
    for (let i = 0; i < str.length; i++){
     str1 =  str[i] + str1;
      
    }
    return(str1);
  }