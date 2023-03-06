function reverseWords(str){
    var arrayOfStr = str.split(" ");
    
    var result = [];
    for (let i = 0; i < arrayOfStr.length; i++) {
    result.unshift(arrayOfStr[i]);
      
    }
    var newstr = result.join(' ');
    return newstr;
  }