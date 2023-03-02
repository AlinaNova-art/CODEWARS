function addLength(str) {

    let arr = str.split(' ');
    let arr1 = [];
    for (let i = 0; i < arr.length; i++) {  
     var length1 = arr[i].length;
      var str1 = arr[i] + " "+ length1;
      arr1.push(str1);
      }
  return arr1;
    }
  