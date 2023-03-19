function disemvowel(str) {
  
    var arr = str.split("");
    var arr2 = [];
    
      for (let i = 0; i < arr.length; i++){
        if (arr[i] != "a" && arr[i] != "e" && arr[i] !="i" && arr[i] != "o" && arr[i] !="u" && arr[i] != "A" && arr[i] != "E" && arr[i] !="I" && arr[i] != "O" && arr[i] != "U"){
          arr2.push(arr[i]);
        }
       } 
    var newstr = arr2.join("");
         return newstr;
      }
  