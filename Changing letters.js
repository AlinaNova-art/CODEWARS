function swap (string) {
    var newstr = "";
      for (let i = 0; i < string.length; i++) {
          if (string[i] == "a" || string[i] =="e"|| string[i] == "i" || string[i] == "o"|| string[i] =="u"){
         newstr += string[i].toUpperCase(); 
    }
        else newstr += string[i];
        }
    return newstr;
  }