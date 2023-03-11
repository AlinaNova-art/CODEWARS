String.prototype.toAlternatingCase = function () {
    return this.split("").map(changeCase).join("");
   } 
  
  function changeCase(s) {
    if (s.toLowerCase() === s) {
      return s.toUpperCase();
    }
    else return s.toLowerCase();
    }
  
  