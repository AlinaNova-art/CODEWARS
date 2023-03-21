function bandNameGenerator(str) {
  var result = "";
  
  if (str[0] == str[0].toLowerCase()){
    var a = str[0].toUpperCase();
    var newstr = str.substring(1)
    result = "The " + a + newstr;
  }
 if (str[0] == str[str.length - 1]){
  var b = str[0].toUpperCase();
  var newstr2 = str.substring(1);
  result = b + newstr2 + newstr2;
}
return result;
}