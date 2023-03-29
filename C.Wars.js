function initials(n){
    let arr = n.split(' ');
    let str = "";
    //let last = arr[arr.length - 1];
      
      //var a = arr[0][0].toUpperCase(); 
      
      //console.log(a);
     
      
      for (let i = 0; i < arr.length; i++){
        str += arr[i][0].toUpperCase(); 
      }
      console.log(str);
      
      var b = arr[arr.length - 1];
      var c = b[0].toUpperCase();
      console.log(c);
      var d = b.substring(1, b.length);
      console.log(d);
      
      var lastn = c + d;
     console.log(lastn);
      var newstr = str.split('').join(".");
    console.log(newstr);
      var result = newstr + d;
      return result;
    }
