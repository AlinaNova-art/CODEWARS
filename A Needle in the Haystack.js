function findNeedle(haystack) {
    var count = 0;
    for (let i = 0; i < haystack.length; i++){
      if (haystack[i] == "needle"){
        break;
      }
       count ++;
     } 
       return "found the needle at position " + count;
    }