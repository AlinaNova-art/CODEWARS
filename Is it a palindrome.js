function isPalindrome(x) {
    var reverse = x.split("").reverse().join("");
    if (x.toUpperCase() == reverse.toUpperCase()) {
      return true;
    }
  return false;
  }
  
 