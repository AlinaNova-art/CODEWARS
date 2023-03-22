function vowelOne(s){
    var str = "";
    
    for (let i = 0; i < s.length; i++){
      if (s[i] == "a" || s[i] =="e"|| s[i] == "i" || s[i] == "o"|| s[i] =="u" || s[i] == "A" || s[i] =="E"|| s[i] == "I" || s[i] == "O"|| s[i] =="U"){
        str = str + '1';
      }
      else str = str + '0';
    }
    return str;
  }