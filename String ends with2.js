function solution(str, ending){
  // TODfunction solution(str, ending){
  
//var a = str.substring(str.length - ending.length);
//return a == ending;

if(ending == ""){
  return true;
  
}
  let j = ending.length - 1;
  
  for (let i = str.length - 1; i >= 0; i--){
    let endstr1 = str[i];
    let endstr2 = ending[j];
    
    if (endstr1 != endstr2){
      return false;
    }
    
    j--;
    if (j < 0){
      return true;
    }
  
  }
  return false;
  }
  