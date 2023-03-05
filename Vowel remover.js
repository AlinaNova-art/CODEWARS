//function shortcut (string) {
 // var newstr = string.replace(/[aeiou]/g, '')
 // return newstr;
//}

function shortcut (string) {
  var newstr = string.replaceAll('a', '')
      .replaceAll('e', '')
      .replaceAll('i', '')
      .replaceAll('o', '')
      .replaceAll('u', '');
  
  return newstr;
}