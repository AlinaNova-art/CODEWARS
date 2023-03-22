function solution(str, ending){
  
var a = str.substring(str.length - ending.length);
return a == ending;
  }