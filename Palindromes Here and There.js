function convertPalindromes(numbers) {
    var result = [];
    
    for (let i = 0; i < numbers.length; i++){
      var str = numbers[i].toString();
      var reverse = str.split("").reverse().join("");
      if (str == reverse){
        result.push(1);
      }
      else result.push(0);
      }
      return result;
    }  