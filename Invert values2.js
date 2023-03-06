function invert(array) {
  
    var newArray = [];
    for (let i = 0; i < array.length; i++){
      var a = array[i] * (-1);
      newArray.push(a);
    }
     return newArray;
    }