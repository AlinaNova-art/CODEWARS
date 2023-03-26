function highAndLow(numbers){
    var strings = numbers.split(" ");
    
    var numbers = [];
    
  for (let i = 0; i < strings.length; i++) {
    let el = strings[i];
    numbers.push(Number(el));
  }
  
  var max = Math.max(...numbers);
   var min = Math.min(...numbers); 
    
    var str1 = String(max);
    var str2 = String(min);
    
    return str1 + " " + str2;
    }